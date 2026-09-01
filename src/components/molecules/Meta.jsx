import React from "react";
import Label from "../atoms/Label";
import { cn } from "../../lib/cn";

/** Key/value colophon row — the fine print running along the foot of a band. */
export default function Meta({ items, className }) {
  return (
    <dl className={cn("grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-4", className)}>
      {items.map(({ term, value }) => (
        <div key={term} className="border-t border-rule pt-4">
          <dt>
            <Label as="span">{term}</Label>
          </dt>
          <dd className="mt-2 text-[0.85rem] leading-snug text-ink-soft">{value}</dd>
        </div>
      ))}
    </dl>
  );
}
