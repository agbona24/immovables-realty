"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Home, Shield, TrendingUp } from "lucide-react";

interface Estate {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
  badge: string;
  color: string;
}

const fallbackEstates: Estate[] = [
  {
    id: "prime-haven-estate",
    name: "Prime Haven Grove Estate",
    tagline: "A Premium, Secure & Fast-Appreciating Estate",
    description:
      "Modern residential estate offering comfort, security, and profitable investment. Strategically located in a fast-developing corridor of Abeokuta with verified ownership and flexible payment plans.",
    image: "/images/primepriceupdate2026.jpeg",
    features: [
      "Freehold Title",
      "40% Deposit + 60% Balance",
      "300/600/900 sqm Plots",
      "100% Dry Table Land",
    ],
    badge: "PREMIUM ESTATE",
    color: "from-brand-blue to-blue-800",
  },
  {
    id: "wura-garden-estate",
    name: "Wura Garden Estate",
    tagline: "A Serene, Secure & Fast-Developing Residential Estate",
    description:
      "Beautifully planned residential estate created for comfort, security, and long-term investment value. Located in a peaceful and fast-growing area of Abeokuta with verified documentation.",
    image: "/images/wurapriceupdate2026.jpeg",
    features: [
      "Registered Survey",
      "Flexible Payment Plan",
      "Gated & Secured",
      "Family-Friendly Community",
    ],
    badge: "SERENE LIVING",
    color: "from-brand-orange to-orange-600",
  },
];

interface FeaturedEstatesProps {
  estates?: Estate[];
}

const FeaturedEstates = ({ estates: propEstates }: FeaturedEstatesProps) => {
  const estates = propEstates || fallbackEstates;

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-brand-orange rounded-full opacity-5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
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
            Our Flagship Estates
          </motion.span>
          <motion.h2
            className="font-montserrat font-extrabold text-4xl md:text-5xl text-brand-blue mt-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Prime <span className="text-brand-orange">Investment</span>{" "}
            Opportunities
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Discover our most sought-after estates offering exceptional value,
            security, and growth potential
          </motion.p>
        </motion.div>

        {/* Featured Estates Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {estates.map((estate, index) => (
            <motion.div
              key={estate.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Link href={`/${estate.id}`}>
                <motion.div
                  className="group relative bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer"
                  whileHover={{ y: -8 }}
                >
                  {/* Badge */}
                  <div className="absolute top-6 left-6 z-20">
                    <motion.div
                      className={`bg-gradient-to-r ${estate.color} text-white px-4 py-2 rounded-full font-montserrat font-bold text-sm shadow-lg`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {estate.badge}
                    </motion.div>
                  </div>

                  {/* Image */}
                  <div className="relative h-[500px] overflow-hidden">
                    <Image
                      src={estate.image}
                      alt={estate.name}
                      fill
                      className="object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                    {/* Overlay Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h3 className="font-montserrat font-extrabold text-3xl text-white mb-2">
                        {estate.name}
                      </h3>
                      <p className="text-blue-100 text-sm font-semibold">
                        {estate.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {estate.description}
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {estate.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm"
                        >
                          <div
                            className={`w-2 h-2 rounded-full bg-gradient-to-r ${estate.color}`}
                          />
                          <span className="text-gray-700 font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <motion.div
                      className={`bg-gradient-to-r ${estate.color} text-white px-6 py-4 rounded-xl font-montserrat font-bold flex items-center justify-between group-hover:shadow-xl transition-all`}
                      whileHover={{ x: 5 }}
                    >
                      <span>Explore Estate</span>
                      <ArrowRight
                        size={20}
                        className="transform group-hover:translate-x-2 transition-transform"
                      />
                    </motion.div>
                  </div>

                  {/* Animated Border */}
                  <motion.div
                    className={`absolute inset-0 border-4 border-transparent group-hover:border-brand-orange rounded-3xl transition-colors duration-500 pointer-events-none`}
                  />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-gray-600 mb-6">
            Ready to secure your plot in one of our premium estates?
          </p>
          <Link href="/properties">
            <motion.button
              className="bg-gradient-to-r from-brand-blue to-blue-800 text-white px-8 py-4 rounded-full font-montserrat font-bold shadow-xl hover:from-brand-orange hover:to-orange-600 transition-all inline-flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Properties
              <ArrowRight size={20} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedEstates;
