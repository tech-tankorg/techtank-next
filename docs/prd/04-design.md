# Design

The design-token contract for the brand refresh, derived from event-poster brand assets.
Component-level token usage (semantic pairing, gradient utility classes) is the
`components`/`nextjs` skills' concern; this is the palette and type direction those tokens
are built from.

## Typography

A strong, neutral display typeface — geometric or grotesque sans preferred, avoiding
decorative serifs or script faces — paired with a legible humanist sans for body copy. The
pairing should read as industry-conference-grade, not startup-blog or community-newsletter.
Final pairing per visual design (current build: Inter + Space Grotesk via `next/font`).

## Color palette

Refined from event posters. Primary brand colour is teal dark; do not introduce hot pink,
true blue, or colours outside this family without explicit organizer sign-off.

| Token               | Hex       | Usage                                             |
| ------------------- | --------- | ------------------------------------------------- |
| Teal dark (primary) | `#1B4B5A` | Headlines, buttons, footer                        |
| Teal mid            | `#2A6B7C` | Secondary text and headings                       |
| Seafoam             | `#A8D5D8` | Soft backgrounds and accents                      |
| Mint                | `#5B9A8B` | Speaker circles, icons                            |
| Peach               | `#F5D4C1` | Warm gradient tone                                |
| Coral (accent)      | `#E87C4E` | CTAs and highlights (from CodeDiversity branding) |
| Blush               | `#EABFBF` | Soft pink accent                                  |
| Sand                | `#F7EDE2` | Warm off-white background                         |

**Gradient:** seafoam → sand → peach, textured/organic (matching event posters);
backgrounds use a subtle grain-texture overlay.

**Glassmorphism:** frosted-glass cards with `backdrop-blur`, rounded corners (`1.25rem+`),
soft shadows — used for cards and overlays.

**Photo-forward:** event poster images are hero content; design prioritizes real
photography over empty white space. Imagery is real event photography first — diverse,
candid, well-lit.

## Voice

Organic, welcoming, genuine — inspired by the warmth of events like the Code Diversity
meetup. Professional yet approachable, never corporate or childish. Toronto-local,
beginner-safe, confident.

## Responsiveness

Mobile-first. Breakpoints at 640 / 1024 / 1280. The `/get-involved` sticky sub-nav must
collapse into a single-line segmented control on mobile.

## Accessibility

WCAG 2.1 AA: color contrast, visible focus, alt text on all photos, semantic headings,
keyboard-reachable forms, reduced-motion support.
