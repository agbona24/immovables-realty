import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import WuraGardenEstateClient from "@/components/WuraGardenEstateClient";
import { getEstateByIdWithFallback } from "@/../sanity/lib/sanity-data";

export const metadata = {
  title: "Wura Garden Estate | IMMOVABLES REALTY",
  description: "A Serene, Secure & Fast-Developing Residential Estate. Beautifully planned residential estate created for comfort, security, and long-term investment value.",
};

export default async function WuraGardenEstatePage() {
  const estate = await getEstateByIdWithFallback('wura-garden-estate');

  if (!estate) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <WuraGardenEstateClient estate={estate} />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
