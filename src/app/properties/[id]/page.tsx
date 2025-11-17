"use client";

import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import {
  MapPin,
  Home,
  TrendingUp,
  Phone,
  MessageCircle,
  ArrowLeft,
  Check,
  Bed,
  Bath,
  Ruler,
  Building2,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getPropertyById, getRelatedProperties } from "@/data/properties";

export default function PropertyDetailPage() {
  const params = useParams();
  const router = useRouter();
  const propertyId = params.id as string;
  const property = getPropertyById(propertyId);
  const relatedProperties = getRelatedProperties(propertyId, 3);

  if (!property) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-brand-blue mb-4">
              Property Not Found
            </h1>
            <Link
              href="/properties"
              className="text-brand-orange hover:underline"
            >
              Back to Properties
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const whatsappMessage = `Hello! I'm interested in ${property.title} listed at ${property.price}. Can you provide more information?`;
  const whatsappUrl = `https://wa.me/${property.contactInfo.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section with Image */}
        <section className="relative h-[60vh] bg-gradient-to-br from-brand-blue to-blue-800">
          <div className="absolute inset-0">
            <Image
              src={property.image}
              alt={property.title}
              fill
              className="object-cover opacity-30"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

          <div className="container mx-auto px-4 h-full flex items-end pb-12 relative z-10">
            <div className="text-white max-w-4xl">
              <motion.button
                onClick={() => router.back()}
                className="flex items-center gap-2 mb-6 hover:text-brand-orange transition"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <ArrowLeft size={20} />
                Back
              </motion.button>

              <motion.div
                className="inline-block bg-brand-orange px-4 py-1 rounded-full text-sm font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {property.status}
              </motion.div>

              <motion.h1
                className="font-montserrat font-extrabold text-4xl md:text-5xl lg:text-6xl mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {property.title}
              </motion.h1>

              <motion.div
                className="flex flex-wrap items-center gap-6 text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-2">
                  <MapPin size={20} />
                  {property.location}
                </div>
                <div className="flex items-center gap-2">
                  <Home size={20} />
                  {property.type}
                </div>
                <div className="flex items-center gap-2 text-brand-orange font-bold text-2xl">
                  <TrendingUp size={24} />
                  {property.price}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column - Main Details */}
              <div className="lg:col-span-2 space-y-8">
                {/* Description */}
                <motion.div
                  className="bg-white rounded-2xl p-8 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h2 className="font-montserrat font-bold text-2xl text-brand-blue mb-4">
                    Property Description
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {property.description}
                  </p>
                </motion.div>

                {/* Property Details */}
                {(property.details.bedrooms ||
                  property.details.bathrooms ||
                  property.details.size ||
                  property.details.plotSize ||
                  property.details.units) && (
                  <motion.div
                    className="bg-white rounded-2xl p-8 shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h2 className="font-montserrat font-bold text-2xl text-brand-blue mb-6">
                      Property Details
                    </h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                      {property.details.bedrooms && (
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center">
                            <Bed className="w-6 h-6 text-brand-blue" />
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-brand-blue">
                              {property.details.bedrooms}
                            </div>
                            <div className="text-sm text-gray-600">
                              Bedrooms
                            </div>
                          </div>
                        </div>
                      )}
                      {property.details.bathrooms && (
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center">
                            <Bath className="w-6 h-6 text-brand-blue" />
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-brand-blue">
                              {property.details.bathrooms}
                            </div>
                            <div className="text-sm text-gray-600">
                              Bathrooms
                            </div>
                          </div>
                        </div>
                      )}
                      {property.details.size && (
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center">
                            <Ruler className="w-6 h-6 text-brand-blue" />
                          </div>
                          <div>
                            <div className="text-lg font-bold text-brand-blue">
                              {property.details.size}
                            </div>
                            <div className="text-sm text-gray-600">
                              Built Size
                            </div>
                          </div>
                        </div>
                      )}
                      {property.details.plotSize && (
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center">
                            <Ruler className="w-6 h-6 text-brand-blue" />
                          </div>
                          <div>
                            <div className="text-lg font-bold text-brand-blue">
                              {property.details.plotSize}
                            </div>
                            <div className="text-sm text-gray-600">
                              Plot Size
                            </div>
                          </div>
                        </div>
                      )}
                      {property.details.units && (
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center">
                            <Building2 className="w-6 h-6 text-brand-blue" />
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-brand-blue">
                              {property.details.units}
                            </div>
                            <div className="text-sm text-gray-600">Units</div>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}

                {/* Features */}
                <motion.div
                  className="bg-white rounded-2xl p-8 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <h2 className="font-montserrat font-bold text-2xl text-brand-blue mb-6">
                    Key Features
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {property.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                      >
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Amenities */}
                <motion.div
                  className="bg-white rounded-2xl p-8 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <h2 className="font-montserrat font-bold text-2xl text-brand-blue mb-6">
                    Amenities
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {property.amenities.map((amenity, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9 + index * 0.1 }}
                      >
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-brand-blue" />
                        </div>
                        <span className="text-gray-700">{amenity}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Right Column - Contact Card */}
              <div className="lg:col-span-1">
                <motion.div
                  className="bg-white rounded-2xl p-8 shadow-2xl sticky top-24"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="text-center mb-6">
                    <h3 className="font-montserrat font-bold text-2xl text-brand-blue mb-2">
                      Interested?
                    </h3>
                    <p className="text-gray-600">
                      Contact us for more information
                    </p>
                  </div>

                  <div className="space-y-4">
                    <motion.a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#25D366] text-white py-4 rounded-full font-montserrat font-bold flex items-center justify-center gap-2 hover:bg-[#128C7E] transition shadow-lg"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <MessageCircle size={20} />
                      Chat on WhatsApp
                    </motion.a>

                    <motion.a
                      href={`tel:${property.contactInfo.phone}`}
                      className="w-full bg-brand-blue text-white py-4 rounded-full font-montserrat font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition shadow-lg"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Phone size={20} />
                      Call Now
                    </motion.a>

                    <motion.a
                      href="/contact"
                      className="w-full bg-brand-orange text-white py-4 rounded-full font-montserrat font-bold flex items-center justify-center gap-2 hover:bg-orange-600 transition shadow-lg"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Schedule Inspection
                    </motion.a>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="text-sm text-gray-600 space-y-2">
                      <p>
                        <strong>Phone:</strong> {property.contactInfo.phone}
                      </p>
                      <p>
                        <strong>Location:</strong> {property.location}
                      </p>
                      <p>
                        <strong>Property Type:</strong> {property.type}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Properties */}
        {relatedProperties.length > 0 && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <motion.h2
                className="font-montserrat font-extrabold text-3xl md:text-4xl text-brand-blue text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Similar Properties
              </motion.h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedProperties.map((relatedProp, index) => (
                  <motion.div
                    key={relatedProp.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link href={`/properties/${relatedProp.id}`}>
                      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group">
                        <div className="relative h-64">
                          <div
                            className="absolute inset-0 bg-gradient-to-br from-brand-blue to-blue-800"
                            style={{
                              backgroundImage: `linear-gradient(135deg, #0C3B82 0%, #1e5a9e 100%)`,
                            }}
                          />
                          <Image
                            src={relatedProp.image}
                            alt={relatedProp.title}
                            fill
                            className="object-cover group-hover:scale-110 transition duration-500"
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                            }}
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="font-montserrat font-bold text-xl text-brand-blue mb-2 group-hover:text-brand-orange transition">
                            {relatedProp.title}
                          </h3>
                          <p className="text-gray-600 mb-4 flex items-center gap-2">
                            <MapPin size={16} />
                            {relatedProp.location}
                          </p>
                          <div className="text-brand-orange font-bold text-2xl">
                            {relatedProp.price}
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
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
