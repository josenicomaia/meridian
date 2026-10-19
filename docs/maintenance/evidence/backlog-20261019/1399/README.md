# Native cleanup-load gate preparation

Source head `7379cd4652af910897480bae3469f6c6e65c3025` incorporates current main
`6c241a897bdc7ffe4c233d32270a17402b3528a0` without conflict. Capacity/limit
regressions pass 16 tests; typecheck/build and final-head CI pass. The previous
89-failure local gate remains retained. The [fresh complete pinned gate](final-gate-summary.json) passes 7,000 tests / 36 skips / 0 failures over all 24 invocations.

The [actual native-client preflight](native-client-preflight.json) passes three
client requests: real Read, result, resumed receipt. Both native CLI children
join. CLI 2.1.302 is pinned to SHA-256
`5262ce9de86243fed0d21edc39b271555d56780d0112e2b194439fe1c6662d37`.
This preflight uses a loopback provider fixture, not a real model. It qualifies
this newer actual client; it does not claim the original 2.1.284–2.1.294 runs.

The [live driver](run-native-load.mjs) and [observer](native-load-observer.mjs)
are escrowed before inference. They run two actual native clients through the
real proxy, SDK 0.2.141, pinned native child and Haiku 5.5. Only Read is enabled;
the local relay validates every tool/path against owned fixtures before the
native client executes it. Responses are buffered for this guard, so observed
request timings are not streaming first-byte latency. Existing `x-request-id`
tracing correlates exact SDK admission and lifecycle queue measurements; no
agent/session header is manufactured.

A new private access-only grant and both explicit live opt-ins are required.
The read-only official quota guard requires disabled Extra Usage and reserves
at least 25% of the five-hour / 10% of the weekly allowance, rechecking every
minute. No refresh or account setting write occurs. Bounds are one minute for
a pilot or one hour for load, plus two minutes to settle; at most 3,600 actual
provider generations, two clients and three CLI turns per print invocation.
Any provider error, unexpected model, missing quota witness or owned-path guard
stops further inference. All native/provider model metadata is observed without
reading private SDK files. Exact real source head and clean checkout are checked.

Large-store pressure uses up to 19,800 forks of an owned synthetic session via
the supported SDK `forkSession` API, verifying the source remains unchanged.
Only the newly owned Meridian lifecycle fixture index is initialized in bulk,
under its actual local lifecycle queue. Private SDK files are never opened by
the harness. Periodic GC is disabled during this fixture so it can be seeded;
actual publication-triggered GC and default backlog/deletion/grace values stay
in effect. This measures the back-to-back sweep path under load, not idle
periodic scheduling. A full-hour pass requires at least 28 actual SDK queries
per minute, no capacity refusal, correct receipts and joined processes. Close
records active deletion state, elapsed time and at most 16 newly deleted rows.

Run only after the source's local/CI gates and native preflight pass. Start with
a new one-minute/no-seed pilot (`60 0 100` arguments), then review its real model,
routing, request and custody facts before any large run. Baseline/main and
candidate each need new owned output/config/session directories; preserve a
capacity refusal as the baseline result rather than silently rerunning it.
The original hour-long affected-flow acceptance remains open until an actual
complete run establishes it. No live result is claimed in this preparation.
