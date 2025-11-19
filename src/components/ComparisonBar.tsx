"use client";

import React from "react";
import { useComparison } from "@/hooks/useComparison";
import { properties } from "@/data/properties";
import { GitCompare, X, Eye } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function ComparisonBar() {
  const { comparison, removeFromComparison, comparisonCount } = useComparison();

  const comparisonProperties = properties.filter((property) =>
    comparison.includes(property.id)
  );

  if (comparisonCount === 0) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-brand-blue to-blue-900 text-white shadow-2xl border-t-4 border-brand-orange pb-safe"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            {/* Left: Title and Count */}
            <div className="flex items-center gap-3">
              <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
                <GitCompare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-montserrat font-bold text-lg">
                  Compare Properties
                </h3>
                <p className="text-sm text-white/80">
                  {comparisonCount} {comparisonCount === 1 ? "property" : "properties"} selected
                  {comparisonCount < 3 && ` • Add ${3 - comparisonCount} more`}
                </p>
              </div>
            </div>

            {/* Middle: Property Thumbnails (Desktop) */}
            <div className="hidden md:flex items-center gap-2">
              {comparisonProperties.map((property) => (
                <motion.div
                  key={property.id}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="relative group"
                >
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden ring-2 ring-white/50">
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <button
                    onClick={() => removeFromComparison(property.id)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-red-600"
                    aria-label="Remove from comparison"
                  >
                    <X size={14} />
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs px-1 py-0.5 truncate opacity-0 group-hover:opacity-100 transition-opacity">
                    {property.title}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right: Action Buttons */}
            <div className="flex items-center gap-3">
              <Link
                href="/compare"
                className="bg-brand-orange hover:bg-orange-600 text-white px-6 py-2 rounded-xl font-semibold transition-colors inline-flex items-center gap-2 shadow-lg"
              >
                <Eye size={18} />
                <span>Compare Now</span>
              </Link>
            </div>
          </div>

          {/* Mobile Property List */}
          <div className="md:hidden mt-3 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {comparisonProperties.map((property) => (
              <motion.div
                key={property.id}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="flex-shrink-0 bg-white/10 backdrop-blur-sm rounded-lg p-2 flex items-center gap-2"
              >
                <div className="relative w-12 h-12 rounded-md overflow-hidden">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold truncate">{property.title}</p>
                  <p className="text-xs text-white/70">{property.price}</p>
                </div>
                <button
                  onClick={() => removeFromComparison(property.id)}
                  className="bg-white/20 hover:bg-red-500 text-white rounded-full p-1 transition-colors"
                  aria-label="Remove"
                >
                  <X size={16} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
