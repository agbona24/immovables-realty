"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState } from "react";

interface Testimonial {
  name: string;
  role: string;
  location: string;
  image: string;
  rating: number;
  text: string;
}

const fallbackTestimonials: Testimonial[] = [
  {
    name: "Adebayo Okonkwo",
    role: "Real Estate Investor",
    location: "Lagos",
    image: "AO",
    rating: 5,
    text: "IMMOVABLES REALTY helped me purchase my first investment property in Abeokuta. Their team guided me through every step, from selection to documentation. Six months later, my property value has already appreciated by 15%. Highly recommended!",
  },
  {
    name: "Mrs. Funmilayo Adeleke",
    role: "Business Owner",
    location: "Ibadan",
    image: "FA",
    rating: 5,
    text: "I was skeptical about investing in real estate outside Lagos, but IMMOVABLES REALTY changed my perspective. Their market analytics were spot-on, and the flexible payment plan made it achievable. Now I own three properties through them!",
  },
  {
    name: "Engr. Chukwudi Nwosu",
    role: "Civil Engineer",
    location: "Abeokuta",
    image: "CN",
    rating: 5,
    text: "As an engineer, I appreciate attention to detail. IMMOVABLES REALTY's thorough due diligence and legal verification gave me complete confidence. The team is professional, responsive, and truly committed to client success.",
  },
  {
    name: "Dr. Aminat Bello",
    role: "Medical Practitioner",
    location: "Ogun State",
    image: "AB",
    rating: 5,
    text: "The best real estate experience I've ever had! From the initial consultation to property handover, everything was seamless. The team's expertise in Ogun State's property market is unmatched. My rental income started flowing within two months!",
  },
  {
    name: "Mr. Taiwo Johnson",
    role: "Entrepreneur",
    location: "Abuja",
    image: "TJ",
    rating: 5,
    text: "I invested from Abuja without visiting the property physically, thanks to IMMOVABLES REALTY's virtual tours and transparent processes. The documentation was flawless, and their after-sales support is exceptional. True professionals!",
  },
  {
    name: "Pastor & Mrs. Olumide",
    role: "Church Leaders",
    location: "Ogun State",
    image: "PO",
    rating: 5,
    text: "We wanted to invest wisely for our children's future. IMMOVABLES REALTY provided personalized advice and found us the perfect property within our budget. Their integrity and honesty shine through in every interaction. God bless this team!",
  },
];

interface TestimonialsProps {
  testimonials?: Testimonial[];
}

const Testimonials = ({ testimonials: propTestimonials }: TestimonialsProps) => {
  const testimonials = propTestimonials || fallbackTestimonials;
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-brand-orange rounded-full opacity-5 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 bg-brand-blue rounded-full opacity-5 blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.8 }}
          >
            <span className="bg-brand-orange/10 text-brand-orange px-6 py-2 rounded-full text-sm font-semibold">
              Testimonials
            </span>
          </motion.div>
          <h2 className="font-montserrat font-extrabold text-4xl md:text-5xl lg:text-6xl text-brand-blue mb-4">
            What Our Clients{" "}
            <span className="text-brand-orange">Say About Us</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Real stories from real people who trusted us with their real estate investment journey
          </p>
        </motion.div>

        {/* Main Testimonial Card */}
        <motion.div
          className="max-w-4xl mx-auto mb-12"
          key={activeIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <motion.div
              className="absolute top-6 right-6 text-brand-orange/10"
              animate={{
                rotate: [0, 10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Quote size={100} strokeWidth={1.5} />
            </motion.div>

            {/* Rating Stars */}
            <div className="flex gap-1 mb-6 relative z-10">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Star className="w-6 h-6 fill-brand-orange text-brand-orange" />
                </motion.div>
              ))}
            </div>

            {/* Testimonial Text */}
            <motion.p
              className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              "{testimonials[activeIndex].text}"
            </motion.p>

            {/* Author Info */}
            <div className="flex items-center gap-4 relative z-10">
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-brand-blue to-blue-800 rounded-full flex items-center justify-center text-white font-montserrat font-bold text-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {testimonials[activeIndex].image}
              </motion.div>
              <div>
                <div className="font-montserrat font-bold text-xl text-brand-blue">
                  {testimonials[activeIndex].name}
                </div>
                <div className="text-gray-600">
                  {testimonials[activeIndex].role} · {testimonials[activeIndex].location}
                </div>
              </div>
            </div>

            {/* Decorative Gradient Border */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-blue via-brand-orange to-brand-blue"></div>
          </div>
        </motion.div>

        {/* Navigation & Thumbnails */}
        <div className="max-w-5xl mx-auto">
          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <motion.button
              onClick={prevTestimonial}
              className="bg-white text-brand-blue border-2 border-brand-blue px-8 py-3 rounded-full font-montserrat font-bold hover:bg-brand-blue hover:text-white transition shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ← Previous
            </motion.button>
            <motion.button
              onClick={nextTestimonial}
              className="bg-brand-orange text-white px-8 py-3 rounded-full font-montserrat font-bold hover:bg-brand-blue transition shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Next →
            </motion.button>
          </div>

          {/* Testimonial Dots */}
          <div className="flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`transition-all ${
                  index === activeIndex
                    ? "w-12 h-3 bg-brand-orange"
                    : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                } rounded-full`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {[
            { number: "500+", label: "Happy Clients" },
            { number: "4.9/5", label: "Average Rating" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "200+", label: "5-Star Reviews" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-4 bg-white rounded-xl shadow-md"
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            >
              <div className="font-montserrat font-extrabold text-2xl md:text-3xl text-brand-blue mb-1">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-gray-600 text-lg mb-6">
            Join hundreds of satisfied clients who chose IMMOVABLES REALTY
          </p>
          <motion.a
            href="/contact"
            className="inline-block bg-brand-orange text-white px-10 py-4 rounded-full font-montserrat font-bold text-lg hover:bg-brand-blue transition shadow-xl"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Success Story
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
