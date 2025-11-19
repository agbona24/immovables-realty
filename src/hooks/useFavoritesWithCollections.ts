"use client";

import { useState, useEffect } from "react";

export interface PropertyNote {
  propertyId: string;
  note: string;
  lastUpdated: string;
}

export interface Collection {
  id: string;
  name: string;
  description?: string;
  propertyIds: string[];
  color: string;
  icon: string;
  createdAt: string;
}

interface FavoritesData {
  favorites: string[];
  notes: PropertyNote[];
  collections: Collection[];
}

const FAVORITES_KEY = "immovables_favorites_enhanced";

const defaultCollections: Collection[] = [
  {
    id: "all",
    name: "All Favorites",
    description: "All your favorite properties",
    propertyIds: [],
    color: "red",
    icon: "Heart",
    createdAt: new Date().toISOString(),
  },
];

export const useFavoritesWithCollections = () => {
  const [favoritesData, setFavoritesData] = useState<FavoritesData>({
    favorites: [],
    notes: [],
    collections: defaultCollections,
  });
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(FAVORITES_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setFavoritesData({
          favorites: parsed.favorites || [],
          notes: parsed.notes || [],
          collections: parsed.collections || defaultCollections,
        });
      }
    } catch (error) {
      console.error("Error loading favorites:", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save to localStorage whenever data changes
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(favoritesData));
      } catch (error) {
        console.error("Error saving favorites:", error);
      }
    }
  }, [favoritesData, isLoaded]);

  // Favorites operations
  const addFavorite = (propertyId: string) => {
    setFavoritesData((prev) => {
      if (prev.favorites.includes(propertyId)) {
        return prev;
      }
      const newFavorites = [...prev.favorites, propertyId];
      const updatedCollections = prev.collections.map((collection) =>
        collection.id === "all"
          ? { ...collection, propertyIds: newFavorites }
          : collection
      );
      return {
        ...prev,
        favorites: newFavorites,
        collections: updatedCollections,
      };
    });
  };

  const removeFavorite = (propertyId: string) => {
    setFavoritesData((prev) => {
      const newFavorites = prev.favorites.filter((id) => id !== propertyId);
      const updatedCollections = prev.collections.map((collection) => ({
        ...collection,
        propertyIds: collection.propertyIds.filter((id) => id !== propertyId),
      }));
      const updatedNotes = prev.notes.filter(
        (note) => note.propertyId !== propertyId
      );
      return {
        favorites: newFavorites,
        notes: updatedNotes,
        collections: updatedCollections,
      };
    });
  };

  const toggleFavorite = (propertyId: string) => {
    if (favoritesData.favorites.includes(propertyId)) {
      removeFavorite(propertyId);
    } else {
      addFavorite(propertyId);
    }
  };

  const isFavorite = (propertyId: string) => {
    return favoritesData.favorites.includes(propertyId);
  };

  const clearFavorites = () => {
    setFavoritesData({
      favorites: [],
      notes: [],
      collections: defaultCollections,
    });
  };

  // Notes operations
  const addNote = (propertyId: string, note: string) => {
    setFavoritesData((prev) => {
      const existingNoteIndex = prev.notes.findIndex(
        (n) => n.propertyId === propertyId
      );
      let updatedNotes: PropertyNote[];

      if (existingNoteIndex !== -1) {
        // Update existing note
        updatedNotes = [...prev.notes];
        updatedNotes[existingNoteIndex] = {
          propertyId,
          note,
          lastUpdated: new Date().toISOString(),
        };
      } else {
        // Add new note
        updatedNotes = [
          ...prev.notes,
          {
            propertyId,
            note,
            lastUpdated: new Date().toISOString(),
          },
        ];
      }

      return {
        ...prev,
        notes: updatedNotes,
      };
    });
  };

  const getNote = (propertyId: string): PropertyNote | undefined => {
    return favoritesData.notes.find((note) => note.propertyId === propertyId);
  };

  const removeNote = (propertyId: string) => {
    setFavoritesData((prev) => ({
      ...prev,
      notes: prev.notes.filter((note) => note.propertyId !== propertyId),
    }));
  };

  // Collections operations
  const createCollection = (
    name: string,
    description?: string,
    color: string = "blue",
    icon: string = "Folder"
  ) => {
    const newCollection: Collection = {
      id: `collection_${Date.now()}`,
      name,
      description,
      propertyIds: [],
      color,
      icon,
      createdAt: new Date().toISOString(),
    };

    setFavoritesData((prev) => ({
      ...prev,
      collections: [...prev.collections, newCollection],
    }));

    return newCollection.id;
  };

  const deleteCollection = (collectionId: string) => {
    if (collectionId === "all") return; // Can't delete default collection

    setFavoritesData((prev) => ({
      ...prev,
      collections: prev.collections.filter((c) => c.id !== collectionId),
    }));
  };

  const updateCollection = (
    collectionId: string,
    updates: Partial<Collection>
  ) => {
    setFavoritesData((prev) => ({
      ...prev,
      collections: prev.collections.map((c) =>
        c.id === collectionId ? { ...c, ...updates } : c
      ),
    }));
  };

  const addToCollection = (collectionId: string, propertyId: string) => {
    setFavoritesData((prev) => ({
      ...prev,
      collections: prev.collections.map((collection) =>
        collection.id === collectionId
          ? {
              ...collection,
              propertyIds: collection.propertyIds.includes(propertyId)
                ? collection.propertyIds
                : [...collection.propertyIds, propertyId],
            }
          : collection
      ),
    }));
  };

  const removeFromCollection = (collectionId: string, propertyId: string) => {
    if (collectionId === "all") return; // Can't remove from "All Favorites"

    setFavoritesData((prev) => ({
      ...prev,
      collections: prev.collections.map((collection) =>
        collection.id === collectionId
          ? {
              ...collection,
              propertyIds: collection.propertyIds.filter(
                (id) => id !== propertyId
              ),
            }
          : collection
      ),
    }));
  };

  const getCollectionsForProperty = (propertyId: string): Collection[] => {
    return favoritesData.collections.filter((collection) =>
      collection.propertyIds.includes(propertyId)
    );
  };

  return {
    // Favorites
    favorites: favoritesData.favorites,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite,
    clearFavorites,
    favoritesCount: favoritesData.favorites.length,

    // Notes
    notes: favoritesData.notes,
    addNote,
    getNote,
    removeNote,

    // Collections
    collections: favoritesData.collections,
    createCollection,
    deleteCollection,
    updateCollection,
    addToCollection,
    removeFromCollection,
    getCollectionsForProperty,

    // State
    isLoaded,
  };
};
