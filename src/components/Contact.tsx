"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  MessageSquare,
  User,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Prepare WhatsApp message with form data
      const whatsappMessage = `*New Contact Form Submission*\n\n` +
        `*Name:* ${formState.name}\n` +
        `*Email:* ${formState.email}\n` +
        `*Phone:* ${formState.phone}\n` +
        `*Message:*\n${formState.message}`;

      // WhatsApp number
      const whatsappNumber = "2348132833083";
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

      // Simulate processing delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Open WhatsApp
      window.open(whatsappUrl, "_blank");

      setSubmitStatus("success");
      setFormState({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      content: "+234 813 283 3083",
      link: "tel:+2348132833083",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "info@immovablesrealty.com",
      link: "mailto:info@immovablesrealty.com",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office",
      content: "12, Obasanjo Way off Akin Olugbade, Ita Eko, Abeokuta",
      link: "#",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      content: "Mon - Sat: 9AM - 6PM",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Decorations */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-brand-blue rounded-full opacity-5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-brand-orange rounded-full opacity-5 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

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
            Get In Touch
          </motion.span>
          <motion.h2
            className="font-montserrat font-extrabold text-4xl md:text-5xl text-brand-blue mt-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
          >
            Let's Discuss Your{" "}
            <span className="text-brand-orange">Investment Goals</span>
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 }}
          >
            Have questions? We're here to help you identify the perfect investment opportunities.
            Reach out today and let's build your wealth together.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.5 }}
            className="space-y-8"
          >
            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-blue-800 rounded-xl flex items-center justify-center text-white mb-4 group-hover:from-brand-orange group-hover:to-orange-600 transition-all duration-300">
                    {info.icon}
                  </div>
                  <h3 className="font-montserrat font-bold text-lg text-brand-blue mb-2">
                    {info.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{info.content}</p>
                </motion.a>
              ))}
            </div>

            {/* Additional Info Box */}
            <motion.div
              className="bg-gradient-to-br from-brand-blue to-blue-800 rounded-3xl p-8 text-white relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 1 }}
            >
              {/* Pattern Overlay */}
              <motion.div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />

              <div className="relative z-10">
                <MessageSquare className="w-12 h-12 mb-4" />
                <h3 className="font-montserrat font-bold text-2xl mb-3">
                  Schedule a Consultation
                </h3>
                <p className="text-gray-200 mb-6">
                  Get personalized investment advice from our expert advisors.
                  Book your free consultation today and discover the best opportunities!
                </p>
                <motion.a
                  href="https://wa.me/2348132833083?text=Hello%20IMMOVABLES%20REALTY,%20I%20would%20like%20to%20schedule%20a%20free%20consultation%20to%20discuss%20real%20estate%20investment%20opportunities."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-brand-orange text-white px-6 py-3 rounded-full font-montserrat font-bold hover:bg-white hover:text-brand-orange transition text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Consultation via WhatsApp
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.7 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl p-8 shadow-2xl"
            >
              {/* Success Message */}
              {submitStatus === "success" && (
                <motion.div
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <p className="text-green-800 font-medium">
                    Thank you! Your message has been sent via WhatsApp.
                  </p>
                </motion.div>
              )}

              {/* Error Message */}
              {submitStatus === "error" && (
                <motion.div
                  className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <p className="text-red-800 font-medium">
                    Oops! Something went wrong. Please try again.
                  </p>
                </motion.div>
              )}
              <div className="space-y-6">
                {/* Name Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.8 }}
                >
                  <label className="block text-sm font-montserrat font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <motion.input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-brand-orange focus:outline-none transition"
                      placeholder="Enter your full name"
                      required
                      whileFocus={{ scale: 1.01 }}
                    />
                  </div>
                </motion.div>

                {/* Email Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.9 }}
                >
                  <label className="block text-sm font-montserrat font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <motion.input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-brand-orange focus:outline-none transition"
                      placeholder="Enter your email"
                      required
                      whileFocus={{ scale: 1.01 }}
                    />
                  </div>
                </motion.div>

                {/* Phone Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 1.0 }}
                >
                  <label className="block text-sm font-montserrat font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <motion.input
                      type="tel"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-brand-orange focus:outline-none transition"
                      placeholder="Enter your phone number"
                      required
                      whileFocus={{ scale: 1.01 }}
                    />
                  </div>
                </motion.div>

                {/* Message Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 1.1 }}
                >
                  <label className="block text-sm font-montserrat font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <motion.textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-brand-orange focus:outline-none transition resize-none"
                    placeholder="Tell us about your investment goals and preferences..."
                    required
                    whileFocus={{ scale: 1.01 }}
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-brand-blue to-blue-800 text-white py-4 rounded-full font-montserrat font-bold text-lg flex items-center justify-center gap-2 hover:from-brand-orange hover:to-orange-600 transition-all duration-300 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 1.2 }}
                  whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          className="mt-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="font-montserrat font-extrabold text-3xl md:text-4xl text-brand-blue mb-4">
              Frequently Asked <span className="text-brand-orange">Questions</span>
            </h3>
            <p className="text-gray-600 text-lg">
              Quick answers to common questions about working with us
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How quickly do you respond to inquiries?",
                a: "We typically respond within 1-2 hours during business hours (Mon-Sat, 9AM-6PM). Urgent inquiries via WhatsApp often get faster responses!",
              },
              {
                q: "Do you offer virtual consultations?",
                a: "Absolutely! We offer virtual consultations via video call, phone, or WhatsApp for clients who can't visit our office. Schedule one through the contact form or WhatsApp.",
              },
              {
                q: "Can I visit properties before making a decision?",
                a: "Yes! We encourage property inspections. We arrange site visits and provide virtual tours for out-of-state clients. Contact us to schedule your viewing.",
              },
              {
                q: "What documentation do you need from me?",
                a: "For initial inquiries, just your contact information. For property transactions, we'll guide you through the required documentation during consultation.",
              },
              {
                q: "Do you provide after-sales support?",
                a: "Yes! Our relationship doesn't end at purchase. We provide ongoing support, property management referrals, and investment advice for all our clients.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h4 className="font-montserrat font-bold text-lg text-brand-blue mb-3">
                  {faq.q}
                </h4>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Map Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <h3 className="font-montserrat font-extrabold text-3xl md:text-4xl text-brand-blue mb-4">
              Find Our <span className="text-brand-orange">Office</span>
            </h3>
            <p className="text-gray-600 text-lg">
              Visit us in Abeokuta for a personalized consultation
            </p>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
            <div className="aspect-video bg-gradient-to-br from-brand-blue to-blue-800 relative">
              {/* Google Maps Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.2!2d3.3619!3d7.1475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMDgnNTEuMCJOIDPCsDIxJzQyLjgiRQ!5e0!3m2!1sen!2sng!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="IMMOVABLES REALTY Office Location"
              ></iframe>
            </div>
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h4 className="font-montserrat font-bold text-xl text-brand-blue mb-2">
                    IMMOVABLES REALTY Office
                  </h4>
                  <p className="text-gray-600 flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-brand-orange flex-shrink-0 mt-1" />
                    <span>12, Obasanjo Way off Akin Olugbade, Ita Eko, Abeokuta, Ogun State</span>
                  </p>
                </div>
                <motion.a
                  href="https://maps.google.com/?q=7.1475,3.3619"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-brand-orange text-white px-6 py-3 rounded-full font-montserrat font-semibold hover:bg-brand-blue transition whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Directions
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
