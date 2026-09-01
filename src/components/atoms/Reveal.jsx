import React from "react";
import * as motionLib from "motion/react";
import { cn } from "../../lib/cn";
import { rise, slideIn } from "../../lib/motion";
import { useMotionSafe } from "../../lib/useMotionSafe";

const { motion } = motionLib;

const presets = { rise, slideIn };

/**
 * Scroll-entrance wrapper. Every animated block on the site goes through here,
 * which is what keeps the timing consistent — and what guarantees a single
 * place honours `prefers-reduced-motion`.
 */
export default function Reveal({
  as = "div",
  preset = "rise",
  index = 0,
  distance,
  className,
  children,
  ...rest
}) {
  const safe = useMotionSafe();
  const Tag = motion[as] || motion.div;
  const props = presets[preset](index, distance);
  return (
    <Tag className={cn(className)} {...safe(props)} {...rest}>
      {children}
    </Tag>
  );
}
