Work in explicit phases. Project authority outranks generic guidance.

For each task: identify the phase; inspect relevant context; choose one primary working mode; prefer small reversible changes; validate narrowly; do not advance into review/release unless requested or the implementation phase is complete.

Do not invent requirements or capabilities. Separate current defects from optional future improvements. Use current web sources for changing technical facts. Do not install dependencies, commit, deploy, migrate destructively, or alter production infrastructure without explicit approval.

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

---

# Public Repo Gate

A clean current tree is necessary but not sufficient. Public release requires **content, history, and provenance** review.

## Use when

- a private/local repository is about to become public;
- a public release/tag/archive is being prepared;
- previously private artifacts or third-party code were added.

## Skip when

- the repository will remain private and no public artifact is being produced;
- the task is ordinary code review unrelated to publication.

## 1. Define the publication surface

Record what is becoming public:

- current working tree/archive only;
- Git repository including history;
- release artifacts/binaries;
- generated docs/site;
- screenshots/media.

The scan must cover the actual publication surface.

**Complete when:** nothing can become public through an unexamined channel.

## 2. Scan the current content

Run the repository privacy scanner if available, then manually inspect high-risk surfaces from `references/sensitive-surfaces.md`.

Look for:

- credentials, tokens, private keys, credential-like URLs;
- `.env` or local config;
- personal filesystem paths and contact information not intentionally public;
- private/internal project names;
- proprietary architecture/docs;
- real handoffs/transcripts/logs;
- screenshots/media with identifying/private information;
- exported browser/network payloads;
- database dumps/fixtures copied from real systems.

Use a local ignored denylist for confidential names that should not be written into public scanner configuration.

A regex pass is a detector, not proof of safety.

**Complete when:** every current-tree blocker candidate has been inspected or explicitly remains unresolved.

## 3. Inspect Git history when history will be public

If an existing Git history is part of publication, search history for removed secrets/private files and review suspicious large/binary commits.

A secret deleted from HEAD may still be public in history.

If history inspection is unavailable, classify it **NOT VERIFIED** and do not claim a full public-history clearance.

**Complete when:** history is reviewed for the intended publication surface or the gap is explicitly NOT VERIFIED.

## 4. Verify provenance and license obligations

For every copied/adapted third-party artifact confirm:

- source repository/path;
- pinned revision;
- license;
- required notices retained;
- local modifications documented.

For assets/fonts/data, confirm redistribution rights separately from code license assumptions.

Read `references/license-review.md` for the checklist. Unclear redistribution permission is a blocker to publishing that artifact, not a reason to guess.

## 5. Inspect public metadata and docs

Check:

- README/examples use synthetic/public-safe names;
- repository links do not point to private resources;
- badges/workflows do not expose private endpoints;
- issue templates do not solicit secrets;
- sample config contains placeholders only;
- docs do not claim capabilities/tests that were never verified.

## 6. Classify findings

Use:

- **BLOCKER** — must be fixed before publication (credential/private proprietary content/license incompatibility);
- **REVIEW NEEDED** — ambiguous privacy/licensing/history issue requiring owner judgment;
- **CLEAR** — checked surface has no identified blocker.

After remediation, rerun the affected scan/review. For exposed credentials, rotation/revocation is separate from deleting the file.

## Output

### Publication surface
### Automated scan evidence
### Manual review
### Git history
### Provenance/licenses
### BLOCKERS
### REVIEW NEEDED
### NOT VERIFIED
### Status
`BLOCKED | CLEAR FOR THE REVIEWED SURFACE`

## Boundaries

The gate never makes a repository public, changes visibility, rewrites history, rotates credentials, or deletes evidence without explicit authorization. “CLEAR” applies only to the surfaces actually reviewed.
