"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Download,
  Lock,
  Users,
  TrendingUp,
  Shield,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";

interface DownloadItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  fileSize: string;
  color: string;
  features: string[];
  requiresAuth?: boolean;
}

const Downloads = () => {
  const [downloading, setDownloading] = useState<string | null>(null);

  const downloadItems: DownloadItem[] = [
    {
      id: "private-partner",
      title: "Private Partner Prospectus",
      description:
        "Comprehensive guide for individuals and families seeking to build wealth through strategic real estate partnerships. Learn how to invest alongside IMMOVABLES REALTY with flexible payment options and guaranteed returns.",
      icon: <Users className="w-8 h-8" />,
      fileSize: "2.4 MB",
      color: "from-brand-blue to-blue-800",
      features: [
        "Investment opportunities from ₦500K",
        "Flexible payment plans (6-24 months)",
        "Dual ownership structure explained",
        "Expected ROI projections",
        "Exit strategies and resale support",
        "Case studies and testimonials",
      ],
    },
    {
      id: "board-participation",
      title: "Board Participation Prospectus",
      description:
        "Exclusive opportunity for high-net-worth individuals and institutional investors to join our investment board. Shape strategic decisions and enjoy premium returns on large-scale property developments.",
      icon: <Shield className="w-8 h-8" />,
      fileSize: "3.1 MB",
      color: "from-brand-orange to-orange-600",
      features: [
        "Board member benefits and responsibilities",
        "Minimum investment requirements",
        "Voting rights and decision-making power",
        "Quarterly dividend structures",
        "Portfolio diversification strategies",
        "Corporate governance framework",
      ],
      requiresAuth: true,
    },
    {
      id: "investment-guide",
      title: "Real Estate Investment Guide",
      description:
        "Free comprehensive guide covering everything you need to know about investing in Ogun State real estate. Perfect for first-time investors and seasoned professionals alike.",
      icon: <TrendingUp className="w-8 h-8" />,
      fileSize: "1.8 MB",
      color: "from-purple-600 to-pink-600",
      features: [
        "Market trends and analysis",
        "Location selection strategies",
        "Title verification checklist",
        "Land banking fundamentals",
        "Tax implications and benefits",
        "Common pitfalls to avoid",
      ],
    },
    {
      id: "product-knowledge",
      title: "Product Knowledge Handbook",
      description:
        "Detailed information about all our current properties, estates, and investment products. Includes specifications, pricing, payment plans, and investment projections.",
      icon: <FileText className="w-8 h-8" />,
      fileSize: "4.2 MB",
      color: "from-teal-600 to-green-600",
      features: [
        "All property listings and specifications",
        "Detailed location maps",
        "Amenities and features breakdown",
        "Payment plan comparisons",
        "Development timelines",
        "Contact information for each property",
      ],
    },
  ];

  const handleDownload = async (itemId: string, requiresAuth: boolean = false) => {
    if (requiresAuth) {
      // For protected downloads, redirect to contact or show modal
      const message = encodeURIComponent(
        "Hello! I'm interested in downloading the Board Participation Prospectus. Please send me the document and additional information."
      );
      window.open(
        `https://wa.me/2348167601030?text=${message}`,
        "_blank"
      );
      return;
    }

    setDownloading(itemId);

    // Simulate download (in production, this would trigger actual PDF download)
    setTimeout(() => {
      // Create a download link (placeholder - actual PDFs should be uploaded to /public/downloads/)
      const link = document.createElement("a");
      link.href = `/downloads/${itemId}.pdf`;
      link.download = `${itemId}-prospectus.pdf`;
      link.click();

      setDownloading(null);
    }, 1500);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="text-brand-orange font-montserrat font-bold text-sm uppercase tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Resources & Downloads
          </motion.span>
          <motion.h2
            className="font-montserrat font-extrabold text-4xl md:text-5xl text-brand-blue mt-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Investment <span className="text-brand-orange">Prospectus</span> & Guides
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Download comprehensive guides, prospectus documents, and investment
            materials to make informed decisions about your real estate portfolio.
          </motion.p>
        </motion.div>

        {/* Download Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {downloadItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Header with Icon */}
              <div
                className={`bg-gradient-to-br ${item.color} p-8 text-white relative overflow-hidden`}
              >
                <motion.div
                  className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-montserrat font-bold text-2xl mb-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-white/80">
                    <FileText size={16} />
                    <span className="text-sm">PDF Document • {item.fileSize}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Features List */}
                <div className="mb-6">
                  <h4 className="font-montserrat font-bold text-brand-blue mb-3">
                    What's Included:
                  </h4>
                  <ul className="space-y-2">
                    {item.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-gray-700"
                      >
                        <CheckCircle
                          className="flex-shrink-0 text-green-500 mt-0.5"
                          size={16}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Download Button */}
                <motion.button
                  onClick={() => handleDownload(item.id, item.requiresAuth)}
                  disabled={downloading === item.id}
                  className={`w-full py-4 rounded-xl font-montserrat font-bold flex items-center justify-center gap-2 transition-all shadow-lg ${
                    downloading === item.id
                      ? "bg-gray-300 cursor-not-allowed"
                      : `bg-gradient-to-r ${item.color} text-white hover:shadow-xl`
                  }`}
                  whileHover={downloading === item.id ? {} : { scale: 1.02, y: -2 }}
                  whileTap={downloading === item.id ? {} : { scale: 0.98 }}
                >
                  {downloading === item.id ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-3 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      Preparing Download...
                    </>
                  ) : item.requiresAuth ? (
                    <>
                      <Lock size={20} />
                      Request Access
                    </>
                  ) : (
                    <>
                      <Download size={20} />
                      Download PDF
                    </>
                  )}
                </motion.button>

                {item.requiresAuth && (
                  <p className="text-xs text-gray-500 text-center mt-3">
                    This document requires verification. You'll be connected via
                    WhatsApp.
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-3xl p-8 md:p-12">
            <div className="text-center">
              <h3 className="font-montserrat font-bold text-2xl text-brand-blue mb-4">
                Need Custom Investment Information?
              </h3>
              <p className="text-gray-600 mb-6">
                Our team can prepare customized prospectus documents tailored to
                your specific investment goals and requirements.
              </p>
              <motion.a
                href="/contact"
                className="inline-block bg-gradient-to-r from-brand-blue to-blue-800 text-white px-8 py-4 rounded-full font-montserrat font-bold shadow-xl hover:from-brand-orange hover:to-orange-600 transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Our Team
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          className="mt-8 text-center text-sm text-gray-500 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p>
            All prospectus documents are for informational purposes only and do
            not constitute investment advice. Past performance is not indicative
            of future results. Please consult with our investment advisors before
            making any financial decisions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Downloads;
