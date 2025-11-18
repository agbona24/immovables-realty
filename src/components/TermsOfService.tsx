"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Building2,
  Shield,
  CreditCard,
  ClipboardCheck,
  Users,
  AlertCircle,
  CheckCircle,
  Globe,
  MessageSquare,
  DollarSign,
  Scale,
  Lock,
  Mail,
  Phone,
  MapPin,
  Gavel,
} from "lucide-react";

const TermsOfService = () => {
  const sections = [
    {
      id: "company-info",
      title: "1. Company Information",
      icon: <Building2 className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            Immovables Realty is a registered real estate development and
            property marketing company in Nigeria.
          </p>
          <div className="bg-blue-50 rounded-xl p-6 border-2 border-brand-blue/20">
            <p className="font-bold text-brand-blue mb-3">
              RC Number: 7446982
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-700 mb-1">
                    Registered Office:
                  </p>
                  <p className="text-gray-600">
                    12, Obasanjo Way, off Akin Olugbade, Ita Eko, Abeokuta, Ogun
                    State, Nigeria
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-brand-orange" />
                <a
                  href="https://immovablesrealty.com"
                  className="text-brand-blue hover:underline"
                >
                  immovablesrealty.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-orange" />
                <a
                  href="mailto:info@immovablesrealty.com"
                  className="text-brand-blue hover:underline"
                >
                  info@immovablesrealty.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-orange" />
                <a
                  href="tel:+2348132833083"
                  className="text-brand-blue hover:underline"
                >
                  +234 813 283 3083
                </a>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "scope",
      title: "2. Scope of Services",
      icon: <FileText className="w-6 h-6" />,
      intro: "Immovables Realty provides:",
      items: [
        "Sale of residential and commercial landed properties",
        "Development and marketing of real estate estates (including Wura Garden and Prime Haven Grove Estate)",
        "Facilitation of property title documentation (Deed of Assignment, Survey, Registered Deed, Agreement)",
        "Customer advisory, investment guidance, and after-sales support",
      ],
      note: "All estates marketed by the company carry verified land titles, Freehold ownership, Registered Survey, and Registered Deed of Assignment, except where otherwise stated.",
    },
    {
      id: "documentation",
      title: "3. Exclusive Documentation Policy",
      icon: <Shield className="w-6 h-6" />,
      highlight: true,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 font-semibold">
            Effective immediately, ALL property documentation — including but
            not limited to Deeds of Assignment, Agreements, and related legal
            instruments — shall be exclusively prepared by Immovables Realty.
          </p>
          <div className="bg-orange-50 rounded-xl p-6 border-2 border-brand-orange/30">
            <p className="font-bold text-brand-orange mb-3">
              This policy applies to:
            </p>
            <ul className="space-y-2">
              {[
                "All past and future transactions",
                "All estates operated or marketed by Immovables Realty",
                "All clients — local and international",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-gray-700">
            Clients may request review by a legal representative only AFTER our
            company has prepared the documents.
          </p>
          <p className="text-red-600 font-semibold">
            No third-party prepared documentation shall be accepted or
            recognized for land purchased through Immovables Realty.
          </p>
        </div>
      ),
    },
    {
      id: "kyc",
      title: "4. Know-Your-Customer (KYC) Compliance",
      icon: <ClipboardCheck className="w-6 h-6" />,
      intro:
        "All Clients MUST comply with Immovables Realty KYC requirements before the release of documentation, including but not limited to:",
      items: [
        "Valid identification",
        "Proof of payment",
        "BVN verification (where required)",
        "Completion of Client Information Form",
      ],
      note: "Failure to comply will delay or suspend documentation and allocation.",
    },
    {
      id: "payment",
      title: "5. Payment Terms",
      icon: <CreditCard className="w-6 h-6" />,
      items: [
        "All payments must be made to official company accounts or approved payment channels",
        "Installment plans are available only where expressly offered",
        "Clients must request an official Receipt / Payment Confirmation after every transaction",
        "Default or late payments may attract penalties or forfeiture as stated in individual property agreements",
      ],
    },
    {
      id: "allocation",
      title: "6. Allocation and Title Delivery",
      icon: <FileText className="w-6 h-6" />,
      items: [
        "Land allocation shall be issued only after completion of payment and KYC",
        "Title documentation (Survey, Deed of Assignment, etc.) is processed in line with agreed timelines",
        "Processing windows are subject to regulatory timeframes and do not constitute breach by Immovables Realty",
      ],
    },
    {
      id: "verification",
      title: "7. Client Verification Rights",
      icon: <CheckCircle className="w-6 h-6" />,
      intro: "Clients are legally entitled to:",
      items: [
        "Verify documents prepared by Immovables Realty",
        "Consult independent legal counsel",
        "Request corrections or rectifications where errors exist",
      ],
      note: "However, Immovables Realty retains full authority over the preparation and structure of legal documents as stated in Section 3.",
    },
    {
      id: "website",
      title: "8. Use of Website & Digital Content",
      icon: <Globe className="w-6 h-6" />,
      intro: "By using immovablesrealty.com, you agree that:",
      items: [
        "All content belongs to Immovables Realty and may not be copied without permission",
        "No false claims, impersonation, automated data scraping, or fraudulent inquiries are permitted",
        "The company may store your submitted information for operational, documentation, and compliance purposes as stated in our Privacy Policy",
      ],
    },
    {
      id: "marketing",
      title: "9. Marketing & Communication Consent",
      icon: <MessageSquare className="w-6 h-6" />,
      intro: "By engaging with Immovables Realty, you consent to receive:",
      items: [
        "Transaction correspondence",
        "Customer service calls",
        "Marketing messages, newsletters, and estate updates",
      ],
      note: "You may opt out anytime via info@immovablesrealty.com",
    },
    {
      id: "refund",
      title: "10. Refund Policy",
      icon: <DollarSign className="w-6 h-6" />,
      content: (
        <div className="space-y-3">
          <p className="text-gray-700">
            Refunds (where applicable) will follow the terms in your purchase
            agreement.
          </p>
          <p className="text-gray-700">
            Certain fees — including survey, documentation charges, legal fees,
            and administrative processing — may be{" "}
            <strong className="text-red-600">non-refundable</strong>.
          </p>
        </div>
      ),
    },
    {
      id: "client-responsibilities",
      title: "11. Client Responsibilities",
      icon: <Users className="w-6 h-6" />,
      intro: "Clients must:",
      items: [
        "Provide accurate information during registration and purchase",
        "Make payments only through authorized channels",
        "Avoid fraudulent claims, illegal land resale, or misrepresentation of ownership",
      ],
    },
    {
      id: "company-rights",
      title: "12. Company Rights",
      icon: <Shield className="w-6 h-6" />,
      intro: "Immovables Realty reserves the right to:",
      items: [
        "Decline or terminate transactions involving fraud, misrepresentation, or legal risks",
        "Update pricing, land availability, and documentation policies",
        "Modify these Terms at any time without prior personal notification (latest version will always be published on our website)",
      ],
    },
    {
      id: "liability",
      title: "13. Limitation of Liability",
      icon: <AlertCircle className="w-6 h-6" />,
      intro: "Immovables Realty shall NOT be liable for:",
      items: [
        "Damages arising from Client negligence or misinformation",
        "Unauthorized third-party financial transactions",
        "Delays caused by government agencies, land registries, or force majeure events",
        "Losses arising from Client failure to adhere to these Terms",
      ],
    },
    {
      id: "dispute",
      title: "14. Dispute Resolution",
      icon: <Gavel className="w-6 h-6" />,
      content: (
        <div className="space-y-3">
          <p className="text-gray-700">
            Any dispute shall first be handled internally through{" "}
            <a
              href="mailto:info@immovablesrealty.com"
              className="text-brand-blue hover:underline font-semibold"
            >
              info@immovablesrealty.com
            </a>
          </p>
          <p className="text-gray-700">
            If unresolved, parties agree to mediation or arbitration in{" "}
            <strong className="text-brand-blue">Ogun State, Nigeria</strong>{" "}
            before litigation.
          </p>
        </div>
      ),
    },
    {
      id: "governing-law",
      title: "15. Governing Law",
      icon: <Scale className="w-6 h-6" />,
      intro: "These Terms are governed by:",
      items: [
        "The Laws of the Federal Republic of Nigeria",
        "Property & Land Use regulations applicable at state and federal levels",
        "International commercial standards (where relevant)",
      ],
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
            <FileText className="w-10 h-10 text-white" />
          </motion.div>

          <h1 className="font-montserrat font-extrabold text-4xl md:text-5xl text-brand-blue mb-4">
            Terms of Service
          </h1>

          <motion.p
            className="text-gray-600 text-lg max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            These Terms of Service govern all interactions, transactions,
            documentation, and engagements between Immovables Realty and all
            clients, prospects, partners, agents, and stakeholders.
          </motion.p>

          <motion.div
            className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-6 border-2 border-brand-orange/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-gray-700 font-semibold">
              By accessing our website, purchasing land, making enquiries,
              signing documentation, or engaging with Immovables Realty through
              any means, you agree to be bound by these Terms.
            </p>
          </motion.div>
        </motion.div>

        {/* Terms Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow ${
                section.highlight ? "border-2 border-brand-orange" : ""
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
                      ? "bg-brand-orange/10"
                      : "bg-brand-blue/10"
                  } rounded-xl flex items-center justify-center ${
                    section.highlight ? "text-brand-orange" : "text-brand-blue"
                  } flex-shrink-0`}
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
                      <AlertCircle className="w-4 h-4 inline mr-2 text-brand-blue" />
                      {section.note}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Acceptance Section */}
          <motion.div
            className="bg-gradient-to-br from-brand-blue to-blue-900 rounded-2xl p-8 text-white shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="font-montserrat font-bold text-2xl mb-4">
                  16. Acceptance
                </h2>
                <p className="text-blue-100 mb-6">
                  By interacting with Immovables Realty online or offline, you
                  acknowledge:
                </p>

                <div className="space-y-3">
                  {[
                    "You have read, understood, and accepted these Terms",
                    "You agree to comply with all policies contained herein",
                    "You waive any claims based on ignorance of these Terms",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                      <span className="text-white">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/20">
                  <p className="text-blue-100 text-sm">
                    <strong className="text-white">Signed:</strong>
                    <br />
                    Management, Immovables Realty
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer Note */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="bg-orange-50 rounded-2xl p-6 border-2 border-brand-orange/30">
            <p className="text-gray-700 mb-4">
              <strong className="text-brand-orange">Important:</strong> These
              terms are legally binding. For questions or clarifications, please
              contact us at{" "}
              <a
                href="mailto:info@immovablesrealty.com"
                className="text-brand-blue hover:underline font-semibold"
              >
                info@immovablesrealty.com
              </a>
            </p>
            <p className="text-sm text-gray-600">
              Last Updated: November 18, 2025
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TermsOfService;
