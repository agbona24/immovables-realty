import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UnitConverter from "@/components/UnitConverter";
import MortgageCalculator from "@/components/MortgageCalculator";
import CostBreakdownTool from "@/components/CostBreakdownTool";
import PropertyDocumentChecklist from "@/components/PropertyDocumentChecklist";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Property Tools & Calculators | Immovables Realty",
  description:
    "Use our property tools and calculators. Convert area units, calculate mortgage payments, and make informed property decisions.",
};

export default function ToolsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 pt-24 pb-20">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-brand-blue dark:text-white mb-4">
              Property Tools & Calculators
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Make informed property decisions with our suite of professional tools
              and calculators
            </p>
          </div>

          {/* Tools Grid */}
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Unit Converter */}
            <div id="unit-converter">
              <UnitConverter />
            </div>

            {/* Cost Breakdown Tool */}
            <div id="cost-breakdown">
              <CostBreakdownTool />
            </div>

            {/* Mortgage Calculator */}
            <div id="mortgage-calculator">
              <MortgageCalculator />
            </div>

            {/* Property Document Checklist */}
            <div id="document-checklist">
              <PropertyDocumentChecklist />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
