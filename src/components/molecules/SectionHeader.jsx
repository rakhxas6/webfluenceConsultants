import React from "react";
import Label from "../atoms/Label";
import Rule from "../atoms/Rule";
import Reveal from "../atoms/Reveal";
import RevealLines from "../atoms/RevealLines";
import { cn } from "../../lib/cn";

/**
 * The recurring editorial masthead for a section: index + eyebrow on the left,
 * oversized display lines beneath, standfirst and action in the right column.
 * Splitting the heading into `lines` is what lets the type reveal line by line.
 */
export default function SectionHeader({
  index,
  eyebrow,
  lines,
  standfirst,
  action,
  as = "h2",
  align = "split",
  className,
}) {
  return (
    <header className={cn("relative", className)}>
      <Rule />

      <div
        className={cn(
          "grid gap-8 pt-6 sm:pt-8",
          align === "split" ? "lg:grid-cols-[1.35fr_1fr] lg:gap-16" : "max-w-measure",
        )}
      >
        <div>
          <Reveal className="mb-6 flex items-baseline gap-4 sm:mb-8">
            {index != null && (
              <span className="font-meta text-meta text-ink-faint tnum">
                {String(index).padStart(2, "0")}
              </span>
            )}
            {eyebrow && <Label rule>{eyebrow}</Label>}
          </Reveal>

          <RevealLines
            as={as}
            lines={lines}
            className="font-display text-d2 font-extrabold uppercase text-ink"
          />
        </div>

        {(standfirst || action) && (
          <Reveal index={1} className="flex flex-col justify-end gap-7 lg:pb-1.5">
            {standfirst && (
              <p className="max-w-measure text-[0.95rem] leading-relaxed text-ink-muted">
                {standfirst}
              </p>
            )}
            {action}
          </Reveal>
        )}
      </div>
    </header>
  );
}
