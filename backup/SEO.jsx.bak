// src/components/SEO/SEO.jsx
//
// Shared SEO component. Every page imports this ONCE and passes
// page-specific title/description/path. It handles:
//   - <title> and meta description
//   - canonical tag (tells Google the one true URL for this page)
//   - Open Graph tags (Facebook/LinkedIn link previews)
//   - Twitter Card tags
//   - Organization + LocalBusiness Schema.org JSON-LD (all 5 real offices)
//
// USAGE in any page:
//   <SEO
//     title="Services | Scape Data Solutions"
//     description="AI, big data, and BI services that turn your data into revenue."
//     path="/services"
//   />

import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Scape Data Solutions';
const SITE_URL = 'https://www.scapedatasolutions.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/Images/site-images/og-default.jpg`;

// ─── Real offices (used in Schema.org structured data) ───────────
const OFFICES = [
  {
    name: 'Scape Data Solutions — US Office',
    streetAddress: '1024 Iron Point Road, Suite 200',
    addressLocality: 'Folsom',
    addressRegion: 'CA',
    postalCode: '95630',
    addressCountry: 'US',
    telephone: '+1-757-598-0582',
  },
  {
    name: 'Scape Data Solutions — Canada Office',
    streetAddress: '400 Centre Street South',
    addressLocality: 'Whitby',
    addressRegion: 'ON',
    postalCode: 'L1N 0G4',
    addressCountry: 'CA',
  },
  {
    name: 'Scape Data Solutions — Pakistan Office',
    streetAddress: '9th Floor, Tricon Corporate Centre, 73 Jail Road, Gulberg',
    addressLocality: 'Lahore',
    postalCode: '54000',
    addressCountry: 'PK',
  },
  {
    name: 'Scape Data Solutions — Nairobi Office',
    streetAddress: 'Global Trade Centre, 14th Floor, Westlands Road',
    addressLocality: 'Nairobi',
    addressCountry: 'KE',
    telephone: '+254-718-889-559',
  },
  {
    name: 'Scape Data Solutions — UK Office',
    streetAddress: '60 Cannon Street',
    addressLocality: 'London',
    postalCode: 'EC4N 6NP',
    addressCountry: 'GB',
    telephone: '+44-7454-744014',
  },
];

// ─── Organization-level Schema.org JSON-LD ────────────────────────
// This block stays IDENTICAL on every page — it describes the
// business itself, not the individual page.
// UPDATED: Aggressive SEO - added foundingDate, numberOfEmployees, and full sameAs
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/Images/site-images/logo.svg`,
  image: DEFAULT_OG_IMAGE,
  description:
    'Scape Data Solutions helps businesses make smarter decisions, grow faster, and reduce costs by turning data into actionable insights through AI, machine learning, big data engineering, and business intelligence.',
  email: 'info@scapedatasolutions.com',
  areaServed: ['US', 'CA', 'PK', 'KE', 'GB'],
  foundingDate: '2017', // Aggressive: adds age/trust signal
  numberOfEmployees: '11-50', // Aggressive: signals scale to Google
  sameAs: [
    // All verified official pages
    'https://www.linkedin.com/company/scape-data-solutions/',
    'https://www.facebook.com/profile.php?id=61591435187674',
    // Add the following only if accounts exist and are actively maintained:
    // 'https://twitter.com/scapedatasol',
    // 'https://www.youtube.com/@ScapeDataSolutions',
    // 'https://www.instagram.com/scapedatasolutions/',
    // 'https://github.com/scapedata',
  ],
};

// ─── One LocalBusiness entity PER real office ─────────────────────
// A single multi-address Organization is not eligible for local
// pack / "near me" results in any one market. Each real office needs
// its own LocalBusiness entity, linked back to the parent Organization
// via parentOrganization, to be independently discoverable in its region.
const localBusinessSchemas = OFFICES.map((office, i) => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#location-${i}`,
  name: office.name,
  url: SITE_URL,
  image: DEFAULT_OG_IMAGE,
  parentOrganization: { '@id': `${SITE_URL}/#organization` },
  address: {
    '@type': 'PostalAddress',
    streetAddress: office.streetAddress,
    addressLocality: office.addressLocality,
    ...(office.addressRegion ? { addressRegion: office.addressRegion } : {}),
    ...(office.postalCode ? { postalCode: office.postalCode } : {}),
    addressCountry: office.addressCountry,
  },
  ...(office.telephone ? { telephone: office.telephone } : {}),
}));

// ─── Website-level Schema.org JSON-LD (enables sitelinks search box) ──
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  publisher: { '@id': `${SITE_URL}/#organization` },
};


// Slugs containing these stay fully uppercase in breadcrumb labels
// instead of naive "first letter capitalized" (bi -> Bi, seo -> Seo, etc.)
const BREADCRUMB_ACRONYMS = new Set([
  'seo', 'bi', 'ai', 'ml', 'nlp', 'sql', 'etl', 'crm', 'api',
  'llm', 'mlops', 'saas', 'roi', 'kpi', 'it',
]);

const capitalizeSegmentWord = (w) => {
  const lower = w.toLowerCase();
  if (BREADCRUMB_ACRONYMS.has(lower)) return lower.toUpperCase();
  return w.charAt(0).toUpperCase() + w.slice(1);
};

const buildBreadcrumbSchema = (path) => {
  const segments = path.split('/').filter(Boolean);
  const itemListElement = [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    ...segments.map((seg, i) => ({
      '@type': 'ListItem',
      position: i + 2,
      name: seg.split('-').map(capitalizeSegmentWord).join(' '),
      item: `${SITE_URL}/${segments.slice(0, i + 1).join('/')}`,
    })),
  ];
  return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement };
};

/**
 * SEO component
 *
 * @param {string} title - Full page title, e.g. "Services | Scape Data Solutions"
 * @param {string} description - 1-2 sentence meta description (150-160 chars ideal)
 * @param {string} path - Page path starting with "/", e.g. "/services"
 * @param {string} [image] - Optional page-specific OG image URL. Falls back to default.
 * @param {object} [schema] - Optional extra Schema.org object specific to this page
 *                             (e.g. a Service or FAQPage schema). Merged in addition
 *                             to the global Organization + WebSite schema.
 * @param {boolean} [noindex] - Set true only for pages that should NOT be indexed
 */
const SEO = ({ title, description, path = '/', image, schema, noindex = false }) => {
  const canonicalUrl = `${SITE_URL}${path}`;
  const ogImage = image || DEFAULT_OG_IMAGE;
  const breadcrumbSchema = buildBreadcrumbSchema(path);

  return (
    <Helmet>
      {/* ── Basic ── */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* ── Open Graph (Facebook, LinkedIn, WhatsApp previews) ── */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />

      {/* ── Twitter Card ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* ── Schema.org JSON-LD: Organization + per-office LocalBusiness + Website (every page) ── */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      {localBusinessSchemas.map((loc, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(loc)}
        </script>
      ))}
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>

      {path !== '/' && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}

      {/* ── Schema.org JSON-LD: page-specific (optional) ── */}
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
};

export default SEO;