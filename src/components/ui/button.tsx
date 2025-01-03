import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60 ring-offset-background",
  {
    variants: {
      variant: {
        default:
          "bg-blue-600 text-white hover:bg-blue-500 focus-visible:ring-blue-400",
        destructive:
          "bg-red-600 text-white hover:bg-red-500 focus-visible:ring-red-400",
        outline:
          "border border-gray-300 bg-white text-gray-800 hover:bg-gray-50 focus-visible:ring-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700",
        secondary:
          "bg-gray-100 text-gray-800 hover:bg-gray-200 focus-visible:ring-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600",
        ghost:
          "text-gray-800 hover:bg-gray-100 focus-visible:ring-gray-300 dark:text-gray-200 dark:hover:bg-gray-800",
        link: "text-blue-600 underline-offset-4 hover:underline focus-visible:ring-blue-400",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-8 px-3 py-1.5 text-sm",
        lg: "h-12 px-6 py-3 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
