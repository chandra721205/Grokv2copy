import { LucideIcon } from 'lucide-react';

export interface UserData {
  name?: string;
  email?: string;
  phone?: string;
  language?: string;
  interests?: string[]; // Track user interests for notifications
  savedPackages?: string[]; // Track saved honeymoon packages
}

export interface CategoryType {
  id: string;
  icon: LucideIcon;
  name: string;
  gradient: string;
}

export interface DestinationType {
  name: string;
  type: string;
  rating: number;
  image: string;
}

export interface HoneymoonInterest {
  packageId: string;
  packageName: string;
  notifyOnDeals: boolean;
  priceAlert?: number;
  dateAdded: string;
}

// Eco-Tourism Types
export interface EcoBudgetPreferencesData {
  budgetRange: string;
  travelDates: string;
  tripDuration: string;
  dealAlert: boolean;
  notificationChannel: string;
  stayStyle: string[];
  pace: string;
  privacy: string;
  diet: string[];
  specialRequests: string;
  accessibility: boolean;
  medicalSupport: boolean;
  seniorFriendly: boolean;
}