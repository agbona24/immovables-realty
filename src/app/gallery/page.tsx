import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

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

export default function GalleryPage() {
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
      <Gallery />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
