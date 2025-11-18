import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import InvestmentOpportunity from "@/components/InvestmentOpportunity";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Investment Opportunity - US$3M Capital Raise | IMMOVABLES REALTY",
  description:
    "Invest in Immovables Realty's landmark US$3 million development opportunity in Ogun State. Mountain resort, residential housing, and integrated agriculture. Secure, land-backed investment with multiple exit pathways.",
  keywords:
    "real estate investment Nigeria, Ogun State investment, mountain resort development, agricultural investment, diaspora investment opportunity, SPV investment, land-backed investment, Abeokuta real estate",
  openGraph: {
    title: "US$3M Investment Opportunity | IMMOVABLES REALTY",
    description:
      "Transformative mixed-use development combining mountain resort, residential housing, and integrated agriculture in Ogun State, Nigeria.",
    type: "website",
  },
};

export default function InvestmentOpportunityPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        title="Investment Opportunity"
        subtitle="US$3,000,000 Strategic Capital Raise — Mountain Resort, Residential Housing & Integrated Agriculture"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Investment Opportunity", href: "/investment-opportunity" },
        ]}
      />
      <InvestmentOpportunity />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
