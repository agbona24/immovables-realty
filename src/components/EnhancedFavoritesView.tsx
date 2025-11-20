"use client";

import React, { useState } from "react";
import {
  Heart,
  Trash2,
  MapPin,
  Home,
  StickyNote,
  FolderPlus,
  Folder,
} from "lucide-react";
import { useFavoritesWithCollections } from "@/hooks/useFavoritesWithCollections";
import { properties } from "@/data/properties";
import Link from "next/link";
import Image from "next/image";
import FavoriteButton from "./FavoriteButton";
import PropertyNoteModal from "./PropertyNoteModal";
import CollectionModal from "./CollectionModal";
import CollectionSelector from "./CollectionSelector";

const colorClasses: Record<string, string> = {
  red: "bg-red-500",
  blue: "bg-blue-500",
  green: "bg-green-500",
  yellow: "bg-yellow-500",
  purple: "bg-purple-500",
  pink: "bg-pink-500",
  orange: "bg-orange-500",
  teal: "bg-teal-500",
};

export default function EnhancedFavoritesView() {
  const {
    favorites,
    clearFavorites,
    favoritesCount,
    collections,
    deleteCollection,
    getNote,
  } = useFavoritesWithCollections();

  const [selectedCollection, setSelectedCollection] = useState("all");
  const [noteModalOpen, setNoteModalOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<{
    id: string;
    title: string;
  } | null>(null);
  const [collectionModalOpen, setCollectionModalOpen] = useState(false);

  const currentCollection = collections.find((c) => c.id === selectedCollection);
  const propertyIdsToShow =
    currentCollection?.id === "all"
      ? favorites
      : currentCollection?.propertyIds || [];

  const favoriteProperties = properties.filter((property) =>
    propertyIdsToShow.includes(property.id)
  );

  const userCollections = collections.filter((c) => c.id !== "all");

  const openNoteModal = (propertyId: string, propertyTitle: string) => {
    setSelectedProperty({ id: propertyId, title: propertyTitle });
    setNoteModalOpen(true);
  };

  if (favoritesCount === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-full mb-6">
          <Heart className="w-16 h-16 text-gray-400" />
        </div>
        <h2 className="text-3xl font-montserrat font-bold text-gray-800 dark:text-white mb-3">
          No Favorites Yet
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
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
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-montserrat font-bold text-brand-blue dark:text-white mb-2">
            My Favorites
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            {favoritesCount} {favoritesCount === 1 ? "property" : "properties"} saved
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => setCollectionModalOpen(true)}
            className="bg-brand-blue text-white px-4 py-2 rounded-xl font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
          >
            <FolderPlus size={18} />
            New Collection
          </button>
          <button
            onClick={clearFavorites}
            className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 px-4 py-2 rounded-xl font-semibold hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors inline-flex items-center gap-2"
          >
            <Trash2 size={18} />
            Clear All
          </button>
        </div>
      </div>

      {/* Collections Tabs */}
      <div className="mb-8 overflow-x-auto">
        <div className="flex gap-3 pb-2">
          {collections.map((collection) => (
            <button
              key={collection.id}
              onClick={() => setSelectedCollection(collection.id)}
              className={`px-5 py-2.5 rounded-xl font-semibold transition-all whitespace-nowrap inline-flex items-center gap-2 ${
                selectedCollection === collection.id
                  ? "bg-brand-blue text-white shadow-lg"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              {collection.id === "all" ? (
                <Heart size={16} />
              ) : (
                <div
                  className={`w-3 h-3 rounded-full ${
                    colorClasses[collection.color] || "bg-blue-500"
                  }`}
                />
              )}
              {collection.name}
              <span className="text-xs opacity-75">
                ({collection.propertyIds.length})
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Delete Collection Button (for non-default collections) */}
      {selectedCollection !== "all" && currentCollection && (
        <div className="mb-4 flex justify-end">
          <button
            onClick={() => {
              deleteCollection(selectedCollection);
              setSelectedCollection("all");
            }}
            className="text-sm text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 font-medium"
          >
            Delete Collection
          </button>
        </div>
      )}

      {/* Properties Grid */}
      {favoriteProperties.length === 0 ? (
        <div className="text-center py-12">
          <Folder className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400">
            No properties in this collection yet.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteProperties.map((property) => {
            const note = getNote(property.id);
            return (
              <Link
                key={property.id}
                href={`/properties/${property.id}`}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                    <div onClick={(e) => e.preventDefault()}>
                      <FavoriteButton propertyId={property.id} size="md" />
                    </div>
                    <CollectionSelector propertyId={property.id} />
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        openNoteModal(property.id, property.title);
                      }}
                      className={`p-2 rounded-full backdrop-blur-sm transition-colors shadow-lg ${
                        note
                          ? "bg-yellow-400 hover:bg-yellow-500"
                          : "bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700"
                      }`}
                      title={note ? "Edit note" : "Add note"}
                    >
                      <StickyNote
                        size={20}
                        className={note ? "text-white" : "text-gray-700 dark:text-gray-300"}
                      />
                    </button>
                  </div>

                  {/* Status Badge */}
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
                    <span className="text-sm font-semibold text-brand-orange bg-orange-50 dark:bg-orange-900/20 px-3 py-1 rounded-full">
                      {property.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-montserrat font-bold text-gray-800 dark:text-white mb-2 group-hover:text-brand-blue transition-colors">
                    {property.title}
                  </h3>

                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                    <MapPin size={16} className="mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>

                  {note && (
                    <div className="mb-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                      <p className="text-xs text-gray-700 dark:text-gray-300 line-clamp-2">
                        {note.note}
                      </p>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                    <span className="text-2xl font-montserrat font-bold text-brand-blue dark:text-blue-400">
                      {property.price}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}

      {/* Modals */}
      {selectedProperty && (
        <PropertyNoteModal
          propertyId={selectedProperty.id}
          propertyTitle={selectedProperty.title}
          isOpen={noteModalOpen}
          onClose={() => {
            setNoteModalOpen(false);
            setSelectedProperty(null);
          }}
        />
      )}

      <CollectionModal
        isOpen={collectionModalOpen}
        onClose={() => setCollectionModalOpen(false)}
      />
    </div>
  );
}
