// src/utils/organizationSchema.js
//
// Single Organization node, referenced by @id from every page's Service
// schema (see serviceSchema.js: provider: {'@id': SITE_URL + '/#organization'}).
// Without this node existing somewhere, that reference is dangling and
// Google can't resolve the entity graph. Rendered site-wide by SEO.jsx.

const SITE_URL = 'https://www.scapedatasolutions.com';

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'Scape Technologies',
    url: SITE_URL,
    logo: `${SITE_URL}/Images/site-images/logo-image.png`,
    email: 'info@scapedatasolutions.com',
    sameAs: [
      'https://www.facebook.com/profile.php?id=61591435187674',
      'https://www.linkedin.com/company/scape-data-solutions/',
    ],
  };
}
