import React, { useEffect, useState } from "react";
import { supabase } from "./supabase/supabaseClient";

export default function Work() {
  const [active, setActive] = useState("All");
  const [expanded, setExpanded] = useState(null);
  const [hovered, setHovered] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchWorks() {
      const { data, error } = await supabase
        .from("works")
        .select(
          "id, title, client, category, description, tags, year, metric_value, metric_label, website_url, display_order"
        )
        .eq("is_published", true)
        .order("display_order");

      if (error) {
        console.error(error);
        setError(error.message);
      } else {
        setProjects(data);
      }

      setLoading(false);
    }

    fetchWorks();
  }, []);

  const categories = [
    "All",
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  const toggle = (i) => setExpanded(expanded === i ? null : i);

  // ── Loading skeleton ──
  if (loading) {
    return (
      <section
        id="work"
        className="bg-[#fafaf8] border-t border-[#d4d2cc] pt-32 pb-10 sm:pb-16 px-4 sm:px-8 lg:px-16 scroll-mt-[8vh]"
      >
        <div className="animate-pulse">
          {/* Header skeleton */}
          <div className="grid grid-cols-1 sm:grid-cols-2 border-b border-[#d4d2cc]">
            <div className="p-6 sm:p-10 sm:border-r border-[#d4d2cc] space-y-4">
              <div className="h-2.5 w-24 bg-[#e8e6e1] rounded" />
              <div className="space-y-2">
                <div className="h-8 w-40 bg-[#e8e6e1] rounded" />
                <div className="h-8 w-28 bg-[#e8e6e1] rounded" />
                <div className="h-8 w-36 bg-[#e8e6e1] rounded" />
              </div>
            </div>
            <div className="p-6 sm:p-10 space-y-3">
              <div className="h-3 w-64 bg-[#e8e6e1] rounded" />
              <div className="h-3 w-48 bg-[#e8e6e1] rounded" />
              <div className="h-3 w-20 bg-[#e8e6e1] rounded mt-6" />
            </div>
          </div>
          {/* Row skeletons */}
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="grid grid-cols-[44px_1fr] sm:grid-cols-[80px_1fr_220px_160px] items-center border-b border-[#d4d2cc] py-5 sm:py-7"
            >
              <div className="px-3 sm:px-7">
                <div className="h-3 w-7 bg-[#e8e6e1] rounded" />
              </div>
              <div className="pr-4 space-y-2">
                <div className="h-5 w-48 sm:w-72 bg-[#e8e6e1] rounded" />
                <div className="h-3 w-32 bg-[#e8e6e1] rounded sm:hidden" />
              </div>
              <div className="hidden sm:block px-7">
                <div className="h-3 w-28 bg-[#e8e6e1] rounded" />
              </div>
              <div className="hidden sm:block px-7 text-right space-y-1.5">
                <div className="h-4 w-16 bg-[#e8e6e1] rounded ml-auto" />
                <div className="h-2.5 w-20 bg-[#e8e6e1] rounded ml-auto" />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // ── Error state ──
  if (error) {
    return (
      <section
        id="work"
        className="bg-[#fafaf8] border-t border-[#d4d2cc] pt-32 pb-10 px-4 sm:px-8 lg:px-16 scroll-mt-[8vh]"
      >
        <p className="text-[13px] text-[#888880] py-16 text-center">
          Failed to load projects. Please try again later.
        </p>
      </section>
    );
  }

  return (
    <section
      id="work"
      className="bg-[#fafaf8] border-t border-[#d4d2cc] pt-32 pb-10 sm:pb-16 px-4 sm:px-8 lg:px-16 scroll-mt-[8vh]"
    >
      {/* ── Header ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 border-b border-[#d4d2cc]">
        <div className="p-6 sm:p-10 sm:border-r border-[#d4d2cc]">
          <p className="text-[11px] tracking-[0.12em] uppercase text-[#888880] mb-3">
            Selected Work
          </p>
          <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-normal tracking-[-0.02em] leading-none uppercase text-[#0a0a0a]">
            Results
            <br />
            we've
            <br />
            delivered
          </h2>
        </div>
        <div className="p-6 sm:p-10 flex flex-col justify-between gap-6 sm:gap-0">
          <p className="text-[13px] text-[#888880] leading-relaxed max-w-xs">
            A selection of projects across branding, web, paid media, and SEO.
            Every engagement starts with a problem worth solving.
          </p>
          <a
            href="https://wa.me/9779867925779"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] tracking-[0.1em] uppercase text-[#0a0a0a] underline underline-offset-[3px] w-fit"
          >
            Start a project →
          </a>
        </div>
      </div>

      {/* ── Filter bar ── */}
      <div className="flex border-b border-[#d4d2cc] overflow-x-auto scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActive(cat);
              setExpanded(null);
            }}
            className={[
              "px-4 sm:px-6 py-3 sm:py-4 text-[12px] tracking-[0.08em] uppercase border-r border-[#d4d2cc] whitespace-nowrap transition-colors duration-150 font-[inherit] flex-shrink-0",
              active === cat
                ? "bg-[#0a0a0a] text-[#fafaf8]"
                : "bg-transparent text-[#888880] hover:text-[#0a0a0a]",
            ].join(" ")}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ── Column labels — hidden on mobile ── */}
      <div className="hidden sm:grid sm:grid-cols-[80px_1fr_220px_160px] border-b border-[#d4d2cc] py-2">
        {["#", "Project", "Client", "Result"].map((label, i) => (
          <span
            key={label}
            className={[
              "text-[10px] tracking-[0.1em] uppercase text-[#c0beb8]",
              i === 3 ? "px-7 text-right" : "px-7",
            ].join(" ")}
          >
            {label}
          </span>
        ))}
      </div>

      {/* ── Empty state ── */}
      {filtered.length === 0 && (
        <p className="text-[13px] text-[#888880] py-16 text-center">
          No projects in this category yet.
        </p>
      )}

      {/* ── Project rows ── */}
      {filtered.map((project, i) => {
        const isHovered = hovered === i;
        const isExpanded = expanded === i;
        const num = String(i + 1).padStart(2, "0");

        return (
          <React.Fragment key={project.id}>
            {/* Row */}
            <div
              className={[
                "cursor-pointer transition-colors duration-150",
                "grid grid-cols-[44px_1fr] sm:grid-cols-[80px_1fr_220px_160px] items-center",
                isExpanded ? "border-b-0" : "border-b border-[#d4d2cc]",
                isHovered || isExpanded ? "bg-[#f5f3ef]" : "bg-transparent",
              ].join(" ")}
              onClick={() => toggle(i)}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Index */}
              <span className="px-3 sm:px-7 py-5 sm:py-7 text-[12px] text-[#888880] tracking-[0.06em] tabular-nums self-start sm:self-auto">
                ({num})
              </span>

              {/* Title + mobile-only client & metric */}
              <div className="py-4 sm:py-0 pr-4 sm:pr-0">
                <h3
                  className={[
                    "font-serif text-[clamp(1.1rem,2vw,1.9rem)] font-normal uppercase tracking-[-0.01em] text-[#0a0a0a] transition-transform duration-200",
                    isHovered ? "sm:translate-x-1" : "",
                  ].join(" ")}
                >
                  {project.title}
                </h3>
                {/* Mobile: client + metric below title */}
                <div className="flex items-center justify-between mt-1 sm:hidden">
                  <span className="text-[12px] text-[#888880]">
                    {project.client}
                  </span>
                  <div className="text-right">
                    <p className="text-[14px] font-medium text-[#0a0a0a] leading-tight">
                      {project.metric_value}
                    </p>
                    <p className="text-[10px] text-[#888880] tracking-[0.06em] uppercase">
                      {project.metric_label}
                    </p>
                  </div>
                </div>
              </div>

              {/* Client — desktop only */}
              <span className="hidden sm:block text-[12px] text-[#888880] px-7 py-7">
                {project.client}
              </span>

              {/* Metric — desktop only */}
              <div className="hidden sm:block px-7 py-7 text-right">
                <p className="text-[15px] font-medium text-[#0a0a0a] tracking-[-0.01em]">
                  {project.metric_value}
                </p>
                <p className="text-[11px] text-[#888880] tracking-[0.06em] uppercase mt-0.5">
                  {project.metric_label}
                </p>
                <p className="text-[11px] text-[#888880] tracking-[0.06em] mt-1.5">
                  {project.year}
                </p>
              </div>
            </div>

            {/* ── Expanded panel ── */}
            {isExpanded && (
              <div className="border-b border-[#d4d2cc] grid grid-cols-[44px_1fr] sm:grid-cols-[80px_1fr] bg-[#f5f3ef] overflow-hidden">
                {/* Accent column */}
                <div className="border-r border-[#d4d2cc]" />

                {/* Body */}
                <div className="p-4 sm:p-7 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-4 sm:gap-8">
                  <div>
                    <p className="text-[13px] text-[#0a0a0a] leading-[1.7] mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {(project.tags || []).map((tag, j) => (
                        <span
                          key={j}
                          className="text-[11px] tracking-[0.06em] uppercase text-[#888880] border border-[#d4d2cc] px-2.5 py-0.5 rounded-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right meta */}
                  <div className="sm:text-right flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-4 sm:gap-0 pt-2 sm:pt-0">
                    <div>
                      <p className="text-[11px] tracking-[0.08em] uppercase text-[#888880] mb-1">
                        Category
                      </p>
                      <p className="text-[13px] text-[#0a0a0a] font-medium sm:mb-5">
                        {project.category}
                      </p>
                    </div>
                    {project.website_url && (
                      <a
                        href={project.website_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-[11px] tracking-[0.1em] uppercase text-[#0a0a0a] underline underline-offset-[3px] sm:mt-5"
                      >
                        View Live →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )}
          </React.Fragment>
        );
      })}
    </section>
  );
}