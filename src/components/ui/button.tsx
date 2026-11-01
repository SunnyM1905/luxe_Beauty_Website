import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne-400 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-champagne-500 text-white hover:bg-champagne-600",
        secondary: "bg-blush-100 text-blush-700 hover:bg-blush-200",
        outline: "border border-champagne-300 bg-transparent hover:bg-champagne-50 text-charcoal-700",
        ghost: "hover:bg-champagne-50 text-charcoal-700",
      },
      size: { default: "h-10 px-6 py-2", sm: "h-8 px-4 text-xs", lg: "h-12 px-8 text-base" },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { asChild?: boolean; }
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
});
Button.displayName = "Button";
