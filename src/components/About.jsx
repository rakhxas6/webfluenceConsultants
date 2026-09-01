import React from "react";
import Section from "./molecules/Section";
import SectionHeader from "./molecules/SectionHeader";
import Reveal from "./atoms/Reveal";
import Button from "./atoms/Button";
import Label from "./atoms/Label";
import Numeral from "./atoms/Numeral";

const PRINCIPLES = [
  {
    title: "Start with the problem",
    body: "Before a single asset is designed we agree on the commercial problem worth solving, and the number that proves we solved it.",
  },
  {
    title: "Build the engine, not the campaign",
    body: "Campaigns end. Systems compound. We build search, social and site infrastructure that keeps returning long after the launch.",
  },
  {
    title: "Report in plain language",
    body: "Monthly reads you can forward to your board without translation. Reach and ROAS, with commentary — never a dashboard screenshot.",
  },
];

export default function About() {
  return (
    <Section id="about" ground="paper">
      <SectionHeader
        index={2}
        eyebrow="The studio"
        lines={[<>We build digital</>, <>experiences that</>, <>actually convert</>]}
        standfirst="Webfluence Consultants turns bold ideas into strategies that dominate search, social and beyond. Whether you're a startup ready to make noise or an established brand hungry for more, we're the growth partner your business has been waiting for."
        action={
          <Button href="#contact" variant="solid" size="md" arrow className="self-start">
            Work with us
          </Button>
        }
      />

      <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        {/* Portrait plate */}
        <Reveal className="relative self-start">
          <div className="relative border border-ink">
            <img
              src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=900&auto=format&fit=crop"
              alt="The Webfluence Consultants team at work in the Butwal studio"
              loading="lazy"
              decoding="async"
              width="900"
              height="900"
              className="aspect-square w-full object-cover grayscale transition-[filter] duration-700 ease-editorial hover:grayscale-0"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-brand/10 mix-blend-multiply"
            />
          </div>
          <div className="mt-4 flex items-center justify-between">
            <Label>Fig. 02 — The studio, Butwal</Label>
            <Label tone="flame">NP</Label>
          </div>
        </Reveal>

        {/* Principles */}
        <div>
          <Reveal className="mb-8">
            <Label rule>How we work</Label>
          </Reveal>

          <ol className="border-t border-rule">
            {PRINCIPLES.map((principle, i) => (
              <Reveal
                as="li"
                key={principle.title}
                index={i}
                className="group/p flex gap-5 border-b border-rule py-7 sm:gap-8"
              >
                <Numeral value={i + 1} className="mt-1.5 shrink-0" />
                <div className="min-w-0">
                  <h3 className="font-display text-[1.15rem] font-bold uppercase leading-snug tracking-tight text-ink transition-colors duration-300 group-hover/p:text-brand">
                    {principle.title}
                  </h3>
                  <p className="mt-2.5 max-w-measure text-[0.9rem] leading-relaxed text-ink-muted">
                    {principle.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal index={3} className="mt-10 border-l-2 border-flame pl-6">
            <p className="font-serif text-[clamp(1.35rem,2.6vw,1.9rem)] italic leading-tight text-ink">
              “From brand identity to paid ads — let's make your brand impossible to ignore.”
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
