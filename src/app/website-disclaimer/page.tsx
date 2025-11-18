import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import WebsiteDisclaimer from "@/components/WebsiteDisclaimer";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Website Disclaimer | IMMOVABLES REALTY",
  description:
    "Website Disclaimer for IMMOVABLES REALTY. Important information about cyber safety, domain protection, third-party links, and user responsibilities. Official domain: www.immovablesrealty.com",
  keywords:
    "website disclaimer, cyber safety, domain protection, IMMOVABLES REALTY, official website, fraud protection, phishing warning, Nigeria real estate",
  openGraph: {
    title: "Website Disclaimer | IMMOVABLES REALTY",
    description:
      "Important cyber safety information and domain protection. Only official domain: www.immovablesrealty.com",
    type: "website",
  },
};

export default function WebsiteDisclaimerPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        title="Website Disclaimer"
        subtitle="Cyber Safety, Domain Protection & User Responsibilities"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Website Disclaimer", href: "/website-disclaimer" },
        ]}
      />
      <WebsiteDisclaimer />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
