import { createHash } from "node:crypto"

/** The native CLI restores its initial system prompt on resume, including forks.
 * Keep a digest of the effective client instructions with the SDK mapping so a
 * changed prompt can use complete client replay instead. No prompt is persisted. */
export function hashClientSystemContext(context: string, includeClient = true): string {
  return createHash("sha256").update(includeClient ? context : "").digest("hex")
}

/** Legacy mappings have no proof of the instructions in their SDK transcript. */
export function requiresSystemContextReplay(storedHash: string | undefined, currentHash: string): boolean {
  return storedHash !== currentHash
}
