import React, { forwardRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "../../lib/cn";
import Spinner from "./Spinner";

/**
 * The one button in the system.
 *
 * Square corners and a hairline border keep it in the Swiss register; the
 * hover state is a colour block that wipes up from the baseline rather than a
 * transform, so nothing in the layout shifts under the pointer.
 */

const variants = {
  // Ink block that inverts to paper on hover
  solid: "border-ink bg-ink text-paper [--wipe:#FAFAF8] [--wipe-fg:#0A0A0A]",
  // Brand block
  brand: "border-brand bg-brand text-paper [--wipe:#001A8C] [--wipe-fg:#FAFAF8]",
  // Paper with hairline border, fills with ink
  outline: "border-ink bg-transparent text-ink [--wipe:#0A0A0A] [--wipe-fg:#FAFAF8]",
  // On dark grounds
  invert: "border-paper bg-transparent text-paper [--wipe:#FAFAF8] [--wipe-fg:#0A0A0A]",
  // Flame accent
  flame: "border-flame bg-flame text-ink [--wipe:#0A0A0A] [--wipe-fg:#FAFAF8]",
  whatsapp: "border-whatsapp bg-whatsapp text-white [--wipe:#0A0A0A] [--wipe-fg:#FAFAF8]",
};

const sizes = {
  // 44px minimum touch target on every size
  sm: "h-11 px-4 text-[0.6875rem] tracking-[0.12em]",
  md: "h-12 px-6 text-[0.75rem] tracking-[0.12em]",
  lg: "h-14 px-8 text-[0.8125rem] tracking-[0.1em]",
};

const Button = forwardRef(function Button(
  {
    as,
    variant = "solid",
    size = "md",
    arrow = false,
    icon: Icon,
    loading = false,
    disabled = false,
    className,
    children,
    ...rest
  },
  ref,
) {
  const Tag = as || (rest.href ? "a" : "button");
  const isDisabled = disabled || loading;

  return (
    <Tag
      ref={ref}
      {...(Tag === "button" ? { type: rest.type || "button", disabled: isDisabled } : {})}
      aria-busy={loading || undefined}
      aria-disabled={isDisabled || undefined}
      className={cn(
        "group/btn relative isolate inline-flex select-none items-center justify-center gap-2.5 overflow-hidden",
        "border font-meta uppercase leading-none",
        "transition-colors duration-300 ease-editorial",
        "hover:text-[var(--wipe-fg)] focus-visible:text-[var(--wipe-fg)]",
        variants[variant],
        sizes[size],
        isDisabled && "pointer-events-none opacity-45",
        !isDisabled && "cursor-pointer",
        className,
      )}
      {...rest}
    >
      {/* Colour block wiping up from the baseline — transform-only, so it composites on the GPU */}
      <span
        aria-hidden="true"
        className={cn(
          "absolute inset-0 -z-10 origin-bottom scale-y-0 bg-[var(--wipe)]",
          "transition-transform duration-[380ms] ease-editorial",
          "group-hover/btn:scale-y-100 group-focus-visible/btn:scale-y-100",
          "motion-reduce:transition-none",
        )}
      />
      {loading ? <Spinner /> : Icon ? <Icon className="h-4 w-4 shrink-0" strokeWidth={1.75} /> : null}
      <span>{children}</span>
      {arrow && !loading && (
        <ArrowUpRight
          className="h-4 w-4 shrink-0 transition-transform duration-300 ease-editorial group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 motion-reduce:transition-none"
          strokeWidth={1.75}
          aria-hidden="true"
        />
      )}
    </Tag>
  );
});

export default Button;
