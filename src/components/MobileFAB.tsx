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
      label: "Call Us",
      color: "from-blue-500 to-blue-600",
      href: "tel:+2348023050052",
      external: false,
    },
    {
      icon: Mail,
      label: "Email",
      color: "from-purple-500 to-purple-600",
      href: "mailto:immovablesrealty@gmail.com",
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
    <div className="md:hidden fixed bottom-24 right-6 z-40">
      {/* Action Buttons */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute bottom-20 right-0 flex flex-col gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {actions.map((action, index) => {
              const Icon = action.icon;
              const content = (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {/* Label */}
                  <motion.div
                    className="bg-white px-4 py-2 rounded-full shadow-lg"
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">
                      {action.label}
                    </span>
                  </motion.div>

                  {/* Icon Button */}
                  <motion.div
                    className={`w-14 h-14 rounded-full bg-gradient-to-br ${action.color} shadow-xl flex items-center justify-center`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon size={24} className="text-white" strokeWidth={2.5} />
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
        className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center relative overflow-hidden ${
          isOpen
            ? "bg-gradient-to-br from-red-500 to-red-600"
            : "bg-gradient-to-br from-brand-orange to-orange-600"
        }`}
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.9 }}
        animate={{
          rotate: isOpen ? 135 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        {/* Ripple Effect */}
        <motion.div
          className="absolute inset-0 bg-white rounded-full"
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{
            scale: isOpen ? [0, 2] : 0,
            opacity: isOpen ? [0.5, 0] : 0,
          }}
          transition={{ duration: 0.6 }}
        />

        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={28} className="text-white" strokeWidth={3} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Send size={28} className="text-white" strokeWidth={2.5} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse Animation */}
        {!isOpen && (
          <motion.div
            className="absolute inset-0 rounded-full bg-brand-orange"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}
      </motion.button>

      {/* Helper Text - Shows on first visit */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            className="absolute -top-12 right-0 bg-brand-blue text-white px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap shadow-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            Need help? Tap here!
            <div className="absolute -bottom-1 right-6 w-2 h-2 bg-brand-blue rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileFAB;
