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

interface SiteSettings {
  contactInfo?: {
    phone?: string;
    whatsapp?: string;
    email?: string;
    address?: string;
    officeHours?: string;
  };
  socialLinks?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
  footerText?: string;
}

interface FooterProps {
  siteSettings?: SiteSettings;
}

const Footer = ({ siteSettings }: FooterProps) => {
  const [logoError, setLogoError] = useState(false);

  // Use provided settings or fallback
  const contactInfo = {
    phone: siteSettings?.contactInfo?.phone || '+234 813 283 3083',
    email: siteSettings?.contactInfo?.email || 'immovablesrealty@gmail.com',
    address: siteSettings?.contactInfo?.address || 'Abeokuta, Ogun State, Nigeria',
    officeHours: siteSettings?.contactInfo?.officeHours || 'Mon - Sat: 9:00 AM - 6:00 PM',
  };

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
    { icon: <Facebook size={20} />, href: siteSettings?.socialLinks?.facebook || "https://www.facebook.com/immovablesrealty?mibextid=kFxxJD", label: "Facebook" },
    { icon: <Twitter size={20} />, href: siteSettings?.socialLinks?.twitter || "https://x.com/immovablesrealt?t=MmJjqxvf3GmMUkZtIIF8UQ&s=09", label: "Twitter" },
    { icon: <Instagram size={20} />, href: siteSettings?.socialLinks?.instagram || "https://www.instagram.com/immovables_realty/profilecard/?igsh=MTZ2NnFvY2cwNzlvZA==", label: "Instagram" },
    { icon: <Linkedin size={20} />, href: siteSettings?.socialLinks?.linkedin || "https://www.linkedin.com/", label: "LinkedIn" },
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
                href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                className="flex items-start gap-3 text-gray-300 hover:text-brand-orange transition group"
              >
                <Phone
                  size={20}
                  className="mt-1 group-hover:scale-110 transition"
                />
                <div>
                  <div className="text-sm text-gray-400">Phone</div>
                  <div>{contactInfo.phone}</div>
                </div>
              </a>

              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-start gap-3 text-gray-300 hover:text-brand-orange transition group"
              >
                <Mail
                  size={20}
                  className="mt-1 group-hover:scale-110 transition"
                />
                <div>
                  <div className="text-sm text-gray-400">Email</div>
                  <div className="break-all">{contactInfo.email}</div>
                </div>
              </a>

              <div className="flex items-start gap-3 text-gray-300">
                <MapPin size={20} className="mt-1" />
                <div>
                  <div className="text-sm text-gray-400">Office</div>
                  <div>{contactInfo.address}</div>
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
            <div className="flex flex-wrap gap-4 md:gap-6 text-sm justify-center md:justify-end">
              <a
                href="/privacy-policy"
                className="text-gray-400 hover:text-brand-orange transition"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-service"
                className="text-gray-400 hover:text-brand-orange transition"
              >
                Terms of Service
              </a>
              <a
                href="/refund-policy"
                className="text-gray-400 hover:text-brand-orange transition"
              >
                Refund Policy
              </a>
              <a
                href="/website-disclaimer"
                className="text-gray-400 hover:text-brand-orange transition"
              >
                Disclaimer
              </a>
            </div>
          </div>
        </motion.div>

        {/* Developer Credit */}
        <motion.div
          className="border-t border-white/10 mt-8 pt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-center">
            <div className="flex items-center gap-2">
              <div className="relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-brand-orange to-orange-600 rounded-lg blur-sm opacity-75"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.75, 0.9, 0.75],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <div className="relative bg-gradient-to-r from-brand-orange to-orange-600 text-white px-2 py-1 rounded-lg font-bold text-xs">
                  💻
                </div>
              </div>
              <span className="text-gray-400 text-sm">
                Crafted with excellence by
              </span>
            </div>

            <motion.a
              href="https://wa.me/2347069716822?text=Hey%20Harzotech!%20%F0%9F%91%8B%20I%20saw%20the%20*amazing%20job*%20you%20did%20on%20the%20IMMOVABLES%20REALTY%20website%20%E2%9C%A8%20%0A%0AI%20would%20love%20to%20discuss%20a%20project%20with%20you.%20When%20can%20we%20talk%3F%20%F0%9F%9A%80"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-gradient-to-r from-brand-blue to-blue-800 hover:from-brand-orange hover:to-orange-600 text-white px-6 py-2.5 rounded-full font-montserrat font-bold shadow-lg transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="text-lg"
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                ⚡
              </motion.span>
              <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent group-hover:from-white group-hover:to-orange-100 transition-all font-extrabold tracking-wide">
                IDS
              </span>
              <motion.svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </motion.svg>
            </motion.a>
          </div>

          <motion.p
            className="text-center text-gray-500 text-xs mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            Professional Web Development • Premium Design • Cutting-Edge Technology
          </motion.p>
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
