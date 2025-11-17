import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Properties from "@/components/Properties";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StructuredData from "@/components/StructuredData";

export default function Home() {
  return (
    <main className="min-h-screen">
      <StructuredData />
      <Navbar />
      <Hero />
      <About />
      <Properties />
      <WhyUs />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
