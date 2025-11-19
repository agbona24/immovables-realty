"use client";

import React from "react";
import { X, SlidersHorizontal, Bed } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface MobileFilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedType: string;
  setSelectedType: (type: string) => void;
  selectedStatus: string;
  setSelectedStatus: (status: string) => void;
  priceRange: string;
  setPriceRange: (range: string) => void;
  selectedBedrooms: string;
  setSelectedBedrooms: (bedrooms: string) => void;
  activeFiltersCount: number;
  clearFilters: () => void;
}

export default function MobileFilterDrawer({
  isOpen,
  onClose,
  selectedType,
  setSelectedType,
  selectedStatus,
  setSelectedStatus,
  priceRange,
  setPriceRange,
  selectedBedrooms,
  setSelectedBedrooms,
  activeFiltersCount,
  clearFilters,
}: MobileFilterDrawerProps) {
  const propertyTypes = ["All", "Estate", "House", "Land", "Commercial"];
  const statusOptions = ["All", "Available", "Selling Fast", "Few Units Left"];
  const priceRanges = [
    "All",
    "Under ₦5M",
    "₦5M - ₦20M",
    "₦20M - ₦50M",
    "Above ₦50M",
  ];
  const bedroomOptions = ["All", "1", "2", "3", "4", "5+"];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50 md:hidden"
          />

          {/* Drawer */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl z-50 max-h-[85vh] overflow-hidden md:hidden"
          >
            {/* Handle */}
            <div className="flex justify-center pt-3 pb-2">
              <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="bg-brand-blue/10 p-2 rounded-lg">
                  <SlidersHorizontal className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <h2 className="text-xl font-montserrat font-bold text-gray-800">
                    Filters
                  </h2>
                  {activeFiltersCount > 0 && (
                    <p className="text-sm text-gray-600">
                      {activeFiltersCount} active
                    </p>
                  )}
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close filters"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Content */}
            <div className="overflow-y-auto max-h-[calc(85vh-140px)] px-6 py-6 space-y-6">
              {/* Property Type */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Property Type
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {propertyTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`py-3 px-4 rounded-xl font-semibold transition-all ${
                        selectedType === type
                          ? "bg-brand-blue text-white shadow-lg"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bedrooms */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                  <Bed className="w-4 h-4" />
                  Bedrooms
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {bedroomOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => setSelectedBedrooms(option)}
                      className={`py-3 px-4 rounded-xl font-semibold transition-all ${
                        selectedBedrooms === option
                          ? "bg-brand-orange text-white shadow-lg"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Price Range
                </label>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range}
                      onClick={() => setPriceRange(range)}
                      className={`w-full py-3 px-4 rounded-xl font-semibold transition-all text-left ${
                        priceRange === range
                          ? "bg-green-500 text-white shadow-lg"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Availability
                </label>
                <div className="space-y-2">
                  {statusOptions.map((status) => (
                    <button
                      key={status}
                      onClick={() => setSelectedStatus(status)}
                      className={`w-full py-3 px-4 rounded-xl font-semibold transition-all text-left ${
                        selectedStatus === status
                          ? "bg-purple-500 text-white shadow-lg"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4 flex gap-3">
              {activeFiltersCount > 0 && (
                <button
                  onClick={() => {
                    clearFilters();
                    onClose();
                  }}
                  className="flex-1 py-3 px-4 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
                >
                  Clear All
                </button>
              )}
              <button
                onClick={onClose}
                className="flex-1 py-3 px-4 bg-gradient-to-r from-brand-blue to-blue-800 text-white rounded-xl font-semibold hover:from-brand-orange hover:to-orange-600 transition-all shadow-lg"
              >
                Show Results
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
