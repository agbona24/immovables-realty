"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, FolderPlus, Palette } from "lucide-react";
import { useFavoritesWithCollections } from "@/hooks/useFavoritesWithCollections";

interface CollectionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const colorOptions = [
  { name: "Red", value: "red", bg: "bg-red-500" },
  { name: "Blue", value: "blue", bg: "bg-blue-500" },
  { name: "Green", value: "green", bg: "bg-green-500" },
  { name: "Yellow", value: "yellow", bg: "bg-yellow-500" },
  { name: "Purple", value: "purple", bg: "bg-purple-500" },
  { name: "Pink", value: "pink", bg: "bg-pink-500" },
  { name: "Orange", value: "orange", bg: "bg-orange-500" },
  { name: "Teal", value: "teal", bg: "bg-teal-500" },
];

const CollectionModal = ({ isOpen, onClose }: CollectionModalProps) => {
  const { createCollection } = useFavoritesWithCollections();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedColor, setSelectedColor] = useState("blue");

  const handleCreate = () => {
    if (name.trim()) {
      createCollection(name.trim(), description.trim() || undefined, selectedColor);
      setName("");
      setDescription("");
      setSelectedColor("blue");
      onClose();
    }
  };

  const handleClose = () => {
    setName("");
    setDescription("");
    setSelectedColor("blue");
    onClose();
  };

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
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-brand-blue to-blue-600 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/20 rounded-lg">
                      <FolderPlus size={24} />
                    </div>
                    <h2 className="text-2xl font-montserrat font-bold">
                      New Collection
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
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Collection Name *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g., Dream Homes, Investment Properties"
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
                    placeholder="Add a brief description..."
                    className="w-full h-24 px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl resize-none focus:outline-none focus:border-brand-blue dark:bg-gray-700 dark:text-white transition-colors"
                    maxLength={200}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    <Palette size={16} className="inline mr-2" />
                    Color Theme
                  </label>
                  <div className="grid grid-cols-4 gap-3">
                    {colorOptions.map((color) => (
                      <button
                        key={color.value}
                        onClick={() => setSelectedColor(color.value)}
                        className={`p-3 rounded-xl ${color.bg} hover:opacity-80 transition-opacity relative ${
                          selectedColor === color.value
                            ? "ring-4 ring-gray-800 dark:ring-white"
                            : ""
                        }`}
                        title={color.name}
                      >
                        {selectedColor === color.value && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-3 h-3 bg-white rounded-full" />
                          </div>
                        )}
                      </button>
                    ))}
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
                  onClick={handleCreate}
                  disabled={!name.trim()}
                  className="px-6 py-2 rounded-xl font-semibold bg-brand-blue text-white hover:bg-blue-700 transition-colors inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Plus size={18} />
                  Create Collection
                </button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CollectionModal;
