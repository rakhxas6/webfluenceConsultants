import React, { useEffect, useState } from "react";
import { supabase } from "./supabase/supabaseClient";

const Brands = () => {
  const [logos, setLogos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLogos() {
      const { data, error } = await supabase
        .from("company_logos")
        .select("id, name, image_url")
        .eq("is_published", true)
        .order("display_order");

      // console.log(data);

      if (!error && data) {
        // Duplicate for seamless infinite scroll
        setLogos([...data, ...data]);
      }
      setLoading(false);
    }

    fetchLogos();
  }, []);

  const styles = {
    wrapper: {
      width: "100%",
      backgroundColor: "var(--bg, #0a0a0a)",
      padding: "0",
      overflow: "hidden",
    },
    loadingRow: {
      display: "flex",
      alignItems: "center",
      gap: "48px",
      padding: "20px 48px",
    },
    skeleton: {
      height: "28px",
      width: "90px",
      borderRadius: "4px",
      background:
        "linear-gradient(90deg, rgba(255,255,255,0.04) 25%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.04) 75%)",
      backgroundSize: "400px 100%",
      animation: "shimmer 1.4s ease-in-out infinite",
    },
  };

  if (loading) {
    return (
      <div style={styles.wrapper}>
        <div style={styles.loadingRow}>
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} style={styles.skeleton} />
          ))}
        </div>
      </div>
    );
  }

  
  return (
    <section className="py-16 bg-slate-100/70 px-4 border-t border-neutral-300">
      <h2 className="text-3xl font-semibold text-center mx-auto text-slate-600">
        Our Clients
      </h2>

      <div className="flex items-center w-max mx-auto gap-2 border border-[#ff751f]/90 text-slate-400 rounded-full pl-4 pr-3 py-1 mt-6 text-sm">
        Over 10+ companies we have worked with
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

      <div className="overflow-hidden w-full relative max-w-7xl mx-auto select-none mt-10">
        {/* Left fade */}
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-slate-100 to-transparent" />

        {/* Marquee — doubled for seamless loop */}
        <div
          className="marquee-inner flex items-center will-change-transform"
          style={{ animationDuration: "15s", width: "max-content" }}
        >
          {[...logos, ...logos].map((company, index) => (
            <img
              key={index}
              src={company.image_url}
              alt={company.name}
              className="h-12 w-auto object-contain mx-8 opacity-80 hover:opacity-100 transition-opacity duration-200"
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
