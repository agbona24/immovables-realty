import PropertyMapView from "@/components/PropertyMapView";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ComparisonBar from "@/components/ComparisonBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Property Map | Immovables Realty",
  description: "View all our properties on an interactive map. Find properties near you.",
};

export default function MapPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-20">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-montserrat font-bold text-brand-blue mb-2">
              Property Map View
            </h1>
            <p className="text-gray-600">
              Explore all our properties on an interactive map
            </p>
          </div>
          <PropertyMapView showList={true} />
        </div>
      </main>
      <ComparisonBar />
      <Footer />
    </>
  );
}
