"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { properties } from "@/data/properties";

interface FormData {
  name: string;
  email: string;
  phone: string;
  propertyId: string;
  date: string;
  time: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  propertyId?: string;
  date?: string;
  time?: string;
}

const ScheduleInspection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    propertyId: "",
    date: "",
    time: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // Available time slots
  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];

  // Validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9+\s()-]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    if (!formData.propertyId) {
      newErrors.propertyId = "Please select a property";
    }

    if (!formData.date) {
      newErrors.date = "Please select a date";
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.date = "Date must be in the future";
      }
    }

    if (!formData.time) {
      newErrors.time = "Please select a time";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Find the selected property
      const selectedProperty = properties.find(
        (p) => p.id === formData.propertyId
      );

      // Prepare WhatsApp message
      const whatsappMessage = `*Property Inspection Request*\n\n` +
        `*Property:* ${selectedProperty?.title || "N/A"}\n` +
        `*Name:* ${formData.name}\n` +
        `*Email:* ${formData.email}\n` +
        `*Phone:* ${formData.phone}\n` +
        `*Preferred Date:* ${formData.date}\n` +
        `*Preferred Time:* ${formData.time}\n` +
        (formData.message ? `*Additional Notes:* ${formData.message}` : "");

      // WhatsApp number (replace with actual business number)
      const whatsappNumber = "2348167601030";
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Open WhatsApp
      window.open(whatsappUrl, "_blank");

      setSubmitStatus("success");

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          propertyId: "",
          date: "",
          time: "",
          message: "",
        });
        setSubmitStatus("idle");
      }, 3000);
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for this field
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Get minimum date (today)
  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="text-brand-orange font-montserrat font-bold text-sm uppercase tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Book Your Visit
          </motion.span>
          <motion.h2
            className="font-montserrat font-extrabold text-4xl md:text-5xl text-brand-blue mt-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Schedule a <span className="text-brand-orange">Property Inspection</span>
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            See the property in person and make an informed decision. Our team
            will guide you through every detail.
          </motion.p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {submitStatus === "success" ? (
            <motion.div
              className="text-center py-12"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
              </motion.div>
              <h3 className="font-montserrat font-bold text-2xl text-brand-blue mb-4">
                Inspection Scheduled!
              </h3>
              <p className="text-gray-600 mb-6">
                We've received your request and will confirm your appointment
                shortly via WhatsApp.
              </p>
              <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-6 py-3 rounded-full">
                <CheckCircle size={20} />
                <span className="font-medium">
                  Check WhatsApp for confirmation
                </span>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Property Selection */}
              <div>
                <label className="flex items-center gap-2 text-brand-blue font-montserrat font-bold mb-3">
                  <MapPin size={20} />
                  <span>Select Property *</span>
                </label>
                <select
                  name="propertyId"
                  value={formData.propertyId}
                  onChange={handleChange}
                  className={`w-full px-4 py-4 rounded-xl border-2 focus:outline-none transition-colors ${
                    errors.propertyId
                      ? "border-red-400 focus:border-red-500"
                      : "border-gray-200 focus:border-brand-blue"
                  }`}
                >
                  <option value="">Choose a property to inspect</option>
                  {properties.map((property) => (
                    <option key={property.id} value={property.id}>
                      {property.title} - {property.location} ({property.price})
                    </option>
                  ))}
                </select>
                {errors.propertyId && (
                  <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.propertyId}
                  </p>
                )}
              </div>

              {/* Personal Information Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="flex items-center gap-2 text-brand-blue font-montserrat font-bold mb-3">
                    <User size={20} />
                    <span>Full Name *</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full px-4 py-4 rounded-xl border-2 focus:outline-none transition-colors ${
                      errors.name
                        ? "border-red-400 focus:border-red-500"
                        : "border-gray-200 focus:border-brand-blue"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="flex items-center gap-2 text-brand-blue font-montserrat font-bold mb-3">
                    <Phone size={20} />
                    <span>Phone Number *</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+234 800 000 0000"
                    className={`w-full px-4 py-4 rounded-xl border-2 focus:outline-none transition-colors ${
                      errors.phone
                        ? "border-red-400 focus:border-red-500"
                        : "border-gray-200 focus:border-brand-blue"
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="flex items-center gap-2 text-brand-blue font-montserrat font-bold mb-3">
                  <Mail size={20} />
                  <span>Email Address *</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john.doe@example.com"
                  className={`w-full px-4 py-4 rounded-xl border-2 focus:outline-none transition-colors ${
                    errors.email
                      ? "border-red-400 focus:border-red-500"
                      : "border-gray-200 focus:border-brand-blue"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Date and Time Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Date */}
                <div>
                  <label className="flex items-center gap-2 text-brand-blue font-montserrat font-bold mb-3">
                    <Calendar size={20} />
                    <span>Preferred Date *</span>
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={getMinDate()}
                    className={`w-full px-4 py-4 rounded-xl border-2 focus:outline-none transition-colors ${
                      errors.date
                        ? "border-red-400 focus:border-red-500"
                        : "border-gray-200 focus:border-brand-blue"
                    }`}
                  />
                  {errors.date && (
                    <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.date}
                    </p>
                  )}
                </div>

                {/* Time */}
                <div>
                  <label className="flex items-center gap-2 text-brand-blue font-montserrat font-bold mb-3">
                    <Clock size={20} />
                    <span>Preferred Time *</span>
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className={`w-full px-4 py-4 rounded-xl border-2 focus:outline-none transition-colors ${
                      errors.time
                        ? "border-red-400 focus:border-red-500"
                        : "border-gray-200 focus:border-brand-blue"
                    }`}
                  >
                    <option value="">Select a time</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                  {errors.time && (
                    <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.time}
                    </p>
                  )}
                </div>
              </div>

              {/* Additional Message */}
              <div>
                <label className="text-brand-blue font-montserrat font-bold mb-3 block">
                  Additional Notes (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Any specific questions or requirements for the inspection?"
                  className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-brand-blue focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-5 rounded-xl font-montserrat font-bold text-lg transition-all shadow-xl ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-brand-blue to-blue-800 hover:from-brand-orange hover:to-orange-600 text-white"
                }`}
                whileHover={isSubmitting ? {} : { scale: 1.02, y: -2 }}
                whileTap={isSubmitting ? {} : { scale: 0.98 }}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <motion.div
                      className="w-5 h-5 border-3 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    Scheduling...
                  </span>
                ) : (
                  "Schedule Inspection"
                )}
              </motion.button>

              {submitStatus === "error" && (
                <motion.div
                  className="bg-red-50 border-2 border-red-200 rounded-xl p-4 flex items-center gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <AlertCircle className="text-red-500 flex-shrink-0" />
                  <p className="text-red-700">
                    Something went wrong. Please try again or contact us
                    directly.
                  </p>
                </motion.div>
              )}
            </form>
          )}
        </motion.div>

        {/* Info Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {[
            {
              icon: <Calendar className="w-6 h-6" />,
              title: "Flexible Scheduling",
              description: "Choose a date and time that works best for you",
            },
            {
              icon: <User className="w-6 h-6" />,
              title: "Expert Guidance",
              description: "Our team will walk you through every detail",
            },
            {
              icon: <CheckCircle className="w-6 h-6" />,
              title: "No Obligation",
              description: "Visit without any commitment to purchase",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-shadow"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-blue-800 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                {item.icon}
              </div>
              <h3 className="font-montserrat font-bold text-brand-blue mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ScheduleInspection;
