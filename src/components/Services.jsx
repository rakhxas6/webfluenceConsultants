import React from "react";
import { useNavigate } from "react-router-dom";
import Section from "./molecules/Section";
import SectionHeader from "./molecules/SectionHeader";
import ServiceCard from "./molecules/ServiceCard";
import Button from "./atoms/Button";
import servicesData from "./services/servicesData.json";
import serviceIcons from "./services/Serviceicons";

export default function Services() {
  const navigate = useNavigate();

  return (
    <Section id="services" ground="paper" rule={false}>
      <SectionHeader
        index={1}
        eyebrow="What we do"
        lines={[<>Six disciplines,</>, <>one growth engine</>]}
        standfirst="Strategy, execution and measurement under one roof. Every engagement maps to revenue — not vanity metrics — and every discipline is run by people who do that thing full time."
        action={
          <Button href="#contact" variant="outline" size="md" arrow className="self-start">
            Brief us
          </Button>
        }
      />

      <div className="mt-14 grid grid-cols-1 border-b border-r border-rule sm:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service, i) => (
          <ServiceCard
            key={service.id}
            index={i + 1}
            revealIndex={i % 3}
            icon={serviceIcons[service.id]}
            title={service.category}
            description={service.description}
            onSelect={() => navigate(`/${service.id}`)}
          />
        ))}
      </div>
    </Section>
  );
}
