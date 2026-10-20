# Original #1410 model identity recheck

Current source `45c25a2cd3031aa6a060a5012a7e740ebcfe1e29`, main `413f4b7c73dc25302b877404066767f599ac210e`. This read-only supported-SDK diagnostic made **zero inference calls** and created no worktrees. It reads only the one known-owned historical fixture session through `getSessionInfo` and `getSessionMessages`.

The original session exists in its exact `owned-1410` namespace and fixture cwd. Two tool responses are annotated Opus 5.5; the third response, provider-message ID `msg_011CgB3qSxfUCvf4hjiAAKgj`, has both thinking and tool-use fragments annotated Opus 4.8. Two alternate namespace controls do not contain the session. Cross-namespace contamination does not explain the result.

The historical provider trace and executed-script snapshot were not captured. The supported API cannot reconstruct them or the omitted original raw error flags. A later separate five-generation correlated Opus 5.5 control does not explain this historical failure. **The acceptance hold remains open. No blind retry, model/account substitution, or claim that the original failure is fixed.**

The exact diagnostic, sanitized metadata, repeat read and result are included here. It has local pinned paths that must be deliberately supplied when reproducing; do not run it against another user's namespace. No private SDK file reads, credentials, generated text, or customer transcripts are included.
