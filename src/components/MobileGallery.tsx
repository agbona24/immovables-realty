"use client";

import { useState } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn, Share2 } from "lucide-react";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  title: string;
}

interface MobileGalleryProps {
  images: GalleryImage[];
}

const MobileGallery = ({ images }: MobileGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);

  const handleSwipe = (swipeDirection: number) => {
    if (selectedImage === null) return;

    const newIndex = selectedImage + swipeDirection;
    if (newIndex >= 0 && newIndex < images.length) {
      setDirection(swipeDirection);
      setSelectedImage(newIndex);
    }
  };

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (Math.abs(info.offset.x) > 50) {
      handleSwipe(info.offset.x > 0 ? -1 : 1);
    }
  };

  return (
    <>
      {/* Gallery Grid */}
      <div className="md:hidden grid grid-cols-2 gap-3 p-4">
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            className="relative aspect-square rounded-2xl overflow-hidden bg-gray-200 cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setSelectedImage(index);
              setDirection(0);
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3">
              <div>
                <div className="text-white text-xs font-bold mb-1">
                  {image.title}
                </div>
                <div className="text-white/80 text-[10px]">
                  {image.category}
                </div>
              </div>
            </div>

            {/* Zoom Icon */}
            <motion.div
              className="absolute top-2 right-2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
            >
              <ZoomIn size={16} className="text-brand-blue" />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Full Screen Viewer */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Header */}
            <motion.div
              className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/80 to-transparent p-4 pt-safe"
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              exit={{ y: -100 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="text-white font-bold">
                    {images[selectedImage].title}
                  </div>
                  <div className="text-white/70 text-sm">
                    {selectedImage + 1} / {images.length}
                  </div>
                </div>

                <div className="flex gap-2">
                  <motion.button
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center"
                    whileTap={{ scale: 0.9 }}
                  >
                    <Share2 size={20} className="text-white" />
                  </motion.button>
                  <motion.button
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center"
                    onClick={() => setSelectedImage(null)}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X size={24} className="text-white" strokeWidth={2.5} />
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Image Container */}
            <div className="absolute inset-0 flex items-center justify-center">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={selectedImage}
                  custom={direction}
                  className="relative w-full h-full"
                  initial={{
                    x: direction > 0 ? 300 : -300,
                    opacity: 0,
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                  }}
                  exit={{
                    x: direction > 0 ? -300 : 300,
                    opacity: 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={handleDragEnd}
                >
                  <div className="relative w-full h-full flex items-center justify-center p-4">
                    <Image
                      src={images[selectedImage].src}
                      alt={images[selectedImage].alt}
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none px-4">
              {selectedImage > 0 && (
                <motion.button
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center pointer-events-auto"
                  onClick={() => handleSwipe(-1)}
                  whileTap={{ scale: 0.9 }}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                >
                  <ChevronLeft size={28} className="text-white" strokeWidth={3} />
                </motion.button>
              )}

              {selectedImage < images.length - 1 && (
                <motion.button
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center pointer-events-auto ml-auto"
                  onClick={() => handleSwipe(1)}
                  whileTap={{ scale: 0.9 }}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                >
                  <ChevronRight size={28} className="text-white" strokeWidth={3} />
                </motion.button>
              )}
            </div>

            {/* Bottom Info */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pb-safe"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ y: 100 }}
            >
              <div className="text-center">
                <div className="inline-block bg-brand-orange/20 backdrop-blur-sm border border-brand-orange/30 px-4 py-2 rounded-full mb-3">
                  <span className="text-brand-orange text-sm font-bold">
                    {images[selectedImage].category}
                  </span>
                </div>
                <div className="text-white/70 text-sm">
                  Swipe left or right to view more
                </div>
              </div>
            </motion.div>

            {/* Progress Dots */}
            <div className="absolute bottom-24 left-0 right-0 flex justify-center gap-1 px-4">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 rounded-full transition-all ${
                    index === selectedImage
                      ? "w-8 bg-brand-orange"
                      : "w-1 bg-white/30"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileGallery;
