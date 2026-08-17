import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/theme";

const proseLinkVariants = cva(
  "rounded-sm underline decoration-1 underline-offset-2 transition-all duration-200 hover:decoration-2 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none",
  {
    variants: {
      variant: {
        default: "text-ring",
        inherit: "text-current",
      },
      weight: {
        normal: "",
        medium: "font-medium",
      },
    },
    defaultVariants: {
      variant: "default",
      weight: "normal",
    },
  },
);

interface ProseLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof proseLinkVariants> {
  asChild?: boolean;
}

function ProseLink({ className, variant, weight, asChild = false, ...props }: ProseLinkProps) {
  const Comp = asChild ? Slot : "a";
  return <Comp className={cn(proseLinkVariants({ variant, weight }), className)} {...props} />;
}

export { ProseLink };
export type { ProseLinkProps };
