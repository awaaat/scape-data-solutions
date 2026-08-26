import fs from "node:fs";
import katex from "katex";

const file = process.argv[2];
if (!file) {
  console.error("Usage: node scripts/prerender-math.mjs <path-to-article.html>");
  process.exit(1);
}

let html = fs.readFileSync(file, "utf8");
const mathSpanRegex = /<span class="math (display|inline)">([\s\S]*?)<\/span>/g;

let count = 0;
html = html.replace(mathSpanRegex, (match, mode, tex) => {
  count++;
  try {
    return katex.renderToString(tex.trim(), {
      displayMode: mode === "display",
      throwOnError: false,
    });
  } catch (e) {
    console.error("Failed to render formula #" + count + ":", tex.trim(), e.message);
    return match;
  }
});

fs.writeFileSync(file, html);
console.log("Pre-rendered " + count + " formulas in " + file);
