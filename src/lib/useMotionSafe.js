import { useReducedMotion } from "motion/react";

/**
 * Wraps a motion preset so it collapses to a plain fade when the user has
 * asked for reduced motion. Keeps the intent (something arrived) without the
 * travel that triggers vestibular discomfort.
 */
export function useMotionSafe() {
  const reduced = useReducedMotion();

  return function safe(preset) {
    if (!reduced) return preset;
    const { initial, whileInView, animate, exit, transition, style, ...rest } = preset;
    const flatten = (v) =>
      v && typeof v === "object" && !Array.isArray(v)
        ? { opacity: v.opacity !== undefined ? v.opacity : 1 }
        : v;
    return {
      ...rest,
      ...(initial !== undefined && { initial: flatten(initial) }),
      ...(whileInView !== undefined && { whileInView: flatten(whileInView) }),
      ...(animate !== undefined && { animate: flatten(animate) }),
      ...(exit !== undefined && { exit: flatten(exit) }),
      transition: { duration: 0.2, ease: "easeOut" },
    };
  };
}

export { useReducedMotion };
