import { motion } from 'motion/react';
import { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { ArrowLeft, Heart, Star, Bell, ChevronRight } from 'lucide-react';

interface EcoSubCategoryTemplateProps {
  categoryId: string;
  categoryName: string;
  categoryIcon: string;
  categoryDescription: string;
  onBack: () => void;
  onSaveInterest: (destinationId: string) => void;
  onSetPreferences: () => void;
}

export function EcoSubCategoryTemplate({
  categoryId,
  categoryName,
  categoryIcon,
  categoryDescription,
  onBack,
  onSaveInterest,
  onSetPreferences,
}: EcoSubCategoryTemplateProps) {
  const [savedDestinations, setSavedDestinations] = useState<string[]>([]);

  // Admin-driven placeholder destinations
  const destinations = [
    {
      id: 'dest-1',
      name: 'Admin-Added Destination 1',
      location: 'Admin-Added Location',
      experience: 'Admin-Published Experience',
      highlights: [
        'Admin-Curated Activity 1',
        'Admin-Curated Activity 2',
        'Admin-Curated Activity 3',
      ],
      sustainability: 'Admin-Verified Eco-Rating',
      image: '🌿',
    },
    {
      id: 'dest-2',
      name: 'Admin-Added Destination 2',
      location: 'Location X',
      experience: 'Admin-Published Experience',
      highlights: [
        'Admin-Curated Activity 1',
        'Admin-Curated Activity 2',
        'Admin-Curated Activity 3',
      ],
      sustainability: 'Admin-Verified Eco-Rating',
      image: '🏞️',
    },
    {
      id: 'dest-3',
      name: 'Admin-Added Destination 3',
      location: 'Admin-Added Location',
      experience: 'Admin-Published Experience',
      highlights: [
        'Admin-Curated Activity 1',
        'Admin-Curated Activity 2',
        'Admin-Curated Activity 3',
      ],
      sustainability: 'Admin-Verified Eco-Rating',
      image: '🌳',
    },
  ];

  const isSaved = (destId: string) => savedDestinations.includes(destId);

  const handleSave = (destId: string) => {
    if (isSaved(destId)) {
      setSavedDestinations(prev => prev.filter(id => id !== destId));
    } else {
      setSavedDestinations(prev => [...prev, destId]);
      onSaveInterest(destId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-emerald-50 to-lime-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <Button
            onClick={onBack}
            variant="ghost"
            className="text-white hover:bg-white/20 rounded-full px-4 py-2 mb-4 flex items-center gap-2"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Categories
          </Button>
          <div className="text-center">
            <div className="text-8xl mb-4">{categoryIcon}</div>
            <h1 className="text-4xl font-bold text-white mb-3">
              {categoryName}
            </h1>
            <p className="text-xl text-green-100 font-semibold max-w-2xl mx-auto">
              {categoryDescription}
            </p>
          </div>
        </div>
      </div>

      {/* Admin Banner */}
      <div className="max-w-7xl mx-auto px-6 -mt-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-purple-600 rounded-2xl border-3 border-purple-400 p-6 shadow-2xl"
        >
          <p className="text-lg text-white font-semibold text-center">
            <span className="bg-purple-500 px-3 py-1 rounded-lg">[Admin: Update This Text]</span>
            {' '}Admin-published eco-experiences below. Browse, save interests, and get notified when deals match your budget.
          </p>
        </motion.div>
      </div>

      {/* Research Tools */}
      <div className="max-w-7xl mx-auto px-6 mt-8">
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border-3 border-blue-400 p-6 shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-3xl">🔍</span>
            Discover {categoryName}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button
              onClick={() => window.open(`https://www.google.com/search?q=${encodeURIComponent(categoryName + ' eco tourism')}`, '_blank')}
              className="bg-white border-3 border-blue-500 text-blue-700 hover:bg-blue-50 px-6 py-4 rounded-xl text-base font-bold flex items-center justify-center gap-3"
            >
              <span className="text-2xl">🔍</span>
              Google Search
            </Button>
            <Button
              onClick={() => window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(categoryName + ' sustainable travel')}`, '_blank')}
              className="bg-white border-3 border-red-500 text-red-700 hover:bg-red-50 px-6 py-4 rounded-xl text-base font-bold flex items-center justify-center gap-3"
            >
              <span className="text-2xl">📺</span>
              YouTube Browse
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Preferences */}
      <div className="max-w-7xl mx-auto px-6 mt-8">
        <Button
          onClick={onSetPreferences}
          className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-6 rounded-2xl text-lg font-bold shadow-xl flex items-center justify-center gap-3"
        >
          <Bell className="h-6 w-6" />
          Set Budget & Deal Preferences
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Admin-Added Results */}
      <div className="max-w-7xl mx-auto px-6 mt-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          📋 Admin-Added Results (Published by Admin)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl border-3 border-gray-300 overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                <div className="text-9xl">{destination.image}</div>
              </div>

              {/* Admin Editable Badge */}
              <div className="bg-yellow-100 border-b-2 border-dashed border-yellow-400 px-4 py-2">
                <p className="text-xs font-bold text-yellow-800 text-center">
                  [Admin Editable: Update destination details]
                </p>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="bg-gray-100 border-2 border-dashed border-gray-400 rounded-xl p-3 mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {destination.name}
                  </h3>
                  <p className="text-sm text-gray-600 font-semibold">
                    📍 {destination.location}
                  </p>
                </div>

                <div className="mb-4">
                  <p className="text-base font-semibold text-gray-700 mb-2">
                    {destination.experience}
                  </p>
                  <div className="space-y-1">
                    {destination.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                        <span className="font-semibold">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-green-100 border-2 border-green-400 rounded-xl p-3 mb-4">
                  <p className="text-sm font-bold text-green-800 flex items-center gap-2">
                    ♻️ {destination.sustainability}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Button
                    onClick={() => handleSave(destination.id)}
                    className={`w-full px-6 py-4 rounded-xl text-base font-bold flex items-center justify-center gap-2 transition-all ${
                      isSaved(destination.id)
                        ? 'bg-pink-500 hover:bg-pink-600 text-white border-3 border-pink-400'
                        : 'bg-white hover:bg-pink-50 text-pink-600 border-3 border-pink-400'
                    }`}
                  >
                    <Heart className={`h-5 w-5 ${isSaved(destination.id) ? 'fill-white' : ''}`} />
                    {isSaved(destination.id) ? 'Saved to Wishlist' : 'Save Interest'}
                  </Button>

                  <Button
                    onClick={() => onSaveInterest(destination.id)}
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-4 rounded-xl text-base font-bold flex items-center justify-center gap-2"
                  >
                    <Bell className="h-5 w-5" />
                    Notify Me
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Admin Add More */}
        <div className="mt-8 bg-gray-100 border-3 border-dashed border-gray-400 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            ➕ Admin: Add More Destinations
          </h3>
          <p className="text-base text-gray-700 font-semibold">
            Publish new eco-experiences and deals for this category
          </p>
        </div>
      </div>

      {/* Grok AI Section */}
      <div className="max-w-7xl mx-auto px-6 mt-12">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl border-3 border-indigo-400 p-10 shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-6 text-center flex items-center justify-center gap-3">
            <span className="text-4xl">🤖</span>
            Grok AI Notifications
          </h2>
          <p className="text-xl text-indigo-100 font-semibold text-center max-w-3xl mx-auto">
            "We've noted your interest. Grok AI will notify you when admin-published eco-deals match your preferences and budget."
          </p>
        </div>
      </div>

      {/* User Flow Info */}
      <div className="max-w-7xl mx-auto px-6 mt-12">
        <div className="bg-blue-100 border-3 border-blue-400 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            📍 Your Eco-Tourism Journey
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-5xl mb-2">🔍</div>
              <h4 className="text-lg font-bold text-gray-900 mb-1">1. Browse</h4>
              <p className="text-sm text-gray-700 font-semibold">Google/YouTube research</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-2">❤️</div>
              <h4 className="text-lg font-bold text-gray-900 mb-1">2. Save Interest</h4>
              <p className="text-sm text-gray-700 font-semibold">Mark favorites & preferences</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-2">🔔</div>
              <h4 className="text-lg font-bold text-gray-900 mb-1">3. Get Notified</h4>
              <p className="text-sm text-gray-700 font-semibold">Receive matching deals</p>
            </div>
          </div>
          <div className="mt-6 bg-yellow-100 border-2 border-yellow-400 rounded-xl p-4">
            <p className="text-sm text-gray-700 font-semibold text-center">
              ⚠️ No booking or payment at this stage. Interest capture only.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
