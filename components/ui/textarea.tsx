import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn("flex min-h-[80px] w-full rounded-2xl border border-champagne-200 bg-white px-4 py-2 text-sm transition focus:border-champagne-400 focus:outline-none focus:ring-2 focus:ring-champagne-200 disabled:cursor-not-allowed disabled:opacity-50", className)}
      ref={ref} {...props}
    />
  );
});
Textarea.displayName = "Textarea";
export { Textarea };
