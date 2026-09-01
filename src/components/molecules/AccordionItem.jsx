import React, { useId } from "react";
import * as motionLib from "motion/react";
import { Plus } from "lucide-react";
import Numeral from "../atoms/Numeral";
import { EASE, DURATION } from "../../lib/motion";
import { useReducedMotion } from "../../lib/useMotionSafe";
import { cn } from "../../lib/cn";

const { motion, AnimatePresence } = motionLib;

/**
 * Disclosure row. Uses a real button + aria-expanded/aria-controls pair rather
 * than a click handler on a div, and animates height rather than max-height so
 * long answers never get clipped.
 */
export default function AccordionItem({ index, question, answer, open, onToggle }) {
  const id = useId();
  const panelId = `faq-panel-${id}`;
  const buttonId = `faq-button-${id}`;
  const reduced = useReducedMotion();

  return (
    <div className="border-b border-rule">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="group/faq flex w-full cursor-pointer items-start gap-5 py-6 text-left sm:gap-8"
        >
          <Numeral value={index} className="mt-1.5 shrink-0" />
          <span
            className={cn(
              "flex-1 font-display text-[1.05rem] font-bold uppercase leading-snug tracking-tight transition-colors duration-200 sm:text-[1.2rem]",
              open ? "text-brand" : "text-ink group-hover/faq:text-brand",
            )}
          >
            {question}
          </span>
          <Plus
            aria-hidden="true"
            strokeWidth={1.5}
            className={cn(
              "mt-1 h-5 w-5 shrink-0 transition-transform duration-300 ease-editorial motion-reduce:transition-none",
              open ? "rotate-[135deg] text-brand" : "text-ink-faint",
            )}
          />
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduced ? 0 : DURATION.fast, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="max-w-measure pb-7 pl-[3.4rem] text-[0.9rem] leading-relaxed text-ink-muted sm:pl-[4.4rem]">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
