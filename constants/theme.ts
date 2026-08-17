export const THEMES = {
  LIGHT: "light",
  DARK: "dark",
} as const;

/**
 * Body-text links. The persistent underline is the non-colour indicator
 * WCAG 1.4.1 requires — colour alone can't mark a link inside prose.
 */
export const PROSE_LINK =
  "text-ring underline decoration-1 underline-offset-2 hover:decoration-2 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none";
