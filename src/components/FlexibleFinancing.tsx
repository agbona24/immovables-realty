"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  DollarSign,
  TrendingUp,
  Shield,
  Users,
  CheckCircle2,
  ArrowRight,
  FileText,
  Briefcase,
  Target,
  Calendar,
  Home,
  LineChart,
  Wallet,
  Award,
  Lock,
  Repeat,
  MessageCircle,
} from "lucide-react";

const FlexibleFinancing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const uniqueFeatures = [
    {
      icon: <Repeat className="w-6 h-6" />,
      title: "Dual Ownership and Exit Structure",
      description:
        "You don't only buy — you can exit profitably with our resale support.",
    },
    {
      icon: <Wallet className="w-6 h-6" />,
      title: "Cashflow Protection",
      description:
        "Your capital remains accessible through structured resale — unlike traditional land purchases where money stays stuck for years.",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Full Documentation Support",
      description:
        "Offer Letter, Payment Receipts, Contract of Sale, and Registered Deed of Assignment with signatures from both parties.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Verified Estates",
      description:
        "Every estate comes with Freehold Title, Registered Survey, and Registered Deed of Assignment. No hidden charges.",
    },
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Liquidity Assurance",
      description: "Access to cash when needed through our resale program",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Profit Maximization",
      description: "Benefit from appreciation without delays",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Stress-Free Resale",
      description: "We handle flipping and marketing on your behalf",
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Affordable Entry Point",
      description: "Ogun State offers high growth at lower cost",
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "Scalable Portfolio",
      description: "Start small, grow into long-term holdings",
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Zero Title Problems",
      description: "Fully verified and documented properties only",
    },
  ];

  const targetAudience = [
    "Salary earners building long-term wealth",
    "First-time high earners (₦10M – ₦50M) seeking cashflow protection",
    "Diaspora investors who need liquidity and documentation certainty",
    "Entrepreneurs seeking quick-turn real estate returns",
    "Passive investors who prefer managed portfolio growth",
  ];

  const howItWorks = [
    {
      step: 1,
      title: "Book an Inspection",
      description: "Physical or Virtual tour of available properties",
      icon: <Calendar className="w-6 h-6" />,
    },
    {
      step: 2,
      title: "Select Your Plot & Payment Plan",
      description: "Choose from flexible monthly or quarterly options",
      icon: <Target className="w-6 h-6" />,
    },
    {
      step: 3,
      title: "Make Initial Deposit",
      description: "Secure your plot with affordable entry payment",
      icon: <DollarSign className="w-6 h-6" />,
    },
    {
      step: 4,
      title: "Receive Documents",
      description: "Get Offer Letter & Contract of Sale immediately",
      icon: <FileText className="w-6 h-6" />,
    },
    {
      step: 5,
      title: "Spread Payments",
      description: "Pay conveniently without disrupting cashflow",
      icon: <Wallet className="w-6 h-6" />,
    },
    {
      step: 6,
      title: "Complete & Get Final Docs",
      description: "Receive Registered Deed of Assignment",
      icon: <Award className="w-6 h-6" />,
    },
    {
      step: 7,
      title: "Join Resale Program (Optional)",
      description: "Cashflow-First resale support for liquidity",
      icon: <Repeat className="w-6 h-6" />,
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%230C3B82' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="font-montserrat font-extrabold text-4xl md:text-5xl lg:text-6xl text-brand-blue mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
          >
            Own Land with Ease. <br />
            Build Wealth with{" "}
            <span className="text-brand-orange">Strategy</span>
          </motion.h1>
          <motion.p
            className="text-gray-600 text-xl md:text-2xl mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
          >
            Stay Liquid While You Invest.
          </motion.p>
          <motion.p
            className="text-gray-700 text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 }}
          >
            Real estate ownership should not trap your capital — it should
            empower you. At IMMOVABLES REALTY, our Flexible Financing System is
            built to help you acquire property conveniently without interrupting
            your cash flow or financial stability.
          </motion.p>
        </motion.div>

        {/* Unique Approach Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl text-brand-blue mb-4">
              Our Unique Approach:{" "}
              <span className="text-brand-orange">Flexibility + Cashflow First</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Traditional real estate requires large upfront payments and often
              locks funds for years. We have redesigned that model.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <DollarSign className="w-10 h-10" />,
                title: "Start with a Low Entry Deposit",
                description: "Secure your plot with an affordable initial payment.",
              },
              {
                icon: <Calendar className="w-10 h-10" />,
                title: "Spread Payment Conveniently",
                description:
                  "Pay monthly or quarterly, depending on your cash flow.",
              },
              {
                icon: <TrendingUp className="w-10 h-10" />,
                title: "Enjoy Liquidity Even While Owning",
                description:
                  "Through our Cashflow-First Land Banking & Flipping Program, we help investors resell their plots at agreed timelines.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-brand-blue to-blue-800 rounded-3xl p-8 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="mb-4 text-brand-orange">{item.icon}</div>
                <h3 className="font-montserrat font-bold text-xl mb-3">
                  {item.title}
                </h3>
                <p className="text-white/90">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* What Makes Us Different */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl text-brand-blue mb-4">
              What Makes Our{" "}
              <span className="text-brand-orange">Flexible Financing</span>{" "}
              Different
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {uniqueFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-brand-orange transition-all duration-300 shadow-md hover:shadow-xl"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-xl text-brand-blue mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          className="mb-20 bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl text-brand-blue mb-4">
              Key <span className="text-brand-orange">Benefits</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-brand-blue rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-montserrat font-bold text-lg text-brand-blue mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Target Audience */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl text-brand-blue mb-4">
              Who Is This{" "}
              <span className="text-brand-orange">Designed For?</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="space-y-4">
              {targetAudience.map((audience, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-brand-orange rounded-full flex items-center justify-center mt-1">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700 text-lg">{audience}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* How It Works */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl text-brand-blue mb-4">
              How To <span className="text-brand-orange">Get Started</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Simple 7-step process to property ownership
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {howItWorks.map((step, index) => (
              <motion.div
                key={index}
                className="relative mb-8 last:mb-0"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Connector Line */}
                {index < howItWorks.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-full bg-brand-orange/20 -z-10" />
                )}

                <div className="flex gap-6 items-start">
                  {/* Step Number Circle */}
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-brand-orange to-orange-600 rounded-full flex items-center justify-center text-white font-montserrat font-bold text-xl shadow-lg">
                    {step.step}
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-brand-blue">{step.icon}</div>
                      <h3 className="font-montserrat font-bold text-xl text-brand-blue">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Strategic Positioning */}
        <motion.div
          className="mb-20 bg-gradient-to-br from-brand-blue to-blue-800 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl mb-6">
              Our Strategic Positioning
            </h2>
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              IMMOVABLES REALTY is not just a seller of land — we are a
              cashflow-driven real estate partner.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                "Own property with flexible payment",
                "Earn returns through controlled flipping",
                "Build wealth without financial pressure",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-2 justify-center">
                    <ArrowRight className="w-5 h-5 text-brand-orange" />
                    <p className="text-white font-semibold">{item}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <blockquote className="text-2xl md:text-3xl font-montserrat font-bold text-brand-orange italic">
              "Don't just buy land. Buy land that pays you back."
            </blockquote>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl text-brand-blue mb-6">
            Start Today. Pay with Ease.{" "}
            <span className="text-brand-orange">Build Wealth.</span>
          </h2>
          <p className="text-gray-600 text-xl mb-8">
            With IMMOVABLES REALTY, you don't just own property — you own a
            financial strategy
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://wa.me/2348132833083?text=Hello%20IMMOVABLES%20REALTY,%20I'm%20interested%20in%20your%20Flexible%20Financing%20program.%20I'd%20like%20to%20book%20an%20inspection%20and%20learn%20more."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-orange text-white px-10 py-4 rounded-full font-montserrat font-bold text-lg hover:bg-brand-blue transition shadow-xl"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-5 h-5" />
              Book Inspection via WhatsApp
            </motion.a>
            <motion.a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-brand-blue border-2 border-brand-blue px-10 py-4 rounded-full font-montserrat font-bold text-lg hover:bg-brand-blue hover:text-white transition shadow-lg"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Our Team
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FlexibleFinancing;
