/**
 * Tour API Service
 * Handles fetching tour data and managing tour-related operations
 */

import { Tour, BookingDetails } from '@/types/tour';

// Mock tour data
const MOCK_TOURS: Tour[] = [
  {
    id: '1',
    title: 'Ancient City Walking Tour',
    description: 'Explore the historic heart of the city with expert guides',
    location: 'Downtown District',
    price: 49.99,
    currency: 'USD',
    duration: 120,
    rating: 4.8,
    reviews: 342,
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=300&fit=crop',
    category: 'historical',
    difficulty: 'easy',
    groupSize: 15,
    language: 'English',
    highlights: [
      'Ancient monuments',
      'Historic architecture',
      'Local markets',
      'Hidden alleyways'
    ],
    included: [
      'Professional guide',
      'Bottled water',
      'Small group',
      'Photo stops'
    ],
    meetingPoint: 'Town Hall Square at 10 AM',
    cancellation: 'Free cancellation up to 24 hours before',
    guide: {
      name: 'Michael Johnson',
      experience: 12,
      languages: ['English', 'Spanish', 'French']
    }
  },
  {
    id: '2',
    title: 'Culinary Street Food Tour',
    description: 'Taste authentic local cuisine with a food expert',
    location: 'Street Market District',
    price: 59.99,
    currency: 'USD',
    duration: 180,
    rating: 4.9,
    reviews: 289,
    image: 'https://images.unsplash.com/photo-1504674900967-83f3ebbd814f?w=500&h=300&fit=crop',
    category: 'food',
    difficulty: 'easy',
    groupSize: 10,
    language: 'English',
    highlights: [
      'Street food tastings',
      'Local vendors',
      'Secret recipes',
      'Market exploration'
    ],
    included: [
      'All food samples',
      'Beverages',
      'Expert guide',
      'Restaurant recommendations'
    ],
    meetingPoint: 'Central Market Entrance at 2 PM',
    cancellation: 'Free cancellation up to 12 hours before',
    guide: {
      name: 'Sofia Martinez',
      experience: 15,
      languages: ['English', 'Italian', 'Spanish']
    }
  },
  {
    id: '3',
    title: 'Mountain Hiking Adventure',
    description: 'Challenging trek with breathtaking views',
    location: 'Highland Mountains',
    price: 89.99,
    currency: 'USD',
    duration: 480,
    rating: 4.7,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop',
    category: 'adventure',
    difficulty: 'hard',
    groupSize: 8,
    language: 'English',
    highlights: [
      'Mountain peaks',
      'Scenic viewpoints',
      'Alpine wildlife',
      'Sunrise experience'
    ],
    included: [
      'Professional guide',
      'Hiking poles',
      'Packed lunch',
      'First aid kit',
      'Transportation'
    ],
    meetingPoint: 'Mountain Base Lodge at 6 AM',
    cancellation: 'Free cancellation up to 48 hours before',
    guide: {
      name: 'James Thompson',
      experience: 20,
      languages: ['English', 'German']
    }
  },
  {
    id: '4',
    title: 'City Nightlife Experience',
    description: 'Visit the hottest clubs and bars in the city',
    location: 'Entertainment District',
    price: 79.99,
    currency: 'USD',
    duration: 240,
    rating: 4.5,
    reviews: 213,
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=300&fit=crop',
    category: 'nightlife',
    difficulty: 'easy',
    groupSize: 12,
    language: 'English',
    highlights: [
      'Exclusive clubs',
      'Local bars',
      'Live music venues',
      'VIP access'
    ],
    included: [
      'Guest list entries',
      'Welcome drink',
      'Expert host',
      'Late-night snacks'
    ],
    meetingPoint: 'Main Street Bar at 9 PM',
    cancellation: 'Free cancellation up to 6 hours before',
    guide: {
      name: 'Alex Rivera',
      experience: 8,
      languages: ['English', 'Portuguese']
    }
  },
  {
    id: '5',
    title: 'Nature & Wildlife Safari',
    description: 'Spot exotic animals in their natural habitat',
    location: 'Savanna National Park',
    price: 129.99,
    currency: 'USD',
    duration: 360,
    rating: 4.9,
    reviews: 421,
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=500&h=300&fit=crop',
    category: 'nature',
    difficulty: 'moderate',
    groupSize: 6,
    language: 'English',
    highlights: [
      'Big Five animals',
      'Scenic landscapes',
      'Bird watching',
      'Photography opportunities'
    ],
    included: [
      '4WD vehicle',
      'Expert naturalist',
      'Lunch & beverages',
      'Binoculars',
      'Park entry fee'
    ],
    meetingPoint: 'Safari Lodge at 7 AM',
    cancellation: 'Free cancellation up to 72 hours before',
    guide: {
      name: 'David Nakamura',
      experience: 18,
      languages: ['English', 'Japanese']
    }
  },
  {
    id: '6',
    title: 'Cultural Museum Deep Dive',
    description: 'In-depth exploration of art and cultural heritage',
    location: 'Art District',
    price: 39.99,
    currency: 'USD',
    duration: 150,
    rating: 4.6,
    reviews: 178,
    image: 'https://images.unsplash.com/photo-1579555617313-1b19a16e05f3?w=500&h=300&fit=crop',
    category: 'cultural',
    difficulty: 'easy',
    groupSize: 20,
    language: 'English',
    highlights: [
      'Master artworks',
      'Ancient artifacts',
      'Interactive exhibits',
      'Artist stories'
    ],
    included: [
      'Museum entry',
      'Audio guide',
      'Expert curator',
      'Refreshments',
      'Catalog booklet'
    ],
    meetingPoint: 'Museum Main Entrance at 11 AM',
    cancellation: 'Free cancellation up to 24 hours before',
    guide: {
      name: 'Isabella Chen',
      experience: 14,
      languages: ['English', 'Mandarin', 'French']
    }
  }
];

export class TourService {
  /**
   * Fetch all tours
   */
  static async getAllTours(): Promise<Tour[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return MOCK_TOURS;
  }

  /**
   * Fetch tours by category
   */
  static async getToursByCategory(category: string): Promise<Tour[]> {
    await new Promise(resolve => setTimeout(resolve, 300));
    return MOCK_TOURS.filter(tour => tour.category === category);
  }

  /**
   * Fetch a single tour by ID
   */
  static async getTourById(id: string): Promise<Tour | null> {
    await new Promise(resolve => setTimeout(resolve, 200));
    return MOCK_TOURS.find(tour => tour.id === id) || null;
  }

  /**
   * Search tours by title or location
   */
  static async searchTours(query: string): Promise<Tour[]> {
    await new Promise(resolve => setTimeout(resolve, 300));
    const lowerQuery = query.toLowerCase();
    return MOCK_TOURS.filter(tour =>
      tour.title.toLowerCase().includes(lowerQuery) ||
      tour.location.toLowerCase().includes(lowerQuery) ||
      tour.description.toLowerCase().includes(lowerQuery)
    );
  }

  /**
   * Get tours sorted by rating
   */
  static async getTopRatedTours(limit: number = 5): Promise<Tour[]> {
    await new Promise(resolve => setTimeout(resolve, 300));
    return [...MOCK_TOURS].sort((a, b) => b.rating - a.rating).slice(0, limit);
  }

  /**
   * Book a tour (mock implementation)
   */
  static async bookTour(booking: BookingDetails): Promise<{ success: boolean; bookingId: string }> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
      success: true,
      bookingId: `BOOK-${Date.now()}`
    };
  }

  /**
   * Get filter options
   */
  static getFilterOptions() {
    return {
      categories: ['cultural', 'adventure', 'food', 'nature', 'historical', 'nightlife'] as const,
      difficulties: ['easy', 'moderate', 'hard'] as const,
      priceRanges: [
        { label: 'Budget', min: 0, max: 50 },
        { label: 'Standard', min: 50, max: 100 },
        { label: 'Premium', min: 100, max: 200 },
        { label: 'Luxury', min: 200, max: Infinity }
      ]
    };
  }
}
