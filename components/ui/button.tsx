import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-teal-dark text-white hover:bg-teal-dark/90 focus-visible:ring-teal-dark",
        secondary: "bg-amber text-teal-dark hover:bg-amber-dark hover:text-teal-dark focus-visible:ring-amber-dark",
        outline: "border-2 border-teal-dark text-teal-dark hover:bg-teal-dark hover:text-white focus-visible:ring-teal-dark",
        ghost: "text-foreground/70 hover:bg-teal-dark/5 hover:text-foreground focus-visible:ring-teal-dark",
        nav: "font-medium text-muted-foreground hover:text-foreground hover:bg-muted/60 focus-visible:ring-teal",
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
        className: "bg-teal text-white hover:bg-teal/90",
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
