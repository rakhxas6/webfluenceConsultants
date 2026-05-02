import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import servicesData from "./servicesData.json";
import serviceIcons from "./Serviceicons";

const SITE_URL = "https://webfluence-consultants.vercel.app";

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [serviceId]);

  const service = servicesData.find((s) => s.id === serviceId);

  

  const icon = serviceIcons[service.id];
  const pageUrl = `${SITE_URL}/${service.id}`;
  const pageTitle = `${service.category} | Webfluence Consultants`;
  const pageDescription = service.description;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={`${service.category}, ${service.platforms.join(", ")}, digital marketing Nepal`} />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:site_name" content="Webfluence Consultants" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
      </Helmet>

      <section
        className="pt-32 pb-16 border-t border-neutral-300 scroll-mt-[10vh]"
        style={{ width: "100%", boxSizing: "border-box", overflowX: "hidden", padding: "8rem 1rem 4rem" }}
        id="service-detail"
      >
        <div className="max-w-6xl mx-auto">

        

          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-lg text-[#0025cc] font-medium pb-2">Our Services</p>
            <h1 className="text-4xl font-semibold text-slate-700 pb-4">{service.category}</h1>
            <p className="text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Two-column layout */}
          <div className="flex flex-col lg:flex-row gap-12">

            {/* Left */}
            <div className="lg:w-2/5 space-y-8">
              <div>
                <div className="flex items-center gap-4 mb-3">
                  <span className="bg-[#0025cc] text-white p-4 rounded-full flex-shrink-0">
                    {icon}
                  </span>
                  <h2 className="text-2xl font-semibold text-slate-700">{service.tagline}</h2>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mt-4">
                  Every engagement starts with understanding your business goals, then building a
                  strategy that maps directly to revenue — not vanity metrics.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-neutral-200 rounded-lg p-4 text-center">
                  <p className="text-2xl font-semibold text-[#0025cc]">{service.stat1.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{service.stat1.label}</p>
                </div>
                <div className="border border-neutral-200 rounded-lg p-4 text-center">
                  <p className="text-2xl font-semibold text-[#0025cc]">{service.stat2.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{service.stat2.label}</p>
                </div>
              </div>

              {/* Platforms */}
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-10 h-10 bg-[#0025cc]/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#0025cc]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-700 mb-2">Channels &amp; platforms</p>
                  <div className="flex flex-wrap gap-2">
                    {service.platforms.map((p) => (
                      <span key={p} className="text-xs bg-[#0025cc]/10 text-[#0025cc] px-3 py-1 rounded-full">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-10 h-10 bg-[#0025cc]/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#0025cc]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-700">Ready to get started?</p>
                  <a href="mailto:hello@webfluence.com" className="text-sm text-[#0025cc] hover:underline">
                    hello@webfluence.com
                  </a>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px bg-neutral-200 self-stretch" />

            {/* Right — What's included */}
            <div className="lg:w-3/5 flex flex-col gap-8 text-sm">
              <p className="text-sm font-medium text-slate-700 uppercase tracking-widest">What's included</p>

              {service.sections.map((sec, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-0.5 flex-shrink-0 w-10 h-10 bg-[#0025cc]/10 rounded-full flex items-center justify-center text-[#0025cc] font-semibold text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-700 mb-1">{sec.title}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{sec.body}</p>
                  </div>
                </div>
              ))}

              <div className="border-t border-neutral-200 pt-6 mt-2">
                <p className="text-xs text-gray-400 leading-relaxed">
                  Interested in {service.category}? Reach out for a no-obligation discovery call.{" "}
                  <a href="mailto:hello@webfluence.com" className="text-[#0025cc] hover:underline">
                    hello@webfluence.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Other Services */}
          <div className="mt-24 border-t border-neutral-200 pt-16">
            <p className="text-sm font-medium text-slate-700 uppercase tracking-widest mb-8">
              Other Services
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {servicesData
                .filter((s) => s.id !== service.id)
                .map((s) => (
                  <button
                    key={s.id}
                    onClick={() => navigate(`/${s.id}`)}
                    className="group flex items-center gap-4 p-4 border border-neutral-200 rounded-lg hover:border-[#0025cc]/30 hover:bg-[#f7f8ff] transition-all duration-200 text-left w-full"
                  >
                    <span className="flex-shrink-0 bg-[#0025cc]/10 text-[#0025cc] p-3 rounded-full group-hover:bg-[#0025cc] group-hover:text-white transition-colors duration-200">
                      {serviceIcons[s.id]}
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-slate-700 group-hover:text-[#0025cc] transition-colors duration-200">
                        {s.category}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5 truncate">{s.description}</p>
                    </div>
                    <svg
                      className="w-4 h-4 text-gray-300 group-hover:text-[#0025cc] ml-auto flex-shrink-0 transition-colors duration-200"
                      fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}