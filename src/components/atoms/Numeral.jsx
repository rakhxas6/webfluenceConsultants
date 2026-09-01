import React from "react";
import { cn } from "../../lib/cn";

/** Zero-padded index, e.g. (01) — the running order of an editorial list. */
export default function Numeral({ value, bare = false, className }) {
  const n = String(value).padStart(2, "0");
  return (
    <span className={cn("font-meta text-meta text-ink-faint tnum", className)}>
      {bare ? n : `(${n})`}
    </span>
  );
}
