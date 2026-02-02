import React, { useState, ReactNode } from 'react';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { ArrowLeft, Globe, Youtube, Sparkles, MapPin, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { InterestTrackerIcon } from '@/app/components/shared/InterestTracker';

// ========================================
// REUSABLE TOURISM HUB TEMPLATE
// ========================================
// This template provides a consistent structure for all tourism category hubs
// reducing code duplication across Adventure, Devotional, Cruise, etc.

interface SubCategory {
  id: number | string;
  emoji?: string;
  icon?: React.ElementType;
  title: string;
  description: string;
  gradient: string;
  badge?: string;
  [key: string]: any;
}

interface TourismHubTemplateProps {
  // Header Configuration
  title: string;
  subtitle: string;
  headerGradient?: string;
  headerIcon: React.ElementType;
  
  // Content
  subCategories: SubCategory[];
  filters?: React.ReactNode;
  
  // Navigation
  onBack: () => void;
  onSubCategoryClick: (id: number | string) => void;
  
  // Optional Features
  showSearch?: boolean;
  showGoogleYoutube?: boolean;
  headerNote?: string;
  emptyStateMessage?: string;
}

export function TourismHubTemplate({
  title,
  subtitle,
  headerGradient = 'from-blue-600 to-purple-600',
  headerIcon: HeaderIcon,
  subCategories,
  filters,
  onBack,
  onSubCategoryClick,
  showSearch = true,
  showGoogleYoutube = true,
  headerNote,
  emptyStateMessage = 'No categories available',
}: TourismHubTemplateProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleGoogleSearch = () => {
    const query = searchQuery || title;
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
  };

  const handleYouTubeSearch = () => {
    const query = searchQuery || title;
    window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`, '_blank');
  };

  const filteredCategories = subCategories.filter(cat =>
    cat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cat.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-orange-50">
      {/* Header */}
      <div className={`bg-gradient-to-r ${headerGradient} px-6 pt-12 pb-8 rounded-b-[2rem]`}>
        <button
          onClick={onBack}
          className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            <HeaderIcon className="w-9 h-9 text-white" />
          </div>
          <div>
            <h1 className="text-white text-3xl font-bold">{title}</h1>
            <p className="text-white/90 text-sm">{subtitle}</p>
          </div>
        </div>

        {/* Search Bar */}
        {showSearch && (
          <div className="mb-3">
            <input
              type="text"
              placeholder="Search destinations, activities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-12 px-4 rounded-full bg-white border-0 shadow-lg text-sm"
            />
          </div>
        )}

        {/* Google & YouTube Buttons */}
        {showGoogleYoutube && (
          <div className="flex gap-3 mb-3">
            <Button
              onClick={handleGoogleSearch}
              className="flex-1 bg-white text-blue-600 hover:bg-gray-100 rounded-full h-9 flex items-center justify-center gap-2 text-sm"
            >
              <Globe className="w-4 h-4" />
              Google Search
            </Button>
            <Button
              onClick={handleYouTubeSearch}
              className="flex-1 bg-white text-red-600 hover:bg-gray-100 rounded-full h-9 flex items-center justify-center gap-2 text-sm"
            >
              <Youtube className="w-4 h-4" />
              YouTube
            </Button>
          </div>
        )}

        {/* Header Note */}
        {headerNote && (
          <div className="flex items-center gap-2 text-white/70 text-xs">
            <Sparkles className="w-4 h-4" />
            <span>{headerNote}</span>
          </div>
        )}
      </div>

      {/* Filters */}
      {filters && (
        <div className="px-6 -mt-4 mb-6">
          {filters}
        </div>
      )}

      {/* Sub-Categories Grid */}
      <div className="px-6 pb-8">
        {filteredCategories.length === 0 ? (
          <div className="bg-white rounded-3xl p-8 shadow-md text-center">
            <p className="text-gray-500">{emptyStateMessage}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {filteredCategories.map((category, index) => (
              <CategoryCard
                key={category.id}
                category={category}
                index={index}
                onClick={() => onSubCategoryClick(category.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ========================================
// CATEGORY CARD COMPONENT
// ========================================
interface CategoryCardProps {
  category: SubCategory;
  index: number;
  onClick: () => void;
}

function CategoryCard({ category, index, onClick }: CategoryCardProps) {
  const CategoryIcon = category.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      onClick={onClick}
      className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer relative"
    >
      {/* Interest Tracker */}
      <div className="absolute top-4 right-4 z-10">
        <InterestTrackerIcon
          destinationId={`cat-${category.id}`}
          destinationName={category.title}
          category={category.title}
          size="sm"
        />
      </div>

      <div className="flex gap-4 p-5">
        {/* Icon/Emoji */}
        <div className={`w-20 h-20 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center flex-shrink-0`}>
          {category.emoji ? (
            <span className="text-4xl">{category.emoji}</span>
          ) : CategoryIcon ? (
            <CategoryIcon className="w-10 h-10 text-white" />
          ) : (
            <MapPin className="w-10 h-10 text-white" />
          )}
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-bold text-lg">{category.title}</h3>
              {category.tagline && (
                <p className="text-xs text-gray-500 mb-1">{category.tagline}</p>
              )}
            </div>
          </div>
          
          <p className="text-sm text-gray-600 mb-3">{category.description}</p>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-2">
            {category.badge && (
              <Badge variant="secondary" className="text-xs">
                {category.badge}
              </Badge>
            )}
            {category.duration && (
              <Badge variant="outline" className="text-xs">
                {category.duration}
              </Badge>
            )}
            {category.startingPrice && (
              <Badge variant="outline" className="text-xs">
                From ₹{category.startingPrice.toLocaleString()}
              </Badge>
            )}
            {category.familyScore && (
              <Badge variant="outline" className="text-xs flex items-center gap-1">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                {category.familyScore}
              </Badge>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
