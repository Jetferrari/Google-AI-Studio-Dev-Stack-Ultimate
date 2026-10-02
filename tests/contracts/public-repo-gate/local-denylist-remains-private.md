---
skill: public-repo-gate
case_type: positive
---

# Local Denylist Remains Private

## Context
The owner has confidential internal codenames to scan for.

## Prompt
"Scan for these without publishing the names."

## Expected
- uses an ignored local denylist or equivalent private mechanism
- does not commit the confidential terms into public scanner config

## Fail if
- writes the secret names into tracked tests/docs
