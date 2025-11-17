import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with IMMOVABLES REALTY. Visit our office in Abeokuta, call us at +234 813 283 3083, or send us a message. We're here to help with your real estate investment needs.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
