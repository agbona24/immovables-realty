"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  TrendingUp,
  Shield,
  Users,
  CheckCircle2,
  ArrowRight,
  FileText,
  Briefcase,
  Target,
  BarChart3,
  Home,
  LineChart,
  DollarSign,
  Award,
  Lock,
  Repeat,
  MessageCircle,
  Building2,
  PieChart,
  Calendar,
  Eye,
  FileCheck,
} from "lucide-react";

const PortfolioManagement = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const targetAudience = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Individual Investors",
      description:
        "₦10M–₦50M first-time big earners seeking structured growth",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Diaspora Investors",
      description:
        "Secure, transparent, remotely-managed property investments",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Entrepreneurs & SMEs",
      description: "Diversifying capital into tangible assets",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Passive Investors",
      description: "Professional, low-maintenance portfolio oversight",
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Institutional Partners",
      description: "Regional development exposure and co-investment",
    },
  ];

  const coreServices = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Portfolio Strategy & Asset Allocation",
      description:
        "Tailored strategy aligned to your goals: income, growth, or blended approach across land banking, flips, and rental units.",
    },
    {
      icon: <Repeat className="w-8 h-8" />,
      title: "Cashflow-First Land Banking & Flipping",
      description:
        "Acquire strategic plots with in-house resale support under agreed timelines—maintain liquidity while capturing appreciation.",
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Acquisition & Due Diligence",
      description:
        "Site selection, title verification, cost modelling, market comparables, and comprehensive legal checks before purchase.",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Transaction & Documentation",
      description:
        "Full handling of offer letters, receipts, contracts and deed registration—signature-ready documentation for both parties.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Asset Management & Value Enhancement",
      description:
        "Infrastructure planning, pre-development packaging, and marketing-ready presentation to maximize resale/rental value.",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Sales & Resale Execution",
      description:
        "We market and execute resales on your behalf to realize liquidity or profit targets—dual seller and reseller role.",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Reporting, Tax & Compliance",
      description:
        "Regular portfolio statements, valuation updates, cashflow reports, and local compliance and tax documentation support.",
    },
    {
      icon: <ArrowRight className="w-8 h-8" />,
      title: "Exit Planning & Liquidity Solutions",
      description:
        "Defined resale timelines, buy-back options, and structured exit mechanisms to avoid trapped capital.",
    },
  ];

  const valueProps = [
    "Proven regional expertise in Ogun State developments (affordable entry, high-yield potential)",
    "Dual-role capability—we acquire and actively resell, shortening exit cycles",
    "Transparent pricing & margins—expected returns modelled before you commit",
    "End-to-end management—minimal client involvement required",
    "Aligned incentives—performance-linked structures match our interests with yours",
  ];

  const riskManagement = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Title Security",
      description:
        "Stringent title and survey verification (Freehold, Registered Survey, Deed of Assignment)",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Contract Clarity",
      description:
        "Defined resale agreements and timelines for predictable cashflow windows",
    },
    {
      icon: <PieChart className="w-6 h-6" />,
      title: "Diversification",
      description:
        "Balanced mixes of land banking, flips and rental assets to avoid concentration risk",
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Market Monitoring",
      description:
        "Ongoing valuation checks and adaptive reallocation to protect upside",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Transparent Fees",
      description:
        "Management fees and resale commissions disclosed and modelled upfront",
    },
  ];

  const portfolioApproaches = [
    {
      title: "Income-First (Conservative)",
      color: "from-green-600 to-emerald-600",
      description:
        "Focus on rental-ready properties and short-term flips producing steady monthly inflows while preserving capital.",
      features: ["Steady cashflow", "Capital preservation", "Low risk"],
    },
    {
      title: "Growth-First (Aggressive)",
      color: "from-brand-orange to-orange-600",
      description:
        "Higher allocation to strategic plots and development-ready parcels—larger upside, longer horizon.",
      features: ["Maximum appreciation", "Development focus", "Higher returns"],
    },
    {
      title: "Balanced (Recommended)",
      color: "from-brand-blue to-blue-800",
      description:
        "Blend of Cashflow-First flips for liquidity and selected long-term plots for appreciation.",
      features: [
        "Liquidity + Growth",
        "Diversified approach",
        "Best of both worlds",
      ],
    },
  ];

  const onboardingSteps = [
    {
      step: 1,
      title: "Intro Call & Objectives Mapping",
      icon: <MessageCircle className="w-6 h-6" />,
    },
    {
      step: 2,
      title: "Risk Profile & Needs Assessment",
      icon: <Target className="w-6 h-6" />,
    },
    {
      step: 3,
      title: "Portfolio Proposal & Fee Schedule",
      icon: <FileText className="w-6 h-6" />,
    },
    {
      step: 4,
      title: "Acquisition / Deployment Phase",
      icon: <Home className="w-6 h-6" />,
    },
    {
      step: 5,
      title: "Monthly Reports + Quarterly Statements",
      icon: <BarChart3 className="w-6 h-6" />,
    },
    {
      step: 6,
      title: "Annual Strategy Review & Rebalancing",
      icon: <Calendar className="w-6 h-6" />,
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
            Turn Property Ownership into{" "}
            <span className="text-brand-orange">
              High-Performing Strategy
            </span>
          </motion.h1>
          <motion.p
            className="text-gray-700 text-lg md:text-xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
          >
            IMMOVABLES REALTY's Portfolio Management service helps investors —
            from first-time earners to diaspora funds and institutional partners
            — build, manage and scale real estate portfolios that deliver{" "}
            <span className="font-bold text-brand-blue">
              predictable cash flow
            </span>
            ,{" "}
            <span className="font-bold text-brand-blue">
              capital appreciation
            </span>{" "}
            and <span className="font-bold text-brand-blue">reduced risk</span>
            .
          </motion.p>
        </motion.div>

        {/* What We Do */}
        <motion.div
          className="mb-20 bg-gradient-to-br from-brand-blue to-blue-800 rounded-3xl p-8 md:p-12 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl mb-6 text-center">
            What We Do
          </h2>
          <p className="text-white/90 text-lg leading-relaxed max-w-4xl mx-auto text-center">
            We design and manage real estate portfolios that align with each
            client's financial goals, liquidity needs and risk tolerance.
            Combining on-the-ground expertise in Ogun State (Wura Garden, Prime
            Haven Grove and other strategic locations) with our Cashflow-First
            land banking & flipping framework, IMMOVABLES REALTY creates
            portfolios that can <strong>earn today and grow for tomorrow</strong>
            .
          </p>
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
              Who This Is <span className="text-brand-orange">For</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {targetAudience.map((audience, index) => (
              <motion.div
                key={index}
                className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-brand-orange transition-all duration-300 shadow-md hover:shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue mb-4">
                  {audience.icon}
                </div>
                <h3 className="font-montserrat font-bold text-lg text-brand-blue mb-2">
                  {audience.title}
                </h3>
                <p className="text-gray-600">{audience.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Services */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl text-brand-blue mb-4">
              Core <span className="text-brand-orange">Services</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Comprehensive portfolio management from acquisition to exit
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-brand-orange"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-brand-orange to-orange-600 rounded-xl flex items-center justify-center text-white mb-4">
                  {service.icon}
                </div>
                <h3 className="font-montserrat font-bold text-lg text-brand-blue mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* How We Add Value */}
        <motion.div
          className="mb-20 bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl text-brand-blue mb-4">
              How We <span className="text-brand-orange">Add Value</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {valueProps.map((prop, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 w-6 h-6 bg-brand-orange rounded-full flex items-center justify-center mt-1">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-700 text-lg">{prop}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Risk Management */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl text-brand-blue mb-4">
              Risk Management &{" "}
              <span className="text-brand-orange">Governance</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {riskManagement.map((risk, index) => (
              <motion.div
                key={index}
                className="bg-white border-2 border-brand-blue/20 rounded-2xl p-6 hover:border-brand-blue transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue mb-4">
                  {risk.icon}
                </div>
                <h3 className="font-montserrat font-bold text-lg text-brand-blue mb-2">
                  {risk.title}
                </h3>
                <p className="text-gray-600 text-sm">{risk.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Portfolio Approaches */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl text-brand-blue mb-4">
              Typical Portfolio{" "}
              <span className="text-brand-orange">Approaches</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolioApproaches.map((approach, index) => (
              <motion.div
                key={index}
                className={`bg-gradient-to-br ${approach.color} rounded-3xl p-8 text-white relative overflow-hidden`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                />
                <div className="relative z-10">
                  <h3 className="font-montserrat font-bold text-2xl mb-4">
                    {approach.title}
                  </h3>
                  <p className="text-white/90 mb-6 leading-relaxed">
                    {approach.description}
                  </p>
                  <div className="space-y-2">
                    {approach.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Onboarding Process */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl text-brand-blue mb-4">
              Onboarding &{" "}
              <span className="text-brand-orange">Reporting Cadence</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
            {onboardingSteps.map((step, index) => (
              <motion.div
                key={index}
                className="flex gap-4 items-start bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-brand-orange to-orange-600 rounded-full flex items-center justify-center text-white font-montserrat font-bold">
                  {step.step}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-brand-blue">{step.icon}</div>
                  </div>
                  <h3 className="font-montserrat font-bold text-brand-blue">
                    {step.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-center text-gray-600 text-lg mt-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            All clients receive secure digital copies of contracts, receipts and
            periodic statements. <strong>Diaspora clients</strong> benefit from
            virtual inspections, remote payment options and frequent video
            updates.
          </motion.p>
        </motion.div>

        {/* Fees & Alignment */}
        <motion.div
          className="mb-20 bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 border-2 border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl text-brand-blue mb-4">
              Fees & <span className="text-brand-orange">Alignment</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
            {[
              {
                icon: <DollarSign className="w-8 h-8" />,
                title: "Management Fee",
                description:
                  "Transparent, agreed up-front and tiered by portfolio size",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Performance / Resale Fee",
                description:
                  "Applied only on successful resale gains (aligns our incentive with your returns)",
              },
              {
                icon: <FileText className="w-8 h-8" />,
                title: "Transaction Costs",
                description:
                  "Pre-disclosed (survey, registration, taxes) — no hidden charges",
              },
            ].map((fee, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-brand-blue rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                  {fee.icon}
                </div>
                <h3 className="font-montserrat font-bold text-lg text-brand-blue mb-2">
                  {fee.title}
                </h3>
                <p className="text-gray-600 text-sm">{fee.description}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-gray-700 font-semibold text-lg">
            Detailed fee schedules are included in every portfolio proposal.
          </p>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          className="mb-20 bg-gradient-to-br from-brand-blue to-blue-800 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl mb-6">
              Why Choose IMMOVABLES REALTY
            </h2>
            <p className="text-white/90 text-lg mb-6 leading-relaxed">
              IMMOVABLES REALTY is part of Immovables Group, a multi-vertical
              platform (real estate, digital services, agriculture) with proven
              regional know-how and access to development pipelines. We combine
              hands-on estate management (Wura Garden, Prime Haven Grove) with a
              scalable Cashflow-First model that prevents capital lock-in and
              accelerates investor liquidity.
            </p>

            <blockquote className="text-2xl md:text-3xl font-montserrat font-bold text-brand-orange italic">
              "Own intelligently. Stay liquid. Grow intentionally."
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
            Start Building Your{" "}
            <span className="text-brand-orange">Portfolio</span>
          </h2>
          <p className="text-gray-600 text-xl mb-8">
            Contact our Portfolio Management team to schedule a consultation
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://wa.me/2348132833083?text=Hello%20IMMOVABLES%20REALTY,%20I'm%20interested%20in%20your%20Portfolio%20Management%20service.%20I'd%20like%20to%20schedule%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-orange text-white px-10 py-4 rounded-full font-montserrat font-bold text-lg hover:bg-brand-blue transition shadow-xl"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-5 h-5" />
              Schedule Consultation
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

export default PortfolioManagement;
