import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Contact Us | IMMOVABLES REALTY",
  description:
    "Get in touch with IMMOVABLES REALTY. Visit our office in Abeokuta, call us at +234 813 283 3083, or send us a message. We're here to help with your real estate investment needs.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        title="Contact Us"
        subtitle="Let's Start Your Real Estate Investment Journey Together"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
      />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
