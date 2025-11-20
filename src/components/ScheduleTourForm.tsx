"use client";

import React, { useState } from "react";
import { Calendar, Clock, User, Mail, Phone, Check, AlertCircle } from "lucide-react";

interface ScheduleTourFormProps {
  propertyTitle: string;
  propertyId: string;
}

export default function ScheduleTourForm({ propertyTitle, propertyId }: ScheduleTourFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    tourType: "physical",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const tourTypes = [
    { value: "physical", label: "Physical Tour", icon: "🏠" },
    { value: "virtual", label: "Virtual Tour (Video Call)", icon: "📹" },
    { value: "360", label: "360° Self-Guided Tour", icon: "🔄" },
  ];

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time) {
      setError("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call - Replace with actual API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Here you would send the data to your backend or email service
      console.log("Tour scheduled:", { ...formData, propertyId, propertyTitle });

      setIsSubmitted(true);
    } catch (err) {
      setError("Failed to schedule tour. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      tourType: "physical",
      message: "",
    });
    setIsSubmitted(false);
    setError("");
  };

  // Get minimum date (today)
  const today = new Date().toISOString().split("T")[0];

  if (isSubmitted) {
    return (
      <div className="bg-green-50 rounded-2xl p-8 text-center border-2 border-green-200">
        <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-montserrat font-bold text-green-800 mb-2">
          Tour Scheduled Successfully!
        </h3>
        <p className="text-gray-700 mb-2">
          Thank you, <span className="font-semibold">{formData.name}</span>!
        </p>
        <p className="text-gray-600 mb-6">
          Your {formData.tourType} tour for <span className="font-semibold">{propertyTitle}</span> has been scheduled for:
        </p>
        <div className="bg-white rounded-xl p-4 mb-6 inline-block">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-5 h-5 text-brand-blue" />
            <span className="font-semibold text-gray-800">
              {new Date(formData.date).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-brand-blue" />
            <span className="font-semibold text-gray-800">{formData.time}</span>
          </div>
        </div>
        <p className="text-sm text-gray-600 mb-6">
          A confirmation email has been sent to <span className="font-semibold">{formData.email}</span>
        </p>
        <button
          onClick={resetForm}
          className="bg-brand-blue text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-800 transition-colors"
        >
          Schedule Another Tour
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-brand-blue/10 p-3 rounded-xl">
          <Calendar className="w-6 h-6 text-brand-blue" />
        </div>
        <div>
          <h2 className="text-2xl font-montserrat font-bold text-brand-blue">
            Schedule a Tour
          </h2>
          <p className="text-gray-600 text-sm">
            Book your visit to {propertyTitle}
          </p>
        </div>
      </div>

      {error && (
        <div className="mb-6 bg-red-50 border-2 border-red-200 rounded-xl p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-red-700 text-sm">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Tour Type Selection */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Tour Type *
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {tourTypes.map((type) => (
              <label
                key={type.value}
                className={`cursor-pointer border-2 rounded-xl p-4 transition-all ${
                  formData.tourType === type.value
                    ? "border-brand-blue bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  name="tourType"
                  value={type.value}
                  checked={formData.tourType === type.value}
                  onChange={handleChange}
                  className="sr-only"
                />
                <div className="text-center">
                  <div className="text-3xl mb-2">{type.icon}</div>
                  <div className="font-semibold text-gray-800 text-sm">{type.label}</div>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Full Name *
          </label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-brand-blue focus:outline-none transition-colors"
              placeholder="Enter your full name"
            />
          </div>
        </div>

        {/* Email and Phone */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address *
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-brand-blue focus:outline-none transition-colors"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Phone Number *
            </label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-brand-blue focus:outline-none transition-colors"
                placeholder="+234 XXX XXX XXXX"
              />
            </div>
          </div>
        </div>

        {/* Date and Time */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Preferred Date *
            </label>
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                min={today}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-brand-blue focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Preferred Time *
            </label>
            <div className="relative">
              <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-brand-blue focus:outline-none transition-colors appearance-none bg-white"
              >
                <option value="">Select a time</option>
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Additional Message (Optional)
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-brand-blue focus:outline-none transition-colors resize-none"
            placeholder="Any special requests or questions?"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 rounded-xl font-montserrat font-bold text-white transition-all ${
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-brand-blue to-blue-800 hover:from-brand-orange hover:to-orange-600"
          }`}
        >
          {isSubmitting ? "Scheduling..." : "Schedule Tour"}
        </button>
      </form>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
        <p className="text-sm text-gray-700">
          <span className="font-semibold text-brand-blue">Note:</span> Our team will confirm your
          appointment within 24 hours. You'll receive a confirmation email with details and directions.
        </p>
      </div>
    </div>
  );
}
