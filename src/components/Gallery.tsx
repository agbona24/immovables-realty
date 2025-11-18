"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

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

  // Gallery images - Real property images
  const galleryImages: GalleryImage[] = [
    // Properties
    {
      id: 1,
      src: "/images/gallery/property-1.jpg",
      alt: "Prime Haven Groven",
      category: "Properties",
      title: "Prime Haven Groven",
    },
    {
      id: 2,
      src: "/images/gallery/property-2.jpg",
      alt: "Prime Haven Groven - Updated Pricing",
      category: "Properties",
      title: "Prime Haven Groven - New Price",
    },
    {
      id: 3,
      src: "/images/gallery/property-3.jpg",
      alt: "Prive Haven Estate",
      category: "Properties",
      title: "Prive Haven Estate",
    },
    {
      id: 4,
      src: "/images/gallery/land-investment.jpg",
      alt: "Land Investment Opportunity",
      category: "Properties",
      title: "Land That Sells Itself",
    },
    {
      id: 5,
      src: "/images/gallery/location-feature.jpg",
      alt: "Prime Location Property",
      category: "Properties",
      title: "Strategic Location",
    },
    {
      id: 6,
      src: "/images/gallery/smart-investors.jpg",
      alt: "Smart Investors Property",
      category: "Properties",
      title: "Smart Investment Opportunity",
    },
    {
      id: 7,
      src: "/images/gallery/property-4.jpg",
      alt: "Prime Property",
      category: "Properties",
      title: "Prime Investment",
    },
    {
      id: 8,
      src: "/images/gallery/property-5.jpg",
      alt: "Quality Estate",
      category: "Properties",
      title: "Premium Estate",
    },
    {
      id: 9,
      src: "/images/gallery/property-6.jpg",
      alt: "Investment Opportunity",
      category: "Properties",
      title: "Investment Property",
    },
    // Office
    {
      id: 10,
      src: "/images/gallery/office-1.jpg",
      alt: "IMMOVABLES REALTY Office",
      category: "Office",
      title: "Our Office Location",
    },
    // Community
    {
      id: 11,
      src: "/images/gallery/community-1.jpg",
      alt: "Abeokuta Community",
      category: "Community",
      title: "Thriving Community",
    },
  ];

  const categories = ["All", "Properties", "Office", "Community"];

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const openLightbox = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToNext = () => {
    if (currentIndex < filteredImages.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedImage(filteredImages[currentIndex + 1]);
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedImage(filteredImages[currentIndex - 1]);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Decorations */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-brand-blue rounded-full opacity-5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-brand-orange rounded-full opacity-5 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.8 }}
          >
            <span className="bg-brand-orange/10 text-brand-orange px-6 py-2 rounded-full text-sm font-semibold">
              Our Gallery
            </span>
          </motion.div>
          <h2 className="font-montserrat font-extrabold text-4xl md:text-5xl lg:text-6xl text-brand-blue mb-4">
            Explore Our{" "}
            <span className="text-brand-orange">Portfolio</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Take a visual tour of our properties, office space, and the vibrant
            communities we serve
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex justify-center gap-4 mb-12 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition ${
                selectedCategory === category
                  ? "bg-brand-blue text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow aspect-[4/3]"
                onClick={() => openLightbox(image, index)}
              >
                <div className="relative w-full h-full bg-gray-200">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16' fill='%236b7280'%3E${encodeURIComponent(
                        image.title
                      )}%3C/text%3E%3C/svg%3E`;
                    }}
                  />
                </div>

                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                >
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-semibold text-lg mb-1">
                      {image.title}
                    </p>
                    <p className="text-gray-300 text-sm">{image.category}</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                      <ZoomIn className="text-white" size={20} />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

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
            <motion.button
              className="absolute top-6 right-6 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition z-10"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={closeLightbox}
            >
              <X size={24} />
            </motion.button>

            {/* Navigation Buttons */}
            {currentIndex > 0 && (
              <motion.button
                className="absolute left-6 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition"
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
              >
                <ChevronLeft size={28} />
              </motion.button>
            )}

            {currentIndex < filteredImages.length - 1 && (
              <motion.button
                className="absolute right-6 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition"
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
              >
                <ChevronRight size={28} />
              </motion.button>
            )}

            {/* Image */}
            <motion.div
              className="relative max-w-5xl max-h-[85vh] w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full aspect-video">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect width='800' height='600' fill='%23374151'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='%23ffffff'%3E${encodeURIComponent(
                      selectedImage.title
                    )}%3C/text%3E%3C/svg%3E`;
                  }}
                />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-white font-montserrat font-bold text-2xl mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-300">{selectedImage.category}</p>
                <p className="text-gray-400 text-sm mt-2">
                  {currentIndex + 1} / {filteredImages.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
