"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  FileText,
  Users,
  Mail,
  Phone,
  MapPin,
  AlertCircle,
  CheckCircle,
  Globe,
  Database,
  Eye,
} from "lucide-react";

const PrivacyPolicy = () => {
  const sections = [
    {
      id: "summary",
      title: "1. Key Summary",
      icon: <Shield className="w-6 h-6" />,
      items: [
        "We collect only the data needed to provide services and communicate with clients",
        "We use legal bases such as consent, contract, legal obligation, and legitimate interests",
        "We secure your data with administrative, technical, and physical measures",
        "You have rights to access, correct, delete, restrict, or object to processing",
        "All enquiries should be sent to info@immovablesrealty.com",
      ],
    },
    {
      id: "data-collection",
      title: "2. Data We Collect",
      icon: <Database className="w-6 h-6" />,
      items: [
        "Identity & contact details",
        "Property and transaction information",
        "Technical and usage data (cookies, IP, device info)",
        "Communication records",
        "Sensitive data only when legally required and with explicit consent",
      ],
    },
    {
      id: "legal-bases",
      title: "3. Legal Bases for Processing",
      icon: <FileText className="w-6 h-6" />,
      items: [
        "Contract performance",
        "Legal compliance",
        "Consent",
        "Legitimate business interest (marketing, service improvement, fraud prevention)",
      ],
    },
    {
      id: "cookies",
      title: "4. Cookies & Tracking",
      icon: <Eye className="w-6 h-6" />,
      content:
        "We use cookies for essential site functions, analytics, performance, and (with consent) marketing. Cookie preferences may be managed through your browser or cookie banner.",
    },
    {
      id: "sharing",
      title: "5. How We Share Data",
      icon: <Users className="w-6 h-6" />,
      intro: "We may share your data with:",
      items: [
        "Service providers (hosting, CRM, payment processors)",
        "Legal and regulatory authorities when required",
        "Affiliated companies under Immovables Group",
        "Transaction partners at your request",
      ],
      note: "International transfers include contractual safeguards.",
    },
    {
      id: "security",
      title: "6. Data Security",
      icon: <Lock className="w-6 h-6" />,
      content:
        "We apply encryption, access controls, staff training, and secure servers. If you suspect a breach, notify info@immovablesrealty.com immediately.",
    },
    {
      id: "retention",
      title: "7. Retention",
      icon: <Database className="w-6 h-6" />,
      content:
        "Data is retained only as long as needed for legal, transactional, and compliance purposes. You may request deletion subject to legal constraints.",
    },
    {
      id: "rights",
      title: "8. Your Rights",
      icon: <CheckCircle className="w-6 h-6" />,
      intro: "You may request:",
      items: [
        "Access to your data",
        "Correction of inaccuracies",
        "Deletion where applicable",
        "Restriction or objection to processing",
        "Withdrawal of consent",
      ],
      note: "To exercise these rights, email info@immovablesrealty.com",
    },
    {
      id: "marketing",
      title: "9. Marketing",
      icon: <Mail className="w-6 h-6" />,
      content:
        "You will only receive marketing messages if you consent or if we have a legitimate interest. You may unsubscribe anytime via email or link.",
    },
    {
      id: "children",
      title: "10. Children",
      icon: <AlertCircle className="w-6 h-6" />,
      content: "We do not intentionally collect data from anyone under 18.",
    },
    {
      id: "updates",
      title: "11. Policy Updates",
      icon: <FileText className="w-6 h-6" />,
      content:
        "Changes may be made periodically. When we update this policy, we will publish the new effective date.",
    },
    {
      id: "breach",
      title: "12. Data Breach Response",
      icon: <AlertCircle className="w-6 h-6" />,
      content:
        "We will notify affected individuals and authorities when legally required.",
    },
    {
      id: "third-party",
      title: "13. Third-Party Links",
      icon: <Globe className="w-6 h-6" />,
      content:
        "We are not responsible for the privacy practices of external sites linked from our website.",
    },
    {
      id: "legal-framework",
      title: "14. Legal Framework",
      icon: <Shield className="w-6 h-6" />,
      intro: "This policy aligns with:",
      items: [
        "Nigeria Data Protection Act (NDPA)",
        "Nigerian Data Protection Regulation (NDPR)",
        "International best practices (GDPR-aligned principles)",
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
            <Shield className="w-10 h-10 text-white" />
          </motion.div>

          <h1 className="font-montserrat font-extrabold text-4xl md:text-5xl text-brand-blue mb-4">
            Privacy Policy
          </h1>

          <div className="text-gray-600 space-y-2 mb-8">
            <p>
              <strong>Effective date:</strong> November 18, 2025
            </p>
            <p>
              <strong>Last updated:</strong> November 18, 2025
            </p>
          </div>

          <motion.div
            className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-6 border-2 border-brand-blue/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="font-montserrat font-bold text-xl text-brand-blue mb-4">
              Contact Information
            </h2>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                <div className="text-left">
                  <p className="text-gray-700">
                    12, Obasanjo Way, off Akin Olugbade, Ita Eko, Abeokuta, Ogun
                    State, Nigeria
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-brand-orange" />
                <a
                  href="tel:+2348132833083"
                  className="text-gray-700 hover:text-brand-blue"
                >
                  +234 813 283 3083
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-brand-orange" />
                <a
                  href="mailto:info@immovablesrealty.com"
                  className="text-gray-700 hover:text-brand-blue"
                >
                  info@immovablesrealty.com
                </a>
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-4">
              All privacy and data protection enquiries:{" "}
              <a
                href="mailto:info@immovablesrealty.com"
                className="text-brand-blue hover:underline"
              >
                info@immovablesrealty.com
              </a>
            </p>
          </motion.div>
        </motion.div>

        {/* Policy Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue flex-shrink-0">
                  {section.icon}
                </div>
                <div className="flex-1">
                  <h2 className="font-montserrat font-bold text-2xl text-brand-blue mb-4">
                    {section.title}
                  </h2>

                  {section.intro && (
                    <p className="text-gray-700 mb-3">{section.intro}</p>
                  )}

                  {section.content && (
                    <p className="text-gray-700 leading-relaxed">
                      {section.content}
                    </p>
                  )}

                  {section.items && (
                    <ul className="space-y-2">
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
                    <p className="text-gray-600 italic mt-4 text-sm">
                      {section.note}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Contact & Complaints Section */}
          <motion.div
            className="bg-gradient-to-br from-brand-blue to-blue-900 rounded-2xl p-8 text-white shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="font-montserrat font-bold text-2xl mb-4">
                  15. Contact & Complaints
                </h2>
                <p className="text-blue-100 mb-4">
                  All privacy enquiries or complaints should be directed to:
                </p>

                <div className="space-y-3 bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-brand-orange" />
                    <a
                      href="mailto:info@immovablesrealty.com"
                      className="hover:text-brand-orange transition"
                    >
                      info@immovablesrealty.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-brand-orange" />
                    <a
                      href="tel:+2348132833083"
                      className="hover:text-brand-orange transition"
                    >
                      +234 813 283 3083
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-orange flex-shrink-0 mt-1" />
                    <span>
                      12, Obasanjo Way, off Akin Olugbade, Ita Eko, Abeokuta,
                      Ogun State
                    </span>
                  </div>
                </div>

                <p className="text-blue-100 mt-4 text-sm">
                  If unresolved, you may complain to the{" "}
                  <strong className="text-white">
                    Nigeria Data Protection Commission (NDPC)
                  </strong>{" "}
                  or your home country regulator.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Internal Commitments */}
          <motion.div
            className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-montserrat font-bold text-2xl text-brand-blue mb-4">
              Internal Commitments (Annex)
            </h2>
            <ul className="grid md:grid-cols-2 gap-3">
              {[
                "Maintain internal data governance systems",
                "Perform DPIAs for high-risk processing",
                "Enforce employee data access controls",
                "Validated contracts with third-party processors",
                "Regular policy and security reviews",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Footer Note */}
        <motion.div
          className="mt-12 text-center text-sm text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p>
            This privacy policy is a legal document. By using our services, you
            acknowledge that you have read and understood this policy.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
