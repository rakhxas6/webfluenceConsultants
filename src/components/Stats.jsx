import React, { useEffect, useRef, useState } from "react";

const stats = [
  { value: 50, suffix: "+", label: "Projects delivered" },
  { value: 3.2, suffix: "×", label: "Average revenue growth" },
  { value: 98, suffix: "%", label: "Client satisfaction" },
  { value: 180, suffix: "%", label: "Avg. organic traffic lift" },
];

function useCountUp(target, duration = 1500, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const isDecimal = target % 1 !== 0;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;
      setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

function StatItem({ stat, animate }) {
  const count = useCountUp(stat.value, 1500, animate);
  return (
    <div className="flex flex-col items-center text-center px-6 py-2">
      <div className="flex flex-col  items-center gap-0.5">
        <span className="text-6xl font-semibold text-[#0025cc] tabular-nums leading-none">
          {count}
        </span>
        <span className="text-5xl font-semibold text-[#ff751f] leading-none mb-0.5">
          {stat.suffix}
        </span>
      </div>
      <p className="text-sm text-gray-500 mt-2">{stat.label}</p>
    </div>
  );
}

export default function Stats() {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-slate-100/70 border-t border-b border-neutral-200 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-[#ff751f]/90">
          {stats.map((stat, i) => (
            <StatItem key={i} stat={stat} animate={animate} />
          ))}
        </div>
      </div>
    </section>
  );
}