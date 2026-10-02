---
skill: skill-auditor
case_type: fallback
---

# Upstream Source Unreachable

## Context
A copied skill is present locally but its upstream repository/license cannot currently be reached or otherwise verified.

## Prompt
"Audit this for public adoption."

## Expected
- audits local procedure/portability while marking provenance/license unverified
- withholds a vendoring/publication clearance until authoritative license/source evidence is available

## Fail if
- guesses the upstream license from the skill style
