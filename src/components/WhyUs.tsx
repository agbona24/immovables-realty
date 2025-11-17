"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect } from "react";
import {
  CheckCircle2,
  Shield,
  Clock,
  Handshake,
  TrendingUp,
  Award,
} from "lucide-react";

// Animated Counter Component
const Counter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, count, target]);

  return (
    <motion.span ref={ref}>
      {isInView && <motion.span>{rounded}</motion.span>}
      {suffix}
    </motion.span>
  );
};

const WhyUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const reasons = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Verified Properties",
      description:
        "All our properties come with verified government approvals and legitimate documentation.",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "10+ Years Experience",
      description:
        "Over a decade of excellence in real estate, serving thousands of satisfied clients.",
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Transparent Dealings",
      description:
        "Complete transparency in all transactions with no hidden charges or fees.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "High ROI",
      description:
        "Strategic locations that guarantee excellent returns on your investment over time.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Award-Winning Service",
      description:
        "Recognized for excellence in customer service and property development.",
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: "Flexible Payments",
      description:
        "Customized payment plans designed to fit your budget and timeline.",
    },
  ];

  const stats = [
    { value: 500, suffix: "+", label: "Properties Sold" },
    { value: 1000, suffix: "+", label: "Happy Clients" },
    { value: 50, suffix: "+", label: "Prime Locations" },
    { value: 10, suffix: "+", label: "Years in Business" },
  ];

  return (
    <section id="why-us" className="py-20 bg-white relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 via-transparent to-brand-orange/5"></div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="text-brand-orange font-montserrat font-bold text-sm uppercase tracking-wider"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            className="font-montserrat font-extrabold text-4xl md:text-5xl text-brand-blue mt-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
          >
            What Makes Us{" "}
            <span className="text-brand-orange">Stand Out</span>
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 }}
          >
            We're committed to providing exceptional service and helping you
            achieve your property ownership dreams with integrity and excellence.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.5 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
              }
              transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
            >
              {/* Background Circle Animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-brand-orange/10 rounded-3xl -z-10"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
              />

              <div className="p-8">
                <motion.div
                  className="font-montserrat font-extrabold text-5xl md:text-6xl bg-gradient-to-r from-brand-blue to-brand-orange bg-clip-text text-transparent mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  <Counter target={stat.value} suffix={stat.suffix} />
                </motion.div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ delay: 0.9 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100 group-hover:border-brand-orange">
                {/* Icon */}
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-brand-blue to-blue-800 rounded-xl flex items-center justify-center text-white mb-6 group-hover:bg-gradient-to-br group-hover:from-brand-orange group-hover:to-orange-600 transition-all duration-300"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {reason.icon}
                </motion.div>

                {/* Content */}
                <h3 className="font-montserrat font-bold text-xl text-brand-blue mb-3 group-hover:text-brand-orange transition-colors">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>

                {/* Decorative Corner */}
                <motion.div
                  className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-brand-orange/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-brand-blue to-blue-800 rounded-3xl p-12 text-center text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.5 }}
        >
          {/* Animated Background */}
          <motion.div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <div className="relative z-10">
            <motion.h3
              className="font-montserrat font-extrabold text-3xl md:text-4xl mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1.6 }}
            >
              Ready to Own Your Dream Property?
            </motion.h3>
            <motion.p
              className="text-xl mb-8 text-gray-200"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.7 }}
            >
              Join thousands of satisfied property owners today
            </motion.p>
            <motion.a
              href="#contact"
              className="inline-block bg-brand-orange text-white px-10 py-4 rounded-full font-montserrat font-bold text-lg hover:bg-white hover:text-brand-orange transition shadow-xl"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Now
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
