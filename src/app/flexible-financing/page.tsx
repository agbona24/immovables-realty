import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import FlexibleFinancing from "@/components/FlexibleFinancing";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Flexible Financing | IMMOVABLES REALTY",
  description:
    "Own land with ease and build wealth with strategy. Flexible payment plans, cashflow protection, and resale support. Start with low deposit, spread payments conveniently.",
  keywords:
    "flexible financing, real estate payment plan, land banking, property investment, Ogun State, cashflow protection, property resale",
  openGraph: {
    title: "Flexible Financing | IMMOVABLES REALTY",
    description:
      "Stay liquid while you invest. Flexible payment plans with cashflow protection and resale support.",
    type: "website",
  },
};

export default function FlexibleFinancingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        title="Flexible Financing"
        subtitle="Own Property Without Trapping Your Capital — Build Wealth with Strategy"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Flexible Financing", href: "/flexible-financing" },
        ]}
      />
      <FlexibleFinancing />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
