import React from "react";
import Section from "./molecules/Section";
import StatItem from "./molecules/StatItem";
import Label from "./atoms/Label";
import Reveal from "./atoms/Reveal";

const STATS = [
  { value: 50, suffix: "+", label: "Projects delivered end to end" },
  { value: 3.2, suffix: "×", label: "Average revenue growth" },
  { value: 98, suffix: "%", label: "Client satisfaction score" },
  { value: 180, suffix: "%", label: "Average organic traffic lift" },
];

export default function Stats() {
  return (
    <Section ground="raised">
      <Reveal className="mb-10 flex flex-wrap items-baseline justify-between gap-4">
        <Label rule>The record</Label>
        <Label>Rolling 24 months</Label>
      </Reveal>

      <div className="grid grid-cols-1 border-b border-r border-rule sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat, i) => (
          <StatItem key={stat.label} index={i + 1} {...stat} />
        ))}
      </div>
    </Section>
  );
}
