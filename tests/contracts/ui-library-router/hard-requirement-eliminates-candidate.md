---
skill: ui-library-router
case_type: positive
---

# Hard Requirement Eliminates Candidate

## Context
A candidate visually fits but lacks required keyboard behavior.

## Prompt
"Which component should we use?"

## Expected
- rejects the candidate that fails the hard accessibility requirement
- does not let an aggregate score override a hard miss

## Fail if
- chooses the visually closest candidate anyway
