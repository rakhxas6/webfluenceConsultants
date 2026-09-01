import React, { useEffect, useState } from "react";
import { supabase } from "./supabase/supabaseClient";
import { useNavigate } from "react-router-dom";
import Section from "./molecules/Section";
import Marquee from "./atoms/Marquee";
import Label from "./atoms/Label";
import Rule from "./atoms/Rule";
import Reveal from "./atoms/Reveal";
import Skeleton from "./atoms/Skeleton";
import Button from "./atoms/Button";

export default function Brands() {
  const [logos, setLogos] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const { data, error } = await supabase
        .from("company_logos")
        .select("id, name, image_url")
        .eq("is_published", true)
        .order("display_order");

      if (cancelled) return;
      if (error) console.error(error);
      setLogos(data || []);
      setLoading(false);
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  if (!loading && logos.length === 0) return null;

  return (
    <Section ground="raised" className="py-16 sm:py-20">
      <Reveal className="flex flex-wrap items-baseline justify-between gap-4 pb-6">
        <Label rule>Trusted by</Label>
        <Button
          onClick={() => navigate("/work")}
          variant="outline"
          size="sm"
          arrow
          className="border-rule-strong"
        >
          See the work
        </Button>
      </Reveal>
      <Rule />

      <div className="pt-10">
        {loading ? (
          <div className="flex gap-16 overflow-hidden">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-8 w-28 shrink-0" />
            ))}
          </div>
        ) : (
          <Marquee speed={38} fadeFrom="from-paper-raised" gap="gap-16">
            {logos.map((company) => (
              <img
                key={company.id}
                src={company.image_url}
                alt={company.name}
                loading="lazy"
                decoding="async"
                draggable={false}
                className="h-9 w-auto shrink-0 object-contain opacity-55 grayscale transition-[opacity,filter] duration-300 ease-editorial hover:opacity-100 hover:grayscale-0 sm:h-11"
              />
            ))}
          </Marquee>
        )}
      </div>
    </Section>
  );
}
