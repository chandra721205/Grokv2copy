import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, MapPin, Clock, TrendingUp, Sparkles, Sun, ArrowRight } from 'lucide-react';

interface SacredCircuit {
  id: string;
  name: string;
  icon: string;
  description: string;
  templeCount: number;
  statesCovered: number;
  approximateDuration: string;
  difficultyLevel: 'All Levels' | 'Senior-Friendly' | 'Moderate' | 'Challenging';
  bestSeason: string;
  isHiddenGem?: boolean;
  crowdLevel?: 'Low' | 'Medium' | 'High';
}

export default function SacredCircuitsListing() {
  const navigate = useNavigate();
  const [showHiddenGems, setShowHiddenGems] = useState(false);

  const circuits: SacredCircuit[] = [
    {
      id: '12-jyotirlingas',
      name: '12 Jyotirlingas',
      icon: '🕉️',
      description: 'Sacred abodes of Lord Shiva across India',
      templeCount: 12,
      statesCovered: 10,
      approximateDuration: '15-20 days',
      difficultyLevel: 'Moderate',
      bestSeason: 'Oct-Mar'
    },
    {
      id: '108-divya-desams',
      name: '108 Divya Desams',
      icon: '🌸',
      description: 'Sacred Vishnu temples mentioned in Tamil scriptures',
      templeCount: 108,
      statesCovered: 7,
      approximateDuration: '30-45 days',
      difficultyLevel: 'Challenging',
      bestSeason: 'Oct-Feb'
    },
    {
      id: '51-shakti-peethas',
      name: '51 Shakti Peethas',
      icon: '🔱',
      description: 'Sacred sites where body parts of Goddess Sati fell',
      templeCount: 51,
      statesCovered: 12,
      approximateDuration: '25-30 days',
      difficultyLevel: 'Moderate',
      bestSeason: 'Sep-Mar'
    },
    {
      id: 'panchabhuta-sthalams',
      name: 'Panchabhuta Sthalams',
      icon: '🔥',
      description: 'Five element temples of Lord Shiva',
      templeCount: 5,
      statesCovered: 2,
      approximateDuration: '5-7 days',
      difficultyLevel: 'All Levels',
      bestSeason: 'Oct-Mar'
    },
    {
      id: 'char-dham-yatra',
      name: 'Char Dham Yatra',
      icon: '⛰️',
      description: 'Four sacred pilgrimage sites in the Himalayas',
      templeCount: 4,
      statesCovered: 1,
      approximateDuration: '10-12 days',
      difficultyLevel: 'Challenging',
      bestSeason: 'May-Jun, Sep-Oct'
    },
    {
      id: 'sapta-puri',
      name: 'Sapta Puri',
      icon: '🏛️',
      description: 'Seven sacred cities that grant Moksha (liberation)',
      templeCount: 7,
      statesCovered: 5,
      approximateDuration: '12-15 days',
      difficultyLevel: 'All Levels',
      bestSeason: 'Oct-Mar'
    },
    {
      id: 'navagraha-temples',
      name: 'Navagraha Temples',
      icon: '🌟',
      description: 'Nine temples dedicated to the nine celestial bodies',
      templeCount: 9,
      statesCovered: 1,
      approximateDuration: '3-4 days',
      difficultyLevel: 'Senior-Friendly',
      bestSeason: 'All Year',
      isHiddenGem: true,
      crowdLevel: 'Medium'
    }
  ];

  const filteredCircuits = showHiddenGems 
    ? circuits 
    : circuits.filter(c => !c.isHiddenGem);

  const getDifficultyColor = (level: string) => {
    switch (level) {
      case 'All Levels':
      case 'Senior-Friendly':
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
      <header className="bg-gradient-to-r from-orange-600 to-pink-600 px-6 pt-12 pb-6 rounded-b-3xl">
        <button
          onClick={() => navigate(-1)}
          className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-4 focus:ring-2 focus:ring-white focus:outline-none hover:bg-white/30 transition-colors"
          aria-label="Go back"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <h1 className="text-white text-3xl font-bold mb-2">
          Sacred Circuits
        </h1>
        <p className="text-white/90 text-sm">
          Choose your spiritual path
        </p>
      </header>

      <main className="px-6 -mt-4 space-y-4">
        {/* Hidden Gems Toggle */}
        <div className="bg-white rounded-2xl p-4 shadow-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Sparkles className={`w-5 h-5 ${showHiddenGems ? 'text-purple-600' : 'text-gray-400'}`} />
              <div>
                <p className="text-sm font-semibold text-gray-900">Show Hidden Gems</p>
                <p className="text-xs text-gray-600">Discover less-crowded ancient circuits</p>
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

        {/* Circuit Cards */}
        <div className="space-y-4">
          {filteredCircuits.map((circuit) => (
            <button
              key={circuit.id}
              onClick={() => navigate(`/devotional/hindu-pilgrimage/circuits/${circuit.id}`)}
              className="w-full bg-white rounded-3xl p-5 shadow-lg hover:shadow-xl transition-all text-left focus:ring-2 focus:ring-orange-500 focus:outline-none active:scale-98"
            >
              {/* Icon and Title */}
              <div className="flex items-start gap-4 mb-3">
                <div className="text-4xl flex-shrink-0">{circuit.icon}</div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-lg mb-1 text-gray-900">
                    {circuit.name}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {circuit.description}
                  </p>
                </div>
                {circuit.isHiddenGem && (
                  <div className="flex-shrink-0">
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Hidden Gem
                    </span>
                  </div>
                )}
              </div>

              {/* Metadata */}
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {circuit.templeCount} temples • {circuit.statesCovered} states
                </span>
                <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {circuit.approximateDuration}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1 ${getDifficultyColor(circuit.difficultyLevel)}`}>
                  <TrendingUp className="w-3 h-3" />
                  {circuit.difficultyLevel}
                </span>
              </div>

              {/* Best Season */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <Sun className="w-4 h-4" />
                  <span>Best: {circuit.bestSeason}</span>
                </div>
                <div className="flex items-center gap-1 text-orange-600">
                  <span className="text-sm font-semibold">View Details</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Crowd Level for Hidden Gems */}
              {circuit.crowdLevel && (
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <div className={`w-2 h-2 rounded-full ${
                      circuit.crowdLevel === 'Low' ? 'bg-green-500' :
                      circuit.crowdLevel === 'Medium' ? 'bg-yellow-500' :
                      'bg-red-500'
                    }`} />
                    <span>Crowd Level: {circuit.crowdLevel}</span>
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Info Card */}
        <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-3xl p-5 shadow-lg border-2 border-blue-300">
          <div className="flex items-start gap-3">
            <div className="text-2xl flex-shrink-0">ℹ️</div>
            <div>
              <h3 className="font-bold text-base text-blue-900 mb-2">
                About Sacred Circuits
              </h3>
              <p className="text-sm text-blue-800 mb-2">
                Sacred circuits are curated pilgrimage paths that connect multiple temples based on ancient traditions, scriptures, and spiritual significance.
              </p>
              <p className="text-sm text-blue-800">
                Each circuit offers a complete spiritual journey with recommended visit order, travel notes, and difficulty assessments.
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
