Final review for `f60eba47a31a09a9eeec2e2d2f374a457793f766` against `3667a1555e104d0d82fee180eedfde68ab218390` supersedes the dated acceptance status below. Priority attempts retain the request owner’s abort link until completion, so nonstream disconnects, watchdog and parent-subtree cancellation stop the original native/provider work before teardown. Public interfaces, model/routing choices and timeouts are unchanged.

- Final local `npm test`: **7098 pass, 36 skip, 0 fail**, all25isolated Bun groups; focused/typecheck/build exit0. All eight executed final-head CI checks pass, with expected changelog skip. [Required test](https://github.com/rynfar/meridian/actions/runs/39490614464/job/118862484976).
- **24 qualified actual cases / 44 Sonnet5.5 generations**, real SDK0.2.141, independently installed exact packages, Macarm64/native2.1.302 and Linuxarm64/native2.1.301. Baseline nonstream/watchdog/subtree failures and candidate releases are causal. Queued cancellation and literal native Escape already pass on baseline and remain positive controls. All four actual E41 modes preserve tool-result pairing, durable forks, unchanged parent histories and prompt-cache continuity. Exact provider/native/original-child/public-stored IDs correlate; interrupted cancellation sessions explicitly retain any absent completed SDK assistant.
- The actual critical HTTP gate is committed as `scripts/e2e-priority-cancellation.mjs` and `scripts/lib/priorityCancellationHost.mjs`. Original exit/close/stdout/stderr custody joins before its native home/config/session fixture is removed. Every new Linux container used `--rm`; no task container remains. The owner’s disk cleanup removed42completed/held worktrees,44generated install/cache trees and18completed native roots while preserving the dirty root. This item’s remaining worktrees/installs will be removed after merge verification.
- The old recorder’s out-of-scope `row` failure remains historically UNKNOWN for upstream method/status/generation count. Exact zero-model aborted-HEAD repair, prior original-pipe/identity/queued-expectation fixture errors and Linux missing-machine-id startup refusal are retained with causal corrections. No actual inference failure was retried to get green, and every older hold is unchanged.
- All final14introduced commit objects are GitHub-verified signed; all10previously recorded objects and their Author/AuthorDate/committer records remain unchanged. Use the owner-approved#1413 forwarded **neutral merge**, without squash/admin/rebase/re-signing, retaining =DEX and Noah’s actual Git authorship.

[Complete evidence, adversarial review, exact scripts and archive manifest](https://github.com/rynfar/meridian/blob/b5a9f2a81902cd717aec7592c01217ff0afd5aec/docs/maintenance/evidence/1397-cancellation-20261020/README.md). Remote archive SHA256 `e62a7b32502f3e774cafba5648cf5d1e6491a4d15bfa67fe3abf475ec51bb340` was verified byte-for-byte. First four Mac core cases used acbe; production source is identical at finalf60, which adds the repository harness/docs. Candidate platform installs were updated in place and every packed file matches finalf60.

Limits: Linux live proof is arm64; no actual Windows/Linuxx64 claim. HTTP/provider closure and native termination are observed; invoice-level post-cancel billing is not measured. The real pool contains a paid-disabled Team account and a known-exhausted personal spare denied before forwarding; only Team inferred. E41 selected Team alone. No two-healthy-account/failover/quota-recovery claim, credential refresh/write or paid usage was enabled. The original dated “live evidence owed” checklist below is superseded by these completed receipts.

---

Prior description and review record, preserved verbatim:

## Summary

Under `active+priority` routing, the request's abort link was detached while the first priority attempt was still running. As a result, none of these reached the SDK child:
- a client going away
- the session-turn watchdog
- a parent session's subtree cancellation
- shutdown

The model ran on to the end of its turn, on the account's allowance. Now only the handler that made a link detaches it. The admission owner detaches the request's link once the request is over.

## What changed

- `src/proxy/server.ts`: `handleMessages` records whether it made its abort link (`ownsAbortLink`). All three detach sites (stream finally, stream `cancel`, handler finally) detach only an owned link. The priority dispatch returns from inside the handler's `try` while its attempts are still running, so the old detach-on-return left every attempt deaf.
- `src/__tests__/priority-client-cancel.test.ts` (new): HTTP tests with the mocked SDK and 3 s turns. Each priority case must stop the model and end the request within 1.5 s:
  - a plain request
  - a stream cancelled before its first byte
  - a request on the account a failover reached
  - a turn the session-turn watchdog stops
  - a child turn stopped by its parent session's cancellation, with the child's own client still connected
  - a turn stopped by shutdown (`forceAbortInFlight`)
  - a manual-routing control
- `scripts/e2e-claude-code-priority-cancel.mjs` (new, offline): the real Claude Code client, the built proxy under Node, the SDK and the CLI, against a scripted API that holds the first byte. No model calls.
  - Client legs kill the client.
  - Watchdog legs keep the client and set a 4 s session-turn hold.
- `E2E.md`: a "Priority-routed cancel stops the model (E87)" section after the priority failover section.
- `ARCHITECTURE.md`: the abort-link ownership rule, next to the priority stream relay.

**Effect on current main:** since #1350 a priority-routed stream sends its headers early. So a streaming client that went away was already stopped, because its response body was cancelled. What was still deaf, and is fixed here:
- a non-streaming client going away
- the session-turn watchdog
- subtree cancellation
- shutdown

#1383 (watchdog timer cleanup) is a separate fix. This change is what lets the watchdog reach a priority-routed turn at all.

Left out of the source commit: the hunks for the archived parallel-subagents gate and for the session-carry test. Neither file is on main, and both belong to other parts of the source stack. The carry test's "ends at the cancel" check moved into the new test file.

Authored by @eamonster27. Split out of their fork work and rebased onto current main by @passabilities.

Co-authored-by: =DEX <eamonbachari@gmail.com>

## Tests

All runs on main dfe264da, Bun 1.3.14.

- `npm test`: typecheck passed. First segment: 6505 pass, 4 fail. All 4 fail on `main` too:
  - plugin-message-consumption "model fallback retains the transformed replay source" (stream=false, stream=true)
  - proxy-concurrency-coordination "clears the session-turn watchdog timer…"
  - passthrough-early-stop "naturally closes failed recovery…": a load flake that passes 161/0 when run alone
- Remaining isolated files, run one by one: 23 files, 463 pass, 1 fail. The failure is the known store-mutation-loop-lag timing case under load.
- `npm run typecheck` and `npm run build`: pass.
- Focused files, all green: active-priority-integration 19/0, proxy-session-tree-cancellation 12/0, request-abort-cause 12/0, telemetry-route-chain 26/0, graceful-shutdown 10/0.
- `priority-client-cancel.test.ts`:

| Server | Pass | Fail | Note |
|---|---|---|---|
| main | 1 | 6 | only the manual control passes; each priority turn runs its full 3 s |
| this branch | 7 | 0 | |

- Offline gate, Claude Code 2.1.301, Linux x64, Node 22.13.0, measured against ca716c36. `server.ts` is unchanged by the later main commits.

| Leg | main (ca716c36) | This change |
|---|---|---|
| manual, client killed | closed 1,487 ms after | closed 1,487 ms after |
| active+priority, client killed | closed 1,484 ms after | closed 1,523 ms after |
| manual, 4 s watchdog | closed 3,147 ms after | closed 3,326 ms after |
| active+priority, 4 s watchdog | 1 request still open 20 s later (FAIL) | closed 3,202 ms after |

**Untested:** the two stream-path detach lines (stream `finally` and stream `cancel`). They change only the path where the handler made its own link. No production caller reaches that path: both `handleMessages` call sites pass the request's link, and `handleMessages` is internal, so no test can reach it without widening the module surface.

## Live evidence

Present:
- The offline gate only: real client, SDK and CLI against a scripted API. No model, no account.
- Subtree cancellation and shutdown are shown only with the mocked SDK. The offline gate runs the client and watchdog legs.

Not re-run against this build:
- The source's single run of this gate (2026-10-06, client 2.1.291, platform not recorded, on the source branch before main's streaming priority relay).

Owed:
- A real account pool under `active+priority`, each case stopping the model:
  - Esc on a Claude Code turn that is still thinking
  - a non-streaming client that goes away
- An orchestrator cancelling priority-routed subagents still queued for an SDK slot or starting their CLI.
- The session-turn watchdog stopping a priority-routed turn on a real model.
- macOS (the contributor's platform) and Linux.

Not covered:
- The proxy run under Bun. Under Bun 1.3.14, @hono/node-server is never told of a client that goes before the first byte. This is the source's observation and was not re-checked here.

## Adversarial review

- **Correct on current main?** Yes.
  - The handler returns `dispatchPriority(...)` from inside its `try` without awaiting it. Its `finally` then detached the admission owner's link while the first attempt was still in flight.
  - The fix detaches only a link the handler created. Both production callers pass the owner's link, so the handler never detaches in production.
  - `finishRequest` → `owner.finish()` detaches the link exactly once. For a priority stream it runs only after the outer relay completion registered in `responseCompletions`.
- **Fails without the fix (mocked SDK):**
  - Against main's `server.ts`: 1 pass / 6 fail. Every priority case fails: client, stream, failover, watchdog, subtree and shutdown.
  - Reverting only the handler-`finally` line breaks the priority cases.
  - Detaching only on inner attempts makes the failover case fail.
- **Still needed after #1350 / #1383?** Yes.
  - #1350 lets a streaming client that goes away cancel the body.
  - Still not stopped on main: a non-streaming client, the session-turn watchdog, subtree cancellation and shutdown. Each of these now has a test that fails on main.
  - #1383 only clears the watchdog timer.
- **Behaviour change.** The priority link now stays attached until the request ends, as manual routing already did.
  - A cancel before terminal finalization now revokes the durable priority publication.
  - That guard already existed (`finalizePriorityPublication`), and terminal bytes are withheld until publication commits. So a client that received `message_stop` cannot lose its mapping.
- **Owned-link path.** A stream on a link the handler made itself now detaches at stream end instead of never. No production caller uses it, and it is untested (see Tests).
- **Overstated source claims, corrected:**
  - The streaming real-client symptom the source measured no longer reproduces on main. The watchdog legs keep the gate discriminating.
  - The source's stale run is described as recorded (client 2.1.291, platform not recorded).
  - The Bun observation is scoped to Bun 1.3.14.
- **Scope.**
  - Taken: the `server.ts` hunks identical to e8360300, its test and its offline gate; from ca46feb2, only the E87 section.
  - Left out: the session-carry test, the parallel-subagents `PROFILES` knob and the Bun startup warning. Each belongs to a separate part of the stack.
- **Boundaries.** Changes are confined to link ownership in `server.ts`. No `as any`, `ts-ignore` or empty catch. The test mock keeps the source's `params: any` annotation, which matches existing mocks.

🤖 Generated with [Claude Code](https://claude.com/claude-code)

## Maintainer continuation (2026-10-20)

Current main, including #1419, #1403, #1395 and #1423, was merged into the existing source branch as separate signed commits. Current head is `b712c4becf6742d8c31f3b7696336e95bf313c1b`; all eight previously recorded source/correction objects remain unchanged. This remains the owner-approved commit-preserving route from #1413, with no squash/admin/rewrite.

The original seven HTTP controls were run against main `30cc1d2` (plus a setup-only compatibility fixture unrelated to cancellation): **1 pass / 6 fail**, with only manual routing stopping the mocked model. Against the contributor fix plus that main: **7 pass / 0 fail**. The current main integration requires a new complete local/CI gate; neither these focused results nor historical CI are presented as final acceptance.

A credentialless interactive PTY preflight now uses actual native Claude Code 2.1.302 frontend, Node proxy, SDK 0.2.141 and pinned native backend on macOS arm64. Literal Escape closes the foreground scripted upstream in **1,583 ms**; original children/pipes join. It performs zero model calls. Native interactive Claude Code also starts an independent title request. A paired manual-routing control identifies that separate request and shows it continues until teardown in both routing modes; foreground cancellation is the asserted scope. Earlier preflight input/trust handling failures and the initial unclassified title witness are retained. This is preparation, not live model or billing acceptance.

Read-only official profile/usage checks establish three distinct, unexpired owned accounts with included capacity and paid extra usage disabled; no identity values, credentials or refresh tokens are logged and no credential is written/refreshed. Account access is available for the pending real pool tests. Required actual Escape/non-stream/watchdog/queued-or-starting-subagent checks on macOS and Linux, all four E41 modes, final local/CI gates and full forwarded provenance remain open. The separate refused Opus load task is not retried or cleared. No release is authorized by this continuation.

Final-head `b712c4becf6742d8c31f3b7696336e95bf313c1b` has passed full local `npm test`: **7,049 / 36 skips / 0 failures**, all 25 isolated invocations, plus standalone typecheck/build and every active CI check. The earlier local run was explicitly stopped and discarded when the main integration changed its checkout; only the unchanged final-head run supplies this gate.

Additional zero-model native controls: on macOS 26.6.2 arm64, actual native 2.1.302 frontend/backend and SDK 0.2.141, main-equivalent watchdog leaves the original foreground connection open **28,297 ms** (fails the unchanged 9-second bound), while the candidate stops it in **3,040 ms** with the interactive client still connected. Node fetch non-stream cancellation similarly fails on main and passes on the candidate; its actual HTTP request is aborted while the SDK/native reasoning stream is active. Debian Linux arm64/Node 24.20.0/native 2.1.301 additionally passes literal interactive Escape (**109 ms**) and the 4-second watchdog. All original native/process/pipe handles join; explicit teardown is distinguished from the measured cancellation. These use scripted upstreams and are not live-model, Linux x64 hardware or billing acceptance. The real pool/actual-model and four-E41 gates remain open.

Forwarded custody currently contains ten introduced objects: the eight original source/review commits plus two signed main merges. All ten signatures verify through GitHub and all original objects remain unchanged. Earlier `e836030083bb1e62f630cdb953fe391a4b067ffb` and `ca46feb25daf7d6331201cf0a62959fc51f4e783` source objects remain accessible. Forwarded copies preserve Author/AuthorDate; the server and original headless gate retain the same nonblank changed lines. The test changes the placeholder profile name `personal` to `spare` in three places; the E87 documentation is a deliberate subset of the larger source document commit. These copied/carved objects are not the original source SHAs, and forwarding signatures do not authenticate the source author.


### Retained inconclusive native-client attempt (2026-10-20)

The first real-model interactive macOS probe crashed in its supplemental recorder while handling an upstream error (`ReferenceError: row is not defined`). It left no durable provider status/completion receipt. Its provider result is **unknown**, not presumed zero-model and not accepted. The case was not automatically retried. No original process had open handles under that owned fixture afterward, and temporary grants were deleted. The recorder scope error is corrected for future independent probes. This does not change contributor product code or clear any live-model acceptance gate. A separate Haiku task subsequently received actual HTTP 429 included-usage rejections; no paid usage or model/account fallback is being used to obtain a pass.
