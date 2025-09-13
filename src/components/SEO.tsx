import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  ogImage?: string;
  pathname?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Raju Industries - Premier Yarn & Fabric Broker in India',
  description = "Raju Industries - Trusted broker of yarn & fabrics. Excellent service in cotton, viscose, texturized yarns. Headquarters in Bhiwandi, Maharashtra, with presence across Central India (Bhrahanpur, Madhya Pradesh), Western India (Surat, Gujarat), and Southern India (Erode, Tamil Nadu).",
  keywords = "Raju Industries, yarn broker, fabric dealer, cotton yarn, viscose yarn, texturized yarn, textile broker, Bhiwandi, Maharashtra, Bhrahanpur, Madhya Pradesh, Surat, Gujarat, Erode, Tamil Nadu, India textile market",
  author = "Raju Industries",
  ogImage = "/images/CompanyLogo/raju_c.jpg",
  pathname
}) => {
  const siteUrl = "https://rajuindustries.com";
  const canonical = pathname ? `${siteUrl}${pathname}` : siteUrl;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
    </Helmet>
  );
};

export default SEO;