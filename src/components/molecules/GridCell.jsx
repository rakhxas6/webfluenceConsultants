import React from "react";
import * as motionLib from "motion/react";
import { cn } from "../../lib/cn";
import { rise } from "../../lib/motion";
import { useMotionSafe } from "../../lib/useMotionSafe";

const { motion } = motionLib;

/**
 * One cell of a ruled grid. Uses negative margins plus outward borders so
 * adjacent cells share a single hairline instead of doubling up — the classic
 * Swiss grid seam.
 *
 * The entrance lives here rather than in a wrapper element: a wrapper would
 * either break the grid or need `display:contents`, which generates no box and
 * so cannot be animated at all.
 */
export default function GridCell({
  as = "div",
  index = null,
  interactive = false,
  className,
  children,
  ...rest
}) {
  const safe = useMotionSafe();
  const animated = index !== null;
  const Tag = animated ? motion[as] || motion.div : as;

  return (
    <Tag
      className={cn(
        "relative -ml-px -mt-px border-l border-t border-rule p-7 sm:p-9",
        interactive &&
          "group/cell cursor-pointer text-left transition-colors duration-300 ease-editorial hover:bg-paper-raised focus-visible:bg-paper-raised",
        className,
      )}
      {...(animated ? safe(rise(index)) : {})}
      {...rest}
    >
      {children}
    </Tag>
  );
}
