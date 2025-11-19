"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Download,
  Grid3x3,
} from "lucide-react";

interface PropertyGalleryProps {
  images: string[];
  propertyTitle: string;
}

const PropertyGallery = ({ images, propertyTitle }: PropertyGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [showThumbnails, setShowThumbnails] = useState(true);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setIsLightboxOpen(true);
    setZoomLevel(1);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setZoomLevel(1);
  };

  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
    setZoomLevel(1);
  };

  const prevImage = () => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
    setZoomLevel(1);
  };

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.5, 1));
  };

  const handleDownload = async () => {
    const imageUrl = images[selectedIndex];
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${propertyTitle}-${selectedIndex + 1}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isLightboxOpen) return;

    switch (e.key) {
      case "ArrowRight":
        nextImage();
        break;
      case "ArrowLeft":
        prevImage();
        break;
      case "Escape":
        closeLightbox();
        break;
      case "+":
      case "=":
        handleZoomIn();
        break;
      case "-":
        handleZoomOut();
        break;
    }
  };

  return (
    <>
      {/* Main Gallery Grid */}
      <div className="grid grid-cols-4 gap-2 md:gap-4">
        {/* Main Image */}
        <div
          className="col-span-4 md:col-span-3 row-span-2 relative rounded-2xl overflow-hidden group cursor-pointer"
          onClick={() => openLightbox(0)}
        >
          <Image
            src={images[0]}
            alt={`${propertyTitle} - Main`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ opacity: 1, scale: 1 }}
              className="bg-white/90 dark:bg-gray-800/90 p-3 rounded-full"
            >
              <Maximize2 size={24} className="text-gray-800 dark:text-white" />
            </motion.div>
          </div>
          <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
            1 / {images.length}
          </div>
        </div>

        {/* Thumbnail Grid */}
        {images.slice(1, 5).map((image, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden group cursor-pointer aspect-square"
            onClick={() => openLightbox(index + 1)}
          >
            <Image
              src={image}
              alt={`${propertyTitle} - ${index + 2}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            {index === 3 && images.length > 5 && (
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                <div className="text-white text-center">
                  <p className="text-2xl font-bold">+{images.length - 5}</p>
                  <p className="text-sm">more</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
            >
              <X size={24} className="text-white" />
            </button>

            {/* Controls Bar */}
            <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
              <button
                onClick={handleZoomOut}
                disabled={zoomLevel <= 1}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                title="Zoom out (-)"
              >
                <ZoomOut size={20} className="text-white" />
              </button>
              <div className="px-4 py-2 bg-white/10 rounded-full text-white font-medium">
                {Math.round(zoomLevel * 100)}%
              </div>
              <button
                onClick={handleZoomIn}
                disabled={zoomLevel >= 3}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                title="Zoom in (+)"
              >
                <ZoomIn size={20} className="text-white" />
              </button>
              <button
                onClick={handleDownload}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors ml-2"
                title="Download image"
              >
                <Download size={20} className="text-white" />
              </button>
              <button
                onClick={() => setShowThumbnails(!showThumbnails)}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                title="Toggle thumbnails"
              >
                <Grid3x3 size={20} className="text-white" />
              </button>
            </div>

            {/* Image Counter */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/10 rounded-full text-white font-medium z-10">
              {selectedIndex + 1} / {images.length}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
              title="Previous (←)"
            >
              <ChevronLeft size={32} className="text-white" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
              title="Next (→)"
            >
              <ChevronRight size={32} className="text-white" />
            </button>

            {/* Main Image */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full flex items-center justify-center p-20"
            >
              <div
                className="relative w-full h-full"
                style={{
                  transform: `scale(${zoomLevel})`,
                  transition: "transform 0.3s ease",
                }}
              >
                <Image
                  src={images[selectedIndex]}
                  alt={`${propertyTitle} - ${selectedIndex + 1}`}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>

            {/* Thumbnail Strip */}
            {showThumbnails && images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 max-w-4xl w-full px-4">
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedIndex(index)}
                      className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden ${
                        index === selectedIndex
                          ? "ring-2 ring-white"
                          : "opacity-60 hover:opacity-100"
                      } transition-all`}
                    >
                      <Image
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PropertyGallery;
