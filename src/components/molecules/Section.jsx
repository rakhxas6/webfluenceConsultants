import React from "react";
import Container from "../atoms/Container";
import { cn } from "../../lib/cn";

const grounds = {
  paper: "bg-paper",
  raised: "bg-paper-raised",
  ink: "bg-ink text-paper",
};

/**
 * A page band. Owns the vertical rhythm, the hairline that separates it from
 * the band above, and the optional grid substrate — so no section has to
 * reinvent its own padding.
 */
export default function Section({
  id,
  ground = "paper",
  grid = false,
  rule = true,
  bleed = false,
  className,
  containerClassName,
  children,
  ...rest
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full py-band",
        grounds[ground],
        rule && ground !== "ink" && "border-t border-rule",
        className,
      )}
      {...rest}
    >
      {grid && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 substrate opacity-60  [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_78%)]"
        />
      )}
      <Container bleed={bleed} className={cn("relative", containerClassName)}>
        {children}
      </Container>
    </section>
  );
}
