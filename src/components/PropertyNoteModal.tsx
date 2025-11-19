"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Save, StickyNote } from "lucide-react";
import { useFavoritesWithCollections } from "@/hooks/useFavoritesWithCollections";

interface PropertyNoteModalProps {
  propertyId: string;
  propertyTitle: string;
  isOpen: boolean;
  onClose: () => void;
}

const PropertyNoteModal = ({
  propertyId,
  propertyTitle,
  isOpen,
  onClose,
}: PropertyNoteModalProps) => {
  const { getNote, addNote, removeNote } = useFavoritesWithCollections();
  const existingNote = getNote(propertyId);
  const [noteText, setNoteText] = useState(existingNote?.note || "");

  useEffect(() => {
    if (isOpen) {
      const note = getNote(propertyId);
      setNoteText(note?.note || "");
    }
  }, [isOpen, propertyId, getNote]);

  const handleSave = () => {
    if (noteText.trim()) {
      addNote(propertyId, noteText.trim());
    } else {
      removeNote(propertyId);
    }
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
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-brand-blue to-blue-600 p-6 text-white">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/20 rounded-lg">
                      <StickyNote size={24} />
                    </div>
                    <h2 className="text-2xl font-montserrat font-bold">
                      Property Notes
                    </h2>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
                <p className="text-white/90 text-sm ml-14">{propertyTitle}</p>
              </div>

              {/* Content */}
              <div className="p-6">
                <textarea
                  value={noteText}
                  onChange={(e) => setNoteText(e.target.value)}
                  placeholder="Add your thoughts, questions, or reminders about this property..."
                  className="w-full h-48 px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl resize-none focus:outline-none focus:border-brand-blue dark:bg-gray-700 dark:text-white transition-colors"
                  autoFocus
                />

                {existingNote && (
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    Last updated:{" "}
                    {new Date(existingNote.lastUpdated).toLocaleDateString()}{" "}
                    at {new Date(existingNote.lastUpdated).toLocaleTimeString()}
                  </p>
                )}
              </div>

              {/* Footer */}
              <div className="bg-gray-50 dark:bg-gray-700 px-6 py-4 flex items-center justify-between gap-4">
                <button
                  onClick={() => {
                    setNoteText("");
                    removeNote(propertyId);
                    onClose();
                  }}
                  className="text-red-600 hover:text-red-700 font-medium transition-colors"
                >
                  Clear Note
                </button>
                <div className="flex gap-3">
                  <button
                    onClick={onClose}
                    className="px-6 py-2 rounded-xl font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    className="px-6 py-2 rounded-xl font-semibold bg-brand-blue text-white hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
                  >
                    <Save size={18} />
                    Save Note
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PropertyNoteModal;
