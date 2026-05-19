import React, { useEffect, useState } from 'react'
import { supabase } from "./supabase/supabaseClient"

const SkeletonCard = () => (
  <div className="bg-white border border-neutral-200 rounded-xl p-4 shrink-0 w-[350px] animate-pulse">
    {/* Stars */}
    <div className="flex gap-1 mb-4">
      {Array(5).fill(0).map((_, i) => (
        <div key={i} className="w-4 h-4 rounded-sm bg-neutral-200" />
      ))}
    </div>
    {/* Text lines */}
    <div className="space-y-2 mb-6">
      <div className="h-3 bg-neutral-200 rounded w-full" />
      <div className="h-3 bg-neutral-200 rounded w-[90%]" />
      <div className="h-3 bg-neutral-200 rounded w-[75%]" />
    </div>
    {/* Avatar + name */}
    <div className="flex items-center gap-3">
      <div className="w-11 h-11 rounded-full bg-neutral-200 shrink-0" />
      <div className="space-y-2 flex-1">
        <div className="h-3 bg-neutral-200 rounded w-28" />
        <div className="h-3 bg-neutral-200 rounded w-20" />
      </div>
    </div>
  </div>
)

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTestimonials() {
      const { data, error } = await supabase
        .from("testimonials")
        .select("id, name, role, text, image_url, stars")
        .eq("is_published", true)
        .order("display_order");

      if (error) console.error(error);
      else setTestimonials(data);

      setLoading(false);
    }

    fetchTestimonials();
  }, []);

  const rows = [
    { start: 0, end: 3, className: "animate-scroll" },
    { start: 3, end: 6, className: "animate-scroll-reverse" }
  ];

  const renderCard = (testimonial, index) => (
    <div key={index} className="bg-white border border-[#ff751f]/60 hover:shadow-md rounded-xl p-4 shrink-0 w-[350px]">
      <div className="flex mb-4">
        {Array(5).fill(0).map((_, i) => (
          <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className={`lucide lucide-star ${i < testimonial.stars ? 'fill-[#ff751f] text-transparent' : 'fill-neutral-200 text-neutral-200'}`}
            aria-hidden="true">
            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
          </svg>
        ))}
      </div>
      <p className="text-neutral-700 text-sm mb-6">{testimonial.text}</p>
      <div className="flex items-center gap-3">
        <img src={testimonial.image_url} alt={testimonial.name} className="w-11 h-11 rounded-full object-cover object-center" />
        <div>
          <p className="font-medium text-neutral-800 text-sm">{testimonial.name}</p>
          <p className="text-neutral-600 text-sm">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap');
          * { font-family: "Geist", sans-serif; }

          @keyframes scroll {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scrollReverse {
            0%   { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-scroll         { animation: scroll 15s linear infinite; }
          .animate-scroll-reverse { animation: scrollReverse 15s linear infinite; }
        `}
      </style>

      <section className="bg-[#FAFAFA] py-16 px-4 border-t border-neutral-300">
        <div className="max-w-6xl mx-auto">

          {/* ── Header — always visible ── */}
          <div className="text-center mb-8">
            <p className="text-lg text-[#0025cc] font-medium pb-2">Loved By Clients</p>
            <h2 className="text-4xl md:text-5xl font-medium text-neutral-900 mb-4">
              What people are saying
            </h2>
            <p className="text-neutral-600 text-sm max-w-96 mx-auto">
              Real feedback from founders, developers and teams building production-ready products.
            </p>
          </div>

          {/* ── Card rows ── */}
          <div className="space-y-6">
            {loading ? (
              /* Skeleton rows — two static rows of 3 cards each */
              [0, 1].map((rowIndex) => (
                <div key={rowIndex} className="relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
                  <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
                  <div className="flex gap-6 px-2">
                    {Array(3).fill(0).map((_, i) => (
                      <SkeletonCard key={i} />
                    ))}
                  </div>
                </div>
              ))
            ) : (
              /* Live scrolling rows */
              rows.map((row, rowIndex) => (
                <div key={rowIndex} className="relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
                  <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
                  <div className={`flex gap-6 ${row.className}`}>
                    {[
                      ...testimonials.slice(row.start, row.end),
                      ...testimonials.slice(row.start, row.end),
                    ].map((testimonial, index) => renderCard(testimonial, index))}
                  </div>
                </div>
              ))
            )}
          </div>

        </div>
      </section>
    </>
  )
}

export default Testimonials