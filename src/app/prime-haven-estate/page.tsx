import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PrimeHavenEstateClient from "@/components/PrimeHavenEstateClient";
import { getEstateByIdWithFallback } from "@/../sanity/lib/sanity-data";

export const metadata = {
  title: "Prime Haven Grove Estate | IMMOVABLES REALTY",
  description: "A Premium, Secure & Fast-Appreciating Estate in Abeokuta. Modern residential estate offering comfort, security, and profitable investment.",
};

export default async function PrimeHavenEstatePage() {
  const estate = await getEstateByIdWithFallback('prime-haven-grove-estate');

  if (!estate) {
    notFound();
  }
  if (!estate) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <PrimeHavenEstateClient estate={estate} />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
