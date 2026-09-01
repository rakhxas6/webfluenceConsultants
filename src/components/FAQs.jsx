import React, { useEffect, useState } from "react";
import { supabase } from "./supabase/supabaseClient";
import Section from "./molecules/Section";
import SectionHeader from "./molecules/SectionHeader";
import AccordionItem from "./molecules/AccordionItem";
import StateBlock from "./molecules/StateBlock";
import Skeleton from "./atoms/Skeleton";
import Button from "./atoms/Button";

export default function FAQs() {
  const [faqs, setFaqs] = useState([]);
  const [status, setStatus] = useState("loading");
  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const { data, error } = await supabase
        .from("faqs")
        .select("id, question, answer")
        .eq("is_published", true)
        .order("display_order");

      if (cancelled) return;
      if (error) {
        console.error(error);
        setStatus("error");
        return;
      }
      setFaqs(data || []);
      setStatus("ready");
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <Section id="faq" ground="raised">
      <SectionHeader
        index={5}
        eyebrow="Questions"
        lines={[<>Answers,</>, <>no soft sell</>]}
        standfirst="The things people ask before signing. Still have something specific? Use the form above and we'll reply within a business day."
        action={
          <Button href="#contact" variant="outline" size="md" arrow className="self-start border-rule-strong">
            Ask us directly
          </Button>
        }
      />

      <div className="mx-auto mt-14 max-w-3xl">
        {status === "loading" && (
          <div className="border-t border-rule">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex items-center gap-8 border-b border-rule py-7">
                <Skeleton className="h-3 w-6 shrink-0" />
                <Skeleton className="h-4 flex-1" style={{ maxWidth: `${70 - i * 6}%` }} />
              </div>
            ))}
          </div>
        )}

        {status === "error" && (
          <StateBlock tone="error" title="Couldn't load the FAQ">
            Reach out on the form above and we'll answer anything directly.
          </StateBlock>
        )}

        {status === "ready" && faqs.length === 0 && (
          <StateBlock title="No questions published yet">
            We're writing these up. In the meantime, just ask.
          </StateBlock>
        )}

        {status === "ready" && faqs.length > 0 && (
          <div className="border-t border-rule">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={faq.id}
                index={i + 1}
                question={faq.question}
                answer={faq.answer}
                open={openId === faq.id}
                onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
              />
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
