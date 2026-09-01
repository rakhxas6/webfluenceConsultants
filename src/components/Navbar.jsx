import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as motionLib from "motion/react";
import { MessageCircle } from "lucide-react";
import logo from "../assets/logo/17.png";
import Button from "./atoms/Button";
import Numeral from "./atoms/Numeral";
import { cn } from "../lib/cn";
import { EASE, DURATION } from "../lib/motion";
import { scrollTo } from "../lib/useSmoothScroll";
import { useReducedMotion } from "../lib/useMotionSafe";
import { NAV_LINKS, WHATSAPP_URL } from "../lib/site";

const { motion, AnimatePresence, useScroll, useSpring } = motionLib;

/**
 * Fixed masthead.
 *
 * Reads as a printed running head: rule underneath, mono link set, and a
 * scroll-progress hairline pinned to the bottom edge. It stays opaque from the
 * first pixel — a transparent nav over a light hero is where contrast bugs
 * live.
 */
export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [condensed, setCondensed] = useState(false);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 240, damping: 34, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the overlay on route change and lock the page behind it while open
  useEffect(() => setOpen(false), [location.pathname]);
  useEffect(() => {
    if (!open) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const go = useCallback(
    (e, link) => {
      e.preventDefault();
      setOpen(false);

      if (!link.hash) {
        navigate(link.path);
        scrollTo(0, { immediate: true });
        return;
      }
      const jump = () => {
        const el = document.getElementById(link.hash);
        if (el) scrollTo(el);
      };
      if (location.pathname === link.path) jump();
      else {
        navigate(link.path);
        // Wait for the target route to mount before hunting for the anchor
        requestAnimationFrame(() => setTimeout(jump, 120));
      }
    },
    [navigate, location.pathname],
  );

  const isCurrent = (link) =>
    link.hash ? false : location.pathname === link.path;

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-modal focus:border focus:border-ink focus:bg-paper focus:px-4 focus:py-3 focus:font-meta focus:text-meta focus:uppercase"
      >
        Skip to content
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-nav border-b bg-paper/85 backdrop-blur-md transition-[border-color,box-shadow] duration-300 ease-swift",
          condensed ? "border-rule shadow-[0_1px_0_0_rgba(10,10,10,0.04)]" : "border-transparent",
        )}
      >
        <div className="mx-auto flex h-[var(--nav-h)] w-full max-w-shell items-center justify-between gap-6 px-gutter">
          <a
            href="/"
            onClick={(e) => go(e, { path: "/" })}
            aria-label="Webfluence Consultants — home"
            className="flex shrink-0 items-center"
          >
            <img
              src={logo}
              alt="Webfluence Consultants"
              width="150"
              height="44"
              className={cn(
                "w-auto origin-left transition-all duration-300 ease-editorial",
                condensed ? "h-9" : "h-11",
              )}
            />
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.name}
                href={link.hash ? `${link.path}#${link.hash}` : link.path}
                onClick={(e) => go(e, link)}
                aria-current={isCurrent(link) ? "page" : undefined}
                className={cn(
                  "link-draw group/nav flex items-center gap-1.5 py-1 font-meta text-meta uppercase transition-colors duration-200",
                  isCurrent(link) ? "text-brand" : "text-ink-muted hover:text-ink",
                )}
              >
                <span className="text-ink-faint tnum opacity-60">{String(i + 1).padStart(2, "0")}</span>
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" variant="brand" size="sm" icon={MessageCircle}>
              Chat with us
            </Button>
          </div>

          {/* Mobile trigger — 44px target, morphs to an X while open */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative z-modal -mr-2 flex h-11 w-11 cursor-pointer items-center justify-center md:hidden"
          >
            <span className="relative block h-3 w-6">
              {[0, 1].map((i) => (
                <span
                  key={i}
                  aria-hidden="true"
                  className={cn(
                    "absolute left-0 block h-px w-full bg-ink transition-all duration-300 ease-editorial motion-reduce:transition-none",
                    i === 0
                      ? open
                        ? "top-1.5 rotate-45"
                        : "top-0"
                      : open
                        ? "top-1.5 -rotate-45"
                        : "top-3",
                  )}
                />
              ))}
            </span>
          </button>
        </div>

        {/* Reading progress */}
        <motion.div
          aria-hidden="true"
          style={{ scaleX: reduced ? 0 : progress }}
          className="absolute inset-x-0 bottom-0 h-px origin-left bg-flame"
        />
      </header>

      {/* Full-bleed overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: reduced ? 0 : DURATION.base, ease: EASE }}
            className="fixed inset-0 z-overlay flex flex-col bg-paper pt-[var(--nav-h)] md:hidden"
          >
            <nav aria-label="Mobile" className="flex flex-1 flex-col justify-center px-gutter">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.hash ? `${link.path}#${link.hash}` : link.path}
                  onClick={(e) => go(e, link)}
                  initial={{ opacity: 0, y: reduced ? 0 : 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: DURATION.base, ease: EASE, delay: reduced ? 0 : 0.12 + i * 0.06 }}
                  className="group/m flex items-baseline gap-5 border-b border-rule py-5"
                >
                  <Numeral value={i + 1} bare />
                  <span className="font-display text-[2rem] font-extrabold uppercase leading-none tracking-tight text-ink transition-colors duration-200 group-hover/m:text-brand">
                    {link.name}
                  </span>
                </motion.a>
              ))}
            </nav>

            <div className="px-gutter pb-10">
              <Button
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="brand"
                size="lg"
                icon={MessageCircle}
                className="w-full"
              >
                Chat with us
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
