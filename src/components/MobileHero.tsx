"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Sparkles, TrendingUp, MapPin, ArrowRight } from "lucide-react";

const MobileHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 150]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  const slides = [
    {
      image: "/images/Smart Investors.jpeg",
      title: "Smart Investments",
      subtitle: "Your Gateway to Premium Properties",
      cta: "Explore Now",
      color: "from-blue-600 to-brand-blue",
    },
    {
      image: "/images/properties/house-sale-1.jpg",
      title: "Dream Homes",
      subtitle: "Find Your Perfect Property",
      cta: "View Houses",
      color: "from-brand-orange to-orange-600",
    },
    {
      image: "/images/properties/land-sale-1.jpg",
      title: "Prime Land",
      subtitle: "Invest in Your Future",
      cta: "Browse Lands",
      color: "from-purple-600 to-indigo-600",
    },
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="md:hidden relative">
      {/* Full Screen Hero */}
      <motion.div
        className="relative h-[85vh] w-full overflow-hidden"
        style={{ y }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            initial={isMounted ? { opacity: 0, scale: 1.1 } : false}
            animate={isMounted ? { opacity: 1, scale: 1 } : {}}
            exit={isMounted ? { opacity: 0, scale: 0.9 } : {}}
            transition={{ duration: 0.7 }}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                fill
                className="object-cover"
                priority
              />
              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              <div className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].color} opacity-30 mix-blend-multiply`} />
            </div>

            {/* Content */}
            <motion.div
              className="absolute inset-0 flex flex-col justify-end p-6 pb-12"
              style={{ opacity }}
            >
              {/* Floating Badge */}
              <motion.div
                className="mb-4"
                initial={isMounted ? { y: 20, opacity: 0 } : false}
                animate={isMounted ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.3 }}
              >
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 px-4 py-2 rounded-full">
                  <Sparkles size={16} className="text-brand-orange" />
                  <span className="text-white text-sm font-semibold">
                    Premium Properties
                  </span>
                </div>
              </motion.div>

              {/* Title */}
              <motion.h1
                className="font-montserrat font-extrabold text-5xl text-white mb-3 leading-tight"
                initial={isMounted ? { y: 30, opacity: 0 } : false}
                animate={isMounted ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
              >
                {slides[currentSlide].title}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className="text-white/90 text-lg mb-6"
                initial={isMounted ? { y: 30, opacity: 0 } : false}
                animate={isMounted ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
              >
                {slides[currentSlide].subtitle}
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={isMounted ? { y: 30, opacity: 0 } : false}
                animate={isMounted ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
              >
                <Link href="/properties">
                  <motion.button
                    className="w-full bg-gradient-to-r from-brand-orange to-orange-600 text-white py-4 rounded-2xl font-bold text-lg shadow-2xl flex items-center justify-center gap-2"
                    whileTap={{ scale: 0.95 }}
                  >
                    {slides[currentSlide].cta}
                    <ArrowRight size={24} />
                  </motion.button>
                </Link>
              </motion.div>

              {/* Slide Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {slides.map((_, index) => (
                  <motion.button
                    key={index}
                    className={`h-1 rounded-full transition-all ${
                      index === currentSlide
                        ? "w-8 bg-white"
                        : "w-1 bg-white/40"
                    }`}
                    onClick={() => setCurrentSlide(index)}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ opacity }}
        >
          <ChevronDown size={32} className="text-white/60" />
        </motion.div>
      </motion.div>

      {/* Quick Stats Bar */}
      <motion.div
        className="relative -mt-8 mx-4 bg-white rounded-3xl shadow-2xl p-4 z-10"
        initial={isMounted ? { y: 50, opacity: 0 } : false}
        animate={isMounted ? { y: 0, opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
      >
        <div className="grid grid-cols-3 divide-x divide-gray-200">
          <div className="text-center px-2">
            <motion.div
              className="font-montserrat font-bold text-2xl text-brand-blue"
              initial={isMounted ? { scale: 0 } : false}
              animate={isMounted ? { scale: 1 } : {}}
              transition={{ delay: 1, type: "spring" }}
            >
              500+
            </motion.div>
            <div className="text-xs text-gray-600 mt-1">Properties</div>
          </div>
          <div className="text-center px-2">
            <motion.div
              className="font-montserrat font-bold text-2xl text-brand-orange"
              initial={isMounted ? { scale: 0 } : false}
              animate={isMounted ? { scale: 1 } : {}}
              transition={{ delay: 1.1, type: "spring" }}
            >
              1000+
            </motion.div>
            <div className="text-xs text-gray-600 mt-1">Happy Clients</div>
          </div>
          <div className="text-center px-2">
            <motion.div
              className="font-montserrat font-bold text-2xl text-green-600"
              initial={isMounted ? { scale: 0 } : false}
              animate={isMounted ? { scale: 1 } : {}}
              transition={{ delay: 1.2, type: "spring" }}
            >
              95%
            </motion.div>
            <div className="text-xs text-gray-600 mt-1">Satisfaction</div>
          </div>
        </div>
      </motion.div>

      {/* Featured Badge */}
      <motion.div
        className="mx-4 mt-4"
        initial={isMounted ? { y: 30, opacity: 0 } : false}
        animate={isMounted ? { y: 0, opacity: 1 } : {}}
        transition={{ delay: 1 }}
      >
        <Link href="/investment-opportunity">
          <motion.div
            className="bg-gradient-to-r from-brand-blue via-blue-700 to-brand-blue p-4 rounded-2xl shadow-xl relative overflow-hidden"
            whileTap={{ scale: 0.98 }}
          >
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />

            <div className="relative flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp size={20} className="text-brand-orange" />
                  <span className="text-brand-orange text-xs font-bold uppercase tracking-wider">
                    Hot Deal
                  </span>
                </div>
                <h3 className="font-montserrat font-bold text-white text-lg mb-1">
                  $3M Investment Opportunity
                </h3>
                <p className="text-blue-100 text-xs">
                  Mountain resort & estate expansion
                </p>
              </div>
              <ArrowRight className="text-white" size={24} />
            </div>
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
};

export default MobileHero;
