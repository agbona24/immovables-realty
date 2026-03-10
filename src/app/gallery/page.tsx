import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getGalleryImagesWithFallback } from "@/sanity/lib/sanity-data";

export const metadata = {
  title: "Gallery | IMMOVABLES REALTY",
  description:
    "Explore our portfolio of properties, office space, and the vibrant communities we serve. View photos of investment opportunities and completed projects in Ogun State.",
  keywords:
    "real estate gallery, property photos, Abeokuta properties, investment portfolio, IMMOVABLES REALTY gallery",
  openGraph: {
    title: "Gallery | IMMOVABLES REALTY",
    description:
      "View our portfolio of investment properties and completed projects",
    type: "website",
  },
};

export const revalidate = 60;

export default async function GalleryPage() {
  const images = await getGalleryImagesWithFallback();

  // Transform images to Gallery component format
  const formattedImages = images.length > 0 ? images.map((img, index) => ({
    id: img.id || index + 1,
    src: img.src,
    alt: img.alt || img.title,
    category: img.category,
    title: img.title,
  })) : undefined; // Pass undefined to use fallback

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        title="Gallery"
        subtitle="A Visual Journey Through Our Properties and Success Stories"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Gallery", href: "/gallery" },
        ]}
      />
      <Gallery images={formattedImages} />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
