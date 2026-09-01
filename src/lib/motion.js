/**
 * Shared motion language.
 *
 * One easing curve (expo-out) and one distance vocabulary across the whole
 * site, so every entrance feels like it came from the same hand. Every preset
 * degrades to an opacity-only fade when the user prefers reduced motion —
 * see `useMotionSafe`.
 */

export const EASE = [0.22, 1, 0.36, 1];

export const DURATION = {
  micro: 0.18,
  fast: 0.32,
  base: 0.55,
  slow: 0.85,
};

/** Standard viewport trigger: fire once, a little before the element lands. */
export const VIEWPORT = { once: true, amount: 0.25, margin: "0px 0px -12% 0px" };

/** Rise + fade. `i` staggers a list without needing a parent variant. */
export const rise = (i = 0, distance = 26) => ({
  initial: { opacity: 0, y: distance },
  whileInView: { opacity: 1, y: 0 },
  viewport: VIEWPORT,
  transition: { duration: DURATION.base, ease: EASE, delay: i * 0.07 },
});

/** Slide in from the inline start — for grid cells and rows. */
export const slideIn = (i = 0, distance = 22) => ({
  initial: { opacity: 0, x: -distance },
  whileInView: { opacity: 1, x: 0 },
  viewport: VIEWPORT,
  transition: { duration: DURATION.base, ease: EASE, delay: i * 0.05 },
});

/** A hairline rule drawing itself across the page. */
export const drawRule = (delay = 0) => ({
  initial: { scaleX: 0 },
  whileInView: { scaleX: 1 },
  viewport: VIEWPORT,
  transition: { duration: DURATION.slow, ease: EASE, delay },
  style: { transformOrigin: "left" },
});

/** Parent/child pair for staggered groups. */
export const stagger = (step = 0.07, delayChildren = 0) => ({
  initial: "hidden",
  whileInView: "show",
  viewport: VIEWPORT,
  variants: { hidden: {}, show: { transition: { staggerChildren: step, delayChildren } } },
});

export const staggerChild = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: DURATION.base, ease: EASE } },
};

export const overlay = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: DURATION.fast, ease: EASE },
};

export const modalPanel = {
  initial: { opacity: 0, y: 18, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 12, scale: 0.98 },
  transition: { duration: DURATION.fast, ease: EASE },
};
