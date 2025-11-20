"use client";

import { useState, useEffect } from "react";

const MAX_RECENT = 10;
const STORAGE_KEY = "recentlyViewed";

export const useRecentlyViewed = () => {
  const [recentlyViewed, setRecentlyViewed] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setRecentlyViewed(JSON.parse(stored));
    }
  }, []);

  const addToRecentlyViewed = (propertyId: string) => {
    setRecentlyViewed((prev) => {
      // Remove if already exists
      const filtered = prev.filter((id) => id !== propertyId);
      // Add to beginning
      const updated = [propertyId, ...filtered].slice(0, MAX_RECENT);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  const clearRecentlyViewed = () => {
    setRecentlyViewed([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  return {
    recentlyViewed,
    addToRecentlyViewed,
    clearRecentlyViewed,
  };
};
