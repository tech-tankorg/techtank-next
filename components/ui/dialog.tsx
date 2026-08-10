"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils/theme";

// Keep in sync with the `duration-200` classes.
const TRANSITION_MS = 200;

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

interface DialogProps {
  open: boolean;
  onClose: () => void;
  labelledBy?: string;
  className?: string;
  children: ReactNode;
}

export function Dialog({ open, onClose, labelledBy, className, children }: DialogProps) {
  const [mounted, setMounted] = useState(false);
  // Stays true through the exit transition so the close animation can play.
  const [rendered, setRendered] = useState(open);
  // Drives the enter/leave transition between the two class sets.
  const [entered, setEntered] = useState(false);

  const panelRef = useRef<HTMLDialogElement>(null);
  const restoreFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => setMounted(true), []);

  // Mount on open; on close, play the exit transition, then unmount.
  useEffect(() => {
    if (open) {
      setRendered(true);
      return;
    }
    setEntered(false);
    const timer = setTimeout(() => setRendered(false), TRANSITION_MS);
    return () => clearTimeout(timer);
  }, [open]);

  // Flip to the "to" state a couple of frames after mount so the browser
  // paints the transition's start.
  useEffect(() => {
    if (!rendered) return;
    let inner = 0;
    const outer = requestAnimationFrame(() => {
      inner = requestAnimationFrame(() => setEntered(true));
    });
    // rAF is paused in background tabs; the timer still fires, so the dialog
    // can't get stuck in its invisible "from" state.
    const fallback = setTimeout(() => setEntered(true), 80);
    return () => {
      cancelAnimationFrame(outer);
      cancelAnimationFrame(inner);
      clearTimeout(fallback);
    };
  }, [rendered]);

  // Scroll lock, then restore focus on close. Keyed on `open` alone so a
  // parent re-render can't retrigger the restore.
  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prevOverflow;
      restoreFocusRef.current?.focus?.();
    };
  }, [open]);

  // Move focus into the panel once it's in the DOM. Keyed on `rendered`, not
  // `open`: when `open` flips true the portal hasn't mounted, so the ref is null.
  useEffect(() => {
    if (!rendered) return;
    restoreFocusRef.current = document.activeElement as HTMLElement | null;
    panelRef.current?.focus();
  }, [rendered]);

  // Escape to close, plus a Tab focus trap.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab") return;

      const panel = panelRef.current;
      if (!panel) return;
      const focusables = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (focusables.length === 0) {
        e.preventDefault();
        return;
      }
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;
      if (e.shiftKey && (active === first || active === panel)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!mounted || !rendered) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Overlay */}
      <button
        type="button"
        aria-label="Close dialog"
        onClick={onClose}
        className={cn(
          "absolute inset-0 cursor-default bg-black/70 transition-opacity duration-200 ease-out motion-reduce:transition-none",
          entered ? "opacity-100" : "opacity-0",
        )}
      />

      {/* Panel */}
      <dialog
        ref={panelRef}
        open
        tabIndex={-1}
        aria-modal="true"
        aria-labelledby={labelledBy}
        className={cn(
          "shadow-soft-lg relative z-10 m-0 flex max-h-full w-full max-w-md flex-col overflow-hidden rounded-2xl border border-border bg-background p-0 text-foreground outline-none",
          "md:max-w-xl lg:max-w-2xl",
          "origin-center transition duration-200 ease-out motion-reduce:transition-none",
          entered ? "translate-y-0 scale-100 opacity-100" : "translate-y-3 scale-[0.97] opacity-0",
          className,
        )}
      >
        {/* Close — floats in the corner so it never adds an empty band above the title. */}
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 z-10 size-9"
        >
          <X className="size-5" />
        </Button>

        <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-hidden p-6 md:p-8">{children}</div>
      </dialog>
    </div>,
    document.body,
  );
}
