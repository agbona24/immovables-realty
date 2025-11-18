"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  MessageCircle,
  Phone,
  Mail,
  Calendar,
  Plus,
  X,
  Send,
} from "lucide-react";

const MobileFAB = () => {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      color: "from-green-500 to-green-600",
      href: "https://wa.me/2348023050052?text=Hello%20IMMOVABLES%20REALTY!%20I'm%20interested%20in%20your%20amazing%20properties.%20Can%20you%20help%20me%20find%20the%20perfect%20investment%20opportunity?",
      external: true,
    },
    {
      icon: Phone,
      label: "Call",
      color: "from-blue-500 to-blue-600",
      href: "tel:+2348023050052",
      external: false,
    },
    {
      icon: Calendar,
      label: "Schedule",
      color: "from-orange-500 to-orange-600",
      href: "/schedule-inspection",
      external: false,
    },
  ];

  return (
    <div className="md:hidden fixed bottom-24 right-4 z-40">
      {/* Action Buttons */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute bottom-16 right-0 flex flex-col gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {actions.map((action, index) => {
              const Icon = action.icon;
              const content = (
                <motion.div
                  key={index}
                  className="flex items-center gap-2"
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {/* Label */}
                  <motion.div
                    className="bg-white px-3 py-1.5 rounded-full shadow-lg"
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-xs font-semibold text-gray-700 whitespace-nowrap">
                      {action.label}
                    </span>
                  </motion.div>

                  {/* Icon Button */}
                  <motion.div
                    className={`w-11 h-11 rounded-full bg-gradient-to-br ${action.color} shadow-xl flex items-center justify-center`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon size={20} className="text-white" strokeWidth={2.5} />
                  </motion.div>
                </motion.div>
              );

              if (action.external) {
                return (
                  <a
                    key={index}
                    href={action.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {content}
                  </a>
                );
              }

              return (
                <Link key={index} href={action.href}>
                  {content}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main FAB */}
      <motion.button
        className={`w-12 h-12 rounded-full shadow-xl flex items-center justify-center relative overflow-hidden ${
          isOpen
            ? "bg-gradient-to-br from-red-500 to-red-600"
            : "bg-gradient-to-br from-green-500 to-green-600"
        }`}
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.9 }}
        animate={{
          rotate: isOpen ? 135 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={20} className="text-white" strokeWidth={3} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={20} className="text-white" strokeWidth={2.5} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default MobileFAB;
