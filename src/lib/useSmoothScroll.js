import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Momentum scrolling for the whole document.
 *
 * Deliberately opt-out for `prefers-reduced-motion` — scroll hijacking is the
 * single most common cause of motion sickness on agency sites. Also exposes
 * the instance on `window.__lenis` so anchor navigation can hand off to it.
 */
export function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    });

    window.__lenis = lenis;
    let frame;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);
}

/** Scroll to an element (or the top) through Lenis when it is active. */
export function scrollTo(target, options = {}) {
  const lenis = window.__lenis;
  if (lenis) {
    lenis.scrollTo(target, { offset: -88, duration: 1.1, ...options });
    return;
  }
  if (typeof target === "number") {
    window.scrollTo({ top: target, behavior: "smooth" });
  } else if (target?.scrollIntoView) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
