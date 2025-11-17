import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "About Us",
  description:
    "Learn about IMMOVABLES REALTY - your trusted partner for real estate investment in Ogun State. Expert advisory, market analytics, and portfolio management services.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <About />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
