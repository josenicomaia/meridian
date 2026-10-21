**Latest: [qualified original-branch upload and remaining gates](CURRENT.md).** This earlier snapshot remains historical evidence.

# Original #1220: current-main integration and open acceptance gate

The original Nowaker PR stays OPEN. Local candidate `5721c3db401d41cd7154f0577f8039e3d3e8916a` is **not pushed or qualified yet**. Signed merge0961 retains exact originalb1ff plus current mainbe790; additive70b7 captures the headerless rollback key before JSON I/O,27d8 preserves native fixture callbacks and5721 clears memory at the store commit boundary. No contribution is copied into a maintainer PR. A future source squash still requires Nowaker's Git Author credit and all acceptance gates.

JSON mutation facades await I/O and own inputs before yielding. Their native SQL branch and result continuations stay synchronous, joining the existing COMMIT. Request-local ordering wraps publication rather than yielding inside SQL. JSON publication flags update within that queue; SQL flags wait for the durable return. Offline migration keeps its separate bounded legacy lock. No dependency or public contract is added.

Adversarial findings: (1) caller mutation while a headerless rollback waited restored the disk mapping but left the wrong cached SDK session under a real store-read failure; capture the key before yielding. (2) a read during pending JSON cleanup repopulated a stale LRU; run its second reset inside the writer before admitting later work. Header/fingerprint and later-publication controls pass. The private clear effect follows each backend's commit boundary; existing SQL rollback/COMMIT tests pass.

Two isolated negative controls reproduce the headerless fallback and native-yield errors. A third omits the JSON clear effect and fails both LRUs; source bytes are restored. Original full-r1 was deliberately interrupted130 after callback fixtures incorrectly introduced an async boundary and then retained test owners. All12callback/forwarder sites were corrected; the three isolated lifecycle/embedding/runtime suites pass. The interrupted run's own process and scratch directories are gone. Full-r2 is running; retain the first failure rather than claiming a green rerun.

82related JSON/SQL tests pass, along with210earlier focused cases. Exact final-head standalone typecheck/build/npm and GitHub CI remain required; no actual model call was made for this integration. The checkpoint includes exact source diff, controls, first failure and cleanup receipts. [Manifest](checkpoint-manifest.json).

## Original E41 discrepancy: newly recovered metadata, still unresolved

The explicitly named persistent `session-store-1220` verification fixture retains the old supported-SDK usage log. [Whitelisted metadata](original-cache-metadata-recovery.json) supplies the original owned session IDs and assistant message IDs. Distinct thinking/tool rows share one message ID and must not be double counted: published creation3332, next read3132/create427 and later read3559. The residual200 is still below the unchanged95%floor3165.4; no cause is established.

35known harness-owned app stores contain no matching original session. A control profile record points to an absent staging directory; it is not proof of the failing run's exact locator. No global SDK namespace was searched, no private SDK file was read, and no current SDK history/model call was attempted. The exact original failing locator and unrecorded transport/options/cache timing evidence remain missing. Later green runs do not resolve this hold.

## Resources

One reused candidate plus this evidence worktree; no new worktree/install or Docker job. The original root remains at446a with all12dirty-file bytes unchanged.47completed temporary worktrees were removed earlier. Keep the current candidate only while verification/correction needs it, then remove completed dependencies after durable source/proof verification. No release, Apple notarization or public comment was performed. #1243's exact decline comment/closure still awaits the user's explicit reply.
