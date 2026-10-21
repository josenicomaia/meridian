# Main CI history audit for #933

Current main is `8914cfad05dc274e78313cd9cbe3a2bb14923231`. The eight latest observed main push CI runs succeeded, including the post-#1435 run. This is a finite sample, not proof that every intermittent cause is resolved. [Exact runs, source corrections and assessment](audit.json); [current issue and existing owner comments](issue-current.json).

The most recent failed main test run, [39242086364](https://github.com/rynfar/meridian/actions/runs/39242086364), reported warm loop lag97.58ms against a50.68ms threshold. Current source includes equivalent durable reference work (`41244e9b7`) and counterbalanced ordering (`414dd3222`). The historical external scheduling/IO state is not recreated by this audit. No threshold is weakened here.

[39227599682](https://github.com/rynfar/meridian/actions/runs/39227599682) read an empty worker result where it expected `denied`. The parent reader still polls for existence, but the current worker already publishes complete pending-file bytes with rename (`92aa60944`, narrowing correction `f923e9df3`). All four source correction objects are verified ancestors of current main. This observation requires no duplicate fix or new PR.

[38462319514](https://github.com/rynfar/meridian/actions/runs/38462319514) failed dependency tarball integrity during installation, before tests. Original returned tarball bytes are not present in this audit, so its cause is unproven. Integrity checks remain enabled.

The original eleven-test ownership-backlog cluster is covered by #935. The surviving132ms concurrent HTTP500 and later fast500/marker witnesses still lack their original producers; [the existing diagnostic record](../ci-usage-zero-diagnostics-20261008/README.md) separates that missing proof from later corrections. `ce7a9dc8`'s exact original CI run was located (33859408784, attempt2); that cluster's existing captured-body proof is not replaced by another green replay.

**Keep #933 open.** Revisit an exact reproducible residual or a new unclassified failure with the strengthened body/worker diagnostics. These read-only investigations add no source change, model call, install, worktree or Docker resource. No release or acceptance gate is bypassed. The source #1220 CI watch remains active independently.
