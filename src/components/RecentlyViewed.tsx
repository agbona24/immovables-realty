"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Clock, X } from "lucide-react";
import { useState } from "react";
import { useRecentlyViewed } from "@/hooks/useRecentlyViewed";
import { properties } from "@/data/properties";
import Link from "next/link";
import Image from "next/image";

const RecentlyViewed = () => {
  const { recentlyViewed, clearRecentlyViewed } = useRecentlyViewed();
  const [showDropdown, setShowDropdown] = useState(false);

  const recentProperties = recentlyViewed
    .map((id) => properties.find((p) => p.id === id))
    .filter((p) => p !== undefined)
    .slice(0, 5);

  if (recentlyViewed.length === 0) return null;

  return (
    <div className="relative">
      <motion.button
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Clock size={18} className="text-gray-700 dark:text-gray-300" />
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Recently Viewed ({recentlyViewed.length})
        </span>
      </motion.button>

      <AnimatePresence>
        {showDropdown && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50"
          >
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
              <h3 className="font-montserrat font-bold text-gray-900 dark:text-white">
                Recently Viewed
              </h3>
              <motion.button
                onClick={() => {
                  clearRecentlyViewed();
                  setShowDropdown(false);
                }}
                className="text-sm text-red-500 hover:text-red-600 font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Clear All
              </motion.button>
            </div>

            <div className="max-h-96 overflow-y-auto">
              {recentProperties.length === 0 ? (
                <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                  No recently viewed properties
                </div>
              ) : (
                recentProperties.map((property) => (
                  <Link
                    key={property.id}
                    href={`/properties/${property.id}`}
                    onClick={() => setShowDropdown(false)}
                  >
                    <motion.div
                      className="p-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border-b border-gray-100 dark:border-gray-700 last:border-b-0"
                      whileHover={{ x: 4 }}
                    >
                      <div className="flex gap-3">
                        <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={property.image}
                            alt={property.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-montserrat font-semibold text-sm text-gray-900 dark:text-white line-clamp-2 mb-1">
                            {property.title}
                          </h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                            {property.location}
                          </p>
                          <p className="text-sm font-bold text-brand-orange">
                            {property.price}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                ))
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RecentlyViewed;
