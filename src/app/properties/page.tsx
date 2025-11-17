import Navbar from "@/components/Navbar";
import Properties from "@/components/Properties";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Properties",
  description:
    "Explore our curated selection of investment properties in Ogun State. From prime estates to income-generating properties and land for development.",
};

export default function PropertiesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Properties />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
