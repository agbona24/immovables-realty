import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PropertyDetailClient from "@/components/PropertyDetailClient";
import { getPropertyByIdWithFallback, getPropertiesWithFallback } from "@/../sanity/lib/sanity-data";
import type { Metadata } from "next";

interface PageProps {
  params: { id: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const property = await getPropertyByIdWithFallback(params.id);
  
  if (!property) {
    return {
      title: "Property Not Found | IMMOVABLES REALTY",
    };
  }

  return {
    title: `${property.title} | IMMOVABLES REALTY`,
    description: property.description,
  };
}

export default async function PropertyDetailPage({ params }: PageProps) {
  const property = await getPropertyByIdWithFallback(params.id);

  if (!property) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-brand-blue mb-4">
              Property Not Found
            </h1>
            <Link
              href="/properties"
              className="text-brand-orange hover:underline"
            >
              Back to Properties
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // Get related properties (same type, excluding current)
  const allProperties = await getPropertiesWithFallback();
  const relatedProperties = allProperties
    .filter((p) => p.type === property.type && p.id !== property.id)
    .slice(0, 3);

  return (
    <>
      <Navbar />
      <PropertyDetailClient property={property} relatedProperties={relatedProperties} />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
