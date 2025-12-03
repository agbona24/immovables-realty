"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  title: string;
}

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoading, setImageLoading] = useState(true);

  // Gallery images - Real property images
  const galleryImages: GalleryImage[] = [
    // Houses for Sale - NEW
    {
      id: 1,
      src: "/images/gallery/house-for-sale-1.jpg",
      alt: "House for Sale 1",
      category: "Houses for Sale",
      title: "Beautiful House for Sale",
    },
    {
      id: 2,
      src: "/images/gallery/house-for-sale-2.jpg",
      alt: "House for Sale 2",
      category: "Houses for Sale",
      title: "Modern House for Sale",
    },
    {
      id: 3,
      src: "/images/gallery/house-for-sale-3.jpg",
      alt: "House for Sale 3",
      category: "Houses for Sale",
      title: "Premium House for Sale",
    },
    // Land for Sale - NEW
    {
      id: 4,
      src: "/images/gallery/land-for-sale-1.jpg",
      alt: "Land for Sale 1",
      category: "Land for Sale",
      title: "Prime Land for Sale",
    },
    {
      id: 5,
      src: "/images/gallery/land-for-sale-2.jpg",
      alt: "Land for Sale 2",
      category: "Land for Sale",
      title: "Commercial Land for Sale",
    },
    {
      id: 6,
      src: "/images/gallery/land-for-sale-3.jpg",
      alt: "Land for Sale 3",
      category: "Land for Sale",
      title: "Investment Land for Sale",
    },
    {
      id: 7,
      src: "/images/gallery/land-for-sale-4.jpg",
      alt: "Land for Sale 4",
      category: "Land for Sale",
      title: "Premium Land for Sale",
    },
    // Properties
    {
      id: 8,
      src: "/images/gallery/property-1.jpg",
      alt: "Prime Haven Groven",
      category: "Properties",
      title: "Prime Haven Groven",
    },
    {
      id: 9,
      src: "/images/gallery/property-2.jpg",
      alt: "Prime Haven Groven - Updated Pricing",
      category: "Properties",
      title: "Prime Haven Groven - New Price",
    },
    {
      id: 10,
      src: "/images/gallery/property-3.jpg",
      alt: "Prive Haven Estate",
      category: "Properties",
      title: "Prive Haven Estate",
    },
    {
      id: 11,
      src: "/images/gallery/land-investment.jpg",
      alt: "Land Investment Opportunity",
      category: "Properties",
      title: "Land That Sells Itself",
    },
    {
      id: 12,
      src: "/images/gallery/location-feature.jpg",
      alt: "Prime Location Property",
      category: "Properties",
      title: "Strategic Location",
    },
    {
      id: 13,
      src: "/images/gallery/smart-investors.jpg",
      alt: "Smart Investors Property",
      category: "Properties",
      title: "Smart Investment Opportunity",
    },
    {
      id: 14,
      src: "/images/gallery/property-4.jpg",
      alt: "Prime Property",
      category: "Properties",
      title: "Prime Investment",
    },
    {
      id: 15,
      src: "/images/gallery/property-5.jpg",
      alt: "Quality Estate",
      category: "Properties",
      title: "Premium Estate",
    },
    {
      id: 16,
      src: "/images/gallery/property-6.jpg",
      alt: "Investment Opportunity",
      category: "Properties",
      title: "Investment Property",
    },
    // Office
    {
      id: 17,
      src: "/images/gallery/office-1.jpg",
      alt: "IMMOVABLES REALTY Office",
      category: "Office",
      title: "Our Office Location",
    },
    // Community
    {
      id: 18,
      src: "/images/gallery/community-1.jpg",
      alt: "Abeokuta Community",
      category: "Community",
      title: "Thriving Community",
    },
    // Additional Gallery Images (gal 1 - gal 20)
    {
      id: 19,
      src: "/images/gal 1.jpeg",
      alt: "Gallery Image 1",
      category: "Properties",
      title: "Property Showcase 1",
    },
    {
      id: 20,
      src: "/images/gal 2.jpeg",
      alt: "Gallery Image 2",
      category: "Properties",
      title: "Property Showcase 2",
    },
    {
      id: 21,
      src: "/images/gal 3.jpeg",
      alt: "Gallery Image 3",
      category: "Properties",
      title: "Property Showcase 3",
    },
    {
      id: 22,
      src: "/images/gal 4.jpeg",
      alt: "Gallery Image 4",
      category: "Properties",
      title: "Property Showcase 4",
    },
    {
      id: 23,
      src: "/images/gal 5.jpeg",
      alt: "Gallery Image 5",
      category: "Properties",
      title: "Property Showcase 5",
    },
    {
      id: 24,
      src: "/images/gal 6.jpeg",
      alt: "Gallery Image 6",
      category: "Properties",
      title: "Property Showcase 6",
    },
    {
      id: 25,
      src: "/images/gal 7.jpeg",
      alt: "Gallery Image 7",
      category: "Properties",
      title: "Property Showcase 7",
    },
    {
      id: 26,
      src: "/images/gal 8.jpeg",
      alt: "Gallery Image 8",
      category: "Properties",
      title: "Property Showcase 8",
    },
    {
      id: 27,
      src: "/images/gal 9.jpeg",
      alt: "Gallery Image 9",
      category: "Properties",
      title: "Property Showcase 9",
    },
    {
      id: 28,
      src: "/images/gal 10.jpeg",
      alt: "Gallery Image 10",
      category: "Properties",
      title: "Property Showcase 10",
    },
    {
      id: 29,
      src: "/images/gal 11.jpeg",
      alt: "Gallery Image 11",
      category: "Properties",
      title: "Property Showcase 11",
    },
    {
      id: 30,
      src: "/images/gal 12.jpeg",
      alt: "Gallery Image 12",
      category: "Properties",
      title: "Property Showcase 12",
    },
    {
      id: 31,
      src: "/images/gal 13.jpeg",
      alt: "Gallery Image 13",
      category: "Properties",
      title: "Property Showcase 13",
    },
    {
      id: 32,
      src: "/images/gal 14.jpeg",
      alt: "Gallery Image 14",
      category: "Properties",
      title: "Property Showcase 14",
    },
    {
      id: 33,
      src: "/images/gal 15.jpeg",
      alt: "Gallery Image 15",
      category: "Properties",
      title: "Property Showcase 15",
    },
    {
      id: 34,
      src: "/images/gal 16.jpeg",
      alt: "Gallery Image 16",
      category: "Properties",
      title: "Property Showcase 16",
    },
    {
      id: 35,
      src: "/images/gal 17.jpeg",
      alt: "Gallery Image 17",
      category: "Properties",
      title: "Property Showcase 17",
    },
    {
      id: 36,
      src: "/images/gal 18.jpeg",
      alt: "Gallery Image 18",
      category: "Properties",
      title: "Property Showcase 18",
    },
    {
      id: 37,
      src: "/images/gal 19.jpeg",
      alt: "Gallery Image 19",
      category: "Properties",
      title: "Property Showcase 19",
    },
    {
      id: 38,
      src: "/images/gal 20.jpeg",
      alt: "Gallery Image 20",
      category: "Properties",
      title: "Property Showcase 20",
    },
  ];

  const categories = ["All", "Houses for Sale", "Land for Sale", "Properties", "Office", "Community"];

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const openLightbox = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    setImageLoading(true);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToNext = () => {
    if (currentIndex < filteredImages.length - 1) {
      setImageLoading(true);
      setCurrentIndex(currentIndex + 1);
      setSelectedImage(filteredImages[currentIndex + 1]);
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setImageLoading(true);
      setCurrentIndex(currentIndex - 1);
      setSelectedImage(filteredImages[currentIndex - 1]);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!selectedImage) return;

      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "ArrowLeft") goToPrevious();
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [selectedImage, currentIndex]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-brand-orange/10 text-brand-orange px-6 py-2 rounded-full text-sm font-semibold">
            Our Gallery
          </span>
          <h2 className="font-montserrat font-extrabold text-4xl md:text-5xl text-brand-blue mt-4 mb-4">
            Explore Our <span className="text-brand-orange">Portfolio</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Take a visual tour of our properties, office space, and the vibrant
            communities we serve
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex justify-center gap-3 mb-12 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-brand-blue text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow"
              }`}
            >
              {category}
              {selectedCategory === category && (
                <span className="ml-2 bg-white/20 px-2 py-0.5 rounded-full text-xs">
                  {filteredImages.length}
                </span>
              )}
            </button>
          ))}
        </motion.div>

        {/* Masonry Gallery Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="break-inside-avoid mb-6"
              >
                <div
                  className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300"
                  onClick={() => openLightbox(image, index)}
                >
                  {/* Image Container */}
                  <div className="relative w-full bg-gray-200">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect width='600' height='400' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16' fill='%236b7280'%3E${encodeURIComponent(
                          image.title
                        )}%3C/text%3E%3C/svg%3E`;
                      }}
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-bold text-lg mb-1">
                        {image.title}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="bg-brand-orange text-white px-3 py-1 rounded-full text-xs font-semibold">
                          {image.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 z-20 bg-white/10 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/20 transition"
              onClick={closeLightbox}
              title="Close (ESC)"
            >
              <X size={24} />
            </button>

            {/* Image Counter */}
            <div className="absolute top-4 left-4 z-20 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white font-semibold">
              {currentIndex + 1} / {filteredImages.length}
            </div>

            {/* Navigation Buttons */}
            {currentIndex > 0 && (
              <button
                className="absolute left-4 bg-white/10 backdrop-blur-md text-white p-4 rounded-full hover:bg-white/20 transition z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                title="Previous (←)"
              >
                <ChevronLeft size={28} />
              </button>
            )}

            {currentIndex < filteredImages.length - 1 && (
              <button
                className="absolute right-4 bg-white/10 backdrop-blur-md text-white p-4 rounded-full hover:bg-white/20 transition z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                title="Next (→)"
              >
                <ChevronRight size={28} />
              </button>
            )}

            {/* Image Container */}
            <motion.div
              className="relative max-w-7xl w-full h-[85vh]"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              key={selectedImage.id}
            >
              {/* Loading Indicator */}
              <AnimatePresence>
                {imageLoading && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-10 rounded-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="w-12 h-12 border-4 border-brand-orange border-t-transparent rounded-full animate-spin" />
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  onLoadingComplete={() => setImageLoading(false)}
                  onError={(e) => {
                    setImageLoading(false);
                    const target = e.target as HTMLImageElement;
                    target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect width='800' height='600' fill='%23374151'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='%23ffffff'%3E${encodeURIComponent(
                      selectedImage.title
                    )}%3C/text%3E%3C/svg%3E`;
                  }}
                  priority
                />
              </div>
            </motion.div>

            {/* Bottom Info Bar */}
            <div className="absolute bottom-0 left-0 right-0 z-20 p-6 bg-gradient-to-t from-black/90 to-transparent">
              <div className="max-w-7xl mx-auto text-center">
                <h3 className="text-white font-montserrat font-bold text-2xl mb-2">
                  {selectedImage.title}
                </h3>
                <div className="flex items-center justify-center gap-3">
                  <span className="bg-brand-orange text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {selectedImage.category}
                  </span>
                  <span className="text-gray-400 text-sm">
                    Use ← → keys to navigate
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
