Work in explicit phases. Project authority outranks generic guidance.

For each task: identify the phase; inspect relevant context; choose one primary working mode; prefer small reversible changes; validate narrowly; do not advance into review/release unless requested or the implementation phase is complete.

Do not invent requirements or capabilities. Separate current defects from optional future improvements. Use current web sources for changing technical facts. Do not install dependencies, commit, deploy, migrate destructively, or alter production infrastructure without explicit approval.

---

# Environment Audit

A capability is **confirmed only by evidence**. Similar-sounding tools do not imply one another.

## Use when

- entering a new harness, sandbox, machine, or cloud agent;
- a copied workflow assumes tools that may not exist;
- an earlier capability claim is uncertain or contradictory;
- portability/fallback planning matters.

## Skip when

- the task does not depend on uncertain capabilities;
- the current conversation already contains fresh direct evidence for the needed capability.

## 1. Bound the audit

List the capabilities the upcoming task actually needs. Do not inventory an entire machine because one task needs a test runner.

Possible surfaces:

- OS/shell;
- filesystem scope/persistence;
- Git/repository access;
- language/runtime/package manager;
- browser/runtime automation;
- outbound network/search/URL fetch;
- connectors/MCP;
- generic subagent dispatch;
- installed skills/plugins;
- credentials/write/deploy permissions.

**Complete when:** every probe has a downstream reason.

## 2. Use non-mutating probes

Prefer observation and read-only commands. Read `references/probe-catalog.md` for evidence patterns and portable fallbacks.

Evidence quality, strongest first:

1. successful direct invocation of the capability;
2. explicit runtime/tool listing from the active environment;
3. authoritative configuration of the active environment;
4. user-provided fresh observation;
5. documentation about what *could* exist — useful, but not proof it exists here.

Sanitize outputs before quoting them. Never print credentials merely to prove credentials exist.

## 3. Classify truth precisely

Use exactly these states:

- **CONFIRMED** — direct evidence supports availability;
- **ABSENT** — direct evidence shows the capability is not exposed/installed;
- **BLOCKED** — the capability exists in principle but permissions/config prevent use;
- **UNKNOWN** — not tested or evidence is insufficient.

Examples:

- a `browser_subagent` does not confirm a generic `invoke_subagent`;
- a Git repository does not confirm push permission;
- an MCP config file does not confirm the server successfully starts;
- a browser tool does not confirm Playwright is installed in the shell.

**Complete when:** no required capability is represented by inference alone.

## 4. Find the minimum fallback

For every ABSENT/BLOCKED required capability, identify a fallback that preserves the task's safety and semantics.

Examples:

- no generic subagents → sequential independent review passes;
- no browser automation → manual/browser handoff marked NOT VERIFIED;
- no MCP → local script or upstream reference when available;
- no Git write permission → produce patch/artifact rather than claiming commit.

If no safe fallback exists, report the task branch blocked instead of weakening the success criterion invisibly.

## Output

| Capability | State | Evidence | Constraint / fallback |
|---|---|---|---|

Then list:

- **Task-impacting gaps**
- **Safe fallbacks**
- **Still unknown**

## Boundaries

Audit is read-only by default. It does not install packages, authenticate accounts, modify permissions, create credentials, or enable billing. Those are separate user-authorized actions.

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
