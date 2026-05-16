import React, { useEffect, useState } from "react";
import { supabase } from "./supabase/supabaseClient";

const FAQs = () => {
  const [openIndex, setOpenIndex] = React.useState(null);

  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFaqs() {
      const { data, error } = await supabase
        .from("faqs")
        .select("id, question, answer")
        .eq("is_published", true)
        .order("display_order");

      if (error) console.error(error);
      else setFaqs(data);

      setLoading(false);
    }

    fetchFaqs();
  }, []);

  if (loading)
    return (
      <section className="py-16 px-4 border-t border-neutral-300">
        <div className="max-w-xl mx-auto flex flex-col items-center justify-center px-4 md:px-0">
          {Array.from({ length: faqs.length || 5 }).map((_, i) => (
            <div key={i} className="border-b border-slate-200 py-4 w-full">
              <div className="flex items-center justify-between">
                <div className="h-4 bg-slate-200 rounded animate-pulse w-3/4" />
                <div className="h-4 w-4 bg-slate-200 rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </section>
    );

  return (
    <section
      className="py-16 px-4 border-t border-neutral-300 scroll-mt-[10vh]"
      id="faq"
    >
      <div className="max-w-xl mx-auto flex flex-col items-center justify-center px-4 md:px-0">
        <p className="text-lg text-[#0025cc] font-medium pb-2">FAQ'S</p>
        <h1 className="text-3xl font-semibold text-center">
          Looking for answer?
        </h1>
        <p className="text-sm text-slate-500 mt-2 pb-8 text-center">
          Honest answers — no fluff, no soft sells. Still have something
          specific? Use the form above and we'll reply within a business day.
        </p>
        {faqs.map((faq, index) => (
          <div
            className="border-b border-slate-200 py-4 cursor-pointer w-full"
            key={index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-base font-medium">{faq.question}</h3>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${openIndex === index ? "rotate-180" : ""} transition-all duration-500 ease-in-out`}
              >
                <path
                  d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                  stroke="#1D293D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p
              className={`text-sm text-slate-500 transition-all duration-500 ease-in-out max-w-md ${openIndex === index ? "opacity-100 max-h-[300px] translate-y-0 pt-4" : "opacity-0 max-h-0 -translate-y-2"}`}
            >
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
