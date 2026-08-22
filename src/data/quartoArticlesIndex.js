// src/data/quartoArticlesIndex.js
//
// Auto-discovers Quarto-authored articles dropped into ./quartoArticles/.
// To publish a new Quarto article:
//   1. quarto render articles/<slug>.qmd   (in ~/scape-blog)
//   2. Copy the rendered fragment to src/data/quartoArticles/<slug>.html
//   3. Add src/data/quartoArticles/<slug>.json with title/excerpt/category/publishDate/sources
//   4. git add, commit, push — no other code changes needed.

const htmlModules = import.meta.glob("./quartoArticles/*.html", {
  query: "?raw",
  import: "default",
  eager: true,
});
const metaModules = import.meta.glob("./quartoArticles/*.json", {
  eager: true,
});

const getSlug = (path) => path.split("/").pop().replace(/\.(html|json)$/, "");

const quartoArticlesIndex = {};

Object.entries(metaModules).forEach(([path, mod]) => {
  const slug = getSlug(path);
  const meta = mod.default ?? mod;
  const htmlPath = `./quartoArticles/${slug}.html`;
  const html = htmlModules[htmlPath];

  if (!html) {
    console.warn(`Quarto article "${slug}" has metadata but no matching .html file — skipping.`);
    return;
  }

  quartoArticlesIndex[slug] = {
    slug: { current: slug },
    title: meta.title,
    excerpt: meta.excerpt,
    category: meta.category,
    publishDate: meta.publishDate,
    sources: meta.sources || [],
    html,
    isQuarto: true,
  };
});

export default quartoArticlesIndex;
export const quartoArticlesList = Object.values(quartoArticlesIndex);
