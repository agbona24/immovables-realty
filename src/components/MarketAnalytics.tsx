"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  TrendingUp,
  BarChart3,
  PieChart,
  LineChart,
  MapPin,
  Building2,
  Users,
  DollarSign,
  Target,
  Calendar,
  FileText,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Eye,
  Award,
  Zap,
  Shield,
  Globe,
} from "lucide-react";

const MarketAnalytics = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const analyticsServices = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Market Trends & Forecasts",
      description:
        "In-depth analysis of property value trends, price movements, and future growth projections for Ogun State markets.",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Comparative Market Analysis",
      description:
        "Location-by-location pricing comparisons, ROI benchmarking, and value assessment against market standards.",
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Property Valuation Reports",
      description:
        "Professional appraisals, fair market value assessments, and investment grade property reports.",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Location Intelligence",
      description:
        "Infrastructure development tracking, government projects impact, and neighborhood growth potential analysis.",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Investment Performance Tracking",
      description:
        "Portfolio performance monitoring, appreciation tracking, and cashflow analysis for existing holdings.",
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Risk & Opportunity Assessment",
      description:
        "Market risk evaluation, emerging opportunities identification, and strategic entry/exit timing recommendations.",
    },
  ];

  const keyInsights = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Ogun State Growth Trajectory",
      stat: "18-25%",
      description:
        "Annual property appreciation in prime locations like Ibafo, Mowe, and areas along Lagos-Ibadan Expressway.",
      trend: "Accelerating",
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Development Pipeline",
      stat: "₦500B+",
      description:
        "Infrastructure investments planned: road networks, new industrial zones, and government estates.",
      trend: "Expanding",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Population & Demand",
      stat: "5M+",
      description:
        "Growing population driven by Lagos overflow, industry workers, and returning diaspora.",
      trend: "Rising",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Entry Point Advantage",
      stat: "60% Lower",
      description:
        "Land prices compared to Lagos, offering high-yield opportunities for early investors.",
      trend: "Closing Gap",
    },
  ];

  const marketDrivers = [
    {
      title: "Lagos-Ogun Corridor Expansion",
      description:
        "Ongoing road infrastructure improvements and industrial growth creating massive spillover demand.",
      impact: "High",
      color: "from-green-600 to-emerald-600",
    },
    {
      title: "Government & Institutional Activity",
      description:
        "New government estates, university expansions, and industrial park developments.",
      impact: "High",
      color: "from-blue-600 to-indigo-600",
    },
    {
      title: "Diaspora Investment Flows",
      description:
        "Increased remote property acquisitions by Nigerians abroad seeking stable naira-denominated assets.",
      impact: "Medium-High",
      color: "from-brand-orange to-orange-600",
    },
    {
      title: "Affordable Housing Demand",
      description:
        "Young professionals and middle-class families seeking alternatives to expensive Lagos housing.",
      impact: "Very High",
      color: "from-purple-600 to-pink-600",
    },
  ];

  const reportTypes = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Quarterly Market Report",
      features: [
        "Regional price movement analysis",
        "Transaction volume trends",
        "Emerging hotspots identification",
        "Investment recommendations",
      ],
    },
    {
      icon: <PieChart className="w-6 h-6" />,
      title: "Custom Property Report",
      features: [
        "Specific property valuation",
        "Comparable sales data",
        "Development potential assessment",
        "Investment grade scoring",
      ],
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Portfolio Performance Review",
      features: [
        "Individual asset appreciation tracking",
        "Portfolio-wide ROI analysis",
        "Rebalancing recommendations",
        "Exit/hold strategy guidance",
      ],
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Strategic Acquisition Brief",
      features: [
        "Location-specific opportunity analysis",
        "Entry timing recommendations",
        "Price negotiation guidelines",
        "Risk mitigation strategies",
      ],
    },
  ];

  const whoNeedsThis = [
    {
      type: "Active Investors",
      description:
        "Track market movements, identify new opportunities, and time entry/exit decisions.",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      type: "Diaspora Buyers",
      description:
        "Stay informed remotely with reliable data on market conditions and property values.",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      type: "Portfolio Managers",
      description:
        "Monitor asset performance, benchmark returns, and optimize portfolio allocation.",
      icon: <Award className="w-6 h-6" />,
    },
    {
      type: "Developers & Builders",
      description:
        "Access location intelligence, demand forecasts, and development feasibility data.",
      icon: <Building2 className="w-6 h-6" />,
    },
    {
      type: "Financial Planners",
      description:
        "Incorporate real estate data into client wealth plans and asset allocation strategies.",
      icon: <Shield className="w-6 h-6" />,
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
            Invest with{" "}
            <span className="text-brand-orange">Data-Driven Insights</span>
          </motion.h1>
          <motion.p
            className="text-gray-700 text-lg md:text-xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
          >
            Make informed real estate decisions backed by comprehensive market
            research, property valuations, and trend analysis. Our Market
            Analytics service provides the intelligence you need to maximize
            returns and minimize risk.
          </motion.p>
        </motion.div>

        {/* Analytics Services */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl text-brand-blue mb-4">
              Our Analytics <span className="text-brand-orange">Services</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {analyticsServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-brand-orange"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-brand-orange to-orange-600 rounded-xl flex items-center justify-center text-white mb-6">
                  {service.icon}
                </div>
                <h3 className="font-montserrat font-bold text-xl text-brand-blue mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Market Insights */}
        <motion.div
          className="mb-20 bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl text-brand-blue mb-4">
              Current Market{" "}
              <span className="text-brand-orange">Insights</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Real-time data from Ogun State real estate markets
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {keyInsights.map((insight, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue">
                    {insight.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-montserrat font-bold text-lg text-brand-blue mb-1">
                      {insight.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-3xl font-extrabold text-brand-orange">
                        {insight.stat}
                      </span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold">
                        {insight.trend}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">{insight.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Market Drivers */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl text-brand-blue mb-4">
              Key Market <span className="text-brand-orange">Drivers</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Forces shaping Ogun State real estate growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {marketDrivers.map((driver, index) => (
              <motion.div
                key={index}
                className={`bg-gradient-to-br ${driver.color} rounded-3xl p-8 text-white`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-montserrat font-bold text-2xl">
                    {driver.title}
                  </h3>
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                    {driver.impact}
                  </span>
                </div>
                <p className="text-white/90 leading-relaxed">
                  {driver.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Report Types */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl text-brand-blue mb-4">
              Available <span className="text-brand-orange">Reports</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Tailored analytics products for different investor needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reportTypes.map((report, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-brand-blue"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange mb-4">
                  {report.icon}
                </div>
                <h3 className="font-montserrat font-bold text-lg text-brand-blue mb-4">
                  {report.title}
                </h3>
                <ul className="space-y-2">
                  {report.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Who Needs This */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl text-brand-blue mb-4">
              Who Benefits from{" "}
              <span className="text-brand-orange">Market Analytics?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whoNeedsThis.map((client, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border-2 border-transparent hover:border-brand-orange"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue mb-4">
                  {client.icon}
                </div>
                <h3 className="font-montserrat font-bold text-lg text-brand-blue mb-2">
                  {client.type}
                </h3>
                <p className="text-gray-600">{client.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Value Proposition */}
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
            <Zap className="w-20 h-20 mx-auto mb-6 text-brand-orange" />
            <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl mb-6">
              Why Our Analytics Stand Out
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-left mb-8">
              {[
                "Ground-level data from active transactions",
                "Ogun State market specialization",
                "Regular updates (quarterly + on-demand)",
                "Actionable insights, not just numbers",
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-orange flex-shrink-0 mt-1" />
                  <span className="text-white/90 text-lg">{point}</span>
                </div>
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl font-montserrat font-bold text-brand-orange italic">
              "Data without action is just noise. We deliver intelligence."
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
            Get Your Market{" "}
            <span className="text-brand-orange">Intelligence</span>
          </h2>
          <p className="text-gray-600 text-xl mb-8">
            Request a custom market report or subscribe to our quarterly insights
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://wa.me/2348132833083?text=Hello%20IMMOVABLES%20REALTY,%20I'm%20interested%20in%20your%20Market%20Analytics%20service.%20Can%20I%20get%20a%20market%20report?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-orange text-white px-10 py-4 rounded-full font-montserrat font-bold text-lg hover:bg-brand-blue transition shadow-xl"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-5 h-5" />
              Request Market Report
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

export default MarketAnalytics;
