import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Downloads from "@/components/Downloads";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Downloads & Resources | IMMOVABLES REALTY",
  description:
    "Download investment prospectus, property guides, and real estate resources from IMMOVABLES REALTY. Access private partner and board participation documents.",
  keywords:
    "investment prospectus, real estate guide, property documents, board participation, private partner, Ogun State investment",
  openGraph: {
    title: "Downloads & Resources | IMMOVABLES REALTY",
    description:
      "Access comprehensive investment guides and prospectus documents for smart real estate investing.",
    type: "website",
  },
};

export default function DownloadsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        title="Resources & Downloads"
        subtitle="Access Comprehensive Investment Guides, Prospectus Documents & Property Information"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Downloads", href: "/downloads" },
        ]}
      />
      <Downloads />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
