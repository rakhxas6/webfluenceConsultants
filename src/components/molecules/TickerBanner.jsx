import React from "react";
import Marquee from "../atoms/Marquee";
import { cn } from "../../lib/cn";

/**
 * Oversized scrolling word band, tilted off the grid. Decorative by design —
 * marked aria-hidden because the same words are already stated in prose
 * nearby, and a screen reader has no use for an infinite loop of them.
 */
export default function TickerBanner({
  items,
  speed = 38,
  reverse = false,
  tilt = -2,
  ground = "ink",
  className,
}) {
  const dark = ground === "ink";
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative w-full select-none overflow-hidden py-5",
        dark ? "bg-ink text-paper" : "border-y border-rule bg-paper-raised text-ink",
        className,
      )}
      // Overscale so the rotation never exposes a bare corner behind the band
      style={{ transform: `rotate(${tilt}deg) scale(1.14)` }}
    >
      <Marquee speed={speed} reverse={reverse} fade={false} gap="gap-0">
        {items.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="whitespace-nowrap px-7 font-display text-[clamp(1.4rem,3.4vw,2.6rem)] font-extrabold uppercase tracking-tight">
              {item}
            </span>
            <span className={cn("h-1.5 w-1.5 shrink-0", dark ? "bg-flame" : "bg-brand")} />
          </span>
        ))}
      </Marquee>
    </div>
  );
}
