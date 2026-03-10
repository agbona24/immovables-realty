"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Maximize, TrendingUp, ArrowRight, Search, Filter, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { properties as fallbackProperties, type Property } from "@/data/properties";

interface PropertiesProps {
  properties?: Property[];
}

const Properties = ({ properties: propProperties }: PropertiesProps) => {
  const properties = propProperties || fallbackProperties;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Filter states
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string>("All");
  const [selectedStatus, setSelectedStatus] = useState<string>("All");
  const [priceRange, setPriceRange] = useState<string>("All");
  const [showFilters, setShowFilters] = useState(false);

  // Color gradients for property cards
  const gradients = [
    "from-blue-600 to-brand-blue",
    "from-brand-orange to-orange-600",
    "from-indigo-600 to-purple-600",
    "from-teal-600 to-green-600",
    "from-rose-600 to-pink-600",
    "from-amber-600 to-yellow-600",
    "from-purple-600 to-pink-600",
    "from-cyan-600 to-blue-600",
    "from-emerald-600 to-teal-600",
  ];

  // Filter options
  const propertyTypes = ["All", "Estate", "House", "Land", "Commercial"];
  const statusOptions = ["All", "Available", "Selling Fast", "Few Units Left"];
  const priceRanges = [
    "All",
    "Under ₦5M",
    "₦5M - ₦20M",
    "₦20M - ₦50M",
    "Above ₦50M",
  ];

  // Parse price string to number for comparison
  const parsePrice = (priceStr: string): number => {
    const cleanPrice = priceStr.replace(/[₦,M]/g, "");
    return parseFloat(cleanPrice) * 1000000;
  };

  // Filter properties
  const filteredProperties = properties.filter((property) => {
    // Search query filter
    const matchesSearch =
      searchQuery === "" ||
      property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.description.toLowerCase().includes(searchQuery.toLowerCase());

    // Type filter
    const matchesType = selectedType === "All" || property.type === selectedType;

    // Status filter
    const matchesStatus =
      selectedStatus === "All" || property.status === selectedStatus;

    // Price range filter
    let matchesPrice = true;
    if (priceRange !== "All") {
      const price = parsePrice(property.price);
      switch (priceRange) {
        case "Under ₦5M":
          matchesPrice = price < 5000000;
          break;
        case "₦5M - ₦20M":
          matchesPrice = price >= 5000000 && price <= 20000000;
          break;
        case "₦20M - ₦50M":
          matchesPrice = price > 20000000 && price <= 50000000;
          break;
        case "Above ₦50M":
          matchesPrice = price > 50000000;
          break;
      }
    }

    return matchesSearch && matchesType && matchesStatus && matchesPrice;
  });

  // Enhance filtered properties with display data
  const displayProperties = filteredProperties.map((property, index) => ({
    ...property,
    color: gradients[index % gradients.length],
  }));

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery("");
    setSelectedType("All");
    setSelectedStatus("All");
    setPriceRange("All");
  };

  // Count active filters
  const activeFiltersCount =
    (selectedType !== "All" ? 1 : 0) +
    (selectedStatus !== "All" ? 1 : 0) +
    (priceRange !== "All" ? 1 : 0) +
    (searchQuery !== "" ? 1 : 0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="properties"
      className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 right-0 w-72 h-72 bg-brand-blue rounded-full opacity-5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-0 w-96 h-96 bg-brand-orange rounded-full opacity-5 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
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
            Featured Properties
          </motion.span>
          <motion.h2
            className="font-montserrat font-extrabold text-4xl md:text-5xl text-brand-blue mt-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
          >
            Explore Our{" "}
            <span className="text-brand-orange">Investment Opportunities</span>
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 }}
          >
            From prime estates to income-generating properties, discover our
            curated selection of exceptional real estate investments across
            Ogun State.
          </motion.p>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5 }}
        >
          {/* Search Bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by property name, location, or features..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-brand-blue focus:outline-none transition-colors"
              />
            </div>
            <motion.button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-6 py-4 rounded-2xl font-montserrat font-bold transition-all ${
                showFilters || activeFiltersCount > 0
                  ? "bg-brand-orange text-white"
                  : "bg-white border-2 border-gray-200 text-gray-700 hover:border-brand-blue"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Filter size={20} />
              <span>Filters</span>
              {activeFiltersCount > 0 && (
                <span className="bg-white text-brand-orange rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                  {activeFiltersCount}
                </span>
              )}
            </motion.button>
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <motion.div
              className="bg-white rounded-2xl p-6 border-2 border-gray-100 shadow-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                {/* Property Type Filter */}
                <div>
                  <label className="block text-sm font-montserrat font-bold text-gray-700 mb-2">
                    Property Type
                  </label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-blue focus:outline-none transition-colors"
                  >
                    {propertyTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Status Filter */}
                <div>
                  <label className="block text-sm font-montserrat font-bold text-gray-700 mb-2">
                    Availability Status
                  </label>
                  <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-blue focus:outline-none transition-colors"
                  >
                    {statusOptions.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price Range Filter */}
                <div>
                  <label className="block text-sm font-montserrat font-bold text-gray-700 mb-2">
                    Price Range
                  </label>
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-blue focus:outline-none transition-colors"
                  >
                    {priceRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Clear Filters Button */}
              {activeFiltersCount > 0 && (
                <motion.button
                  onClick={clearFilters}
                  className="flex items-center gap-2 px-4 py-2 text-brand-orange hover:text-orange-700 font-montserrat font-semibold transition-colors"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X size={18} />
                  <span>Clear all filters</span>
                </motion.button>
              )}
            </motion.div>
          )}

          {/* Active Filters and Results Count */}
          <div className="flex flex-wrap items-center gap-3 mt-4">
            {/* Results Count */}
            <div className="text-gray-600 font-montserrat">
              Showing <span className="font-bold text-brand-blue">{filteredProperties.length}</span> of{" "}
              <span className="font-bold">{properties.length}</span> properties
            </div>

            {/* Active Filter Badges */}
            {searchQuery && (
              <motion.div
                className="flex items-center gap-2 bg-brand-blue/10 text-brand-blue px-4 py-2 rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
              >
                <span className="text-sm font-medium">Search: "{searchQuery}"</span>
                <button
                  onClick={() => setSearchQuery("")}
                  className="hover:bg-brand-blue/20 rounded-full p-1 transition-colors"
                >
                  <X size={14} />
                </button>
              </motion.div>
            )}

            {selectedType !== "All" && (
              <motion.div
                className="flex items-center gap-2 bg-brand-orange/10 text-brand-orange px-4 py-2 rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
              >
                <span className="text-sm font-medium">Type: {selectedType}</span>
                <button
                  onClick={() => setSelectedType("All")}
                  className="hover:bg-brand-orange/20 rounded-full p-1 transition-colors"
                >
                  <X size={14} />
                </button>
              </motion.div>
            )}

            {selectedStatus !== "All" && (
              <motion.div
                className="flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
              >
                <span className="text-sm font-medium">Status: {selectedStatus}</span>
                <button
                  onClick={() => setSelectedStatus("All")}
                  className="hover:bg-purple-200 rounded-full p-1 transition-colors"
                >
                  <X size={14} />
                </button>
              </motion.div>
            )}

            {priceRange !== "All" && (
              <motion.div
                className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
              >
                <span className="text-sm font-medium">Price: {priceRange}</span>
                <button
                  onClick={() => setPriceRange("All")}
                  className="hover:bg-green-200 rounded-full p-1 transition-colors"
                >
                  <X size={14} />
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Properties Grid */}
        {filteredProperties.length === 0 ? (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="font-montserrat font-bold text-2xl text-gray-700 mb-2">
              No properties found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your filters or search terms
            </p>
            {activeFiltersCount > 0 && (
              <motion.button
                onClick={clearFilters}
                className="bg-brand-orange text-white px-6 py-3 rounded-full font-montserrat font-bold hover:bg-orange-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Clear all filters
              </motion.button>
            )}
          </motion.div>
        ) : (
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {displayProperties.map((property, index) => (
            <motion.div key={property.id} variants={cardVariants}>
              <Link href={`/properties/${property.id}`}>
                <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col cursor-pointer">
                  {/* Image Section */}
                  <div className="relative h-64 overflow-hidden">
                    {/* Gradient Background Fallback */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${property.color}`}
                    />

                    {/* Property Image */}
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />

                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <motion.div
                        className="bg-brand-orange text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        {property.status}
                      </motion.div>
                    </div>

                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Title */}
                    <h3 className="font-montserrat font-bold text-xl text-brand-blue mb-3 group-hover:text-brand-orange transition line-clamp-2">
                      {property.title}
                    </h3>

                    {/* Location */}
                    <div className="flex items-center gap-2 text-gray-600 mb-4">
                      <MapPin size={18} className="flex-shrink-0" />
                      <span className="text-sm">{property.location}</span>
                    </div>

                    {/* Features */}
                    <div className="space-y-2 mb-4 flex-1">
                      {property.features.slice(0, 3).map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-gray-700"
                        >
                          <div className="w-1.5 h-1.5 bg-brand-orange rounded-full" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Bottom Section */}
                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                      {/* Price */}
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Price</div>
                        <div className="font-montserrat font-bold text-2xl text-brand-orange">
                          {property.price}
                        </div>
                      </div>

                      {/* View Details Button */}
                      <motion.div
                        className="w-12 h-12 bg-gradient-to-br from-brand-blue to-blue-800 rounded-full flex items-center justify-center text-white group-hover:from-brand-orange group-hover:to-orange-600 transition-all"
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ArrowRight size={20} />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for? We have more properties
            available!
          </p>
          <motion.a
            href="/contact"
            className="inline-block bg-gradient-to-r from-brand-blue to-blue-800 text-white px-8 py-4 rounded-full font-montserrat font-bold shadow-xl hover:from-brand-orange hover:to-orange-600 transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Request Custom Property Search
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Properties;
