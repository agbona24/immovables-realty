"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  Calendar,
  Clock,
  ArrowLeft,
  User,
  Tag,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
  };
  tags: string[];
}

interface BlogPostClientProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export default function BlogPostClient({ post, relatedPosts }: BlogPostClientProps) {
  const router = useRouter();

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareText = `Check out this article: ${post.title}`;

  const socialShare = [
    {
      name: "Facebook",
      icon: <Facebook size={20} />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    },
    {
      name: "Twitter",
      icon: <Twitter size={20} />,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-brand-blue via-blue-900 to-brand-blue text-white py-20">
          <div className="container mx-auto px-4">
            <motion.button
              onClick={() => router.back()}
              className="flex items-center gap-2 mb-8 hover:text-brand-orange transition"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <ArrowLeft size={20} />
              Back to Blog
            </motion.button>

            <motion.div
              className="max-w-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {/* Category Badge */}
              <div className="inline-block bg-brand-orange px-4 py-2 rounded-full text-sm font-bold mb-6">
                {post.category}
              </div>

              {/* Title */}
              <h1 className="font-montserrat font-extrabold text-4xl md:text-5xl lg:text-6xl mb-6">
                {post.title}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 text-gray-200">
                <div className="flex items-center gap-2">
                  <User size={18} />
                  <span>{post.author.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-4 gap-8">
                {/* Main Article */}
                <div className="lg:col-span-3">
                  <motion.article
                    className="bg-white rounded-2xl p-8 md:p-12 shadow-lg prose prose-lg max-w-none"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {/* Excerpt */}
                    <div className="text-xl text-gray-600 italic border-l-4 border-brand-orange pl-6 mb-8">
                      {post.excerpt}
                    </div>

                    {/* Content */}
                    <div
                      className="blog-content text-gray-700 leading-relaxed"
                      style={{
                        whiteSpace: "pre-line",
                      }}
                    >
                      {post.content}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap items-center gap-3 mt-12 pt-8 border-t border-gray-200">
                      <Tag size={18} className="text-brand-blue" />
                      {post.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.article>

                  {/* Author Box */}
                  <motion.div
                    className="bg-gradient-to-br from-brand-blue to-blue-800 text-white rounded-2xl p-8 mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="font-montserrat font-bold text-2xl mb-2">
                      About {post.author.name}
                    </h3>
                    <p className="text-gray-200 mb-6">{post.author.role}</p>
                    <p className="text-gray-100 leading-relaxed mb-6">
                      Expert real estate advisors helping investors make informed decisions
                      about property investments in Ogun State and beyond.
                    </p>
                    <Link
                      href="/contact"
                      className="inline-block bg-brand-orange text-white px-6 py-3 rounded-full font-montserrat font-bold hover:bg-white hover:text-brand-orange transition"
                    >
                      Get Expert Advice
                    </Link>
                  </motion.div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <div className="sticky top-24 space-y-6">
                    {/* Share Section */}
                    <motion.div
                      className="bg-white rounded-2xl p-6 shadow-lg"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <h3 className="font-montserrat font-bold text-lg text-brand-blue mb-4 flex items-center gap-2">
                        <Share2 size={20} />
                        Share Article
                      </h3>
                      <div className="space-y-3">
                        {socialShare.map((social, index) => (
                          <a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition group"
                          >
                            <div className="w-10 h-10 bg-brand-blue group-hover:bg-brand-orange rounded-full flex items-center justify-center text-white transition">
                              {social.icon}
                            </div>
                            <span className="text-gray-700 group-hover:text-brand-orange transition">
                              {social.name}
                            </span>
                          </a>
                        ))}
                      </div>
                    </motion.div>

                    {/* CTA Box */}
                    <motion.div
                      className="bg-gradient-to-br from-brand-orange to-orange-600 text-white rounded-2xl p-6 shadow-lg"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <h3 className="font-montserrat font-bold text-xl mb-3">
                        Ready to Invest?
                      </h3>
                      <p className="text-white/90 mb-4 text-sm">
                        Get personalized investment advice from our expert advisors.
                      </p>
                      <Link
                        href="/contact"
                        className="block w-full bg-white text-brand-orange text-center py-3 rounded-full font-montserrat font-bold hover:bg-brand-blue hover:text-white transition"
                      >
                        Contact Us
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <motion.h2
                className="font-montserrat font-extrabold text-3xl md:text-4xl text-brand-blue text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Related Articles
              </motion.h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {relatedPosts.map((relatedPost, index) => (
                  <motion.div
                    key={relatedPost.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link href={`/blog/${relatedPost.id}`}>
                      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col group">
                        <div className="p-6 flex-1 flex flex-col">
                          <div className="inline-block bg-brand-orange/10 text-brand-orange px-3 py-1 rounded-full text-xs font-bold mb-4 self-start">
                            {relatedPost.category}
                          </div>
                          <h3 className="font-montserrat font-bold text-xl text-brand-blue mb-3 group-hover:text-brand-orange transition line-clamp-2">
                            {relatedPost.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
                            {relatedPost.excerpt}
                          </p>
                          <div className="flex items-center gap-4 text-sm text-gray-500 pt-4 border-t border-gray-100">
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              <span>
                                {new Date(relatedPost.date).toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                })}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock size={14} />
                              <span>{relatedPost.readTime}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Newsletter CTA */}
        <section className="py-16 bg-gradient-to-r from-brand-blue to-blue-800">
          <div className="container mx-auto px-4 text-center text-white">
            <motion.h2
              className="font-montserrat font-extrabold text-4xl md:text-5xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Stay Updated on Real Estate Insights
            </motion.h2>
            <motion.p
              className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Get the latest market trends, investment tips, and property listings
              delivered to your inbox
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
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
