"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Properties", href: "/properties" },
    { name: "Invest", href: "/investment-opportunity" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
    { name: "Why Us", href: "/why-us" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-brand-blue text-white py-2 px-4 hidden md:block"
      >
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+2348132833083" className="flex items-center gap-2 hover:text-brand-orange transition">
              <Phone size={16} />
              <span>+234 813 283 3083</span>
            </a>
            <a href="mailto:info@immovablesrealty.com" className="flex items-center gap-2 hover:text-brand-orange transition">
              <Mail size={16} />
              <span>info@immovablesrealty.com</span>
            </a>
          </div>
          <div className="text-xs">
            <span className="font-montserrat">RC: 7466982</span>
          </div>
        </div>
      </motion.div>

      {/* Main Navbar */}
      <motion.nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-lg py-3"
            : "bg-white/95 backdrop-blur-sm py-4"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.a
              href="/"
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {!logoError ? (
                <div className="relative h-12 w-48">
                  <Image
                    src="/images/logo.png"
                    alt="IMMOVABLES REALTY"
                    fill
                    className="object-contain"
                    priority
                    onError={() => setLogoError(true)}
                  />
                </div>
              ) : (
                <div className="flex items-center">
                  <div className="bg-brand-blue text-white font-montserrat font-bold text-xl px-3 py-2 rounded">
                    IR
                  </div>
                  <div className="ml-3">
                    <div className="font-montserrat font-extrabold text-xl leading-tight">
                      <span className="text-brand-blue">IMMOVABLES</span>{" "}
                      <span className="text-brand-orange">REALTY</span>
                    </div>
                    <p className="font-allura text-sm text-gray-600 -mt-1">
                      ...providing affordable landed properties
                    </p>
                  </div>
                </div>
              )}
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="font-montserrat font-semibold text-gray-700 hover:text-brand-orange transition relative group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.05 }}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-orange group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                className="bg-brand-orange text-white px-6 py-2.5 rounded-full font-montserrat font-bold hover:bg-brand-blue transition shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Consultation
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden text-brand-blue p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white shadow-lg overflow-hidden sticky top-[120px] z-40"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="block font-montserrat font-semibold text-gray-700 hover:text-brand-orange transition py-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                className="block bg-brand-orange text-white px-6 py-3 rounded-full font-montserrat font-bold text-center hover:bg-brand-blue transition"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Consultation
              </motion.a>
              <div className="pt-4 border-t space-y-2 text-sm text-gray-600">
                <a href="tel:+2348132833083" className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>+234 813 283 3083</span>
                </a>
                <a href="mailto:info@immovablesrealty.com" className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>info@immovablesrealty.com</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
