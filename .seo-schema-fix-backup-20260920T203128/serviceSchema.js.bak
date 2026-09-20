const SITE_URL = 'https://www.scapedatasolutions.com';

export function buildServiceSchema({ name, description, path, serviceType = 'Data Analytics' }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    serviceType,
    url: `${SITE_URL}${path}`,
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: ['US', 'CA', 'PK', 'KE'],
  };
}
