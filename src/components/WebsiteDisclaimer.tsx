"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  Info,
  Shield,
  Globe,
  TrendingUp,
  UserCheck,
  RefreshCw,
  CheckCircle,
  Mail,
  Phone,
  ExternalLink,
  Lock,
} from "lucide-react";

const WebsiteDisclaimer = () => {
  const sections = [
    {
      id: "accuracy",
      title: "1. Information Accuracy",
      icon: <Info className="w-6 h-6" />,
      content: (
        <p className="text-gray-700 leading-relaxed">
          All information provided on this website is for{" "}
          <strong className="text-brand-blue">
            general guidance and marketing awareness
          </strong>
          . While Immovables Realty ensures accuracy, we do not guarantee that
          all data remains current or error-free at all times.
        </p>
      ),
    },
    {
      id: "liability",
      title: "2. No Liability for Misinterpretation",
      icon: <AlertTriangle className="w-6 h-6" />,
      content: (
        <p className="text-gray-700 leading-relaxed">
          Immovables Realty shall{" "}
          <strong className="text-red-600">not be held responsible</strong> for
          any decision, misunderstanding, or loss arising from reliance on
          information provided on this website{" "}
          <strong className="text-brand-blue">
            without direct consultation with the company
          </strong>
          .
        </p>
      ),
    },
    {
      id: "cyber-safety",
      title: "3. Cyber Safety & Domain Protection Disclaimer",
      icon: <Shield className="w-6 h-6" />,
      highlight: true,
      content: (
        <div className="space-y-6">
          <div className="bg-red-50 rounded-xl p-6 border-2 border-red-300">
            <div className="flex items-start gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="font-bold text-red-600 text-lg">
                Updated Clause — Cyber Security Warning
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Immovables Realty is{" "}
              <strong className="text-red-600">NOT liable</strong> for any loss,
              financial damage, or fraudulent activity arising from:
            </p>
            <ul className="space-y-3">
              {[
                "Clicking fake or cloned website links",
                "Responding to phishing emails or social media spam",
                "Transacting on any unauthorized domain or WhatsApp line claiming to be the company",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-gray-700"
                >
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-r from-brand-blue to-blue-900 rounded-xl p-8 text-white">
            <div className="flex items-start gap-3 mb-4">
              <Lock className="w-8 h-8 text-brand-orange flex-shrink-0" />
              <div>
                <p className="font-bold text-xl mb-3">
                  ONLY Official Domain
                </p>
                <p className="text-blue-100 mb-4">
                  The ONLY official and approved domain for Immovables Realty
                  is:
                </p>
                <a
                  href="https://www.immovablesrealty.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand-orange hover:bg-orange-600 text-white px-6 py-3 rounded-full font-montserrat font-bold transition"
                >
                  <Globe className="w-5 h-5" />
                  www.immovablesrealty.com
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-xl p-6 border-l-4 border-yellow-500">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-yellow-800 mb-2">
                  Important Warning
                </p>
                <p className="text-gray-700 mb-4">
                  Any other link, webpage, or payment portal not officially
                  provided by us should be considered{" "}
                  <strong className="text-red-600">fraudulent</strong> and used
                  at the user's own risk.
                </p>
                <p className="text-gray-700 font-semibold">
                  For verification of any information, always contact:
                </p>
                <div className="mt-3 space-y-2">
                  <a
                    href="mailto:info@immovablesrealty.com"
                    className="flex items-center gap-2 text-brand-blue hover:underline"
                  >
                    <Mail className="w-4 h-4" />
                    📩 info@immovablesrealty.com
                  </a>
                  <a
                    href="tel:+2348132833083"
                    className="flex items-center gap-2 text-brand-blue hover:underline"
                  >
                    <Phone className="w-4 h-4" />
                    ☎️ +234 813 283 3083
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "third-party",
      title: "4. Third-Party Website Links",
      icon: <ExternalLink className="w-6 h-6" />,
      content: (
        <p className="text-gray-700 leading-relaxed">
          Any external websites referenced are beyond our control. Immovables
          Realty is{" "}
          <strong className="text-red-600">not responsible</strong> for their
          content, security, or implications.
        </p>
      ),
    },
    {
      id: "investment",
      title: "5. No Legal or Investment Guarantee",
      icon: <TrendingUp className="w-6 h-6" />,
      content: (
        <p className="text-gray-700 leading-relaxed">
          Property values, locations, and projections are subject to market
          forces. Immovables Realty{" "}
          <strong className="text-red-600">does not guarantee</strong>{" "}
          investment earnings, future appreciation, or resale profits.
        </p>
      ),
    },
    {
      id: "user-responsibility",
      title: "6. User Responsibility",
      icon: <UserCheck className="w-6 h-6" />,
      intro: "By using this website, you agree that:",
      items: [
        "You will verify all payment details directly with the company",
        "You assume full responsibility for your online safety practices",
        "Immovables Realty bears no liability for your personal cyber negligence",
      ],
    },
    {
      id: "updates",
      title: "7. Policy Updates",
      icon: <RefreshCw className="w-6 h-6" />,
      content: (
        <p className="text-gray-700 leading-relaxed">
          This disclaimer may be updated periodically without prior
          notification. Continued website use implies acceptance of the latest
          version.
        </p>
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
            <AlertTriangle className="w-10 h-10 text-white" />
          </motion.div>

          <h1 className="font-montserrat font-extrabold text-4xl md:text-5xl text-brand-blue mb-4">
            Website Disclaimer
          </h1>

          <motion.p
            className="text-gray-600 text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            IMMOVABLES REALTY — Important information about using this website
            and protecting yourself online
          </motion.p>
        </motion.div>

        {/* Disclaimer Sections */}
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
                      ? "bg-brand-orange/10 text-brand-orange"
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
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ready for Use Banner */}
        <motion.div
          className="mt-12 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border-2 border-green-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-start gap-4">
            <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0" />
            <div>
              <p className="font-bold text-green-800 text-xl mb-2">
                ✔️ DOCUMENT READY FOR USE
              </p>
              <p className="text-gray-700">
                This disclaimer is legally binding and protects both Immovables
                Realty and website users. By continuing to use this website, you
                acknowledge and accept all terms outlined above.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Important Security Notice */}
        <motion.div
          className="mt-8 bg-gradient-to-br from-brand-blue to-blue-900 rounded-2xl p-8 text-white shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <Shield className="w-12 h-12 mx-auto mb-4 text-brand-orange" />
            <h2 className="font-montserrat font-bold text-2xl mb-4">
              Stay Safe Online
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Always verify communications and payment requests. If in doubt,
              contact us directly through our official channels.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:info@immovablesrealty.com"
                className="inline-flex items-center gap-2 bg-brand-orange hover:bg-orange-600 text-white px-6 py-3 rounded-full font-montserrat font-bold transition"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
              <a
                href="tel:+2348132833083"
                className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-full font-montserrat font-bold transition"
              >
                <Phone className="w-5 h-5" />
                Call Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WebsiteDisclaimer;
