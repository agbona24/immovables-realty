import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ScheduleInspection from "@/components/ScheduleInspection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Schedule Inspection | IMMOVABLES REALTY",
  description:
    "Book a property inspection visit with IMMOVABLES REALTY. See our properties in person and make an informed investment decision with expert guidance.",
  keywords:
    "property inspection, schedule visit, property viewing, real estate inspection, Ogun State properties",
  openGraph: {
    title: "Schedule Inspection | IMMOVABLES REALTY",
    description:
      "Book your property inspection today. Visit our properties with expert guidance and no obligation.",
    type: "website",
  },
};

export default function ScheduleInspectionPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        title="Schedule Property Inspection"
        subtitle="Visit Our Properties in Person — Expert Guided Tours, No Obligation"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Schedule Inspection", href: "/schedule-inspection" },
        ]}
      />
      <ScheduleInspection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
