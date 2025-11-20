"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useTransform, PanInfo } from "framer-motion";
import { Heart, GitCompare, Eye } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Property } from "@/data/properties";
import { useFavorites } from "@/hooks/useFavorites";
import { useComparison } from "@/hooks/useComparison";

interface SwipeablePropertyCardProps {
  property: Property;
}

export default function SwipeablePropertyCard({ property }: SwipeablePropertyCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const { isInComparison, toggleComparison } = useComparison();
  const [showActions, setShowActions] = useState(false);

  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 0, 200], [-15, 0, 15]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0.5, 1, 1, 1, 0.5]);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 100;

    if (info.offset.x > threshold) {
      // Swipe right - Add to favorites
      if (!isFavorite(property.id)) {
        toggleFavorite(property.id);
        showFeedback("Added to favorites! ❤️");
      }
      x.set(0);
    } else if (info.offset.x < -threshold) {
      // Swipe left - Add to comparison
      if (!isInComparison(property.id)) {
        toggleComparison(property.id);
        showFeedback("Added to comparison! 📊");
      }
      x.set(0);
    }
  };

  const showFeedback = (message: string) => {
    setShowActions(true);
    setTimeout(() => setShowActions(false), 2000);
  };

  return (
    <div className="relative">
      {/* Background Actions */}
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <div className="bg-red-500 text-white p-4 rounded-full shadow-lg">
          <Heart size={24} className="fill-current" />
        </div>
        <div className="bg-brand-orange text-white p-4 rounded-full shadow-lg">
          <GitCompare size={24} />
        </div>
      </div>

      {/* Swipeable Card */}
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.7}
        onDragEnd={handleDragEnd}
        style={{ x, rotate, opacity }}
        className="relative bg-white rounded-2xl shadow-lg overflow-hidden"
      >
        <Link href={`/properties/${property.id}`}>
          <div className="relative h-48">
            <Image
              src={property.image}
              alt={property.title}
              fill
              className="object-cover"
            />
            <div className="absolute top-3 right-3 bg-brand-orange text-white px-3 py-1 rounded-full text-sm font-semibold">
              {property.status}
            </div>

            {/* Quick Actions Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    toggleFavorite(property.id);
                  }}
                  className={`p-2 rounded-full backdrop-blur-sm transition-all ${
                    isFavorite(property.id)
                      ? "bg-red-500 text-white"
                      : "bg-white/20 text-white hover:bg-white/30"
                  }`}
                >
                  <Heart size={16} className={isFavorite(property.id) ? "fill-current" : ""} />
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    toggleComparison(property.id);
                  }}
                  className={`p-2 rounded-full backdrop-blur-sm transition-all ${
                    isInComparison(property.id)
                      ? "bg-brand-orange text-white"
                      : "bg-white/20 text-white hover:bg-white/30"
                  }`}
                >
                  <GitCompare size={16} />
                </button>
              </div>
            </div>
          </div>

          <div className="p-4">
            <h3 className="font-bold text-lg text-gray-800 mb-1 line-clamp-1">
              {property.title}
            </h3>
            <p className="text-sm text-gray-600 mb-2">{property.location}</p>
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-brand-blue">
                {property.price}
              </span>
              <div className="bg-brand-blue/10 text-brand-blue px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                <Eye size={12} />
                View
              </div>
            </div>
          </div>
        </Link>
      </motion.div>

      {/* Swipe Hint */}
      {!showActions && (
        <div className="text-center mt-2 text-xs text-gray-500">
          ← Swipe to compare · Swipe to favorite →
        </div>
      )}

      {/* Feedback Toast */}
      {showActions && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/80 text-white px-6 py-3 rounded-full font-semibold text-sm shadow-2xl z-10"
        >
          Action completed!
        </motion.div>
      )}
    </div>
  );
}
