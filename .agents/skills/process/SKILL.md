---
name: process
description: Project delivery methodology for planning and initial implementation — the PRD pipeline, division of truth between repo/design tool/GitHub, and milestone kinds. Use when planning work, cutting milestones, deciding what belongs in which doc, or setting up a delivery process for a new project.
---

# Process

How work is planned and initially built: the sources of truth, how they stay
honest with each other, and how milestones are cut and delivered. This skill
is the methodology layer and stays project-agnostic; a project's PRD and plan
derive their structure from it.

## The working loop

Front-loaded on distillation and direction before any build:

> Gather inspiration → distill the essence → set direction → design → plan implementation → deliver.

The brief and observations stages of the PRD (§The PRD) are the path toward the
design: gathering, distillation, and direction-setting. The **design file is the
designed solution** that path produces, transcribed into the design contract.
Planning the implementation lays out the milestone graph (§Milestones) from the
PRD and the design.

## The PRD

**Locate the PRD folder before writing to it.** Don't assume a path exists:
check the repo for an existing PRD or docs location first; if one exists but
isn't obvious, ask the user where it lives. If none exists, create `docs/prd/`.
The PRD lives inside the repo it governs, never in an external notes system:
it's canonical, versioned material (§Division of truth), not a side note.

The PRD folder is the numbered product pipeline, read in order; each stage
derives from the ones before it:

| Stage | Owns |
| --- | --- |
| `01-brief.md` | The distilled intent: what it is, who it's for, the aesthetic, references |
| `02-observations.md` | Research and risks, each paired with the direction taken |
| `03-solution.md` | The settled design at concept level: concept, surfaces, systems |
| `04-design.md` | The design-token contract, transcribed from the design file |
| `05-architecture.md` | Stack, information architecture, repo structure, data layer |
| `06-plan.md` | The plan: the milestone graph (kinds, dependencies), cut from the stages above |

- **Observations follow the priority frame**, the order problems get worked in:
  1. **The Problem**: one or two sentences.
  2. **The Hardest Failure Mode**: what breaks worst; design around it first.
  3. **Key Design Decisions**: the load-bearing choices everything else hangs
     off.
  4. **What to Prototype First**: the riskiest slice to validate early; this
     names the proving surface.
- **Directions are research, not contract.** An observation's direction lands
  only when the design file (and its transcription in the design contract)
  adopts it; where they conflict, the design contract wins.

## Division of truth

Three authorities, each owning a different kind of truth and each with the
rules that keep it honest:

- **The repo holds law and state**: the PRD (ending in the plan, `06-plan.md`
  in the PRD folder, §The PRD, the milestone list with live status), the standards,
  and the code; versioned, canonical for intent, contract, and work status. Docs and code
  change together **in the same change**; a discovery the docs missed (a
  token value, a variant, a breakpoint) is written back to the owning doc,
  never left in a commit message or comment. Docs carry intent and contract;
  function-level detail belongs in the code. Each fact lives in exactly one
  owning doc: everywhere else points or summarizes, never restates, and when
  two docs disagree the owner wins. The plan's milestone status is work state,
  not contract; a fact that matters beyond a milestone moves to the owning doc.
- **The design tool holds pixels** (e.g. Figma): design questions resolve against
  its nodes, not guesswork. Use structured design context (metadata/variables/code), not
  screenshots, when reading it. A component isn't done until it's been
  compared against its design node at desktop and mobile widths.
- **GitHub holds review**: the milestone PR, machine checks, preview deploys.
  Nothing lives only on GitHub; a milestone's status flips in the plan, in the
  same PR as the work that completes it.

When all three still leave a question genuinely ambiguous, ask; don't
improvise the product.

## Milestones: the human gates

A milestone is a reviewable increment behind a human gate, instantiated as an
**entry in the plan** (`06-plan.md` in the PRD folder, §The PRD) binding it to
concrete scope, a definition of done, and a status. Milestones form a
dependency graph, not a fixed sequence, laid out in the plan; three kinds set
what may run in parallel:

| Kind | The work | Parallelism |
| --- | --- | --- |
| **System** | Creates or proves shared conventions: scaffold, tokens, the shell | Serial; nothing may consume unproven conventions |
| **Surface** | Delivers one surface on conventions already proven | Parallel with other surface milestones, as sibling branches with independent gates |
| **Sweep** | One cross-cutting pass over everything: coherence, polish, audits, launch | Serial, after the surfaces it sweeps |

- **System milestones gate on a specimen.** A system milestone has no surface
  to review, so its gate reviews a specimen artifact instead: a design-system
  page rendering every token, ramp, and primitive, compared against the design
  system file. The specimen stays in the site as a living styleguide route.
- **The readiness rule.** A milestone may open when everything it consumes is
  merged and its inputs are settled: design frames in the design file, content
  in the data source. An unready surface (undesigned, content missing) is a
  waiting node, never a blocker for its siblings.
- **The proving surface.** The first surface milestone is chosen deliberately:
  the riskiest or most representative surface, named by the observations
  stage, built through every layer end to end. Its gate is what unlocks
  surface parallelism.
- **The initial arc.** Foundations (system) → the proving surface. This is the
  initial build: it proves the shared conventions and one full surface before
  any further surface work is planned or parallelized.

## Delivering a milestone

Every milestone runs the same cycle. The human steers at the two cheap points
(the plan and the gate); agents and machines carry the middle.

1. **Plan.** Scope comes from the PRD and the design frames: the milestone's
   concrete scope and definition of done, cut as one entry in the plan. An
   unknown that blocks the cut gets a **spike** first: a throwaway experiment
   answering one question; spike code is never merged, its answer is written
   back to the owning doc. The human approves the scope before build starts;
   steering a plan costs minutes, steering merged code costs days.
2. **Build.** The milestone's work lands on its own branch (§Branches and PRs)
   as a single PR into `main`, passing machine checks and a review before
   merge.
3. **Gate.** The human reviews the outcome on the milestone branch's deployed
   preview against the design frames at desktop and mobile widths. Outcomes,
   not diffs; a human reads code only on escalation.

## Branches and PRs

- One branch per milestone (`feat/m02-works`), cut from `main`.
- One PR per milestone, merged into `main` at the gate; its merge flips the
  milestone's status in the plan, in the same diff.

## Review

Three tiers, split by kind, not by priority:

- **Machines check mechanics.** Lint, types, tests, build, and a green preview
  deploy gate the milestone PR; a human never spends attention on what CI can
  catch.
- **Agents review correctness.** Against the standards and the milestone's
  definition of done.
- **Humans review taste.** At plan and gate only (§Delivering a milestone): the
  qualities no check can score; fidelity to the design, motion feel, whether
  the thing is good.
