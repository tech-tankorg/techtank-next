---
name: writing
description: House style for project prose — docs, plans, PR and commit bodies. Declarative voice, load-bearing sentences, rationale inline, structure and mechanics rules. Use when writing or editing documentation, PR descriptions, commit bodies, or standards/process docs (not product/site copy, which is the design's voice).
---

# Writing

How project prose reads: docs, the plan, PR and commit bodies. This skill owns
the sentences, not where facts live. Product or site copy is out of scope, since its
voice is the design's.

## Voice

1. **Declarative, present tense.** State what is and what wins, not what should
   ideally happen. No hedging, no marketing filler.
2. **Every sentence is load-bearing.** A sentence earns its place by adding a
   fact, a rule, or a reason; otherwise cut it. Conciseness comes from selecting
   what to say, not compressing how it's said: full sentences stay, whole
   points go.
3. **Rationale rides along.** A rule carries its why in the same sentence,
   attached with a colon, semicolon, or parenthetical; never a separate
   paragraph of justification.
4. **One line of personality.** A doc's opening line may carry an aphorism;
   everything after it is working prose.

## Structure

1. **Open with ownership.** A doc's first lines state what it owns and hand
   neighboring topics to their owners ("what the metadata contains is seo's
   concern"), then get to work. No table of contents, no preview of what the
   doc is about to say.
2. **Bold-lead rules.** Rule lists are numbered; each item opens with a bold
   lead naming the rule, then the detail.
3. **Tables carry enumerable facts** (tokens, stages, routes). Reasoning stays
   in the surrounding prose, never in cells.
4. **Headings name what the section owns**, in sentence case, with a colon
   gloss only when the bare name is opaque ("Milestones: the human gates").

## Economy

1. **Summarize and point, never restate.** A neighboring doc's fact appears
   only as a pointer or a one-line summary; this is the prose form of the
   one-owning-doc rule.
2. **Standards name the surrounding docs by role, not by link.** "The design contract's
   concern," not a hardcoded path; standards stay standalone and
   portable. Standards may link standards; project docs link each other freely.
3. **Link once.** A doc or term links at first mention; after that, plain text.
   Section references use `§Section`, in-doc and across docs alike.

## Mechanics

- Filenames, tokens, commands, and identifiers in `code` format.
- **Bold** for rule leads and load-bearing terms; *italics* for one word of
  stress at a time. Asterisk emphasis, never underscores.
- **No em dashes.** Join clauses with a colon, a semicolon, parentheses, or a
  new sentence.
- Words over symbols in prose ("and", not "&").
- **Don't rely on an agent's built-in memory system for durable project facts.** The repo is the memory:
  durable guidance belongs in the owning doc under `docs/`.