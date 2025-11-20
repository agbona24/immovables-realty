"use client";

import React from "react";
import { GitCompare, X, MapPin, Bed, Bath, Home, Check, Minus } from "lucide-react";
import { useComparison } from "@/hooks/useComparison";
import { properties } from "@/data/properties";
import Link from "next/link";
import Image from "next/image";

export default function PropertyComparison() {
  const { comparison, removeFromComparison, clearComparison, comparisonCount } = useComparison();

  const comparisonProperties = properties.filter((property) =>
    comparison.includes(property.id)
  );

  if (comparisonCount === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <div className="bg-gray-100 p-8 rounded-full mb-6">
          <GitCompare className="w-16 h-16 text-gray-400" />
        </div>
        <h2 className="text-3xl font-montserrat font-bold text-gray-800 mb-3">
          No Properties to Compare
        </h2>
        <p className="text-gray-600 mb-8 max-w-md">
          Add up to 3 properties to compare their features, prices, and amenities side by side.
        </p>
        <Link
          href="/properties"
          className="bg-brand-blue text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-800 transition-colors inline-flex items-center gap-2"
        >
          <Home size={20} />
          Browse Properties
        </Link>
      </div>
    );
  }

  const comparisonRows = [
    { label: "Image", key: "image" },
    { label: "Title", key: "title" },
    { label: "Location", key: "location" },
    { label: "Price", key: "price" },
    { label: "Type", key: "type" },
    { label: "Status", key: "status" },
    { label: "Bedrooms", key: "bedrooms" },
    { label: "Bathrooms", key: "bathrooms" },
    { label: "Size", key: "size" },
    { label: "Plot Size", key: "plotSize" },
    { label: "Units", key: "units" },
    { label: "Features", key: "features" },
    { label: "Amenities", key: "amenities" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-montserrat font-bold text-brand-blue mb-2">
            Compare Properties
          </h1>
          <p className="text-gray-600">
            {comparisonCount} {comparisonCount === 1 ? "property" : "properties"} selected
            {comparisonCount < 3 && ` (Add ${3 - comparisonCount} more)`}
          </p>
        </div>
        <button
          onClick={clearComparison}
          className="bg-red-50 text-red-600 px-4 py-2 rounded-xl font-semibold hover:bg-red-100 transition-colors inline-flex items-center gap-2"
        >
          <X size={18} />
          Clear All
        </button>
      </div>

      {/* Mobile View - Card-based */}
      <div className="md:hidden space-y-6">
        {comparisonProperties.map((property) => (
          <div key={property.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="relative h-48">
              <Image
                src={property.image}
                alt={property.title}
                fill
                className="object-cover"
              />
              <button
                onClick={() => removeFromComparison(property.id)}
                className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-red-50 hover:text-red-600 transition-colors"
                aria-label="Remove from comparison"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 space-y-3">
              <h3 className="text-xl font-montserrat font-bold text-brand-blue">
                {property.title}
              </h3>

              <div className="flex items-center text-gray-600">
                <MapPin size={16} className="mr-1" />
                <span className="text-sm">{property.location}</span>
              </div>

              <div className="text-2xl font-montserrat font-bold text-brand-blue">
                {property.price}
              </div>

              <div className="grid grid-cols-2 gap-3 pt-3 border-t">
                {property.details.bedrooms && (
                  <div className="flex items-center gap-2">
                    <Bed size={18} className="text-gray-500" />
                    <span className="text-sm">{property.details.bedrooms} Beds</span>
                  </div>
                )}
                {property.details.bathrooms && (
                  <div className="flex items-center gap-2">
                    <Bath size={18} className="text-gray-500" />
                    <span className="text-sm">{property.details.bathrooms} Baths</span>
                  </div>
                )}
              </div>

              <Link
                href={`/properties/${property.id}`}
                className="block w-full text-center bg-brand-blue text-white px-4 py-2 rounded-xl font-semibold hover:bg-blue-800 transition-colors mt-4"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop View - Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
          <thead>
            <tr className="bg-gradient-to-r from-brand-blue to-blue-800 text-white">
              <th className="p-4 text-left font-montserrat w-48">Feature</th>
              {comparisonProperties.map((property) => (
                <th key={property.id} className="p-4 text-center relative min-w-[280px]">
                  <button
                    onClick={() => removeFromComparison(property.id)}
                    className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm p-1 rounded-full hover:bg-white/30 transition-colors"
                    aria-label="Remove from comparison"
                  >
                    <X size={18} />
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row, index) => {
              const showRow = comparisonProperties.some((property) => {
                if (row.key === "bedrooms" || row.key === "bathrooms" || row.key === "size" || row.key === "plotSize") {
                  return property.details[row.key as keyof typeof property.details];
                }
                if (row.key === "units") {
                  return property.details.units;
                }
                return true;
              });

              if (!showRow && row.key !== "image" && row.key !== "title" && row.key !== "location" && row.key !== "price" && row.key !== "type" && row.key !== "status" && row.key !== "features" && row.key !== "amenities") {
                return null;
              }

              return (
                <tr key={row.key} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="p-4 font-semibold text-gray-700 border-r border-gray-200">
                    {row.label}
                  </td>
                  {comparisonProperties.map((property) => (
                    <td key={property.id} className="p-4 text-center">
                      {row.key === "image" && (
                        <div className="relative h-40 rounded-xl overflow-hidden">
                          <Image
                            src={property.image}
                            alt={property.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      {row.key === "title" && (
                        <Link
                          href={`/properties/${property.id}`}
                          className="font-montserrat font-bold text-brand-blue hover:text-blue-800 transition-colors"
                        >
                          {property.title}
                        </Link>
                      )}
                      {row.key === "location" && (
                        <div className="flex items-center justify-center gap-1 text-gray-600">
                          <MapPin size={16} />
                          <span>{property.location}</span>
                        </div>
                      )}
                      {row.key === "price" && (
                        <span className="text-xl font-montserrat font-bold text-brand-blue">
                          {property.price}
                        </span>
                      )}
                      {row.key === "type" && (
                        <span className="inline-block bg-brand-orange/10 text-brand-orange px-3 py-1 rounded-full font-semibold">
                          {property.type}
                        </span>
                      )}
                      {row.key === "status" && (
                        <span
                          className={`inline-block px-3 py-1 rounded-full font-semibold text-white ${
                            property.status === "Available"
                              ? "bg-green-500"
                              : property.status === "Selling Fast"
                              ? "bg-red-500"
                              : "bg-orange-500"
                          }`}
                        >
                          {property.status}
                        </span>
                      )}
                      {row.key === "bedrooms" && (
                        <div className="flex items-center justify-center gap-2">
                          {property.details.bedrooms ? (
                            <>
                              <Bed size={18} className="text-gray-500" />
                              <span>{property.details.bedrooms}</span>
                            </>
                          ) : (
                            <Minus size={18} className="text-gray-400" />
                          )}
                        </div>
                      )}
                      {row.key === "bathrooms" && (
                        <div className="flex items-center justify-center gap-2">
                          {property.details.bathrooms ? (
                            <>
                              <Bath size={18} className="text-gray-500" />
                              <span>{property.details.bathrooms}</span>
                            </>
                          ) : (
                            <Minus size={18} className="text-gray-400" />
                          )}
                        </div>
                      )}
                      {row.key === "size" && (
                        <span>
                          {property.details.size || <Minus size={18} className="inline text-gray-400" />}
                        </span>
                      )}
                      {row.key === "plotSize" && (
                        <span>
                          {property.details.plotSize || <Minus size={18} className="inline text-gray-400" />}
                        </span>
                      )}
                      {row.key === "units" && (
                        <span>
                          {property.details.units || <Minus size={18} className="inline text-gray-400" />}
                        </span>
                      )}
                      {row.key === "features" && (
                        <ul className="text-left space-y-1">
                          {property.features.slice(0, 5).map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <Check size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {row.key === "amenities" && (
                        <ul className="text-left space-y-1">
                          {property.amenities.slice(0, 5).map((amenity, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <Check size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                              <span>{amenity}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/properties"
          className="inline-flex items-center gap-2 bg-brand-blue text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-800 transition-colors"
        >
          <Home size={20} />
          Browse More Properties
        </Link>
      </div>
    </div>
  );
}
