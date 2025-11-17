"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Shield,
  DollarSign,
  FileCheck,
  Users,
  Building2,
  Award,
} from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Land Sales",
      description:
        "Premium plots of land in choice locations, perfect for residential or commercial development.",
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Documentation",
      description:
        "Complete legal documentation and title verification for secure property transactions.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Investment",
      description:
        "Government-approved estates with verified documents for your peace of mind.",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Flexible Payment",
      description:
        "Affordable payment plans tailored to fit your budget and financial goals.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Consultation",
      description:
        "Professional guidance from experienced real estate consultants throughout your journey.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "After-Sales Support",
      description:
        "Comprehensive support even after purchase, ensuring your satisfaction.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%230C3B82' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

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
            About Us
          </motion.span>
          <motion.h2
            className="font-montserrat font-extrabold text-4xl md:text-5xl text-brand-blue mt-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
          >
            Your Trusted Partner in{" "}
            <span className="text-brand-orange">Property Ownership</span>
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 }}
          >
            At <span className="font-bold text-brand-blue">IMMOVABLES REALTY</span> (RC: 7466982), we specialize in providing
            affordable landed properties that help you build wealth and secure
            your future. With transparency, integrity, and excellence, we've
            helped thousands achieve their property ownership dreams.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              whileHover={{ y: -10 }}
            >
              {/* Icon Container */}
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-brand-blue to-blue-800 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {service.icon}
              </motion.div>

              {/* Content */}
              <h3 className="font-montserrat font-bold text-xl text-brand-blue mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-brand-orange rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Corner Accent */}
              <motion.div
                className="absolute top-4 right-4 w-2 h-2 bg-brand-orange rounded-full opacity-0 group-hover:opacity-100"
                initial={{ scale: 0 }}
                whileHover={{ scale: [0, 1.5, 1] }}
                transition={{ duration: 0.4 }}
              ></motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8 }}
        >
          <motion.a
            href="#contact"
            className="inline-block bg-brand-orange text-white px-10 py-4 rounded-full font-montserrat font-bold text-lg hover:bg-brand-blue transition shadow-xl"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Property Journey
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
