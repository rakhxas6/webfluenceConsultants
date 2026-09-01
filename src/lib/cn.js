import { clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * tailwind-merge can't tell a custom font-size from a custom colour: without
 * this, `text-d1 text-ink` collapses to `text-ink` and the display type
 * silently falls back to 16px. Teach it our scale.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: ["meta", "meta-lg", "d1", "d2", "d3", "d4"] }],
    },
  },
});

/** Merge conditional class names, letting later Tailwind utilities win. */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
