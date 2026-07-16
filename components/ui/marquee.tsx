"use client";

import { forwardRef, useState, type CSSProperties, type HTMLAttributes } from "react";
import { PauseIcon, PlayIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn, cva, type VariantProps } from "@/utils/theme";

/** One group on screen plus one drifting in; the floor for a seamless loop. */
const MIN_COPIES = 2;

const styles = {
  root: cva("relative w-full"),
  viewport: cva(["w-full overflow-hidden", "motion-reduce:overflow-x-auto motion-reduce:overscroll-x-contain"]),
  track: cva(["marquee-track flex w-max", "hover:paused data-[paused=true]:paused"], {
    variants: {
      speed: {
        slow: "duration-[40s]",
        normal: "duration-[25s]",
        fast: "duration-[15s]",
      },
    },
    defaultVariants: {
      speed: "normal",
    },
  }),
  // Sized by its content so the gap is the only thing setting spacing. The
  // trailing pad matches the gap, which keeps the seam even across the loop.
  group: cva("flex shrink-0 items-center", {
    variants: {
      gap: {
        sm: "gap-8 pr-8",
        md: "gap-16 pr-16",
        lg: "gap-24 pr-24",
        xl: "gap-36 pr-36",
      },
    },
    defaultVariants: {
      gap: "md",
    },
  }),
  duplicate: cva("motion-reduce:hidden"),
  control: cva(["absolute top-1/2 right-2 z-10 -translate-y-1/2", "motion-reduce:hidden"]),
};

type MarqueeRef = HTMLDivElement;
type MarqueeProps = HTMLAttributes<MarqueeRef> &
  VariantProps<typeof styles.track> &
  VariantProps<typeof styles.group> & {
    /** How many times the children repeat. Raise it until a short list fills the width. */
    copies?: number;
    /** Accessible label for the control that stops the drift. */
    pauseLabel?: string;
    /** Accessible label for the control once the drift is stopped. */
    resumeLabel?: string;
  };

const Marquee = forwardRef<MarqueeRef, MarqueeProps>((props, ref) => {
  // props
  const {
    speed,
    gap,
    copies = MIN_COPIES,
    pauseLabel = "Pause scrolling",
    resumeLabel = "Resume scrolling",
    children,
    className,
    ...rest
  } = props;

  // hooks
  const [paused, setPaused] = useState(false);

  // render vars
  const handleToggle = () => setPaused((prev) => !prev);

  // jsx
  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <div className={cn(styles.viewport())}>
        <div
          className={cn(styles.track({ speed }))}
          style={{ "--marquee-copies": copies } as CSSProperties}
          data-paused={paused}
        >
          {Array.from({ length: copies }, (_, index) => (
            <div
              key={index}
              className={cn(styles.group({ gap }), index > 0 && styles.duplicate())}
              aria-hidden={index > 0 || undefined}
              inert={index > 0}
            >
              {children}
            </div>
          ))}
        </div>
      </div>
      <Button
        type="button"
        className={cn(styles.control())}
        aria-label={paused ? resumeLabel : pauseLabel}
        size="icon"
        variant="primary"
        onClick={handleToggle}
      >
        {paused ? <PlayIcon className="h-4 w-4" /> : <PauseIcon className="h-4 w-4" />}
      </Button>
    </div>
  );
});
Marquee.displayName = "Marquee";

export { Marquee };
export type { MarqueeProps, MarqueeRef };
