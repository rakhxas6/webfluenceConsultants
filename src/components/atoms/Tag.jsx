import React from "react";
import { cn } from "../../lib/cn";

const tones = {
  outline: "border-rule-strong text-ink-muted",
  brand: "border-brand/35 bg-brand-wash text-brand",
  flame: "border-flame/40 bg-flame-wash text-flame-deep",
  solid: "border-ink bg-ink text-paper",
};

/** Small bordered chip for tags, platforms and categories. */
export default function Tag({ tone = "outline", className, children, ...rest }) {
  return (
    <span
      className={cn(
        "inline-flex items-center border px-2.5 py-1 font-meta text-meta uppercase",
        tones[tone],
        className,
      )}
      {...rest}
    >
      {children}
    </span>
  );
}
