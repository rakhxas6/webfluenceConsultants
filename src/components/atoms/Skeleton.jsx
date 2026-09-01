import React from "react";
import { cn } from "../../lib/cn";

/**
 * Placeholder block. Callers size it to match the real content so nothing
 * jumps when data lands.
 */
export default function Skeleton({ className, ...rest }) {
  return <div aria-hidden="true" className={cn("skeleton h-3 w-full", className)} {...rest} />;
}
