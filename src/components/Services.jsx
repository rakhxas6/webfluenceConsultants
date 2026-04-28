import React from "react";
import {} from "react-icons/fa";

const services = [
  {
    category: "Social Media Marketing",
    description:
      "We handle posts, engagement, and growth so your social media presence delivers results 24/7.",
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
        />
      </svg>
    ),
  },
  {
    category: "Search Engine Optimisation (SEO)",
    description:
      "Local & national SEO solutions to increase organic traffic, leads, and brand authority.",
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
  },
  {
    category: "Performance Marketing",
    description:
      "Search, social & display ads strategically optimised to lower costs and increase conversions.",
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
  {
    category: "Branding",
    description:
      "Logo systems, brand guidelines, and high-impact design assets optimised for recall and revenue.",
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
  },
  {
    category: "Video Production",
    description:
      "Brand storytelling and product showcases that build trust and drive sales across TikTok, Reels, and Shorts.",
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10l4.553-2.276A1 1 0 0121 8.723v6.554a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"
        />
      </svg>
    ),
  },
  {
    category: "Web Development",
    description:
      "Custom websites, e-commerce stores, and mobile-optimised designs built for speed and sales.",
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section
      className="py-20 px-6 border-t border-neutral-200 scroll-mt-[10vh]"
      id="services"
    >
      <div className="max-w-5xl mx-auto">
        {/* heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-[#0025cc]">
            Our Services
          </h2>
          <p className="text-sm text-gray-400 mt-2 max-w-sm mx-auto leading-relaxed">
            Everything you need to grow your brand online — strategy, execution,
            and results.
          </p>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#ff751f] ">
          {services.map((s, i) => (
            <div
              key={i}
              className="group bg-white px-8 py-10 flex flex-col gap-4 hover:bg-[#f7f8ff] transition-colors duration-200 cursor-default"
            >
              {/* icon */}
              <div className="flex justify-center text-white  opacity-70 group-hover:opacity-100 transition-opacity duration-200">
                <span className="bg-[#0025cc] p-5 rounded-full">{s.icon}</span>
              </div>

              {/* title */}
              <h3 className="text-center text-xl font-semibold text-slate-700 group-hover:text-[#0025cc] transition-colors duration-200">
                {s.category}
              </h3>

              {/* description */}
              {/* description */}
              <p className="text-sm text-gray-400 leading-relaxed text-center">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
