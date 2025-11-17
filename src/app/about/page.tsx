import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import About from "@/components/About";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "About Us | IMMOVABLES REALTY",
  description:
    "Learn about IMMOVABLES REALTY - your trusted partner for real estate investment in Ogun State. Expert advisory, market analytics, and portfolio management services.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        title="About Us"
        subtitle="Your Trusted Partner in Real Estate Investment and Property Development"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "About Us", href: "/about" },
        ]}
      />
      <About />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
