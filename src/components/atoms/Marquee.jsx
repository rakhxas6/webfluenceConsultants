import React from "react";
import { cn } from "../../lib/cn";

/**
 * Seamless infinite track. Children are rendered twice and the strip is
 * translated -50%, so the loop has no visible seam. Pauses on hover/focus and
 * freezes entirely under `prefers-reduced-motion`.
 */
export default function Marquee({
  speed = 42,
  reverse = false,
  fade = true,
  fadeFrom = "from-paper",
  gap = "gap-16",
  className,
  trackClassName,
  children,
}) {
  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      {fade && (
        <>
          <div
            aria-hidden="true"
            className={cn(
              "pointer-events-none absolute inset-y-0 left-0 z-raised w-16 bg-gradient-to-r to-transparent sm:w-28",
              fadeFrom,
            )}
          />
          <div
            aria-hidden="true"
            className={cn(
              "pointer-events-none absolute inset-y-0 right-0 z-raised w-16 bg-gradient-to-l to-transparent sm:w-28",
              fadeFrom,
            )}
          />
        </>
      )}
      <div
        className={cn(
          "marquee-track flex w-max will-change-transform",
          gap,
          reverse ? "animate-marquee-rev" : "animate-marquee",
          "motion-reduce:animate-none",
          trackClassName,
        )}
        style={{ "--marquee-duration": `${speed}s` }}
      >
        <div className={cn("flex shrink-0 items-center", gap)}>{children}</div>
        <div className={cn("flex shrink-0 items-center", gap)} aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
