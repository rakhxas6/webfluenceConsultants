import React from "react";
import { cn } from "../../lib/cn";

/** Inline busy indicator. Always paired with a text label for screen readers. */
export default function Spinner({ className }) {
  return (
    <span
      role="status"
      aria-label="Loading"
      className={cn(
        "inline-block h-3.5 w-3.5 shrink-0 animate-spin rounded-full border-[1.5px] border-current border-t-transparent",
        className,
      )}
    />
  );
}
