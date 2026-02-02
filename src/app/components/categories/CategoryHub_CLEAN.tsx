import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Search, Star, MapPin, Calendar, Globe, Youtube, Sparkles } from 'lucide-react';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { CategoryType } from '@/types/index';
import { PersonalizedDealsAlert } from '@/app/components/shared/PersonalizedDealsAlert';

interface CategoryHubProps {
  category: CategoryType;
  onBack: () => void;
}

// 🎯 STREAMLINED VERSION - Removed all bloat and demo content
export function CategoryHub({ category, onBack }: CategoryHubProps) {
  const [searchQuery, setSearchQuery] = useState('');

  // Admin-managed tour templates (3 generic templates)
  const tours = [
    {
      name: `${category.name} Experience 1`,
      description: 'Admin-curated package based on category',
      price: '₹15,000',
      duration: '3N/4D',
      rating: 4.8,
      reviews: 234,
      tags: ['Popular', 'Recommended'],
    },
    {
      name: `${category.name} Package A`,
      description: 'Premium experience for this category',
      price: '₹22,000',
      duration: '5N/6D',
      rating: 4.9,
      reviews: 456,
      tags: ['Luxury', 'Best Seller'],
    },
    {
      name: `${category.name} Tour Option`,
      description: 'Standard package offering',
      price: '₹18,500',
      duration: '4N/5D',
      rating: 4.7,
      reviews: 189,
      tags: ['Value', 'Group Friendly'],
    },
  ];

  const handleGoogleSearch = () => {
    const query = searchQuery || `${category.name} tourism destinations india`;
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
  };

  const handleYouTubeSearch = () => {
    const query = searchQuery || `${category.name} travel destinations india`;
    window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-6">
      {/* Header */}
      <div className={`bg-gradient-to-r ${category.gradient} px-6 pt-12 pb-8 rounded-b-[2rem]`}>
        <button
          onClick={onBack}
          className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6 active:scale-95 transition-transform"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            <category.icon className="w-9 h-9 text-white" />
          </div>
          <div>
            <h1 className="text-white text-3xl font-bold">{category.name}</h1>
            <p className="text-white/80 text-sm">Discover amazing experiences</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-3">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Search activities, themes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 pr-4 h-12 rounded-full bg-white border-0 shadow-lg"
          />
        </div>

        {/* Google & YouTube Buttons */}
        <div className="flex gap-3">
          <Button
            onClick={handleGoogleSearch}
            className="flex-1 bg-white text-blue-600 hover:bg-gray-100 rounded-full h-9 flex items-center justify-center gap-2 text-sm"
          >
            <Globe className="w-4 h-4" />
            Google
          </Button>
          <Button
            onClick={handleYouTubeSearch}
            className="flex-1 bg-white text-red-600 hover:bg-gray-100 rounded-full h-9 flex items-center justify-center gap-2 text-sm"
          >
            <Youtube className="w-4 h-4" />
            YouTube
          </Button>
        </div>
      </div>

      <div className="px-6">
        {/* Personalized Deals Alert */}
        <div className="-mt-6 mb-6">
          <PersonalizedDealsAlert
            category={category.id}
            showAdminIndicators={false}
            onSavePreferences={(data) => {
              console.log(`${category.name} deal preferences saved:`, data);
            }}
            content={{
              heading: `Get ${category.name} Deal Alerts`,
              description: `Set your budget for ${category.name} packages`,
              budgetPlaceholder: 'e.g., ₹50,000 for 5 nights',
              notificationText: `Notify me of ${category.name} deals`,
              buttonLabel: `Save Preferences`,
            }}
          />
        </div>

        {/* Admin Notice */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-4 mb-6">
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-1">Admin-Managed Content</p>
              <p className="text-xs text-gray-600">
                Tours shown below are placeholder templates. Use Google Search or YouTube Browse to discover actual destinations.
              </p>
            </div>
          </div>
        </div>

        {/* Featured Tours */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Tour Templates</h2>
          </div>
          <div className="space-y-4">
            {tours.map((tour, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all"
              >
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-20 h-20 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                      <MapPin className="w-10 h-10 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-1">{tour.name}</h3>
                      <p className="text-gray-600 text-sm mb-2">{tour.description}</p>
                      <div className="flex items-center gap-2 mb-2">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="font-semibold text-sm">{tour.rating}</span>
                        <span className="text-gray-500 text-xs">({tour.reviews} reviews)</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {tour.tags.map((tag, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-semibold">{tour.duration}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Starting from</p>
                      <p className={`font-bold text-xl bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                        {tour.price}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      onClick={handleGoogleSearch}
                      className="flex-1 rounded-full bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 h-11 flex items-center justify-center gap-2"
                    >
                      <Globe className="w-4 h-4" />
                      Search
                    </Button>
                    <Button
                      onClick={handleYouTubeSearch}
                      className="flex-1 rounded-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 h-11 flex items-center justify-center gap-2"
                    >
                      <Youtube className="w-4 h-4" />
                      Watch
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
