export const CAT_LABEL = {
  academic: "Academic & Research", analytics: "Advanced Analytics", finance: "Finance & Risk", healthcare: "Healthcare & Life Sciences",
  manufacturing: "Manufacturing & Supply Chain", retail: "Retail & E-Commerce", "assignment-help": "Assignment & Software Help",
  "academic-writing": "Academic Writing & Publishing", "research-methods": "Statistical & Research Methods", "ai-ml": "AI & Machine Learning",
  "data-engineering": "Data Engineering & BI Tools",
};
const STOP = new Set(["and", "of", "for", "the", "a", "an", "to", "in", "with", "your", "our", "on", "by"]);
export const norm = (t = "") =>
  String(t).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/&amp;|&/g, " and ").replace(/[^a-z0-9+#]+/g, " ").trim();
const toks = (t) => norm(t).split(" ").filter((w) => w && !STOP.has(w));
const SYN = {
  thesis: "dissertation chapter", dissertation: "thesis chapter", chapter: "thesis dissertation", stats: "statistics statistical", stat: "statistics",
  spss: "statistics", anova: "statistics", regression: "statistics", survey: "questionnaire", questionnaire: "survey", bi: "business intelligence dashboard",
  powerbi: "power bi dashboard", ml: "machine learning", ai: "artificial intelligence", dl: "deep learning", nlp: "language text", sem: "structural equation modeling",
  pls: "partial least squares", efa: "factor analysis", cfa: "factor analysis", pca: "principal component", cleaning: "preprocessing", etl: "pipeline data engineering",
  sql: "database", forecast: "forecasting prediction", churn: "retention", dashboard: "visualization reporting", paper: "manuscript journal", writing: "editing",
  publish: "publication journal", proofread: "editing", hospital: "healthcare clinic", clinic: "healthcare hospital", patient: "healthcare", bank: "finance",
  trading: "finance", fraud: "risk", supply: "logistics", inventory: "supply logistics", assignment: "homework coursework", homework: "assignment",
  sentiment: "brand reputation monitoring", telehealth: "remote monitoring healthcare",
};
function lev(a, b, max) {
  if (Math.abs(a.length - b.length) > max) return max + 1;
  let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const cur = [i]; let rowMin = i;
    for (let j = 1; j <= b.length; j++) {
      const v = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      cur[j] = v; if (v < rowMin) rowMin = v;
    }
    if (rowMin > max) return max + 1;
    prev = cur;
  }
  return prev[b.length];
}
function wordScore(q, words) {
  let best = 0;
  for (const w of words) {
    if (w === q) return 1;
    if (q.length >= 2 && w.startsWith(q)) { best = Math.max(best, 0.85 - Math.min(0.2, (w.length - q.length) * 0.02)); continue; }
    if (q.length >= 3 && w.includes(q)) { best = Math.max(best, 0.5); continue; }
    if (q.length >= 4) {
      const max = q.length >= 8 ? 2 : 1;
      const d = Math.min(lev(q, w, max), lev(q, w.slice(0, q.length), max));
      if (d <= max) best = Math.max(best, 0.65 - 0.15 * d);
    }
  }
  return best;
}
const FIELDS = [["title", 6], ["items", 3], ["cat", 2], ["desc", 1.4]];
export function buildIndex(cards) {
  return cards.map((card, order) => ({
    card, order, titleNorm: norm(card.name),
    title: toks(card.name), items: toks((card.items || []).join(" ")),
    cat: toks(CAT_LABEL[card.cat] || card.cat || ""), desc: toks(card.desc || ""),
  }));
}
export function searchServices(index, query) {
  const qn = norm(query), qt = toks(query);
  if (!qt.length) return index.map((d) => d.card);
  const expanded = qt.map((t) => ({ t, syn: (SYN[t] ? toks(SYN[t]) : []) }));
  const out = [];
  for (const d of index) {
    let total = 0, ok = true;
    for (const { t, syn } of expanded) {
      let best = 0;
      for (const [f, w] of FIELDS) {
        best = Math.max(best, wordScore(t, d[f]) * w);
        for (const sy of syn) best = Math.max(best, wordScore(sy, d[f]) * w * 0.6);
      }
      if (best === 0) { ok = false; break; }
      total += best;
    }
    if (!ok) continue;
    let score = total / qt.length;
    if (d.titleNorm.startsWith(qn)) score += 4; else if (d.titleNorm.includes(qn)) score += 3;
    if (qt.every((t) => wordScore(t, d.title) > 0)) score += 2;
    out.push({ card: d.card, score, order: d.order });
  }
  return out.sort((a, b) => b.score - a.score || a.order - b.order).map((x) => x.card);
}
export function highlightParts(text, query) {
  const lower = String(text).toLowerCase();
  const marks = new Array(lower.length).fill(false);
  toks(query).forEach((t) => {
    let i = lower.indexOf(t);
    while (i !== -1) { for (let k = i; k < i + t.length; k++) marks[k] = true; i = lower.indexOf(t, i + t.length); }
  });
  const parts = [];
  for (let i = 0; i < lower.length; i++) {
    const last = parts[parts.length - 1];
    if (last && last.hit === marks[i]) last.text += text[i]; else parts.push({ text: text[i], hit: marks[i] });
  }
  return parts;
}
