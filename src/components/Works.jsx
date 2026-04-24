import React, { useState } from "react";

const projects = [
  {
    title: "Brand identity redesign",
    client: "Himalayan Brew Co.",
    category: "Branding",
    description:
      "Full brand overhaul including logo, colour palette, typography system, and brand guidelines for a specialty coffee chain expanding across Nepal.",
    tags: ["Logo", "Brand guidelines", "Print"],
    year: "2024",
    metric: { value: "3 months", label: "delivery" },
  },
  {
    title: "E-commerce growth campaign",
    client: "Nepali Craft Store",
    category: "Paid Media",
    description:
      "Scaled monthly revenue 3.2× in 90 days through Meta and Google Ads, landing page CRO, and email automation for a handcraft e-commerce brand.",
    tags: ["Meta Ads", "Google Ads", "CRO"],
    year: "2024",
    metric: { value: "3.2×", label: "revenue growth" },
  },
  {
    title: "Corporate website build",
    client: "Summit Realty",
    category: "Web Development",
    description:
      "Designed and developed a high-performance property listing website with custom search filters, CMS integration, and mobile-first responsive layout.",
    tags: ["React", "CMS", "UI/UX"],
    year: "2023",
    metric: { value: "98", label: "Lighthouse score" },
  },
  {
    title: "SEO & content strategy",
    client: "Pokhara Tourism Board",
    category: "SEO",
    description:
      "Grew organic traffic by 180% over 6 months through technical SEO audits, content cluster strategy, and local search optimisation.",
    tags: ["Technical SEO", "Content", "Local SEO"],
    year: "2023",
    metric: { value: "180%", label: "organic growth" },
  },
  {
    title: "Social media management",
    client: "Devi's Kitchen",
    category: "Social Media",
    description:
      "Built a loyal community of 40k+ followers across Instagram and Facebook through consistent content, reels strategy, and community engagement.",
    tags: ["Instagram", "Facebook", "Reels"],
    year: "2024",
    metric: { value: "40k+", label: "followers gained" },
  },
  {
    title: "Performance dashboard",
    client: "TechStart Nepal",
    category: "Web Development",
    description:
      "Built a real-time analytics dashboard for a SaaS startup, integrating multiple data sources with role-based access and exportable reports.",
    tags: ["React", "API", "Dashboard"],
    year: "2023",
    metric: { value: "4 APIs", label: "integrated" },
  },
];

const categories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];

const categoryConfig = {
  Branding: {
    bg: "bg-[#0025cc]/10",
    text: "text-[#0025cc]",
    accent: "#0025cc",
    accentLight: "#eef0ff",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  "Paid Media": {
    bg: "bg-amber-50",
    text: "text-amber-700",
    accent: "#b45309",
    accentLight: "#fffbeb",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  "Web Development": {
    bg: "bg-emerald-50",
    text: "text-emerald-700",
    accent: "#065f46",
    accentLight: "#ecfdf5",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  SEO: {
    bg: "bg-violet-50",
    text: "text-violet-700",
    accent: "#5b21b6",
    accentLight: "#f5f3ff",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  "Social Media": {
    bg: "bg-pink-50",
    text: "text-pink-700",
    accent: "#9d174d",
    accentLight: "#fdf2f8",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    ),
  },
};

export default function Work() {
  const [active, setActive] = useState("All");
  const [hovered, setHovered] = useState(null);

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section
      className="pt-32 pb-16 px-4 border-t border-neutral-300 scroll-mt-[8vh]"
      id="work"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-lg text-[#0025cc] font-medium pb-2">Our Work</p>
          <h1 className="text-4xl font-semibold text-slate-700 pb-4">
            Results we've delivered
          </h1>
          <p className="text-sm text-gray-500">
            A selection of projects across branding, web, paid media, and SEO.
            <br />
            Every engagement starts with a problem worth solving.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-sm border transition-colors duration-200 ${
                active === cat
                  ? "bg-[#0025cc] text-white border-[#0025cc]"
                  : "bg-white text-gray-500 border-gray-200 hover:border-[#0025cc] hover:text-[#0025cc]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => {
            const config = categoryConfig[project.category] ?? {
              bg: "bg-gray-100",
              text: "text-gray-600",
              accent: "#374151",
              accentLight: "#f9fafb",
              icon: null,
            };
            const isHovered = hovered === i;

            return (
              <div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="group relative flex flex-col bg-white border border-neutral-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-transparent hover:shadow-lg"
                style={{
                  boxShadow: isHovered
                    ? `0 8px 30px -4px ${config.accent}22`
                    : undefined,
                }}
              >
                {/* Coloured top bar */}
                <div
                  className="h-1 w-full transition-all duration-300"
                  style={{ background: config.accent }}
                />

                <div className="flex flex-col flex-1 p-6">

                  {/* Top row — category badge + year */}
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full ${config.bg} ${config.text}`}
                    >
                      <span style={{ color: config.accent }}>{config.icon}</span>
                      {project.category}
                    </span>
                    <span className="text-xs text-gray-400 tabular-nums">
                      {project.year}
                    </span>
                  </div>

                  {/* Title & client */}
                  <h3 className="text-base font-semibold text-slate-700 mb-1 group-hover:text-[#0025cc] transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium mb-4" style={{ color: config.accent }}>
                    {project.client}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-gray-500 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Metric highlight */}
                  <div
                    className="mt-5 rounded-xl px-4 py-3 flex items-center gap-3"
                    style={{ background: config.accentLight }}
                  >
                    <div
                      className="w-1 h-8 rounded-full flex-shrink-0"
                      style={{ background: config.accent }}
                    />
                    <div>
                      <p
                        className="text-lg font-semibold leading-none"
                        style={{ color: config.accent }}
                      >
                        {project.metric.value}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {project.metric.label}
                      </p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-neutral-100">
                    {project.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="text-xs text-gray-400 border border-neutral-200 rounded-full px-2.5 py-0.5 transition-colors duration-200 group-hover:border-neutral-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 mb-4">
            Want results like these for your business?
          </p>
          <a
            href="https://wa.me/9779867925779"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#0025cc] text-white px-8 py-2.5 rounded-full text-sm hover:bg-[#0020b0] transition-colors duration-300"
          >
            Start a project
          </a>
        </div>

      </div>
    </section>
  );
}