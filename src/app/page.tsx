import HomePage from "@/components/HomePage";
import {
  getEstatesWithFallback,
  getTestimonialsWithFallback,
  getPropertiesWithFallback,
} from "@/sanity/lib/sanity-data";

export const metadata = {
  title: "IMMOVABLES REALTY | Premier Real Estate Investment in Ogun State",
  description:
    "Your trusted partner for smart real estate investment in Ogun State. We connect you with high-value properties that grow your portfolio.",
  keywords:
    "real estate, Ogun State, Abeokuta, property investment, land for sale, houses for sale, IMMOVABLES REALTY",
};

export const revalidate = 60; // Revalidate every 60 seconds

export default async function Home() {
  // Fetch data from Sanity (with fallbacks)
  const [estates, testimonials, properties] = await Promise.all([
    getEstatesWithFallback(),
    getTestimonialsWithFallback(),
    getPropertiesWithFallback(),
  ]);

  return (
    <HomePage
      estates={estates}
      testimonials={testimonials}
      properties={properties}
    />
  );
}
