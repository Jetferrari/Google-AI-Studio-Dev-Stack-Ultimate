# Retrieval Ladder

Escalate scope only when the narrower rung cannot resolve the current unknown.

1. index/search result;
2. exact symbol/heading/range;
3. focused file;
4. nearest dependent/caller set;
5. subsystem/directory;
6. repository-wide scan.

For logs: search exact symptom/time/correlation id before reading whole logs.
For diffs: start changed hunks, then expand to context/callers only when semantics require it.
For docs: read the authority document that owns the fact, not several summaries of it.
