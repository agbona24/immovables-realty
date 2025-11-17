"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Maximize, TrendingUp, ArrowRight } from "lucide-react";

const Properties = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const properties = [
    {
      title: "Lekki Paradise Estate",
      location: "Lekki, Lagos",
      size: "500sqm",
      price: "₦5,000,000",
      roi: "25% Annual ROI",
      status: "Available",
      features: ["Gated Estate", "24/7 Security", "Good Roads"],
      color: "from-blue-600 to-brand-blue",
    },
    {
      title: "Ibeju-Lekki Premium Plots",
      location: "Ibeju-Lekki, Lagos",
      size: "600sqm",
      price: "₦3,500,000",
      roi: "30% Annual ROI",
      status: "Hot Deal",
      features: ["Free Survey", "Installment Available", "Beach Access"],
      color: "from-brand-orange to-orange-600",
    },
    {
      title: "Epe Waterfront Estate",
      location: "Epe, Lagos",
      size: "450sqm",
      price: "₦2,800,000",
      roi: "20% Annual ROI",
      status: "Limited Units",
      features: ["Waterfront View", "Developed Area", "Title: C of O"],
      color: "from-indigo-600 to-purple-600",
    },
    {
      title: "Ajah Garden City",
      location: "Ajah, Lagos",
      size: "550sqm",
      price: "₦4,200,000",
      roi: "28% Annual ROI",
      status: "New",
      features: ["Gated Community", "Recreational Facilities", "Power Supply"],
      color: "from-teal-600 to-green-600",
    },
    {
      title: "Ikorodu Executive Homes",
      location: "Ikorodu, Lagos",
      size: "400sqm",
      price: "₦2,500,000",
      roi: "22% Annual ROI",
      status: "Available",
      features: ["Strategic Location", "Close to Major Roads", "Growing Area"],
      color: "from-rose-600 to-pink-600",
    },
    {
      title: "Badagry Coastal Residences",
      location: "Badagry, Lagos",
      size: "700sqm",
      price: "₦3,800,000",
      roi: "27% Annual ROI",
      status: "Featured",
      features: ["Coastal View", "Tourism Hub", "Investment Hotspot"],
      color: "from-amber-600 to-yellow-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="properties"
      className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 right-0 w-72 h-72 bg-brand-blue rounded-full opacity-5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="text-brand-orange font-montserrat font-bold text-sm uppercase tracking-wider"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            Featured Properties
          </motion.span>
          <motion.h2
            className="font-montserrat font-extrabold text-4xl md:text-5xl text-brand-blue mt-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
          >
            Explore Our <span className="text-brand-orange">Premium Listings</span>
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 }}
          >
            Discover prime properties in strategic locations across Lagos with
            excellent growth potential and affordable payment plans.
          </motion.p>
        </motion.div>

        {/* Properties Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {properties.map((property, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
              whileHover={{ y: -10 }}
            >
              {/* Image/Gradient Header */}
              <div
                className={`h-48 bg-gradient-to-br ${property.color} relative overflow-hidden`}
              >
                {/* Animated Pattern */}
                <motion.div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Status Badge */}
                <motion.div
                  className="absolute top-4 right-4 bg-white text-brand-blue px-4 py-1 rounded-full text-sm font-bold shadow-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  {property.status}
                </motion.div>

                {/* ROI Badge */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-green-600 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <TrendingUp size={14} />
                  {property.roi}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-montserrat font-bold text-xl text-brand-blue mb-2">
                  {property.title}
                </h3>

                {/* Location */}
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <MapPin size={16} className="text-brand-orange" />
                  <span className="text-sm">{property.location}</span>
                </div>

                {/* Size & Price */}
                <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-200">
                  <div>
                    <div className="text-xs text-gray-500">Size</div>
                    <div className="font-bold text-brand-blue flex items-center gap-1">
                      <Maximize size={14} />
                      {property.size}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500">Price</div>
                    <div className="font-bold text-brand-orange text-lg">
                      {property.price}
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {property.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center gap-2 text-sm text-gray-600"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                    >
                      <div className="w-1.5 h-1.5 bg-brand-orange rounded-full"></div>
                      {feature}
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  className="w-full bg-gradient-to-r from-brand-blue to-blue-800 text-white py-3 rounded-full font-montserrat font-bold flex items-center justify-center gap-2 group-hover:from-brand-orange group-hover:to-orange-600 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Details
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition"
                  />
                </motion.button>
              </div>

              {/* Hover Border Effect */}
              <motion.div
                className="absolute inset-0 border-2 border-brand-orange rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                initial={{ scale: 0.95 }}
                whileHover={{ scale: 1 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.2 }}
        >
          <motion.button
            className="bg-white text-brand-blue border-2 border-brand-blue px-10 py-4 rounded-full font-montserrat font-bold text-lg hover:bg-brand-blue hover:text-white transition shadow-xl"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Properties
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Properties;
