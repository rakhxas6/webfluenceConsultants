import React from "react";
import { Star } from "lucide-react";
import Skeleton from "../atoms/Skeleton";
import { cn } from "../../lib/cn";

const CARD = "w-[19rem] shrink-0 border border-rule bg-paper p-7 sm:w-[23rem]";

export function TestimonialSkeleton() {
  return (
    <div className={CARD} aria-hidden="true">
      <div className="flex gap-1.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="h-3.5 w-3.5" />
        ))}
      </div>
      <div className="mt-6 space-y-2.5">
        <Skeleton />
        <Skeleton className="w-[92%]" />
        <Skeleton className="w-[70%]" />
      </div>
      <div className="mt-8 flex items-center gap-3.5">
        <Skeleton className="h-11 w-11 shrink-0 rounded-full" />
        <div className="flex-1 space-y-2">
          <Skeleton className="w-28" />
          <Skeleton className="w-20" />
        </div>
      </div>
    </div>
  );
}

export default function TestimonialCard({ name, role, text, image, stars = 5 }) {
  return (
    <figure className={cn(CARD, "transition-colors duration-300 ease-editorial hover:border-ink")}>
      <div className="flex items-center gap-1.5" role="img" aria-label={`${stars} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            aria-hidden="true"
            className={cn("h-3.5 w-3.5", i < stars ? "fill-flame text-flame" : "fill-rule text-rule")}
            strokeWidth={1}
          />
        ))}
      </div>

      <blockquote className="mt-6 text-[0.9rem] leading-relaxed text-ink-soft">“{text}”</blockquote>

      <figcaption className="mt-8 flex items-center gap-3.5 border-t border-rule pt-5">
        {image ? (
          <img
            src={image}
            alt=""
            loading="lazy"
            decoding="async"
            width="44"
            height="44"
            className="h-11 w-11 shrink-0 rounded-full object-cover grayscale"
          />
        ) : (
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-paper-deep font-meta text-meta text-ink-muted">
            {name?.slice(0, 2).toUpperCase()}
          </span>
        )}
        <div className="min-w-0">
          <p className="truncate text-[0.875rem] font-semibold text-ink">{name}</p>
          <p className="truncate font-meta text-meta uppercase text-ink-faint">{role}</p>
        </div>
      </figcaption>
    </figure>
  );
}
