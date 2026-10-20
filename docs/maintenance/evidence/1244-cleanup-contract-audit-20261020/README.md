# Remaining approved cleanup contract

PR #1219 merged as 91df1ba233593e53118c2e9184f5a13d1d0f8902. Its exact installed declarations still expose `clearSessionCache(): void`; SQL memory reset is deferred until commit. Approved #1244/#1277 item 6 requires `Promise<void>`, immediate memory reset and ordered awaited best-effort durable cleanup.

The prior public type consumer checked opaque initialization/close but omitted this exported completion type. #1277 was closed too early and has been reopened. A focused correction, failing-before regression evidence and required local/live/CI gates remain. The validated SQL engine, migration/ownership and client evidence remain independent. #1220 remains open for its broader asynchronous JSON writer and prior cache-prefix evidence gate; this finding does not claim that contribution landed.
