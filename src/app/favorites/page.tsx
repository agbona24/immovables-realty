import EnhancedFavoritesView from "@/components/EnhancedFavoritesView";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ComparisonBar from "@/components/ComparisonBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Favorites | Immovables Realty",
  description: "View your saved favorite properties. Browse and compare properties you're interested in.",
};

export default function FavoritesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 pt-24 pb-20">
        <EnhancedFavoritesView />
      </main>
      <ComparisonBar />
      <Footer />
    </>
  );
}
