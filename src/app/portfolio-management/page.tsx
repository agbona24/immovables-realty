import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import PortfolioManagement from "@/components/PortfolioManagement";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Portfolio Management | IMMOVABLES REALTY",
  description:
    "Professional portfolio management services for real estate investors. Build, manage and scale portfolios that deliver predictable cashflow, appreciation and reduced risk.",
  keywords:
    "portfolio management, real estate portfolio, property investment management, cashflow, capital appreciation, Ogun State investment",
  openGraph: {
    title: "Portfolio Management | IMMOVABLES REALTY",
    description:
      "Turn property ownership into a high-performing investment strategy with professional portfolio management.",
    type: "website",
  },
};

export default function PortfolioManagementPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        title="Portfolio Management"
        subtitle="Build, Manage and Scale Real Estate Portfolios That Deliver Results"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/#services" },
          { name: "Portfolio Management", href: "/portfolio-management" },
        ]}
      />
      <PortfolioManagement />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
