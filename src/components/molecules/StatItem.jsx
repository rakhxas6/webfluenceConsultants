import React, { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import Numeral from "../atoms/Numeral";
import { useReducedMotion } from "../../lib/useMotionSafe";
import { cn } from "../../lib/cn";

/** Eased count-up that runs once, when the figure actually reaches the viewport. */
function useCountUp(target, { active, duration = 1600, reduced }) {
  const [value, setValue] = useState(reduced ? target : 0);

  useEffect(() => {
    if (!active) return;
    if (reduced) {
      setValue(target);
      return;
    }
    const decimals = String(target).includes(".") ? 1 : 0;
    let frame;
    let start;
    const step = (now) => {
      if (start === undefined) start = now;
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Number((eased * target).toFixed(decimals)));
      if (p < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [active, target, duration, reduced]);

  return value;
}

export default function StatItem({ index, value, prefix = "", suffix = "", label, className }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduced = useReducedMotion();
  const count = useCountUp(value, { active: inView, reduced });

  return (
    <div ref={ref} className={cn("relative -ml-px -mt-px border-l border-t border-rule px-6 py-9 sm:px-8 sm:py-11", className)}>
      <Numeral value={index} />
      <p className="mt-6 flex items-baseline font-display font-extrabold leading-none tracking-tight text-ink">
        {prefix && <span className="text-[clamp(1.5rem,3vw,2.5rem)] text-ink-faint">{prefix}</span>}
        <span className="text-[clamp(2.5rem,6vw,4.5rem)] tnum">{count}</span>
        {suffix && <span className="text-[clamp(1.5rem,3vw,2.5rem)] text-flame">{suffix}</span>}
      </p>
      <p className="mt-4 max-w-[16rem] font-meta text-meta uppercase leading-relaxed text-ink-muted">
        {label}
      </p>
    </div>
  );
}
