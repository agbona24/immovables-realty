import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import MarketAnalytics from "@/components/MarketAnalytics";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Market Analytics | IMMOVABLES REALTY",
  description:
    "Data-driven real estate market insights for Ogun State. Property valuations, trend analysis, investment forecasts, and comprehensive market reports.",
  keywords:
    "market analytics, property valuation, real estate trends, Ogun State market, investment analysis, market research",
  openGraph: {
    title: "Market Analytics | IMMOVABLES REALTY",
    description:
      "Invest with data-driven insights. Comprehensive market intelligence for informed real estate decisions.",
    type: "website",
  },
};

export default function MarketAnalyticsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        title="Market Analytics"
        subtitle="Make Informed Decisions with Comprehensive Real Estate Market Intelligence"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/#services" },
          { name: "Market Analytics", href: "/market-analytics" },
        ]}
      />
      <MarketAnalytics />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
