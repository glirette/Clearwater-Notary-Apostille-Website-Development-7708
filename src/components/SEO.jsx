import React from 'react';
import {Helmet} from 'react-helmet-async';

const SEO=({title,description,keywords,canonicalUrl,schemaData})=> {
  const defaultTitle="Florida Apostille App | Foreign Signers Welcome | No SSN Required | Notary Geek Platform";
  const defaultDescription="Florida's premier apostille service powered by the Notary Geek platform. Foreign signers welcome - No Social Security Number required. Get your documents apostilled in just 2 business days statewide!";
  const defaultKeywords="Florida apostille app,statewide apostille service,Notary Geek platform,online notarization,document authentication,apostille services,2-day processing,foreign signers,no SSN required,LLC document services,business documents";
  const defaultUrl="https://floridaapostille.app";
  
  const pageTitle=title || defaultTitle;
  const pageDescription=description || defaultDescription;
  const pageKeywords=keywords || defaultKeywords;
  const pageUrl=canonicalUrl || defaultUrl;

  // Updated image for better Facebook preview
  const ogImage="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630&q=80";

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <link rel="canonical" href={pageUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Florida Apostille App - Document Authentication Services" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={pageUrl} />
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={pageDescription} />
      <meta property="twitter:image" content={ogImage} />
      <meta property="twitter:image:alt" content="Florida Apostille App - Document Authentication Services" />

      {/* Schema.org structured data */}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;