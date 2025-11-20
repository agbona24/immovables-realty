"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Save, Bookmark } from "lucide-react";
import { useSavedSearches, SearchCriteria } from "@/hooks/useSavedSearches";

interface SaveSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentCriteria: SearchCriteria;
}

const SaveSearchModal = ({
  isOpen,
  onClose,
  currentCriteria,
}: SaveSearchModalProps) => {
  const { saveSearch, isDuplicateSearch, canSaveMore } = useSavedSearches();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = () => {
    if (name.trim()) {
      const saved = saveSearch(
        name.trim(),
        currentCriteria,
        description.trim() || undefined
      );
      if (saved) {
        setName("");
        setDescription("");
        onClose();
      } else {
        alert("Maximum saved searches limit reached (20). Please delete some to add new ones.");
      }
    }
  };

  const handleClose = () => {
    setName("");
    setDescription("");
    onClose();
  };

  const getFilterSummary = () => {
    const filters: string[] = [];
    if (currentCriteria.searchQuery)
      filters.push(`Search: "${currentCriteria.searchQuery}"`);
    if (currentCriteria.selectedType !== "All")
      filters.push(`Type: ${currentCriteria.selectedType}`);
    if (currentCriteria.selectedStatus !== "All")
      filters.push(`Status: ${currentCriteria.selectedStatus}`);
    if (currentCriteria.priceRange !== "All")
      filters.push(`Price: ${currentCriteria.priceRange}`);
    if (currentCriteria.selectedBedrooms !== "All")
      filters.push(`Bedrooms: ${currentCriteria.selectedBedrooms}`);
    return filters;
  };

  const filterSummary = getFilterSummary();
  const isDuplicate = isDuplicateSearch(currentCriteria);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-brand-blue to-blue-600 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/20 rounded-lg">
                      <Bookmark size={24} />
                    </div>
                    <h2 className="text-2xl font-montserrat font-bold">
                      Save Search
                    </h2>
                  </div>
                  <button
                    onClick={handleClose}
                    className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-5">
                {isDuplicate && (
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-4">
                    <p className="text-sm text-yellow-800 dark:text-yellow-200">
                      You already have a saved search with these exact filters.
                    </p>
                  </div>
                )}

                {!canSaveMore && (
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4">
                    <p className="text-sm text-red-800 dark:text-red-200">
                      Maximum saved searches limit reached (20). Please delete some to add new ones.
                    </p>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Search Name *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g., Affordable Estates, Luxury Homes in Ijebu Ode"
                    className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:border-brand-blue dark:bg-gray-700 dark:text-white transition-colors"
                    autoFocus
                    maxLength={50}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Description (Optional)
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Add a note about this search..."
                    className="w-full h-20 px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl resize-none focus:outline-none focus:border-brand-blue dark:bg-gray-700 dark:text-white transition-colors"
                    maxLength={150}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Current Filters
                  </label>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 space-y-2">
                    {filterSummary.length === 0 ? (
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        No filters applied
                      </p>
                    ) : (
                      filterSummary.map((filter, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
                        >
                          <div className="w-1.5 h-1.5 bg-brand-blue rounded-full" />
                          {filter}
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="bg-gray-50 dark:bg-gray-700 px-6 py-4 flex items-center justify-end gap-3">
                <button
                  onClick={handleClose}
                  className="px-6 py-2 rounded-xl font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  disabled={!name.trim() || !canSaveMore}
                  className="px-6 py-2 rounded-xl font-semibold bg-brand-blue text-white hover:bg-blue-700 transition-colors inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Save size={18} />
                  Save Search
                </button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SaveSearchModal;
