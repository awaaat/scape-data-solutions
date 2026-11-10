// src/components/OrderPush/orderLinks.js
// One place that decides where every "order" button on the site points.
// Change ORDER_BASE here and every button follows.
export const ORDER_BASE = "https://thesis.scapedatasolutions.com/order-now";

// `slug` is passed as ?service=. The order wizard matches it against its service
// catalog (by slug or label); if nothing matches it simply opens unselected.
export const SERVICES = [
  { key: "thesis",   label: "Thesis / dissertation stats", slug: "thesis-data-analysis-help" },
  { key: "spss",     label: "SPSS, R or Stata analysis",   slug: "spss-data-analysis-help" },
  { key: "survey",   label: "Survey / questionnaire data", slug: "questionnaire-data-analysis-help" },
  { key: "clean",    label: "Messy data cleaning",         slug: "research-data-cleaning-service" },
  { key: "chapter4", label: "Chapter 4 write-up",          slug: "chapter-4-results-writing-help" },
  { key: "other",    label: "Something else",              slug: "other" },
];

export function orderUrl({ service, medium = "site", content } = {}) {
  const p = new URLSearchParams();
  if (service) p.set("service", service);
  p.set("utm_source", "scape-main");
  p.set("utm_medium", medium);                       // which button / widget was clicked
  const path = typeof window !== "undefined" ? window.location.pathname : "/";
  p.set("utm_campaign", path.replace(/^\/|\/$/g, "").replace(/\//g, "-") || "home"); // which page
  if (content) p.set("utm_content", content);
  return `${ORDER_BASE}?${p.toString()}`;
}

const ACADEMIC = /(thesis|dissert|chapter|spss|academic|research|survey|cronbach|amos|sem|statist|student|assignment|proofread|editing|formatting|conference|manuscript|resources|regression|big-data|likert|factor|writing|learning|curriculum)/i;
export const isAcademicPath = (p = "") => ACADEMIC.test(p);

export function hashStr(s = "") { let h = 0; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0; return Math.abs(h); }

// Pages where no order nudge should ever appear.
export const QUIET = /^\/(business-intel\/(dashboard|login|signup|forgot-password))/;

export const seen = {
  get(k) { try { return sessionStorage.getItem("op_" + k) === "1"; } catch { return false; } },
  set(k) { try { sessionStorage.setItem("op_" + k, "1"); } catch { /* private mode */ } },
};
