"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, CheckCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import type { Estate } from "@/../sanity/lib/sanity-data";

interface WuraGardenEstateClientProps {
  estate: Estate;
}

export default function WuraGardenEstateClient({ estate }: WuraGardenEstateClientProps) {
  const features = estate.features.length > 0 ? estate.features : [
    "100% dry land suitable for immediate construction",
    "Gated and secured environment",
    "Beautifully planned road network",
    "Drainage and water system",
    "Electricity access and street lighting",
    "Green areas and open spaces for recreation",
    "Peaceful, clean and family-friendly environment",
    "Excellent for residential and investment purposes",
  ];

  const whyInvest = [
    {
      title: "High Appreciation & Low Entry Barrier",
      description:
        "The estate is located in a fast-developing area, giving buyers access to high-value appreciation at an affordable entry point.",
    },
    {
      title: "Verified & Secured Documentation",
      description:
        "Every plot comes with a Freehold Title, Registered Survey, and Registered Deed of Assignment, ensuring ownership protection and peace of mind.",
    },
    {
      title: "Ready-to-Build Land",
      description:
        "The land is dry and stable—no need for extra filling or special foundation. Perfect for immediate building or future development.",
    },
    {
      title: "Family-Centered Community",
      description:
        "Wura Garden Estate is designed to be serene, safe, and friendly—making it ideal for raising families or building rental properties.",
    },
    {
      title: "Flexible Payment & Smooth Allocation",
      description:
        "The 40% initial deposit gives buyers immediate assurance, with flexible plans that accommodate all budgets.",
    },
    {
      title: "Trusted Developer",
      description:
        "Developed by Immovables Realty, known for its integrity, transparency, and commitment to delivering well-structured estates.",
    },
  ];

  return (
    <main className="min-h-screen">
      <PageHero
        title={estate.name}
        subtitle={estate.tagline}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: estate.name, href: "/wura-garden-estate" },
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
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-brand-orange/10">
              <div className="relative w-full" style={{ minHeight: "800px" }}>
                <Image
                  src={estate.image}
                  alt={`${estate.name} - Full Pricing and Details`}
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
              <h2 className="font-montserrat font-extrabold text-4xl md:text-5xl text-brand-orange mb-6">
                Estate <span className="text-brand-blue">Overview</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {estate.description}
              </p>
            </motion.div>

            {/* Plot Sizes */}
            {estate.priceList && estate.priceList.length > 0 && (
              <motion.div
                className="bg-gradient-to-br from-brand-orange to-orange-600 rounded-3xl p-8 md:p-12 text-white mb-12"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-montserrat font-bold text-3xl mb-6">
                  Plot Sizes Available
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {estate.priceList.map((plot, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                      <div className="text-5xl font-bold mb-2">{plot.plotSize}</div>
                      <div className="text-orange-100 mb-3">sqm</div>
                      <div className="text-2xl font-bold text-white">{plot.price}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <p className="text-orange-100 mb-4">All plots come with:</p>
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
            )}

            {/* Estate Features */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-montserrat font-bold text-3xl text-brand-orange mb-8 text-center">
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
            {estate.paymentPlans && estate.paymentPlans.length > 0 && (
              <motion.div
                className="bg-gradient-to-br from-brand-blue to-blue-800 rounded-3xl p-8 md:p-12 text-white mb-16"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-montserrat font-bold text-3xl mb-6">
                  Payment Plan & Pricing
                </h3>
                <p className="text-blue-100 mb-6 text-lg">
                  {estate.name} makes land ownership easy and achievable for everyone.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {estate.paymentPlans.map((plan, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <div className="text-2xl font-bold mb-2">{plan.name}</div>
                      <div className="text-6xl font-extrabold mb-2">{plan.deposit}</div>
                      <div className="text-blue-100 mb-3">{plan.duration}</div>
                      <div className="text-sm text-blue-50">{plan.details}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Why Invest */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-montserrat font-bold text-3xl text-brand-orange mb-8 text-center">
                Why Invest in {estate.name}?
              </h3>
              <div className="space-y-6">
                {whyInvest.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-brand-orange"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h4 className="font-montserrat font-bold text-xl text-brand-orange mb-3">
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
              <h3 className="font-montserrat font-bold text-3xl text-brand-orange mb-6">
                Ideal For:
              </h3>
              <ul className="space-y-3">
                {[
                  "Families seeking a peaceful residential neighbourhood",
                  "Investors looking forigh-value land appreciation",
                  "Diaspora clients seeking verified property",
                  "Anyone seeking affordable payment plans",
                  "Individuals preparing for future building projects",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-brand-blue rounded-full" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              className="bg-gradient-to-r from-brand-orange to-orange-600 rounded-3xl p-8 md:p-12 text-white text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-montserrat font-bold text-3xl mb-4">
                Secure Your Plot Today
              </h3>
              <p className="text-orange-100 mb-8 text-lg">
                Book an inspection or speak with our consultants to get started.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href={`https://wa.me/2348132833083?text=Hello%20IMMOVABLES%20REALTY%2C%20I%27m%20interested%20in%20${encodeURIComponent(estate.name)}.%20Please%20provide%20more%20information%20and%20schedule%20an%20inspection.`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    className="bg-brand-blue hover:bg-blue-700 text-white px-8 py-4 rounded-full font-montserrat font-bold shadow-xl flex items-center gap-2"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Phone size={20} />
                    Contact Us via WhatsApp
                  </motion.button>
                </a>
                <Link href="/contact">
                  <motion.button
                    className="bg-white text-brand-orange px-8 py-4 rounded-full font-montserrat font-bold shadow-xl flex items-center gap-2"
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
    </main>
  );
}
