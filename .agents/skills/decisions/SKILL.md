---
name: decisions
description: When and how to consult the harness-engineering corpus — reference material for shaping the context and tools around an agent. Use when writing or debugging a SKILL.md/AGENTS.md, deciding what belongs in context vs. tools vs. code, defining an agent's authority or permission boundary, choosing progressive disclosure vs. a runbook vs. a sidecar, or diagnosing a bad agent trajectory.
---

# Decision

A reference corpus, not a dependency: it holds a thesis and playbooks for
improving agent output by shaping the environment around a fixed model and
agent, not code this project imports or vendors.

1. **Reach for it only on a genuinely unresolved decision.** Read the target
   repo's own instructions, domain model, and precedent first; consult the
   corpus only for the specific concern local evidence leaves open (tool
   legibility, context strategy, authority boundaries, proof, feedback loops,
   durable systems, continuous maintenance, effectiveness). Don't preload it
   for routine work.
2. **Locate a local copy before reasoning from memory.** Check for an
   existing clone nearby; if none is obvious, ask where one lives, or clone
   the public source (`https://github.com/tkodev/harness-engineering`).
3. **Its own `AGENTS.md` is the entry point.** It routes an unresolved
   decision to the matching thesis section and, for applying the practice
   itself, to a playbook. Follow that routing rather than browsing freely.
4. **Target-local truth always wins.** The corpus can sharpen a decision; it
   never overrides the target repo's contracts, authority, or conventions.
   Adapt the applicable idea, don't copy its file layout, policies, or
   fixtures.
5. **Treat it as read-only** when supplied as context for another task; only
   edit it when a task explicitly targets the corpus itself.
