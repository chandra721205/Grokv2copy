import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';

/**
 * USER PREFERENCES CONTEXT - Production Ready
 * 
 * Manages user preferences for transport, vehicles, and bookings
 * with LocalStorage persistence and backend sync capability
 */

export type TransportMode = 'self-drive' | 'chauffeur' | 'public' | 'mixed';
export type VehicleCategory = 'suv' | 'sedan' | 'hatchback' | 'luxury' | 'bike' | 'electric';
export type Transmission = 'auto' | 'manual' | 'both';
export type FuelType = 'petrol' | 'diesel' | 'electric' | 'hybrid' | 'any';

export interface TransportPreferences {
  preferredMode: TransportMode | null;
  vehicleCategory: VehicleCategory | null;
  transmission: Transmission;
  fuelType: FuelType;
  budget: {
    min: number;
    max: number;
  };
  seatsRequired: number;
}

export interface SavedLocation {
  id: string;
  name: string;
  address: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface PastBooking {
  id: string;
  vehicleId: string;
  vehicleName: string;
  startDate: Date;
  endDate: Date;
  location: string;
  totalAmount: number;
  status: 'completed' | 'cancelled' | 'upcoming';
}

export interface UserPreferences {
  transport: TransportPreferences;
  savedLocations: SavedLocation[];
  frequentRoutes: Array<{
    from: string;
    to: string;
    count: number;
  }>;
  pastBookings: PastBooking[];
  notifications: {
    email: boolean;
    sms: boolean;
    push: boolean;
  };
  language: 'en' | 'hi' | 'mr';
}

const DEFAULT_PREFERENCES: UserPreferences = {
  transport: {
    preferredMode: null,
    vehicleCategory: null,
    transmission: 'both',
    fuelType: 'any',
    budget: {
      min: 500,
      max: 5000
    },
    seatsRequired: 5
  },
  savedLocations: [],
  frequentRoutes: [],
  pastBookings: [],
  notifications: {
    email: true,
    sms: true,
    push: true
  },
  language: 'en'
};

interface UserPreferencesContextType {
  preferences: UserPreferences;
  updateTransportPreferences: (prefs: Partial<TransportPreferences>) => void;
  addSavedLocation: (location: SavedLocation) => void;
  removeSavedLocation: (id: string) => void;
  addPastBooking: (booking: PastBooking) => void;
  updateNotifications: (notifications: Partial<UserPreferences['notifications']>) => void;
  setLanguage: (language: 'en' | 'hi' | 'mr') => void;
  clearPreferences: () => void;
  syncWithBackend: () => Promise<void>;
}

const UserPreferencesContext = createContext<UserPreferencesContextType | undefined>(undefined);

interface UserPreferencesProviderProps {
  children: ReactNode;
  userId?: string;
}

export function UserPreferencesProvider({ children, userId }: UserPreferencesProviderProps) {
  const [preferences, setPreferences] = useState<UserPreferences>(() => {
    // Load from localStorage
    const saved = localStorage.getItem('userPreferences');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse saved preferences:', e);
        return DEFAULT_PREFERENCES;
      }
    }
    return DEFAULT_PREFERENCES;
  });

  // Save to localStorage whenever preferences change
  useEffect(() => {
    localStorage.setItem('userPreferences', JSON.stringify(preferences));
  }, [preferences]);

  const syncWithBackend = useCallback(async () => {
    if (!userId) return;

    try {
      // Backend sync disabled - using local storage only
      // Uncomment when backend API is available:
      
      // Fetch from backend
      // const response = await fetch(`/api/users/${userId}/preferences`);
      // if (response.ok) {
      //   const backendPrefs = await response.json();
      //   setPreferences(backendPrefs);
      // }

      // Push local changes to backend
      // await fetch(`/api/users/${userId}/preferences`, {
      //   method: 'PUT',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(preferences)
      // });
      
      console.log('Backend sync disabled - using local storage');
    } catch (error) {
      console.error('Failed to sync preferences:', error);
    }
  }, [userId]); // Only recreate when userId changes

  // Sync with backend when userId changes
  useEffect(() => {
    if (userId) {
      syncWithBackend();
    }
  }, [userId, syncWithBackend]);

  const updateTransportPreferences = (prefs: Partial<TransportPreferences>) => {
    setPreferences(prev => ({
      ...prev,
      transport: {
        ...prev.transport,
        ...prefs
      }
    }));
  };

  const addSavedLocation = (location: SavedLocation) => {
    setPreferences(prev => ({
      ...prev,
      savedLocations: [...prev.savedLocations, location]
    }));
  };

  const removeSavedLocation = (id: string) => {
    setPreferences(prev => ({
      ...prev,
      savedLocations: prev.savedLocations.filter(loc => loc.id !== id)
    }));
  };

  const addPastBooking = (booking: PastBooking) => {
    setPreferences(prev => ({
      ...prev,
      pastBookings: [booking, ...prev.pastBookings].slice(0, 20) // Keep last 20 bookings
    }));
  };

  const updateNotifications = (notifications: Partial<UserPreferences['notifications']>) => {
    setPreferences(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        ...notifications
      }
    }));
  };

  const setLanguage = (language: 'en' | 'hi' | 'mr') => {
    setPreferences(prev => ({
      ...prev,
      language
    }));
  };

  const clearPreferences = () => {
    setPreferences(DEFAULT_PREFERENCES);
    localStorage.removeItem('userPreferences');
  };

  const value = {
    preferences,
    updateTransportPreferences,
    addSavedLocation,
    removeSavedLocation,
    addPastBooking,
    updateNotifications,
    setLanguage,
    clearPreferences,
    syncWithBackend
  };

  return (
    <UserPreferencesContext.Provider value={value}>
      {children}
    </UserPreferencesContext.Provider>
  );
}

export function useUserPreferences() {
  const context = useContext(UserPreferencesContext);
  if (context === undefined) {
    throw new Error('useUserPreferences must be used within UserPreferencesProvider');
  }
  return context;
}

// Utility hook to get transport preference with smart defaults
export function useTransportDefaults() {
  const { preferences } = useUserPreferences();
  
  return {
    mode: preferences.transport.preferredMode || 'self-drive',
    category: preferences.transport.vehicleCategory || 'sedan',
    transmission: preferences.transport.transmission,
    fuelType: preferences.transport.fuelType,
    budgetRange: preferences.transport.budget,
    seats: preferences.transport.seatsRequired
  };
}

// Utility hook for location autocomplete
export function useSavedLocations() {
  const { preferences, addSavedLocation, removeSavedLocation } = useUserPreferences();
  
  return {
    locations: preferences.savedLocations,
    addLocation: addSavedLocation,
    removeLocation: removeSavedLocation,
    hasLocation: (name: string) => preferences.savedLocations.some(loc => loc.name === name)
  };
}