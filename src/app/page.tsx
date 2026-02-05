"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Building2, TrendingUp, Users, MessageSquare, ArrowRight } from "lucide-react";
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
import FeaturedEstates from "@/components/FeaturedEstates";

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
      title: "Oke-Ata 2BR Flat",
      price: "₦35M",
      location: "Oke-Ata, Ita Oshin, Abeokuta",
      type: "House for Sale",
      image: "/images/house for sale 2.jpeg",
      badge: "NEW LISTING",
      features: ["2 Bedrooms", "4 Units Available", "Fully Furnished Kitchen", "POP", "Borehole"],
      description: "Fully Completed Standard 2-Bedroom Flat. 60% first deposit required.",
    },
    {
      id: 2,
      title: "Olomore 9-Unit Mixed",
      price: "₦100M",
      location: "Olomore behind SADEEP Filling Station",
      type: "House for Sale",
      image: "/images/land for sale 2.jpeg",
      badge: "NEGOTIABLE",
      features: ["7 Units Room & Parlour", "2 Units 2BR", "Full POP", "Ceramic Tiles", "Borehole"],
      description: "Complete documentation. Features full POP, ceramic tiles, borehole, aluminum step-tiles.",
    },
    {
      id: 3,
      title: "Land For Sale (3 Plots)",
      price: "₦18M",
      location: "Gbokoniyi after Powering Abeokuta",
      type: "Land for Sale",
      image: "/images/land for sale 4.jpeg",
      badge: "HOT DEAL",
      features: ["3 Plots", "Registered Survey", "Deed of Assignment"],
      description: "Title: Registered Survey, Deed of Assignment and Receipt",
    },
    {
      id: 4,
      title: "7 Blocks of Flats - Liberty Estate",
      price: "₦145M",
      location: "Liberty Estate, Laderin, Abeokuta",
      type: "House for Sale",
      image: "/images/house for sale 1.jpeg",
      badge: "PREMIUM",
      features: ["7 x 2BR + 1 x 3BR", "2 Plots", "24/7 Electricity", "Very Secured", "Good Road"],
      description: "Perfect for Short Let/Service Apt. Survey and Deed of Assignment available. Videos on request.",
    },
    {
      id: 5,
      title: "Land For Sale (2 Plots) - GRA",
      price: "₦45M",
      location: "Ibara GRA Extension, Abeokuta",
      type: "Land for Sale",
      image: "/images/land for sale 3.jpeg",
      badge: "PREMIUM",
      features: ["2 Plots", "C of O", "GRA Location", "Registered Survey"],
      description: "Title: C of O, Deed of Assignment, Registered Survey, Receipt",
    },
    {
      id: 6,
      title: "3 Units + Room & Parlour",
      price: "₦37M",
      location: "Ire Akari, Olomore, After Federal Housing Estate",
      type: "House for Sale",
      image: "/images/land for sale 1.jpeg",
      badge: "NEW LISTING",
      features: ["3 Units 2BR", "Room & Parlour", "Deed of Assignment"],
      description: "Title: Deed of Assignment and Receipt",
    },
    {
      id: 7,
      title: "4 Bedroom Flat",
      price: "₦53M",
      location: "Behind Navy School, Adigbe Road, Abeokuta",
      type: "House for Sale",
      image: "/images/house for sale 3.jpeg",
      badge: "NEW LISTING",
      features: ["4 Bedrooms", "Registered Survey", "Building Approval"],
      description: "Title: Registered Survey, Deed of Assignment, Receipt & Building Approval",
    },
    {
      id: 8,
      title: "6 Units 3BR Flats + Car Wash",
      price: "₦100M",
      location: "Olomore, Abeokuta",
      type: "House for Sale",
      image: "/images/house for sale 4.jpeg",
      badge: "PREMIUM",
      features: ["6 Units 3BR", "Functional Car Wash", "Dual Income", "Prime Location"],
      description: "Exceptional mixed-use property with 6 units of 3BR flats and operational car wash. Dual income streams.",
    },
    {
      id: 9,
      title: "Prime Haven Grove - 2BR Semi-Detached",
      price: "₦22M - ₦40M",
      location: "Prime Haven Grove Estate, Abeokuta",
      type: "House for Sale",
      image: "/images/prime haven 2.jpeg",
      badge: "ESTATE LIVING",
      features: ["2 Bedrooms", "Gated Estate", "24/7 Security", "Flexible Payment"],
      description: "Carcass: ₦22M | Fully Completed: ₦40M. Modern semi-detached home in secure estate.",
    },
    {
      id: 10,
      title: "Prime Haven Grove - 3BR Fully Detached",
      price: "₦25M - ₦55M",
      location: "Prime Haven Grove Estate, Abeokuta",
      type: "House for Sale",
      image: "/images/prime haven 4.jpeg",
      badge: "ESTATE LIVING",
      features: ["3 Bedrooms", "Fully Detached", "Master En-Suite", "Private Backyard"],
      description: "Carcass: ₦25M | Fully Completed: ₦55M. Spacious fully detached home for families.",
    },
    {
      id: 11,
      title: "Prime Haven Grove - 4BR + Recreational Centre",
      price: "₦35M - ₦65M",
      location: "Prime Haven Grove Estate, Abeokuta",
      type: "House for Sale",
      image: "/images/prime haven 3.jpeg",
      badge: "LUXURY",
      features: ["4 Bedrooms", "Recreational Centre", "Walk-in Closet", "Family Lounge"],
      description: "Carcass: ₦35M | Fully Completed: ₦65M. Luxury home with recreational centre.",
    },
    {
      id: 12,
      title: "Wura Garden Estate",
      price: "Contact for Pricing",
      location: "Abeokuta, Ogun State",
      type: "Land for Sale",
      image: "/images/wura gardens.jpeg",
      badge: "NEW ESTATE",
      features: ["300-900 sqm plots", "Freehold Title", "40% Deposit", "Dry Land"],
      description: "Serene residential estate with flexible payment. Registered Survey & Deed of Assignment.",
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
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 bg-brand-orange text-white px-6 py-3 rounded-full font-montserrat font-bold mb-6"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                🚀 INVESTMENT OPPORTUNITY
              </motion.div>

              <motion.h2
                className="font-montserrat font-extrabold text-3xl md:text-5xl text-white mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                US$3,000,000 Capital Raise
              </motion.h2>

              <motion.p
                className="text-blue-100 text-lg md:text-xl mb-6 max-w-3xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                A landmark development combining{" "}
                <strong className="text-white">mountain resort</strong>,{" "}
                <strong className="text-white">residential housing</strong>, and{" "}
                <strong className="text-white">integrated agriculture</strong> in
                Ogun State — transforming real estate, tourism, and local food
                supply.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
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
              </motion.div>

              {/* Key Highlights */}
              <motion.div
                className="grid md:grid-cols-3 gap-6 mt-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
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
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Estates Section */}
      <FeaturedEstates />

      {/* 5% Premium Cashback Program Section */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-brand-blue via-blue-900 to-brand-blue">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-10 left-10 w-72 h-72 bg-brand-orange rounded-full opacity-10 blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, 30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 rounded-full opacity-10 blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              y: [0, -40, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          {/* Money/Coins floating animation */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-4xl"
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            >
              💰
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Side - Images */}
            <motion.div
              className="relative order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative flex justify-center items-center min-h-[400px] md:min-h-[550px]">
                {/* Main Image */}
                <motion.div
                  className="relative w-72 h-80 md:w-[400px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl border-4 border-brand-orange z-10"
                  whileHover={{ scale: 1.03, rotate: -1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src="/images/5percent.jpeg"
                    alt="5% Premium Cashback"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </motion.div>
                
                {/* Secondary Image - Offset */}
                <motion.div
                  className="absolute -right-2 -bottom-2 md:-right-6 md:-bottom-6 w-56 h-64 md:w-72 md:h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  whileHover={{ scale: 1.03, rotate: 1 }}
                >
                  <Image
                    src="/images/5percent2.jpeg"
                    alt="5% Cashback Rewards"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </motion.div>

                {/* Floating Badge */}
                <motion.div
                  className="absolute -top-2 -right-2 md:top-2 md:right-2 bg-gradient-to-r from-brand-orange to-orange-600 text-white font-extrabold text-xl md:text-3xl px-4 md:px-6 py-2 md:py-3 rounded-full shadow-xl z-20"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [-5, 5, -5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  5% 💵
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              className="order-1 lg:order-2 text-center lg:text-left"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 bg-brand-orange text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-montserrat font-bold mb-4 md:mb-6 text-sm md:text-base"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                🎉 INTRODUCING NEW PROGRAM
              </motion.div>

              <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl lg:text-5xl text-white mb-4 md:mb-6 leading-tight">
                THE IMMOVABLES REALTY{" "}
                <span className="text-brand-orange">5% PREMIUM</span>{" "}
                <span className="bg-gradient-to-r from-brand-orange to-orange-400 bg-clip-text text-transparent">
                  CASH BACK PROGRAM!
                </span>
              </h2>

              <p className="text-blue-100 text-base md:text-xl mb-6 md:mb-8">
                Now you earn more every time you invest or refer friends and family.
              </p>

              {/* How It Works */}
              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {[
                  { icon: "🏠", text: "Buy property worth ₦3M and above", highlight: "Earn 5% cashback" },
                  { icon: "👥", text: "Refer anyone who buys ₦3M+", highlight: "Earn 5% cashback" },
                  { icon: "💎", text: "Redeem as instant cash, discount, or accumulate for more land", highlight: "" },
                  { icon: "🚀", text: "No limits — the more you buy or refer, the more you earn!", highlight: "" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 md:gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-white/20"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 5, backgroundColor: "rgba(255,255,255,0.15)" }}
                  >
                    <span className="text-xl md:text-2xl flex-shrink-0">{item.icon}</span>
                    <div className="text-left">
                      <span className="text-white text-sm md:text-base">{item.text}</span>
                      {item.highlight && (
                        <span className="text-brand-orange font-bold ml-2 text-sm md:text-base">— {item.highlight}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <Link href="/contact">
                  <motion.button
                    className="bg-brand-orange hover:bg-orange-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-montserrat font-bold shadow-xl flex items-center justify-center gap-2 w-full sm:w-auto"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Start Earning Now
                    <ArrowRight size={20} />
                  </motion.button>
                </Link>
                <Link href="/properties">
                  <motion.button
                    className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white/20 px-6 md:px-8 py-3 md:py-4 rounded-full font-montserrat font-bold flex items-center justify-center gap-2 w-full sm:w-auto"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Browse Properties
                    <ArrowRight size={20} />
                  </motion.button>
                </Link>
              </motion.div>

              {/* Tagline */}
              <motion.p
                className="mt-6 md:mt-8 text-blue-200 italic text-base md:text-lg font-medium"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
              >
                Invest smart. Earn continuously. <span className="text-brand-orange font-bold">Grow with IMMOVABLES REALTY.</span>
              </motion.p>
            </motion.div>
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
            {mobileProperties.slice(0, 9).map((property, index) => (
              <Link key={index} href={`/properties/${property.id}`}>
                <motion.div
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
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
              </Link>
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

      {/* Testimonials */}
      <Testimonials />

      <Footer />

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
