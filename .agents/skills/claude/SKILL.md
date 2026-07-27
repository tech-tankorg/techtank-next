---
name: claude
description: Claude Code repo hygiene — keeping CLAUDE.md a symlink to AGENTS.md and gitignoring Claude Code's local-only state. Use when setting up a repo for Claude Code, or auditing one that already has a CLAUDE.md and/or AGENTS.md.
---

# Claude

Repo-level conventions for Claude Code, kept separate from any tool-agnostic
instructions in `AGENTS.md`.

1. **`CLAUDE.md` is a symlink to `AGENTS.md` at the repo root**, never a
   second copy of the same instructions: `ln -s AGENTS.md CLAUDE.md`. If
   `AGENTS.md` exists and `CLAUDE.md` doesn't, or exists as a plain file
   instead of a symlink, create or replace it with the symlink. If neither
   file exists yet, don't invent one; that's a separate decision.
2. **Gitignore Claude Code's local-only state**: add `.claude/settings.local.json`
   (personal permission overrides, machine-specific) and `.claude/worktrees`
   (scratch state for isolated worktree runs) to `.gitignore`. Neither belongs
   in version control.
