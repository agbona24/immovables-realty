import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import WhyUs from "@/components/WhyUs";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Why Choose Us | IMMOVABLES REALTY",
  description:
    "Discover why IMMOVABLES REALTY is the trusted choice for real estate investment in Ogun State. Expert guidance, verified properties, and proven track record.",
};

export default function WhyUsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        title="Why Choose Us"
        subtitle="Experience Excellence in Real Estate Investment with Proven Results"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Why Choose Us", href: "/why-us" },
        ]}
      />
      <WhyUs />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
