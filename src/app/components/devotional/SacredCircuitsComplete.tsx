import { useState } from 'react';
import {
  ChevronLeft,
  MapPin,
  Calendar,
  TrendingUp,
  Users,
  Star,
  Sparkles,
  Eye,
  ChevronRight,
  Check,
  Heart,
  Clock,
  Mountain,
  Zap,
  Diamond,
  ListChecks,
  Info,
  Send
} from 'lucide-react';

interface SacredCircuitsCompleteProps {
  onBack?: () => void;
}

interface CircuitData {
  id: string;
  name: string;
  deity: string;
  icon: string;
  templeCount: number | string;
  states: string;
  duration: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging' | 'Very Challenging';
  description: string;
  gradient: string;
  tag?: string;
  type: 'specific' | 'functional';
}

export default function SacredCircuitsComplete({ onBack }: SacredCircuitsCompleteProps) {
  const [showAIModal, setShowAIModal] = useState(false);
  const [aiCustomizationRequest, setAiCustomizationRequest] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [interestedCircuits, setInterestedCircuits] = useState<Set<string>>(new Set());

  // THE 8 SPECIFIC PILGRIMAGE CIRCUITS (Exact Data as Provided)
  const specificCircuits: CircuitData[] = [
    {
      id: '108-divya-desams',
      name: '108 Divya Desams',
      deity: 'Lord Vishnu',
      icon: '🪷',
      templeCount: 108,
      states: 'TN, Kerala, Gujarat, UP',
      duration: '45-60 days',
      difficulty: 'Moderate',
      description: 'Sacred Vishnu temples sung by Alvars.',
      gradient: 'from-green-600 to-emerald-600',
      type: 'specific'
    },
    {
      id: '12-jyotirlingas',
      name: '12 Jyotirlingas',
      deity: 'Lord Shiva',
      icon: '🕉️',
      templeCount: 12,
      states: 'Gujarat, Maharashtra, MP, UP, UK',
      duration: '15-20 days',
      difficulty: 'Moderate',
      description: 'Divine Shiva lingas across India.',
      gradient: 'from-purple-600 to-pink-600',
      tag: 'Most Popular',
      type: 'specific'
    },
    {
      id: '51-shakti-peethas',
      name: '51 Shakti Peethas',
      deity: 'Goddess Shakti',
      icon: '🔱',
      templeCount: 51,
      states: 'Pan-India & Nepal',
      duration: '30-40 days',
      difficulty: 'Challenging',
      description: "Where Sati's body parts fell.",
      gradient: 'from-red-600 to-pink-600',
      type: 'specific'
    },
    {
      id: 'pancharama-kshetras',
      name: 'Pancharama Kshetras',
      deity: 'Lord Shiva',
      icon: '🛕',
      templeCount: 5,
      states: 'Andhra Pradesh',
      duration: '3-4 days',
      difficulty: 'Easy',
      description: 'Five ancient Shiva temples in AP.',
      gradient: 'from-blue-600 to-cyan-600',
      type: 'specific'
    },
    {
      id: 'ashtavinayak',
      name: 'Ashtavinayak',
      deity: 'Lord Ganesha',
      icon: '🐘',
      templeCount: 8,
      states: 'Maharashtra',
      duration: '2-3 days',
      difficulty: 'Easy',
      description: 'Eight Ganesha temples near Pune.',
      gradient: 'from-orange-600 to-yellow-600',
      tag: 'Family Favorite',
      type: 'specific'
    },
    {
      id: 'navagraha-temples',
      name: 'Navagraha Temples',
      deity: 'Nine Planets',
      icon: '🌟',
      templeCount: 9,
      states: 'Tamil Nadu',
      duration: '2 days',
      difficulty: 'Easy',
      description: 'Nine temples for planetary deities.',
      gradient: 'from-indigo-600 to-purple-600',
      tag: 'Senior Friendly',
      type: 'specific'
    },
    {
      id: 'char-dham-yatra',
      name: 'Char Dham Yatra',
      deity: 'Multi-Deity',
      icon: '⛰️',
      templeCount: 4,
      states: 'Uttarakhand',
      duration: '10-12 days',
      difficulty: 'Very Challenging',
      description: 'Badrinath, Kedarnath, Gangotri, Yamunotri.',
      gradient: 'from-blue-700 to-cyan-600',
      tag: 'Himalayan',
      type: 'specific'
    },
    {
      id: 'sapta-puri',
      name: 'Sapta Puri',
      deity: 'Liberation Cities',
      icon: '🏛️',
      templeCount: 7,
      states: 'Pan-India',
      duration: '15-20 days',
      difficulty: 'Moderate',
      description: 'Seven sacred cities for Moksha.',
      gradient: 'from-yellow-600 to-orange-600',
      type: 'specific'
    }
  ];

  // THE 3 NEW FUNCTIONAL CARDS
  const functionalCircuits: CircuitData[] = [
    {
      id: 'local-devotional',
      name: 'Local Devotional Circuits',
      deity: 'Location Based',
      icon: '📍',
      templeCount: 'Varies',
      states: 'Your District',
      duration: '1-2 days',
      difficulty: 'Easy',
      description: 'Explore sacred sites specific to your current district or location.',
      gradient: 'from-teal-600 to-green-600',
      tag: 'Location Based',
      type: 'functional'
    },
    {
      id: 'hidden-gems',
      name: 'Hidden Gems',
      deity: 'Ancient Heritage',
      icon: '💎',
      templeCount: 'Curated',
      states: 'Pan-India',
      duration: 'Flexible',
      difficulty: 'Easy',
      description: 'Discover least-explored ancient temples with rich history (1000+ years).',
      gradient: 'from-purple-700 to-pink-600',
      tag: 'Exclusive',
      type: 'functional'
    },
    {
      id: 'admin-defined',
      name: 'Admin Defined Circuits',
      deity: 'Curated Experiences',
      icon: '⭐',
      templeCount: 'Custom',
      states: 'Multiple',
      duration: 'Custom',
      difficulty: 'Easy',
      description: 'Special circuits curated by tour experts.',
      gradient: 'from-gray-700 to-slate-600',
      tag: 'Recommended',
      type: 'functional'
    }
  ];

  // Combine all circuits (8 specific + 3 functional = 11 circuits + 1 AI feature = 12 total sub-categories)
  const allCircuits = [...specificCircuits, ...functionalCircuits];

  const handleInterest = (circuitId: string) => {
    setInterestedCircuits(prev => {
      const newSet = new Set(prev);
      if (newSet.has(circuitId)) {
        newSet.delete(circuitId);
      } else {
        newSet.add(circuitId);
      }
      return newSet;
    });
  };

  const handleAIRequest = () => {
    if (aiCustomizationRequest.trim()) {
      setShowSuccessMessage(true);
      setShowAIModal(false);
      setAiCustomizationRequest('');
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-100 text-green-700';
      case 'Moderate':
        return 'bg-yellow-100 text-yellow-700';
      case 'Challenging':
        return 'bg-orange-100 text-orange-700';
      case 'Very Challenging':
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
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
            <span className="text-4xl">🕉️</span>
          </div>
          <h1 className="text-white text-2xl font-bold mb-2">Sacred Circuits</h1>
          <p className="text-white/90 text-sm">12 Divine Pilgrimage Journeys</p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-3 mt-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
            <div className="text-2xl mb-1">🛕</div>
            <div className="text-white text-xs font-semibold">11 Circuits</div>
            <div className="text-white/80 text-xs">+ AI Custom</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
            <div className="text-2xl mb-1">📍</div>
            <div className="text-white text-xs font-semibold">Pan-India</div>
            <div className="text-white/80 text-xs">Coverage</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
            <div className="text-2xl mb-1">⭐</div>
            <div className="text-white text-xs font-semibold">Expert</div>
            <div className="text-white/80 text-xs">Curated</div>
          </div>
        </div>
      </header>

      <main className="px-6 -mt-4 space-y-6">
        {/* Success Message (after AI request) */}
        {showSuccessMessage && (
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-3xl p-5 shadow-xl animate-fade-in">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-1">Interest Noted!</h3>
                <p className="text-sm text-white/90">
                  Your interest is noted and will reach you shortly. Customization will be done with the help of <span className="font-bold">Grok AI</span>.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Interest Counter */}
        {interestedCircuits.size > 0 && (
          <div className="bg-gradient-to-r from-pink-100 to-purple-100 border-2 border-pink-300 rounded-3xl p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-pink-600 fill-current" />
                <span className="text-sm font-semibold text-pink-900">
                  {interestedCircuits.size} circuit{interestedCircuits.size !== 1 ? 's' : ''} marked
                </span>
              </div>
              <button className="text-xs text-pink-700 font-semibold underline">
                View All
              </button>
            </div>
          </div>
        )}

        {/* THE 11 SACRED CIRCUITS GRID */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Explore Sacred Circuits</h2>
            <Info className="w-5 h-5 text-gray-400" />
          </div>

          <div className="space-y-4">
            {allCircuits.map((circuit) => (
              <div
                key={circuit.id}
                className={`bg-gradient-to-r ${circuit.gradient} rounded-3xl p-6 shadow-xl transform transition-all hover:scale-[1.02] cursor-pointer relative overflow-hidden`}
              >
                {/* Tag */}
                {circuit.tag && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-xs font-bold px-3 py-1 rounded-full shadow-md backdrop-blur-sm">
                      {circuit.tag}
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0 text-3xl backdrop-blur-sm">
                    {circuit.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white text-xl font-bold mb-1">{circuit.name}</h3>
                    <p className="text-white/90 text-sm">{circuit.deity}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/90 text-sm mb-4 leading-relaxed">
                  {circuit.description}
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
                    <div className="flex items-center gap-2 text-white/80 text-xs mb-1">
                      <MapPin className="w-3 h-3" />
                      <span className="font-semibold">Temples</span>
                    </div>
                    <div className="text-white text-lg font-bold">
                      {circuit.templeCount}
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
                    <div className="flex items-center gap-2 text-white/80 text-xs mb-1">
                      <Clock className="w-3 h-3" />
                      <span className="font-semibold">Duration</span>
                    </div>
                    <div className="text-white text-lg font-bold">
                      {circuit.duration}
                    </div>
                  </div>
                </div>

                {/* Location & Difficulty */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-white/90 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{circuit.states}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(circuit.difficulty)} bg-white`}>
                    {circuit.difficulty}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleInterest(circuit.id);
                    }}
                    className={`flex-1 h-11 rounded-full flex items-center justify-center gap-2 font-semibold transition-all ${
                      interestedCircuits.has(circuit.id)
                        ? 'bg-white text-gray-900'
                        : 'bg-white/20 text-white backdrop-blur-sm hover:bg-white/30'
                    }`}
                  >
                    <Heart
                      className={`w-4 h-4 ${interestedCircuits.has(circuit.id) ? 'fill-current text-pink-600' : ''}`}
                    />
                    {interestedCircuits.has(circuit.id) ? 'Interested' : 'Mark Interest'}
                  </button>
                  <button className="w-11 h-11 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all">
                    <Eye className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 12TH CARD: GROK AI CUSTOMIZATION FEATURE */}
        <section>
          <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 rounded-3xl p-6 shadow-2xl border-4 border-yellow-400 relative overflow-hidden">
            {/* Sparkle decorations */}
            <div className="absolute top-4 right-4 text-yellow-400 opacity-50">
              <Sparkles className="w-8 h-8" />
            </div>
            <div className="absolute bottom-4 left-4 text-yellow-400 opacity-30">
              <Sparkles className="w-6 h-6" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Sparkles className="w-8 h-8 text-purple-900" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-white text-2xl font-bold">Customize Your Yatra</h3>
                    <span className="px-2 py-1 bg-yellow-400 text-purple-900 rounded-full text-xs font-bold">
                      AI Powered
                    </span>
                  </div>
                  <p className="text-purple-200 text-sm">
                    Powered by Grok AI - Your Personal Pilgrimage Planner
                  </p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-4">
                <p className="text-white text-sm mb-3">
                  Can't find the perfect circuit? Let Grok AI create a personalized pilgrimage based on your preferences, time, and spiritual goals.
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs text-purple-200">
                  <div className="flex items-center gap-2">
                    <Zap className="w-3 h-3 text-yellow-400" />
                    <span>Custom Routes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3 text-yellow-400" />
                    <span>Flexible Duration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mountain className="w-3 h-3 text-yellow-400" />
                    <span>Fitness Adapted</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-3 h-3 text-yellow-400" />
                    <span>Expert Curated</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => setShowAIModal(true)}
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-purple-900 rounded-full h-14 flex items-center justify-center gap-2 font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              >
                <Sparkles className="w-5 h-5" />
                Request AI Customization
                <ChevronRight className="w-5 h-5" />
              </button>

              <p className="text-center text-purple-300 text-xs mt-3">
                🔒 Your preferences are private and secure
              </p>
            </div>
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
                These 11 circuits represent the most revered pilgrimage paths in Hindu spirituality. Each circuit is curated by spiritual experts and can be customized to your needs.
              </p>
              <p className="text-sm text-blue-800">
                All temple names, routes, and itineraries are admin-managed to ensure authenticity and accuracy. Use the Grok AI feature for personalized recommendations.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* AI Customization Modal */}
      {showAIModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-6 animate-fade-in">
          <div className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-3xl p-6 max-w-md shadow-2xl animate-scale-in border-4 border-yellow-400">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-purple-900" />
                </div>
                <div>
                  <h3 className="text-white text-xl font-bold">Grok AI</h3>
                  <p className="text-purple-300 text-xs">Pilgrimage Customization</p>
                </div>
              </div>
              <button
                onClick={() => setShowAIModal(false)}
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="mb-4">
              <p className="text-white text-sm mb-4">
                Tell us about your ideal pilgrimage. Include details like:
              </p>
              <ul className="text-purple-200 text-xs space-y-1 mb-4 ml-4">
                <li>• Preferred deities or spiritual traditions</li>
                <li>• Available time (days)</li>
                <li>• Physical fitness level</li>
                <li>• Budget range</li>
                <li>• Starting location</li>
                <li>• Special requirements (senior-friendly, etc.)</li>
              </ul>

              <textarea
                value={aiCustomizationRequest}
                onChange={(e) => setAiCustomizationRequest(e.target.value)}
                placeholder="Example: I want a 7-day Shiva pilgrimage in South India, moderate difficulty, starting from Chennai..."
                className="w-full h-32 bg-white/10 border-2 border-purple-400 rounded-2xl p-4 text-white placeholder:text-purple-300 text-sm focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 focus:outline-none resize-none"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => setShowAIModal(false)}
                className="flex-1 bg-white/10 text-white rounded-full h-11 font-semibold hover:bg-white/20 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={handleAIRequest}
                disabled={!aiCustomizationRequest.trim()}
                className="flex-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-purple-900 rounded-full h-11 flex items-center justify-center gap-2 font-bold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
                Submit Request
              </button>
            </div>

            <p className="text-center text-purple-300 text-xs mt-3">
              Grok AI will analyze your request and create a personalized itinerary
            </p>
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
