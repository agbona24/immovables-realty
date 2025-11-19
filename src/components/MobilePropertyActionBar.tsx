"use client";

import React from "react";
import { Heart, GitCompare, Share2, Calendar, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useFavorites } from "@/hooks/useFavorites";
import { useComparison } from "@/hooks/useComparison";

interface MobilePropertyActionBarProps {
  propertyId: string;
  propertyTitle: string;
  propertyPrice: string;
  whatsappUrl: string;
  phoneNumber: string;
}

export default function MobilePropertyActionBar({
  propertyId,
  propertyTitle,
  propertyPrice,
  whatsappUrl,
  phoneNumber,
}: MobilePropertyActionBarProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const { isInComparison, toggleComparison, canAddMore } = useComparison();

  const favorite = isFavorite(propertyId);
  const inComparison = isInComparison(propertyId);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: propertyTitle,
          text: `Check out this property: ${propertyTitle} - ${propertyPrice}`,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Share cancelled");
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  const handleCompare = () => {
    if (!inComparison && !canAddMore) {
      alert("You can only compare up to 3 properties at a time. Remove one to add another.");
      return;
    }
    toggleComparison(propertyId);
  };

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t-2 border-gray-200 shadow-2xl"
    >
      {/* Top Actions Row */}
      <div className="flex items-center justify-around px-4 py-3 border-b border-gray-100">
        <button
          onClick={() => toggleFavorite(propertyId)}
          className="flex flex-col items-center gap-1 min-w-[60px]"
        >
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
              favorite
                ? "bg-red-500 text-white"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            <Heart
              size={20}
              className={favorite ? "fill-current" : ""}
            />
          </div>
          <span className="text-xs font-medium text-gray-600">
            {favorite ? "Saved" : "Save"}
          </span>
        </button>

        <button
          onClick={handleCompare}
          className="flex flex-col items-center gap-1 min-w-[60px]"
        >
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
              inComparison
                ? "bg-brand-orange text-white"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            <GitCompare size={20} />
          </div>
          <span className="text-xs font-medium text-gray-600">
            {inComparison ? "Added" : "Compare"}
          </span>
        </button>

        <button
          onClick={handleShare}
          className="flex flex-col items-center gap-1 min-w-[60px]"
        >
          <div className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center">
            <Share2 size={20} />
          </div>
          <span className="text-xs font-medium text-gray-600">Share</span>
        </button>

        <a
          href="/schedule-inspection"
          className="flex flex-col items-center gap-1 min-w-[60px]"
        >
          <div className="w-10 h-10 rounded-full bg-blue-100 text-brand-blue flex items-center justify-center">
            <Calendar size={20} />
          </div>
          <span className="text-xs font-medium text-gray-600">Tour</span>
        </a>
      </div>

      {/* Bottom CTA Row */}
      <div className="flex items-center gap-3 px-4 py-3">
        <a
          href={`tel:${phoneNumber}`}
          className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold text-center hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
        >
          <Phone size={18} />
          Call
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[2] bg-gradient-to-r from-brand-blue to-blue-800 text-white py-3 rounded-xl font-semibold text-center hover:from-brand-orange hover:to-orange-600 transition-all shadow-lg"
        >
          WhatsApp Now
        </a>
      </div>
    </motion.div>
  );
}
