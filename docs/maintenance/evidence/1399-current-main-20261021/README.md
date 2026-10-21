# PR #1399: current-main compatibility correction, full gate running

Existing forwarded contributor PR #1399 now has signed head **aadbd441911457e7b6fc5cde1c3a21ca9ccfb3d1**. Signed current-main merge **7f1aa14808f3dec52f2e551950ef9eb8a8c8a1bb** retains original7379cd4652af910897480bae3469f6c6e65c3025 as first parent and main075e9e4736d3457e12dda1a0108531b9b5843e96 as second. All10 earlier introduced authored objects remain unchanged ancestors with valid signatures. The separate owner correction is not a rebase or copied contribution. Both new signatures and remote head/mergeability/body are verified. No competing PR or direct main push.

## Reproduced compatibility gap and correction

The current-main server conflict combines source grace-derived retirement limits and dynamic shutdown allowance with main's separate JSON/SQL admission deadlines and joined session-deletion owner. Resolution preserves both sets of behavior.

After that merge, the newer SQL deletion loop did not implement the source's `maxRemainingDeletes` contract. Real SQLite tests reproduce **6 attempts where3 are allowed**, and **one deletion despite a zero limit**. New actual-store proxy embedding-close tests reproduce **64 deletions instead of16** when paused at deletion1, and **64 instead of40** when paused at deletion25. They keep close pending while the physical custom-deleter promise is paused and inspect real SQLite resource state. The same fixed code passes the original JSON cases. The old-loop/new-test mutation is restored exactly before signing.

Separate signed correction aadbd441 applies a monotonically shrinking allowance before the next claim and after each joined settlement, counting failed attempts. A higher later callback cannot replenish it; zero stops before claiming, and negative/fractional/nonfinite/unsafe values fail before deletion. Existing pin, generation/CAS, deletion-owner and uncertain-deleter fences remain unchanged. The SQL case uses an explicitly initialized owned embedding and closeBackend; the original JSON cases still exercise ProxyInstance.close. This avoids a second SQL startup-maintenance pass consuming seeded fixture rows and is a scoped library/server test, not a claim of actual SDK transcript deletion.

Focused default-backend limits/proxy/lifecycle suite: **79 passed / zero failed**. Full SQL lifecycle fixture: **46 passed /15 explicitly legacy-only skips /zero failed**. Standalone typecheck and ordinary certified build pass on the signed final head, using unchanged source certificate/size limits and documented read-only source-page preparation.

**Full local npm test is RUNNING**, verified with session **15163**, after #1396's full controller completed exit0. Controller `run-full.py`, frozen checkout `/private/tmp/meridian-1399-current-main-20261021`, outputs `final-local.json`/`final-full.log`. Archived local-snapshot.json contains build/type only; it is not a full result. No duplicate full suite was started. T3 watches exact-head1399 CI; passing older-head checks do not validate this head.

## Acceptance holds retained

The original bounded Opus pilot/HTTP200 refusals/unrequested4.8 attempt and missing correlated execution/provider evidence remain as recorded in the original PR and durable d7d9ad02720adffc1c8e42e2d229c0b45cbed6f3 witness. Actual native hour-long throughput, no-capacity503, large-store latency and shutdown gates still apply. The new SQL correction additionally needs its real affected SDK flow; custom-deleter/mocked-SDK tests establish the deterministic budget mechanism only. No new model call, paid usage, credential/grant mutation or private transcript access occurred. No acceptance, merge, source closure or release is claimed.

[Exact old/new SQL and proxy-close controls, scripts, both-backend results, source diffs/credit/signature custody, passing build/type and running snapshot](gates.tar.xz), [SHA256 manifest](manifest.json). Only owned fixture/public metadata selected; no private transcripts, customer text or credentials copied.
