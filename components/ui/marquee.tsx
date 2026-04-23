"use client";

import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
}

export function Marquee({ children, className }: MarqueeProps) {
  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      <div className="flex w-max animate-marquee items-center">
        {/* display:contents lets children participate in the flex layout directly
            while keeping each wrapper as an isolated key scope for React */}
        <div className="contents">{children}</div>
        <div className="contents" aria-hidden="true">{children}</div>
        <div className="contents" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
}
