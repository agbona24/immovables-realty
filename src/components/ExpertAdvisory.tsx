"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Shield,
  FileCheck,
  Users,
  CheckCircle2,
  ArrowRight,
  FileText,
  Search,
  MapPin,
  Scale,
  Building2,
  AlertTriangle,
  Award,
  MessageCircle,
  Eye,
  Landmark,
  ClipboardCheck,
  Home,
  TrendingUp,
  Lock,
} from "lucide-react";

const ExpertAdvisory = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const coreServices = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Land Buying & Acquisition Advisory",
      description:
        "Site selection, location analysis, pricing strategy, and negotiation support for optimal property acquisition.",
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Due Process & Verification",
      description:
        "Title verification, survey confirmation, ownership history checks, and comprehensive legal documentation review.",
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: "Legal & Documentation Support",
      description:
        "Contract review, deed registration, offer letter preparation, and complete documentation oversight.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Risk Assessment & Mitigation",
      description:
        "Identifying potential issues, evaluating investment risks, and providing strategies to protect your capital.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Investment Strategy Consultation",
      description:
        "Portfolio planning, market timing, cashflow modeling, and long-term wealth building strategies.",
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Property Inspection & Evaluation",
      description:
        "Physical site visits, infrastructure assessment, development potential analysis, and value appraisal.",
    },
  ];

  const verificationChecklist = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Title Document Verification",
      items: [
        "Certificate of Occupancy (C of O)",
        "Deed of Assignment authenticity",
        "Survey plan registered with government",
        "Search at Land Registry",
      ],
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Ownership & History Check",
      items: [
        "Verify seller's legitimate ownership",
        "Check for multiple sales (omo onile issues)",
        "Confirm no pending litigation",
        "Family/community consent verification",
      ],
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Physical & Location Due Diligence",
      items: [
        "Site inspection and boundary confirmation",
        "Government acquisition/demolition risk check",
        "Access to infrastructure (roads, water, electricity)",
        "Neighborhood development potential",
      ],
    },
    {
      icon: <Landmark className="w-6 h-6" />,
      title: "Regulatory & Compliance",
      items: [
        "Zoning and land use regulations",
        "Building approvals if applicable",
        "Environmental clearance where needed",
        "Tax and stamp duty compliance",
      ],
    },
  ];

  const whyExpertAdvisory = [
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Avoid Costly Mistakes",
      description:
        "Land fraud, fake documents, and ownership disputes cost billions annually. Professional guidance protects your investment.",
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Secure Your Investment",
      description:
        "Proper due diligence and verification ensure you acquire legitimate, problem-free property with clear title.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Expert Local Knowledge",
      description:
        "Deep understanding of Ogun State's land regulations, customary practices, and government procedures.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Maximize Value",
      description:
        "Strategic acquisition advice ensures you buy at the right price in the right location for optimal returns.",
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "Discuss your goals, budget, and preferences",
      icon: <MessageCircle className="w-6 h-6" />,
    },
    {
      step: 2,
      title: "Property Identification",
      description: "Source and present suitable properties matching your criteria",
      icon: <Search className="w-6 h-6" />,
    },
    {
      step: 3,
      title: "Due Diligence & Verification",
      description: "Comprehensive title, survey, and ownership checks",
      icon: <ClipboardCheck className="w-6 h-6" />,
    },
    {
      step: 4,
      title: "Site Inspection",
      description: "Physical inspection with detailed evaluation report",
      icon: <Eye className="w-6 h-6" />,
    },
    {
      step: 5,
      title: "Legal Documentation",
      description: "Contract preparation and review with legal support",
      icon: <FileText className="w-6 h-6" />,
    },
    {
      step: 6,
      title: "Transaction Support",
      description: "Negotiation, payment, and deed registration assistance",
      icon: <Scale className="w-6 h-6" />,
    },
    {
      step: 7,
      title: "Post-Acquisition Support",
      description: "Ongoing advisory for development or resale",
      icon: <Building2 className="w-6 h-6" />,
    },
  ];

  const targetClients = [
    "First-time property buyers unfamiliar with land acquisition process",
    "Diaspora investors making remote purchases",
    "High-net-worth individuals seeking verified premium properties",
    "Developers and entrepreneurs acquiring multiple plots",
    "Families securing land for future development",
    "Investors expanding their real estate portfolio",
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
            Buy Land with{" "}
            <span className="text-brand-orange">Confidence</span>
          </motion.h1>
          <motion.p
            className="text-gray-700 text-lg md:text-xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
          >
            Navigate the complexities of Nigerian real estate with expert
            guidance. Our advisory service ensures you make informed decisions,
            avoid fraud, and secure property with clear, verified titles.
          </motion.p>
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
              Our Advisory <span className="text-brand-orange">Services</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-brand-orange"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-blue-800 rounded-xl flex items-center justify-center text-white mb-6">
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

        {/* Verification Checklist */}
        <motion.div
          className="mb-20 bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl text-brand-blue mb-4">
              Our Comprehensive{" "}
              <span className="text-brand-orange">Verification Process</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Every property goes through rigorous due diligence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {verificationChecklist.map((category, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange">
                    {category.icon}
                  </div>
                  <h3 className="font-montserrat font-bold text-xl text-brand-blue">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Expert Advisory */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl text-brand-blue mb-4">
              Why You Need{" "}
              <span className="text-brand-orange">Expert Advisory</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyExpertAdvisory.map((reason, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-brand-orange to-orange-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                  {reason.icon}
                </div>
                <h3 className="font-montserrat font-bold text-lg text-brand-blue mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl text-brand-blue mb-4">
              Our Advisory <span className="text-brand-orange">Process</span>
            </h2>
            <p className="text-gray-600 text-lg">
              7 steps to secure, verified property ownership
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="relative mb-8 last:mb-0"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {index < processSteps.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-full bg-brand-orange/20 -z-10" />
                )}

                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-brand-blue to-blue-800 rounded-full flex items-center justify-center text-white font-montserrat font-bold text-xl shadow-lg">
                    {step.step}
                  </div>

                  <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-brand-orange">{step.icon}</div>
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

        {/* Target Clients */}
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
              <span className="text-brand-orange">Our Advisory?</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="space-y-4">
              {targetClients.map((client, index) => (
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
                  <p className="text-gray-700 text-lg">{client}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Guarantee Section */}
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
            <Shield className="w-20 h-20 mx-auto mb-6 text-brand-orange" />
            <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl mb-6">
              Our Commitment to You
            </h2>
            <p className="text-white/90 text-lg mb-6 leading-relaxed">
              We only recommend properties that pass our comprehensive due
              diligence. If any title or ownership issues arise after our
              verification, we take full responsibility and work to resolve them
              at no additional cost to you.
            </p>
            <blockquote className="text-2xl md:text-3xl font-montserrat font-bold text-brand-orange italic">
              "Your peace of mind is our guarantee."
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
            Get Expert Guidance{" "}
            <span className="text-brand-orange">Today</span>
          </h2>
          <p className="text-gray-600 text-xl mb-8">
            Don't risk your investment. Let our experts guide you through every
            step.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://wa.me/2348132833083?text=Hello%20IMMOVABLES%20REALTY,%20I%20need%20expert%20advisory%20for%20land%20acquisition.%20Can%20we%20schedule%20a%20consultation?"
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

export default ExpertAdvisory;
