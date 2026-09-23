# Architecture Decision Records

## Purpose

Architecture Decision Records (ADRs) document important technical decisions made during the development of Guild Wars Armory.

They preserve the context behind each decision and help keep the project's technical choices understandable over time.

## Decision records

| ADR                                         | Decision              | Status   |
| ------------------------------------------- | --------------------- | -------- |
| [ADR-001](ADR-001-use-local-static-data.md) | Use local static data | Accepted |

## When to create an ADR

An ADR should be created when a decision has a meaningful impact on the architecture or long-term development of the project.

Examples include:

- choosing a technology or major dependency;
- defining how application data is stored;
- introducing a new architectural pattern;
- selecting a deployment architecture;
- changing an important existing technical decision.

Minor implementation details and easily reversible code changes do not require an ADR.

## File naming

ADR files follow this naming convention:

```text
ADR-XXX-short-description.md
```

Examples:

```text
ADR-001-use-local-static-data.md
ADR-002-example-decision.md
```

ADR numbers are sequential and must not be reused, including when a decision is superseded or deprecated.

## ADR structure

Each ADR should use the following structure:

```markdown
# ADR-XXX — Decision title

## Status

Proposed | Accepted | Superseded | Deprecated

## Context

Describe the problem, constraints, and situation that require a decision.

## Decision

Describe the chosen solution.

## Consequences

Describe the main positive and negative consequences of the decision.
```

An ADR may also include references to related issues, documentation, or superseding decisions when useful.

## Status conventions

An ADR can have one of the following statuses:

- **Proposed** — the decision is being considered;
- **Accepted** — the decision has been approved and is currently applied;
- **Superseded** — the decision has been replaced by another ADR;
- **Deprecated** — the decision is no longer recommended or relevant.

## Updating decisions

Accepted ADRs should not be rewritten when the architectural decision changes.

A new ADR should document the new context and decision. The previous ADR should then be marked as **Superseded** and reference the ADR that replaced it.

Small corrections that do not change the meaning of a decision, such as spelling or formatting fixes, may be applied directly.
