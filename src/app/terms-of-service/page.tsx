import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import TermsOfService from "@/components/TermsOfService";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Terms of Service | IMMOVABLES REALTY",
  description:
    "Terms of Service for IMMOVABLES REALTY. Understand the terms governing property transactions, documentation policies, payment terms, and client rights in Nigeria.",
  keywords:
    "terms of service, property terms, real estate terms, IMMOVABLES REALTY, Nigeria real estate, property documentation, land purchase terms",
  openGraph: {
    title: "Terms of Service | IMMOVABLES REALTY",
    description:
      "Legal terms governing all transactions and engagements with IMMOVABLES REALTY.",
    type: "website",
  },
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        title="Terms of Service"
        subtitle="Legal Terms Governing All Transactions & Engagements"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Terms of Service", href: "/terms-of-service" },
        ]}
      />
      <TermsOfService />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
