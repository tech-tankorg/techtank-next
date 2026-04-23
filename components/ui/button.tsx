import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/theme";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-ring",
        secondary: "bg-warning text-warning-foreground hover:bg-warning/90 hover:text-warning-foreground focus-visible:ring-ring",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground focus-visible:ring-ring",
        ghost: "text-foreground/70 hover:bg-foreground/5 hover:text-foreground focus-visible:ring-ring",
        nav: "font-medium text-muted-foreground hover:text-foreground hover:bg-muted/60 focus-visible:ring-ring",
      },
      isActive: {
        true: "",
        false: "",
      },
      size: {
        icon: "h-9 w-9",
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
      },
    },
    compoundVariants: [
      {
        variant: "nav",
        isActive: true,
        className: "bg-ring text-primary-foreground hover:bg-ring/90",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isActive, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, isActive }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { buttonVariants };
