import React, { useEffect, useState } from "react";
import * as motionLib from "motion/react";
import { ArrowUp } from "lucide-react";
import { EASE, DURATION } from "../lib/motion";
import { scrollTo } from "../lib/useSmoothScroll";
import { useReducedMotion } from "../lib/useMotionSafe";

const { motion, AnimatePresence, useScroll, useSpring } = motionLib;

/**
 * Back-to-top control with a progress ring drawn from actual scroll position —
 * the ring doubles as the "how far through am I" indicator.
 */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const ring = useSpring(scrollYProgress, { stiffness: 220, damping: 32, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={() => scrollTo(0)}
          aria-label="Back to top"
          initial={{ opacity: 0, y: reduced ? 0 : 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: reduced ? 0 : 14 }}
          transition={{ duration: DURATION.fast, ease: EASE }}
          className="group/top fixed bottom-6 right-6 z-sticky flex h-12 w-12 cursor-pointer items-center justify-center border border-ink bg-paper text-ink transition-colors duration-300 ease-editorial hover:bg-ink hover:text-paper sm:bottom-8 sm:right-8"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 48 48"
            className="pointer-events-none absolute inset-0 h-full w-full -rotate-90"
          >
            <motion.circle
              cx="24"
              cy="24"
              r="21"
              fill="none"
              stroke="#FF751F"
              strokeWidth="2"
              pathLength="1"
              style={{ pathLength: ring }}
            />
          </svg>
          <ArrowUp
            className="relative h-4 w-4 transition-transform duration-300 ease-editorial group-hover/top:-translate-y-0.5 motion-reduce:transition-none"
            strokeWidth={1.75}
            aria-hidden="true"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
