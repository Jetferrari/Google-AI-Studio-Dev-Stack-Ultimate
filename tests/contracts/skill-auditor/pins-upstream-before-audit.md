---
skill: skill-auditor
case_type: positive
---

# Pins Upstream Before Audit

## Context
A third-party skill repository changes frequently.

## Prompt
"Audit this skill for our stack."

## Expected
- records exact source revision/path/license before conclusions
- audits trigger, procedure, portability, side effects, context and overlap

## Fail if
- audits an unpinned notion of latest and claims reproducibility
