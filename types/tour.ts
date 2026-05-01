/**
 * Tour data types and interfaces
 */

export interface Tour {
  id: string;
  title: string;
  description: string;
  location: string;
  price: number;
  currency: string;
  duration: number; // in minutes
  rating: number; // 0-5
  reviews: number;
  image: string;
  category: TourCategory;
  difficulty: 'easy' | 'moderate' | 'hard';
  groupSize: number;
  language: string;
  highlights: string[];
  included: string[];
  meetingPoint: string;
  cancellation: string;
  guide: GuideInfo;
}

export interface GuideInfo {
  name: string;
  experience: number; // years
  avatar?: string;
  languages: string[];
}

export type TourCategory = 'cultural' | 'adventure' | 'food' | 'nature' | 'historical' | 'nightlife';

export interface BookingDetails {
  tourId: string;
  date: Date;
  participants: number;
  totalPrice: number;
  specialRequests?: string;
}

export interface Review {
  id: string;
  tourId: string;
  rating: number;
  comment: string;
  author: string;
  date: Date;
}
