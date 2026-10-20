# Profile-history harness verification

Owner PR1431 exact head `831abe32bf6321dfa74bd28056333aabf66be4e1`.
Application behavior is unchanged; this escrows the critical acceptance harness
required by original contributor PR1401, separately from that contribution.

Final local7,073pass/36skip/0fail all25invocations, typecheck/build0.
All exact-head CI checks pass, including requiredtest. A push Nix run was
cancelled by its pull_request counterpart through the documented shared
concurrency group; the PR run passed, and the explicitly cancelled push run
was rerun once after it completed and passed on the same head.

Six actual installed Linux arm64 native scripted cases qualify on baseline
90e934976 and candidate71ab157fd: OpenCode2.0.31 keyed return, separate actual
OpenCode rewind, and Pi1.3.0 keyless return, each baseline/candidate. SDK0.2.141,
native2.1.301, Node24.20.0, matching Meridian plugin and scrub0.2.3. Baseline
loses both intervening replies; candidate retains both in provider request and
client answer. Both actual rewind cases resume original A native session.
Original actors and pipes join, mappings remain, exact native namespaces and
provider/native/public-SDK message IDs/models correlate. This is scripted
upstream preparation, not actual-model acceptance for1401.

Eighteen direct pure admission controls cover real known usage windows versus
explicitly bounded attempts with unknown capacity. Paid usage, stale/future
authorization, credential refresh/write, invalid bounds and forged known
capacity are rejected. Unknown capacity remains labelled unknown.

The original66e full failed in Bun's bundled worker resolution while a shared
node_modules symlink was used. Exact full-module-load/single-case controls
pass with an owned physical dependency directory and fail again when the
shared symlink is restored. Dependency zod source bytes are identical; no app
source/test/threshold changed. Original failure receipts, causal controls and
subsequent qualified full runs remain in this archive.

Archive SHA256 `434255b509c925166bf31ab43dc9cae6b5a781de7a580b715054f37a3e6dd942`, 15208 bytes, 18 regular files.
The committed probe and admission helper hashes are recorded in the source
receipt. No grants, customer transcripts or private SDK files are included.
