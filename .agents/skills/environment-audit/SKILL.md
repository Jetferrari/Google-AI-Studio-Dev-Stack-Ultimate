---
name: environment-audit
description: Establish an evidence-based capability matrix for a new or uncertain AI/runtime environment. Use before a workflow depends on shell, filesystem, Git, browser automation, network/search, connectors/MCP, generic subagents, skills, or write/deploy permissions that have not been confirmed.
origin: OWN
license: MIT
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
