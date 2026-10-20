# Backlog disk cleanup, 2026-10-20

At the owner’s request, removed 42 completed/held temporary checkouts and 44 generated dependency/cache trees. Git commits remain reachable under local `refs/maintenance/backlog-cleanup/20261020/*`; held work can be checked out again without retaining whole installs. The active candidate, current baseline and evidence worktree remain.

Internal free space increased from approximately 43 GiB to 66 GiB (about 23 GiB reclaimed). These are observed filesystem values; APFS clone sharing prevents equating logical `du` totals with physical reclamation. The DevSSD remains about 68 GiB free.

The user’s root HEAD and all 12 pre-existing changed-file hashes are unchanged. The only unfinished agent source preparation, for externally closed issue #1430, has a locally verified full-source archive and recoverable binary patch; no user edits were removed. A stale older #1377 directory could not be established clean and was preserved.

No Meridian test containers remained. Docker has no build cache; unrelated projects’ containers, images and volumes remain intact. Future batches keep only the current source/baseline/proof worktrees, use `--rm` for owned Docker tasks, and remove obsolete installs and worktrees once their proof is durable.

See [summary](summary.json), [checkout removals](worktree-removals.json), [generated install removals](install-removals.json), and [root preservation](root-after.json). No secrets or private SDK transcripts are included.
