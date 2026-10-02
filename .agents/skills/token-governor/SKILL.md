---
name: token-governor
description: Keep a large coding or research task inside a high-signal working set. Use when repository breadth, long logs, repeated reads, many documents, or a long conversation are diluting attention or causing unnecessary context load.
origin: OWN
license: MIT
---

# Token Governor

Treat context as a **working set**: the smallest evidence that can still support the current decision.

## Use when

- repository scope is large or unfamiliar;
- logs/output are bulky;
- the same files are being reread;
- several authority documents compete for attention;
- the session is long enough that stale context is affecting decisions.

## Skip when

- the task is already narrow and the necessary evidence fits comfortably in context;
- removing context would cost more than it saves.

## 1. Name the decision

Write the current question in one sentence. Retrieval that cannot change that decision is out of scope for the current working set.

**Complete when:** every planned read has a reason tied to the question.

## 2. Build an evidence map

Separate evidence into:

- **authority** — requirements, accepted decisions, invariants;
- **surface** — files/symbols/diff directly changed or inspected;
- **feedback** — tests, runtime output, logs, browser evidence;
- **unknowns** — facts that could still change the decision.

Use `references/retrieval-ladder.md` for large repositories.

**Complete when:** each unknown has the cheapest likely source that can resolve it.

## 3. Retrieve narrowly

Prefer, in order:

1. search/index result;
2. exact symbol, heading, range, or diff;
3. focused file;
4. directory/subsystem;
5. broad repository read only when the task genuinely needs it.

Generated output, dependencies, lockfiles, caches, and historical logs stay out unless they are evidence for the question.

## 4. Distill stable facts

When bulky evidence has been consumed, replace it with a compact **evidence ledger** containing:

- confirmed facts;
- source/location;
- unresolved questions;
- invalidated assumptions.

Do not compress away exact requirements, accepted architecture, failing symptoms, security constraints, or evidence that later phases must verify.

Use `references/evidence-ledger.md` when a handoff or long session needs a durable summary.

**Complete when:** the raw material can be reread on demand, but the active reasoning no longer depends on holding all of it at once.

## 5. Control rereads

Reread when:

- the source changed;
- the previous extract did not cover the needed branch;
- a contradiction appears;
- exact wording matters.

Otherwise reuse the ledger and cite the original location.

## Output

Usually no special user-visible report is needed. When context management itself is the task, return:

- current decision;
- retained evidence;
- discarded/deferred material;
- unresolved unknowns;
- next narrow retrieval.

## Boundaries

Context efficiency never outranks correctness. If the evidence needed to decide is large, load it. The goal is high signal, not artificially low token count.
