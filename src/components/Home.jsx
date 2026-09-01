import React from "react";
import { Helmet } from "react-helmet-async";
import * as motionLib from "motion/react";
import { ArrowDown } from "lucide-react";
import bgVideo from "../assets/clients/bgVideo.mp4";
import Container from "./atoms/Container";
import Button from "./atoms/Button";
import Label from "./atoms/Label";
import Rule from "./atoms/Rule";
import Reveal from "./atoms/Reveal";
import RevealLines from "./atoms/RevealLines";
import WordCycler from "./molecules/WordCycler";
import Meta from "./molecules/Meta";
import TickerBanner from "./molecules/TickerBanner";
import { SITE_URL } from "../lib/site";
import { EASE, DURATION } from "../lib/motion";
import { useReducedMotion } from "../lib/useMotionSafe";

const { motion, useScroll, useTransform } = motionLib;

const DISCIPLINES = [
  "GROWTH ENGINE",
  "BRAND BUILDER",
  "SEO WIZARD",
  "ADS MACHINE",
  "CONTENT STUDIO",
];

const COLOPHON = [
  { term: "Established", value: "Butwal, Nepal" },
  { term: "Practice", value: "Search · Social · Brand · Build" },
  { term: "Engagements", value: "50+ delivered to date" },
  { term: "Availability", value: "Taking on Q3 partners" },
];

const TICKER = ["SEO", "PERFORMANCE ADS", "BRAND IDENTITY", "SOCIAL", "VIDEO", "WEB BUILD"];

export default function Home() {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  // Gentle counter-scroll on the plate — 3-layer parallax, nothing pinned
  const plateY = useTransform(scrollYProgress, [0, 0.25], ["0%", reduced ? "0%" : "-9%"]);

  return (
    <>
      <Helmet>
        <title>Webfluence Consultants — Digital Marketing Agency in Nepal</title>
        <meta
          name="description"
          content="Webfluence Consultants is Nepal's growth-focused digital marketing agency. We specialise in SEO, social media, performance ads, branding, video production, and web development."
        />
        <meta
          name="keywords"
          content="digital marketing agency Nepal, SEO Nepal, social media marketing Nepal, performance marketing, branding Nepal, web development Nepal, Butwal marketing agency"
        />
        <link rel="canonical" href={`${SITE_URL}/`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Webfluence Consultants — Digital Marketing Agency in Nepal" />
        <meta
          property="og:description"
          content="We partner with ambitious businesses to build digital engines that attract, convert, and retain customers at scale."
        />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:site_name" content="Webfluence Consultants" />
        <meta property="og:image" content={`${SITE_URL}/wfc-black.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Webfluence Consultants — Digital Marketing Agency in Nepal" />
        <meta
          name="twitter:description"
          content="We partner with ambitious businesses to build digital engines that attract, convert, and retain customers at scale."
        />
        <meta name="twitter:image" content={`${SITE_URL}/wfc-black.png`} />
      </Helmet>

      <section className="paper-grain relative overflow-hidden bg-paper pt-[calc(var(--nav-h)+2.5rem)]">
        {/* Grid substrate — fades out before it can fight the type */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 substrate opacity-70  [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
        />

        <Container className="relative">
          {/* ── Running head ─────────────────────────────────────────── */}
          <Reveal className="flex flex-wrap items-center justify-between gap-4 pb-7">
            <Label rule>Digital Marketing Studio — Est. Nepal</Label>
            <Label className="hidden sm:inline-flex">
              <span className="mr-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
              Available for new work
            </Label>
          </Reveal>
          <Rule tone="strong" />

          {/* ── Masthead ─────────────────────────────────────────────── */}
          <div className="grid gap-10 pt-10 lg:grid-cols-[1.55fr_1fr] lg:gap-14 lg:pt-14">
            <div className="min-w-0">
              <RevealLines
                as="h1"
                lines={[
                  <>We are a</>,
                  <span key="cycle" className="text-brand">
                    <WordCycler words={DISCIPLINES} />
                  </span>,
                ]}
                className="font-display text-d1 font-extrabold uppercase text-ink"
              />

              <Reveal index={2} className="mt-9 max-w-measure">
                <p className="text-[1.0625rem] leading-relaxed text-ink-soft">
                  We partner with ambitious businesses to build digital engines that{" "}
                  <em className="font-serif text-[1.2em] not-italic text-flame-deep">attract</em>,{" "}
                  <em className="font-serif text-[1.2em] not-italic text-flame-deep">convert</em>, and{" "}
                  <em className="font-serif text-[1.2em] not-italic text-flame-deep">retain</em>{" "}
                  customers at scale.
                </p>
              </Reveal>

              <Reveal index={3} className="mt-10 flex flex-wrap items-center gap-3">
                <Button href="#contact" variant="solid" size="lg" arrow>
                  Start a project
                </Button>
                <Button href="#services" variant="outline" size="lg">
                  See what we do
                </Button>
              </Reveal>
            </div>

            {/* ── Motion plate ───────────────────────────────────────── */}
            <motion.figure
              style={{ y: plateY }}
              initial={{ opacity: 0, y: reduced ? 0 : 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: DURATION.slow, ease: EASE, delay: 0.15 }}
              className="relative self-end"
            >
              <div className="relative border border-ink bg-ink">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  aria-hidden="true"
                  tabIndex={-1}
                  className="aspect-[4/5] w-full object-cover opacity-90 grayscale contrast-125 lg:aspect-[3/4]"
                >
                  <source src={bgVideo} type="video/mp4" />
                </video>
                {/* Brand duotone wash keeps the footage on-palette */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 mix-blend-color"
                  style={{ background: "linear-gradient(150deg, #0025CC 0%, #FF751F 100%)", opacity: 0.42 }}
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent"
                />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
                  <span className="font-meta text-meta uppercase text-paper/80">Fig. 01 — Showreel</span>
                  <span className="font-meta text-meta uppercase text-flame">/ WFC</span>
                </figcaption>
              </div>

              {/* Offset accent block — breaks the rectangle */}
              <span
                aria-hidden="true"
                className="absolute -bottom-3 -left-3 -z-10 h-24 w-24 bg-flame"
              />
            </motion.figure>
          </div>

          {/* ── Colophon ─────────────────────────────────────────────── */}
          <Reveal index={4} className="pb-12 pt-14 lg:pt-20">
            <Meta items={COLOPHON} />
          </Reveal>

          <Reveal index={5} className="flex items-center justify-center pb-14">
            <a
              href="#services"
              className="group/scroll inline-flex flex-col items-center gap-2.5 font-meta text-meta uppercase text-ink-faint transition-colors duration-200 hover:text-ink"
            >
              Scroll
              <ArrowDown
                className="h-4 w-4 transition-transform duration-300 ease-editorial group-hover/scroll:translate-y-1 motion-reduce:transition-none"
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </a>
          </Reveal>
        </Container>

        {/* ── Discipline ticker ──────────────────────────────────────── */}
        <div className="relative -mb-4 w-[104%] -translate-x-[2%]">
          <TickerBanner items={TICKER} tilt={-1.6} speed={34} />
        </div>
      </section>
    </>
  );
}
