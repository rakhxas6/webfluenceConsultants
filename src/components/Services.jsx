import React from "react";
import servicesData from "./services/servicesData.json";
import serviceIcons from "./services/Serviceicons";
import { useNavigate } from "react-router-dom";

export default function Services() {
   const navigate = useNavigate();

  return (
    <section
      className="py-16 border-t border-neutral-200 scroll-mt-[10vh]"
      style={{ width: "100%", boxSizing: "border-box", overflowX: "hidden" }}
      id="services"
    >
      <div className="max-w-5xl mx-auto px-4">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-x divide-y divide-[#ff751f]/90 -m-px">
          {servicesData.map((s) => (
            <button
              key={s.id}
              onClick={() => navigate(`/${s.id}`)}
              className="group bg-white px-8 py-10 flex flex-col gap-4 hover:bg-[#f7f8ff] transition-colors duration-200 cursor-pointer text-left  -m-px w-full"
            >
              {/* icon */}
              <div className="flex justify-center text-white opacity-70 group-hover:opacity-100 transition-opacity duration-200">
                <span className="bg-[#0025cc] p-5 rounded-full">
                  {serviceIcons[s.id]}
                </span>
              </div>
              {/* title */}
              <h3 className="text-center text-xl font-semibold text-slate-700 group-hover:text-[#0025cc] transition-colors duration-200">
                {s.category}
              </h3>
              {/* description */}
              <p className="text-sm text-gray-400 leading-relaxed text-center">
                {s.description}
              </p>
              {/* learn more hint */}
              <p className="text-xs text-[#0025cc] text-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-medium tracking-wide mt-auto">
                Learn more →
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
