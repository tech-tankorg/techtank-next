"use client";

import React from "react";
import { cn } from "@/utils/theme";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  itemWidth?: string;
  duration?: string;
  visibleCount?: number;
}

export function Marquee({ 
  children, 
  className,
  itemWidth = "250px",
  duration = "25s",
  visibleCount = 4
}: MarqueeProps) {
  const count = React.Children.count(children);

  return (
    <div 
      className={cn("@container modern-marquee relative w-full overflow-hidden", className)}
    >
      {/* Invisible placeholder dictates the natural height of the container */}
      <div className="invisible pointer-events-none opacity-0" aria-hidden="true">
        {React.Children.toArray(children)[0]}
      </div>

      {React.Children.map(children, (child, index) => (
        <div 
          className="absolute inset-y-0 left-0 flex items-center justify-center animate-marquee"
          style={{
            width: itemWidth,
            "--item-width": itemWidth,
            "--total-items": count,
            "--item-index": index,
            "--marquee-duration": duration,
            "--visible-count": visibleCount,
          } as React.CSSProperties}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
