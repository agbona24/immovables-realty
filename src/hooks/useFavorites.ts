"use client";

import { useState, useEffect } from "react";

const FAVORITES_KEY = "immovables_favorites";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load favorites from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(FAVORITES_KEY);
      if (stored) {
        setFavorites(JSON.parse(stored));
      }
    } catch (error) {
      console.error("Error loading favorites:", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
      } catch (error) {
        console.error("Error saving favorites:", error);
      }
    }
  }, [favorites, isLoaded]);

  const addFavorite = (propertyId: string) => {
    setFavorites((prev) => {
      if (prev.includes(propertyId)) {
        return prev;
      }
      return [...prev, propertyId];
    });
  };

  const removeFavorite = (propertyId: string) => {
    setFavorites((prev) => prev.filter((id) => id !== propertyId));
  };

  const toggleFavorite = (propertyId: string) => {
    if (favorites.includes(propertyId)) {
      removeFavorite(propertyId);
    } else {
      addFavorite(propertyId);
    }
  };

  const isFavorite = (propertyId: string) => {
    return favorites.includes(propertyId);
  };

  const clearFavorites = () => {
    setFavorites([]);
  };

  return {
    favorites,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite,
    clearFavorites,
    favoritesCount: favorites.length,
    isLoaded,
  };
};
