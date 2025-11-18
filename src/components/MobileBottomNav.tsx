"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Building2,
  Heart,
  User,
  Menu,
  X,
  Phone,
  Mail,
  Info,
  TrendingUp,
  Calendar,
  Image as ImageIcon,
  FileText,
  DollarSign,
} from "lucide-react";

const MobileBottomNav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const mainNavItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Building2, label: "Properties", href: "/properties" },
    { icon: Heart, label: "Favorites", href: "/gallery" },
    { icon: User, label: "About", href: "/about" },
  ];

  const menuItems = [
    { icon: Phone, label: "Contact Us", href: "/contact" },
    { icon: Info, label: "Why Us", href: "/why-us" },
    { icon: TrendingUp, label: "Investment", href: "/investment-opportunity" },
    { icon: Calendar, label: "Schedule", href: "/schedule-inspection" },
    { icon: ImageIcon, label: "Gallery", href: "/gallery" },
    { icon: FileText, label: "Blog", href: "/blog" },
    { icon: DollarSign, label: "Downloads", href: "/downloads" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Mobile Bottom Navigation - Only visible on mobile */}
      <motion.nav
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        initial={{ y: 100 }}
        animate={{ y: isVisible ? 0 : 100 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Glass morphism effect */}
        <div className="bg-white/80 backdrop-blur-xl border-t border-gray-200/50 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
          <div className="flex items-center justify-around px-2 py-3 safe-area-inset-bottom">
            {mainNavItems.map((item, index) => {
              const Icon = item.icon;
              const active = isActive(item.href);

              return (
                <Link key={index} href={item.href}>
                  <motion.div
                    className="relative flex flex-col items-center justify-center min-w-[60px]"
                    whileTap={{ scale: 0.85 }}
                  >
                    <motion.div
                      className={`relative p-2 rounded-2xl transition-all ${
                        active
                          ? "bg-gradient-to-br from-brand-blue to-blue-600"
                          : "bg-transparent"
                      }`}
                      animate={{
                        scale: active ? [1, 1.1, 1] : 1,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      <Icon
                        size={22}
                        className={`${
                          active ? "text-white" : "text-gray-600"
                        } transition-colors`}
                        strokeWidth={active ? 2.5 : 2}
                      />
                    </motion.div>
                    <motion.span
                      className={`text-[10px] font-semibold mt-1 transition-colors ${
                        active ? "text-brand-blue" : "text-gray-600"
                      }`}
                      animate={{
                        fontWeight: active ? 700 : 600,
                      }}
                    >
                      {item.label}
                    </motion.span>
                    {active && (
                      <motion.div
                        className="absolute -bottom-3 left-1/2 w-1 h-1 bg-brand-orange rounded-full"
                        layoutId="activeIndicator"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </motion.div>
                </Link>
              );
            })}

            {/* Menu Button */}
            <motion.button
              onClick={() => setShowMenu(!showMenu)}
              className="relative flex flex-col items-center justify-center min-w-[60px]"
              whileTap={{ scale: 0.85 }}
            >
              <motion.div
                className={`relative p-2 rounded-2xl transition-all ${
                  showMenu
                    ? "bg-gradient-to-br from-brand-orange to-orange-600"
                    : "bg-transparent"
                }`}
                animate={{
                  rotate: showMenu ? 90 : 0,
                }}
              >
                {showMenu ? (
                  <X size={22} className="text-white" strokeWidth={2.5} />
                ) : (
                  <Menu size={22} className="text-gray-600" strokeWidth={2} />
                )}
              </motion.div>
              <span
                className={`text-[10px] font-semibold mt-1 transition-colors ${
                  showMenu ? "text-brand-orange" : "text-gray-600"
                }`}
              >
                More
              </span>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowMenu(false)}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Menu Content */}
            <motion.div
              className="absolute bottom-20 left-4 right-4 bg-white rounded-3xl shadow-2xl overflow-hidden"
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <h3 className="font-montserrat font-bold text-xl text-brand-blue mb-4">
                  Quick Links
                </h3>

                <div className="grid grid-cols-2 gap-3">
                  {menuItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <Link key={index} href={item.href}>
                        <motion.div
                          className="flex flex-col items-center justify-center p-4 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 hover:from-brand-blue hover:to-blue-600 group transition-all"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setShowMenu(false)}
                        >
                          <div className="p-3 rounded-xl bg-white group-hover:bg-white/20 transition-all mb-2">
                            <Icon
                              size={24}
                              className="text-brand-blue group-hover:text-white transition-colors"
                              strokeWidth={2}
                            />
                          </div>
                          <span className="text-xs font-semibold text-gray-700 group-hover:text-white text-center transition-colors">
                            {item.label}
                          </span>
                        </motion.div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileBottomNav;
