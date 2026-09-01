import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowUpRight, Mail } from "lucide-react";
import servicesData from "./servicesData.json";
import serviceIcons from "./Serviceicons";
import Container from "../atoms/Container";
import Button from "../atoms/Button";
import Label from "../atoms/Label";
import Rule from "../atoms/Rule";
import Tag from "../atoms/Tag";
import Reveal from "../atoms/Reveal";
import RevealLines from "../atoms/RevealLines";
import Numeral from "../atoms/Numeral";
import Section from "../molecules/Section";
import GridCell from "../molecules/GridCell";
import TickerBanner from "../molecules/TickerBanner";
import ErrorPage from "../Error";
import { EMAIL, SITE_URL } from "../../lib/site";

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = servicesData.find((s) => s.id === serviceId);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [serviceId]);

  // Unknown slugs fall through to the 404 rather than crashing on undefined
  if (!service) return <ErrorPage />;

  const pageUrl = `${SITE_URL}/${service.id}`;
  const pageTitle = `${service.category} | Webfluence Consultants`;
  const others = servicesData.filter((s) => s.id !== service.id);

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={service.description} />
        <meta
          name="keywords"
          content={`${service.category}, ${service.platforms.join(", ")}, digital marketing Nepal`}
        />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={service.description} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:site_name" content="Webfluence Consultants" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={service.description} />
      </Helmet>

      {/* ── Masthead ───────────────────────────────────────────────── */}
      <section className="paper-grain relative overflow-hidden bg-paper pb-20 pt-[calc(var(--nav-h)+3rem)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 substrate opacity-60  [mask-image:linear-gradient(to_bottom,black,transparent_78%)]"
        />

        <Container className="relative">
          <Reveal className="flex flex-wrap items-center justify-between gap-4 pb-7">
            <button
              type="button"
              onClick={() => navigate("/#services")}
              className="link-draw cursor-pointer font-meta text-meta uppercase text-ink-muted transition-colors duration-200 hover:text-ink"
            >
              ← All services
            </button>
            <Label tone="flame">{service.tagline}</Label>
          </Reveal>
          <Rule tone="strong" />

          <div className="grid gap-10 pt-10 lg:grid-cols-[1.45fr_1fr] lg:gap-16">
            <div>
              <Reveal className="mb-8 inline-flex h-12 w-12 items-center justify-center border border-ink text-ink">
                {serviceIcons[service.id]}
              </Reveal>
              <RevealLines
                as="h1"
                lines={service.category.split(" ").reduce((lines, word) => {
                  // Fold the heading into ~2-word lines so the mask reveal has rhythm
                  const last = lines[lines.length - 1];
                  if (last && last.split(" ").length < 2) lines[lines.length - 1] = `${last} ${word}`;
                  else lines.push(word);
                  return lines;
                }, [])}
                className="font-display text-d2 font-extrabold uppercase text-ink"
              />
            </div>

            <Reveal index={1} className="flex flex-col justify-end gap-8">
              <p className="max-w-measure text-[0.95rem] leading-relaxed text-ink-muted">
                {service.description}
              </p>

              <dl className="grid grid-cols-2 border-b border-r border-rule">
                {[service.stat1, service.stat2].map((stat) => (
                  <div key={stat.label} className="-ml-px -mt-px border-l border-t border-rule p-5">
                    <dd className="font-display text-[clamp(1.35rem,3vw,2rem)] font-extrabold tracking-tight text-ink">
                      {stat.value}
                    </dd>
                    <dt className="mt-2 font-meta text-meta uppercase leading-relaxed text-ink-muted">
                      {stat.label}
                    </dt>
                  </div>
                ))}
              </dl>

              <Button href="/#contact" variant="solid" size="lg" arrow className="self-start">
                Brief us on this
              </Button>
            </Reveal>
          </div>
        </Container>

        <div className="relative mt-20 w-[104%] -translate-x-[2%]">
          <TickerBanner items={service.platforms} tilt={-1.4} speed={32} />
        </div>
      </section>

      {/* ── What's included ────────────────────────────────────────── */}
      <Section ground="paper" rule={false}>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <div className="lg:sticky lg:top-[calc(var(--nav-h)+3rem)] lg:self-start">
            <Label rule className="mb-6">
              What's included
            </Label>
            <p className="max-w-measure text-[0.9rem] leading-relaxed text-ink-muted">
              Every engagement starts with understanding your business goals, then building a
              strategy that maps directly to revenue — not vanity metrics.
            </p>

            <div className="mt-10 border-t border-rule pt-6">
              <Label className="mb-4">Channels &amp; platforms</Label>
              <div className="flex flex-wrap gap-2">
                {service.platforms.map((platform) => (
                  <Tag key={platform}>{platform}</Tag>
                ))}
              </div>
            </div>

            <a
              href={`mailto:${EMAIL}`}
              className="link-draw mt-10 inline-flex items-center gap-2 font-meta text-meta uppercase text-brand"
            >
              <Mail className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
              {EMAIL}
            </a>
          </div>

          <ol className="border-t border-rule">
            {service.sections.map((section, i) => (
              <Reveal
                as="li"
                key={section.title}
                index={i}
                className="group/s flex gap-5 border-b border-rule py-8 sm:gap-8"
              >
                <Numeral value={i + 1} className="mt-1.5 shrink-0" />
                <div className="min-w-0">
                  <h2 className="font-display text-[1.2rem] font-bold uppercase leading-snug tracking-tight text-ink transition-colors duration-300 group-hover/s:text-brand">
                    {section.title}
                  </h2>
                  <p className="mt-3 max-w-measure text-[0.9rem] leading-relaxed text-ink-muted">
                    {section.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      {/* ── Other services ─────────────────────────────────────────── */}
      <Section ground="raised">
        <Reveal className="mb-8">
          <Label rule>Other disciplines</Label>
        </Reveal>

        <div className="grid grid-cols-1 border-b border-r border-rule sm:grid-cols-2 lg:grid-cols-3">
          {others.map((other, i) => (
            <GridCell
              key={other.id}
              as="button"
              type="button"
              index={i % 3}
              onClick={() => navigate(`/${other.id}`)}
              className="group/o flex cursor-pointer items-center gap-4 p-6 text-left transition-colors duration-300 ease-editorial hover:bg-paper"
            >
              <span
                aria-hidden="true"
                className="flex h-10 w-10 shrink-0 items-center justify-center border border-rule-strong text-ink transition-colors duration-300 group-hover/o:border-brand group-hover/o:text-brand"
              >
                {serviceIcons[other.id]}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-display text-[0.95rem] font-bold uppercase leading-snug tracking-tight text-ink transition-colors duration-300 group-hover/o:text-brand">
                  {other.category}
                </span>
                <span className="mt-1 block truncate font-meta text-meta uppercase text-ink-faint">
                  {other.tagline}
                </span>
              </span>
              <ArrowUpRight
                className="h-4 w-4 shrink-0 text-ink-faint transition-all duration-300 ease-editorial group-hover/o:-translate-y-0.5 group-hover/o:translate-x-0.5 group-hover/o:text-brand motion-reduce:transition-none"
                strokeWidth={1.75}
                aria-hidden="true"
              />
            </GridCell>
          ))}
        </div>
      </Section>
    </>
  );
}
