import Script from "next/script";

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "IMMOVABLES REALTY",
    alternateName: "Immovables Realty",
    description:
      "Smart Real Estate Solutions: Invest, Buy, or Sell with Confidence. Your trusted partner for real estate investment in Ogun State.",
    url: "https://immovablesrealty.com",
    logo: "https://immovablesrealty.com/images/logo.png",
    image: "https://immovablesrealty.com/og-image.jpg",
    telephone: "+234-813-283-3083",
    email: "info@immovablesrealty.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "12, Obasanjo Way off Akin Olugbade, Ita Eko",
      addressLocality: "Abeokuta",
      addressRegion: "Ogun State",
      addressCountry: "NG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "7.1475",
      longitude: "3.3619",
    },
    areaServed: {
      "@type": "State",
      name: "Ogun State",
    },
    sameAs: [
      "https://www.facebook.com/immovablesrealty",
      "https://x.com/immovablesrealt",
      "https://www.instagram.com/immovables_realty",
      "https://www.linkedin.com/",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "18:00",
      },
    ],
    priceRange: "$$",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "IMMOVABLES REALTY",
    url: "https://immovablesrealty.com",
    description:
      "Smart Real Estate Solutions: Invest, Buy, or Sell with Confidence",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://immovablesrealty.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Real Estate Investment Advisory",
    provider: {
      "@type": "RealEstateAgent",
      name: "IMMOVABLES REALTY",
    },
    areaServed: {
      "@type": "State",
      name: "Ogun State",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Real Estate Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Investment Properties",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Market Analytics",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Expert Advisory",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Portfolio Management",
          },
        },
      ],
    },
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
    </>
  );
}
