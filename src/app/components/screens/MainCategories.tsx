/**
 * Main Categories Screen
 * 
 * Shows all tourism categories including the newly integrated Travel Essentials.
 * This is the main entry point of the app.
 */

import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

// ============================================================================
// DATA - All Tourism Categories
// ============================================================================

const tourismCategories = [
  {
    id: 'adventure',
    name: 'Adventure Tourism',
    icon: '🏔️',
    description: 'Thrilling outdoor activities',
    color: 'from-orange-500 to-red-600'
  },
  {
    id: 'cruise',
    name: 'Cruise & Backwaters',
    icon: '🚢',
    description: 'Water-based experiences',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    id: 'devotional',
    name: 'Devotional Tourism',
    icon: '🙏',
    description: 'Spiritual journeys',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    id: 'heritage',
    name: 'Heritage & Cultural',
    icon: '🏛️',
    description: 'Historical sites & culture',
    color: 'from-purple-500 to-pink-600'
  },
  {
    id: 'eco',
    name: 'Eco Tourism',
    icon: '🌿',
    description: 'Nature & sustainability',
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 'educational',
    name: 'Educational Tourism',
    icon: '🎓',
    description: 'Learning experiences',
    color: 'from-indigo-500 to-blue-600'
  },
  {
    id: 'corporate',
    name: 'Corporate & MICE',
    icon: '💼',
    description: 'Business events & meetings',
    color: 'from-gray-600 to-gray-800'
  },
  {
    id: 'health',
    name: 'Health & Wellness',
    icon: '🧘',
    description: 'Rejuvenation & healing',
    color: 'from-teal-500 to-green-600'
  },
  {
    id: 'honeymoon',
    name: 'Honeymoon Tourism',
    icon: '💑',
    description: 'Romantic getaways',
    color: 'from-pink-500 to-rose-600'
  },
  {
    id: 'senior',
    name: 'Senior Wellness Hub',
    icon: '👵',
    description: 'Comfort for aging travelers',
    color: 'from-amber-500 to-orange-600'
  },
  {
    id: 'sports',
    name: 'Sports Tourism',
    icon: '⚽',
    description: 'Athletic events & activities',
    color: 'from-red-500 to-orange-600'
  },
  {
    id: 'self-drive',
    name: 'Self-Drive Tourism',
    icon: '🚗',
    description: 'Road trips & car tours',
    color: 'from-blue-600 to-indigo-700'
  },
  // NEW: Travel Essentials - Integrated!
  {
    id: 'travel-essentials',
    name: 'Travel Essentials',
    icon: '🏨',
    description: 'Complete concierge services',
    color: 'from-blue-600 to-cyan-600',
    isNew: true
  }
];

// ============================================================================
// COMPONENTS
// ============================================================================

interface CategoryCardProps {
  category: typeof tourismCategories[0];
  onClick: () => void;
}

function CategoryCard({ category, onClick }: CategoryCardProps) {
  return (
    <button
      onClick={onClick}
      className="relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-left group active:scale-98 overflow-hidden"
      aria-label={`${category.name} - ${category.description}`}
    >
      {/* Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10 group-hover:opacity-15 transition-opacity`} />

      {/* New Badge */}
      {category.isNew && (
        <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
          NEW
        </div>
      )}

      {/* Content */}
      <div className="relative">
        {/* Icon */}
        <div className="text-5xl mb-4 group-hover:scale-110 transition-transform" aria-hidden="true">
          {category.icon}
        </div>

        {/* Title */}
        <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
          {category.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4">
          {category.description}
        </p>

        {/* Explore Link */}
        <div className="flex items-center gap-1 text-blue-600 group-hover:gap-2 transition-all">
          <span className="text-sm font-semibold">Explore</span>
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>
    </button>
  );
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function MainCategories() {
  const navigate = useNavigate();

  const handleCategoryClick = (category: typeof tourismCategories[0]) => {
    if (category.id === 'travel-essentials') {
      navigate('/travel-essentials');
    } else {
      // Navigate to other category pages (to be implemented)
      navigate(`/category/${category.id}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-cyan-50 pb-20">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-cyan-600 px-6 pt-16 pb-12 rounded-b-[32px] shadow-xl">
        <div className="max-w-7xl mx-auto">
          {/* Logo/Brand */}
          <div className="text-center mb-8">
            <div className="text-6xl mb-4 animate-bounce-slow" aria-hidden="true">
              🌍
            </div>
            <h1 className="text-white text-5xl font-bold mb-3 tracking-tight">
              GrokYatra
            </h1>
            <p className="text-white/90 text-lg">
              Discover Your Perfect Journey
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="search"
              placeholder="Search destinations, activities, tours..."
              className="w-full h-14 pl-12 pr-4 rounded-full bg-white border-0 shadow-lg text-base focus:ring-2 focus:ring-white/50 focus:outline-none"
              aria-label="Search tours and destinations"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 -mt-6 max-w-7xl mx-auto">
        {/* Categories Section */}
        <section aria-labelledby="categories-heading" className="mb-12">
          {/* Section Header */}
          <div className="bg-white rounded-3xl shadow-lg p-6 mb-6">
            <h2 id="categories-heading" className="text-3xl font-bold text-gray-900 mb-2">
              Explore Tourism Categories
            </h2>
            <p className="text-gray-600">
              Choose from {tourismCategories.length} unique tourism experiences
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tourismCategories.map(category => (
              <CategoryCard
                key={category.id}
                category={category}
                onClick={() => handleCategoryClick(category)}
              />
            ))}
          </div>
        </section>

        {/* Featured Banner */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 shadow-xl text-white mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-5xl" aria-hidden="true">✨</span>
              <h3 className="text-2xl font-bold">New: Travel Essentials</h3>
            </div>
            <p className="text-white/90 text-lg mb-6">
              Plan every detail of your journey with our comprehensive concierge services. 
              From accommodation to digital tools, we've got you covered!
            </p>
            <button
              onClick={() => navigate('/travel-essentials')}
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all active:scale-95"
            >
              Explore Travel Essentials →
            </button>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 h-16 flex items-center justify-around shadow-lg z-50" aria-label="Primary navigation">
        <button className="flex flex-col items-center gap-1 px-4 py-2 text-blue-600 font-semibold" aria-current="page">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span className="text-xs">Home</span>
        </button>
        
        <button className="flex flex-col items-center gap-1 px-4 py-2 text-gray-400 hover:text-blue-600 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="text-xs">Explore</span>
        </button>
        
        <button className="flex flex-col items-center gap-1 px-4 py-2 text-gray-400 hover:text-blue-600 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          <span className="text-xs">Trip</span>
        </button>
        
        <button className="flex flex-col items-center gap-1 px-4 py-2 text-gray-400 hover:text-blue-600 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span className="text-xs">Message</span>
        </button>
        
        <button className="flex flex-col items-center gap-1 px-4 py-2 text-gray-400 hover:text-blue-600 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span className="text-xs">Profile</span>
        </button>
      </nav>
    </div>
  );
}
