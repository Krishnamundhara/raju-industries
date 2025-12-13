import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  pathname?: string;
}

/**
 * SEO component for optimizing page metadata
 * Simple, effective implementation with JSON-LD structured data
 */
const SEO: React.FC<SEOProps> = ({
  title = 'Raju Industries - Yarn & Fabric Trading',
  description = "Leading yarn broker since 1993. Premium cotton, viscose & texturized yarns. Serving textile industry across Maharashtra, Gujarat, MP & Tamil Nadu.",
  keywords = "yarn supplier, cotton yarn, viscose yarn, polyester yarn, textile broker, Bhiwandi, Maharashtra",
  ogImage = "/images/hero/yarn-storage.jpg",
  pathname
}) => {
  // Use your actual domain when available
  const siteUrl = "https://rajuindustries.me";
  const canonical = pathname ? `${siteUrl}${pathname}` : siteUrl;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Social Media */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
      
      {/* Structured Data - Local Business */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Raju Industries",
            "image": "${siteUrl}/images/CompanyLogo/raju_c.jpg",
            "url": "${siteUrl}",
            "telephone": ["+919309531311", "+919130977555"],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "67 Hassan bagh, opp hathi sizing",
              "addressLocality": "Bhiwandi",
              "addressRegion": "Maharashtra",
              "addressCountry": "IN"
            }
          }
        `}
      </script>
    </Helmet>
  );
};

export default SEO;