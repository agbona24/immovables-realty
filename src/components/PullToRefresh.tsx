"use client";

import { useState, useEffect, useRef, ReactNode } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { RefreshCw } from "lucide-react";

interface PullToRefreshProps {
  onRefresh: () => Promise<void>;
  children: ReactNode;
}

const PullToRefresh = ({ onRefresh, children }: PullToRefreshProps) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [startY, setStartY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const pullDistance = useMotionValue(0);
  const rotate = useTransform(pullDistance, [0, 100], [0, 360]);
  const opacity = useTransform(pullDistance, [0, 80], [0, 1]);
  const scale = useTransform(pullDistance, [0, 80], [0.5, 1]);

  const containerRef = useRef<HTMLDivElement>(null);
  const threshold = 80;

  useEffect(() => {
    // Detect if we're on mobile after mount
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleTouchStart = (e: TouchEvent) => {
    if (window.scrollY === 0) {
      setStartY(e.touches[0].clientY);
    }
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (window.scrollY === 0 && startY > 0 && !isRefreshing) {
      const currentY = e.touches[0].clientY;
      const distance = Math.max(0, Math.min(currentY - startY, 120));
      pullDistance.set(distance);
    }
  };

  const handleTouchEnd = async () => {
    const distance = pullDistance.get();

    if (distance >= threshold && !isRefreshing) {
      setIsRefreshing(true);
      pullDistance.set(threshold);

      try {
        await onRefresh();
      } catch (error) {
        console.error("Refresh failed:", error);
      } finally {
        setTimeout(() => {
          setIsRefreshing(false);
          pullDistance.set(0);
          setStartY(0);
        }, 500);
      }
    } else {
      pullDistance.set(0);
      setStartY(0);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !isMobile) return;

    container.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    container.addEventListener("touchmove", handleTouchMove, { passive: true });
    container.addEventListener("touchend", handleTouchEnd);

    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, [startY, isRefreshing, isMobile]);

  // On desktop or during SSR, just render children directly
  if (!isMobile) {
    return <>{children}</>;
  }

  return (
    <div ref={containerRef} className="relative">
      {/* Pull to Refresh Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center pointer-events-none md:hidden"
        style={{
          height: pullDistance,
        }}
      >
        <motion.div
          className="bg-white rounded-full shadow-2xl p-3 flex items-center justify-center"
          style={{
            opacity,
            scale,
          }}
        >
          <motion.div
            style={{
              rotate: isRefreshing ? undefined : rotate,
            }}
            animate={
              isRefreshing
                ? {
                    rotate: [0, 360],
                  }
                : {}
            }
            transition={
              isRefreshing
                ? {
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear",
                  }
                : {}
            }
          >
            <RefreshCw
              size={24}
              className={`${
                isRefreshing ? "text-brand-orange" : "text-brand-blue"
              }`}
              strokeWidth={2.5}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div
        style={{
          y: pullDistance,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default PullToRefresh;
