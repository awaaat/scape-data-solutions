import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

/**
 * SEO component – ensures exactly one title, one description, one canonical,
 * and unique OG tags for every page.
 */
const SEO = ({
  title,
  description,
  keywords,
  image,
  article = false,
}) => {
  const location = useLocation();
  const url = `https://www.scapedatasolutions.com${location.pathname}`;

  const defaultTitle = 'Scape Data Solutions | AI-Powered Data Analytics & Business Intelligence';
  const defaultDescription = 'Expert data analytics, BI dashboards, AI/ML solutions. We turn your data into revenue.';
  const defaultImage = '/Images/site-images/og-default.jpg';

  const finalTitle = title ? `${title} | Scape Data Solutions` : defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalImage = image || defaultImage;
  const finalKeywords = keywords || 'data analytics, business intelligence, AI, machine learning';

  const imageUrl = finalImage.startsWith('http') ? finalImage : `https://www.scapedatasolutions.com${finalImage}`;

  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:site_name" content="Scape Data Solutions" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={imageUrl} />

      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
    </Helmet>
  );
};

export default SEO;
