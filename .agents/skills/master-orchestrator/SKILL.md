---
name: master-orchestrator
description: Route ambiguous or multi-phase development work to the current phase, one primary skill, and at most one independent validator. Use when the request spans planning, design, implementation, debugging, review, release, or meta-tooling and ownership is not already obvious.
origin: OWN
license: MIT
---

# Master Orchestrator

A router protects **phase integrity**. It decides who owns the current work; it does not perform every later phase preemptively.

## Use when

- a request mixes several development activities;
- the right specialist is unclear;
- the user is continuing work after a handoff or interruption;
- a task changes phase and needs a new owner;
- risk changes which workflow should lead.

## Skip when

- the user explicitly invoked a fitting specialist and the task is already in that specialist's scope;
- the request is a single obvious action with no meaningful routing choice.

## 1. Establish the phase

Classify the **next user-visible objective**, not the whole project, as one of:

- discovery — decide what problem or requirement exists;
- design — decide product, domain, architecture, or visual direction;
- prototype — answer one uncertainty with disposable evidence;
- implementation — build already-decided behavior;
- debugging — explain and fix observed failure;
- review — inspect completed or proposed changes against a standard/spec;
- release — prove a bounded change is ready for handoff/publication/deploy decision;
- meta/tooling — configure or audit the agent environment itself.

If the user's verb and the repository state disagree, the **requested outcome wins** unless doing so would require an unresolved prerequisite. Example: “implement this plan” is implementation even if you personally would have planned it differently.

**Complete when:** exactly one phase describes the next bounded objective, or the missing prerequisite is named.

## 2. Map authority before skill

Identify what already decides the work: project instructions, accepted ADR/spec, design system, tests/contracts, committed behavior, or explicit user decision.

A skill supplies process. It does not outrank project authority.

**Complete when:** the primary skill can proceed without silently reopening a settled decision.

## 3. Choose one primary owner

Use the routing map in `references/routing-map.md` when the match is not obvious.

Choose a second skill only as a **validator** when it catches a different failure mode. Typical pairs:

- `vibe-mode` → `browser-qa`;
- `frontend-director` → accessibility/design-guideline review;
- implementation workflow → `ship-gate` at phase completion;
- third-party skill intake → `skill-auditor` → `public-repo-gate` before publication.

Do not run two creative authorities over the same artifact in parallel.

**Complete when:** primary ownership is singular and any validator has a distinct job.

## 4. Apply the risk gate

Before mutation, surface an unresolved decision when it materially changes:

- authentication or authorization;
- payments or financial state;
- destructive or irreversible data behavior;
- security/trust boundaries;
- public API or persisted-schema compatibility;
- production infrastructure;
- meaningful recurring cost.

Routine reversible choices remain inside the primary skill.

**Complete when:** no hidden high-consequence decision is being smuggled into execution.

## 5. Route, then get out of the way

For normal operation, routing can be internal. Do not add ceremony just to announce the skill name.

When a routing explanation is useful, report only:

- **Phase**
- **Primary**
- **Validator** (if any)
- **Blocked by** (only when a prerequisite is unresolved)

Then execute or hand off to the primary workflow.

## Output

Routing is normally implicit. When the routing decision itself matters, return only Phase, Primary, optional Validator, and Blocked by. Do not turn every task into a routing report.

## Boundaries

The orchestrator does not install tools, edit product code, invent requirements, or perform release work on behalf of another phase.

When the user explicitly asks for several phases in sequence, finish each phase's completion criterion before advancing.
