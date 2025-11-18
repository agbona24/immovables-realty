import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ExpertAdvisory from "@/components/ExpertAdvisory";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Expert Advisory | IMMOVABLES REALTY",
  description:
    "Professional land acquisition advisory and due diligence services. Avoid fraud, verify titles, and buy property with confidence in Ogun State.",
  keywords:
    "land acquisition, property advisory, title verification, due diligence, real estate expert, Ogun State, land fraud prevention",
  openGraph: {
    title: "Expert Advisory | IMMOVABLES REALTY",
    description:
      "Buy land with confidence. Expert guidance for secure property acquisition in Nigeria.",
    type: "website",
  },
};

export default function ExpertAdvisoryPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        title="Expert Advisory"
        subtitle="Navigate Land Acquisition with Confidence — Avoid Fraud, Secure Your Investment"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/#services" },
          { name: "Expert Advisory", href: "/expert-advisory" },
        ]}
      />
      <ExpertAdvisory />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
