# AutoFix AI Architecture

AutoFix AI is organized as a multi-agent engineering platform. The frontend presents a polished engineering dashboard, while the backend exposes permission-gated repository analysis APIs that can be connected to GitHub OAuth, Codex execution environments, and GPT-5.6 reasoning workflows.

## Agent Orchestration

1. Repository Intelligence Agent maps languages, frameworks, folders, and dependency boundaries.
2. Debug Agent identifies build failures, broken imports, type errors, and dependency conflicts.
3. Security Agent runs only after repository authorization and reports risk, impact, and secure patches.
4. Performance Agent looks for expensive loops, duplicated work, slow queries, and API bottlenecks.
5. Test Agent creates missing tests and verification commands for every code change.
6. Documentation Agent updates README, architecture notes, changelogs, and PR explanations.
7. DevOps Agent reviews Docker, CI/CD, environment variables, and deployment configuration.

## GPT-5.6 and Codex Usage

GPT-5.6 powers planning, root-cause analysis, tradeoff explanations, and engineering report generation. Codex performs repository inspection, code modification, test execution, and pull request preparation in an auditable workspace.

## Safety Principles

- Never scan repositories without explicit user authorization.
- Never silently modify code; every change includes problem, root cause, selected solution, tradeoffs, and final fix.
- Every recommendation includes confidence and verification status.
