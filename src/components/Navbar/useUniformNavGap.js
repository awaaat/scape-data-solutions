// src/components/Navbar/useUniformNavGap.js
// Gives EVERY page the same gap between the navbar and its first content.
// Change these two numbers to tune the whole site at once.
import { useEffect } from "react";

const GAP_DESKTOP = 32; // px, >= 1024px wide
const GAP_MOBILE = 20;  // px, < 1024px wide

const inFlow = (el) => {
  const cs = getComputedStyle(el);
  return (
    cs.display !== "none" &&
    cs.position !== "fixed" &&
    cs.position !== "absolute" &&
    !["SCRIPT", "STYLE", "LINK", "TEMPLATE"].includes(el.tagName)
  );
};

const firstInFlowChild = (el) =>
  Array.from(el.children).find(inFlow) || null;

const nextInFlowSibling = (el) => {
  let n = el.nextElementSibling;
  while (n && !inFlow(n)) n = n.nextElementSibling;
  return n;
};

// Walk down the first-child chain until we find the element that actually
// carries the big top padding/margin, then cap it at `gap`.
function clampTop(start, gap) {
  let node = start;
  for (let depth = 0; depth < 6 && node; depth++) {
    const cs = getComputedStyle(node);
    const pt = parseFloat(cs.paddingTop) || 0;
    const mt = parseFloat(cs.marginTop) || 0;

    if (mt > gap) node.style.setProperty("margin-top", gap + "px", "important");

    if (pt > gap) {
      node.style.setProperty("padding-top", gap + "px", "important");
      return;
    }
    if (pt > 0) return; // already small enough, stop here

    node = firstInFlowChild(node); // wrapper with no padding -> go deeper
  }
}

export default function useUniformNavGap(pathname) {
  useEffect(() => {
    let raf = 0;

    const apply = () => {
      const end = document.querySelector("[data-nav-end]");
      if (!end) return;
      const first = nextInFlowSibling(end);
      if (!first) return;
      clampTop(first, window.innerWidth >= 1024 ? GAP_DESKTOP : GAP_MOBILE);
    };

    const schedule = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(apply);
    };

    schedule();

    // Lazy-loaded pages render a moment later, so watch briefly for new DOM.
    const root = document.getElementById("root") || document.body;
    const mo = new MutationObserver(schedule);
    mo.observe(root, { childList: true, subtree: true });
    const stop = setTimeout(() => mo.disconnect(), 5000);

    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(stop);
      mo.disconnect();
      window.removeEventListener("resize", schedule);
    };
  }, [pathname]);
}
