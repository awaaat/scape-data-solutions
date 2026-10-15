// src/components/ScrollToTop.jsx
// Every navigation starts at the top of the page. Always.
import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

const toTop = () =>
  window.scrollTo({ top: 0, left: 0, behavior: "instant" }); // instant ignores any CSS smooth-scroll

export default function ScrollToTop() {
  const { pathname, search, hash } = useLocation();

  // Immediately on route change (before paint)
  useLayoutEffect(() => {
    if (hash) return; // let real #anchors work
    toTop();
  }, [pathname, search, hash]);

  // Re-assert after the lazy-loaded page mounts / layout settles
  useEffect(() => {
    if (hash) return;
    const raf = requestAnimationFrame(toTop);
    const t1 = setTimeout(toTop, 60);
    const t2 = setTimeout(toTop, 250);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [pathname, search, hash]);

  return null;
}
