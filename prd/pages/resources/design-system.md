# Design System

**Route:** `/resources/design-system`
**Status:** Public — serves as the canonical brand guidelines page for the site

---

## Purpose

A living style guide and component reference for developers and designers working on
the TechTank TO website. Centralises every visual decision in one inspectable, rendered
page so contributors can look up tokens, copy class names, and verify component states
without digging through source files.

Not intended for public visitors. The page is excluded from search indexing and should
never appear in the global navigation or footer.

## Primary audience

Contributors, designers, and Claude Code sessions working on this repository.

## Key messages

- One authoritative source for brand colours, gradients, typography, and utility classes.
- Every reusable component pattern rendered in context (buttons, cards, surfaces, CTAs).
- Helps prevent token drift and keeps visual output consistent across pages.

## Content sections

1. **Brand palette** — primary teal / teal-dark / amber swatches with hex values and usage notes.
2. **Accent tokens** — coral, mint, seafoam, sand, peach, blush.
3. **Semantic tokens** — background, foreground, muted, border.
4. **Gradient utilities** — `.gradient-brand`, `.gradient-brand-vertical`, `.gradient-hero`, `.gradient-brand-soft`.
5. **Type scale** — Space Grotesk display sizes (6xl–xl) and Inter body sizes (xl–xs); overline pattern.
6. **Buttons** — all variants (primary, secondary, outline, ghost), sizes (lg, md, sm), icon usage, and disabled states.
7. **Tags & Pills** — filled, outline, soft-teal, soft-amber, seafoam variants.
8. **Cards** — icon card, checklist card (teal and amber), stat card, hover-link card.
9. **Surfaces & effects** — `.glass`, `.glass-subtle`, `.glass-dark`, `.shadow-soft`, `.shadow-soft-lg`.
10. **Process stepper** — numbered step component used in host and sponsor flows.
11. **CTA section pattern** — gradient section with centred headline and primary button.

## CTAs

None. The page is informational; visitors arrive via the media-kit "Brand Guidelines" link.

## Functional requirements

- All swatches, gradients, and component examples must render using real CSS classes and tokens
  (not mocked or hardcoded inline styles) so the page faithfully reflects production output.
- When new tokens or components are introduced, this page must be updated in the same PR.

## Acceptance criteria

- Page loads at `/resources/design-system` in the local dev server.
- All brand and accent colour swatches show the correct hex and Tailwind class name.
- All four gradient utilities render visibly distinct swatches.
- All button variants and sizes render without visual regressions.
- Page is linked from the media-kit as "Brand Guidelines".
