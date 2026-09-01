import React from "react";
import * as motionLib from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Numeral from "../atoms/Numeral";
import Tag from "../atoms/Tag";
import { EASE, DURATION } from "../../lib/motion";
import { useReducedMotion } from "../../lib/useMotionSafe";
import { cn } from "../../lib/cn";

const { motion, AnimatePresence } = motionLib;

/**
 * One line of the work index. Collapsed it reads as a table row; expanded it
 * opens into a full case note. The row is a button so keyboard users get the
 * same disclosure as pointer users.
 */
export default function ProjectRow({ index, project, open, onToggle }) {
  const reduced = useReducedMotion();
  const panelId = `project-panel-${project.id}`;

  return (
    <div className={cn("border-b border-rule", open && "bg-paper-raised")}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
        className="group/row grid w-full cursor-pointer grid-cols-[2.75rem_1fr] items-center gap-y-1 py-5 text-left transition-colors duration-200 ease-swift hover:bg-paper-raised sm:grid-cols-[5rem_1fr_13rem_11rem] sm:py-7"
      >
        <Numeral value={index} className="self-start px-1 sm:self-center sm:px-7" />

        <div className="pr-4">
          <h3 className="font-display text-[clamp(1.15rem,2.2vw,2rem)] font-extrabold uppercase leading-none tracking-tight text-ink transition-transform duration-300 ease-editorial group-hover/row:translate-x-1.5 motion-reduce:transition-none">
            {project.title}
          </h3>
          {/* Mobile: fold client + result under the title */}
          <div className="mt-2 flex items-end justify-between gap-4 sm:hidden">
            <span className="font-meta text-meta uppercase text-ink-faint">{project.client}</span>
            <span className="text-right">
              <span className="block font-display text-[0.95rem] font-bold text-ink">
                {project.metric_value}
              </span>
              <span className="block font-meta text-meta uppercase text-ink-faint">
                {project.metric_label}
              </span>
            </span>
          </div>
        </div>

        <span className="hidden px-7 font-meta text-meta uppercase text-ink-muted sm:block">
          {project.client}
        </span>

        <span className="hidden px-7 text-right sm:block">
          <span className="block font-display text-[1.05rem] font-bold tracking-tight text-ink">
            {project.metric_value}
          </span>
          <span className="mt-1 block font-meta text-meta uppercase text-ink-faint">
            {project.metric_label}
          </span>
          <span className="mt-1.5 block font-meta text-meta text-ink-faint tnum">{project.year}</span>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduced ? 0 : DURATION.fast, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="grid gap-8 px-1 pb-9 sm:grid-cols-[1fr_auto] sm:pl-[5rem] sm:pr-7">
              <div>
                <p className="max-w-measure text-[0.9rem] leading-relaxed text-ink-soft">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {(project.tags || []).map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </div>

              <div className="flex items-end justify-between gap-6 sm:flex-col sm:items-end sm:justify-start">
                <div className="sm:text-right">
                  <p className="font-meta text-meta uppercase text-ink-faint">Discipline</p>
                  <p className="mt-1.5 text-[0.875rem] font-semibold text-ink">{project.category}</p>
                </div>
                {project.website_url && (
                  <a
                    href={project.website_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-draw inline-flex items-center gap-1.5 font-meta text-meta uppercase text-brand sm:mt-6"
                  >
                    View live
                    <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
