# Skill Design Standard

This repository treats a skill as a **bounded behavior change**, not a persona and not a bag of advice.

The quality bar is informed by mature public skill repositories, especially the principles of precise invocation, progressive disclosure, observable completion, and composability. The wording and procedures here are original to this repository.

## 1. Earn existence

Every skill must name the failure mode it prevents. If an existing skill can absorb the behavior without becoming incoherent, extend the existing skill instead of adding another.

A skill is justified when all are true:

- its trigger is recognizable from a real task;
- its behavior differs materially from model default behavior;
- its completion can be observed;
- a neighboring skill cannot own the same responsibility more cleanly.

## 2. Invocation is an interface

The frontmatter `description` is a routing interface. It must say **what the skill does** and **which task branches should trigger it** without becoming a miniature copy of the body.

The body must include explicit **Use when** and **Skip when** boundaries. A skill that fires too often is as defective as one that never fires.

## 3. Process before reference

Put the execution path in `SKILL.md`. Put branch-specific knowledge under `references/` and point to it only from the branch that needs it.

The main file should answer:

1. What problem am I solving?
2. What do I do first?
3. What makes each stage complete?
4. What branches change the process?
5. What do I return?
6. What side effects are allowed?

Do not hide mandatory steps behind a reference pointer.

## 4. Observable completion

Every multi-step procedure needs completion criteria strong enough to distinguish done from merely plausible.

Good criteria are:

- **checkable** — evidence can confirm them;
- **demanding enough** — they cover the whole relevant surface, not one convenient example;
- **local** — they close the current step before attention moves to later work.

If a step cannot be given a useful completion bound, question whether it belongs as a step.

## 5. Positive operating language

Prefer instructions that state the target behavior. Reserve prohibitions for real guardrails. Pair a hard prohibition with the positive alternative whenever possible.

Use compact leading concepts when they genuinely reduce repeated explanation. Do not invent jargon merely to sound systematic.

## 6. Capability truth

A skill may rely only on capabilities that are observed, supplied by the user, or explicitly conditional.

For shell, browser, Git, network, MCP/connectors, generic subagents, persistent files, or deployment access:

- state the dependency;
- define a fallback when useful;
- otherwise mark the branch blocked or not verified.

Never infer one capability from a vaguely related one.

## 7. Side-effect contract

A skill that can mutate state must define what it may change and what requires explicit approval.

High-consequence actions — dependency installation, commits, pushes, deployments, destructive migrations, credential changes, public publication, production infrastructure — require explicit user authorization unless the user already requested that exact action in the current task.

## 8. Output contract

The output should make the result inspectable and handoff-friendly. Define a stable shape when structure improves correctness; do not force verbose reporting for internal routing decisions.

## 9. Composability

Name neighboring skills only to define ownership boundaries or handoffs.

Default orchestration rule:

> one phase → one primary skill → optional validator with a different failure mode

Two skills should not compete to edit the same artifact under different aesthetics or standards.

## 10. Provenance

Every skill is `OWN`, `ADAPTED`, or `UPSTREAM`.

`ADAPTED` requires `PROVENANCE.md`, source repository, source path, pinned revision, license, and a concrete local change list.

## 11. Contract specifications

Every owned skill ships with at least four contract fixtures:

1. a positive trigger;
2. a non-trigger or ownership boundary;
3. a constrained-capability or fallback case;
4. an adverse or ambiguity case.

Fixtures describe expected behavior and failure conditions. They are **specifications**, not proof that a language model will obey them.

Behavioral model evals require an actual model harness and are reported separately from deterministic repository tests.

## Release checklist

A skill is release-ready only when:

- [ ] failure mode is unique and documented;
- [ ] description has a precise trigger;
- [ ] `Use when` and `Skip when` exist;
- [ ] process has observable completion criteria;
- [ ] capability assumptions have fallbacks or explicit blocked states;
- [ ] output contract is defined;
- [ ] mutation/side-effect boundaries are defined;
- [ ] branch-specific reference is disclosed rather than bloating the main path;
- [ ] provenance classification is correct;
- [ ] four or more contract fixtures exist;
- [ ] deterministic repository validators pass;
- [ ] privacy/public-release scan passes before publication.
