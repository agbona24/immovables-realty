"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Megaphone } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const AnnouncementBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Check if user has dismissed the announcement in this session
    const dismissed = sessionStorage.getItem("announcementDismissed");
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem("announcementDismissed", "true");
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-brand-blue via-blue-600 to-brand-blue shadow-2xl border-b-4 border-brand-orange"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: "spring", duration: 0.8 }}
        >
          <div className="container mx-auto px-4 py-3">
            {/* Compact Banner View */}
            {!isExpanded && (
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <motion.div
                    className="bg-brand-orange p-2 rounded-full"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Megaphone className="text-white" size={24} />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-white font-montserrat font-bold text-sm md:text-base">
                      IMPORTANT PUBLIC NOTICE
                    </h3>
                    <p className="text-gray-100 text-xs md:text-sm">
                      Enhanced KYC protocols now in effect for all transactions
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <motion.button
                    onClick={toggleExpanded}
                    className="bg-brand-orange text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-orange-600 transition whitespace-nowrap"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Read Full Notice
                  </motion.button>
                  <motion.button
                    onClick={handleDismiss}
                    className="bg-white/10 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/20 transition"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X size={20} />
                  </motion.button>
                </div>
              </div>
            )}

            {/* Expanded Full Notice View */}
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-brand-orange p-2 rounded-full">
                      <Megaphone className="text-white" size={24} />
                    </div>
                    <h3 className="text-white font-montserrat font-bold text-lg md:text-xl">
                      PUBLIC NOTICE - IMPORTANT ANNOUNCEMENT
                    </h3>
                  </div>
                  <div className="flex gap-2">
                    <motion.button
                      onClick={toggleExpanded}
                      className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm hover:bg-white/20 transition"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Collapse
                    </motion.button>
                    <motion.button
                      onClick={handleDismiss}
                      className="bg-white/10 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/20 transition"
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <X size={20} />
                    </motion.button>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-4xl mx-auto">
                  <div className="relative w-full aspect-[3/4] md:aspect-[4/3] lg:aspect-video">
                    <Image
                      src="/images/public announcement.jpeg"
                      alt="IMMOVABLES REALTY Public Notice"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>

                  <div className="mt-6 space-y-4 text-gray-700">
                    <div className="bg-brand-orange/10 border-l-4 border-brand-orange p-4 rounded-r-lg">
                      <h4 className="font-bold text-brand-blue mb-2">
                        Key Updates:
                      </h4>
                      <ul className="list-disc list-inside space-y-2 text-sm">
                        <li>
                          All Deeds of Assignment, Agreements, and legal
                          documentation now exclusively prepared by IMMOVABLES
                          REALTY
                        </li>
                        <li>
                          Enhanced Know Your Customer (KYC) protocols for
                          greater compliance and transparency
                        </li>
                        <li>
                          All documents subject to client verification before
                          execution
                        </li>
                        <li>
                          Swift and professional handling of required
                          corrections
                        </li>
                      </ul>
                    </div>

                    <div className="text-center text-sm text-gray-600">
                      <p className="font-semibold">
                        For full details, please contact our office.
                      </p>
                      <p className="mt-2">
                        We appreciate your cooperation and continued trust.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnnouncementBanner;
