"use client";

import { useState, useEffect } from "react";

export interface SearchCriteria {
  searchQuery: string;
  selectedType: string;
  selectedStatus: string;
  priceRange: string;
  selectedBedrooms: string;
}

export interface SavedSearch {
  id: string;
  name: string;
  description?: string;
  criteria: SearchCriteria;
  createdAt: string;
  lastUsed?: string;
}

const SAVED_SEARCHES_KEY = "immovables_saved_searches";
const MAX_SAVED_SEARCHES = 20;

export const useSavedSearches = () => {
  const [savedSearches, setSavedSearches] = useState<SavedSearch[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load saved searches from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(SAVED_SEARCHES_KEY);
      if (stored) {
        setSavedSearches(JSON.parse(stored));
      }
    } catch (error) {
      console.error("Error loading saved searches:", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save to localStorage whenever saved searches change
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(SAVED_SEARCHES_KEY, JSON.stringify(savedSearches));
      } catch (error) {
        console.error("Error saving searches:", error);
      }
    }
  }, [savedSearches, isLoaded]);

  const saveSearch = (
    name: string,
    criteria: SearchCriteria,
    description?: string
  ): string | null => {
    if (savedSearches.length >= MAX_SAVED_SEARCHES) {
      return null; // Max limit reached
    }

    const newSearch: SavedSearch = {
      id: `search_${Date.now()}`,
      name,
      description,
      criteria,
      createdAt: new Date().toISOString(),
    };

    setSavedSearches((prev) => [newSearch, ...prev]);
    return newSearch.id;
  };

  const updateSearch = (
    searchId: string,
    updates: Partial<Omit<SavedSearch, "id" | "createdAt">>
  ) => {
    setSavedSearches((prev) =>
      prev.map((search) =>
        search.id === searchId ? { ...search, ...updates } : search
      )
    );
  };

  const deleteSearch = (searchId: string) => {
    setSavedSearches((prev) => prev.filter((search) => search.id !== searchId));
  };

  const getSearch = (searchId: string): SavedSearch | undefined => {
    return savedSearches.find((search) => search.id === searchId);
  };

  const markAsUsed = (searchId: string) => {
    setSavedSearches((prev) =>
      prev.map((search) =>
        search.id === searchId
          ? { ...search, lastUsed: new Date().toISOString() }
          : search
      )
    );
  };

  const clearAllSearches = () => {
    setSavedSearches([]);
  };

  const hasActiveFilters = (criteria: SearchCriteria): boolean => {
    return (
      criteria.searchQuery !== "" ||
      criteria.selectedType !== "All" ||
      criteria.selectedStatus !== "All" ||
      criteria.priceRange !== "All" ||
      criteria.selectedBedrooms !== "All"
    );
  };

  const isDuplicateSearch = (criteria: SearchCriteria): boolean => {
    return savedSearches.some(
      (search) =>
        JSON.stringify(search.criteria) === JSON.stringify(criteria)
    );
  };

  return {
    savedSearches,
    saveSearch,
    updateSearch,
    deleteSearch,
    getSearch,
    markAsUsed,
    clearAllSearches,
    hasActiveFilters,
    isDuplicateSearch,
    searchCount: savedSearches.length,
    canSaveMore: savedSearches.length < MAX_SAVED_SEARCHES,
    isLoaded,
  };
};
