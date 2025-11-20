"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useTransform, PanInfo } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Heart,
  Share2,
  ArrowRight,
  Sparkles,
  TrendingUp,
} from "lucide-react";

interface Property {
  id: string | number;
  title: string;
  price: string;
  location: string;
  type: string;
  image: string;
  badge?: string;
  features?: string[];
}

interface MobilePropertyCardsProps {
  properties: Property[];
}

const MobilePropertyCards = ({ properties }: MobilePropertyCardsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [liked, setLiked] = useState<number[]>([]);
  const [exitDirection, setExitDirection] = useState<"left" | "right" | null>(
    null
  );

  const handleLike = (id: number) => {
    if (liked.includes(id)) {
      setLiked(liked.filter((item) => item !== id));
    } else {
      setLiked([...liked, id]);
    }
  };

  const handleSwipe = (direction: "left" | "right") => {
    setExitDirection(direction);
    setTimeout(() => {
      if (currentIndex < properties.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(0);
      }
      setExitDirection(null);
    }, 300);
  };

  return (
    <div className="md:hidden relative w-full px-4 py-8">
      {/* Header */}
      <div className="mb-6">
        <motion.div
          className="flex items-center gap-2 mb-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Sparkles className="text-brand-orange" size={24} />
          <h2 className="font-montserrat font-bold text-2xl text-brand-blue">
            Hot Properties
          </h2>
        </motion.div>
        <p className="text-gray-600 text-sm">
          Swipe right to save, left to skip
        </p>
      </div>

      {/* Progress Indicator */}
      <div className="flex gap-1 mb-4">
        {properties.map((_, index) => (
          <div
            key={index}
            className={`h-1 flex-1 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-brand-orange"
                : index < currentIndex
                ? "bg-brand-blue"
                : "bg-gray-200"
            }`}
          />
        ))}
      </div>

      {/* Card Stack */}
      <div className="relative h-[500px] w-full">
        {properties.map((property, index) => {
          if (index < currentIndex - 1 || index > currentIndex + 2) return null;

          return (
            <PropertyCard
              key={property.id}
              property={property}
              index={index}
              currentIndex={currentIndex}
              onSwipe={handleSwipe}
              onLike={handleLike}
              isLiked={liked.includes(property.id)}
              exitDirection={index === currentIndex ? exitDirection : null}
            />
          );
        })}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center items-center gap-6 mt-6">
        <motion.button
          className="w-16 h-16 rounded-full bg-white border-2 border-red-500 flex items-center justify-center shadow-lg"
          whileTap={{ scale: 0.9 }}
          onClick={() => handleSwipe("left")}
        >
          <X className="text-red-500" size={28} strokeWidth={3} />
        </motion.button>

        <motion.button
          className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-orange to-orange-600 flex items-center justify-center shadow-2xl"
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            handleLike(properties[currentIndex].id);
            handleSwipe("right");
          }}
        >
          <Heart className="text-white" size={32} strokeWidth={2.5} fill="white" />
        </motion.button>

        <motion.button
          className="w-16 h-16 rounded-full bg-white border-2 border-brand-blue flex items-center justify-center shadow-lg"
          whileTap={{ scale: 0.9 }}
        >
          <Share2 className="text-brand-blue" size={24} />
        </motion.button>
      </div>

      {/* View All Link */}
      <Link href="/properties">
        <motion.div
          className="mt-6 bg-gradient-to-r from-brand-blue to-blue-600 text-white p-4 rounded-2xl flex items-center justify-between"
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center gap-2">
            <TrendingUp size={24} />
            <span className="font-semibold">View All Properties</span>
          </div>
          <ArrowRight size={20} />
        </motion.div>
      </Link>
    </div>
  );
};

interface PropertyCardProps {
  property: Property;
  index: number;
  currentIndex: number;
  onSwipe: (direction: "left" | "right") => void;
  onLike: (id: number) => void;
  isLiked: boolean;
  exitDirection: "left" | "right" | null;
}

const PropertyCard = ({
  property,
  index,
  currentIndex,
  onSwipe,
  onLike,
  isLiked,
  exitDirection,
}: PropertyCardProps) => {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-15, 15]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (Math.abs(info.offset.x) > 100) {
      onSwipe(info.offset.x > 0 ? "right" : "left");
      if (info.offset.x > 0) {
        onLike(property.id);
      }
    }
  };

  const zIndex = currentIndex === index ? 30 : 30 - (index - currentIndex);
  const scale = currentIndex === index ? 1 : 0.95 - (index - currentIndex) * 0.05;
  const yOffset = (index - currentIndex) * 10;

  return (
    <motion.div
      className="absolute inset-0 cursor-grab active:cursor-grabbing"
      style={{
        x,
        rotate,
        opacity,
        zIndex,
      }}
      initial={{
        scale: scale,
        y: yOffset,
      }}
      animate={{
        scale: scale,
        y: exitDirection
          ? exitDirection === "right"
            ? -500
            : 500
          : yOffset,
        x: exitDirection
          ? exitDirection === "right"
            ? 500
            : -500
          : 0,
      }}
      drag={index === currentIndex && !exitDirection ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="relative w-full h-full bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Image */}
        <div className="relative h-[60%] w-full overflow-hidden">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Badge */}
          {property.badge && (
            <motion.div
              className="absolute top-4 left-4 bg-brand-orange text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg"
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              {property.badge}
            </motion.div>
          )}

          {/* Like Button */}
          <motion.button
            className={`absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center shadow-lg ${
              isLiked
                ? "bg-red-500"
                : "bg-white/80 backdrop-blur-sm"
            }`}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              onLike(property.id);
            }}
          >
            <Heart
              size={24}
              className={isLiked ? "text-white" : "text-gray-700"}
              fill={isLiked ? "white" : "none"}
            />
          </motion.button>

          {/* Price Tag */}
          <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="font-montserrat font-bold text-2xl text-brand-orange">
              {property.price}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 h-[40%] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full">
                {property.type}
              </span>
            </div>

            <h3 className="font-montserrat font-bold text-xl text-brand-blue mb-2 line-clamp-2">
              {property.title}
            </h3>

            <div className="flex items-center gap-2 text-gray-600 mb-4">
              <MapPin size={16} />
              <span className="text-sm">{property.location}</span>
            </div>

            {property.features && (
              <div className="flex flex-wrap gap-2">
                {property.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            )}
          </div>

          <Link href={`/properties/${property.id}`}>
            <motion.button
              className="w-full bg-gradient-to-r from-brand-blue to-blue-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
              whileTap={{ scale: 0.98 }}
            >
              View Details
              <ArrowRight size={18} />
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Swipe Indicators */}
      <motion.div
        className="absolute top-1/2 left-8 -translate-y-1/2 text-green-500 font-bold text-6xl opacity-0"
        style={{
          opacity: useTransform(x, [0, 100], [0, 1]),
        }}
      >
        LIKE
      </motion.div>
      <motion.div
        className="absolute top-1/2 right-8 -translate-y-1/2 text-red-500 font-bold text-6xl opacity-0"
        style={{
          opacity: useTransform(x, [-100, 0], [1, 0]),
        }}
      >
        NOPE
      </motion.div>
    </motion.div>
  );
};

// Missing import
import { X } from "lucide-react";

export default MobilePropertyCards;
