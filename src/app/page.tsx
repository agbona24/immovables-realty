"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Building2, TrendingUp, Users, MessageSquare, ArrowRight, Heart, Scale, Map, Calculator, Wrench } from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StructuredData from "@/components/StructuredData";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import MobileHero from "@/components/MobileHero";
import MobileBottomNav from "@/components/MobileBottomNav";
import MobilePropertyCards from "@/components/MobilePropertyCards";
import MobileFAB from "@/components/MobileFAB";
import PullToRefresh from "@/components/PullToRefresh";
import ComparisonBar from "@/components/ComparisonBar";

export default function Home() {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleRefresh = async () => {
    // Simulate refresh
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setRefreshKey((prev) => prev + 1);
  };

  const mobileProperties = [
    {
      id: 1,
      title: "3 Units of 2 Bedroom Flat + Room & Parlour",
      price: "₦37M",
      location: "Asabi Olomore, Abeokuta",
      type: "House for Sale",
      image: "/images/properties/house-sale-1.jpg",
      badge: "NEW LISTING",
      features: ["3 Units", "2 Bedrooms", "Modern"],
    },
    {
      id: 2,
      title: "Massive Building for Sale",
      price: "₦75M",
      location: "Abeokuta, Ogun State",
      type: "House for Sale",
      image: "/images/properties/house-sale-2.jpg",
      badge: "NEW LISTING",
      features: ["Commercial", "Prime Location"],
    },
    {
      id: 3,
      title: "Prime Land for Sale",
      price: "₦45M",
      location: "Rykra GRA Extension, Abeokuta",
      type: "Land for Sale",
      image: "/images/properties/land-sale-3.jpg",
      badge: "HOT DEAL",
      features: ["GRA", "Investment"],
    },
    {
      id: 4,
      title: "Prime Haven Grove Estate",
      price: "₦4.5M",
      location: "Abeokuta, Ogun State",
      type: "Estate",
      image: "/images/properties/prime-haven-grove.jpg",
      features: ["Estate", "Affordable"],
    },
    {
      id: 5,
      title: "Wura Gardens Estate",
      price: "₦3.2M",
      location: "Abeokuta, Ogun State",
      type: "Estate",
      image: "/images/properties/wura-gardens.jpg",
      features: ["Garden", "Family Home"],
    },
  ];

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
    <PullToRefresh onRefresh={handleRefresh}>
      <main className="min-h-screen" key={refreshKey}>
        <StructuredData />
        <AnnouncementBanner />
        <Navbar />

        {/* Desktop Hero - Hidden on Mobile */}
        <div className="hidden md:block">
          <Hero />
        </div>

        {/* Mobile Hero - Only visible on Mobile */}
        <MobileHero />

      {/* Investment Opportunity Banner */}
      <section className="relative bg-gradient-to-br from-brand-blue via-blue-900 to-brand-blue py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/Smart Investors.jpeg"
            alt="Smart Investors"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/90 to-blue-900/80" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-brand-orange text-white px-6 py-3 rounded-full font-montserrat font-bold mb-6">
                🚀 INVESTMENT OPPORTUNITY
              </div>

              <h2 className="font-montserrat font-extrabold text-3xl md:text-5xl text-white mb-4">
                US$3,000,000 Capital Raise
              </h2>

              <p className="text-blue-100 text-lg md:text-xl mb-6 max-w-3xl">
                A landmark development combining{" "}
                <strong className="text-white">mountain resort</strong>,{" "}
                <strong className="text-white">residential housing</strong>, and{" "}
                <strong className="text-white">integrated agriculture</strong> in
                Ogun State — transforming real estate, tourism, and local food
                supply.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/investment-opportunity">
                  <motion.button
                    className="bg-brand-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full font-montserrat font-bold shadow-xl flex items-center gap-2"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                    <ArrowRight size={20} />
                  </motion.button>
                </Link>

                <Link href="/downloads">
                  <motion.button
                    className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white/20 px-8 py-4 rounded-full font-montserrat font-bold flex items-center gap-2"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Download Prospectus
                    <ArrowRight size={20} />
                  </motion.button>
                </Link>
              </div>

              {/* Key Highlights */}
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                {[
                  {
                    label: "Mountain Resort",
                    value: "Luxury eco-resort with mountain views",
                  },
                  {
                    label: "Estate Expansion",
                    value: "Prime Haven & Wura Garden",
                  },
                  {
                    label: "Immovables Farm",
                    value: "Integrated agriculture supply",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4"
                  >
                    <div className="text-brand-orange font-bold text-sm mb-1">
                      {item.label}
                    </div>
                    <div className="text-white text-sm">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

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
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-montserrat font-extrabold text-4xl md:text-5xl text-brand-blue mb-6">
              Explore Our <span className="text-brand-orange">Services</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Your trusted partner for real estate investment in Ogun State
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index}>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties Preview */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Mobile Property Cards - Only visible on Mobile */}
        <MobilePropertyCards properties={mobileProperties} />

        {/* Desktop Version - Hidden on Mobile */}
        <div className="hidden md:block">
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
                title: "3 Units of 2 Bedroom Flat + Room & Parlour",
                price: "₦37M",
                location: "Asabi Olomore, Abeokuta",
                type: "House for Sale",
                image: "/images/properties/house-sale-1.jpg",
                badge: "NEW LISTING",
              },
              {
                title: "Massive Building for Sale",
                price: "₦75M",
                location: "Abeokuta, Ogun State",
                type: "House for Sale",
                image: "/images/properties/house-sale-2.jpg",
                badge: "NEW LISTING",
              },
              {
                title: "Prime Land for Sale",
                price: "₦45M",
                location: "Rykra GRA Extension, Abeokuta",
                type: "Land for Sale",
                image: "/images/properties/land-sale-3.jpg",
                badge: "HOT DEAL",
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
                <div className="relative h-48 bg-gray-200 overflow-hidden">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                  {property.badge && (
                    <div className="absolute top-4 right-4 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                      {property.badge}
                    </div>
                  )}
                </div>
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

      {/* Advanced Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-montserrat font-extrabold text-4xl md:text-5xl text-brand-blue mb-6">
              Advanced <span className="text-brand-orange">Features</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Powerful tools to help you find, compare, and manage your dream property
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Favorites Feature */}
            <Link href="/favorites">
              <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-red-500">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  <Heart size={28} />
                </div>
                <h3 className="font-montserrat font-bold text-xl text-brand-blue mb-2 group-hover:text-red-500 transition">
                  My Favorites
                </h3>
                <p className="text-gray-600 text-sm">
                  Save and organize your favorite properties in one place
                </p>
              </div>
            </Link>

            {/* Compare Feature */}
            <Link href="/compare">
              <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-purple-500">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  <Scale size={28} />
                </div>
                <h3 className="font-montserrat font-bold text-xl text-brand-blue mb-2 group-hover:text-purple-500 transition">
                  Compare Properties
                </h3>
                <p className="text-gray-600 text-sm">
                  Compare up to 3 properties side-by-side to make informed decisions
                </p>
              </div>
            </Link>

            {/* Map View Feature */}
            <Link href="/map">
              <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-green-500">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  <Map size={28} />
                </div>
                <h3 className="font-montserrat font-bold text-xl text-brand-blue mb-2 group-hover:text-green-500 transition">
                  Map View
                </h3>
                <p className="text-gray-600 text-sm">
                  Explore all properties on an interactive map with locations
                </p>
              </div>
            </Link>

            {/* Tools & Calculators */}
            <Link href="/tools">
              <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-brand-orange">
                <div className="w-14 h-14 bg-gradient-to-br from-brand-orange to-orange-600 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  <Wrench size={28} />
                </div>
                <h3 className="font-montserrat font-bold text-xl text-brand-blue mb-2 group-hover:text-brand-orange transition">
                  Tools & Calculators
                </h3>
                <p className="text-gray-600 text-sm">
                  Unit converter, mortgage calculator, and more helpful tools
                </p>
              </div>
            </Link>
          </div>

          {/* Feature Highlights */}
          <div className="mt-12 bg-gradient-to-r from-brand-blue to-blue-800 rounded-3xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-montserrat font-bold mb-2">360°</div>
                <div className="text-blue-200">Virtual Tours Available</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-montserrat font-bold mb-2">📹</div>
                <div className="text-blue-200">Video Property Tours</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-montserrat font-bold mb-2">💰</div>
                <div className="text-blue-200">Mortgage Calculator</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      <Footer />

      {/* Comparison Bar */}
      <ComparisonBar />

      {/* Desktop WhatsApp Button - Hidden on Mobile */}
      <div className="hidden md:block">
        <WhatsAppButton />
      </div>

      {/* Mobile FAB - Only visible on Mobile */}
      <MobileFAB />

      {/* Mobile Bottom Navigation - Only visible on Mobile */}
      <MobileBottomNav />
    </main>
    </PullToRefresh>
  );
}
