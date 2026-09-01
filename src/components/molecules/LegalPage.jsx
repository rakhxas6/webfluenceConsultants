import React from "react";
import { Helmet } from "react-helmet-async";
import Container from "../atoms/Container";
import Label from "../atoms/Label";
import Rule from "../atoms/Rule";
import Button from "../atoms/Button";
import Reveal from "../atoms/Reveal";
import RevealLines from "../atoms/RevealLines";
import Numeral from "../atoms/Numeral";
import { EMAIL, SITE_URL } from "../../lib/site";

/**
 * Shared shell for the legal pages. A numbered clause list with a sticky
 * contents rail — the same structure a printed contract would use, which keeps
 * long copy navigable without inventing a second layout system.
 */
export default function LegalPage({ title, lines, path, description, updated, intro, sections }) {
  return (
    <>
      <Helmet>
        <title>{`${title} — Webfluence Consultants`}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${SITE_URL}${path}`} />
      </Helmet>

      <article className="paper-grain relative overflow-hidden bg-paper pb-band pt-[calc(var(--nav-h)+3rem)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 substrate opacity-60  [mask-image:linear-gradient(to_bottom,black,transparent_60%)]"
        />

        <Container className="relative">
          <Reveal className="flex flex-wrap items-center justify-between gap-4 pb-7">
            <Label rule>Legal</Label>
            <Label>Last updated: {updated}</Label>
          </Reveal>
          <Rule tone="strong" />

          <div className="grid gap-10 pt-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <RevealLines
              as="h1"
              lines={lines}
              className="font-display text-d2 font-extrabold uppercase text-ink"
            />
            <Reveal index={1} className="flex flex-col justify-end gap-6">
              <p className="max-w-measure text-[0.95rem] leading-relaxed text-ink-muted">{intro}</p>
              <Button href={`mailto:${EMAIL}`} variant="outline" size="md" className="self-start">
                Questions? Email us
              </Button>
            </Reveal>
          </div>

          {/* ── Clauses ────────────────────────────────────────────── */}
          <div className="mt-20 grid gap-12 lg:grid-cols-[16rem_1fr] lg:gap-20">
            <nav
              aria-label="Contents"
              className="lg:sticky lg:top-[calc(var(--nav-h)+3rem)] lg:self-start"
            >
              <Label rule className="mb-5">
                Contents
              </Label>
              <ol className="space-y-2.5">
                {sections.map((section, i) => (
                  <li key={section.title}>
                    <a
                      href={`#clause-${i + 1}`}
                      className="link-draw flex gap-3 text-[0.85rem] leading-snug text-ink-muted transition-colors duration-200 hover:text-ink"
                    >
                      <span className="shrink-0 font-meta text-meta text-ink-faint tnum">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <ol className="border-t border-rule">
              {sections.map((section, i) => (
                <Reveal
                  as="li"
                  key={section.title}
                  id={`clause-${i + 1}`}
                  index={Math.min(i, 3)}
                  className="scroll-mt-[calc(var(--nav-h)+2rem)] border-b border-rule py-9"
                >
                  <div className="flex gap-5 sm:gap-8">
                    <Numeral value={i + 1} className="mt-1.5 shrink-0" />
                    <div className="min-w-0">
                      <h2 className="font-display text-[1.15rem] font-bold uppercase leading-snug tracking-tight text-ink">
                        {section.title}
                      </h2>
                      <p className="mt-3 max-w-measure text-[0.9rem] leading-relaxed text-ink-muted">
                        {section.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </Container>
      </article>
    </>
  );
}
