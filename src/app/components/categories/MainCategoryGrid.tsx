import React from 'react';
import {
  Mountain,
  Ship,
  Church,
  Landmark,
  Trees,
  GraduationCap,
  Briefcase,
  HeartPulse,
  Heart,
  Users,
  Trophy,
  Car,
  Package
} from 'lucide-react';

export interface Category {
  id: string;
  name: string;
  subtitle: string;
  icon: React.ElementType;
  color: string;
  gradient: string;
  isNew?: boolean;
}

export const categories: Category[] = [
  {
    id: 'adventure',
    name: 'Adventure Tourism',
    subtitle: 'Thrilling experiences',
    icon: Mountain,
    color: 'orange',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    id: 'cruise',
    name: 'Cruise & Family Fun',
    subtitle: 'Water adventures',
    icon: Ship,
    color: 'blue',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'devotional',
    name: 'Devotional Tourism',
    subtitle: 'Spiritual journeys',
    icon: Church,
    color: 'yellow',
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    id: 'heritage',
    name: 'Heritage & Cultural',
    subtitle: 'Historical sites',
    icon: Landmark,
    color: 'purple',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 'eco-tourism',
    name: 'Eco Tourism',
    subtitle: 'Nature & wildlife',
    icon: Trees,
    color: 'green',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    id: 'educational',
    name: 'Educational Tourism',
    subtitle: 'Learning trips',
    icon: GraduationCap,
    color: 'indigo',
    gradient: 'from-indigo-500 to-blue-500'
  },
  {
    id: 'corporate-mice',
    name: 'Corporate & MICE',
    subtitle: 'Business events',
    icon: Briefcase,
    color: 'gray',
    gradient: 'from-gray-600 to-gray-800'
  },
  {
    id: 'health-wellness',
    name: 'Health & Wellness',
    subtitle: 'Rejuvenation',
    icon: HeartPulse,
    color: 'teal',
    gradient: 'from-teal-500 to-cyan-500'
  },
  {
    id: 'honeymoon',
    name: 'Honeymoon Tourism',
    subtitle: 'Romantic getaways',
    icon: Heart,
    color: 'pink',
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    id: 'senior-wellness',
    name: 'Senior Wellness Hub',
    subtitle: 'Elder-friendly tours',
    icon: Users,
    color: 'amber',
    gradient: 'from-amber-500 to-orange-500'
  },
  {
    id: 'sports',
    name: 'Sports Tourism',
    subtitle: 'Athletic adventures',
    icon: Trophy,
    color: 'red',
    gradient: 'from-red-500 to-orange-500'
  },
  {
    id: 'self-drive',
    name: 'Self-Drive Tourism',
    subtitle: 'Road trip freedom',
    icon: Car,
    color: 'violet',
    gradient: 'from-violet-500 to-purple-500'
  },
  {
    id: 'travel-essentials',
    name: 'Travel Essentials',
    subtitle: 'Complete concierge',
    icon: Package,
    color: 'blue',
    gradient: 'from-blue-600 to-cyan-600',
    isNew: true
  }
];

interface CategoryCardProps {
  category: Category;
  onClick: () => void;
}

function CategoryCard({ category, onClick }: CategoryCardProps) {
  const IconComponent = category.icon;

  return (
    <button
      onClick={onClick}
      className="relative bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 active:scale-95 w-full text-left group overflow-hidden"
      aria-label={`Explore ${category.name}`}
    >
      {/* Background gradient on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

      {/* New Badge */}
      {category.isNew && (
        <div className="absolute top-4 right-4 px-2 py-1 bg-green-500 text-white text-xs font-bold rounded-full shadow-lg animate-pulse">
          NEW
        </div>
      )}

      {/* Icon Container */}
      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${category.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <IconComponent className="w-8 h-8 text-white" aria-hidden="true" />
      </div>

      {/* Category Name */}
      <h3 className="font-bold text-lg text-gray-900 mb-1">
        {category.name}
      </h3>

      {/* Subtitle */}
      <p className="text-sm text-gray-600">
        {category.subtitle}
      </p>

      {/* Hover Arrow */}
      <div className="absolute bottom-6 right-6 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all">
        →
      </div>
    </button>
  );
}

interface MainCategoryGridProps {
  onCategorySelect: (categoryId: string) => void;
}

export default function MainCategoryGrid({ onCategorySelect }: MainCategoryGridProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-6 pb-24">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Explore Tourism Categories
        </h1>
        <p className="text-gray-600">
          Discover {categories.length} unique travel experiences across India
        </p>
      </header>

      {/* Search Bar */}
      <div className="mb-8">
        <input
          type="search"
          placeholder="Search categories..."
          className="w-full px-6 py-4 rounded-full bg-white shadow-md border border-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          aria-label="Search tourism categories"
        />
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            onClick={() => onCategorySelect(category.id)}
          />
        ))}
      </div>

      {/* Info Banner */}
      <div className="mt-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-3">
          ✨ New: Travel Essentials Category
        </h2>
        <p className="text-white/90 text-base mb-4">
          Our new concierge-style service directory helps you research and plan all the essential services you need for your perfect trip. Save your preferences and get personalized recommendations when booking tours!
        </p>
        <button
          onClick={() => onCategorySelect('travel-essentials')}
          className="px-6 py-3 bg-white text-blue-600 rounded-full font-bold text-sm hover:bg-blue-50 transition-colors"
        >
          Explore Travel Essentials →
        </button>
      </div>
    </div>
  );
}
