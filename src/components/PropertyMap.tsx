"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, ExternalLink } from "lucide-react";
import { useState } from "react";

interface PropertyMapProps {
  title: string;
  location: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  address?: string;
}

const PropertyMap: React.FC<PropertyMapProps> = ({
  title,
  location,
  coordinates = { lat: 7.1475, lng: 3.3619 }, // Default to Abeokuta, Ogun State
  address,
}) => {
  const [mapError, setMapError] = useState(false);

  // Generate Google Maps URLs
  const getMapEmbedUrl = () => {
    const query = encodeURIComponent(address || location);
    // Using iframe embed without API key - will show location search
    return `https://www.google.com/maps?q=${query}&output=embed`;
  };

  const getDirectionsUrl = () => {
    return `https://www.google.com/maps/dir/?api=1&destination=${coordinates.lat},${coordinates.lng}`;
  };

  const getMapViewUrl = () => {
    return `https://www.google.com/maps?q=${coordinates.lat},${coordinates.lng}`;
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl text-brand-blue mb-4 flex items-center gap-3">
            <MapPin className="text-brand-orange" size={32} />
            Location & Map
          </h2>
          <p className="text-gray-600 text-lg">
            Explore the exact location of {title}
          </p>
        </motion.div>

        {/* Map Container */}
        <motion.div
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Map Display */}
          <div className="relative h-96 md:h-[500px] bg-gray-100">
            {!mapError ? (
              <iframe
                src={getMapEmbedUrl()}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                onError={() => setMapError(true)}
                title={`Map of ${title}`}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-orange-50">
                <div className="text-center p-8">
                  <MapPin className="w-16 h-16 text-brand-orange mx-auto mb-4" />
                  <h3 className="font-montserrat font-bold text-xl text-brand-blue mb-2">
                    Map View
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {location}
                  </p>
                  <motion.a
                    href={getMapViewUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-brand-blue text-white px-6 py-3 rounded-full font-montserrat font-bold hover:bg-brand-orange transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={20} />
                    View on Google Maps
                  </motion.a>
                </div>
              </div>
            )}
          </div>

          {/* Map Information Panel */}
          <div className="p-6 md:p-8 bg-gradient-to-r from-gray-50 to-white">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Location Details */}
              <div>
                <h3 className="font-montserrat font-bold text-xl text-brand-blue mb-4">
                  Location Details
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-brand-orange flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-medium text-gray-700">Address</div>
                      <div className="text-gray-600">
                        {address || location}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Navigation className="text-brand-orange flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-medium text-gray-700">Coordinates</div>
                      <div className="text-gray-600 font-mono text-sm">
                        {coordinates.lat.toFixed(6)}, {coordinates.lng.toFixed(6)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div>
                <h3 className="font-montserrat font-bold text-xl text-brand-blue mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <motion.a
                    href={getDirectionsUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-white border-2 border-gray-200 hover:border-brand-blue p-4 rounded-xl transition-all group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-brand-blue to-blue-800 rounded-full flex items-center justify-center text-white group-hover:from-brand-orange group-hover:to-orange-600 transition-all">
                      <Navigation size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="font-montserrat font-bold text-brand-blue">
                        Get Directions
                      </div>
                      <div className="text-sm text-gray-600">
                        Navigate to property location
                      </div>
                    </div>
                    <ExternalLink className="text-gray-400 group-hover:text-brand-orange transition-colors" size={20} />
                  </motion.a>

                  <motion.a
                    href={getMapViewUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-white border-2 border-gray-200 hover:border-brand-blue p-4 rounded-xl transition-all group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-brand-blue to-blue-800 rounded-full flex items-center justify-center text-white group-hover:from-brand-orange group-hover:to-orange-600 transition-all">
                      <MapPin size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="font-montserrat font-bold text-brand-blue">
                        View on Google Maps
                      </div>
                      <div className="text-sm text-gray-600">
                        Open in full map view
                      </div>
                    </div>
                    <ExternalLink className="text-gray-400 group-hover:text-brand-orange transition-colors" size={20} />
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Nearby Landmarks (Optional) */}
        <motion.div
          className="mt-8 grid md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {[
            { icon: "🏫", label: "Schools Nearby" },
            { icon: "🏥", label: "Healthcare" },
            { icon: "🏪", label: "Shopping Centers" },
            { icon: "🚗", label: "Easy Access" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-4 text-center shadow-md hover:shadow-xl transition-shadow"
              whileHover={{ y: -3 }}
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <div className="text-sm font-montserrat font-semibold text-gray-700">
                {item.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PropertyMap;
