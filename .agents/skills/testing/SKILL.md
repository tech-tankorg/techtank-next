---
name: testing
description: Testing strategy — the testing pyramid (unit base, integration middle, e2e few), when to reach for each layer, and keeping the runner green. Use when deciding what kind of test to add, setting up a test runner, or reviewing a PR that adds test coverage.
---

# Testing

What gets tested, at which layer, and how much of each.

## The pyramid

Tests are shaped like a pyramid, narrowing as they get slower and more end-to-end:

1. **Unit (the base, most numerous).** Pure functions, single components, isolated logic —
   fast, deterministic, no network/DOM/browser. Write these liberally; cheap to write, cheap
   to run.
2. **Integration (the middle, fewer).** Multiple units wired together as they'd run in
   production — a component with its hooks, a route handler with its data layer. Covers the
   seams a unit test can't: whether A actually calls B correctly.
3. **End-to-end (the top, fewest).** A real browser driving a real (or realistically mocked)
   app through a full user journey. Slow and expensive to write and maintain — reserved for
   the handful of flows whose breakage would be catastrophic (the primary conversion path,
   checkout, auth).

Fewer tests as you go up the pyramid, not more. An inverted pyramid (heavy e2e, thin unit) is
slow, flaky, and expensive to maintain — flag it as a smell.

## Rules

1. **Tests earn their place under the project's stated strategy.** Don't add speculative
   coverage; each test maps to a real risk at its layer.
2. **The plumbing stays warm.** The test runner stays wired and the test command stays green
   (it passes with no tests present), so a strategy can land without re-plumbing.
3. **Colocate tests with what they test.** Unit and integration tests sit next to their
   source file; e2e tests live in their own top-level suite, since they don't belong to one
   file.
4. **Default to the lowest layer that catches the risk.** Reach for a unit test before an
   integration test, and an integration test before an e2e test; climb the pyramid only when
   a lower layer genuinely can't catch the risk.
