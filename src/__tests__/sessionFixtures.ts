/** Explicit instruction proof for HTTP tests seeding a modern, empty-system SDK
 * session. Legacy-mapping tests should call the raw store functions instead. */
export function storeSessionWithEmptySystem(...args: Parameters<typeof import("../proxy/session/cache").storeSession>) {
  const { storeSession } = require("../proxy/session/cache") as typeof import("../proxy/session/cache")
  const { hashClientSystemContext } = require("../proxy/session/systemContext") as typeof import("../proxy/session/systemContext")
  args[13] = hashClientSystemContext("")
  return storeSession(...args)
}
