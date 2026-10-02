# Sensitive Surfaces

High-risk public-release surfaces include:

- `.env*`, local settings, CLI auth/config;
- logs, HAR files, trace dumps, browser exports;
- screenshots and screen recordings;
- database dumps and “sample” data from real systems;
- handoff/session transcripts;
- generated build metadata containing paths/hosts;
- CI/workflow secrets accidentally echoed into fixtures;
- remote URLs embedding credentials;
- PDFs/docs copied from private workspaces;
- image EXIF/metadata when privacy matters;
- Git history, tags, release attachments and LFS objects.

Manual review is required for binary/media artifacts that text scanners cannot interpret.
