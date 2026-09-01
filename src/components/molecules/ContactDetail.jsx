import React from "react";
import Label from "../atoms/Label";
import { cn } from "../../lib/cn";

/** Label-over-value contact line, optionally linked. */
export default function ContactDetail({ icon: Icon, label, value, href, external, className }) {
  const body = (
    <span className={cn("block text-[0.9rem] leading-relaxed text-ink", href && "link-draw text-brand")}>
      {value}
    </span>
  );

  return (
    <div className={cn("flex gap-4 border-t border-rule pt-5", className)}>
      {Icon && (
        <span aria-hidden="true" className="mt-0.5 shrink-0 text-ink-faint">
          <Icon className="h-4 w-4" strokeWidth={1.5} />
        </span>
      )}
      <div className="min-w-0">
        <Label className="mb-2">{label}</Label>
        {href ? (
          <a
            href={href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="inline-block"
          >
            {body}
          </a>
        ) : (
          body
        )}
      </div>
    </div>
  );
}
