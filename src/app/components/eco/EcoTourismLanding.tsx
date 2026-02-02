import { motion } from 'motion/react';
import { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { ChevronRight, Leaf, TreePine, Home, Mountain, Waves, Users } from 'lucide-react';

interface EcoTourismLandingProps {
  onSubCategorySelect: (categoryId: string) => void;
}

export function EcoTourismLanding({ onSubCategorySelect }: EcoTourismLandingProps) {
  const subCategories = [
    {
      id: 'national-parks',
      icon: '🐅',
      title: 'National Parks & Wildlife',
      description: 'Tiger reserves, birdwatching, bio-diverse zones',
      features: ['Jungle safaris', 'Wildlife tracking', 'Nature trails', 'Photography tours'],
      gradient: 'from-green-600 to-emerald-600',
      adminNote: 'Admin-Published Experiences',
    },
    {
      id: 'tribal-villages',
      icon: '🏘️',
      title: 'Tribal & Heritage Villages',
      description: 'Indigenous communities, traditional crafts, cultural exchange',
      features: ['Village stays', 'Cultural workshops', 'Traditional cuisine', 'Handicraft learning'],
      gradient: 'from-amber-600 to-orange-600',
      adminNote: 'Admin-Published Experiences',
    },
    {
      id: 'organic-farms',
      icon: '🌾',
      title: 'Organic Farms & Agro-Tourism',
      description: 'Farm stays, organic produce, hands-on farming',
      features: ['Organic farming', 'Farm-to-table meals', 'Agricultural tours', 'Seasonal harvests'],
      gradient: 'from-lime-600 to-green-600',
      adminNote: 'Admin-Published Experiences',
    },
    {
      id: 'eco-lodges',
      icon: '🏡',
      title: 'Eco-Lodges & Sustainable Stays',
      description: 'Zero-waste resorts, bamboo cottages, tree houses',
      features: ['Eco-lodges', 'Sustainable practices', 'Green architecture', 'Low-impact stays'],
      gradient: 'from-teal-600 to-cyan-600',
      adminNote: 'Admin-Published Experiences',
    },
    {
      id: 'coastal-marine',
      icon: '🐚',
      title: 'Coastal & Marine Conservation',
      description: 'Beach cleanups, coral restoration, mangrove tours',
      features: ['Marine conservation', 'Coral restoration', 'Beach cleanups', 'Mangrove walks'],
      gradient: 'from-blue-600 to-indigo-600',
      adminNote: 'Admin-Published Experiences',
    },
    {
      id: 'forest-camps',
      icon: '🌲',
      title: 'Forest Conservation Camps',
      description: 'Reforestation, wildlife monitoring, eco-volunteering',
      features: ['Tree planting', 'Wildlife monitoring', 'Eco-volunteering', 'Conservation projects'],
      gradient: 'from-emerald-600 to-green-700',
      adminNote: 'Admin-Published Experiences',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-emerald-50 to-lime-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-3xl p-6 mb-6">
              <Leaf className="h-20 w-20 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-white mb-4">
              Eco-Tourism & Sustainable Travel
            </h1>
            <p className="text-xl text-green-100 font-semibold max-w-3xl mx-auto">
              Explore nature-based experiences responsibly. Travel light, leave no trace, support local communities.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Admin Banner */}
      <div className="max-w-7xl mx-auto px-6 -mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-purple-600 rounded-2xl border-3 border-purple-400 p-6 shadow-2xl"
        >
          <div className="flex items-center gap-4">
            <div className="text-5xl">🌿</div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-2">
                Admin-Curated Eco-Experiences Start Here!
              </h3>
              <p className="text-lg text-purple-100 font-semibold">
                <span className="bg-purple-500 px-3 py-1 rounded-lg">[Admin: Update This Text]</span>
                {' '}Discover sustainable destinations and eco-friendly activities curated by our team
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Research Tools */}
      <div className="max-w-7xl mx-auto px-6 mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border-3 border-blue-400 p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="text-4xl">🔍</span>
            Discover Eco-Destinations Your Way
          </h3>
          <p className="text-base text-gray-700 font-semibold mb-6">
            Use Google Search and YouTube to explore eco-tourism destinations, then save your interests below
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button
              onClick={() => window.open('https://www.google.com/search?q=eco+tourism+destinations+india', '_blank')}
              className="bg-white border-3 border-blue-500 text-blue-700 hover:bg-blue-50 px-8 py-6 rounded-2xl text-lg font-bold flex items-center justify-center gap-3"
            >
              <span className="text-3xl">🔍</span>
              Google Search: Eco-Tourism
            </Button>
            <Button
              onClick={() => window.open('https://www.youtube.com/results?search_query=eco+tourism+sustainable+travel+india', '_blank')}
              className="bg-white border-3 border-red-500 text-red-700 hover:bg-red-50 px-8 py-6 rounded-2xl text-lg font-bold flex items-center justify-center gap-3"
            >
              <span className="text-3xl">📺</span>
              YouTube: Browse Videos
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Sub-Categories Grid */}
      <div className="max-w-7xl mx-auto px-6 mt-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Choose Your Eco-Adventure
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-white rounded-3xl border-3 border-gray-300 overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              {/* Card Header */}
              <div className={`bg-gradient-to-r ${category.gradient} px-6 py-8 text-center`}>
                <div className="text-7xl mb-3">{category.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-base text-white/90 font-semibold">
                  {category.description}
                </p>
              </div>

              {/* Card Body */}
              <div className="p-6">
                {/* Admin Note */}
                <div className="bg-yellow-100 border-2 border-dashed border-yellow-400 rounded-xl p-3 mb-4">
                  <p className="text-sm font-bold text-yellow-800 text-center">
                    📝 {category.adminNote}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {category.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-base text-gray-700">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="font-semibold">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <Button
                  onClick={() => onSubCategorySelect(category.id)}
                  className={`w-full bg-gradient-to-r ${category.gradient} hover:opacity-90 text-white px-6 py-4 rounded-2xl text-lg font-bold flex items-center justify-center gap-2`}
                >
                  Browse Experiences
                  <ChevronRight className="h-5 w-5" />
                </Button>

                {/* Admin Editable Area */}
                <div className="mt-4 bg-gray-100 border-2 border-dashed border-gray-400 rounded-xl p-3">
                  <p className="text-xs text-gray-600 font-semibold text-center">
                    [Admin Editable: Update experiences, features, and descriptions]
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Choose Eco-Tourism */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl border-3 border-orange-400 p-10 shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Why Choose Eco-Tourism?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-6xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-white mb-2">Environmental Impact</h3>
              <p className="text-base text-orange-100 font-semibold">
                Minimize footprint, protect ecosystems, preserve natural beauty
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-white mb-2">Community Benefits</h3>
              <p className="text-base text-orange-100 font-semibold">
                Support local economies, empower indigenous communities, fair trade
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">♻️</div>
              <h3 className="text-xl font-bold text-white mb-2">Wildlife Conservation</h3>
              <p className="text-base text-orange-100 font-semibold">
                Protect endangered species, restore habitats, ethical wildlife viewing
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Traveler's Code of Conduct */}
      <div className="max-w-7xl mx-auto px-6 mt-12">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl border-3 border-blue-400 p-10 shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            🌱 Eco-Traveler's Code of Conduct
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-blue-200 mb-4">✅ DO's:</h3>
              {[
                'Respect Wildlife – Observe from distance',
                'Choose Local Guides – Support communities',
                'Zero Waste Mindset – Carry reusable items',
                'Support Local Economy – Buy authentic crafts',
                'Learn & Educate – Share eco-practices',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="text-2xl">✅</div>
                  <p className="text-base text-white font-semibold">{item}</p>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-red-200 mb-4">❌ DON'Ts:</h3>
              {[
                'Litter or Use Plastic – Leave no trace',
                'Disturb Animals – No feeding or touching',
                'Pick Plants or Shells – Preserve nature',
                'Waste Resources – Conserve water/energy',
                'Travel Off-Season Peak – Reduce overcrowding',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="text-2xl">❌</div>
                  <p className="text-base text-white font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Grok AI Integration */}
      <div className="max-w-7xl mx-auto px-6 mt-12">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl border-3 border-purple-400 p-10 shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-6 text-center flex items-center justify-center gap-3">
            <span className="text-4xl">🤖</span>
            Grok AI Eco-Insights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/30">
              <div className="text-5xl mb-3">🌿</div>
              <h3 className="text-xl font-bold text-white mb-2">Grok Sustainability Tips</h3>
              <p className="text-base text-purple-100 font-semibold">
                AI-powered eco-travel recommendations based on your preferences
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/30">
              <div className="text-5xl mb-3">📊</div>
              <h3 className="text-xl font-bold text-white mb-2">Grok Crowd Advisory</h3>
              <p className="text-base text-purple-100 font-semibold">
                Real-time alerts on eco-destination capacity and best visit times
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/30">
              <div className="text-5xl mb-3">💡</div>
              <h3 className="text-xl font-bold text-white mb-2">Grok Impact Tracker</h3>
              <p className="text-base text-purple-100 font-semibold">
                Track your carbon footprint and conservation contributions
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Admin Dashboard Link */}
      <div className="max-w-7xl mx-auto px-6 mt-12">
        <div className="bg-gray-100 border-3 border-dashed border-gray-400 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            🛠️ Admin Dashboard Access
          </h3>
          <p className="text-base text-gray-700 font-semibold mb-6">
            Manage eco-experiences, publish deals, update sustainability metrics
          </p>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-2xl text-lg font-bold">
            Open Admin Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
}
