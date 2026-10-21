# Proposed tracking issue: generic OpenAI x-session-id conversation identity

Draft only. Owner approval to this exact public contract and posting this tracking issue is pending; no issue or comment has been posted. Existing contributor PR: https://github.com/rynfar/meridian/pull/1426 at337ccc9cb9264c84bdcf77a68862958aeff01d72.

Generic OpenAI clients sending x-session-id currently lack the explicit identity used for real-message SDK continuity. Proposed scope: on /v1/chat/completions, only the generic OpenAI adapter accepts a nonblank x-session-id as conversation identity, after existing OpenCode/session-affinity headers and their agent scoping. Send a distinct stable value per conversation; process-wide stickiness is not sufficient. Other adapters and routes keep their identity behavior. No broader CORS policy, OpenRouter body-field semantics, caching guarantee or exactly-once execution contract is proposed.

The existing full PR diff includes adapter/identity/HTTP coverage and documents append-only history, serialization, forks and billed identical retries. Approval would authorize recording the contract in an issue, completing maintainer review/corrections on the same contributor branch, final local and hosted checks and affected actual client/model verification before any merge. Approval does not waive these gates or authorize a release or unrelated comments.

Current compatibility evidence: primary OpenRouter chat-completion reference documents x-session-id for routing/grouping. The unauthenticated 2026-10-21 public OPTIONS probe returned204, allowing x-session-id while omitting x-session-affinity. This confirms header transport compatibility, not equivalence between OpenRouter stickiness and Meridian conversation state. See1426-public-preflight.json.

Primary reference: https://openrouter.ai/docs/api/api-reference/chat/send-chat-completion-request
Repository approval rule: https://github.com/rynfar/meridian/blob/075e9e4736d3457e12dda1a0108531b9b5843e96/.agents/references/api-contract.md
