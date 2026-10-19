# Overnight backlog work — 2026-10-19

This is an in-progress evidence handoff for the owner's overnight queue goal.
The original checkout is preserved; work uses isolated contributor branches and
a separate maintainer evidence branch.
The refreshed inventory covered 165 accessible repositories and six managed
Meridian/scrub repositories with no discovery gaps. Release authorization and
external comments remain separate holds.

## Landed and verified

| PR | Result | Exact receipt |
| --- | --- | --- |
| [#1415](https://github.com/rynfar/meridian/pull/1415) | SDK mock isolation plus discriminating worker startup/auth controls; 6,959 pass / 36 skip; signed squash `658a3b5c5` | [gates](1415/final-gate-summary.json), [merge](1415/merge-receipt.json) |
| [#1411](https://github.com/rynfar/meridian/pull/1411) | Provider-filter URLs, including corrected empty selection; 6,972 pass / 36 skip and 19 asserted browser cases; contributor Author verified | [gates](1411/final-gate-summary.json), [browser](1411/browser-control.json), [merge](1411/merge-receipt.json) |
| [#1420](https://github.com/rynfar/meridian/pull/1420) | Replace the 150ms cleanup-test assumption with real timer ownership; mutation control catches the old leak; 6,972 pass / 36 skip | [gates](1420/final-gate-summary.json), [merge](1420/merge-receipt.json) |
| [#1398](https://github.com/rynfar/meridian/pull/1398) | Bun startup advisory; 6,977 pass / 36 skip, nine CLI and four transport controls; all eight introduced author objects retained unchanged | [gates](1398/final-gate-summary.json), [merge](1398/merge-receipt.json) |
| [#1409](https://github.com/rynfar/meridian/pull/1409) | Owned per-process test temp directory and child cleanup; 6,973 pass / 36 skip; contributor Author verified without maintainer coauthor credit | [gates](1409/final-gate-summary.json), [merge](1409/merge-receipt.json) |

Every complete gate above used all 24 pinned Bun 1.3.11 (`af24e281`)
invocations, typecheck and build. Relevant exact-head CI passed and each merged
tree matches the reviewed tree. Existing skipped tests remain explicit.

The original #1409 CI watchdog failure is retained in #1420's committed
negative-control evidence. A separate local Bun bundler `EISDIR` result on
#1420 remains [unexplained](1420/earlier-bundler-failure.json). The isolated
observer test passed; a complete gate after replacing a dependency symlink
with an owned frozen install passed with the same lockfile and Zod entrypoint
hash. This does not establish a fix for the bundler failure. The broader
intermittent-test issues #917 and #933 remain open.

## Current contributor work

**#1398 — startup advisory.** Final head `3ebbc740b` has a clean complete gate:
6,977 pass / 36 skip, typecheck/build and final-head CI. Nine actual source,
built, Node, silent, help/version and liveness/inflight controls pass. Four
real Node/Bun transport probes corroborate the limited pre-first-byte
disconnect premise. This warns about existing behavior; it does not fix SDK
cancellation or establish model cancellation. See [gate](1398/final-gate-summary.json),
[CLI driver](1398/cli-probe.mjs), [final receipt](1398/cli-final-results.json),
[disconnect driver](1398/disconnect-probe.mjs) and [receipt](1398/disconnect-results.json).

The owner-approved forwarded route from #1413 applies. The
[complete exact-head manifest](1398/premerge-commit-manifest.json) matches
paginated GitHub data against local ancestry and records all eight introduced
Author/AuthorDate/Committer/signature records. Four original code/test edit
sets match the earlier source; E2E prose was adapted by the forwarding author.
Preserving the forwarded object preserves its original Author, not the earlier
source SHA or an original-source signature. The signed merge `70b5af12a` has the exact reviewed parents and tree. All eight
introduced objects remain reachable on main with unchanged Author/AuthorDate;
see the [post-merge receipt](1398/merge-receipt.json).

**#1407 — typed streaming errors.** The [earlier live attempts](1407/earlier-live-attempts.json)
retain failed qualification controls and the three-case real AgentLink/Opus
network-interruption proof. A fixed-origin loopback relay forwards real paid
model traffic and cuts the connection after genuine text; it refuses retries
after one real generation. No SDK/model event is manufactured. Native process
gates remain enabled and every owned child is joined. This does not reproduce
an upstream safeguard classifier. The updated [driver](1407/run.mjs),
[proxy observer/relay](1407/live-proxy.mjs) and [actual client entry](1407/client-template.ts)
include default-retry request counting, provider/native output-cap witnesses
and explicit native-binary pinning. The [final five-case summary](1407/live-summary.json)
shows healthy success, baseline false length, candidate typed error without a
successful stop, and capped provider generations on both roots without false
client errors. The initial terminal-max_tokens expectation was wrong: native
CLI recovery made two baseline / three candidate provider generations and
returned `end_turn`. The earlier failed overall run remains explicitly marked;
its first three cases passed. This does not establish terminal client truncation;
direct translator tests cover that mapping. Complete final-head gates are
[6,982 pass / 36 skip](1407/final-gate-summary.json), typecheck/build and CI.
Merge verification is pending. The real AgentLink source is pinned to
`ab98566573e893fc4667971a86573fb56beec677` (1.44.5); this is its production
headless transport, not a VS Code UI test.

**#1419 — consecutive user turns.** New contributor work was discovered and
its waiting fork CI was approved after full-diff review. A substantive
maintainer correction preserves the legacy last-user fallback on
assistant-ending input. [Two regressions fail before](1419/assistant-tail-red.log)
and [68 message tests pass after](1419/messages-green.log); typecheck/build pass.
The actual published DeepSeek Harness adapter 0.2.1-rc.2, pi-ai 1.1.0, SDK
0.2.141, Node 22.22.3 and native CLI 2.1.302 were exercised with Haiku 5.5.
[The receipt](1419/live-summary.json) witnesses three separate client user
messages, corrected live SDK framing and an actual tool-result-plus-reminder
continuation. Baseline also answered its receipt on this sample: the framing
defect reproduced, while the reported answer omission did not. These are
headless production adapter/parser/assembler checks, not desktop UI coverage.
[Client](1419/dsh-client.mjs) and [driver](1419/run.mjs) are escrowed here.
Full final-head checks and the applicable resume/cache matrix remain gates.

Native executables, private grants, SDK transcript files and customer content
are not part of this evidence tree. The native binary used by the newer live
controls is a private local copy of Claude Code 2.1.302, SHA-256
`5262ce9de86243fed0d21edc39b271555d56780d0112e2b194439fe1c6662d37`.
Browser PNGs were visually inspected and retained locally for PR media;
structured receipts and the runnable browser driver are escrowed here.

Remaining older product and owner-decision holds are preserved in
[the prior review](../backlog-20261018/README.md). In particular, the earlier
E41 stored-model-tag mismatch and incomplete matrix remain open. A new
bounded diagnostic must preserve provider API, native SDK and stored-row
message identity before interpreting that mismatch. Current fresh Opus/Haiku
success does not explain the previous third-round stored Opus 4.8 tags.
