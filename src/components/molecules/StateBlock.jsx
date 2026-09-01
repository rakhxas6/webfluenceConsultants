import React from "react";
import Label from "../atoms/Label";
import { cn } from "../../lib/cn";

/** Shared empty / error / not-found panel so these states never look ad hoc. */
export default function StateBlock({ tone = "empty", title, children, action, className }) {
  return (
    <div className={cn("border border-dashed border-rule-strong bg-hatch px-8 py-16 text-center", className)}>
      <Label tone={tone === "error" ? "flame" : "muted"}>
        {tone === "error" ? "Something broke" : "Nothing here yet"}
      </Label>
      {title && (
        <p className="mx-auto mt-5 max-w-measure font-display text-d4 font-extrabold uppercase text-ink">
          {title}
        </p>
      )}
      {children && <p className="mx-auto mt-3 max-w-measure text-[0.9rem] text-ink-muted">{children}</p>}
      {action && <div className="mt-8 flex justify-center">{action}</div>}
    </div>
  );
}
