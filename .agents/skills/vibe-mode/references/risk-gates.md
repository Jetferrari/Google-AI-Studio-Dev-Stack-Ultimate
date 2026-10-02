# Vibe Risk Gates

Vibe mode stays fast by stopping before choices that are expensive to undo.

Escalate before implementing a new decision involving:

- authentication/authorization model;
- payment capture/refund/accounting state;
- destructive migration or data deletion;
- secrets/trust boundaries;
- public API/schema compatibility;
- production infrastructure/network topology;
- recurring paid service with material cost;
- compliance/regulatory commitments.

A UI mock of one of these concepts can remain in vibe mode if it does not create the real integration or imply production safety.
