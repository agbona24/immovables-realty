"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Maximize, TrendingUp, ArrowRight } from "lucide-react";
import Image from "next/image";

const Properties = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const properties = [
    {
      title: "Prime Haven Grove Estate",
      location: "Abeokuta, Ogun State",
      size: "Plot",
      price: "Price Updated",
      roi: "High Growth Area",
      status: "Hot Deal",
      features: ["Fastest-Growing Estate", "Prime Location", "Secure Investment"],
      color: "from-blue-600 to-brand-blue",
      image: "/images/properties/prime-haven-grove.jpg",
    },
    {
      title: "Wura Gardens Estate",
      location: "Abeokuta, Ogun State",
      size: "Plots Available",
      price: "Affordable Pricing",
      roi: "New Development",
      status: "New",
      features: ["Affordable Plots", "Growing Community", "Flexible Payment"],
      color: "from-brand-orange to-orange-600",
      image: "/images/properties/wura-gardens.jpg",
    },
    {
      title: "Prime Haven Groven - 4BR Detached",
      location: "Abeokuta, Ogun State",
      size: "4-Bedroom",
      price: "Contact for Price",
      roi: "Luxury Living",
      status: "Featured",
      features: ["Detached House", "Modern Design", "Prime Location"],
      color: "from-indigo-600 to-purple-600",
      image: "/images/properties/prime-haven-4br.jpg",
    },
    {
      title: "Prime Haven Groven - Semi-Detached",
      location: "Abeokuta, Ogun State",
      size: "Semi-Detached",
      price: "Contact for Price",
      roi: "Family Home",
      status: "Available",
      features: ["Semi-Detached Flat", "Quality Finishing", "Estate Living"],
      color: "from-teal-600 to-green-600",
      image: "/images/properties/prime-haven-semi.jpg",
    },
    {
      title: "House in Olomore",
      location: "Olomore, Abeokuta",
      size: "Residential",
      price: "Contact for Price",
      roi: "Ready to Move",
      status: "Available",
      features: ["Established Area", "Good Access Roads", "Residential Zone"],
      color: "from-rose-600 to-pink-600",
      image: "/images/properties/olomore-house.jpg",
    },
    {
      title: "3 Units - 2 Bedroom Flats + Self-Con",
      location: "Abeokuta, Ogun State",
      size: "3 Units",
      price: "Contact for Price",
      roi: "Income Property",
      status: "Investment",
      features: ["Multiple Units", "Rental Income", "Well Located"],
      color: "from-amber-600 to-yellow-600",
      image: "/images/properties/3-units.jpg",
    },
    {
      title: "Blocks of Flats - Prime Area",
      location: "Abeokuta, Ogun State",
      size: "Multi-Unit",
      price: "Contact for Price",
      roi: "High Rental Yield",
      status: "Investment",
      features: ["Prime Location", "Multiple Flats", "High Demand Area"],
      color: "from-purple-600 to-pink-600",
      image: "/images/properties/blocks-of-flats.jpg",
    },
    {
      title: "3 Plots at Gbokoniyi",
      location: "Gbokoniyi, Abeokuta",
      size: "3 Plots",
      price: "Contact for Price",
      roi: "Development Opportunity",
      status: "Available",
      features: ["Large Land Size", "Ideal for Development", "Growing Area"],
      color: "from-cyan-600 to-blue-600",
      image: "/images/properties/gbokoniyi-plots.jpg",
    },
    {
      title: "2 Plots for Sale",
      location: "Abeokuta, Ogun State",
      size: "2 Plots",
      price: "Contact for Price",
      roi: "Land Investment",
      status: "Available",
      features: ["Twin Plots", "Investment Ready", "Prime for Building"],
      color: "from-green-600 to-teal-600",
      image: "/images/properties/2-plots.jpg",
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
            Discover prime properties in strategic locations across Abeokuta, Ogun State with
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
              <div className={`h-48 bg-gradient-to-br ${property.color} relative overflow-hidden`}>
                {/* Property Image */}
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  onError={(e) => {
                    // Hide image on error to show gradient fallback
                    e.currentTarget.style.display = 'none';
                  }}
                />

                {/* Gradient Overlay for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />

                {/* Status Badge */}
                <motion.div
                  className="absolute top-4 right-4 bg-white text-brand-blue px-4 py-1 rounded-full text-sm font-bold shadow-lg z-20"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  {property.status}
                </motion.div>

                {/* ROI Badge */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-green-600 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 z-20">
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
