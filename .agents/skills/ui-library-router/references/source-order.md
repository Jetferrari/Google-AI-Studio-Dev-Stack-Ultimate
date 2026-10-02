# Source Order Notes

In a monorepo, “local” includes shared packages the current product already depends on or is expected to consume. Do not import from an unrelated package just because it is in the same repository.

A design-system primitive outranks a visually closer external component when adapting the primitive preserves accessibility and interaction semantics at reasonable cost.

An approved registry/template is source code ownership, not a magical dependency-free category: review license, provenance, update strategy, and copied transitive assumptions.
