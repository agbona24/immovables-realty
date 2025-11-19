"use client";

import React, { useState, useEffect } from "react";
import { Eye, Heart, TrendingUp, Users, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface LivePropertyStatsProps {
  propertyId: string;
  showRecentActivity?: boolean;
}

export default function LivePropertyStats({
  propertyId,
  showRecentActivity = true,
}: LivePropertyStatsProps) {
  // Simulate live viewer count
  const [viewerCount, setViewerCount] = useState(0);
  const [totalViews, setTotalViews] = useState(0);
  const [favoritesCount, setFavoritesCount] = useState(0);
  const [recentActivities, setRecentActivities] = useState<string[]>([]);

  useEffect(() => {
    // Generate initial random stats
    const baseViewers = Math.floor(Math.random() * 30) + 5;
    const baseTotalViews = Math.floor(Math.random() * 500) + 100;
    const baseFavorites = Math.floor(Math.random() * 50) + 10;

    setViewerCount(baseViewers);
    setTotalViews(baseTotalViews);
    setFavoritesCount(baseFavorites);

    // Simulate real-time viewer fluctuation
    const viewerInterval = setInterval(() => {
      setViewerCount((prev) => {
        const change = Math.floor(Math.random() * 7) - 3; // -3 to +3
        const newCount = Math.max(1, prev + change);
        return newCount;
      });
    }, 5000); // Update every 5 seconds

    // Simulate total views increment
    const viewsInterval = setInterval(() => {
      setTotalViews((prev) => prev + Math.floor(Math.random() * 3));
    }, 15000); // Update every 15 seconds

    // Generate recent activities
    const activities = [
      "Someone viewed this property from Lagos",
      "Property added to wishlist",
      "Someone scheduled an inspection",
      "Property compared with 2 others",
      "Virtual tour started",
      "Contact form submitted",
    ];

    const activityInterval = setInterval(() => {
      const randomActivity = activities[Math.floor(Math.random() * activities.length)];
      const timestamp = new Date().toLocaleTimeString();
      setRecentActivities((prev) => {
        const newActivities = [`${randomActivity} - ${timestamp}`, ...prev];
        return newActivities.slice(0, 5); // Keep only last 5
      });
    }, 20000); // New activity every 20 seconds

    return () => {
      clearInterval(viewerInterval);
      clearInterval(viewsInterval);
      clearInterval(activityInterval);
    };
  }, [propertyId]);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-6 border-2 border-blue-100">
      <div className="flex items-center gap-2 mb-6">
        <div className="bg-green-500 w-3 h-3 rounded-full animate-pulse"></div>
        <h3 className="text-lg font-montserrat font-bold text-gray-800">
          Live Property Activity
        </h3>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {/* Current Viewers */}
        <motion.div
          className="bg-white rounded-xl p-4 shadow-md"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex items-center gap-2 mb-2">
            <Eye className="w-5 h-5 text-red-500" />
            <span className="text-xs text-gray-600">Live Viewers</span>
          </div>
          <motion.div
            className="text-2xl font-montserrat font-bold text-red-500"
            key={viewerCount}
            initial={{ scale: 1.2, color: "#ef4444" }}
            animate={{ scale: 1, color: "#ef4444" }}
            transition={{ duration: 0.3 }}
          >
            {viewerCount}
          </motion.div>
          <span className="text-xs text-gray-500">viewing now</span>
        </motion.div>

        {/* Total Views */}
        <div className="bg-white rounded-xl p-4 shadow-md">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-blue-500" />
            <span className="text-xs text-gray-600">Total Views</span>
          </div>
          <div className="text-2xl font-montserrat font-bold text-blue-500">
            {totalViews}
          </div>
          <span className="text-xs text-gray-500">all time</span>
        </div>

        {/* Favorites */}
        <div className="bg-white rounded-xl p-4 shadow-md">
          <div className="flex items-center gap-2 mb-2">
            <Heart className="w-5 h-5 text-pink-500" />
            <span className="text-xs text-gray-600">Favorites</span>
          </div>
          <div className="text-2xl font-montserrat font-bold text-pink-500">
            {favoritesCount}
          </div>
          <span className="text-xs text-gray-500">users saved</span>
        </div>
      </div>

      {/* Recent Activity Feed */}
      {showRecentActivity && recentActivities.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Clock className="w-4 h-4 text-gray-600" />
            <h4 className="text-sm font-semibold text-gray-700">Recent Activity</h4>
          </div>
          <div className="space-y-2 max-h-32 overflow-y-auto">
            <AnimatePresence mode="popLayout">
              {recentActivities.map((activity, index) => (
                <motion.div
                  key={`${activity}-${index}`}
                  initial={{ opacity: 0, x: -20, height: 0 }}
                  animate={{ opacity: 1, x: 0, height: "auto" }}
                  exit={{ opacity: 0, x: 20, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/70 rounded-lg px-3 py-2 text-xs text-gray-600 flex items-start gap-2"
                >
                  <Users className="w-3 h-3 mt-0.5 flex-shrink-0 text-brand-blue" />
                  <span>{activity}</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      )}

      {/* Trending Badge */}
      {viewerCount > 15 && (
        <motion.div
          className="mt-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg text-center font-semibold text-sm flex items-center justify-center gap-2"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <TrendingUp className="w-4 h-4" />
          Trending Property - High Interest!
        </motion.div>
      )}
    </div>
  );
}
