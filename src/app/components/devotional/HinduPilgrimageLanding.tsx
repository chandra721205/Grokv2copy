import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ChevronLeft,
  MapPin,
  TrendingUp,
  Sparkles,
  Accessibility,
  Heart,
  Building2,
  Globe,
  ArrowRight
} from 'lucide-react';

interface FeatureTile {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

export default function HinduPilgrimageLanding() {
  const navigate = useNavigate();
  const [selectedState, setSelectedState] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All Levels');
  const [showHiddenGems, setShowHiddenGems] = useState(false);

  const features: FeatureTile[] = [
    {
      icon: <Accessibility className="w-8 h-8" />,
      title: 'Accessible Darshan',
      description: 'Senior & wheelchair-friendly temple access',
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Medical Support',
      description: 'On-trip medical assistance & emergency care',
      gradient: 'from-green-600 to-emerald-600'
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Ancient Heritage',
      description: '1000+ years of spiritual history',
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Multi-Faith Harmony',
      description: 'Respecting all spiritual traditions',
      gradient: 'from-orange-600 to-yellow-600'
    }
  ];

  const states = [
    '[Admin: Select State]',
    'Tamil Nadu',
    'Uttar Pradesh',
    'Uttarakhand',
    'Gujarat',
    'Maharashtra',
    'Madhya Pradesh',
    'Karnataka',
    'Andhra Pradesh',
    'Kerala',
    'West Bengal',
    'Assam',
    'Odisha',
    'Rajasthan',
    'Himachal Pradesh'
  ];

  const difficultyLevels = ['All Levels', 'Senior-Friendly', 'Moderate', 'Challenging'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white pb-24">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-600 to-pink-600 px-6 pt-12 pb-8 rounded-b-3xl">
        <button
          onClick={() => navigate(-1)}
          className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6 focus:ring-2 focus:ring-white focus:outline-none hover:bg-white/30 transition-colors"
          aria-label="Go back to Devotional Tourism"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        {/* Hero Section */}
        <div className="text-center">
          <div className="text-6xl mb-4">🕉️</div>
          <h1 className="text-white text-4xl font-bold mb-2">
            Hindu Pilgrimage
          </h1>
          <p className="text-white/90 text-lg mb-1">
            Spiritual Journeys
          </p>
          <p className="text-white/80 text-sm max-w-md mx-auto">
            Embark on sacred journeys to ancient temples, divine circuits, and spiritual destinations across India
          </p>
        </div>
      </header>

      <main className="px-6 -mt-4 space-y-6">
        {/* Feature Tiles */}
        <section>
          <h2 className="text-xl font-bold mb-4 text-gray-900">Why Choose Us</h2>
          <div className="grid grid-cols-2 gap-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all"
              >
                <div className={`bg-gradient-to-r ${feature.gradient} w-12 h-12 rounded-xl flex items-center justify-center mb-3`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="font-bold text-sm mb-1 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-xs text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Smart Filters */}
        <section className="bg-white rounded-3xl p-5 shadow-lg">
          <h2 className="text-lg font-bold mb-4 text-gray-900">Smart Filters</h2>
          
          <div className="space-y-3">
            {/* State Filter */}
            <div>
              <label htmlFor="state-filter" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                <MapPin className="w-4 h-4" />
                State / Region
              </label>
              <select
                id="state-filter"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full h-11 px-4 bg-gray-50 border border-gray-200 rounded-full text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                {states.map((state) => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>

            {/* Difficulty Filter */}
            <div>
              <label htmlFor="difficulty-filter" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                <TrendingUp className="w-4 h-4" />
                Difficulty Level
              </label>
              <select
                id="difficulty-filter"
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full h-11 px-4 bg-gray-50 border border-gray-200 rounded-full text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                {difficultyLevels.map((level) => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>

            {/* Hidden Gems Toggle */}
            <div className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
              <div className="flex items-center gap-2">
                <Sparkles className={`w-5 h-5 ${showHiddenGems ? 'text-purple-600' : 'text-gray-400'}`} />
                <div>
                  <p className="text-sm font-semibold text-gray-900">Show Hidden Gems</p>
                  <p className="text-xs text-gray-600">Less-crowded ancient temples</p>
                </div>
              </div>
              <button
                onClick={() => setShowHiddenGems(!showHiddenGems)}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  showHiddenGems ? 'bg-purple-600' : 'bg-gray-300'
                }`}
                aria-label="Toggle hidden gems"
              >
                <div
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                    showHiddenGems ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>
        </section>

        {/* Primary Choices */}
        <section>
          <h2 className="text-xl font-bold mb-4 text-gray-900">Choose Your Path</h2>
          
          <div className="space-y-3">
            {/* Sacred Circuits */}
            <button
              onClick={() => navigate('/devotional/hindu-pilgrimage/circuits')}
              className="w-full bg-gradient-to-r from-orange-600 to-pink-600 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all text-left focus:ring-2 focus:ring-orange-500 focus:outline-none active:scale-98"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="text-4xl mb-3">🛤️</div>
                  <h3 className="text-white text-xl font-bold mb-2">
                    Sacred Circuits
                  </h3>
                  <p className="text-white/90 text-sm mb-4">
                    Curated spiritual paths like 12 Jyotirlingas, 108 Divya Desams, Char Dham & more
                  </p>
                  <div className="flex items-center gap-2 text-white/80 text-xs">
                    <span className="px-2 py-1 bg-white/20 rounded-full">
                      7 Sacred Circuits
                    </span>
                    <span className="px-2 py-1 bg-white/20 rounded-full">
                      Admin-Curated
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-6 h-6 text-white flex-shrink-0 ml-4" />
              </div>
            </button>

            {/* Explore Destinations */}
            <button
              onClick={() => navigate('/devotional/hindu-pilgrimage/explore')}
              className="w-full bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all text-left border-2 border-orange-200 focus:ring-2 focus:ring-orange-500 focus:outline-none active:scale-98"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="text-4xl mb-3">📍</div>
                  <h3 className="text-gray-900 text-xl font-bold mb-2">
                    Explore Destinations
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Browse temples, monasteries, ashrams & spiritual sites across India
                  </p>
                  <div className="flex items-center gap-2 text-gray-600 text-xs">
                    <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full">
                      1000+ Destinations
                    </span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full">
                      All States
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-6 h-6 text-orange-600 flex-shrink-0 ml-4" />
              </div>
            </button>
          </div>
        </section>

        {/* Info Card */}
        <div className="bg-gradient-to-r from-orange-100 to-pink-100 rounded-3xl p-5 shadow-lg border-2 border-orange-300">
          <div className="flex items-start gap-3">
            <div className="text-2xl flex-shrink-0">ℹ️</div>
            <div>
              <h3 className="font-bold text-base text-orange-900 mb-2">
                Your Spiritual Journey, Your Way
              </h3>
              <p className="text-sm text-orange-800 mb-3">
                Choose pre-curated sacred circuits for traditional paths, or explore individual destinations to create your custom pilgrimage.
              </p>
              <p className="text-sm text-orange-800">
                All temple names, circuits, and routes are admin-managed to ensure authenticity and spiritual accuracy.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex items-center justify-around h-16 z-10">
        <button className="flex flex-col items-center justify-center gap-1 text-gray-400 hover:text-orange-600 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span className="text-xs">Home</span>
        </button>
        
        <button className="flex flex-col items-center justify-center gap-1 text-orange-600 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="text-xs font-semibold">Explore</span>
        </button>
        
        <button className="flex flex-col items-center justify-center gap-1 text-gray-400 hover:text-orange-600 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          <span className="text-xs">Trip</span>
        </button>
        
        <button className="flex flex-col items-center justify-center gap-1 text-gray-400 hover:text-orange-600 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span className="text-xs">Message</span>
        </button>
        
        <button className="flex flex-col items-center justify-center gap-1 text-gray-400 hover:text-orange-600 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span className="text-xs">Profile</span>
        </button>
      </nav>
    </div>
  );
}
