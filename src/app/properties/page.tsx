import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Properties from "@/components/Properties";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Properties | IMMOVABLES REALTY",
  description:
    "Explore our curated selection of investment properties in Ogun State. From prime estates to income-generating properties and land for development.",
};

export default function PropertiesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        title="Our Properties"
        subtitle="Discover Prime Investment Opportunities Across Ogun State"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Properties", href: "/properties" },
        ]}
      />
      <Properties />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
