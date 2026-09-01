import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { supabase } from "./supabase/supabaseClient";
import Container from "./atoms/Container";
import Button from "./atoms/Button";
import Label from "./atoms/Label";
import Rule from "./atoms/Rule";
import Reveal from "./atoms/Reveal";
import RevealLines from "./atoms/RevealLines";
import Skeleton from "./atoms/Skeleton";
import ProjectRow from "./molecules/ProjectRow";
import StateBlock from "./molecules/StateBlock";
import TickerBanner from "./molecules/TickerBanner";
import { cn } from "../lib/cn";
import { SITE_URL, WHATSAPP_URL } from "../lib/site";

const COLUMNS = ["#", "Project", "Client", "Result"];

function RowSkeleton() {
  return (
    <div className="grid grid-cols-[2.75rem_1fr] items-center gap-y-2 border-b border-rule py-6 sm:grid-cols-[5rem_1fr_13rem_11rem] sm:py-7">
      <Skeleton className="mx-1 h-3 w-6 sm:mx-7" />
      <Skeleton className="h-6 w-3/4 max-w-xs" />
      <Skeleton className="mx-7 hidden h-3 w-24 sm:block" />
      <Skeleton className="ml-auto mr-7 hidden h-4 w-20 sm:block" />
    </div>
  );
}

export default function Work() {
  const [projects, setProjects] = useState([]);
  const [status, setStatus] = useState("loading");
  const [active, setActive] = useState("All");
  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    let cancelled = false;
    window.scrollTo({ top: 0 });

    (async () => {
      const { data, error } = await supabase
        .from("works")
        .select(
          "id, title, client, category, description, tags, year, metric_value, metric_label, website_url, display_order",
        )
        .eq("is_published", true)
        .order("display_order");

      if (cancelled) return;
      if (error) {
        console.error(error);
        setStatus("error");
        return;
      }
      setProjects(data || []);
      setStatus("ready");
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.category).filter(Boolean)))],
    [projects],
  );

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [projects, active],
  );

  return (
    <>
      <Helmet>
        <title>Selected Work — Webfluence Consultants</title>
        <meta
          name="description"
          content="A selection of Webfluence Consultants projects across branding, web development, paid media and SEO — with the results each engagement delivered."
        />
        <link rel="canonical" href={`${SITE_URL}/work`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Selected Work — Webfluence Consultants" />
        <meta property="og:url" content={`${SITE_URL}/work`} />
      </Helmet>

      <section
        id="work"
        className="paper-grain relative overflow-hidden bg-paper pb-band pt-[calc(var(--nav-h)+3rem)]"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 substrate opacity-60  [mask-image:linear-gradient(to_bottom,black,transparent_55%)]"
        />

        <Container className="relative">
          {/* ── Masthead ─────────────────────────────────────────────── */}
          <Reveal className="pb-7">
            <Label rule>Selected work — 2023 to now</Label>
          </Reveal>
          <Rule tone="strong" />

          <div className="grid gap-10 pt-10 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
            <RevealLines
              as="h1"
              lines={[<>Results</>, <>we've</>, <>delivered</>]}
              className="font-display text-d1 font-extrabold uppercase text-ink"
            />
            <Reveal index={1} className="flex flex-col justify-end gap-7">
              <p className="max-w-measure text-[0.95rem] leading-relaxed text-ink-muted">
                Projects across branding, web, paid media and SEO. Every engagement starts with a
                problem worth solving — open a row to read the case note.
              </p>
              <Button
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="solid"
                size="md"
                arrow
                className="self-start"
              >
                Start a project
              </Button>
            </Reveal>
          </div>
        </Container>

        <div className="relative mt-20 w-[104%] -translate-x-[2%]">
          <TickerBanner items={["CASE NOTES", "MEASURED", "SHIPPED"]} tilt={-1.4} speed={40} />
        </div>

        <Container className="relative mt-20">
          {/* ── Filters ──────────────────────────────────────────────── */}
          {status === "ready" && categories.length > 1 && (
            <Reveal
              className="scrollbar-none -mx-gutter flex overflow-x-auto border-y border-rule px-gutter"
              role="group"
              aria-label="Filter projects by discipline"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setActive(cat);
                    setOpenId(null);
                  }}
                  aria-pressed={active === cat}
                  className={cn(
                    "relative shrink-0 cursor-pointer whitespace-nowrap border-r border-rule px-5 py-4 font-meta text-meta uppercase transition-colors duration-200 ease-swift first:-ml-px first:border-l sm:px-7",
                    active === cat ? "bg-ink text-paper" : "text-ink-muted hover:bg-paper-raised hover:text-ink",
                  )}
                >
                  {cat}
                </button>
              ))}
            </Reveal>
          )}

          {/* ── Column headings ──────────────────────────────────────── */}
          <div className="hidden grid-cols-[5rem_1fr_13rem_11rem] border-b border-rule py-3 sm:grid">
            {COLUMNS.map((col, i) => (
              <span
                key={col}
                className={cn("px-7 font-meta text-meta uppercase text-ink-faint", i === 3 && "text-right")}
              >
                {col}
              </span>
            ))}
          </div>

          {/* ── Index ────────────────────────────────────────────────── */}
          {status === "loading" && (
            <div className="border-t border-rule sm:border-t-0">
              {Array.from({ length: 5 }).map((_, i) => (
                <RowSkeleton key={i} />
              ))}
            </div>
          )}

          {status === "error" && (
            <StateBlock
              tone="error"
              title="Couldn't load the work index"
              className="mt-8"
              action={
                <Button onClick={() => window.location.reload()} variant="outline" size="md">
                  Try again
                </Button>
              }
            >
              The project archive didn't respond. Give it a moment and reload.
            </StateBlock>
          )}

          {status === "ready" && filtered.length === 0 && (
            <StateBlock title="Nothing in this discipline yet" className="mt-8">
              Try another filter, or ask us what we've shipped in this space.
            </StateBlock>
          )}

          {status === "ready" &&
            filtered.map((project, i) => (
              <ProjectRow
                key={project.id}
                index={i + 1}
                project={project}
                open={openId === project.id}
                onToggle={() => setOpenId(openId === project.id ? null : project.id)}
              />
            ))}

          {status === "ready" && filtered.length > 0 && (
            <Reveal className="flex flex-wrap items-center justify-between gap-6 pt-12">
              <Label>
                Showing {filtered.length} of {projects.length} projects
              </Label>
              <Button href="/#contact" variant="outline" size="md" arrow>
                Brief us on yours
              </Button>
            </Reveal>
          )}
        </Container>
      </section>
    </>
  );
}
