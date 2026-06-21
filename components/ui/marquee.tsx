"use client";

import { cn } from "@/utils/theme";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
}

export function Marquee({ children, className }: MarqueeProps) {
  return (
    <div className={cn("relative flex w-full overflow-hidden", className)}>
      <div className="flex shrink-0 animate-marquee items-center">{children}</div>
      <div className="flex shrink-0 animate-marquee items-center" aria-hidden="true">{children}</div>
      <div className="flex shrink-0 animate-marquee items-center" aria-hidden="true">{children}</div>
      <div className="flex shrink-0 animate-marquee items-center" aria-hidden="true">{children}</div>
    </div>
  );
}
