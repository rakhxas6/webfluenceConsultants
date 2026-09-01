import React from "react";
import { cn } from "../../lib/cn";

/**
 * The single page shell. Every section uses this so the left/right rules of
 * the grid line up from the masthead all the way to the footer.
 */
export default function Container({ as: Tag = "div", bleed = false, className, children, ...rest }) {
  return (
    <Tag
      className={cn("mx-auto w-full max-w-shell", !bleed && "px-gutter", className)}
      {...rest}
    >
      {children}
    </Tag>
  );
}
