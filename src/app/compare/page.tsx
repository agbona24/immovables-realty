import PropertyComparison from "@/components/PropertyComparison";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compare Properties | Immovables Realty",
  description: "Compare up to 3 properties side-by-side to make an informed decision.",
};

export default function ComparePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-20">
        <PropertyComparison />
      </main>
      <Footer />
    </>
  );
}
