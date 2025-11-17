"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Shield,
  DollarSign,
  TrendingUp,
  Users,
  Building2,
  Award,
  Heart,
  Target,
  Eye,
  CheckCircle2,
  Lightbulb,
  Handshake,
} from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Investment Properties",
      description:
        "Access a wide range of investment-ready properties in prime locations with high growth potential.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Market Analytics",
      description:
        "Detailed market insights and property analytics to help you make data-driven investment decisions.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Transactions",
      description:
        "Government-approved properties with verified legal documentation for your peace of mind.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Advisory",
      description:
        "Professional guidance from experienced real estate advisors throughout your investment journey.",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Flexible Financing",
      description:
        "Customized payment plans and financing options tailored to fit your investment strategy.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Portfolio Management",
      description:
        "Comprehensive support to help you manage and grow your real estate investment portfolio.",
    },
  ];

  const stats = [
    { number: "200+", label: "Properties Sold", icon: <Building2 /> },
    { number: "500+", label: "Happy Clients", icon: <Users /> },
    { number: "₦2B+", label: "Value Delivered", icon: <TrendingUp /> },
    { number: "10+", label: "Years Experience", icon: <Award /> },
  ];

  const values = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Integrity",
      description: "Transparent dealings and honest communication always",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Client-First",
      description: "Your success is our priority and measure of achievement",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation",
      description: "Leveraging technology to simplify real estate investing",
    },
    {
      icon: <Handshake className="w-6 h-6" />,
      title: "Partnership",
      description: "Building lasting relationships beyond transactions",
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
            <span className="text-brand-orange">Real Estate Investments</span>
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 }}
          >
            At <span className="font-bold text-brand-blue">IMMOVABLES REALTY</span> (RC: 7466982), we're more than just a real estate company—we're your partners in building wealth and securing your future.
            With a deep understanding of Ogun State's property market and a commitment to excellence, we help you navigate the world of real estate investment with confidence and clarity.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 bg-gradient-to-br from-brand-blue to-blue-800 rounded-2xl text-white"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div
                className="flex justify-center mb-3"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              >
                <div className="text-brand-orange">{stat.icon}</div>
              </motion.div>
              <div className="font-montserrat font-extrabold text-3xl md:text-4xl mb-2">
                {stat.number}
              </div>
              <div className="text-white/80 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            className="bg-gradient-to-br from-brand-blue to-blue-800 rounded-3xl p-8 md:p-10 text-white"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-brand-orange rounded-full flex items-center justify-center">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="font-montserrat font-bold text-2xl">Our Mission</h3>
            </div>
            <p className="text-white/90 leading-relaxed text-lg">
              To democratize real estate investment by making it accessible, transparent, and profitable for everyone.
              We believe wealth creation through property ownership shouldn't be complicated—it should be empowering.
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-brand-orange to-orange-600 rounded-3xl p-8 md:p-10 text-white"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-brand-orange">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="font-montserrat font-bold text-2xl">Our Vision</h3>
            </div>
            <p className="text-white/90 leading-relaxed text-lg">
              To be Ogun State's most trusted real estate partner, recognized for turning investment dreams into reality
              while fostering sustainable community development across the region.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.7 }}
        >
          <div className="text-center mb-12">
            <h3 className="font-montserrat font-extrabold text-3xl md:text-4xl text-brand-blue mb-4">
              Our Core <span className="text-brand-orange">Values</span>
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              These principles guide every decision we make and every relationship we build
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-brand-orange transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(12, 59, 130, 0.1)" }}
              >
                <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange mb-4">
                  {value.icon}
                </div>
                <h4 className="font-montserrat font-bold text-xl text-brand-blue mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="font-montserrat font-extrabold text-3xl md:text-4xl text-brand-blue mb-4">
              What We <span className="text-brand-orange">Offer</span>
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive real estate solutions designed to support you at every stage of your investment journey
            </p>
          </div>

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
        </motion.div>

        {/* Why Choose Us Highlights */}
        <motion.div
          className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 border-2 border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1 }}
        >
          <div className="text-center mb-10">
            <h3 className="font-montserrat font-extrabold text-3xl md:text-4xl text-brand-blue mb-4">
              Why Investors <span className="text-brand-orange">Trust Us</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Verified property documentation and legal compliance",
              "Transparent pricing with no hidden fees",
              "Personalized investment strategies tailored to your goals",
              "Deep local market knowledge and insights",
              "Ongoing support even after your purchase",
              "Access to exclusive off-market opportunities",
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 1.1 + index * 0.1 }}
              >
                <div className="flex-shrink-0 w-6 h-6 bg-brand-orange rounded-full flex items-center justify-center mt-1">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-700 text-lg">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.3 }}
        >
          <p className="text-gray-600 text-lg mb-6">
            Ready to start building your real estate portfolio?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/contact"
              className="inline-block bg-brand-orange text-white px-10 py-4 rounded-full font-montserrat font-bold text-lg hover:bg-brand-blue transition shadow-xl"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Investment Journey
            </motion.a>
            <motion.a
              href="/properties"
              className="inline-block bg-white text-brand-blue border-2 border-brand-blue px-10 py-4 rounded-full font-montserrat font-bold text-lg hover:bg-brand-blue hover:text-white transition shadow-lg"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Browse Properties
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
