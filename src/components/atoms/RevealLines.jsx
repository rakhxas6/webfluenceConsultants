import React from "react";
import * as motionLib from "motion/react";
import { cn } from "../../lib/cn";
import { EASE, DURATION, VIEWPORT } from "../../lib/motion";
import { useReducedMotion } from "../../lib/useMotionSafe";

const { motion } = motionLib;

/**
 * Masked line reveal for display type: each line slides up out of its own
 * clipping box, one after the next.
 *
 * The viewport trigger sits on the *mask*, not on the line inside it. An
 * IntersectionObserver accounts for clipping by ancestors, so a line parked at
 * y:108% inside `overflow:hidden` reports zero intersection and would wait for
 * a trigger that can never fire — the type would simply never appear.
 *
 * `lines` is an array of nodes, one per visual line, because a mask has to
 * wrap a whole line rather than a run of words.
 */
export default function RevealLines({ as: Tag = "h2", lines, delay = 0, className, lineClassName }) {
  const reduced = useReducedMotion();

  const variants = reduced
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : { hidden: { y: "108%" }, show: { y: "0%" } };

  return (
    <Tag className={cn(className)}>
      {lines.map((line, i) => (
        <motion.span
          key={i}
          className="line-mask"
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          <motion.span
            className={cn("block", lineClassName)}
            variants={variants}
            transition={{
              duration: reduced ? 0.2 : DURATION.slow,
              ease: EASE,
              delay: reduced ? 0 : delay + i * 0.08,
            }}
          >
            {line}
          </motion.span>
        </motion.span>
      ))}
    </Tag>
  );
}
