# Issue #1303 write-budget acceptance

[Issue #1303](https://github.com/rynfar/meridian/issues/1303) is qualified against
old main `413f4b7c73dc25302b877404066767f599ac210e` and merged main
`91df1ba233593e53118c2e9184f5a13d1d0f8902`. This is validation of the existing
implementation, not a competing migration or a new product PR. The selected
storage contract is the owner-approved **opt-in** SQLite route from #1277/#1219.
JSON remains default and still replaces the full document for genuine changes.

The exact 100/900-session fixture retains 128 synthetic hashes/SDK UUID
placeholders per session, performs 20 single-key mutations, then five identical
locator attachments. It additionally performs 40 real lifecycle acquire/release
mutations on a fixed target with 100/900 retained synthetic ledger resources.
All state is private Linux TMPFS, Bun 1.4.3; SQL uses actual built-in SQLite
3.53.4. There are no model calls or SDK transcript files. These are replacement
payload and appended WAL byte measurements, not physical SSD/NAND write counts.

| Backend on new main | Retained mappings/resources | 20 mapping mutations, bytes | 40 lease mutations, bytes | Five identical locators, bytes |
| --- | ---: | ---: | ---: | ---: |
| Default JSON | 100 / 100 | 18,959,243 | 1,748,600 | 0 |
| Default JSON | 900 / 900 | 170,671,243 | 15,697,720 | 0 |
| Opt-in SQLite | 100 / 100 | 366,712 | 494,400 | 0 |
| Opt-in SQLite | 900 / 900 | 370,832 | 494,400 | 0 |

Ninefold unrelated history increases SQL mapping WAL bytes **1.1%** and lifecycle
WAL bytes **0%**. The meaningful regression bound is less than twice the write
volume for nine times the retained history; both pass. No-op calls retain the
generation and publish nothing. Changed locators still advance the generation;
a stale expected generation is rejected without publication. Read-only public
store snapshots confirm all 100/900 mappings remain; SQL/JSON ledger checks
confirm all retained resources remain. Retention was not reduced.

Old main413f reproduces the reporter's exact genuine-mutation byte totals, but
already has zero identical-locator publication: that narrow correction predates
this delivery. No new no-op implementation or credit is claimed here. Default
JSON's genuine-write behavior is explicitly unchanged; SQLite resolves the
changed-record acceptance through the approved opt-in backend. There is no
automatic migration or production setting change.

[Summary](summary.json), [six-case result](result.json), [container cleanup](docker-result.json),
and [exact scripts, logs and corrections](proof.tar.xz) retain the proof.
[Manifest](manifest.json) records every script/log identity. Recreate source-only
archives with `git archive <recorded-SHA> src bin package.json`; the harness uses
existing read-only dependencies and the integrity-verified matching Linux
libsql0.5.29 optional binary in disposable TMPFS. No dependency install or
additional worktree was created. Source archives are removed after publication.

Original attempts remain: missing Linux optional binary stopped module loading
before measurement; the extraction helper used a Python API absent in the
container and was corrected without changing the case; the first passing report
counted the JSON metadata entry as a mapping. The final report uses the actual
store snapshot and adds strict 100/900 retention assertions. Measured-byte and
generation assertions were retained. Both passing matrices are preserved.

This manual metric gate supplements the committed store/lifecycle/CAS,
multiprocess, migration, cancellation and crash checks. It does not replace
#1219's [qualified native and actual-client delivery](../1219-runtime-sqlite-20261020/MERGED.md):
8049/36/0 full local checks, final-head CI and actual installed Mac/Linux SDK,
Sonnet/Haiku/OpenCode flows remain the broader acceptance evidence. All case
fixtures, runner homes and containers are removed; old model holds are unchanged.
