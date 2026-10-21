# Current #1220 process-capture fixture correction

Original Nowaker branch is now `92222508248478a1e1e647209c0b99f49deec63a`, nonforce-updated from `eaee8d82edb17458cdf5cce47e5e135b31c047b8` (EA). Actual fork ref and PR head match; the new human Author and GitHub signature are verified. Earlier fifteen introduced objects are unchanged; original `b1fffe4a` remains an ancestor. The new delta changes only `bookkeeping-lifecycle-transitions.test.ts`; production, dependencies, runtime guard and timeouts are unchanged.

**Verification candidate, not accepted or merged.** EA completed all twenty-six local groups: 8,102 pass / 36 skip / 0 fail, typecheck/build successful. Its Linux CI then failed with 7,606 pass / 28 skip / 1 fail: the expected lifecycle rejection passed, but a global process-capture spy saw one call. Its producer stack was not retained, so the exact original caller is unproven. All seven other executed contexts passed; the changelog skip was expected.

The test now uses AsyncLocalStorage around the refused invocation and delegates every process-capture call to the actual implementation. It records bounded producer stacks only from that invocation, including its asynchronous continuations. This preserves the no-capture assertion without attributing unrelated background work to the operation.

Discriminating controls on the actual test and production function:

- Original test plus an unrelated real queued-microtask capture: exit 1.
- Corrected test with that same unrelated capture: exit 0.
- Corrected test with a real capture inserted before the production guard: exit 1; the producer stack identifies lifecycleLeasesSql.ts.
- Corrected test with a real capture after an await inside that guard: exit 1 with the same producer attribution.

Temporary test/production bytes were restored and hash-verified. All eighteen affected-file cases and standalone typecheck pass. Current head standalone typecheck/build and full local r8 now pass: **8,102 pass / 36 skip / 0 fail across all twenty-six groups**, full exit0 in784.94seconds. Controller99240 is terminal. [Complete exact-head local gates and generated-cache cleanup receipt](capture-scope-final-local.tar.xz), [member hashes](capture-scope-final-local-manifest.json), supersede the earlier incomplete snapshot. All eight executed final-head hosted checks now pass, including [required Linux test](https://github.com/rynfar/meridian/actions/runs/39544061173/job/119038117724): **8,110 pass / 28 skip / 0 fail across all twenty-six Linux groups**. The changelog skip is expected. [Complete hosted log, exact-head check snapshot, fresh queue discovery and verified delivery inventory](hosted-final.tar.xz), [member hashes](hosted-final-manifest.json). No check was bypassed; the PR remains open because the independent original acceptance gates below remain unresolved.

## Earlier failures and actual acceptance gates remain

r6 at3ea2 failed 7,573 / 36 / 2 in the first group: unchanged two-second post-build source-fingerprint deadline and initializer exits [0,1] with discarded stderr. Fingerprint observations at 0.57–0.78s and twelve later passing initializer observations do not explain those original events. The bounded child-output/join diagnostic and its forced-error control remain in [the preceding archive](diagnostic-update.tar.xz). No deadline or original both-success assertion was relaxed.

A read-only comparison compiled the original Node bootstrap from thirty immutable current-main source objects and this branch using the same compiler/dependencies/paths: both emit identical 102,806-byte payloads, SHA256 `1932cb941876e27c515ddfba3117f81ee265ede152831cebd6b5e77aae214522`. This bounds changed-code scope; it does not explain the discarded original stderr or environment. The unexplained initializer event remains an explicit before-merge evidence gate.

The original Opus5.5 / SDK0.2.141 / native2.1.284 cache discrepancy (3,332 published versus 3,132 next read) and actual affected-client/platform acceptance remain unresolved. No substitute-model inference or unexplained green rerun establishes acceptance. No new model calls, external comments, issue closures, release or Apple action.

[Exact failed CI, completed EA local run, runnable controls, bounded stacks, bundle comparison, source upload and current gate snapshots](capture-scope.tar.xz), [member hashes](capture-scope-manifest.json). These supersede the preceding running EA/r7 checkpoint; historical failures remain retained.

The completed candidate and its frozen dependency install are now removed, reclaiming659,328KiB after actual remote source and final-local proof bytes were verified. [Cleanup receipt](post-r8-candidate-cleanup.json). Controller99240 is terminal and no task process/cwd used the checkout. Source922 remains on the original fork/PR branch and a local recovery ref. Only this small evidence worktree remains task-owned; no Docker. Another187,564KiB of completed fixture caches were removed with logs/scripts/packages retained. RootHEAD446a and all twelve original dirty-file hashes still match. #1243 remains open without comment or closure authorization.
