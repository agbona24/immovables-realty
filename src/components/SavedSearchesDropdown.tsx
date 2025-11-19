"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bookmark, Trash2, Clock } from "lucide-react";
import { useSavedSearches, SearchCriteria } from "@/hooks/useSavedSearches";

interface SavedSearchesDropdownProps {
  onLoadSearch: (criteria: SearchCriteria) => void;
}

const SavedSearchesDropdown = ({
  onLoadSearch,
}: SavedSearchesDropdownProps) => {
  const { savedSearches, deleteSearch, markAsUsed, searchCount } =
    useSavedSearches();
  const [isOpen, setIsOpen] = useState(false);

  const handleLoadSearch = (searchId: string, criteria: SearchCriteria) => {
    markAsUsed(searchId);
    onLoadSearch(criteria);
    setIsOpen(false);
  };

  const handleDelete = (searchId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm("Are you sure you want to delete this saved search?")) {
      deleteSearch(searchId);
    }
  };

  const getFilterSummary = (criteria: SearchCriteria): string => {
    const filters: string[] = [];
    if (criteria.searchQuery) filters.push(`"${criteria.searchQuery}"`);
    if (criteria.selectedType !== "All") filters.push(criteria.selectedType);
    if (criteria.selectedStatus !== "All") filters.push(criteria.selectedStatus);
    if (criteria.priceRange !== "All") filters.push(criteria.priceRange);
    if (criteria.selectedBedrooms !== "All")
      filters.push(`${criteria.selectedBedrooms} bed`);
    return filters.join(" • ");
  };

  if (searchCount === 0) {
    return null; // Don't show if no saved searches
  }

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Bookmark size={18} className="text-gray-700 dark:text-gray-300" />
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Saved Searches ({searchCount})
        </span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="absolute right-0 mt-2 w-96 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50"
          >
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="font-montserrat font-bold text-gray-900 dark:text-white">
                Saved Searches
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Click to load a saved search
              </p>
            </div>

            <div className="max-h-96 overflow-y-auto">
              {savedSearches.length === 0 ? (
                <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                  No saved searches yet
                </div>
              ) : (
                savedSearches.map((search) => (
                  <motion.div
                    key={search.id}
                    onClick={() => handleLoadSearch(search.id, search.criteria)}
                    className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border-b border-gray-100 dark:border-gray-700 last:border-b-0 cursor-pointer group"
                    whileHover={{ x: 4 }}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm text-gray-900 dark:text-white mb-1 truncate">
                          {search.name}
                        </h4>
                        {search.description && (
                          <p className="text-xs text-gray-600 dark:text-gray-400 mb-2 line-clamp-1">
                            {search.description}
                          </p>
                        )}
                        <p className="text-xs text-gray-500 dark:text-gray-500 line-clamp-1">
                          {getFilterSummary(search.criteria)}
                        </p>
                        {search.lastUsed && (
                          <div className="flex items-center gap-1 mt-2 text-xs text-gray-400 dark:text-gray-500">
                            <Clock size={12} />
                            <span>
                              Last used: {new Date(search.lastUsed).toLocaleDateString()}
                            </span>
                          </div>
                        )}
                      </div>
                      <button
                        onClick={(e) => handleDelete(search.id, e)}
                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                        title="Delete search"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SavedSearchesDropdown;
