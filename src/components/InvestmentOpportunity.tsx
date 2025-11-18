"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  DollarSign,
  Mountain,
  Home,
  Leaf,
  Shield,
  Users,
  FileText,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Building2,
  PieChart,
  Target,
  Lock,
} from "lucide-react";

const InvestmentOpportunity = () => {
  const investmentHighlights = [
    {
      icon: <Mountain className="w-8 h-8" />,
      title: "Mountain Resort & Residential",
      description: "Luxury eco-resort with mountain views and serviced units",
      value: "Mixed-Use Development",
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Estate Expansion",
      description: "Prime Haven Grove & Wura Garden with freehold titles",
      value: "Strategic Landbanking",
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Immovables Farm",
      description: "Integrated agriculture with farm-to-table operations",
      value: "Sustainable Food Supply",
    },
  ];

  const fundAllocation = [
    { category: "Resort & Land Acquisition", amount: "$2,000,000", percentage: 66.7 },
    { category: "Farm Setup & Operations", amount: "$500,000", percentage: 16.7 },
    { category: "Construction Seed", amount: "$300,000", percentage: 10.0 },
    { category: "Legal & Contingency", amount: "$200,000", percentage: 6.6 },
  ];

  const whyInvest = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "The Abeokuta Advantage",
      points: [
        "Fastest-rising residential & industrial hub in Southwest Nigeria",
        "Proximity to Lagos with rapid corporate relocation",
        "Increasing housing and hospitality demand",
      ],
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Real Assets with Legal Certainty",
      points: [
        "Freehold title on owned estate lands",
        "Registered survey and deed of assignment",
        "Investor funds secured by physical assets and SPVs",
      ],
    },
    {
      icon: <PieChart className="w-6 h-6" />,
      title: "Cross-Sector Revenue Streams",
      points: [
        "Off-plan unit sales",
        "Resort rentals and hospitality income",
        "Long-term residential leasing",
        "Agricultural supply contracts",
      ],
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Build-and-Earn Strategy",
      points: [
        "Phased construction reducing capital risk",
        "Early sales funding next phases",
        "Off-plan commitment from diaspora and corporate tenants",
      ],
    },
  ];

  const investorTypes = [
    "Diaspora investors seeking secure land-backed investment",
    "Real estate & hospitality investors",
    "Institutions and family offices",
    "Agriculture & impact investors",
    "Corporate partners needing staff housing",
  ];

  const exitPathways = [
    "Off-plan property sales",
    "Rental and hospitality yields",
    "Asset sale to institutional buyers",
    "Long-term REIT consolidation",
    "Full or partial investor buy-back options",
  ];

  const investorProtections = [
    "SPV ownership structure",
    "Full land verification available after NDA",
    "Quarterly reporting",
    "Annual audited financials",
    "Investor oversight rights on major decisions",
  ];

  const handleInquiry = () => {
    const message = encodeURIComponent(
      "Hello! I'm interested in the US$3M investment opportunity with Immovables Realty. Please send me the full Investor Information Memorandum and schedule a briefing call."
    );
    window.open(`https://wa.me/2348132833083?text=${message}`, "_blank");
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          className="max-w-5xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-orange to-orange-600 text-white px-6 py-3 rounded-full font-montserrat font-bold mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <DollarSign size={24} />
            US$3,000,000 CAPITAL RAISE
          </motion.div>

          <motion.h1
            className="font-montserrat font-extrabold text-4xl md:text-6xl text-brand-blue mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Invest in <span className="text-brand-orange">Immovables Realty</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-700 font-medium mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            A Landmark Development Opportunity in Ogun State, Nigeria
          </motion.p>

          <motion.p
            className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Immovables Realty is developing one of the most transformative mixed-use
            projects in Ogun State — combining a world-class{" "}
            <strong className="text-brand-blue">mountain resort</strong>, modern{" "}
            <strong className="text-brand-blue">residential housing</strong>, and an
            integrated{" "}
            <strong className="text-brand-blue">agricultural supply chain</strong>{" "}
            that feeds local markets and supports our community.
          </motion.p>
        </motion.div>

        {/* Investment Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {investmentHighlights.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-blue-800 rounded-2xl flex items-center justify-center text-white mb-6">
                {item.icon}
              </div>
              <h3 className="font-montserrat font-bold text-2xl text-brand-blue mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="inline-block bg-brand-orange/10 text-brand-orange px-4 py-2 rounded-full font-semibold text-sm">
                {item.value}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fund Allocation */}
        <motion.div
          className="bg-gradient-to-br from-brand-blue to-blue-900 rounded-3xl p-12 text-white mb-20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl mb-4">
              Use of Funds
            </h2>
            <p className="text-blue-100 text-lg">
              Strategic allocation of US$3,000,000 capital raise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {fundAllocation.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-montserrat font-bold text-lg">
                    {item.category}
                  </h3>
                  <span className="text-brand-orange font-bold text-sm">
                    {item.percentage}%
                  </span>
                </div>
                <div className="text-3xl font-bold mb-3">{item.amount}</div>
                <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="bg-brand-orange h-full rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Invest */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl text-brand-blue mb-4">
              Why <span className="text-brand-orange">Immovables Realty?</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Four compelling reasons to invest in this transformative project
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyInvest.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue flex-shrink-0">
                    {item.icon}
                  </div>
                  <h3 className="font-montserrat font-bold text-xl text-brand-blue mt-2">
                    {item.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Investment Options */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl text-brand-blue mb-4">
              Return Framework
            </h2>
            <p className="text-gray-600 text-lg">
              Flexible investment models based on investor preference
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 border-2 border-brand-blue shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-12 h-12 bg-brand-blue text-white rounded-xl flex items-center justify-center font-bold text-xl mb-4">
                A
              </div>
              <h3 className="font-montserrat font-bold text-2xl text-brand-blue mb-3">
                Equity + Profit Share
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                  Preferred equity in special purpose vehicles (SPVs)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                  Returns paid after stabilization period
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                  Profit splits after investor capital recovery
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-orange-50 to-white rounded-3xl p-8 border-2 border-brand-orange shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-12 h-12 bg-brand-orange text-white rounded-xl flex items-center justify-center font-bold text-xl mb-4">
                B
              </div>
              <h3 className="font-montserrat font-bold text-2xl text-brand-orange mb-3">
                Revenue Share Model
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                  Fixed % of distributable cashflows
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                  Returns begin after stabilization period
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                  Option to convert to equity later
                </li>
              </ul>
            </motion.div>
          </div>

          <p className="text-center text-gray-600 mt-6 italic">
            Final structure negotiated individually based on investor type
          </p>
        </motion.div>

        {/* Two Column Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Exit Pathways */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-montserrat font-bold text-2xl text-brand-blue mb-6 flex items-center gap-3">
              <Target className="text-brand-orange" />
              Exit Pathways
            </h3>
            <ul className="space-y-3">
              {exitPathways.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Investor Protections */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-montserrat font-bold text-2xl text-brand-blue mb-6 flex items-center gap-3">
              <Lock className="text-brand-orange" />
              Investor Protections
            </h3>
            <ul className="space-y-3">
              {investorProtections.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Shield className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Who Should Invest */}
        <motion.div
          className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-montserrat font-bold text-3xl text-brand-blue mb-8 text-center">
            Who Should Invest?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {investorTypes.map((type, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow flex items-start gap-3"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Users className="w-6 h-6 text-brand-orange flex-shrink-0 mt-1" />
                <span className="text-gray-700">{type}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="bg-gradient-to-br from-brand-blue via-blue-800 to-brand-blue rounded-3xl p-12 text-white text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          />

          <div className="relative z-10">
            <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl mb-4">
              Ready to Invest in the Future?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Request the full Investor Information Memorandum, due diligence
              documents, and schedule a briefing call with our team.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <motion.button
                onClick={handleInquiry}
                className="bg-brand-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full font-montserrat font-bold shadow-xl flex items-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FileText size={20} />
                Request Information Memorandum
              </motion.button>

              <motion.a
                href="/contact"
                className="bg-white text-brand-blue hover:bg-gray-100 px-8 py-4 rounded-full font-montserrat font-bold shadow-xl flex items-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Briefing Call
              </motion.a>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-100">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                +234 813 283 3083
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                info@immovablesrealty.com
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                Abeokuta, Ogun State
              </div>
            </div>
          </div>
        </motion.div>

        {/* Closing Statement */}
        <motion.div
          className="text-center mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="font-montserrat font-bold text-2xl text-brand-blue mb-4">
            Be Part of the Future We Are Building
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            This project is not just about housing — it is about creating a{" "}
            <strong className="text-brand-blue">new lifestyle ecosystem</strong>,
            powered by modern real estate, tourism and recreation, and local
            agricultural production.
          </p>
          <p className="text-brand-orange font-montserrat font-bold text-xl mt-6">
            Invest with Immovables Realty. Build legacy assets. Shape the future of
            Ogun State.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestmentOpportunity;
