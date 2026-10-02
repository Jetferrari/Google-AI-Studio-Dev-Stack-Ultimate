---
name: project-bootstrap
description: Configure the minimum agent-facing context for a new or existing repository without imposing a foreign architecture. Use when a project is entering this stack and its authority, context, ADR/glossary layout, handoff convention, or skill pointers are missing or unclear.
origin: OWN
license: MIT
---

# Project Bootstrap

Bootstrap is **adoption, not colonization**. Read the project first; add only the context scaffolding it lacks.

## Use when

- starting this stack in an existing repository;
- creating a new project and deciding where durable agent context should live;
- agent instructions/domain/ADR/handoff locations are missing or contradictory.

## Skip when

- the project already has coherent governance and the current task does not need to change it;
- the user only wants feature implementation.

## 1. Classify the project

Choose the branch:

- **brownfield** — existing code/conventions/decisions;
- **greenfield** — little or no durable project structure;
- **multi-context** — genuinely independent packages/domains need separate vocabularies or governance.

Do not call a repository multi-context merely because it has several folders. Read `references/bootstrap-branches.md` for signals.

**Complete when:** one branch explains where authority should live without unnecessary duplication.

## 2. Discover existing authority

Inspect, as available:

- root agent instructions (`AGENTS.md`, `CLAUDE.md`, equivalent);
- README/contributing docs;
- architecture/spec/ADR directories;
- glossary/domain documentation;
- package/build/test/lint configuration;
- design-system conventions;
- issue/handoff/work tracking conventions.

Create an **authority map**: what currently decides behavior, architecture, domain terms, and delivery workflow.

**Complete when:** you can say which existing files should be preserved and which gaps actually matter.

## 3. Propose the minimum additions

Possible artifacts:

- agent instruction pointer file;
- project context/glossary;
- ADR location;
- handoff location/template;
- skill pointers;
- issue-tracker/workflow note.

Prefer pointers to duplicate prose. Do not copy package scripts, dependency versions, or obvious directory facts into agent docs when the environment can read them directly.

For brownfield projects, show the proposed files/blocks before writing if they introduce a new governance convention.

**Complete when:** every proposed artifact has a consumer and a reason.

## 4. Write idempotently

Update existing sections in place rather than appending duplicates. Preserve surrounding user text. Follow the project's naming/layout conventions where they already solve the same problem.

Greenfield defaults are intentionally modest; see `references/minimal-layout.md`.

No feature code changes belong in bootstrap.

## 5. Validate discoverability

Verify:

- pointers resolve to real files;
- no duplicate authority was created;
- the chosen context layout matches the project branch;
- no project secret/private material was copied into generic/public tooling.

**Complete when:** a fresh agent can locate project authority without a tour from the previous session.

## Output

- **Project branch** — brownfield / greenfield / multi-context;
- **Detected stack** — only relevant facts;
- **Authority map**;
- **Added/updated**;
- **Intentionally left alone**;
- **Recommended first phase**.

## Boundaries

Bootstrap does not redesign architecture, install dependencies, migrate issue trackers, rewrite existing governance, or create feature code unless separately authorized.
