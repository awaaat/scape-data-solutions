// src/components/OrderPush/orderLinks.js
// One place that decides where every "order" button on the site points, and WHICH SERVICE it orders.
// Change ORDER_BASE and every button follows.
export const ORDER_BASE = "https://thesis.scapedatasolutions.com/order-now";

// Words that need special casing when a slug is turned into a readable name.
const WORDS = { ai: "AI", bi: "BI", spss: "SPSS", hr: "HR", sem: "SEM", amos: "AMOS", etl: "ETL", llm: "LLM", mlops: "MLOps",
  eviews: "EViews", jasp: "JASP", matlab: "MATLAB", odk: "ODK", "kp-is": "KPIs", kpis: "KPIs", fp: "FP", cv: "CV", ml: "ML",
  and: "and", of: "of", for: "for", the: "the", to: "to", in: "in", vs: "vs" };
export function nameFromSlug(slug = "") {
  const fixed = slug.replace(/kp-is/g, "kpis");
  return fixed.split("-").filter(Boolean).map((w, i) => WORDS[w] ?? (i === 0 || !["and","of","for","the","to","in"].includes(w) ? w[0].toUpperCase() + w.slice(1) : w)).join(" ");
}

const INDUSTRY_PAGES = ["dental-analytics", "veterinary-analytics", "medical-practice-analytics"];
// The service the visitor is looking at right now, taken from the URL.
export function serviceFromPath(p = "") {
  const path = p.replace(/\/+$/, "");
  let m = path.match(/^\/services\/([^/]+)$/);
  if (m && m[1] !== "category") return { slug: m[1], name: nameFromSlug(m[1]) };
  m = path.match(/^\/([^/]+)$/);
  if (m && INDUSTRY_PAGES.includes(m[1])) return { slug: m[1], name: nameFromSlug(m[1]) };
  return null;
}
export const currentService = () => (typeof window === "undefined" ? null : serviceFromPath(window.location.pathname));

// Broad picker used where no single service is in view (home, about, dock on non-service pages).
// slug = the parent site's own service page, name = what the visitor reads.
export const SERVICES = [
  { key: "thesis",    label: "Thesis / dissertation statistics", slug: "dissertation-statistics-help", name: "Dissertation statistics help" },
  { key: "spss",      label: "SPSS, R or Stata analysis",        slug: "spss-data-analysis",          name: "SPSS data analysis" },
  { key: "survey",    label: "Survey / questionnaire data",      slug: "survey-data-analysis",        name: "Survey data analysis" },
  { key: "chapter4",  label: "Chapter 4 results write-up",       slug: "chapter-4-analysis",          name: "Chapter 4 analysis" },
  { key: "clean",     label: "Data cleaning",                    slug: "data-cleaning",               name: "Data cleaning" },
  { key: "dashboard", label: "Dashboards and reporting",         slug: "dashboard-development",       name: "Dashboard development" },
  { key: "forecast",  label: "Forecasting and planning",         slug: "sales-forecasting-demand-planning", name: "Sales forecasting and demand planning" },
  { key: "ai",        label: "AI and automation",                slug: "ai-automation",               name: "AI automation" },
  { key: "other",     label: "Something else",                   slug: "other",                       name: "Something else" },
];

// service: a slug string, null (force no service), or undefined (use the page's own service).
export function orderUrl({ service, serviceName, medium = "site", content, urgent } = {}) {
  const p = new URLSearchParams();
  let slug = service, name = serviceName;
  if (service === undefined) { const c = currentService(); if (c) { slug = c.slug; name = c.name; } }
  if (slug) {
    p.set("service", slug);
    const known = SERVICES.find((x) => x.slug === slug);
    const nm = name || (known ? known.name : nameFromSlug(slug));
    if (nm) p.set("service_name", nm);
  }
  if (urgent) p.set("urgent", "1");
  p.set("utm_source", "scape-main");
  p.set("utm_medium", medium);
  const path = typeof window !== "undefined" ? window.location.pathname : "/";
  p.set("utm_campaign", path.replace(/^\/|\/$/g, "").replace(/\//g, "-") || "home");
  if (content) p.set("utm_content", content);
  return `${ORDER_BASE}?${p.toString()}`;
}

const ACADEMIC = /(thesis|dissert|chapter|spss|academic|research|survey|cronbach|amos|sem|statist|student|assignment|proofread|editing|formatting|conference|manuscript|resources|regression|big-data|likert|factor|writing|learning|curriculum|journal|econometric|eviews|jasp|jamovi|matlab|graphpad|grounded|content-analysis|experimental)/i;
export const isAcademicPath = (p = "") => ACADEMIC.test(p);

export function hashStr(s = "") { let h = 0; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0; return Math.abs(h); }

// Pages where no order nudge should ever appear.
export const QUIET = /^\/(business-intel\/(dashboard|login|signup|forgot-password))/;

export const seen = {
  get(k) { try { return sessionStorage.getItem("op_" + k) === "1"; } catch { return false; } },
  set(k) { try { sessionStorage.setItem("op_" + k, "1"); } catch { /* private mode */ } },
};
