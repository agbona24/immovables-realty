"use client";

import React from "react";
import { GitCompare } from "lucide-react";
import { useComparison } from "@/hooks/useComparison";

interface CompareButtonProps {
  propertyId: string;
  className?: string;
  variant?: "icon" | "button";
}

export default function CompareButton({
  propertyId,
  className = "",
  variant = "button",
}: CompareButtonProps) {
  const { isInComparison, toggleComparison, canAddMore, isLoaded } = useComparison();
  const inComparison = isInComparison(propertyId);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!inComparison && !canAddMore) {
      alert("You can only compare up to 3 properties at a time. Remove one to add another.");
      return;
    }

    toggleComparison(propertyId);
  };

  if (!isLoaded) {
    return null;
  }

  if (variant === "icon") {
    return (
      <button
        onClick={handleClick}
        className={`w-10 h-10 flex items-center justify-center rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 ${
          inComparison
            ? "bg-brand-orange text-white shadow-lg"
            : "bg-white/90 text-gray-600 hover:bg-white"
        } ${className}`}
        aria-label={inComparison ? "Remove from comparison" : "Add to comparison"}
        title={inComparison ? "Remove from comparison" : "Add to comparison"}
      >
        <GitCompare size={20} />
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
        inComparison
          ? "bg-brand-orange text-white hover:bg-orange-600"
          : "bg-white border-2 border-gray-200 text-gray-700 hover:border-brand-orange hover:text-brand-orange"
      } ${className}`}
    >
      <GitCompare size={18} />
      {inComparison ? "Remove from Compare" : "Compare"}
    </button>
  );
}
