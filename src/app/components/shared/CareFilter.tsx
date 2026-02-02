import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, X, Heart, Accessibility, Stethoscope, Utensils, Brain, Ear } from 'lucide-react';

interface CareFilterProps {
  onFilterChange?: (filters: string[]) => void;
  className?: string;
}

const careFilters = [
  { id: 'senior-friendly', label: 'Senior-Friendly Only', emoji: '👴', icon: Heart },
  { id: 'wheelchair-accessible', label: 'Wheelchair Accessible', emoji: '♿', icon: Accessibility },
  { id: 'medical-support', label: 'Medical Support Available', emoji: '🏥', icon: Stethoscope },
  { id: 'sensory-friendly', label: 'Sensory-Friendly Options', emoji: '🧠', icon: Brain },
  { id: 'special-dietary', label: 'Special Dietary Accommodations', emoji: '🍽️', icon: Utensils },
  { id: 'cognitive-support', label: 'Cognitive Support Available', emoji: '💭', icon: Ear },
];

export function CareFilter({ onFilterChange, className = '' }: CareFilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const toggleFilter = (filterId: string) => {
    const newFilters = selectedFilters.includes(filterId)
      ? selectedFilters.filter(id => id !== filterId)
      : [...selectedFilters, filterId];
    
    setSelectedFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const clearFilters = () => {
    setSelectedFilters([]);
    onFilterChange?.([]);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Filter Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-4 py-2 rounded-2xl font-semibold text-sm transition-all ${
          selectedFilters.length > 0
            ? 'bg-gradient-to-r from-teal-500 to-green-500 text-white shadow-lg'
            : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-teal-300'
        }`}
      >
        <Filter className="w-4 h-4" />
        <span>Care & Accessibility</span>
        {selectedFilters.length > 0 && (
          <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs font-bold">
            {selectedFilters.length}
          </span>
        )}
      </button>

      {/* Filter Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 z-40"
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full mt-2 right-0 w-80 bg-white rounded-3xl shadow-2xl border-2 border-teal-200 p-6 z-50"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xl">♿</span>
                  <h3 className="font-bold text-lg text-teal-900">Care & Accessibility Filter</h3>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <X className="w-4 h-4 text-gray-600" />
                </button>
              </div>

              <p className="text-xs text-gray-600 mb-4">
                Filter destinations by special care and accessibility features
              </p>

              {/* Filter Options */}
              <div className="space-y-3 mb-4">
                {careFilters.map((filter) => {
                  const isSelected = selectedFilters.includes(filter.id);
                  const Icon = filter.icon;
                  return (
                    <button
                      key={filter.id}
                      onClick={() => toggleFilter(filter.id)}
                      className={`w-full flex items-center gap-3 p-3 rounded-2xl transition-all border-2 ${
                        isSelected
                          ? 'bg-gradient-to-r from-teal-500 to-green-500 text-white border-teal-500 shadow-md'
                          : 'bg-gray-50 border-gray-200 hover:bg-teal-50 hover:border-teal-300'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        isSelected ? 'bg-white/20' : 'bg-white'
                      }`}>
                        <Icon className={`w-5 h-5 ${isSelected ? 'text-white' : 'text-teal-600'}`} />
                      </div>
                      <div className="flex-1 text-left">
                        <p className={`text-sm font-semibold ${isSelected ? 'text-white' : 'text-gray-800'}`}>
                          {filter.label}
                        </p>
                      </div>
                      {isSelected && (
                        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Clear All Button */}
              {selectedFilters.length > 0 && (
                <button
                  onClick={clearFilters}
                  className="w-full py-3 rounded-2xl bg-gray-100 text-gray-700 font-semibold text-sm hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                >
                  <X className="w-4 h-4" />
                  Clear All Filters
                </button>
              )}

              {/* Apply Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="w-full mt-3 py-3 rounded-2xl bg-gradient-to-r from-teal-500 to-green-500 text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all"
              >
                Apply Filters
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

// Mobile Bottom Sheet Version
export function CareFilterMobile({ onFilterChange, className = '' }: CareFilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const toggleFilter = (filterId: string) => {
    const newFilters = selectedFilters.includes(filterId)
      ? selectedFilters.filter(id => id !== filterId)
      : [...selectedFilters, filterId];
    
    setSelectedFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const clearFilters = () => {
    setSelectedFilters([]);
    onFilterChange?.([]);
  };

  return (
    <div className={className}>
      {/* Filter Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-4 py-2 rounded-2xl font-semibold text-sm transition-all ${
          selectedFilters.length > 0
            ? 'bg-gradient-to-r from-teal-500 to-green-500 text-white shadow-lg'
            : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-teal-300'
        }`}
      >
        <Filter className="w-4 h-4" />
        <span>Care Filter</span>
        {selectedFilters.length > 0 && (
          <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs font-bold">
            {selectedFilters.length}
          </span>
        )}
      </button>

      {/* Bottom Sheet */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 z-40"
            />

            {/* Sheet */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl p-6 z-50 max-h-[80vh] overflow-y-auto"
            >
              {/* Handle */}
              <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4" />

              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xl">♿</span>
                  <h3 className="font-bold text-lg text-teal-900">Care & Accessibility Filter</h3>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center"
                >
                  <X className="w-4 h-4 text-gray-600" />
                </button>
              </div>

              <p className="text-xs text-gray-600 mb-4">
                Filter destinations by special care and accessibility features
              </p>

              {/* Filter Options */}
              <div className="space-y-3 mb-4">
                {careFilters.map((filter) => {
                  const isSelected = selectedFilters.includes(filter.id);
                  const Icon = filter.icon;
                  return (
                    <button
                      key={filter.id}
                      onClick={() => toggleFilter(filter.id)}
                      className={`w-full flex items-center gap-3 p-4 rounded-2xl transition-all border-2 ${
                        isSelected
                          ? 'bg-gradient-to-r from-teal-500 to-green-500 text-white border-teal-500 shadow-md'
                          : 'bg-gray-50 border-gray-200 active:bg-teal-50'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        isSelected ? 'bg-white/20' : 'bg-white'
                      }`}>
                        <Icon className={`w-6 h-6 ${isSelected ? 'text-white' : 'text-teal-600'}`} />
                      </div>
                      <div className="flex-1 text-left">
                        <p className={`text-sm font-semibold ${isSelected ? 'text-white' : 'text-gray-800'}`}>
                          {filter.label}
                        </p>
                      </div>
                      {isSelected && (
                        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Clear All Button */}
              {selectedFilters.length > 0 && (
                <button
                  onClick={clearFilters}
                  className="w-full py-4 rounded-2xl bg-gray-100 text-gray-700 font-semibold text-sm mb-3 flex items-center justify-center gap-2"
                >
                  <X className="w-4 h-4" />
                  Clear All Filters
                </button>
              )}

              {/* Apply Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-teal-500 to-green-500 text-white font-bold shadow-lg"
              >
                Apply Filters ({selectedFilters.length} selected)
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
