import React, { useId } from "react";
import { cn } from "../../lib/cn";

/**
 * Underlined form field — label above, hairline below, brand rule on focus.
 * The label is always a real <label for>, never a placeholder standing in for
 * one, so the field stays readable once it holds a value.
 */
export default function Field({
  as = "input",
  label,
  name,
  error,
  required = false,
  hint,
  className,
  ...rest
}) {
  const autoId = useId();
  const id = rest.id || `${name || "field"}-${autoId}`;
  const errorId = `${id}-error`;
  const hintId = `${id}-hint`;
  const Tag = as;

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={id} className="font-meta text-meta uppercase text-ink-muted">
        {label}
        {required && (
          <span className="ml-1 text-flame-deep" aria-hidden="true">
            *
          </span>
        )}
      </label>

      <Tag
        id={id}
        name={name}
        required={required}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={cn(error && errorId, hint && hintId) || undefined}
        className={cn(
          "w-full border-0 border-b bg-transparent pb-2.5 text-[0.95rem] text-ink",
          "placeholder:text-ink-faint",
          "transition-colors duration-200 ease-swift",
          "focus:outline-none focus:ring-0",
          error ? "border-flame-deep focus:border-flame-deep" : "border-rule-strong focus:border-brand",
          as === "textarea" && "min-h-[7.5rem] resize-y",
        )}
        {...rest}
      />

      {hint && !error && (
        <p id={hintId} className="text-[0.75rem] text-ink-faint">
          {hint}
        </p>
      )}
      {error && (
        <p id={errorId} role="alert" className="font-meta text-meta uppercase text-flame-deep">
          {error}
        </p>
      )}
    </div>
  );
}
