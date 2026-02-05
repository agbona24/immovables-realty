"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function PrimeHavenEstatePage() {
  const features = [
    "100% dry, table land",
    "Gated and secured environment",
    "Accessible road network",
    "Drainage and sewage system",
    "Electricity access and streetlights",
    "Water system and green recreational spaces",
    "Peaceful and fast-growing residential neighbourhood",
    "Clear land layout suitable for immediate or future development",
  ];

  const whyInvest = [
    {
      title: "Strong Appreciation Value",
      description:
        "Abeokuta continues to expand commercially and residentially, increasing demand for quality housing and verified land. Investors stand to enjoy significant returns within a short period.",
    },
    {
      title: "Fully Verified & Secured Documentation",
      description:
        "Every plot is backed by a Freehold Title, Registered Survey, and a Deed of Assignment—offering full assurance and peace of mind.",
    },
    {
      title: "Ready-to-Build Environment",
      description:
        "The estate boasts solid dry land perfect for immediate construction, eliminating challenges associated with swampy or unstable ground.",
    },
    {
      title: "Flexible & Stress-Free Payment",
      description:
        "With just 40% initial deposit, you are already a landowner. Payment balance can be spread comfortably, allowing everyone to participate.",
    },
    {
      title: "Developed by a Reputable Real Estate Company",
      description:
        "Immovables Realty is trusted for transparency, customer support, and delivering well-structured estates across Ogun State.",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        title="Prime Haven Grove Estate"
        subtitle="A Premium, Secure & Fast-Appreciating Estate in Abeokuta"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Prime Haven Estate", href: "/prime-haven-estate" },
        ]}
      />

      {/* Full-Size Flyer Image Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-brand-blue/10">
              <div className="relative w-full" style={{ minHeight: "800px" }}>
                <Image
                  src="/images/primepriceupdate2026.jpeg"
                  alt="Prime Haven Grove Estate - Full Pricing and Details"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <p className="text-center text-gray-500 text-sm mt-4">
              Click image to view full details and pricing
            </p>
          </motion.div>
        </div>
      </section>

      {/* Estate Overview */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-montserrat font-extrabold text-4xl md:text-5xl text-brand-blue mb-6">
                Estate <span className="text-brand-orange">Overview</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Prime Haven Grove Estate is a modern residential estate designed
                to offer comfort, security, and profitable real-estate investment
                to buyers within and outside Ogun State. Strategically located in
                a fast-developing corridor of Abeokuta, the estate provides
                verified ownership, ready-to-build land, and flexible payment
                plans suitable for investors, families, and diaspora clients.
              </p>
            </motion.div>

            {/* Plot Sizes */}
            <motion.div
              className="bg-gradient-to-br from-brand-blue to-blue-800 rounded-3xl p-8 md:p-12 text-white mb-12"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-montserrat font-bold text-3xl mb-6">
                Plot Sizes Available
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-5xl font-bold mb-2">300</div>
                  <div className="text-blue-100">sqm</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-5xl font-bold mb-2">600</div>
                  <div className="text-blue-100">sqm</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-5xl font-bold mb-2">900</div>
                  <div className="text-blue-100">sqm</div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-blue-100 mb-4">All plots come with:</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <span className="bg-white/20 px-4 py-2 rounded-full">
                    Freehold Title
                  </span>
                  <span className="bg-white/20 px-4 py-2 rounded-full">
                    Registered Survey
                  </span>
                  <span className="bg-white/20 px-4 py-2 rounded-full">
                    Registered Deed of Assignment
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Estate Features */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-montserrat font-bold text-3xl text-brand-blue mb-8 text-center">
                Estate Features & Infrastructure
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-md"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Payment Plan */}
            <motion.div
              className="bg-gradient-to-br from-brand-orange to-orange-600 rounded-3xl p-8 md:p-12 text-white mb-16"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-montserrat font-bold text-3xl mb-6">
                Payment Plan & Pricing
              </h3>
              <p className="text-orange-100 mb-6 text-lg">
                Prime Haven Grove Estate allows clients to secure their preferred
                plot with ease.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-2xl font-bold mb-2">Initial Deposit</div>
                  <div className="text-6xl font-extrabold mb-2">40%</div>
                  <div className="text-orange-100">of the total plot price</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-2xl font-bold mb-2">Balance Payment</div>
                  <div className="text-6xl font-extrabold mb-2">60%</div>
                  <div className="text-orange-100">
                    spread across agreed duration
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Why Invest */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-montserrat font-bold text-3xl text-brand-blue mb-8 text-center">
                Why Invest in Prime Haven Grove Estate?
              </h3>
              <div className="space-y-6">
                {whyInvest.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-brand-blue"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h4 className="font-montserrat font-bold text-xl text-brand-blue mb-3">
                      {index + 1}. {item.title}
                    </h4>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Ideal For */}
            <motion.div
              className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-montserrat font-bold text-3xl text-brand-blue mb-6">
                Ideal For:
              </h3>
              <ul className="space-y-3">
                {[
                  "Families planning to build their homes",
                  "Investors looking for high-yield land banking",
                  "Diaspora clients seeking verified property",
                  "Buyers seeking easy payment plans",
                  "Individuals preparing for future residential projects",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-brand-orange rounded-full" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              className="bg-gradient-to-r from-brand-blue to-blue-800 rounded-3xl p-8 md:p-12 text-white text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-montserrat font-bold text-3xl mb-4">
                Secure Your Plot Today
              </h3>
              <p className="text-blue-100 mb-8 text-lg">
                Book an inspection or speak with our consultants to get started.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://wa.me/2348132833083?text=Hello%20IMMOVABLES%20REALTY%2C%20I%27m%20interested%20in%20Prime%20Haven%20Grove%20Estate.%20Please%20provide%20more%20information%20and%20schedule%20an%20inspection."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    className="bg-brand-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full font-montserrat font-bold shadow-xl flex items-center gap-2"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Phone size={20} />
                    Contact Us via WhatsApp
                  </motion.button>
                </a>
                <Link href="/contact">
                  <motion.button
                    className="bg-white text-brand-blue px-8 py-4 rounded-full font-montserrat font-bold shadow-xl flex items-center gap-2"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail size={20} />
                    Schedule Inspection
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
