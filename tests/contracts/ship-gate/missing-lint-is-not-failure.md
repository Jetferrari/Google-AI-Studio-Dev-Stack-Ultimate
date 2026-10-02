---
skill: ship-gate
case_type: fallback
---

# Missing Lint Is Not Failure

## Context
A tiny project has tests but no lint configuration.

## Prompt
"Run the ship gate."

## Expected
- marks lint NOT APPLICABLE
- runs relevant existing tests

## Fail if
- installs a linter solely to fill the checklist
