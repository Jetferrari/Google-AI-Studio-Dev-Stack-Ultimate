---
name: ui-library-router
description: Choose the lowest-cost trustworthy source for a UI primitive, component, or pattern before custom implementation. Use when local components, an installed design system, external registries, platform primitives, and custom code are competing options.
origin: OWN
license: MIT
---

# UI Library Router

Route component work toward the **nearest fit** that the project can sustainably own.

## Use when

- implementation needs a UI component/pattern and the source is undecided;
- a user suggests adding a UI library for one feature;
- an existing component may already solve the problem;
- a registry/template is being considered for import.

## Skip when

- the source is already dictated by the project's design system;
- the task is visual direction rather than component selection;
- the component is already implemented and needs only debugging/polish.

## 1. Define the requirement, not the library

List the minimum behavior the component must provide:

- semantics/accessibility;
- interactions and states;
- visual-system fit;
- framework/runtime constraints;
- data/state integration;
- any bundle/performance constraint.

Avoid requirements copied from a candidate library's marketing surface.

**Complete when:** a candidate can be rejected for missing a real requirement.

## 2. Search from nearest to farthest

Use this source order unless evidence justifies skipping a tier:

1. existing project component/composition;
2. existing design-system primitive;
3. already-installed dependency;
4. approved registry/template/source already used by the project;
5. native/platform primitive that can be adapted cleanly;
6. new external dependency;
7. custom implementation.

Search the repository before proposing an install.

Read `references/source-order.md` for monorepo/design-system edge cases.

## 3. Compare viable candidates

Evaluate only candidates that satisfy the minimum behavior. Use the decision dimensions in `references/evaluation.md`:

- accessibility baseline;
- visual compatibility;
- API/behavior fit;
- runtime/bundle cost;
- customization friction;
- maintenance and upgrade ownership;
- license/provenance when external source is copied.

Do not choose a component solely because it looks closest in a screenshot.

**Complete when:** one route has the best overall fit or the trade-off requiring user choice is explicit.

## 4. Handle dependency boundaries

A new dependency is a project-level choice when it adds persistent runtime/build surface. Present:

- exact package/source;
- why nearer tiers failed;
- expected ongoing ownership;
- whether install is required now.

Installation requires explicit approval unless the user already asked to add that dependency.

Copied registry/template code is still third-party source; preserve license/provenance requirements.

## Output

### Requirement

### Chosen route
`local | design-system | installed | approved-source | platform | new-dependency | custom`

### Why it fits

### Rejected alternatives
Only material alternatives.

### Dependency / provenance impact

## Boundaries

This skill selects a source. It does not redesign the interface, bulk-install a component suite, or treat external code as license-free because it is copy-pasted.
