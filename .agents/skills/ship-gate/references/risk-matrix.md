# Validation Risk Matrix

## LOW
Examples: docs, copy, narrow style tweak, isolated pure function with strong focused test.

Typical evidence: diff/surface inspection + focused relevant check(s).

## MEDIUM
Examples: user-facing feature, several modules, stateful behavior, API integration with reversible data.

Typical evidence: focused tests + broader relevant regression + build/runtime where applicable.

## HIGH
Examples: auth/security, money, destructive migrations, persisted/public schema, concurrency/idempotency, production infrastructure, broad cross-system effects.

Typical evidence: all configured relevant static/tests/build + integration/runtime + explicit rollback/migration evidence as applicable.

Risk can move upward when rollback is poor, blast radius is broad, or the change touches weakly tested legacy code.
