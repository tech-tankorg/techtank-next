"use client";

import { useEffect } from "react";

/**
 * Runs axe-core against the live DOM and reports violations to the browser
 * console. Development only — the dynamic imports are dead-code eliminated
 * from production builds by the `NODE_ENV` guard.
 */
export function AxeReporter() {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") return;

    let cancelled = false;

    void (async () => {
      // axe monkey-patches `React.createElement`, so it needs the mutable CJS
      // default export — the ESM namespace object is frozen and patching it throws.
      const [React, ReactDOM, axe] = await Promise.all([
        import("react").then((m) => m.default),
        import("react-dom").then((m) => m.default),
        import("@axe-core/react").then((m) => m.default),
      ]);

      if (cancelled) return;

      await axe(React, ReactDOM, 1000);
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
