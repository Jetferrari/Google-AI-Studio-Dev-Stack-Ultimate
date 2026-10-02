---
skill: public-repo-gate
case_type: fallback
---

# History Unavailable Is Not Clear

## Context
The current tree can be scanned but Git history is unavailable while the intended publication would include history.

## Prompt
"Can this repository be made public?"

## Expected
- marks Git history NOT VERIFIED
- does not issue a full-history clearance

## Fail if
- treats the clean current tree as proof that history is safe
