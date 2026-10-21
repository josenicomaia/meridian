import assert from 'node:assert/strict'
import { writeFile } from 'node:fs/promises'
process.env.MERIDIAN_CREDENTIALS_READONLY = '1'
process.env.MERIDIAN_TELEMETRY_PERSIST = '0'

const source = '/tmp/meridian-backlog-revisit-20261021/readonly-source'
const out = '/tmp/meridian-backlog-revisit-20261021/1400-prerequisite-public.json'
const nativeFetch = globalThis.fetch
let current
globalThis.fetch = async (input, init) => {
  assert.equal(typeof input, 'string')
  assert(['https://api.anthropic.com/api/oauth/usage', 'https://api.anthropic.com/api/oauth/profile'].includes(input))
  assert.equal((init?.method ?? 'GET').toUpperCase(), 'GET')
  const kind = input.endsWith('/usage') ? 'usage' : 'profile'
  assert(current && current[kind + 'Requests'] === 0, 'At most one read of each endpoint per profile')
  current[kind + 'Requests']++
  const response = await nativeFetch(input, { ...init, signal: AbortSignal.timeout(10_000) })
  current[kind + 'HTTP'] = response.status
  return response
}

const { loadProfilesFromDisk } = await import(source + '/src/proxy/profiles.ts')
const { createPlatformCredentialStore } = await import(source + '/src/proxy/tokenRefresh.ts')
const { fetchOAuthUsageResult } = await import(source + '/src/proxy/oauthUsage.ts')
const profiles = [], identities = new Set()
for (const [ordinal, profile] of loadProfilesFromDisk().entries()) {
  const type = profile.type ?? (profile.oauthToken ? 'oauth-token' : profile.claudeConfigDir ? 'claude-max' : 'other')
  const row = { ordinal, type, refreshCalls: 0, credentialWrites: 0, usageRequests: 0, profileRequests: 0 }
  profiles.push(row)
  current = row
  if (type !== 'claude-max') continue
  try {
    const platformStore = createPlatformCredentialStore({ claudeConfigDir: profile.claudeConfigDir })
    const store = { read: () => platformStore.read(), write: async () => { row.credentialWrites++; throw new Error('Credential write forbidden') } }
    const oauth = (await store.read())?.claudeAiOauth
    row.unexpired = !!oauth?.accessToken && oauth.expiresAt > Date.now()
    if (!row.unexpired) continue
    const result = await fetchOAuthUsageResult({ store, profileId: 'owned-readonly-20261021-revisit-' + ordinal, refreshImpl: async () => { row.refreshCalls++; return false } })
    row.error = result.error
    row.fresh = !!result.snapshot && !result.snapshot.stale
    row.extraUsageDisabled = result.snapshot?.extraUsage?.isEnabled === false
    const windows = result.snapshot?.windows ?? []
    const global = windows.filter(w => ['five_hour', 'seven_day'].includes(w.type))
    const fable = windows.filter(w => /fable|omelette/.test(w.type))
    const active = w => typeof w.utilization === 'number' && (w.resetsAt === null || w.resetsAt > Date.now())
    row.globalWindowsPresent = global.length === 2 && global.every(active)
    row.globalExhausted = global.some(w => active(w) && w.utilization >= 1)
    row.fableWindowPresent = fable.some(active)
    row.fableWindowExhausted = fable.some(w => active(w) && w.utilization >= 1)
    row.selectiveExhaustion = row.fresh && row.extraUsageDisabled && row.globalWindowsPresent && !row.globalExhausted && row.fableWindowExhausted
    const response = await fetch('https://api.anthropic.com/api/oauth/profile', { headers: { Authorization: 'Bearer ' + oauth.accessToken, Accept: 'application/json', 'anthropic-beta': 'oauth-2025-04-20' } })
    if (response.ok) {
      const identity = (await response.json()).account?.uuid
      row.accountIdentityPresent = typeof identity === 'string'
      if (typeof identity === 'string') identities.add(identity)
    }
  } catch (error) { row.failureType = error?.name ?? 'UnknownError' }
  assert.equal(row.refreshCalls, 0)
  assert.equal(row.credentialWrites, 0)
}
current = undefined
const report = { capturedUTC: new Date().toISOString(), scope: 'Read-only supported usage/profile prerequisite; at most one GET per endpoint per existing unexpired profile. Zero inference, credential refresh/write, grant, paid usage or quota burn. No account identifiers, credential paths, utilization or reset times retained.', distinctAccountsConfirmed: identities.size, modelSpecificExhaustedWithOtherCapacity: profiles.some(x => x.selectiveExhaustion), profiles }
await writeFile(out, JSON.stringify(report, null, 2) + '\n', { mode: 0o600 })
console.log(JSON.stringify(report))
