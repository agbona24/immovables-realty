"use client";

import { motion } from "framer-motion";
import {
  DollarSign,
  FileText,
  AlertTriangle,
  CheckCircle,
  Clock,
  Shield,
  Mail,
  Phone,
  MapPin,
  Home,
  Lock,
} from "lucide-react";

const RefundPolicy = () => {
  const sections = [
    {
      id: "general",
      title: "1. General Refund Conditions",
      icon: <DollarSign className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Immovables Realty operates a transparent and structured refund
            policy to protect both the company and its esteemed clients. Refunds
            may only be processed under conditions that comply with the
            company's terms of sale, documentation, and regulatory compliance.
          </p>

          <div className="bg-blue-50 rounded-xl p-6 border-2 border-brand-blue/20">
            <p className="font-bold text-brand-blue mb-3 flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Refund Request Submission
            </p>
            <p className="text-gray-700 mb-2">
              Refund requests must be submitted in writing through our official
              email:
            </p>
            <a
              href="mailto:info@immovablesrealty.com"
              className="text-brand-blue hover:underline font-semibold text-lg"
            >
              📩 info@immovablesrealty.com
            </a>
          </div>

          <div className="bg-orange-50 rounded-xl p-6 border-2 border-brand-orange/30">
            <div className="flex items-start gap-3">
              <Clock className="w-6 h-6 text-brand-orange flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-brand-orange mb-2">
                  Processing Timeline
                </p>
                <p className="text-gray-700">
                  All approved refunds shall be processed within{" "}
                  <strong className="text-brand-blue">60 working days</strong>,
                  except where additional legal verification is required.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "eligibility",
      title: "2. Refund Eligibility",
      icon: <CheckCircle className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray-700 font-medium">
            Refund decisions are considered on the following grounds:
          </p>

          {/* 2.1 Payment Default */}
          <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
            <h3 className="font-montserrat font-bold text-lg text-brand-blue mb-3">
              2.1 Payment Default
            </h3>
            <p className="text-gray-700">
              Failure to complete agreed payment plans within the stipulated
              timeframe may result in{" "}
              <strong className="text-red-600">
                forfeiture or administrative deductions
              </strong>
              .
            </p>
          </div>

          {/* 2.2 Documentation Reversal */}
          <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
            <h3 className="font-montserrat font-bold text-lg text-brand-blue mb-3">
              2.2 Documentation Reversal
            </h3>
            <p className="text-gray-700">
              Where documents have already been processed in the buyer's name,{" "}
              <strong className="text-brand-blue">
                administrative and processing fees will be deducted
              </strong>{" "}
              before a refund is issued.
            </p>
          </div>

          {/* 2.3 Client-Initiated Refund Request */}
          <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
            <h3 className="font-montserrat font-bold text-lg text-brand-blue mb-3">
              2.3 Client-Initiated Refund Request
            </h3>
            <p className="text-gray-700">
              Clients who voluntarily request a refund before allocation shall
              receive their funds{" "}
              <strong className="text-brand-blue">
                minus administrative fees
              </strong>
              .
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "non-development",
      title: "3. Non-Development & Land Security Policy",
      icon: <Home className="w-6 h-6" />,
      highlight: true,
      content: (
        <div className="space-y-4">
          <div className="bg-red-50 rounded-xl p-6 border-2 border-red-300">
            <div className="flex items-start gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="font-bold text-red-600 text-lg">
                Updated Clause — Estate Protection Policy
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              To protect estate integrity and prevent criminal encroachment:
            </p>
            <div className="bg-white rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                If a buyer fails to commence{" "}
                <strong className="text-brand-blue">
                  development, fencing, or security measures
                </strong>{" "}
                within{" "}
                <strong className="text-brand-orange">
                  Twelve (12) to Eighteen (18) months
                </strong>{" "}
                of allocation, Immovables Realty reserves the full right to:
              </p>
              <ul className="space-y-3 mb-4">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong>Reallocate the said property</strong>, OR
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong>Refund the client</strong>, subject to company
                    valuation and policy at the time of occurrence
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-xl p-6 border-l-4 border-yellow-500">
            <div className="flex items-start gap-3">
              <Shield className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-yellow-800 mb-2">
                  Why This Policy Exists
                </p>
                <p className="text-gray-700 mb-3">
                  This clause exists because{" "}
                  <strong>unsecured land becomes vulnerable to land grabbers and encroachment</strong>, and Immovables Realty is committed to
                  protecting all estate investments.
                </p>
                <p className="text-gray-700 font-semibold text-brand-blue">
                  Clients are strongly encouraged to secure and develop their
                  plots promptly to avoid administrative action.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "charges",
      title: "4. Administrative Charges",
      icon: <FileText className="w-6 h-6" />,
      intro: "All refunds are subject to:",
      items: [
        "File opening & closing charges",
        "Administrative processing fees",
        "Bank transaction or legal documentation fees where applicable",
      ],
      note: "These deductions are standard practice within the real estate industry.",
    },
    {
      id: "authority",
      title: "5. Final Decision Authority",
      icon: <Lock className="w-6 h-6" />,
      content: (
        <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl p-6 border-2 border-brand-blue/20">
          <p className="text-gray-700 leading-relaxed">
            Immovables Realty reserves the{" "}
            <strong className="text-brand-blue">full right</strong> to approve,
            decline, or determine the refund amount in line with business policy
            and legal compliance requirements.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-brand-blue to-blue-800 rounded-full mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <DollarSign className="w-10 h-10 text-white" />
          </motion.div>

          <h1 className="font-montserrat font-extrabold text-4xl md:text-5xl text-brand-blue mb-4">
            Refund & Returns Policy
          </h1>

          <motion.p
            className="text-gray-600 text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            IMMOVABLES REALTY — Transparent refund conditions to protect both
            the company and our esteemed clients
          </motion.p>
        </motion.div>

        {/* Policy Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow ${
                section.highlight ? "border-2 border-red-300" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 ${
                    section.highlight
                      ? "bg-red-100 text-red-600"
                      : "bg-brand-blue/10 text-brand-blue"
                  } rounded-xl flex items-center justify-center flex-shrink-0`}
                >
                  {section.icon}
                </div>
                <div className="flex-1">
                  <h2 className="font-montserrat font-bold text-2xl text-brand-blue mb-4">
                    {section.title}
                  </h2>

                  {section.intro && (
                    <p className="text-gray-700 mb-3 font-medium">
                      {section.intro}
                    </p>
                  )}

                  {section.content && <div>{section.content}</div>}

                  {section.items && (
                    <ul className="space-y-3">
                      {section.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-gray-700"
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.note && (
                    <p className="text-gray-600 italic mt-4 text-sm bg-gray-50 p-4 rounded-lg border-l-4 border-brand-blue">
                      <AlertTriangle className="w-4 h-4 inline mr-2 text-brand-blue" />
                      {section.note}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          className="mt-12 bg-gradient-to-br from-brand-blue to-blue-900 rounded-2xl p-8 text-white shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-6">
            <h2 className="font-montserrat font-bold text-2xl mb-4">
              Questions About Refunds?
            </h2>
            <p className="text-blue-100">
              Contact us for clarification on your specific situation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <a
              href="mailto:info@immovablesrealty.com"
              className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition"
            >
              <Mail className="w-5 h-5 text-brand-orange" />
              <div className="text-left">
                <div className="text-xs text-blue-200">Email</div>
                <div className="text-sm">info@immovablesrealty.com</div>
              </div>
            </a>

            <a
              href="tel:+2348132833083"
              className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition"
            >
              <Phone className="w-5 h-5 text-brand-orange" />
              <div className="text-left">
                <div className="text-xs text-blue-200">Phone</div>
                <div className="text-sm">+234 813 283 3083</div>
              </div>
            </a>

            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <MapPin className="w-5 h-5 text-brand-orange" />
              <div className="text-left">
                <div className="text-xs text-blue-200">Office</div>
                <div className="text-sm">Abeokuta, Ogun State</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Important Notice */}
        <motion.div
          className="mt-8 bg-orange-50 rounded-2xl p-6 border-2 border-brand-orange/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-brand-orange flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-brand-orange mb-2">
                Important Notice
              </p>
              <p className="text-gray-700 text-sm">
                This refund policy is legally binding and forms part of your
                purchase agreement with Immovables Realty. All refund decisions
                are made in accordance with this policy and applicable Nigerian
                real estate regulations.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RefundPolicy;
