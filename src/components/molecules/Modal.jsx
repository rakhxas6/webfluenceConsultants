import React, { useCallback, useEffect, useRef } from "react";
import * as motionLib from "motion/react";
import { X } from "lucide-react";
import { cn } from "../../lib/cn";
import { overlay, modalPanel } from "../../lib/motion";
import { useMotionSafe } from "../../lib/useMotionSafe";

const { motion, AnimatePresence } = motionLib;

/**
 * Accessible dialog: focus moves in on open and returns on close, Escape
 * dismisses, Tab is trapped, and the page behind is locked from scrolling.
 */
export default function Modal({ open, onClose, title, children, footer, tone = "neutral" }) {
  const safe = useMotionSafe();
  const panelRef = useRef(null);
  const restoreRef = useRef(null);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose?.();
        return;
      }
      if (e.key !== "Tab") return;
      const focusables = panelRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])',
      );
      if (!focusables?.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (!open) return;
    restoreRef.current = document.activeElement;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    const id = requestAnimationFrame(() => {
      panelRef.current?.querySelector("button, a, input")?.focus();
    });
    return () => {
      cancelAnimationFrame(id);
      document.body.style.overflow = overflow;
      restoreRef.current?.focus?.();
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-modal flex items-end justify-center bg-ink/55 p-4 backdrop-blur-[2px] sm:items-center"
          onClick={onClose}
          {...safe(overlay)}
        >
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label={title}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={handleKeyDown}
            className="relative w-full max-w-md border border-ink bg-paper p-8 shadow-[10px_10px_0_0_#0A0A0A]"
            {...safe(modalPanel)}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close dialog"
              className="absolute right-4 top-4 cursor-pointer p-1.5 text-ink-muted transition-colors duration-200 hover:text-ink"
            >
              <X className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
            </button>

            <span
              aria-hidden="true"
              className={cn(
                "mb-6 block h-1 w-10",
                tone === "error" ? "bg-flame-deep" : tone === "success" ? "bg-brand" : "bg-ink",
              )}
            />
            {title && (
              <h2 className="font-display text-d4 font-extrabold uppercase text-ink">{title}</h2>
            )}
            <div className="mt-4 text-[0.9rem] leading-relaxed text-ink-muted">{children}</div>
            {footer && <div className="mt-8 flex flex-wrap gap-3">{footer}</div>}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
