"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Clock, ArrowRight, TrendingUp, Building2, Lightbulb } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { blogPosts } from "@/data/blogPosts";

const BlogPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const blogPosts = [
    {
      id: 1,
      title: "Ogun State's New International Airport | Real Estate Investment Opportunities",
      excerpt: "A look at how Ogun State's newly commissioned international airport is boosting trade, travel, and real estate opportunities.",
      category: "Infrastructure",
      date: "2025",
      readTime: "5 min read",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-blue-600 to-brand-blue",
    },
    {
      id: 2,
      title: "Ogun State Is Booming | Real Estate Investment Opportunities",
      excerpt: "Highlights Ogun State's recent economic surge driven by new infrastructure, positioning it as a top investment destination.",
      category: "Market Trends",
      date: "2025",
      readTime: "4 min read",
      icon: <Building2 className="w-6 h-6" />,
      color: "from-brand-orange to-orange-600",
    },
    {
      id: 3,
      title: "Ogun State Real Estate Investment Guide",
      excerpt: "Explores why Ogun State stands as one of South-West Nigeria's most industrious regions and a hotspot for real estate investors.",
      category: "Investment Guide",
      date: "2025",
      readTime: "6 min read",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "from-indigo-600 to-purple-600",
    },
    {
      id: 4,
      title: "Affordable & Profitable Real Estate Investment | Prime Haven Groven",
      excerpt: "An overview of Prime Haven Groven, showcasing an investment opportunity combining affordability and long-term profitability.",
      category: "Property Spotlight",
      date: "2025",
      readTime: "5 min read",
      icon: <Building2 className="w-6 h-6" />,
      color: "from-teal-600 to-green-600",
    },
    {
      id: 5,
      title: "National Investor Focus — Tangible, Transferable Asset",
      excerpt: "Discusses the value of real estate as a secure, tangible asset that retains value and offers long-term benefits.",
      category: "Investment Strategy",
      date: "2025",
      readTime: "4 min read",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-rose-600 to-pink-600",
    },
    {
      id: 6,
      title: "Investor Case – Why Land is the Best Asset for Preserving Wealth",
      excerpt: "Explains why land remains one of the safest assets for protecting and growing wealth over time.",
      category: "Wealth Building",
      date: "2025",
      readTime: "7 min read",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "from-amber-600 to-yellow-600",
    },
    {
      id: 7,
      title: "Why Land Banking is the Best Investment Strategy for Building Wealth",
      excerpt: "Introduces land banking as a reliable, low-risk strategy for generating generational wealth.",
      category: "Investment Strategy",
      date: "2025",
      readTime: "6 min read",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-purple-600 to-pink-600",
    },
    {
      id: 8,
      title: "How to Build Wealth Through Land Investment",
      excerpt: "Guides newcomers on how land investment works and why it's one of the most secure paths to long-term wealth.",
      category: "Beginner's Guide",
      date: "2025",
      readTime: "8 min read",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "from-cyan-600 to-blue-600",
    },
    {
      id: 9,
      title: "Why Buying Land in Ogun Beats Lagos or Ibadan Right Now",
      excerpt: "Compares Ogun with Lagos and Ibadan, explaining why Ogun currently offers better value and growth potential for investors.",
      category: "Market Analysis",
      date: "2025",
      readTime: "5 min read",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-green-600 to-teal-600",
    },
    {
      id: 10,
      title: "Swap Piggy Banks for Real Land Banks: Secure Your Child's Financial Future",
      excerpt: "Encourages parents to invest in land instead of traditional savings for a stronger financial future for their children.",
      category: "Family Planning",
      date: "2025",
      readTime: "5 min read",
      icon: <Building2 className="w-6 h-6" />,
      color: "from-blue-600 to-indigo-600",
    },
    {
      id: 11,
      title: "Why Investing in Land is a Smart Move for Long-Term Wealth Preservation",
      excerpt: "Examines land as a hedge against inflation and a stable, wealth-preserving investment option.",
      category: "Wealth Preservation",
      date: "2025",
      readTime: "6 min read",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "from-orange-600 to-red-600",
    },
    {
      id: 12,
      title: "Cash Flow First: Smart Investment Strategy",
      excerpt: "Explains why investors should prioritize cash-flow strategies before rushing into premature land purchases.",
      category: "Investment Strategy",
      date: "2025",
      readTime: "4 min read",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-violet-600 to-purple-600",
    },
    {
      id: 13,
      title: "Run a 'Cartel' in Real Estate — The Power of Group Investment",
      excerpt: "Shows how collaborative real estate investment can multiply buying power and returns legally.",
      category: "Investment Strategy",
      date: "2025",
      readTime: "7 min read",
      icon: <Building2 className="w-6 h-6" />,
      color: "from-fuchsia-600 to-pink-600",
    },
    {
      id: 14,
      title: "Not Every Hot Real Estate Location is Worth Your Money – Here's the Truth!",
      excerpt: "Breaks down the misconception that trending locations are always the best investments, urging strategic evaluation instead.",
      category: "Market Analysis",
      date: "2025",
      readTime: "6 min read",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "from-emerald-600 to-green-600",
    },
    {
      id: 15,
      title: "Top 5 Commercial Real Estate Investment Opportunities in Abeokuta for 2025",
      excerpt: "Lists the most promising commercial real estate opportunities emerging in Abeokuta for the coming year.",
      category: "Property Spotlight",
      date: "2025",
      readTime: "8 min read",
      icon: <Building2 className="w-6 h-6" />,
      color: "from-sky-600 to-blue-600",
    },
    {
      id: 16,
      title: "The Ultimate Guide to Buying Your First Home in Abeokuta, Ogun State",
      excerpt: "A beginner-friendly guide explaining what first-time homebuyers must know about purchasing property in Abeokuta.",
      category: "Beginner's Guide",
      date: "2025",
      readTime: "10 min read",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "from-lime-600 to-green-600",
    },
    {
      id: 17,
      title: "Why Abeokuta is Becoming Nigeria's Next Real Estate Hotspot",
      excerpt: "Highlights the reasons behind Abeokuta's rapid rise as a preferred real estate investment destination.",
      category: "Market Trends",
      date: "2025",
      readTime: "5 min read",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-brand-blue to-blue-800",
    },
    {
      id: 18,
      title: "Time to Build, Buy Houses as NHF Loan Facility Jumps 70%",
      excerpt: "A news update on Nigeria's NHF loan facility increase, creating better opportunities for homebuilding and affordable mortgages.",
      category: "News & Updates",
      date: "2025",
      readTime: "4 min read",
      icon: <Building2 className="w-6 h-6" />,
      color: "from-brand-orange to-orange-700",
    },
    {
      id: 19,
      title: "5 Reasons Why Real Estate is the Safest Investment",
      excerpt: "Outlines the key reasons real estate remains the most reliable investment for stability and long-term value.",
      category: "Investment Guide",
      date: "2025",
      readTime: "5 min read",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "from-red-600 to-rose-600",
    },
    {
      id: 20,
      title: "How to Diversify Your Investment Portfolio with Real Estate",
      excerpt: "Explains how adding real estate to a portfolio reduces risk and improves long-term financial balance.",
      category: "Portfolio Strategy",
      date: "2025",
      readTime: "7 min read",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-slate-600 to-gray-700",
    },
  ];

  const categories = [
    "All",
    "Infrastructure",
    "Market Trends",
    "Investment Guide",
    "Investment Strategy",
    "Wealth Building",
    "Property Spotlight",
  ];

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
            {blogPosts.map((post, index) => {
              // Map post ID to blog detail slugs
              const postSlugMap: Record<number, string> = {
                1: "ogun-state-airport-opportunities",
                2: "ogun-state-booming-opportunities",
                3: "ogun-state-investment-guide",
              };
              const hasDetailPage = post.id in postSlugMap;
              const postSlug = hasDetailPage ? postSlugMap[post.id] : null;

              const ArticleContent = (
                <motion.article
                  key={post.id}
                  className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer h-full"
                  initial={{ opacity: 0, y: 50 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                  }
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  whileHover={{ y: -10 }}
                >
                {/* Card Header */}
                <div className={`h-48 bg-gradient-to-br ${post.color} relative overflow-hidden p-6 flex items-end`}>
                  {/* Pattern */}
                  <motion.div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                  />

                  {/* Icon */}
                  <div className="relative z-10 bg-white/20 backdrop-blur-sm p-3 rounded-xl text-white">
                    {post.icon}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>

                  <h3 className="font-montserrat font-bold text-xl text-brand-blue mb-3 group-hover:text-brand-orange transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <motion.button
                      className="text-brand-orange font-semibold flex items-center gap-1 group-hover:gap-2 transition-all"
                      whileHover={{ scale: 1.05 }}
                    >
                      Read More
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            );

            return hasDetailPage && postSlug ? (
              <Link key={post.id} href={`/blog/${postSlug}`}>
                {ArticleContent}
              </Link>
            ) : (
              <div key={post.id}>{ArticleContent}</div>
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
              href="/#contact"
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
};

export default BlogPage;
