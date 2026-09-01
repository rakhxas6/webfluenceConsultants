import React from "react";
import { ArrowUpRight } from "lucide-react";
import GridCell from "./GridCell";
import Numeral from "../atoms/Numeral";
import { cn } from "../../lib/cn";

/**
 * A service as a grid cell. The whole cell is the control; hover wipes an ink
 * band up from the baseline and inverts the type, so the affordance is the
 * colour change rather than a scale transform that would nudge the grid.
 *
 * The inverted state is a second, complete copy of the face rather than a set
 * of hover colours on the first one. A wipe reaches the bottom of the card
 * long before the top, so any single text colour is wrong somewhere: flip it
 * early and the heading is pale on paper, flip it late and it is black on ink.
 * Clipping a pre-inverted face means the ink and the type it carries arrive at
 * every pixel on the same frame, and there is no moment of low contrast in
 * either direction.
 *
 * The clipped copy is aria-hidden, so assistive tech still reads exactly one
 * card.
 */

const PAD = "p-7 sm:p-9";

function Face({ index, icon, title, description, inverted }) {
  return (
    <span className={cn("flex h-full w-full flex-col text-left", PAD)}>
      <span className="flex items-start justify-between">
        <Numeral value={index} className={inverted ? "text-paper/60" : undefined} />
        <ArrowUpRight
          className={cn(
            "h-5 w-5 shrink-0 transition-transform duration-300 ease-editorial motion-reduce:transition-none",
            "group-hover/cell:-translate-y-0.5 group-hover/cell:translate-x-0.5",
            inverted ? "text-flame" : "text-ink-faint",
          )}
          strokeWidth={1.5}
          aria-hidden="true"
        />
      </span>

      <span
        aria-hidden="true"
        className={cn(
          "mt-9 inline-flex h-11 w-11 shrink-0 items-center justify-center border",
          inverted ? "border-flame text-flame" : "border-rule-strong text-ink",
        )}
      >
        {icon}
      </span>

      <span
        className={cn(
          "mt-6 block font-display text-[1.3rem] font-bold uppercase leading-[1.1] tracking-tight",
          inverted ? "text-paper" : "text-ink",
        )}
      >
        {title}
      </span>
      <span
        className={cn(
          "mt-3 block text-[0.875rem] leading-relaxed",
          inverted ? "text-paper/75" : "text-ink-muted",
        )}
      >
        {description}
      </span>

      <span
        className={cn(
          "mt-auto block pt-7 font-meta text-meta uppercase",
          inverted ? "text-flame opacity-100" : "text-flame opacity-0",
        )}
      >
        Explore service
      </span>
    </span>
  );
}

export default function ServiceCard({
  index,
  revealIndex = null,
  icon,
  title,
  description,
  onSelect,
  className,
}) {
  const face = { index, icon, title, description };

  return (
    <GridCell
      as="button"
      type="button"
      index={revealIndex}
      interactive
      onClick={onSelect}
      // Padding moves onto the two faces so both share identical geometry.
      className={cn(
        "isolate flex min-h-[17rem] flex-col overflow-hidden p-0 hover:bg-transparent sm:p-0",
        className,
      )}
    >
      {/* Resting face — sets the cell's height */}
      <Face {...face} />

      {/* Inverted face, clipped to nothing until hover, then wiped up from the
          baseline. clip-path rather than scaleY so the type is revealed at full
          size instead of being stretched into place. */}
      <span
        aria-hidden="true"
        className={cn(
          "absolute inset-0 flex flex-col bg-ink",
          // All four values are percentages: CSS will not interpolate an inset()
          // whose units differ between the two states, so mixing 100% with 0
          // makes the wipe snap instead of animate.
          "[clip-path:inset(100%_0%_0%_0%)] group-hover/cell:[clip-path:inset(0%_0%_0%_0%)]",
          "group-focus-visible/cell:[clip-path:inset(0%_0%_0%_0%)]",
          "transition-[clip-path] duration-[420ms] ease-editorial motion-reduce:transition-none",
        )}
      >
        <Face {...face} inverted />
      </span>
    </GridCell>
  );
}
