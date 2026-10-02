---
name: vibe-mode
description: Turn a low-risk idea into a fast, reversible working slice. Use for exploratory product or frontend work where visible feedback should resolve uncertainty before production-grade architecture, exhaustive edge handling, or broad infrastructure is justified.
origin: OWN
license: MIT
---

# Vibe Mode

Vibe mode optimizes for **learning velocity** while keeping the work easy to undo.

## Use when

- an idea needs to become tangible quickly;
- the user wants to explore behavior or presentation through working software;
- uncertainty is mostly reversible;
- a narrow vertical slice can answer the next product question.

## Skip when

- requirements are already settled and production implementation is the actual task;
- the change centers on auth, payments, permissions, destructive data, security boundaries, public contracts, or production infrastructure;
- the user needs a throwaway comparison rather than a working slice — use a prototype workflow instead.

## 1. Frame the bet

State:

- the question this slice should answer;
- the smallest user-visible behavior that can answer it;
- what will intentionally remain rough.

For reversible gaps, choose a sensible default and record it as an assumption. For high-consequence ambiguity, stop at the risk gate in `references/risk-gates.md`.

**Complete when:** the slice has one learning objective and one visible success condition.

## 2. Preserve the host

On an existing project, inspect the framework, package manager, routes, design system, data seams, and nearby conventions before writing.

On greenfield work, choose the smallest stack already available in the environment. A new dependency needs a concrete capability the slice cannot reasonably express without it.

If the slice has meaningful visual freedom, get a `frontend-director` contract before styling by improvisation.

**Complete when:** the slice can be built without an accidental platform rewrite.

## 3. Build one tracer slice

Implement one end-to-end path before widening scope:

input → behavior → visible result.

Prefer in-memory/static fixtures for uncertain data contracts. Keep irreversible integrations behind stubs or adapters until the uncertainty is resolved.

Avoid speculative abstractions, generalized configuration, and infrastructure whose only justification is “we may need it later.”

**Complete when:** a user can exercise the exact behavior that tests the bet.

## 4. Tight feedback

Use the cheapest real feedback loop that can disprove the slice:

- focused test for logic;
- local runtime for service behavior;
- browser interaction for UI;
- fixture/output comparison for transformations.

Fix blockers that prevent the slice from answering its question. Record non-blocking roughness instead of polishing it into accidental scope.

**Complete when:** the slice has been exercised at least once and the observed result answers or sharpens the original question.

## 5. Decide the exit

Classify the outcome:

- **KEEP** — direction validated; hand off the validated decisions to production implementation;
- **ITERATE** — learning exposed one specific next uncertainty; define the next slice;
- **DISCARD** — the idea failed cheaply; preserve only the learning;
- **ESCALATE** — the next step crosses a risk gate or requires a non-reversible architectural decision.

See `references/roughness-budget.md` for what may remain unfinished without pretending the slice is production-ready.

## Output

- **Bet** — question tested;
- **Working slice** — what became usable;
- **Observed result** — what actually happened;
- **Intentional roughness** — known omissions;
- **Exit** — KEEP / ITERATE / DISCARD / ESCALATE;
- **Next decision** — one sentence.

## Boundaries

No automatic deploy, commit, production migration, credential provisioning, or broad dependency installation. Vibe mode may be fast; it is not permission to hide irreversible consequences.
