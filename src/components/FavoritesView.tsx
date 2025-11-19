"use client";

import React from "react";
import { Heart, Trash2, MapPin, Home } from "lucide-react";
import { useFavorites } from "@/hooks/useFavorites";
import { properties } from "@/data/properties";
import Link from "next/link";
import Image from "next/image";
import FavoriteButton from "./FavoriteButton";

export default function FavoritesView() {
  const { favorites, clearFavorites, favoritesCount } = useFavorites();

  const favoriteProperties = properties.filter((property) =>
    favorites.includes(property.id)
  );

  if (favoritesCount === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <div className="bg-gray-100 p-8 rounded-full mb-6">
          <Heart className="w-16 h-16 text-gray-400" />
        </div>
        <h2 className="text-3xl font-montserrat font-bold text-gray-800 mb-3">
          No Favorites Yet
        </h2>
        <p className="text-gray-600 mb-8 max-w-md">
          Start adding properties to your favorites list by clicking the heart icon
          on any property you like.
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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-montserrat font-bold text-brand-blue mb-2">
            My Favorites
          </h1>
          <p className="text-gray-600">
            {favoritesCount} {favoritesCount === 1 ? "property" : "properties"} saved
          </p>
        </div>
        <button
          onClick={clearFavorites}
          className="bg-red-50 text-red-600 px-4 py-2 rounded-xl font-semibold hover:bg-red-100 transition-colors inline-flex items-center gap-2"
        >
          <Trash2 size={18} />
          Clear All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {favoriteProperties.map((property) => (
          <Link
            key={property.id}
            href={`/properties/${property.id}`}
            className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src={property.image}
                alt={property.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 z-10">
                <FavoriteButton propertyId={property.id} size="md" />
              </div>
              <div className="absolute top-4 left-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    property.status === "Available"
                      ? "bg-green-500 text-white"
                      : property.status === "Selling Fast"
                      ? "bg-red-500 text-white"
                      : "bg-orange-500 text-white"
                  }`}
                >
                  {property.status}
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-brand-orange bg-orange-50 px-3 py-1 rounded-full">
                  {property.type}
                </span>
              </div>

              <h3 className="text-xl font-montserrat font-bold text-gray-800 mb-2 group-hover:text-brand-blue transition-colors">
                {property.title}
              </h3>

              <div className="flex items-center text-gray-600 mb-4">
                <MapPin size={16} className="mr-1" />
                <span className="text-sm">{property.location}</span>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-2xl font-montserrat font-bold text-brand-blue">
                  {property.price}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
