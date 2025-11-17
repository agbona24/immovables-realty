"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle: string;
  breadcrumbs?: { name: string; href: string }[];
}

const PageHero = ({ title, subtitle, breadcrumbs }: PageHeroProps) => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-blue via-blue-800 to-brand-blue">
      {/* Animated Background Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Animated Floating Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-brand-orange rounded-full opacity-30 blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          x: [0, 60, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full opacity-20 blur-3xl"
        animate={{
          scale: [1, 1.5, 1],
          x: [0, -70, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Rotating Center Orb */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-80 h-80 bg-brand-orange rounded-full opacity-15 blur-2xl"
        animate={{
          scale: [1, 1.6, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Geometric Shapes */}
      <motion.div
        className="absolute top-32 right-1/4 w-24 h-24 border-4 border-brand-orange opacity-30"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute bottom-32 left-1/4 w-20 h-20 border-4 border-white rounded-full opacity-30"
        animate={{
          rotate: [360, 0],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating Dots */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-brand-orange rounded-full opacity-40"
          style={{
            top: `${15 + i * 8}%`,
            left: `${8 + i * 9}%`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.4, 0.9, 0.4],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + i * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}

      {/* Animated Lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.line
          x1="0"
          y1="0"
          x2="100%"
          y2="100%"
          stroke="white"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        <motion.line
          x1="100%"
          y1="0"
          x2="0"
          y2="100%"
          stroke="white"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 1.5,
          }}
        />
      </svg>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <motion.div
              className="mb-6 flex items-center justify-center gap-2 text-white/80 text-sm"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {breadcrumbs.map((crumb, index) => (
                <div key={index} className="flex items-center gap-2">
                  <a
                    href={crumb.href}
                    className="hover:text-brand-orange transition"
                  >
                    {crumb.name}
                  </a>
                  {index < breadcrumbs.length - 1 && (
                    <span className="text-white/60">/</span>
                  )}
                </div>
              ))}
            </motion.div>
          )}

          {/* Title */}
          <motion.h1
            className="font-montserrat font-extrabold text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-white/90 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {subtitle}
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            className="mt-8 mx-auto w-24 h-1 bg-brand-orange rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <motion.path
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            fill="white"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </svg>
      </div>
    </section>
  );
};

export default PageHero;
