import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollTo } from "../lib/useSmoothScroll";

/**
 * Reset scroll on route change — but never when the URL carries a hash, since
 * that means the user asked for a specific section.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    scrollTo(0, { immediate: true });
  }, [pathname, hash]);

  return null;
}
