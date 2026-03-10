"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Clock, ArrowRight, TrendingUp, Building2, Lightbulb } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
}

interface BlogPageClientProps {
  posts: BlogPost[];
}

// Map categories to icons and colors
const getCategoryStyle = (category: string) => {
  const styles: Record<string, { icon: React.ReactNode; color: string }> = {
    "Infrastructure": { icon: <TrendingUp className="w-6 h-6" />, color: "from-blue-600 to-brand-blue" },
    "Market Trends": { icon: <Building2 className="w-6 h-6" />, color: "from-brand-orange to-orange-600" },
    "Investment Guide": { icon: <Lightbulb className="w-6 h-6" />, color: "from-indigo-600 to-purple-600" },
    "Investment": { icon: <TrendingUp className="w-6 h-6" />, color: "from-teal-600 to-green-600" },
    "Property Spotlight": { icon: <Building2 className="w-6 h-6" />, color: "from-teal-600 to-green-600" },
    "Investment Strategy": { icon: <TrendingUp className="w-6 h-6" />, color: "from-rose-600 to-pink-600" },
    "Wealth Building": { icon: <Lightbulb className="w-6 h-6" />, color: "from-amber-600 to-yellow-600" },
    "Beginner Guide": { icon: <Lightbulb className="w-6 h-6" />, color: "from-cyan-600 to-blue-600" },
    "Education": { icon: <Lightbulb className="w-6 h-6" />, color: "from-purple-600 to-indigo-600" },
    "Promo": { icon: <TrendingUp className="w-6 h-6" />, color: "from-green-600 to-teal-600" },
    "Company News": { icon: <Building2 className="w-6 h-6" />, color: "from-brand-blue to-blue-800" },
  };
  return styles[category] || { icon: <Lightbulb className="w-6 h-6" />, color: "from-gray-600 to-gray-800" };
};

export default function BlogPageClient({ posts }: BlogPageClientProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-brand-blue via-blue-800 to-brand-blue text-white py-20 relative overflow-hidden">
          {/* Animated Background */}
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 bg-brand-orange rounded-full opacity-20 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h1
                className="font-montserrat font-extrabold text-5xl md:text-6xl lg:text-7xl mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Real Estate Insights & <span className="text-brand-orange">Investment Tips</span>
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl text-gray-200 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Expert advice, market analysis, and strategies to grow your wealth through real estate
              </motion.p>
            </motion.div>
          </div>

          {/* Wave Separator */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg
              className="w-full h-24 fill-gray-50"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
            </svg>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20" ref={ref}>
          <div className="container mx-auto px-4">
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              {posts.map((post, index) => {
                const { icon, color } = getCategoryStyle(post.category);

                return (
                  <Link key={post.id} href={`/blog/${post.id}`}>
                    <motion.article
                      className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer h-full"
                      initial={{ opacity: 0, y: 50 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                      transition={{ delay: index * 0.05, duration: 0.5 }}
                      whileHover={{ y: -10 }}
                    >
                      {/* Card Header */}
                      <div className={`h-48 bg-gradient-to-br ${color} relative overflow-hidden p-6 flex items-end`}>
                        {/* Pattern */}
                        <motion.div
                          className="absolute inset-0 opacity-20"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                          }}
                        />

                        {/* Icon */}
                        <div className="relative z-10 bg-white/20 backdrop-blur-sm p-3 rounded-xl text-white">
                          {icon}
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xs font-semibold text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full">
                            {post.category}
                          </span>
                        </div>

                        <h3 className="font-montserrat font-bold text-xl text-brand-blue mb-3 group-hover:text-brand-orange transition-colors line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock size={14} />
                              <span>{post.readTime}</span>
                            </div>
                          </div>

                          <motion.span
                            className="text-brand-orange font-semibold flex items-center gap-1 group-hover:gap-2 transition-all"
                            whileHover={{ scale: 1.05 }}
                          >
                            Read More
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
                          </motion.span>
                        </div>
                      </div>
                    </motion.article>
                  </Link>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-brand-blue to-blue-800">
          <div className="container mx-auto px-4 text-center text-white">
            <motion.h2
              className="font-montserrat font-extrabold text-4xl md:text-5xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Ready to Start Your Investment Journey?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Get personalized advice from our expert real estate advisors
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href="/contact"
                className="inline-block bg-brand-orange text-white px-10 py-4 rounded-full font-montserrat font-bold text-lg hover:bg-white hover:text-brand-orange transition shadow-xl"
              >
                Contact Us Today
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
