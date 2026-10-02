---
name: public-repo-gate
description: Gate a repository immediately before public publication or a public release. Use to find secrets, personal/private project data, proprietary artifacts, risky history, missing third-party provenance, license obligations, and misleading public documentation before anything becomes publicly accessible.
origin: OWN
license: MIT
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
