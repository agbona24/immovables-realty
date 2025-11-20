"use client";

import { useState, useEffect } from "react";

const COMPARISON_KEY = "immovables_comparison";
const MAX_COMPARISON = 3;

export const useComparison = () => {
  const [comparison, setComparison] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load comparison from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(COMPARISON_KEY);
      if (stored) {
        setComparison(JSON.parse(stored));
      }
    } catch (error) {
      console.error("Error loading comparison:", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save comparison to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(COMPARISON_KEY, JSON.stringify(comparison));
      } catch (error) {
        console.error("Error saving comparison:", error);
      }
    }
  }, [comparison, isLoaded]);

  const addToComparison = (propertyId: string) => {
    setComparison((prev) => {
      if (prev.includes(propertyId)) {
        return prev;
      }
      if (prev.length >= MAX_COMPARISON) {
        // Replace the oldest item
        return [...prev.slice(1), propertyId];
      }
      return [...prev, propertyId];
    });
  };

  const removeFromComparison = (propertyId: string) => {
    setComparison((prev) => prev.filter((id) => id !== propertyId));
  };

  const toggleComparison = (propertyId: string) => {
    if (comparison.includes(propertyId)) {
      removeFromComparison(propertyId);
    } else {
      addToComparison(propertyId);
    }
  };

  const isInComparison = (propertyId: string) => {
    return comparison.includes(propertyId);
  };

  const clearComparison = () => {
    setComparison([]);
  };

  const canAddMore = comparison.length < MAX_COMPARISON;

  return {
    comparison,
    addToComparison,
    removeFromComparison,
    toggleComparison,
    isInComparison,
    clearComparison,
    comparisonCount: comparison.length,
    canAddMore,
    maxReached: comparison.length >= MAX_COMPARISON,
    isLoaded,
  };
};
