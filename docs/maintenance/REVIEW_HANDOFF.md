# Meridian backlog: current checkpoint (2026-10-21 UTC)

The user's backlog goal remains active. Release 1.85.0 is published and verified; continue independently actionable queue work. Mac notarization remains explicitly deferred. No subsequent release, paid usage, credential refresh/write, external comments or unapproved decline is authorized by this checkpoint.

## Attribution and preserved history

The [attribution ledger](ATTRIBUTION_LEDGER.md) still records 137 legacy maintainer re-lands; no historical repair is claimed. Contributor work lands through its own PR with the actual Author on main, or the narrowly owner-approved commit-preserving route for forwarded #1394–#1401. Coauthor trailers alone are not credit. Never silently close a contributor PR or close one for work that shipped. Current contribution rules and final-head CI/live evidence apply.

This compact current handoff replaces accumulated contradictory status paragraphs. The complete prior handoff remains immutable at [1549d563](https://github.com/rynfar/meridian/blob/1549d563adda26d73747902e86e254dbbd591096/docs/maintenance/REVIEW_HANDOFF.md), with earlier failed logs and acceptance limits retained. It is historical, not a current gate result.

## Delivered release

[1.85.0](https://github.com/rynfar/meridian/releases/tag/v1.85.0): release PR #1427 candidate d54dcd47, landed/tag d35fd025. The normal workflow published GitHub/Docker but npm failed before publishing because setup-bun selected 1.3.11. Workflow-only signed recovery #1436 landed 3f819aaa, pinning Bun 1.4.3; tracked app/package files match the original tag. The documented `publish_only` recovery ran once (39561946067), with trusted npm provenance and no manual version/tag/npm publication. Registry `latest`, tar integrity, signed provenance, real fresh installed Sonnet 5.5 client flow and both Docker architecture manifests were verified. Provenance gitHead 3f819aaa intentionally differs from tag d35fd025 only by the workflow repair. Mac HTTP 401 is retained, with no secret change or retry. [Durable final publication proof](https://github.com/rynfar/meridian/blob/d063274e0e17e3a251927e3da7334da8781e592b/docs/maintenance/evidence/release-1.85.0-20261021/DELIVERED.md).

Earlier delivered queue audit: original contributor PRs #1419, #1403, #1395, #1423, #1394, #1406, #1401, #1428, #1397 and #1219 merged; owner fixes #1433/#1434/#1435 merged; issues #1277/#1244/#1303/#917 closed. Each has preserved Author/ancestry and evidence in the historical handoff. Do not confuse these deliveries with #933 resolution or legacy attribution repair.

## Current #1437: qualified, exact-head merge next

[PR #1437](https://github.com/rynfar/meridian/pull/1437), signed head c3604dd5f951933a0eb979846edffcce9c78dc91, base 3f819aaa873c9e12e91c25ec429c1e30cdf05633. Owner-authored active-loop assistant-text compaction correction only; no contributor recap/replay-notice code. [Final evidence](evidence/1437-active-history-budget-20261021/FINAL.md) records complete final-diff adversarial review, 8,086 pass / 36 skip / zero failures across all 26 npm-test invocations, typecheck/build and eight successful current-head hosted checks. A duplicate Nix push was cancelled by workflow concurrency and replaced by successful same-head PR Nix. All six signatures are verified. Merge with normal `--squash --match-head-commit c3604dd5f951933a0eb979846edffcce9c78dc91`, then verify landed tree/Author/signature/parent and refresh the queue. Do not run another release.

Actual Pi 1.1.0 / official agy 1.2.7 / Gemini 3.8 Flash Low on Darwin arm64 passes the headless one-write/read + joined backend replacement gate twice. Actual prompt 367,817 → 138,724 bytes under the unchanged 190,000 limit; newest instructions/pair and all identities preserved. Exact retained public original #1340 wire also compared with unchanged main. Later changes only fix test observation; no extra model calls. R1/R2 failures, forced controls, R3 failed fingerprint guard and R4 read-only warming qualification are retained. Later passing unrelated cases do not explain original causes. #933 stays open.

One clean isolated task checkout/install: `/private/tmp/meridian-release185-20261021`, branch `codex/antigravity-active-history-budget-20261021`; all local controllers R1–R4 are now terminal. Outputs `/tmp/meridian-active-history-budget-20261021`. T3 watch on #1437; unwatch when handing work to the user. After verified merge, reassess #1340 on corrected main before any acceptance decision.

## Owner decision pending: #1243

#1243 remains open at 5198b68aea1eb648e3b5685285f2b1008ab827b4 with no comments. An asynchronous question is awaiting an actual owner answer; default selection or elapsed time is not approval. Exact proposed explanation:

> Closing this proposal because the approved JSON default, explicit SQLite opt-in and offline migration are now delivered by #1219 and #1433 in 1.85.0. This PR still automatically selects/imports SQLite, which conflicts with that decision.
>
> Its implementation remains unmerged and its authored commits remain preserved. #1220’s separate asynchronous JSON writer stays open.

The current [backlog skill](../../.agents/skills/meridian-backlog/SKILL.md) says “Comments need authorization,” and [contributing step 6](../../.agents/references/contributing.md) requires a “posted explanation the owner approved” and says “A silent close is never the fallback.” On explicit approval, refresh the head, post the exact explanation, verify it, then close without deleting source commits/branch. Otherwise leave open and continue independent work.

## Refreshed queue and held gates

Fresh paginated discovery at 09:56 UTC covered 165 visible repositories and all six managed queues without a coverage gap: Meridian 21 PRs / 11 issues before #1437 merge; hudscrub, Hermes and OpenClaw scrub queues empty; OpenCode scrub release #20 and Pi scrub release #15 open. Their publication is not authorized. No unreviewed new item appeared beyond #1437. Refresh after merge.

- #1429: public banked-reset behavior and owner selection of scarce grants need a decision; no redemption performed.
- #1426 and issue #1311: new public conversation/agent identity inputs require owner-approved contract and issue coverage; no silent interface expansion.
- #1410/#1399/#1261: original Opus 5.5 → 4.8/refusal/cache proof lacks exact executed source and correlated provider traces. Adjacent Sonnet success does not clear these gates.
- #1400: requires naturally spent Fable allowance and a healthy distinct included pool. Last read-only usage responses 429/200/429 do not prove that fixture. Never burn allowance, enable paid usage or refresh auth to create it.
- #1396 head a40be179: real Fable/native comparisons support transient reminder removal, but annotations mix Fable/Opus 4.8 and all 95% cache floors fail. Exact reminder-only/client transition/source evidence remains incomplete. Current PR body corrects prior unsafe tail-trimming and broad refusal claims; no new live retry. Existing owner corrections preserve unknown durable system tails and require the actual reminder transition.
- #1340 head bd5808f3: bounded notice on a matching completed tail is not exactly-once execution; a fresh identical poll must dispatch its second attempt. Original large-history request was blocked before inference. #1437 fixes that concrete size blocker and its current baseline achieves one write without the notice. Reassess actual benefit; do not accept or close on assumption. Original Pi 1.1/agy 1.2.7 public fixture is escrowed.
- #1314 head 5c96dd30: recap source and independently installed Pi/Gemini path pass, full 8,098/36/0 and current-head checks passed earlier. Reporter ACP version/OS and historical duplicate cause remain unknown. Original d1a13085 is GPG-signed with unknown_key, not unsigned; the unsigned-only admin squash exception does not apply. [Durable proof](https://github.com/rynfar/meridian/blob/985793c9c2720b7a2a56d7ebd9f4fcc71b95cca9/docs/maintenance/evidence/1314-current-main-20261021/QUALIFIED.md).
- #1220 head 92222508: full 8,102/36/0, type/build and hosted checks pass; actual Opus 5.5 / SDK 0.2.141 / native 2.1.284 / OpenCode 1.18.34 / scrub 0.2.3 cache 3332 create → 3132 read misses the 95% floor 3165.4. Original native locator/fingerprint stderr was not retained; bootstrap shape is not a diagnosis. No nearby-model success clears it. Proof at d4d27e31, retained in historical handoff.
- #1193: explicitly owner-deferred warming contract, lifecycle/cost and benefit decision (October 7).
- Eight drafts #1408/#1402/#1359/#1347/#1322/#1317/#1266/#1050 retain their draft/no-review/owner holds. Do not mark them ready or treat overlapping work as accepted.
- Issues #1390/#1338/#1302/#1229 map to held drafts; #1094 needs exact OpenCode 2.0.16 private billing_error payload; #1073 Mac notarization deferred; #1011 capped streaming deferred; #933 broader fast-500 producer unknown; #769 exact private OpenClaw trigger/version and Off–On–Off proof absent; #650 owner-deferred sender token prerequisite, no secret value/provision/dispatch authorized.

## Resource discipline

Original root `/Users/rynfar/repos/meridian` (DevSSD) remains at 446a0f16 with its 12 original dirty-file hashes preserved; never reset/switch it. One task install is reused, 50 completed task worktrees were removed earlier, completed fresh-registry install/cache (~734 MiB) and sealed live fixture homes (~9 MiB) removed. No task Docker container/image was created; other-project jobs/containers/worktrees remain untouched. Retained proof archives replace disposable native fixture roots; never restart deleted-fixture scripts. Pinned Pi/agy tools remain for further authorized Antigravity review. The existing backlog goal remains active after release and this checkpoint.
