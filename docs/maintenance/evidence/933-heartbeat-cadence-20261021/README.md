# Heartbeat cadence false failure: #933 / #1435

Necessary owner test-only [#1435](https://github.com/rynfar/meridian/pull/1435), signed head206f5968741f6ae971df7e428533340aaee65632 on mainbe790, changes only the heartbeat helper and eight direct acceptance controls. GitHub verifies the owner's signature and Author. **Final local full and CI are pending; do not merge yet.** The existing candidate/dependencies are reused; no worktree/install/Docker is added.

## Reproduced cause

During original #1220's local full, the unchanged heartbeat fixture rejected a ten-tick sample. Its full vector was not retained, so that individual sample's gap is unknown. A subsequent instrumented diagnostic reproduced the same rejection with all native Node samples captured:11/12/13callbacks, elapsed81.741/81.878/82.878ms and max gaps11.010/10.048/10.244ms. The old floor13 rejects the first two although their existing25msmaximum-gap and80msdeadline checks pass. An unchanged-main isolated control produced15callbacks/gaps below6.2ms and passed, confirming the cadence-dependent nature rather than resolving the earlier failure by a green retry.

The sampler still requests5ms. Acceptance requires a callback and the existing25msmaximum-gap bound, no early expiry and strict50mslate-expiry allowance. [Node scheduling depends on event-loop work](https://nodejs.org/api/timers.html#scheduling-timers). No production code, dependency, timeout or actual model call changes.

## Adversarial proof

Old helper:5pass/3fail in the new eight-case contract. The failed valid schedules include8msjitter, the captured eleven-tick pattern and the existing25msgap boundary. Corrected helper:8pass. Controls retain a silent short20msobservation rejection, complete blocking rejection, a40msgap despite40callbacks, early expiry and the exactlate boundary. Three isolated mutants omit callback/gap/deadline checks and each fail; original bytes are restored.28focused cases pass including all20native transaction cases and actual three-Node-writer contention. Typecheck/build pass at206; full is still running. [Exact logs, vectors, controllers and source](checkpoint-manifest.json).

This is one specific false failure associated with #933; the broader issue stays OPEN. Original #1220 still has its unchanged200-token Opus cache-prefix gate. That missing original causal proof is not replaced by this test correction.

## Held #1220 source correction checkpoint

Original Nowaker source remains remoteb1ff. Local original branch is nowf7aead136f0c2c4c219ea7e7e18a016e09d27638, not pushed. Its full-r2 on5721 completed7581pass/36skip/4fail/1error in the first26-group invocation; later isolated groups did not run. Three failures are fixture migrations now correctedf7: await/trace actual asynchronous FileHandle durability, await the dynamically imported account-return eviction, and retain native SQL flag checks while recognizing the explicit JSON-only branch. The complete failed log and final f7 source diff are archived. Focused corrections and strict typecheck pass. The fourth failure is the cadence criterion above. No whole-PR qualification or model success is claimed.

After1435delivers, switch the reused candidate back to original f7, merge fresh main and run final source qualification. Push the contributor branch nonforce after local gates so final-head CI can run. Original live acceptance remains an independent premerge gate. Do not create a maintainer copy, force/rebase authored commits, or treat old greens as current.

Goal ACTIVE. Root446a and its12dirty-file bytes remain preserved. Only one candidate and this evidence worktree are task-owned. #1243's exact decline-comment/closure question is still unanswered; no external comment or closure. No release or Apple action.
