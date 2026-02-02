import React, { useState } from 'react';
import {
  ChevronLeft,
  Heart,
  MapPin,
  Calendar,
  TrendingUp,
  Users,
  Star,
  Sparkles,
  Eye,
  ChevronRight,
  Check,
  Mountain,
  Clock,
  Info
} from 'lucide-react';

interface SacredCircuit {
  id: string;
  name: string;
  deity: string;
  icon: string;
  templeCount: number;
  geographicScope: string;
  states?: string[];
  duration: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  description: string;
  gradient: string;
  badge?: string;
}

interface TwelveSacredCircuitsProps {
  onBack?: () => void;
}

export default function TwelveSacredCircuits({ onBack }: TwelveSacredCircuitsProps) {
  const [interestedCircuits, setInterestedCircuits] = useState<Set<string>>(new Set());
  const [showInterestModal, setShowInterestModal] = useState(false);
  const [selectedCircuitName, setSelectedCircuitName] = useState('');

  // THE 12 MANDATORY HINDU PILGRIMAGE SUB-CATEGORIES
  const sacredCircuits: SacredCircuit[] = [
    {
      id: '108-divya-desams',
      name: '108 Divya Desams',
      deity: 'Lord Vishnu',
      icon: '🪷',
      templeCount: 108,
      geographicScope: 'Pan-India & Beyond',
      states: ['Tamil Nadu', 'Kerala', 'Andhra Pradesh', 'Karnataka', 'Gujarat', 'Uttar Pradesh', 'Nepal'],
      duration: '30-45 days',
      difficulty: 'Challenging',
      description: 'Sacred temples sung by the Alvars, celebrating Lord Vishnu',
      gradient: 'from-green-600 to-emerald-600'
    },
    {
      id: '12-jyotirlingas',
      name: '12 Jyotirlingas',
      deity: 'Lord Shiva',
      icon: '🕉️',
      templeCount: 12,
      geographicScope: 'Pan-India',
      states: ['Gujarat', 'Maharashtra', 'Madhya Pradesh', 'Uttar Pradesh', 'Uttarakhand', 'Jharkhand', 'Tamil Nadu', 'Andhra Pradesh', 'Karnataka', 'Himachal Pradesh'],
      duration: '15-20 days',
      difficulty: 'Moderate',
      description: "Pan-India journey to Lord Shiva's sacred light pillars",
      gradient: 'from-purple-600 to-pink-600',
      badge: 'Most Popular'
    },
    {
      id: '51-shakti-peethas',
      name: '51 Shakti Peethas',
      deity: 'Goddess Shakti',
      icon: '🔱',
      templeCount: 51,
      geographicScope: 'Pan-India, Nepal & Beyond',
      states: ['West Bengal', 'Assam', 'Odisha', 'Madhya Pradesh', 'Rajasthan', 'Uttar Pradesh', 'Gujarat', 'Maharashtra', 'Tamil Nadu', 'Karnataka', 'Himachal Pradesh', 'Uttarakhand', 'Nepal', 'Bangladesh', 'Pakistan', 'Sri Lanka'],
      duration: '25-30 days',
      difficulty: 'Moderate',
      description: 'Divine seats of Goddess Shakti across the subcontinent',
      gradient: 'from-red-600 to-pink-600'
    },
    {
      id: 'pancharama-kshetras',
      name: 'Pancharama Kshetras',
      deity: 'Lord Shiva',
      icon: '🛕',
      templeCount: 5,
      geographicScope: 'Andhra Pradesh',
      states: ['Andhra Pradesh'],
      duration: '3-4 days',
      difficulty: 'Easy',
      description: '5 ancient Shiva temples in Andhra Pradesh',
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      id: 'ashtavinayak',
      name: 'Ashtavinayak',
      deity: 'Lord Ganesha',
      icon: '🐘',
      templeCount: 8,
      geographicScope: 'Maharashtra',
      states: ['Maharashtra'],
      duration: '2-3 days',
      difficulty: 'Easy',
      description: '8 sacred Ganesha temples in Maharashtra',
      gradient: 'from-orange-600 to-yellow-600',
      badge: 'Family Favorite'
    },
    {
      id: 'navagraha-temples',
      name: 'Navagraha Temples',
      deity: 'Nine Planets',
      icon: '🌟',
      templeCount: 9,
      geographicScope: 'Tamil Nadu',
      states: ['Tamil Nadu'],
      duration: '3-4 days',
      difficulty: 'Easy',
      description: 'Temples for the nine celestial planets',
      gradient: 'from-indigo-600 to-purple-600',
      badge: 'Senior-Friendly'
    },
    {
      id: 'char-dham-yatra',
      name: 'Char Dham Yatra',
      deity: 'Multi-Deity (4 Sacred Abodes)',
      icon: '⛰️',
      templeCount: 4,
      geographicScope: 'Uttarakhand',
      states: ['Uttarakhand'],
      duration: '10-12 days',
      difficulty: 'Challenging',
      description: 'Himalayan pilgrimage: Badrinath, Kedarnath, Gangotri, Yamunotri',
      gradient: 'from-blue-700 to-cyan-600',
      badge: 'Himalayan Journey'
    },
    {
      id: 'local-devotional-circuits',
      name: 'Local Devotional Circuits',
      deity: 'Location-Based',
      icon: '📍',
      templeCount: 0,
      geographicScope: 'District / City Clusters',
      duration: '1-2 days',
      difficulty: 'Easy',
      description: 'Discover sacred sites within your city or district',
      gradient: 'from-teal-600 to-green-600',
      badge: 'Near You'
    },
    {
      id: 'admin-defined-circuits',
      name: 'Admin-Defined Circuits',
      deity: 'Configurable by Admin',
      icon: '⚙️',
      templeCount: 0,
      geographicScope: 'Unlimited',
      duration: 'Custom',
      difficulty: 'Easy',
      description: 'Custom circuits created by administrators for special themes',
      gradient: 'from-gray-600 to-slate-600',
      badge: 'Custom'
    },
    {
      id: 'hidden-gems',
      name: 'Hidden Gems',
      deity: 'Lesser-Known Temples',
      icon: '💎',
      templeCount: 0,
      geographicScope: 'Pan-India',
      duration: 'Flexible',
      difficulty: 'Easy',
      description: 'Low crowd, ancient temples with deep spiritual heritage',
      gradient: 'from-purple-700 to-pink-600',
      badge: 'Low Crowd'
    },
    {
      id: 'festival-based-circuits',
      name: 'Festival-Based Circuits',
      deity: 'Event-Based Journeys',
      icon: '🎊',
      templeCount: 0,
      geographicScope: 'Time-Specific',
      duration: 'Festival Duration',
      difficulty: 'Moderate',
      description: 'Time-specific devotional journeys during major festivals',
      gradient: 'from-yellow-600 to-orange-600',
      badge: 'Seasonal'
    },
    {
      id: 'senior-friendly-circuits',
      name: 'Senior-Friendly Circuits',
      deity: 'Accessibility Focus',
      icon: '♿',
      templeCount: 0,
      geographicScope: 'Curated Pan-India',
      duration: 'Flexible',
      difficulty: 'Easy',
      description: 'Easy pace temples with medical support & mobility assistance',
      gradient: 'from-green-700 to-emerald-600',
      badge: 'Accessible'
    }
  ];

  const handleInterest = (circuitId: string, circuitName: string) => {
    setInterestedCircuits(prev => {
      const newSet = new Set(prev);
      if (newSet.has(circuitId)) {
        newSet.delete(circuitId);
      } else {
        newSet.add(circuitId);
        setSelectedCircuitName(circuitName);
        setShowInterestModal(true);
      }
      return newSet;
    });
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-100 text-green-700';
      case 'Moderate':
        return 'bg-yellow-100 text-yellow-700';
      case 'Challenging':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white pb-24">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-600 to-red-600 px-6 pt-12 pb-8 rounded-b-3xl">
        {onBack && (
          <button
            onClick={onBack}
            className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6 focus:ring-2 focus:ring-white focus:outline-none hover:bg-white/30 transition-colors"
            aria-label="Go back"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
        )}

        <div className="text-center">
          <div className="text-6xl mb-3">🕉️</div>
          <h1 className="text-white text-3xl font-bold mb-2">Hindu Pilgrimage Circuits</h1>
          <p className="text-white/90 text-sm">12 Sacred Journey Paths</p>
        </div>
      </header>

      <main className="px-6 -mt-4 space-y-6">
        {/* Grok AI Insight Card (Subtle) */}
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-4 border-2 border-purple-200 shadow-md">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-purple-900 text-sm mb-1">Grok AI Insight</h3>
              <p className="text-purple-800 text-xs">
                Express your interest in any circuit below. Our AI will customize the journey to match your preferences, fitness level, and spiritual goals.
              </p>
            </div>
          </div>
        </div>

        {/* Interest Counter */}
        {interestedCircuits.size > 0 && (
          <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-green-600 fill-current" />
                <span className="text-sm font-semibold text-green-900">
                  {interestedCircuits.size} circuit{interestedCircuits.size !== 1 ? 's' : ''} marked
                </span>
              </div>
              <button
                onClick={() => navigate('/devotional/my-interests')}
                className="text-xs text-green-700 font-semibold underline"
              >
                View All
              </button>
            </div>
          </div>
        )}

        {/* THE 12 SACRED CIRCUITS */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            Explore Sacred Circuits
          </h2>

          <div className="space-y-4">
            {sacredCircuits.map((circuit) => (
              <div
                key={circuit.id}
                className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-gray-100"
              >
                {/* Badge (if exists) */}
                {circuit.badge && (
                  <div className="mb-3">
                    <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-yellow-900 rounded-full text-xs font-bold inline-flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" />
                      {circuit.badge}
                    </span>
                  </div>
                )}

                {/* Header Row */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-5xl flex-shrink-0">{circuit.icon}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {circuit.name}
                    </h3>
                    <p className="text-sm text-orange-600 font-semibold mb-2">
                      {circuit.deity}
                    </p>
                    <p className="text-sm text-gray-600">
                      {circuit.description}
                    </p>
                  </div>
                </div>

                {/* Metadata Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {/* Temple Count (if applicable) */}
                  {circuit.templeCount > 0 && (
                    <div className="bg-gray-50 rounded-xl p-3">
                      <div className="text-xs text-gray-600 mb-1">Temples</div>
                      <div className="text-lg font-bold text-gray-900">
                        {circuit.templeCount}
                      </div>
                    </div>
                  )}

                  {/* Geographic Scope */}
                  <div className="bg-gray-50 rounded-xl p-3">
                    <div className="text-xs text-gray-600 mb-1">Scope</div>
                    <div className="text-sm font-semibold text-gray-900">
                      {circuit.geographicScope}
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="bg-gray-50 rounded-xl p-3">
                    <div className="text-xs text-gray-600 mb-1">Duration</div>
                    <div className="text-sm font-semibold text-gray-900 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {circuit.duration}
                    </div>
                  </div>

                  {/* Difficulty */}
                  <div className="bg-gray-50 rounded-xl p-3">
                    <div className="text-xs text-gray-600 mb-1">Difficulty</div>
                    <div>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(circuit.difficulty)}`}>
                        {circuit.difficulty}
                      </span>
                    </div>
                  </div>
                </div>

                {/* States (if multi-state) */}
                {circuit.states && circuit.states.length > 0 && (
                  <div className="mb-4 bg-orange-50 rounded-xl p-3">
                    <div className="text-xs font-semibold text-orange-900 mb-2 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      States Covered:
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {circuit.states.slice(0, 5).map((state, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-white px-2 py-1 rounded-full text-gray-700"
                        >
                          {state}
                        </span>
                      ))}
                      {circuit.states.length > 5 && (
                        <span className="text-xs text-orange-700 font-semibold px-2 py-1">
                          +{circuit.states.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {/* Interest Button */}
                  <button
                    onClick={() => handleInterest(circuit.id, circuit.name)}
                    className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                      interestedCircuits.has(circuit.id)
                        ? 'bg-pink-500 text-white'
                        : 'bg-gray-100 text-gray-400 hover:bg-pink-100 hover:text-pink-500'
                    }`}
                    aria-label={interestedCircuits.has(circuit.id) ? 'Remove interest' : 'Mark interest'}
                  >
                    <Heart className={`w-5 h-5 ${interestedCircuits.has(circuit.id) ? 'fill-current' : ''}`} />
                  </button>

                  {/* View Details Button */}
                  <button
                    onClick={() => {
                      // Navigate to circuit detail - can be implemented with onNavigateToCircuit prop if needed
                      console.log('Navigate to circuit:', circuit.id);
                    }}
                    className={`flex-1 bg-gradient-to-r ${circuit.gradient} text-white rounded-full h-12 flex items-center justify-center gap-2 font-semibold hover:shadow-lg transition-all`}
                  >
                    <Eye className="w-4 h-4" />
                    Explore Circuit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Info Footer */}
        <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-3xl p-5 shadow-lg border-2 border-blue-300">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-base text-blue-900 mb-2">
                About Sacred Circuits
              </h3>
              <p className="text-sm text-blue-800 mb-2">
                These 12 circuits represent the most revered pilgrimage paths in Hindu spirituality. Each circuit is curated by our spiritual experts and can be customized to your needs.
              </p>
              <p className="text-sm text-blue-800">
                All temple names, routes, and itineraries are admin-managed to ensure authenticity and accuracy.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Interest Confirmation Modal */}
      {showInterestModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-6 animate-fade-in">
          <div className="bg-white rounded-3xl p-6 max-w-sm shadow-2xl animate-scale-in">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Interest Noted!
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Your interest in <span className="font-semibold text-orange-600">{selectedCircuitName}</span> has been recorded.
              </p>
              <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-3 mb-4">
                <div className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-purple-800 text-left">
                    Our Grok AI will analyze your preferences and customize this circuit based on your fitness level, time availability, and spiritual goals. We'll reach out shortly!
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowInterestModal(false)}
                className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full h-11 font-semibold hover:shadow-lg transition-all"
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      )}

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
