import { Property } from "@/data/properties";
import Head from "next/head";

interface PropertySEOProps {
  property: Property;
  url: string;
}

export default function PropertySEO({ property, url }: PropertySEOProps) {
  const title = `${property.title} - ${property.price} | Immovables Realty`;
  const description = property.description.substring(0, 160);
  const imageUrl = property.image.startsWith("http")
    ? property.image
    : `https://immovables-realty.com${property.image}`;

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={`${property.type}, ${property.location}, real estate, property for sale, ${property.details.bedrooms ? `${property.details.bedrooms} bedroom` : ''}, Ogun State, Nigeria`} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="Immovables Realty" />
      <meta property="og:locale" content="en_NG" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="Immovables Realty" />
      <link rel="canonical" href={url} />
    </Head>
  );
}
