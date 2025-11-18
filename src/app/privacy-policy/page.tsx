import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Privacy Policy | IMMOVABLES REALTY",
  description:
    "Privacy Policy for IMMOVABLES REALTY. Learn how we collect, use, protect, and manage your personal data in compliance with Nigeria Data Protection Act (NDPA) and NDPR.",
  keywords:
    "privacy policy, data protection, NDPA, NDPR, personal data, IMMOVABLES REALTY, Nigeria data protection",
  openGraph: {
    title: "Privacy Policy | IMMOVABLES REALTY",
    description:
      "Our commitment to protecting your personal data and privacy rights.",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        title="Privacy Policy"
        subtitle="Your Privacy Rights & How We Protect Your Data"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Privacy Policy", href: "/privacy-policy" },
        ]}
      />
      <PrivacyPolicy />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
