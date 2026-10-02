---
name: skill-auditor
description: Decide whether an agent skill should be adopted upstream, adapted, rewritten, or rejected. Use before importing third-party skills, publishing owned skills, or moving a skill across AI harnesses where trigger quality, portability, side effects, context cost, provenance, or overlap may change behavior.
origin: OWN
license: MIT
---

# Skill Auditor

A skill must earn both its **behavioral value** and its **maintenance/context cost**.

## Use when

- evaluating a third-party skill for this stack;
- moving a skill to a different harness/OS/tool environment;
- deciding whether two skills overlap;
- reviewing an owned skill before release.

## Skip when

- the skill has already passed the same audit at the same pinned revision and environment assumptions have not changed;
- the request is to execute the skill rather than assess it.

## 1. Freeze the subject

Record:

- skill name/path;
- source repository and pinned revision when third-party;
- license/provenance status;
- target harness/environment;
- neighboring skills that may overlap.

Do not audit “latest” without recording what revision was actually read.

**Complete when:** another reviewer could retrieve the exact same source.

## 2. Establish the failure mode and trigger

Ask:

- what observable failure does this skill prevent?
- can a real prompt reliably trigger it?
- what prompts should *not* trigger it?
- does the description spend permanent context on synonyms/no-ops?

A skill without a unique failure mode is a candidate for merge/rejection.

## 3. Audit the procedure

Apply the rubric in `references/rubric.md` across:

- invocation precision;
- ownership/non-trigger boundary;
- ordered process or coherent reference discipline;
- completion criteria;
- output contract;
- side-effect contract;
- progressive disclosure/context load;
- composability.

Score evidence, not prose volume. A concise skill can outperform a long one.

**Complete when:** every rubric axis has evidence and a gap note if not satisfied.

## 4. Audit portability and safety

Read `references/portability.md` and enumerate every assumption about:

- OS/shell/command syntax;
- filesystem paths/persistence;
- package managers/runtimes;
- browser tooling;
- network/web fetch;
- MCP/connectors;
- generic subagents;
- Git/issue tracker;
- credentials/deploy/write access.

Classify assumptions as portable, conditional with fallback, or hard incompatible.

Also list side effects: installs, commits, pushes, deploys, external writes, destructive operations, generated artifacts.

**Complete when:** the target harness can execute the skill without a hidden capability assumption.

## 5. Audit provenance and licensing

For copied/adapted material, verify source, revision, license, required notices, and local changes. “Inspired by” is not an acceptable label for copied text.

If license scope is unclear, do not vendor the content; prefer an upstream link until resolved.

## 6. Test overlap

Compare the candidate against neighboring skills on:

- trigger;
- artifact edited;
- decision authority;
- completion condition.

Two skills may coexist when they address different failure modes. If both claim the same decision, merge or make one a validator.

## Verdict

Choose exactly one:

- **ADOPT UPSTREAM** — use canonical source; no local copy needed;
- **ADAPT** — upstream is valuable but target-harness changes are necessary;
- **REWRITE** — underlying failure mode is valuable but the implementation is too coupled/unsafe/overlapping;
- **REJECT** — insufficient unique value or unacceptable risk/cost.

For ADAPT/REWRITE, provide the **minimum** required change set.

## Output

### Subject
### Failure mode
### Rubric
### Capability/side-effect findings
### Provenance/license
### Overlap
### Verdict
### Required changes

## Boundaries

An audit does not install, enable, or publish the skill. It does not infer license permission beyond the license text actually observed.
