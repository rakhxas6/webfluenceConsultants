import React from "react";

const companyLogos = [
  "slack",
  "framer",
  "netflix",
  "google",
  "linkedin",
  "instagram",
  "facebook",
];

const Brands = () => {
  return (
    <section className="py-16 bg-slate-100/70 px-4 border-t border-neutral-300">
      <style>{`
        .marquee-inner {
          animation: marqueeScroll linear infinite;
        }
        @keyframes marqueeScroll {
          0%   { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <h2 className="text-3xl font-semibold text-center mx-auto text-slate-600">
        Our Clients
      </h2>

      <div className="flex items-center w-max mx-auto gap-2 border border-gray-200 text-slate-400 rounded-full pl-4 pr-3 py-1 mt-6 text-sm">
        Over 100+ companies we have worked with
        <span className="text-gray-500 text-base">•</span>
        <a href="#works" className="flex items-center gap-1 text-gray-500">
          Learn more
          <svg
            className="mt-1"
            width="6"
            height="9"
            viewBox="0 0 6 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m1 1 4 3.5L1 8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>

      <div className="overflow-hidden w-full relative max-w-5xl mx-auto select-none mt-10">
        {/* Left fade */}
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-slate-100 to-transparent" />

        {/* Marquee — single flat row with logos doubled for seamless loop */}
        <div
          className="marquee-inner flex items-center will-change-transform"
          style={{ animationDuration: "15s", width: "max-content" }}
        >
          {[...companyLogos, ...companyLogos].map((company, index) => (
            <img
              key={index}
              src={`https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/${company}.svg`}
              alt={company}
              className="h-8 w-auto object-contain mx-8 opacity-60 hover:opacity-100 transition-opacity duration-200"
              draggable={false}
            />
          ))}
        </div>

        {/* Right fade */}
        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-slate-100 to-transparent" />
      </div>
    </section>
  );
};

export default Brands;