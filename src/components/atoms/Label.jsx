import React from "react";
import { cn } from "../../lib/cn";

const tones = {
  muted: "text-ink-muted",
  ink: "text-ink",
  brand: "text-brand",
  flame: "text-flame-deep",
  invert: "text-paper/70",
};

/**
 * Mono, wide-tracked meta label — the small-caps voice of the layout.
 * Used for eyebrows, column headers and captions.
 */
export default function Label({ as: Tag = "span", tone = "muted", rule = false, className, children, ...rest }) {
  return (
    <Tag
      className={cn(
        "font-meta text-meta uppercase inline-flex items-center gap-2.5",
        tones[tone],
        className,
      )}
      {...rest}
    >
      {rule && <span aria-hidden="true" className="h-px w-6 bg-current opacity-50" />}
      {children}
    </Tag>
  );
}
