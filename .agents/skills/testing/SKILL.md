---
name: testing
description: Testing strategy stance — don't add tests speculatively, keep the test runner plumbing green, colocate tests once a real strategy exists. Use when deciding whether to add tests, setting up a test runner, or reviewing a PR that adds test coverage.
---

# Testing

What gets tested and how. The default strategy until a project defines its own: **none**. No tests are
written until a strategy is settled in the owning project doc; coverage is never a goal in itself.

1. **Don't test everything.** Tests earn their place under the project's stated strategy; until one exists, don't add them speculatively.
2. **The plumbing stays warm.** The test runner (e.g. Vitest) stays wired and the test command stays
   green (it passes with no tests), so a strategy can land without
   re-plumbing.
3. **When tests exist, they are colocated** with what they test.