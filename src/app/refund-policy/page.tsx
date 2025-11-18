import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import RefundPolicy from "@/components/RefundPolicy";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Refund & Returns Policy | IMMOVABLES REALTY",
  description:
    "Refund & Returns Policy for IMMOVABLES REALTY. Understand refund conditions, eligibility criteria, non-development policy, and administrative charges for property purchases in Nigeria.",
  keywords:
    "refund policy, returns policy, property refund, real estate refund, IMMOVABLES REALTY, land purchase refund, Nigeria property refund",
  openGraph: {
    title: "Refund & Returns Policy | IMMOVABLES REALTY",
    description:
      "Transparent refund policy protecting both company and clients. Includes non-development clause and estate protection measures.",
    type: "website",
  },
};

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        title="Refund & Returns Policy"
        subtitle="Transparent Refund Conditions & Estate Protection Measures"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Refund Policy", href: "/refund-policy" },
        ]}
      />
      <RefundPolicy />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
