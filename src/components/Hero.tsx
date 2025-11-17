"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Home, TrendingUp } from "lucide-react";

const Hero = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const scaleIn = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.5 },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-brand-blue via-blue-800 to-brand-blue">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Floating Shapes */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-brand-orange rounded-full opacity-20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full opacity-10 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-white"
          >
            <motion.div variants={fadeInUp} className="inline-block mb-4">
              <span className="bg-brand-orange text-white px-4 py-2 rounded-full text-sm font-semibold">
                🏆 Trusted Real Estate Company
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-montserrat font-extrabold text-5xl md:text-6xl lg:text-7xl leading-tight mb-6"
            >
              Smart Real Estate Solutions:{" "}
              <span className="text-brand-orange">Invest, Buy, or Sell</span> with Confidence
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl mb-8 text-gray-200 font-allura"
            >
              Your trusted partner for all things real estate.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-lg mb-10 text-gray-300 max-w-xl"
            >
              We connect you with exceptional real estate opportunities designed to grow your wealth.
              Make informed, strategic investment decisions with our expert guidance.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <motion.a
                href="#properties"
                className="bg-brand-orange text-white px-8 py-4 rounded-full font-montserrat font-bold text-lg flex items-center gap-2 hover:bg-white hover:text-brand-orange transition shadow-2xl"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Investments
                <ArrowRight className="group-hover:translate-x-1 transition" />
              </motion.a>
              <motion.a
                href="#contact"
                className="bg-white text-brand-blue px-8 py-4 rounded-full font-montserrat font-bold text-lg hover:bg-brand-orange hover:text-white transition shadow-2xl"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-3 gap-6 mt-16"
            >
              <div className="text-center">
                <motion.div
                  className="text-4xl font-montserrat font-bold text-brand-orange"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  500+
                </motion.div>
                <div className="text-sm text-gray-300 mt-1">Properties Sold</div>
              </div>
              <div className="text-center">
                <motion.div
                  className="text-4xl font-montserrat font-bold text-brand-orange"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                >
                  1000+
                </motion.div>
                <div className="text-sm text-gray-300 mt-1">Happy Clients</div>
              </div>
              <div className="text-center">
                <motion.div
                  className="text-4xl font-montserrat font-bold text-brand-orange"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.0, duration: 0.5 }}
                >
                  10+
                </motion.div>
                <div className="text-sm text-gray-300 mt-1">Years Experience</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Feature Cards */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="relative hidden lg:block"
          >
            {/* Main Card */}
            <motion.div
              variants={scaleIn}
              className="bg-white rounded-3xl p-8 shadow-2xl relative z-10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-video bg-gradient-to-br from-brand-blue to-blue-800 rounded-2xl mb-6 flex items-center justify-center">
                <Home size={80} className="text-white opacity-50" />
              </div>
              <h3 className="font-montserrat font-bold text-2xl mb-3 text-brand-blue">
                Premium Locations
              </h3>
              <p className="text-gray-600 mb-4">
                Strategically located properties in prime areas with excellent
                growth potential and accessibility.
              </p>
              <motion.button
                className="text-brand-orange font-semibold flex items-center gap-2"
                whileHover={{ x: 5 }}
              >
                Learn More <ArrowRight size={18} />
              </motion.button>
            </motion.div>

            {/* Floating Card 1 */}
            <motion.div
              initial={{ opacity: 0, x: 50, y: -50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -top-8 -right-8 bg-brand-orange text-white rounded-2xl p-6 shadow-xl z-20"
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <MapPin size={32} className="mb-2" />
              <div className="font-montserrat font-bold text-xl">50+</div>
              <div className="text-sm opacity-90">Locations</div>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div
              initial={{ opacity: 0, x: -50, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl z-20"
              whileHover={{ scale: 1.05, rotate: -2 }}
            >
              <TrendingUp size={32} className="text-brand-blue mb-2" />
              <div className="font-montserrat font-bold text-xl text-brand-blue">
                High ROI
              </div>
              <div className="text-sm text-gray-600">Investment Returns</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-24 fill-white"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
