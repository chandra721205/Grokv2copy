/**
 * Custom hook for managing tour data and state
 */

import { useState, useEffect } from 'react';
import { Tour } from '@/types/tour';
import { TourService } from '@/services/tour-service';

export function useTours() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadTours();
  }, []);

  const loadTours = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await TourService.getAllTours();
      setTours(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load tours');
    } finally {
      setLoading(false);
    }
  };

  const searchTours = async (query: string) => {
    try {
      setLoading(true);
      setError(null);
      const data = await TourService.searchTours(query);
      setTours(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Search failed');
    } finally {
      setLoading(false);
    }
  };

  const filterByCategory = async (category: string) => {
    try {
      setLoading(true);
      setError(null);
      const data = await TourService.getToursByCategory(category);
      setTours(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Filter failed');
    } finally {
      setLoading(false);
    }
  };

  const getTopRated = async (limit?: number) => {
    try {
      setLoading(true);
      setError(null);
      const data = await TourService.getTopRatedTours(limit);
      setTours(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load top rated');
    } finally {
      setLoading(false);
    }
  };

  return {
    tours,
    loading,
    error,
    loadTours,
    searchTours,
    filterByCategory,
    getTopRated
  };
}

/**
 * Hook for managing tour favorites (with local storage persistence)
 */
export function useFavoriteTours() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    try {
      // In a real app, this would use AsyncStorage
      const stored = global.localStorage?.getItem('favorite_tours');
      if (stored) {
        setFavorites(JSON.parse(stored));
      }
    } catch (err) {
      console.error('Failed to load favorites:', err);
    }
  };

  const toggleFavorite = (tourId: string) => {
    setFavorites(prev => {
      const updated = prev.includes(tourId)
        ? prev.filter(id => id !== tourId)
        : [...prev, tourId];

      // Persist
      try {
        global.localStorage?.setItem('favorite_tours', JSON.stringify(updated));
      } catch (err) {
        console.error('Failed to save favorites:', err);
      }

      return updated;
    });
  };

  const isFavorite = (tourId: string) => {
    return favorites.includes(tourId);
  };

  const getFavoriteTours = (tours: Tour[]) => {
    return tours.filter(tour => favorites.includes(tour.id));
  };

  return {
    favorites,
    toggleFavorite,
    isFavorite,
    getFavoriteTours,
    count: favorites.length
  };
}

/**
 * Hook for a single tour detail
 */
export function useTourDetail(tourId: string | null) {
  const [tour, setTour] = useState<Tour | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!tourId) return;

    const loadTour = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await TourService.getTourById(tourId);
        if (!data) {
          setError('Tour not found');
        }
        setTour(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load tour');
      } finally {
        setLoading(false);
      }
    };

    loadTour();
  }, [tourId]);

  return { tour, loading, error };
}
