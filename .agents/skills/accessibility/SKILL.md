---
name: accessibility
description: Web accessibility baseline (WCAG 2.0 AA / AODA) for landmarks, keyboard operability, focus states, motion, and contrast. Use when building or reviewing UI components, pages, navigation, overlays, or any self-starting animation/motion in a web frontend.
---

# Accessibility

The floor, not a cleanup pass.

1. **WCAG 2.0 AA (AODA) is the baseline:** semantic landmarks (`header`/`main`/`footer`/`nav`/`section`), one `h1` per page, disclosures and nav keyboard-operable with correct ARIA, focus trapped in any modal overlay while open, visible `ring` focus states, decorative art `aria-hidden`.
2. **Respect `prefers-reduced-motion`**: ambient and entrance animations pause or reduce; every motion moment has a static equivalent, and nothing is readable only through motion.
3. **Contrast is checked in every theme scope**: AA contrast for text tokens (`muted-foreground` on `background` included) in the base theme and inside any inverse-color section.
4. **Self-starting motion carries a control**: anything that begins moving on its own and runs past a few seconds (a marquee drift, a carousel) pairs with a keyboard-operable pause. A hover pause is not one: it reaches neither keyboard nor touch, and the reduced-motion path only serves the readers who set the preference.
5. **Each landmark of a kind is named**: a page with more than one `nav` labels each (`Primary`, `Footer`, `Menu`), since an unnamed pair is indistinguishable to the reader listing them. The name is passed at the call site, never baked into the component.