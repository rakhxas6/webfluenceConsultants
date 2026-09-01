import React, { useEffect, useState } from "react";
import { supabase } from "./supabase/supabaseClient";
import Section from "./molecules/Section";
import SectionHeader from "./molecules/SectionHeader";
import Marquee from "./atoms/Marquee";
import StateBlock from "./molecules/StateBlock";
import TestimonialCard, { TestimonialSkeleton } from "./molecules/TestimonialCard";

const ROW_SIZE = 3;

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | ready | error

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const { data, error } = await supabase
        .from("testimonials")
        .select("id, name, role, text, image_url, stars")
        .eq("is_published", true)
        .order("display_order");

      if (cancelled) return;
      if (error) {
        console.error(error);
        setStatus("error");
        return;
      }
      setTestimonials(data || []);
      setStatus("ready");
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  // Two counter-scrolling rows; the second only exists once there's enough copy
  const rows = [
    { items: testimonials.slice(0, ROW_SIZE), reverse: false, speed: 46 },
    { items: testimonials.slice(ROW_SIZE, ROW_SIZE * 2), reverse: true, speed: 54 },
  ].filter((row) => row.items.length > 0);

  return (
    <Section ground="paper">
      <SectionHeader
        index={3}
        eyebrow="Loved by clients"
        lines={[<>What people</>, <>are saying</>]}
        standfirst="Real feedback from founders and teams we've shipped with. Hover any card to stop the reel and read it properly."
      />

      <div className="mt-14 space-y-6">
        {status === "loading" &&
          [0, 1].map((row) => (
            <div key={row} className="flex gap-6 overflow-hidden">
              {Array.from({ length: 3 }).map((_, i) => (
                <TestimonialSkeleton key={i} />
              ))}
            </div>
          ))}

        {status === "error" && (
          <StateBlock tone="error" title="Couldn't load testimonials">
            The reviews service didn't respond. Everything else on this page still works.
          </StateBlock>
        )}

        {status === "ready" && rows.length === 0 && (
          <StateBlock title="No reviews published yet">
            Client words land here as soon as they're approved.
          </StateBlock>
        )}

        {status === "ready" &&
          rows.map((row, i) => (
            <Marquee key={i} speed={row.speed} reverse={row.reverse} gap="gap-6">
              {row.items.map((t) => (
                <TestimonialCard
                  key={t.id}
                  name={t.name}
                  role={t.role}
                  text={t.text}
                  image={t.image_url}
                  stars={t.stars}
                />
              ))}
            </Marquee>
          ))}
      </div>
    </Section>
  );
}
