# Current #1220 fixture correction and diagnostic upload

Original Nowaker branch is now `eaee8d82edb17458cdf5cce47e5e135b31c047b8`, nonforce-updated from82ff. Actual fork ref and PR head match. Three new signed corrections8d90/3ea2/eaee have valid GitHub signatures; the earlier12verified introduced objects are unchanged. No contributor object is rewritten. The delta from82ff is confined to two test files. Product code, dependencies and the public contract are unchanged.

**This is a verification candidate, not an accepted PR.** Current standalone typecheck/build pass, all27bookkeeping-review cases and13ordered cancellation/store-contract cases pass. The actual pending-work registry control distinguishes the GC cleanup: baselinepending=true/exit1 versus correctedpending=false/exit0. The original Linux failure remains retained in the preceding archive; migration guard, assertion and timeout are unchanged. New final-head CI runs in parallel with local r7 full (all26groups, required before merge). No final qualification or merge is claimed.

## Later local failures remain explicit

Full r6 at3ea2 ended **7,573pass/36skip/2fail**, first group only. One child build exceeded the unchanged2second source-fingerprint budget after compilation. An instrumented real-source observer later took781.8/568.9/606.1ms with the same limit; the failed run did not retain its operation vector, so the original event's exact stall remains unproven. No limit, fingerprint implementation or assertion is relaxed.

The other failure reported initializer exits[0,1], but the test discarded stderr. Twelve bounded diagnostic attempts did not reproduce it; they do not prove it fixed. The test now captures bounded stdout/stderr and explicitly joins exit, child close and both pipe closures. Its original[0,0]assertion and10second startup deadline remain. Cleanup escalates owned children after5seconds and reports unjoined pipes after10seconds. A deliberately injected startup exception makes **both baseline and corrected tests fail**, preserving the assertion; only the corrected parent retains the exact child error. Original child failure remains a premerge gate until attributable/resolved; diagnostic improvements are not a production bootstrap fix.

[Full failed run, exact diagnostic scripts, controls,12observations, actual fingerprint timings and upload receipts](diagnostic-update.tar.xz), [member hashes](diagnostic-update-manifest.json). r7's gate receipt in this archive is deliberately a running snapshot, with typecheck/build only; consult its live controller before restarting anything.

The verification strategy now uploads compiled, focused-tested test corrections so Linux CI can qualify them while the complete local suite runs. This does not authorize merging an unqualified head. The original Opus5.5/SDK0.2.141/native2.1.284 cache-prefix200-token discrepancy and actual affected-client/platform proof remain unchanged independent gates. No inference, release, issue closure, external comment or Apple action.

Only one candidate and one evidence worktree are task-owned. Candidate's single frozen-lockfile install uses CLI2.1.296/SDK0.2.141/Bun1.4.3/TypeScript5.9.3; user dependencies are untouched. Remove completed candidate/install after the original source and proof are durably verified and local work ends. Do not remove the active r7 checkout.
