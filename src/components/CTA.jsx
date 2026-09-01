import React from "react";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import Container from "./atoms/Container";
import Button from "./atoms/Button";
import Label from "./atoms/Label";
import Reveal from "./atoms/Reveal";
import RevealLines from "./atoms/RevealLines";
import { WHATSAPP_URL, EMAIL } from "../lib/site";

/**
 * The one full-ink band on the page. Reserving the dark ground for a single
 * moment is what gives it weight — used twice it would just be a background.
 */
export default function CTA() {
  return (
    <section id="cta" className="paper-grain relative overflow-hidden bg-ink py-band text-paper">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      {/* Flame bloom, corner-anchored */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, #FF751F 0%, transparent 68%)" }}
      />

      <Container className="relative">
        <Reveal className="flex flex-wrap items-baseline justify-between gap-4">
          <Label tone="invert" rule>
            Next step
          </Label>
          <Label tone="invert">Replies within one business day</Label>
        </Reveal>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <RevealLines
            lines={[<>Unlock your</>, <>next big</>, <span key="o" className="text-flame">opportunity.</span>]}
            className="font-display text-d1 font-extrabold uppercase leading-[0.86] tracking-tight"
          />

          <Reveal index={1} className="flex flex-col gap-8">
            <p className="max-w-measure text-[0.95rem] leading-relaxed text-paper/65">
              Tell us the number you need to move. We'll come back with an honest read on whether we
              can move it, and what it would take.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="flame"
                size="lg"
                icon={MessageCircle}
              >
                Chat on WhatsApp
              </Button>
              <Button href={`mailto:${EMAIL}`} variant="invert" size="lg">
                Email the studio
              </Button>
            </div>

            <a
              href={`mailto:${EMAIL}`}
              className="link-draw inline-flex w-fit items-center gap-2 font-meta text-meta uppercase text-paper/60 transition-colors duration-200 hover:text-paper"
            >
              {EMAIL}
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
