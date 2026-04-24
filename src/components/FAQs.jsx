import React from "react";

const FAQs = () => {
  const [openIndex, setOpenIndex] = React.useState(null);

  const faqs = [
    {
      question: "What does a typical engagement actually look like?",
      answer:
        "It starts with a proper audit — not a sales pitch. We look at what you have, what's working, and where the money is leaking before we propose anything. From there, we agree on a 90-day scope with clear deliverables, then move to a rolling retainer once you see real numbers.",
    },
    {
      question: "How long before we see results?",
      answer:
        "Paid media can move within 2–4 weeks. SEO and CRO compound over 3–6 months. We're transparent about this upfront — if you need results by next Tuesday, paid is the lever. If you want compounding returns, we build the whole system.",
    },
    {
      question: "Do you work with businesses outside Nepal?",
      answer:
        "Yes. About half our clients are international — primarily the US, UK, Australia, and the Gulf. Our pricing is competitive globally, and we operate across time zones without you needing to adjust your schedule significantly.",
    },
    {
      question: "What industries do you specialise in?",
      answer:
        "We don't pretend to know every vertical equally. We're strongest in e-commerce, hospitality & tourism, professional services, and SaaS. If your industry isn't on that list, we'll tell you honestly whether we're the right fit.",
    },
    {
      question: "How do you charge — retainer, project, or performance?",
      answer:
        "Retainer for ongoing growth work. Fixed fee for defined projects like a brand identity or website build. We don't do pure performance deals — they create the wrong incentives and usually mean someone's taking shortcuts somewhere.",
    },
    {
      question: "Will we own all the assets and accounts you build for us?",
      answer:
        "Always. Every ad account, every domain, every piece of creative, every line of code — it's yours from day one. We're granted access, not ownership. If we ever part ways, you walk away with everything intact.",
    },
    {
      question: "What's the minimum budget you work with?",
      answer:
        "For ad spend, we recommend a minimum of $100/month to generate meaningful data — below that, the algorithm doesn't have enough signal and results are unreliable. Our management fee is separate and scales with scope. We'd rather be honest about this than take your money and underdeliver.",
    },
    {
      question: "How do we know if this is actually working?",
      answer:
        "You get a live dashboard, not a monthly PDF. Revenue, ROAS, leads, rankings, conversion rate — tracked in real time. We do a structured review call every month and flag problems before you notice them.",
    },
  ];
  return (
    <section
      className="py-16 px-4 border-t border-neutral-300 scroll-mt-[10vh]"
      id="faq"
    >
      <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
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
