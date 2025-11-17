import Navbar from "@/components/Navbar";
import WhyUs from "@/components/WhyUs";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Why Choose Us",
  description:
    "Discover why IMMOVABLES REALTY is the trusted choice for real estate investment in Ogun State. Expert guidance, verified properties, and proven track record.",
};

export default function WhyUsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <WhyUs />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
