import { beforeEach, describe, expect, it } from "bun:test"
import type { Options } from "@anthropic-ai/claude-agent-sdk"
import { installSdkMock } from "./sdkMock"
import { installLoggerMock } from "./loggerMock"
import { installMcpToolsMock } from "./mcpToolsMock"
import { assistantMessage, withMockSdkSessionId } from "./helpers"

interface CapturedQuery {
  prompt: string | AsyncIterable<unknown>
  options: Options
}
const captured: Array<{ options: Options; prompt: string }> = []
installSdkMock(() => ({
  query: (params: CapturedQuery) => (async function* () {
    let prompt = ""
    if (typeof params.prompt === "string") prompt = params.prompt
    else for await (const message of params.prompt) prompt += JSON.stringify(message)
    captured.push({ options: params.options, prompt })
    yield withMockSdkSessionId(assistantMessage([{ type: "text", text: "acknowledged" }]), params.options)
  })(),
  createSdkMcpServer: () => ({ type: "sdk", name: "test", instance: {} }),
  tool: () => ({}),
}), "system-context-resume.test.ts")
installLoggerMock(() => ({ claudeLog: () => {}, withClaudeLogContext: (_ctx: unknown, fn: () => unknown) => fn() }))
installMcpToolsMock(() => ({ createOpencodeMcpServer: () => ({ type: "sdk", name: "opencode", instance: {} }) }))

const { createProxyServer, clearSessionCache } = await import("../proxy/server")
const { lookupSharedSession, storeSharedSession } = await import("../proxy/sessionStore")
const { hashClientSystemContext, requiresSystemContextReplay } = await import("../proxy/session/systemContext")

beforeEach(() => { clearSessionCache(); captured.length = 0 })

it("compares effective instructions without storing their text, including an explicit disabled client prompt", () => {
  const digest = hashClientSystemContext("owned instructions")
  expect(digest).toMatch(/^[a-f0-9]{64}$/)
  expect(requiresSystemContextReplay(digest, digest)).toBe(false)
  expect(requiresSystemContextReplay(undefined, digest)).toBe(true)
  expect(hashClientSystemContext("one", false)).toBe(hashClientSystemContext("two", false))
  expect(hashClientSystemContext("one")).not.toBe(hashClientSystemContext("two"))
})

for (const stream of [false, true]) describe(`client system changes (stream=${stream})`, () => {
  it("replays all client history under changed agent instructions, then resumes normally", async () => {
    const { app } = createProxyServer({ port: 0, host: "127.0.0.1", silent: true })
    const session = crypto.randomUUID()
    const messages = [{ role: "user", content: "Remember OWNED_HISTORY_1404." }]
    const post = async (system: string, agent = "build") => {
      const response = await app.fetch(new Request("http://localhost/v1/messages", {
        method: "POST", headers: { "content-type": "application/json", "x-opencode-session": session,
          "x-opencode-agent-mode": "primary", "x-opencode-agent-name": agent },
        body: JSON.stringify({ model: "claude-haiku-5-5", max_tokens: 128, stream, system, messages }),
      }))
      expect(response.status).toBe(200)
      await response.text()
      return captured.at(-1)!
    }
    await post("You are the build agent.")
    const first = lookupSharedSession(session)!
    messages.push({ role: "assistant", content: "acknowledged" }, { role: "user", content: "Now review the remembered work." })
    const switched = await post("You are the reviewer. CANARY-1404.", "reviewer")
    expect(switched.options.resume).toBeUndefined()
    expect(switched.prompt).toContain("OWNED_HISTORY_1404")
    expect(JSON.stringify(switched.options.systemPrompt)).toContain("CANARY-1404")
    const second = lookupSharedSession(session)!
    expect(second.claudeSessionId).not.toBe(first.claudeSessionId)
    expect(second.clientSystemContextHash).toBe(hashClientSystemContext("You are the reviewer. CANARY-1404."))
    messages.push({ role: "assistant", content: "acknowledged" }, { role: "user", content: "Continue the review." })
    const unchanged = await post("You are the reviewer. CANARY-1404.", "reviewer")
    expect(unchanged.options.resume).toBe(second.claudeSessionId)
    expect(unchanged.prompt).not.toContain("OWNED_HISTORY_1404")
    messages.push({ role: "assistant", content: "acknowledged" }, { role: "user", content: "Return to the build role." })
    const returned = await post("You are the build agent.")
    expect(returned.options.resume).toBeUndefined()
    expect(returned.prompt).toContain("OWNED_HISTORY_1404")
    expect(JSON.stringify(returned.options.systemPrompt)).not.toContain("CANARY-1404")
  })

  for (const [before, after] of [["", "New agent instructions"], ["Old instructions", ""], ["Old instructions", "Revised instructions for the same agent"]]) {
    it(`replaces instructions from ${JSON.stringify(before)} to ${JSON.stringify(after)}`, async () => {
      const { app } = createProxyServer({ port: 0, host: "127.0.0.1", silent: true })
      const session = crypto.randomUUID()
      const messages = [{ role: "user", content: "OWNED_HISTORY_TO_KEEP" }]
      for (const system of [before!, after!]) {
        const response = await app.fetch(new Request("http://localhost/v1/messages", {
          method: "POST", headers: { "content-type": "application/json", "x-opencode-session": session },
          body: JSON.stringify({ model: "claude-haiku-5-5", max_tokens: 128, stream, system, messages }),
        }))
        expect(response.status).toBe(200); await response.text()
        messages.push({ role: "assistant", content: "acknowledged" }, { role: "user", content: "Continue." })
      }
      expect(captured.at(-1)!.options.resume).toBeUndefined()
      expect(captured.at(-1)!.prompt).toContain("OWNED_HISTORY_TO_KEEP")
      expect(lookupSharedSession(session)!.clientSystemContextHash).toBe(hashClientSystemContext(after!))
    })
  }

  it("replays a legacy mapping once and resumes after publishing proved instructions", async () => {
    const { app } = createProxyServer({ port: 0, host: "127.0.0.1", silent: true })
    const session = crypto.randomUUID()
    const messages = [{ role: "user", content: "OWNED_LEGACY_HISTORY" }]
    for (let turn = 0; turn < 3; turn++) {
      const response = await app.fetch(new Request("http://localhost/v1/messages", {
        method: "POST", headers: { "content-type": "application/json", "x-opencode-session": session },
        body: JSON.stringify({ model: "claude-haiku-5-5", max_tokens: 128, stream, system: "", messages }),
      }))
      expect(response.status).toBe(200); await response.text()
      if (turn === 0) {
        const stored = lookupSharedSession(session)!
        // An old writer has no instruction proof; force a real durable read.
        storeSharedSession(session, stored.claudeSessionId, undefined, undefined, undefined, undefined,
          undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, null)
      } else if (turn === 1) {
        expect(captured.at(-1)!.options.resume).toBeUndefined()
        expect(captured.at(-1)!.prompt).toContain("OWNED_LEGACY_HISTORY")
      } else {
        expect(captured.at(-1)!.options.resume).toBe(captured.at(-2)!.options.sessionId)
        expect(captured.at(-1)!.prompt).not.toContain("OWNED_LEGACY_HISTORY")
      }
      messages.push({ role: "assistant", content: "acknowledged" }, { role: "user", content: "Continue." })
    }
  })
})
