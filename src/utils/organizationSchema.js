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
    name: 'Scape Data Solutions',
    url: SITE_URL,
    logo: `${SITE_URL}/Images/site-images/logo-image.png`,
    email: 'info@scapedatasolutions.com',
    sameAs: [
      'https://www.facebook.com/profile.php?id=61591435187674',
      'https://www.linkedin.com/company/scape-data-solutions/',
    ],
    contactPoint: [
      { '@type': 'ContactPoint', telephone: '+1-757-598-0582', contactType: 'sales', areaServed: 'US' },
      { '@type': 'ContactPoint', telephone: '+44-7454-744014', contactType: 'sales', areaServed: 'GB' },
      { '@type': 'ContactPoint', telephone: '+254-718-889-559', contactType: 'sales', areaServed: 'KE' },
    ],
    location: [
      {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '1024 Iron Point Road, Suite 200',
          addressLocality: 'Folsom',
          addressRegion: 'CA',
          postalCode: '95630',
          addressCountry: 'US',
        },
      },
      {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '60 Cannon Street',
          addressLocality: 'London',
          postalCode: 'EC4N 6NP',
          addressCountry: 'GB',
        },
      },
      {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '400 Centre Street South',
          addressLocality: 'Whitby',
          addressRegion: 'ON',
          postalCode: 'L1N 0G4',
          addressCountry: 'CA',
        },
      },
      {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '9th Floor, Tricon Corporate Centre, 73 Jail Road, Gulberg',
          addressLocality: 'Lahore',
          postalCode: '54000',
          addressCountry: 'PK',
        },
      },
      {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Global Trade Centre, 14th Floor, Westlands Road',
          addressLocality: 'Nairobi',
          addressCountry: 'KE',
        },
      },
    ],
  };
}
