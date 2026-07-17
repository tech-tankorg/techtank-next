"use client";

import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils/theme";

interface DialogProps {
  open: boolean;
  onClose: () => void;
  labelledBy?: string;
  className?: string;
  children: ReactNode;
}

export function Dialog({ open, onClose, labelledBy, className, children }: DialogProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open || !mounted) return null;

  return createPortal(
    <>
      <button
        type="button"
        className="fixed inset-0 z-50 bg-black/70 cursor-default"
        aria-label="Close dialog"
        onClick={onClose}
      />
      <dialog
        open
        className={cn(
          "fixed z-50 flex flex-col overflow-hidden bg-background text-foreground border border-border shadow-soft-lg p-0 pb-6",
          "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
          "w-[calc(100%-2rem)] max-w-md max-h-[85dvh] rounded-2xl",
          "md:max-w-xl md:max-h-[80dvh]",
          "lg:max-w-2xl",
          className,
        )}
        aria-modal="true"
        aria-labelledby={labelledBy}
      >
        <div className="flex shrink-0 items-center justify-end px-4 pt-4">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={onClose}
            aria-label="Close dialog"
            className="h-11 w-11"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex flex-1 flex-col gap-5 overflow-hidden px-6 md:px-8 lg:px-10 pb-4 min-h-0">{children}</div>
      </dialog>
    </>,
    document.body,
  );
}
