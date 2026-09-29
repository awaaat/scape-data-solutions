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
// (wired into package.json as part of the "build" script)
//
// On Vercel: uses @sparticuz/chromium (a Chromium build compatible
// with Vercel's build container) via puppeteer-core.
// Locally: falls back to full `puppeteer`'s bundled Chrome.

import { existsSync, mkdirSync, writeFileSync, readdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import handler from 'serve-handler';
import http from 'http';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST_DIR = join(__dirname, 'dist');
const PORT = 4173;
const BASE_URL = `http://localhost:${PORT}`;
const SITE_URL = 'https://www.scapedatasolutions.com';

// Vercel sets this env var automatically during build
const IS_VERCEL = !!process.env.VERCEL;
const FALLBACK_TITLE = 'Data Analytics & BI Consulting | Scape Data Solutions';
const BRAND = 'Scape Data Solutions';
const SKIPPED = new Set();

// ─── Every real route from App.jsx (kept in sync manually) ────────
// If you add a new <Route> in App.jsx, add its path here too.
// IMPORTANT: when adding a new article to resourceArticles.js, add its
// /resources/:slug path below too — dynamic routes aren't auto-discovered.
const ROUTES = [
  '/',
  '/services',
  '/about',
  '/contact',
  '/company',
  '/why-us',
  '/team',
  '/careers',
  '/faq',
  '/resources',
  '/dental-analytics',
  '/veterinary-analytics',
  '/medical-practice-analytics',
  '/portfolio',
  '/portfolio/bi',
  '/portfolio/ai',
  '/portfolio/pipelines',
  '/portfolio/mobile',
  '/clients',
  '/testimonials',
  '/sitemap',
  '/case-studies',

  '/services/algorithmic-trading-analytics',
  '/services/brand-health-reputation-monitoring',
  '/services/carrier-performance-freight-cost-analytics',
  '/services/chapter-4-analysis',
  '/services/clinical-pathway-optimization',
  '/services/clinical-trial-analytics',
  '/services/credit-risk-scoring',
  '/services/curriculum-effectiveness-learning-analytics',
  '/services/customer-churn-lifetime-value',
  '/services/customer-journey-analytics',
  '/services/customer-loyalty-analytics',
  '/services/customer-purchase-analysis',
  '/services/customer-segmentation-profiling',
  '/services/dashboard-development',
  '/services/data-cleaning',
  '/services/data-visualization',
  '/services/demand-forecasting',
  '/services/demand-forecasting-inventory-planning',
  '/services/excel-decision-modeling',
  '/services/financial-planning-analysis',
  '/services/financial-statement-analysis',
  '/services/fleet-management-telematics',
  '/services/fraud-detection-prevention',
  '/services/healthcare-cost-utilization-analysis',
  '/services/healthcare-supply-chain-analytics',
  '/services/healthcare-workforce-staffing-analytics',
  '/services/insurance-claims-analytics',
  '/services/inventory-management-analytics',
  '/services/last-mile-delivery-analytics',
  '/services/market-basket-analysis',
  '/services/marketing-mix-modeling',
  '/services/market-sentiment-analysis',
  '/services/medical-imaging-radiology-analytics',
  '/services/operational-performance-analytics',
  '/services/patient-experience-satisfaction-analytics',
  '/services/population-health-analytics',
  '/services/portfolio-optimization-risk-management',
  '/services/pricing-analytics-optimization',
  '/services/pricing-optimization',
  '/services/product-recommendations',
  '/services/promotion-discount-performance',
  '/services/readmission-risk-prediction',
  '/services/regulatory-compliance-analytics',
  '/services/report-writing-support',
  '/services/research-data-analysis',
  '/services/research-methodology-consulting',
  '/services/revenue-operations-analytics',
  '/services/route-optimization-planning',
  '/services/sales-forecasting-demand-planning',
  '/services/sales-performance-dashboard',
  '/services/spss-data-analysis',
  '/services/staff-behavior-retention',
  '/services/statistical-consulting',
  '/services/store-performance-comparison',
  '/services/student-performance-analytics',
  '/services/supply-chain-visibility-tracking',
  '/services/survey-data-analysis',
  '/services/telehealth-remote-monitoring-analytics',
  '/services/top-selling-slow-moving-products',
  '/services/warehouse-optimization-inventory-management',
  '/services/workforce-hr-analytics',
];

// ─── Auto-discover Quarto articles ─────────────────────────────────
const QUARTO_ARTICLES_DIR = join(__dirname, 'src', 'data', 'quartoArticles');
if (existsSync(QUARTO_ARTICLES_DIR)) {
  const quartoSlugs = readdirSync(QUARTO_ARTICLES_DIR)
    .filter((f) => f.endsWith('.html'))
    .map((f) => f.replace(/\.html$/, ''));

  for (const slug of quartoSlugs) {
    const route = `/resources/${slug}`;
    if (!ROUTES.includes(route)) {
      ROUTES.push(route);
    }
  }
}

// ─── Exclude duplicate routes (301-redirected in vercel.json) ───
const EXCLUDED_ROUTES = new Set(["/services/demand-forecasting-inventory-planning","/services/pricing-analytics-optimization"]);
for (let i = ROUTES.length - 1; i >= 0; i--) {
  if (EXCLUDED_ROUTES.has(ROUTES[i])) ROUTES.splice(i, 1);
}

// HOME_LAST: prerendering '/' overwrites dist/index.html. Every later route would then
// load the homepage's rendered HTML (stale canonical/og/title) as its template.
{
  const i = ROUTES.indexOf('/');
  if (i !== -1) { ROUTES.splice(i, 1); ROUTES.push('/'); }
}

// SANITY_DISCOVERY: articles live in Sanity and are not auto-discovered, so fetch slugs at build time (node has no CORS)
async function discoverSanityRoutes() {
  try {
    const q = encodeURIComponent('*[_type=="article" && defined(slug.current)].slug.current');
    const res = await fetch('https://5q5grbf2.api.sanity.io/v2021-06-07/data/query/production?query=' + q);
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const { result } = await res.json();
    let added = 0;
    for (const slug of result || []) {
      const route = '/resources/' + slug;
      if (!ROUTES.includes(route)) { ROUTES.push(route); added++; }
    }
    const i = ROUTES.indexOf('/');
    if (i !== -1) { ROUTES.splice(i, 1); ROUTES.push('/'); }
    console.log('✓ Sanity: ' + (result || []).length + ' articles, ' + added + ' new routes added');
  } catch (e) {
    console.warn('  ! Sanity discovery failed: ' + e.message + ' (continuing with existing routes)');
  }
}

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

async function launchBrowser() {
  if (IS_VERCEL) {
    // Vercel build container: use serverless-compatible Chromium
    const puppeteer = (await import('puppeteer-core')).default;
    const chromium = (await import('@sparticuz/chromium')).default;

    return puppeteer.launch({
      args: [...chromium.args, '--disable-dev-shm-usage', '--disable-web-security', '--no-zygote', '--single-process'],
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
    });
  } else {
    // Local dev: use full puppeteer with its bundled Chrome
    const puppeteer = (await import('puppeteer')).default;

    return puppeteer.launch({
      executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || undefined,
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-web-security', '--disable-gpu', '--no-zygote', '--single-process'],
    });
  }
}

async function prerenderRoute(browser, route) {
  const page = await browser.newPage();
  const url = `${BASE_URL}${route}`;

  // Block analytics/tracking calls during prerendering — they either
  // don't exist in this environment or aren't needed for static HTML,
  // and a hanging/retrying request can block networkidle from ever firing.
  await page.setRequestInterception(true);
  page.on('request', (req) => {
    if (req.url().includes('/api/track-visit')) {
      req.abort();
    } else {
      req.continue();
    }
  });

  await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });

  // Wait for Helmet to replace the fallback title (except on home)
  if (route !== '/') {
    await page
      .waitForFunction((fb) => document.title && document.title !== fb, { timeout: 5000 }, FALLBACK_TITLE)
      .catch(() => console.warn(`  ! ${route}: title is still the fallback (no SEO metadata?)`));
  }
  await new Promise((r) => setTimeout(r, 300));

  // Force exactly one correct canonical + og:url, fix doubled brand suffix
  const canonical = route === '/' ? `${SITE_URL}/` : `${SITE_URL}${route}`;
  await page.evaluate((canonical, brand) => {
    document.querySelectorAll('link[rel="canonical"]').forEach((el) => el.remove());
    const link = document.createElement('link');
    link.rel = 'canonical';
    link.href = canonical;
    link.setAttribute('data-rh', 'true');
    document.head.appendChild(link);

    document.querySelectorAll('meta[property="og:url"]').forEach((el) => el.setAttribute('content', canonical));

    const suffix = ` | ${brand}`;
    while (document.title.endsWith(suffix + suffix)) {
      document.title = document.title.slice(0, -suffix.length);
    }
  }, canonical, BRAND);

  const finalPath = new URL(page.url()).pathname.replace(/\/+$/, '') || '/';
  if (finalPath !== route) {
    console.warn('  ! ' + route + ': redirected to ' + finalPath + ' - skipped (not a real page)');
    SKIPPED.add(route);
    await page.close();
    return;
  }
  const html = await page.content();
  if (html.includes('Something went wrong loading this page')) { /* ERRFALLBACK */
    console.warn('  ! ' + route + ': page rendered the error fallback - skipped');
    SKIPPED.add(route);
    await page.close();
    return;
  }
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


// ─── Sitemap generation ─────────────────────────────────────────────
// Generated from the SAME ROUTES array used for prerendering above --
// one source of truth, so sitemap.xml can never drift out of sync
// with the real, current set of pages the way the old hand-maintained
// public/sitemap.xml did.
function priorityFor(route) {
  if (route === '/') return { priority: '1.0', changefreq: 'weekly' };
  if (route === '/services' || route === '/resources') return { priority: '0.9', changefreq: 'weekly' };
  if (route.startsWith('/services/')) return { priority: '0.85', changefreq: 'monthly' };
  if (route.startsWith('/resources/')) return { priority: '0.6', changefreq: 'monthly' };
  return { priority: '0.7', changefreq: 'monthly' };
}

function generateSitemap(routes) {
  const today = new Date().toISOString().slice(0, 10);
  const urls = routes
    .map((route) => {
      const { priority, changefreq } = priorityFor(route);
      return `  <url><loc>${SITE_URL}${route}</loc><lastmod>${today}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  writeFileSync(join(DIST_DIR, 'sitemap.xml'), xml, 'utf-8');
  console.log(`✓ Generated sitemap.xml with ${routes.length} URLs (from the live ROUTES list, not a hand-maintained file)`);
}

async function run() {
  if (!existsSync(DIST_DIR)) {
    console.error('✗ dist/ folder not found. Run `vite build` first.');
    process.exit(1);
  }

  console.log(`Prerendering ${ROUTES.length} routes...\n`);

  await discoverSanityRoutes();
  const server = await startServer();
  const browser = await launchBrowser();

  try {
    // Run sequentially (not parallel) to keep memory usage low —
    // fine for ~30 pages, well within typical CI build limits.
    for (const route of ROUTES) {
      await prerenderRoute(browser, route);
    }
  } finally {
    await browser.close();
    server.close();
  }

  console.log('\n✓ Prerendering complete. All routes now have static HTML.');

  generateSitemap(ROUTES.filter((r) => !SKIPPED.has(r)));
}

run().catch((err) => {
  console.error('✗ Prerendering failed:', err);
  process.exit(1);
});