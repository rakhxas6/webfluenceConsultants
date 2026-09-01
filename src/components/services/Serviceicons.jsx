import React from "react";
import { Share2, Search, TrendingUp, Palette, Clapperboard, Code2 } from "lucide-react";

/**
 * One icon set (Lucide), one stroke weight, one 24px box — so the six service
 * marks read as a family rather than six borrowed glyphs.
 */
const props = { className: "h-5 w-5", strokeWidth: 1.5, "aria-hidden": true };

const serviceIcons = {
  "social-media-marketing": <Share2 {...props} />,
  seo: <Search {...props} />,
  "performance-marketing": <TrendingUp {...props} />,
  branding: <Palette {...props} />,
  "video-production": <Clapperboard {...props} />,
  "web-development": <Code2 {...props} />,
};

export default serviceIcons;
