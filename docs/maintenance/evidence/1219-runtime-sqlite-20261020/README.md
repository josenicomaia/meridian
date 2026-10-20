# PR #1219 runtime SQLite qualification

Reviewed head: `c91cf4357f04c1f3473896a182aaad2c51f524e1`, containing main
`413f4b7c73dc25302b877404066767f599ac210e`. Delivery stays on
[Aleksey Proshutinskiy's original PR](https://github.com/rynfar/meridian/pull/1219).
Its original objects remain unchanged; maintainer corrections are separate signed
commits. This record precedes the exact-head merge decision.

The authoritative bookkeeping engine now uses `node:sqlite` or `bun:sqlite`.
It checks version/source ID in memory before opening a persistent main or guard.
It requires the [official WAL-reset repair](https://sqlite.org/wal.html), including
the 3.44.6/3.50.7 backports. The earlier libsql source finding remains valid for
that historical proposal; no upstream libsql fix or corruption reproduction is
claimed. Existing telemetry still uses its separate libsql database. Dependencies,
lockfiles and Nix dependency hashes are unchanged.

The [Node 22.22.3 release](https://nodejs.org/en/blog/release/v22.22.3) supplies
SQLite 3.51.3; actual stock Mac Node 22.22.3 and Linux Node 24.20.0 were used.
Linux Node 24.20.0 and qualified Bun 1.4.3 report SQLite 3.53.4. Mac Bun tests
explicitly select the existing Homebrew 3.53.4 library, whose hash/provenance is
retained. Product code never changes a host application's global library.
[Bun documents](https://bun.sh/docs/runtime/sqlite#loadextension) the macOS OS
library and Linux static-link distinction. Actual unpatched Mac Bun 3.51.0
refuses before persistent file creation. The original CI refusal on Linux Bun
1.3.11/SQLite 3.51.2 is retained; the Linux test job now explicitly pins 1.4.3.

Final local gates pass **8,049 / 36 skips / 0 failures**, all 26 isolated groups,
with the integrity-verified published 1.84.0 compatibility artifact enabled.
Typecheck, build and pack pass. [Final-head CI](hosted-ci.json) has 12 executed
successes and two expected skips, including
[test](https://github.com/rynfar/meridian/actions/runs/39510478281/job/118929949942).
The current independently installed tarball SHA256 is
`17740db38f9ff727c54c477469824538306afb9ae0256f8937729991f58a0d09`.

The [archive](proof.tar.xz) contains 633 files, including the exact current
tarball, executed scripts, original failures, causal controls and receipts.
SHA256: `5d114745f8b96e1917bb90210459d708b4e444cb9bda97a64cf89be099548f39`.
[Manifest](manifest.json) records every included byte identity. Private grants,
dependency installs, native client state and temporary runtime binaries are
excluded; the credential-literal scan found no matches.

Verification distinguishes the actual surfaces:

- Final c91 installed package: Mac Node and Linux Node storage gates against
  unchanged main, plus Mac rollback against published 1.84.0, all pass. Each
  run has 14 original actor reports joined, no forbidden/model requests and
  removed temporary installs/state. Linux containers are removed.
- Final c91 installed SDK 0.2.141: all eight JSON/SQLite normal/close/stdout/stderr
  cases pass on both Mac native 2.1.302 and Linux native 2.1.301, with zero model
  calls. The physical guard probe is an independent Node process: a same-process
  fd opened through a different SQLite engine could revoke POSIX locks. The
  delayed-event controls retain ownership until every original child and pipe
  joins; they do not claim an organically lingering OS pipe.
- Final c91 SQL E41: all four sequential/parallel by JSON/stream modes pass,
  16 real Sonnet 5.5 generations. Installed V1 client hooks and scrub 0.2.3 are
  verified. Exact provider/native/public-SDK message IDs and models correlate;
  source history, distinct forks, tool answers and cache continuity pass. This
  is a protocol host, not an OpenCode executable.
- Final c91 actual OpenCode 2.0.31, installed V2 plugin and scrub 0.2.3 on stock
  Linux Node 24.20.0: the exact credentialless script passes first, then the
  real SDK/native 2.1.301 case passes with five Haiku 5.5 generations. Both owned
  profile histories survive the return trip; actual SQL publication, offline
  latest-state export and remigration retain the mappings and correlated SDK
  records. The aliases share one owned Team grant; this is not distinct-account
  quota failover. All original children/pipes join and fixtures/install/container
  are removed. Fresh active-profile reads confirm paid Extra Usage disabled;
  capacity remains explicitly unknown, with a 12-generation bound and no
  credential refresh, write, account switch or old failed-case retry.
- APFS/tmpfs installed package gates pass on final c91. Real owned ext4, Btrfs
  and XFS image gates passed on f428, whose Linux runtime branch and native
  driver are unchanged by c91. Every loop image/device/mount/container was
  removed; a separate final loop inventory is empty. HFS+ reports type 25 on
  this host, contradicting the prior assumed 17. c91 narrows ordinary macOS
  SQL admission to verified APFS and rejects both HFS numbers; HFS and native
  Windows are outside the supported SQL set. No multi-hour GC soak or broader
  platform certification is claimed.

Adversarial findings and their resolution:

- Rejected better-sqlite3 13 prototype: Node worked, old Bun panicked before
  SQL, and immutable URI requirements failed because that build disables URI
  interpretation. The dependency prototype was fully restored before the
  final driver; its original failures are preserved.
- Bun trigger-inclusive mutation counts could make a successful CAS look
  unsuccessful. The driver uses same-connection `changes()` and direct trigger
  controls. Every Bun statement is finalized; retained facades do not retain
  native owners. Node closes its original native owner.
- Proper native close removed sidecars that old crash fixtures relied on.
  A real idle read-only Node owner retains their inodes without an active read
  transaction. Existing exact SIGKILL cuts and successor barriers remain;
  files, timings or assertions were not fabricated to obtain a pass.
- The newer Bun changed duplicate-export error wording. The unchanged fixture
  passes on 1.3.11 and fails on 1.4.3 with the exact newer wording; the corrected
  test accepts both diagnostics and still proves rejection before repair and
  successful import afterward. The original full-suite failure is retained.
- The standalone consumer requires no Bun types and exposes only opaque
  `close()`. Private reader/path/query accesses fail. Strict third-party
  declaration checking finds 19 SDK errors also reproduced verbatim through
  published 1.84.0; the repository's existing library-check policy passes both.
  This limitation is explicit rather than attributed to this change.
- Reviewed native close/unwind, immutable inspection, numeric busy/locked
  mapping, same-process handle sharing, raw-fd guards, checkpoint queueing and
  FIFO admission. Persistent probes do not enter a row transaction; GC retains
  its PASSIVE checkpoint opportunity, while TRUNCATE remains exclusive/offline.
  Public opaque lifecycle approval remains #1277/#1244. JSON remains default.

The user's root HEAD and all 12 original dirty-file hashes are unchanged.
Only the active candidate and evidence worktrees remain owned by this task.
Earlier unrelated model/account holds remain unchanged. This is not a release
or Apple notarization action; issue #1303's write-volume budget remains separate.
