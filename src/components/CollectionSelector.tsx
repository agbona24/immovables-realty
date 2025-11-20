"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderHeart, Check } from "lucide-react";
import { useFavoritesWithCollections } from "@/hooks/useFavoritesWithCollections";

interface CollectionSelectorProps {
  propertyId: string;
}

const colorClasses: Record<string, string> = {
  red: "bg-red-500",
  blue: "bg-blue-500",
  green: "bg-green-500",
  yellow: "bg-yellow-500",
  purple: "bg-purple-500",
  pink: "bg-pink-500",
  orange: "bg-orange-500",
  teal: "bg-teal-500",
};

const CollectionSelector = ({ propertyId }: CollectionSelectorProps) => {
  const {
    collections,
    addToCollection,
    removeFromCollection,
    getCollectionsForProperty,
  } = useFavoritesWithCollections();
  const [isOpen, setIsOpen] = useState(false);

  const propertyCollections = getCollectionsForProperty(propertyId);
  const userCollections = collections.filter((c) => c.id !== "all");

  const toggleCollection = (collectionId: string) => {
    const isInCollection = propertyCollections.some((c) => c.id === collectionId);
    if (isInCollection) {
      removeFromCollection(collectionId, propertyId);
    } else {
      addToCollection(collectionId, propertyId);
    }
  };

  if (userCollections.length === 0) {
    return null; // Don't show if no collections exist yet
  }

  return (
    <div className="relative" onClick={(e) => e.preventDefault()}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full hover:bg-white dark:hover:bg-gray-700 transition-colors shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        title="Add to collection"
      >
        <FolderHeart size={20} className="text-gray-700 dark:text-gray-300" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50"
          >
            <div className="p-3 border-b border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-sm text-gray-900 dark:text-white">
                Add to Collection
              </h4>
            </div>
            <div className="max-h-64 overflow-y-auto">
              {userCollections.map((collection) => {
                const isSelected = propertyCollections.some(
                  (c) => c.id === collection.id
                );
                return (
                  <button
                    key={collection.id}
                    onClick={() => toggleCollection(collection.id)}
                    className="w-full px-3 py-2.5 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-3"
                  >
                    <div
                      className={`w-3 h-3 rounded-full ${
                        colorClasses[collection.color] || "bg-blue-500"
                      }`}
                    />
                    <span className="flex-1 text-left text-sm text-gray-700 dark:text-gray-300 font-medium truncate">
                      {collection.name}
                    </span>
                    {isSelected && (
                      <Check size={16} className="text-brand-blue flex-shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CollectionSelector;
