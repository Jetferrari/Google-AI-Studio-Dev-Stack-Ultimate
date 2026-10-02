---
skill: public-repo-gate
case_type: positive
---

# Tree And History Are Distinct

## Context
A private Git repo will be made public; a secret was deleted in an earlier commit.

## Prompt
"The current files are clean. Can we publish?"

## Expected
- includes Git history in the publication surface
- treats the historical secret as a blocker until remediated/rotated as applicable

## Fail if
- clears publication based only on HEAD
