"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Building2, TrendingUp, Users, MessageSquare, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StructuredData from "@/components/StructuredData";

export default function Home() {
  const features = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Investment Properties",
      description: "Explore our curated selection of high-value properties across Ogun State.",
      link: "/properties",
      color: "from-blue-600 to-brand-blue",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Why Choose Us",
      description: "Discover our proven track record and expert advisory services.",
      link: "/why-us",
      color: "from-brand-orange to-orange-600",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "About Us",
      description: "Learn about our mission to make real estate investment accessible.",
      link: "/about",
      color: "from-indigo-600 to-purple-600",
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Get In Touch",
      description: "Ready to invest? Contact our expert advisors today.",
      link: "/contact",
      color: "from-teal-600 to-green-600",
    },
  ];

  return (
    <main className="min-h-screen">
      <StructuredData />
      <Navbar />
      <Hero />

      {/* Quick Links Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <motion.div
          className="absolute top-10 right-10 w-64 h-64 bg-brand-blue rounded-full opacity-5 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-72 h-72 bg-brand-orange rounded-full opacity-5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-montserrat font-extrabold text-4xl md:text-5xl text-brand-blue mb-6">
              Explore Our <span className="text-brand-orange">Services</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Your trusted partner for real estate investment in Ogun State
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={feature.link}>
                  <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full cursor-pointer border-2 border-transparent hover:border-brand-orange">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}
                    >
                      {feature.icon}
                    </div>
                    <h3 className="font-montserrat font-bold text-xl text-brand-blue mb-3 group-hover:text-brand-orange transition">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <div className="flex items-center gap-2 text-brand-orange font-semibold group-hover:gap-3 transition-all">
                      Learn More
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties Preview */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Animated Circles */}
        <motion.div
          className="absolute top-20 left-1/4 w-32 h-32 border-4 border-brand-blue opacity-10 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-24 h-24 border-4 border-brand-orange opacity-15"
          animate={{
            rotate: [0, -360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-montserrat font-extrabold text-4xl md:text-5xl text-brand-blue mb-6">
              Featured <span className="text-brand-orange">Properties</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Discover our hand-picked investment opportunities across Ogun State
            </p>
            <Link href="/properties">
              <motion.button
                className="bg-gradient-to-r from-brand-blue to-blue-800 text-white px-8 py-4 rounded-full font-montserrat font-bold shadow-xl hover:from-brand-orange hover:to-orange-600 transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Properties
              </motion.button>
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Prime Haven Grove Estate",
                price: "₦4.5M",
                location: "Abeokuta, Ogun State",
                type: "Estate",
              },
              {
                title: "Wura Gardens Estate",
                price: "₦3.2M",
                location: "Abeokuta, Ogun State",
                type: "Estate",
              },
              {
                title: "Prime Haven 4BR Detached",
                price: "₦45M",
                location: "Abeokuta, Ogun State",
                type: "House",
              },
            ].map((property, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="h-48 bg-gradient-to-br from-brand-blue to-blue-800" />
                <div className="p-6">
                  <div className="text-xs font-bold text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full inline-block mb-3">
                    {property.type}
                  </div>
                  <h3 className="font-montserrat font-bold text-lg text-brand-blue mb-2">
                    {property.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{property.location}</p>
                  <div className="text-brand-orange font-bold text-2xl">
                    {property.price}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-montserrat font-extrabold text-4xl md:text-5xl text-brand-blue mb-6">
              Investment <span className="text-brand-orange">Insights</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Stay informed with the latest real estate market trends and investment tips
            </p>
            <Link href="/blog">
              <motion.button
                className="bg-gradient-to-r from-brand-orange to-orange-600 text-white px-8 py-4 rounded-full font-montserrat font-bold shadow-xl hover:from-brand-blue hover:to-blue-800 transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Read Our Blog
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
