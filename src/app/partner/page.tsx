"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check, Users, TrendingUp, Award, Handshake, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function PartnerPage() {
  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Competitive Commission Structure",
      description: "Industry-leading commission rates that reward your hard work and dedication.",
      color: "from-brand-orange to-orange-600",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Dedicated Support Team",
      description: "Get full support from our team to close deals faster and more efficiently.",
      color: "from-brand-blue to-blue-600",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Performance Incentives",
      description: "Additional bonuses and rewards for top-performing partners.",
      color: "from-purple-600 to-indigo-600",
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Flexible Partnership",
      description: "Work at your own pace with no minimum sales requirements.",
      color: "from-teal-600 to-green-600",
    },
  ];

  const requirements = [
    "Must be a registered real estate agent or consultant",
    "Strong network and client base",
    "Professional conduct and integrity",
    "Good communication and negotiation skills",
    "Commitment to delivering excellent service",
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        title="Partner With Us"
        subtitle="Join Our Growing Network of Successful Real Estate Partners"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Partner With Us", href: "/partner" },
        ]}
      />

      {/* Commission Structure Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-montserrat font-extrabold text-4xl md:text-5xl text-brand-blue mb-6">
              Commission <span className="text-brand-orange">Structure</span>
            </h2>
            <p className="text-gray-600 text-lg">
              We believe in rewarding our partners generously. Check out our transparent commission structure and incentives.
            </p>
          </motion.div>

          {/* Commission Structure Image */}
          <motion.div
            className="max-w-5xl mx-auto mb-16"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-brand-blue/10">
              <div className="relative w-full h-[600px]">
                <Image
                  src="/images/commission structure.jpeg"
                  alt="Realtors Commission Structure and Incentives"
                  fill
                  className="object-contain p-8"
                />
              </div>
            </div>
          </motion.div>

          {/* Download Button */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a
              href="/images/commission structure.jpeg"
              download="IMMOVABLES_REALTY_Commission_Structure.jpeg"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-orange to-orange-600 text-white px-8 py-4 rounded-full font-montserrat font-bold shadow-xl hover:from-brand-blue hover:to-blue-800 transition-all"
            >
              Download Commission Structure
              <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-montserrat font-extrabold text-4xl md:text-5xl text-brand-blue mb-6">
              Why Partner <span className="text-brand-orange">With Us?</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Join a team that values your success as much as ours
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-brand-orange"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center text-white mb-6`}
                >
                  {benefit.icon}
                </div>
                <h3 className="font-montserrat font-bold text-xl text-brand-blue mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-montserrat font-extrabold text-4xl md:text-5xl text-brand-blue mb-6">
                Partner <span className="text-brand-orange">Requirements</span>
              </h2>
              <p className="text-gray-600 text-lg">
                We're looking for dedicated professionals who share our values
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-brand-orange to-orange-600 rounded-full flex items-center justify-center">
                      <Check className="text-white" size={18} strokeWidth={3} />
                    </div>
                    <p className="text-gray-700 text-lg flex-1">{requirement}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-blue via-blue-900 to-brand-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/Smart Investors.jpeg"
            alt="Partner with Immovables Realty"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/90 to-blue-900/80" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-montserrat font-extrabold text-4xl md:text-5xl text-white mb-6">
              Ready to Join Our Team?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Start earning competitive commissions and grow your real estate career with us today.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="https://api.whatsapp.com/send/?phone=2348132833083&text=Hello+IMMOVABLES+REALTY%2C+I+would+like+to+become+a+partner+and+learn+more+about+your+commission+structure.&type=phone_number&app_absent=0">
                <motion.button
                  className="bg-brand-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full font-montserrat font-bold shadow-xl flex items-center gap-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Become a Partner
                  <ArrowRight size={20} />
                </motion.button>
              </Link>

              <Link href="/contact">
                <motion.button
                  className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white/20 px-8 py-4 rounded-full font-montserrat font-bold flex items-center gap-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
