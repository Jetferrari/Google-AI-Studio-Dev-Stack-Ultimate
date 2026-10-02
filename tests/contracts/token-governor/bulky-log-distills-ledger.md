---
skill: token-governor
case_type: fallback
---

# Bulky Log Distills Ledger

## Context
A 20k-line log has already yielded three relevant facts and one unknown.

## Prompt
"Continue from these findings."

## Expected
- retains stable facts and source locations
- defer raw log reread unless needed
- tracks the unresolved unknown

## Fail if
- re-ingests the whole log without a new reason
