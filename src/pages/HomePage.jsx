import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Services from '../components/Services';
import TransparencyDisclosure from '../components/TransparencyDisclosure';
import ComparisonTable from '../components/ComparisonTable';
import Process from '../components/Process';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';
import FloridaCities from '../components/FloridaCities';
import Platform from '../components/Platform';
import TrustBadges from '../components/TrustBadges';
import LegalCompliance from '../components/LegalCompliance';

const HomePage = () => {
  // Schema.org structured data
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Florida Apostille Services - Powered by Notary Geek",
    "description": "Learn about Florida Apostille App's statewide services powered by the Florida-approved Notary Geek platform with efficient processing",
    "thumbnailUrl": "https://i.ytimg.com/vi/zAj1vU1QOj8/hqdefault.jpg",
    "uploadDate": "2023-06-15",
    "contentUrl": "https://www.youtube.com/watch?v=zAj1vU1QOj8",
    "embedUrl": "https://www.youtube.com/embed/zAj1vU1QOj8"
  };

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Florida Apostille App",
    "description": "Private intermediary service for Florida apostille processing. NOT affiliated with government. Professional service with 2-day processing target.",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "FL",
      "addressCountry": "US"
    },
    "url": "https://floridaapostille.app",
    "areaServed": {
      "@type": "State",
      "name": "Florida"
    },
    "serviceType": [
      "Apostille Intermediary Services",
      "Online Notarization",
      "Document Authentication",
      "Foreign Signer Services"
    ],
    "provider": {
      "@type": "Organization",
      "name": "Notary Geek",
      "description": "Florida-approved remote online notary platform"
    },
    "slogan": "Professional intermediary service • Foreign signers welcome • No SSN required",
    "disclaimer": "Private service company. Not affiliated with Florida Secretary of State. Government apostilles available directly for $10 at dos.myflorida.com"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Are you a government agency?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, we are NOT a government agency. We are a private intermediary service company. You can get apostilles directly from the Florida Secretary of State for $10 at dos.myflorida.com. We provide comprehensive service including online notarization, document preparation, expedited processing, and worldwide shipping."
        }
      },
      {
        "@type": "Question",
        "name": "How long does apostille processing take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We target 2-day processing through our expedited service. Direct government processing typically takes 5-10 business days. Our service includes hand-carrying documents to the Secretary of State office."
        }
      },
      {
        "@type": "Question",
        "name": "What's the difference between your service and going directly to the government?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Government: $10 per document, 5-10 days, you handle everything. Our service: $230-$300, 2-day target, includes online notarization, document handling, expedited processing, and worldwide shipping. We also serve foreign signers and process multi-state documents."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a Social Security Number to use your services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Our platform welcomes foreign signers and international clients. You can complete your online notarization without a US Social Security Number. We accept passports for signers overseas."
        }
      }
    ]
  };

  return (
    <div className="pt-16">
      <Helmet>
        <title>Florida Apostille App | Private Intermediary Service | Foreign Signers Welcome | NOT Government</title>
        <meta name="description" content="Private intermediary apostille service (NOT government). Florida Secretary of State charges $10 direct. We provide comprehensive service: online notarization, expedited processing, worldwide shipping. Foreign signers welcome." />
        <meta name="keywords" content="Florida apostille intermediary, private apostille service, NOT government agency, apostille service comparison, foreign signers, no SSN required, Notary Geek platform" />
        <link rel="canonical" href="https://floridaapostille.app" />
        
        {/* Updated Open Graph / Facebook tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://floridaapostille.app/" />
        <meta property="og:title" content="Florida Apostille App | Private Service | NOT Government Agency" />
        <meta property="og:description" content="Private intermediary apostille service (NOT government). Florida Secretary of State charges $10 direct. We provide comprehensive service with 2-day processing target." />
        <meta property="og:image" content="https://floridaapostille.app/og-image.jpg" />
        
        {/* Updated Twitter tags */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://floridaapostille.app/" />
        <meta property="twitter:title" content="Florida Apostille App | Private Service | NOT Government Agency" />
        <meta property="twitter:description" content="Private intermediary apostille service (NOT government). Florida Secretary of State charges $10 direct. We provide comprehensive service with 2-day processing target." />
        <meta property="twitter:image" content="https://floridaapostille.app/og-image.jpg" />
        
        {/* TrustIndex Script in Head */}
        <script defer async src='https://cdn.trustindex.io/loader.js?2ae73d920e2d9601337691991a4'></script>
        
        <script type="application/ld+json">
          {JSON.stringify(businessSchema)}
        </script>
        
        <script type="application/ld+json">
          {JSON.stringify(videoSchema)}
        </script>
        
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <Hero />
      <TransparencyDisclosure />
      <Services />
      <ComparisonTable />
      <Process />
      <TrustBadges />
      <Platform />
      <Pricing />
      <LegalCompliance />
      <FloridaCities />
      <Contact />
    </div>
  );
};

export default HomePage;