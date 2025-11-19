"use client";

import React, { useEffect, useRef, useState } from "react";
import { MapPin, List, Map as MapIcon, Home, X } from "lucide-react";
import { properties } from "@/data/properties";
import Link from "next/link";
import Image from "next/image";

interface PropertyMapViewProps {
  selectedPropertyId?: string;
  showList?: boolean;
}

export default function PropertyMapView({
  selectedPropertyId,
  showList = true,
}: PropertyMapViewProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [selectedProperty, setSelectedProperty] = useState<string | null>(
    selectedPropertyId || null
  );
  const [viewMode, setViewMode] = useState<"map" | "split">(showList ? "split" : "map");
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapInstanceRef = useRef<any>(null);

  // Filter properties that have coordinates
  const propertiesWithCoordinates = properties.filter((p) => p.coordinates);

  useEffect(() => {
    // Dynamically import Leaflet only on client side
    const initMap = async () => {
      if (typeof window === "undefined" || mapLoaded) return;

      // Load Leaflet CSS
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(link);

      // Load Leaflet JS
      const L = await import("leaflet");

      if (!mapRef.current || mapInstanceRef.current) return;

      // Initialize map
      const map = L.map(mapRef.current).setView([7.1575, 3.3619], 13);

      // Add tile layer
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);

      // Custom icon
      const customIcon = L.divIcon({
        className: "custom-marker",
        html: `<div style="background-color: #0C3B82; width: 32px; height: 32px; border-radius: 50% 50% 50% 0; transform: rotate(-45deg); border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3);"><div style="transform: rotate(45deg); width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: white; font-size: 16px;">📍</div></div>`,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
      });

      // Add markers for properties with coordinates
      propertiesWithCoordinates.forEach((property) => {
        if (property.coordinates) {
          const marker = L.marker([property.coordinates.lat, property.coordinates.lng], {
            icon: customIcon,
          }).addTo(map);

          const popupContent = `
            <div style="min-width: 200px;">
              <h3 style="font-weight: bold; color: #0C3B82; margin-bottom: 8px; font-size: 16px;">${property.title}</h3>
              <p style="color: #666; margin-bottom: 8px; font-size: 14px;">
                <strong>📍</strong> ${property.location}
              </p>
              <p style="color: #F47A20; font-weight: bold; margin-bottom: 8px; font-size: 18px;">${property.price}</p>
              <p style="background: ${
                property.status === "Available"
                  ? "#10b981"
                  : property.status === "Selling Fast"
                  ? "#ef4444"
                  : "#f97316"
              }; color: white; padding: 4px 8px; border-radius: 4px; display: inline-block; font-size: 12px;">${
            property.status
          }</p>
            </div>
          `;

          marker.bindPopup(popupContent);

          marker.on("click", () => {
            setSelectedProperty(property.id);
          });

          // Open popup if this is the selected property
          if (property.id === selectedPropertyId) {
            marker.openPopup();
          }
        }
      });

      mapInstanceRef.current = map;
      setMapLoaded(true);

      // Fit bounds to show all markers
      if (propertiesWithCoordinates.length > 0) {
        const bounds = L.latLngBounds(
          propertiesWithCoordinates.map((p) => [p.coordinates!.lat, p.coordinates!.lng])
        );
        map.fitBounds(bounds, { padding: [50, 50] });
      }
    };

    initMap();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
        setMapLoaded(false);
      }
    };
  }, []);

  const handlePropertyClick = (propertyId: string) => {
    setSelectedProperty(propertyId);

    const property = properties.find((p) => p.id === propertyId);
    if (property && property.coordinates && mapInstanceRef.current) {
      const L = require("leaflet");
      mapInstanceRef.current.setView(
        [property.coordinates.lat, property.coordinates.lng],
        15,
        { animate: true }
      );
    }
  };

  const selectedPropertyData = properties.find((p) => p.id === selectedProperty);

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-brand-blue/10 p-3 rounded-xl">
              <MapPin className="w-6 h-6 text-brand-blue" />
            </div>
            <div>
              <h2 className="text-2xl font-montserrat font-bold text-brand-blue">
                Property Map
              </h2>
              <p className="text-gray-600 text-sm">
                {propertiesWithCoordinates.length} properties on map
              </p>
            </div>
          </div>

          {showList && (
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode("map")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "map"
                    ? "bg-brand-blue text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                aria-label="Map only view"
              >
                <MapIcon size={20} />
              </button>
              <button
                onClick={() => setViewMode("split")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "split"
                    ? "bg-brand-blue text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                aria-label="Split view"
              >
                <List size={20} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Map and List Container */}
      <div className="flex flex-col md:flex-row">
        {/* Map */}
        <div
          className={`${
            viewMode === "split" && showList ? "md:w-2/3" : "w-full"
          } h-[400px] md:h-[600px] relative`}
        >
          <div ref={mapRef} className="w-full h-full" />
          {!mapLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="text-center">
                <MapIcon className="w-12 h-12 text-gray-400 mx-auto mb-2 animate-pulse" />
                <p className="text-gray-600">Loading map...</p>
              </div>
            </div>
          )}
        </div>

        {/* Property List */}
        {viewMode === "split" && showList && (
          <div className="md:w-1/3 h-[400px] md:h-[600px] overflow-y-auto border-t md:border-t-0 md:border-l border-gray-200 bg-gray-50">
            <div className="p-4 space-y-3">
              {propertiesWithCoordinates.map((property) => (
                <div
                  key={property.id}
                  onClick={() => handlePropertyClick(property.id)}
                  className={`bg-white rounded-xl p-3 cursor-pointer transition-all hover:shadow-md ${
                    selectedProperty === property.id
                      ? "ring-2 ring-brand-blue shadow-md"
                      : ""
                  }`}
                >
                  <div className="flex gap-3">
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={property.image}
                        alt={property.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-800 text-sm mb-1 truncate">
                        {property.title}
                      </h3>
                      <div className="flex items-center text-xs text-gray-600 mb-1">
                        <MapPin size={12} className="mr-1 flex-shrink-0" />
                        <span className="truncate">{property.location}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-brand-blue text-sm">
                          {property.price}
                        </span>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full ${
                            property.status === "Available"
                              ? "bg-green-100 text-green-700"
                              : property.status === "Selling Fast"
                              ? "bg-red-100 text-red-700"
                              : "bg-orange-100 text-orange-700"
                          }`}
                        >
                          {property.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Selected Property Details */}
      {selectedPropertyData && (
        <div className="p-6 border-t border-gray-200 bg-gradient-to-r from-blue-50 to-orange-50">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-montserrat font-bold text-brand-blue mb-1">
                {selectedPropertyData.title}
              </h3>
              <div className="flex items-center text-gray-600 text-sm">
                <MapPin size={16} className="mr-1" />
                {selectedPropertyData.location}
              </div>
            </div>
            <button
              onClick={() => setSelectedProperty(null)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close details"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-2xl font-montserrat font-bold text-brand-blue">
              {selectedPropertyData.price}
            </span>
            <Link
              href={`/properties/${selectedPropertyData.id}`}
              className="bg-brand-blue text-white px-6 py-2 rounded-xl font-semibold hover:bg-blue-800 transition-colors inline-flex items-center gap-2"
            >
              <Home size={18} />
              View Details
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
