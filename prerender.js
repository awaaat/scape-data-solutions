// prerender.js
//
// Runs AFTER `vite build`. Spins up a tiny local server serving the
// freshly-built dist/ folder, then uses headless Chrome (Puppeteer)
// to visit every real route in the app, wait for React to finish
// rendering, and save the resulting fully-rendered HTML back into
// dist/<route>/index.html.
//
// Result: Google (and anyone else) gets real, complete HTML on the
// very first request — no JavaScript execution required to see
// your content. Real users still get the normal interactive SPA;
// React hydrates over this static HTML once the JS loads.
//
// USAGE: node prerender.js
// (wired into package.json as part of the "build" script — see
//  PACKAGE_JSON_CHANGES note below)

import { exec } from 'child_process';
import { existsSync, mkdirSync, writeFileSync, readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';
import handler from 'serve-handler';
import http from 'http';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST_DIR = join(__dirname, 'dist');
const PORT = 4173;
const BASE_URL = `http://localhost:${PORT}`;

// ─── Every real route from App.jsx (kept in sync manually) ────────
// If you add a new <Route> in App.jsx, add its path here too.
const ROUTES = [
  '/',
  '/services',
  '/solutions',
  '/about',
  '/contact',
  '/company',
  '/history',
  '/why-us',
  '/team',
  '/expertise',
  '/career',
  '/blog',
  '/faq',
  '/portfolio',
  '/portfolio/bi',
  '/portfolio/ai',
  '/portfolio/pipelines',
  '/portfolio/mobile',
  '/clients',
  '/testimonials',
  '/sitemap',
  '/case-studies',
];

function startServer() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) =>
      handler(req, res, { public: DIST_DIR, rewrites: [{ source: '**', destination: '/index.html' }] })
    );
    server.listen(PORT, () => {
      console.log(`✓ Local preview server running at ${BASE_URL}`);
      resolve(server);
    });
  });
}

async function prerenderRoute(browser, route) {
  const page = await browser.newPage();
  const url = `${BASE_URL}${route}`;

  await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

  // Give React + react-helmet-async a moment to finish writing
  // <title>/<meta>/<script> tags into <head> after route render.
  await new Promise((r) => setTimeout(r, 500));

  const html = await page.content();
  await page.close();

  // Decide output path: "/" -> dist/index.html (already exists, overwrite)
  // "/services" -> dist/services/index.html
  const outDir = route === '/' ? DIST_DIR : join(DIST_DIR, route.slice(1));
  if (!existsSync(outDir)) {
    mkdirSync(outDir, { recursive: true });
  }
  const outFile = join(outDir, 'index.html');
  writeFileSync(outFile, html, 'utf-8');

  console.log(`  ✓ Prerendered ${route}  →  ${outFile.replace(__dirname, '.')}`);
}

async function run() {
  if (!existsSync(DIST_DIR)) {
    console.error('✗ dist/ folder not found. Run `vite build` first.');
    process.exit(1);
  }

  console.log(`Prerendering ${ROUTES.length} routes...\n`);

  const server = await startServer();
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    // Run sequentially (not parallel) to keep memory usage low —
    // fine for ~22 pages, well within typical CI build limits.
    for (const route of ROUTES) {
      await prerenderRoute(browser, route);
    }
  } finally {
    await browser.close();
    server.close();
  }

  console.log('\n✓ Prerendering complete. All routes now have static HTML.');
}

run().catch((err) => {
  console.error('✗ Prerendering failed:', err);
  process.exit(1);
});