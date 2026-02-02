import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Landmark,
  Castle,
  Drama,
  Palette,
  Flower2,
  MapPin,
  ChevronRight,
  Search,
  Filter,
  TrendingUp,
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { HeritageInterestForm } from './HeritageInterestForm';

// ========================================
// HERITAGE LANDING PAGE
// Explore by Theme Grid Layout
// Color Scheme: Cream (#FFF8E1), Gold/Beige, Dark Grey
// ========================================

interface HeritageTheme {
  id: string;
  icon: string;
  lucideIcon: React.ReactNode;
  title: string;
  subtitle: string;
  count: number;
  bgGradient: string;
}

interface TrendingExperience {
  id: string;
  title: string;
  categories: string[];
  image: string;
  popular: boolean;
}

interface HeritageLandingPageProps {
  onThemeSelect: (themeId: string) => void;
  onTrendingSelect: (experienceId: string) => void;
}

export function HeritageLandingPage({
  onThemeSelect,
  onTrendingSelect,
}: HeritageLandingPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showInterestForm, setShowInterestForm] = useState(false);

  const handleInterestFormSubmit = (formData: any) => {
    console.log('Interest form submitted:', formData);
    setShowInterestForm(false);
    // In production: Navigate to customized itinerary screen
  };

  // 6 Heritage Themes
  const themes: HeritageTheme[] = [
    {
      id: 'unesco-sites',
      icon: '🏛️',
      lucideIcon: <Landmark className="h-8 w-8" />,
      title: 'UNESCO World Heritage Sites',
      subtitle: 'Globally recognized monuments',
      count: 42,
      bgGradient: 'from-amber-100 to-yellow-100',
    },
    {
      id: 'archaeological-sites',
      icon: '🏺',
      lucideIcon: <Castle className="h-8 w-8" />,
      title: 'Archaeological Sites & Monuments',
      subtitle: 'Ancient ruins, excavations',
      count: 156,
      bgGradient: 'from-orange-100 to-amber-100',
    },
    {
      id: 'cultural-festivals',
      icon: '🎭',
      lucideIcon: <Drama className="h-8 w-8" />,
      title: 'Cultural Festivals & Events',
      subtitle: 'Traditional festivals, dance, music',
      count: 89,
      bgGradient: 'from-yellow-100 to-orange-100',
    },
    {
      id: 'craft-villages',
      icon: '🎨',
      lucideIcon: <Palette className="h-8 w-8" />,
      title: 'Craft Villages & Artisan Communities',
      subtitle: 'Handloom, pottery, metalwork',
      count: 67,
      bgGradient: 'from-amber-100 to-orange-100',
    },
    {
      id: 'living-heritage',
      icon: '🕉️',
      lucideIcon: <Flower2 className="h-8 w-8" />,
      title: 'Living Heritage & Traditions',
      subtitle: 'Rituals, ceremonies, classical arts',
      count: 124,
      bgGradient: 'from-yellow-100 to-amber-100',
    },
    {
      id: 'heritage-circuits',
      icon: '🗺️',
      lucideIcon: <MapPin className="h-8 w-8" />,
      title: 'Heritage Circuits & Routes',
      subtitle: 'Curated multi-city journeys',
      count: 23,
      bgGradient: 'from-orange-100 to-yellow-100',
    },
  ];

  // Trending Multi-Category Experiences
  const trendingExperiences: TrendingExperience[] = [
    {
      id: 'heritage-nature',
      title: 'Heritage + Nature Combo',
      categories: ['UNESCO Sites', 'National Parks'],
      image: '🏛️🌳',
      popular: true,
    },
    {
      id: 'temple-food',
      title: 'Temple + Food Trail',
      categories: ['Sacred Sites', 'Local Cuisine'],
      image: '🕉️🍛',
      popular: true,
    },
    {
      id: 'forts-adventure',
      title: 'Forts + Adventure',
      categories: ['Historic Forts', 'Trekking'],
      image: '🏰⛰️',
      popular: false,
    },
    {
      id: 'heritage-wellness',
      title: 'Cultural Immersion + Ayurveda',
      categories: ['Living Heritage', 'Wellness'],
      image: '🎭🌿',
      popular: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8E1] via-[#FFF3D0] to-[#FFE8B8]">
      {/* ========================================
          HEADER SECTION
      ======================================== */}
      <div className="bg-gradient-to-r from-amber-900 via-yellow-800 to-orange-900 text-[#FFF8E1] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center shadow-2xl">
                <Landmark className="h-12 w-12 text-amber-900" />
              </div>
            </div>
            <h1 className="text-6xl font-bold mb-4 text-[#FFF8E1]">
              India's Living Heritage
            </h1>
            <p className="text-2xl text-amber-100 max-w-3xl mx-auto">
              Discover 5,000 years of culture, architecture, and traditions across the subcontinent
            </p>
          </motion.div>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/95 backdrop-blur rounded-2xl shadow-2xl p-2 flex items-center gap-3">
              <Search className="h-6 w-6 text-amber-700 ml-4" />
              <input
                type="text"
                placeholder="Search heritage sites, monuments, festivals..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-4 text-lg text-gray-800 placeholder-gray-500 outline-none"
              />
              <Button className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white px-8 py-4 rounded-xl text-lg font-bold">
                <Filter className="mr-2 h-5 w-5" />
                Filter
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================
          EXPLORE BY THEME - GRID LAYOUT
      ======================================== */}
      <div className="max-w-7xl mx-auto py-16 px-4">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-3 flex items-center gap-3">
            <span className="text-5xl">🏛️</span>
            Explore by Theme
          </h2>
          <p className="text-xl text-gray-600">
            Choose your area of interest to discover India's rich cultural tapestry
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {themes.map((theme, idx) => (
            <ThemeCard
              key={theme.id}
              theme={theme}
              onClick={() => onThemeSelect(theme.id)}
              delay={idx * 0.1}
            />
          ))}
        </div>

        {/* ========================================
            PLAN YOUR HERITAGE EXPERIENCE SECTION
        ======================================== */}
        <div className="mb-16">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-3 flex items-center gap-3">
              <span className="text-5xl">🎯</span>
              Plan Your Heritage Experience
            </h2>
            <p className="text-xl text-gray-600">
              Get personalized itineraries, check concessions, and discover combo packages
            </p>
          </div>

          {/* 3 Action Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1: Customized Heritage Itinerary */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.03, y: -5 }}
              onClick={() => setShowInterestForm(true)}
              className="cursor-pointer bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl shadow-xl border-3 border-purple-300 overflow-hidden hover:shadow-2xl transition-all"
            >
              <div className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-5xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Get Customized Heritage Itinerary
                </h3>
                <p className="text-base text-gray-700 mb-6">
                  Tell us your interests for a personalized plan
                </p>
                <div className="bg-white rounded-xl p-4 border-2 border-purple-200 mb-4">
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="text-purple-600">✓</span>
                      <span>Expert recommendations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-600">✓</span>
                      <span>Day-wise itinerary</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-600">✓</span>
                      <span>Transport & accommodation</span>
                    </li>
                  </ul>
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-4 rounded-xl text-lg font-bold shadow-lg">
                  Start Planning
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>

            {/* Card 2: Group-Specific Packages */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.03, y: -5 }}
              onClick={() => onThemeSelect('unesco-sites')}
              className="cursor-pointer bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl shadow-xl border-3 border-green-300 overflow-hidden hover:shadow-2xl transition-all"
            >
              <div className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-5xl">👥</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Group-Specific Packages
                </h3>
                <p className="text-base text-gray-700 mb-6">
                  Check concessions for students, seniors, differently-abled
                </p>
                <div className="space-y-3 mb-4">
                  <div className="bg-white rounded-xl p-4 border-2 border-green-200 flex items-center gap-3">
                    <span className="text-2xl">🎓</span>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-gray-900">Student Groups</p>
                      <p className="text-xs text-green-700 font-semibold">Up to 50% off</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4 border-2 border-green-200 flex items-center gap-3">
                    <span className="text-2xl">🧓</span>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-gray-900">Senior Citizens</p>
                      <p className="text-xs text-green-700 font-semibold">50% discount</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4 border-2 border-green-200 flex items-center gap-3">
                    <span className="text-2xl">♿</span>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-gray-900">Differently Abled</p>
                      <p className="text-xs text-green-700 font-semibold">Free entry</p>
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-4 rounded-xl text-lg font-bold shadow-lg">
                  View Concessions
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>

            {/* Card 3: Multi-Category Combo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="cursor-pointer bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl shadow-xl border-3 border-orange-300 overflow-hidden hover:shadow-2xl transition-all"
            >
              <div className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-5xl">🎫</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Multi-Category Combo
                </h3>
                <p className="text-base text-gray-700 mb-6">
                  Combine heritage with nearby attractions
                </p>
                <div className="bg-white rounded-xl p-4 border-2 border-orange-200 mb-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🏛️</span>
                      <span className="text-sm text-gray-700">+</span>
                      <span className="text-xl">🌳</span>
                      <span className="text-sm font-semibold text-gray-900">Heritage + Nature</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🕉️</span>
                      <span className="text-sm text-gray-700">+</span>
                      <span className="text-xl">🍛</span>
                      <span className="text-sm font-semibold text-gray-900">Temple + Food Trail</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🏰</span>
                      <span className="text-sm text-gray-700">+</span>
                      <span className="text-xl">⛰️</span>
                      <span className="text-sm font-semibold text-gray-900">Forts + Adventure</span>
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-4 rounded-xl text-lg font-bold shadow-lg">
                  Explore Combos
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ========================================
          TRENDING MULTI-CATEGORY EXPERIENCES
      ======================================== */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-3 flex items-center gap-3">
                <TrendingUp className="h-10 w-10 text-amber-600" />
                Trending Multi-Category Experiences
              </h2>
              <p className="text-xl text-gray-600">
                Combine heritage with other interests for a richer journey
              </p>
            </div>
          </div>

          {/* Horizontal Carousel */}
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
            {trendingExperiences.map((experience) => (
              <TrendingCard
                key={experience.id}
                experience={experience}
                onClick={() => onTrendingSelect(experience.id)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ========================================
          FOOTER CTA
      ======================================== */}
      <div className="bg-gradient-to-r from-amber-900 via-yellow-800 to-orange-900 text-[#FFF8E1] py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Need Help Planning Your Heritage Journey?</h3>
          <p className="text-xl text-amber-100 mb-6">
            Our heritage experts can create a personalized itinerary based on your interests
          </p>
          <Button className="bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-amber-900 px-10 py-6 rounded-2xl text-2xl font-bold shadow-2xl">
            Talk to Heritage Expert
            <ChevronRight className="ml-3 h-7 w-7" />
          </Button>
        </div>
      </div>

      {/* Interest Form Modal */}
      <HeritageInterestForm
        isOpen={showInterestForm}
        onClose={() => setShowInterestForm(false)}
        onSubmit={handleInterestFormSubmit}
      />
    </div>
  );
}

// ========================================
// THEME CARD COMPONENT
// ========================================

interface ThemeCardProps {
  theme: HeritageTheme;
  onClick: () => void;
  delay: number;
}

function ThemeCard({ theme, onClick, delay }: ThemeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ scale: 1.02, y: -5 }}
      onClick={onClick}
      className="cursor-pointer"
    >
      <div className={`bg-gradient-to-br ${theme.bgGradient} rounded-3xl shadow-xl border-3 border-amber-300 overflow-hidden hover:shadow-2xl transition-all`}>
        <div className="p-8">
          {/* Icon & Title */}
          <div className="flex items-start gap-6 mb-6">
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
              <span className="text-5xl">{theme.icon}</span>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {theme.title}
              </h3>
              <p className="text-base text-gray-700">{theme.subtitle}</p>
            </div>
          </div>

          {/* Stats & CTA */}
          <div className="flex items-center justify-between">
            <div className="bg-white/80 backdrop-blur rounded-xl px-5 py-3 border-2 border-amber-400">
              <p className="text-sm font-bold text-gray-600 mb-1">Destinations</p>
              <p className="text-3xl font-bold text-amber-700">{theme.count}</p>
            </div>
            <Button className="bg-gradient-to-r from-amber-700 to-yellow-700 hover:from-amber-800 hover:to-yellow-800 text-white px-6 py-4 rounded-xl text-lg font-bold shadow-lg">
              Explore
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ========================================
// TRENDING CARD COMPONENT
// ========================================

interface TrendingCardProps {
  experience: TrendingExperience;
  onClick: () => void;
}

function TrendingCard({ experience, onClick }: TrendingCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
      className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg border-2 border-amber-200 overflow-hidden cursor-pointer hover:shadow-xl transition-all"
    >
      {/* Image/Icon */}
      <div className="bg-gradient-to-br from-amber-100 to-yellow-100 p-12 flex items-center justify-center border-b-2 border-amber-200">
        <span className="text-7xl">{experience.image}</span>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          {experience.popular && (
            <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
              🔥 POPULAR
            </div>
          )}
        </div>
        <h4 className="text-xl font-bold text-gray-900 mb-3">{experience.title}</h4>
        <div className="flex flex-wrap gap-2 mb-4">
          {experience.categories.map((cat, idx) => (
            <span
              key={idx}
              className="bg-amber-100 text-amber-800 px-3 py-1 rounded-lg text-sm font-semibold border border-amber-300"
            >
              {cat}
            </span>
          ))}
        </div>
        <Button
          variant="outline"
          className="w-full border-2 border-amber-600 text-amber-700 hover:bg-amber-50 py-3 rounded-xl font-bold"
        >
          View Packages
          <ChevronRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </motion.div>
  );
}