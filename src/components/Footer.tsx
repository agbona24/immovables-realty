"use client";

import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const Footer = () => {
  const [logoError, setLogoError] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Properties", href: "/properties" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
    { name: "Why Choose Us", href: "/why-us" },
    { name: "Downloads & Resources", href: "/downloads" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "Flexible Financing", href: "/flexible-financing" },
    { name: "Portfolio Management", href: "/portfolio-management" },
    { name: "Expert Advisory", href: "/expert-advisory" },
    { name: "Market Analytics", href: "/market-analytics" },
    { name: "Investment Properties", href: "/properties" },
    { name: "Property Consultation", href: "/contact" },
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "https://www.facebook.com/immovablesrealty?mibextid=kFxxJD", label: "Facebook" },
    { icon: <Twitter size={20} />, href: "https://x.com/immovablesrealt?t=MmJjqxvf3GmMUkZtIIF8UQ&s=09", label: "Twitter" },
    { icon: <Instagram size={20} />, href: "https://www.instagram.com/immovables_realty/profilecard/?igsh=MTZ2NnFvY2cwNzlvZA==", label: "Instagram" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-gradient-to-br from-brand-blue via-blue-900 to-brand-blue text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              {!logoError ? (
                <div className="mb-4">
                  <div className="relative h-12 w-48 mb-2">
                    <Image
                      src="/images/logo-white.png"
                      alt="IMMOVABLES REALTY"
                      fill
                      className="object-contain object-left"
                      onError={() => setLogoError(true)}
                    />
                  </div>
                  <p className="text-xs text-gray-300">RC: 7466982</p>
                </div>
              ) : (
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-white text-brand-blue font-montserrat font-bold text-xl px-3 py-2 rounded">
                    IR
                  </div>
                  <div>
                    <div className="font-montserrat font-extrabold text-lg leading-tight">
                      <span className="text-white">IMMOVABLES</span>{" "}
                      <span className="text-brand-orange">REALTY</span>
                    </div>
                    <p className="text-xs text-gray-300">RC: 7466982</p>
                  </div>
                </div>
              )}
              <p className="font-allura text-lg text-gray-300 mb-4">
                Your trusted partner for all things real estate.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Connecting you with exceptional real estate opportunities to grow your wealth.
                We make strategic investment simple, transparent, and accessible for everyone.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-brand-orange transition"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-montserrat font-bold text-xl mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-brand-orange transition flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-brand-orange rounded-full"></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-montserrat font-bold text-xl mb-6">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-brand-orange transition flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-brand-orange rounded-full"></span>
                    {service.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-montserrat font-bold text-xl mb-6">
              Contact Us
            </h3>
            <div className="space-y-4">
              <a
                href="tel:+2348132833083"
                className="flex items-start gap-3 text-gray-300 hover:text-brand-orange transition group"
              >
                <Phone
                  size={20}
                  className="mt-1 group-hover:scale-110 transition"
                />
                <div>
                  <div className="text-sm text-gray-400">Phone</div>
                  <div>+234 813 283 3083</div>
                </div>
              </a>

              <a
                href="mailto:info@immovablesrealty.com"
                className="flex items-start gap-3 text-gray-300 hover:text-brand-orange transition group"
              >
                <Mail
                  size={20}
                  className="mt-1 group-hover:scale-110 transition"
                />
                <div>
                  <div className="text-sm text-gray-400">Email</div>
                  <div className="break-all">info@immovablesrealty.com</div>
                </div>
              </a>

              <div className="flex items-start gap-3 text-gray-300">
                <MapPin size={20} className="mt-1" />
                <div>
                  <div className="text-sm text-gray-400">Office</div>
                  <div>12, Obasanjo Way off Akin Olugbade,<br />Ita Eko, Abeokuta, Ogun State</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-white/10 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} IMMOVABLES REALTY. All rights
              reserved. | RC: 7466982
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-brand-orange transition"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-brand-orange transition"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-brand-orange text-white p-4 rounded-full shadow-2xl hover:bg-brand-blue transition z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp size={24} />
      </motion.button>
    </footer>
  );
};

export default Footer;
