import React from "react";
import * as motionLib from "motion/react";
import { cn } from "../../lib/cn";
import { drawRule } from "../../lib/motion";
import { useMotionSafe } from "../../lib/useMotionSafe";

const { motion } = motionLib;

/** A hairline that draws itself in from the left as it enters the viewport. */
export default function Rule({ tone = "default", delay = 0, animate = true, className }) {
  const safe = useMotionSafe();
  const base = cn("h-px w-full origin-left", tone === "strong" ? "bg-rule-strong" : "bg-rule", className);

  if (!animate) return <div aria-hidden="true" className={base} />;
  return <motion.div aria-hidden="true" className={base} {...safe(drawRule(delay))} />;
}
