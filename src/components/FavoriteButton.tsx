"use client";

import React from "react";
import { Heart } from "lucide-react";
import { useFavoritesWithCollections } from "@/hooks/useFavoritesWithCollections";

interface FavoriteButtonProps {
  propertyId: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function FavoriteButton({
  propertyId,
  className = "",
  size = "md",
}: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite, isLoaded } = useFavoritesWithCollections();
  const favorite = isFavorite(propertyId);

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24,
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(propertyId);
  };

  if (!isLoaded) {
    return null; // Don't render until favorites are loaded from localStorage
  }

  return (
    <button
      onClick={handleClick}
      className={`${sizeClasses[size]} flex items-center justify-center rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 ${
        favorite
          ? "bg-red-500 text-white shadow-lg"
          : "bg-white/90 text-gray-600 hover:bg-white"
      } ${className}`}
      aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      title={favorite ? "Remove from favorites" : "Add to favorites"}
    >
      <Heart
        size={iconSizes[size]}
        className={`transition-all ${favorite ? "fill-current" : ""}`}
      />
    </button>
  );
}
