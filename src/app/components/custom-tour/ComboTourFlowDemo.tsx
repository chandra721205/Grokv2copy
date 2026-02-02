import { useState } from 'react';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { ComboTourFlow } from './ComboTourFlow';

/**
 * DEMO COMPONENT: Complete Custom Combo Tour Flow
 * 
 * This component demonstrates the full multi-category combo tour feature with:
 * 
 * 1. Category Selection (Multi-select with 2-5 limit)
 * 2. Priority Assignment (Drag-to-reorder)
 * 3. Grok AI Suggestions (Complementary destinations)
 * 4. Combo Summary (Save/Book options)
 * 5. Custom Form (For Other/Accessibility categories)
 * 
 * Features:
 * - ✓ Multi-select checkboxes with visual feedback
 * - ✓ Selection counter (2-5 categories)
 * - ✓ Drag-and-drop priority assignment
 * - ✓ Priority 1 (Crown icon) designation
 * - ✓ AI-generated complementary suggestions
 * - ✓ Distance and duration calculations
 * - ✓ Add/remove suggestions to combo
 * - ✓ Estimated cost calculation
 * - ✓ Save to wishlist functionality
 * - ✓ Book now flow
 * - ✓ Ask Grok for tweaks
 * - ✓ Custom form for special categories
 * 
 * Visual Design:
 * - 24px rounded cards
 * - Purple/pink/orange gradients
 * - Mobile-first responsive
 * - Smooth animations
 * - Admin placeholder notation with brackets
 */
export function ComboTourFlowDemo() {
  const [showFlow, setShowFlow] = useState(false);
  const [demoStep, setDemoStep] = useState(1);

  const steps = [
    {
      number: 1,
      title: '🎯 Category Selection',
      description: 'Multi-select 2-5 categories with checkboxes',
      features: ['Tap to select/deselect', 'Selection counter', 'Min 2 / Max 5 validation', 'Visual feedback with rings']
    },
    {
      number: 2,
      title: '👑 Priority Assignment',
      description: 'Drag to reorder your priorities',
      features: ['Drag-and-drop interface', 'Priority 1 gets crown icon', 'Visual priority badges', 'Priority explanation']
    },
    {
      number: 3,
      title: '✨ Grok AI Suggestions',
      description: 'AI recommends complementary activities',
      features: ['Based on Priority 1 choice', 'Distance & duration info', 'Why Grok recommends', 'Add/remove suggestions']
    },
    {
      number: 4,
      title: '📋 Combo Summary',
      description: 'Review and book your custom combo',
      features: ['All selected activities', 'Estimated cost breakdown', 'Save to wishlist', 'Book now or ask Grok for tweaks']
    },
    {
      number: 5,
      title: '📝 Custom Form',
      description: 'For Other/Accessibility categories',
      features: ['Group size & preferences', 'Special needs input', 'Budget selection', 'Grok AI processing']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ffe5d4] via-[#ffd4e5] to-[#e5d4ff]">
      {!showFlow ? (
        <div className="px-6 py-12">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-[2rem] p-8 shadow-2xl mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-white text-3xl font-bold">Custom Combo Tour Flow</h1>
                <p className="text-white/90 text-sm">Complete multi-category tour builder</p>
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 mt-4">
              <p className="text-white text-sm leading-relaxed">
                <strong>NEW FEATURE:</strong> Create personalized combo tours by mixing 2-5 categories. 
                Grok AI suggests complementary destinations based on your priorities!
              </p>
            </div>
          </div>

          {/* Flow Steps */}
          <div className="space-y-4 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5-Step Flow</h2>
            {steps.map((step) => (
              <div
                key={step.number}
                className={`bg-white rounded-3xl p-6 shadow-lg transition-all ${
                  demoStep === step.number ? 'ring-4 ring-purple-400' : ''
                }`}
              >
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-sm text-gray-700">{step.description}</p>
                  </div>
                </div>
                <div className="ml-16">
                  <ul className="space-y-1.5">
                    {step.features.map((feature, idx) => (
                      <li key={idx} className="text-xs text-gray-600 flex items-start gap-2">
                        <span className="text-purple-600">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Start Demo Button */}
          <button
            onClick={() => setShowFlow(true)}
            className="w-full h-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-xl active:scale-95 flex items-center justify-center gap-3"
          >
            <Sparkles className="w-6 h-6" />
            <span>Start Complete Flow Demo</span>
          </button>

          {/* Features List */}
          <div className="mt-8 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl p-6 border-2 border-blue-300">
            <h3 className="text-lg font-bold text-blue-900 mb-4">✨ Key Features Implemented</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                'Multi-select category picker (2-5 limit)',
                'Drag-to-reorder priority system',
                'Priority 1 crown designation',
                'Grok AI complementary suggestions',
                'Distance & duration calculations',
                'Add/remove activities dynamically',
                'Estimated cost breakdown',
                'Save to wishlist functionality',
                'Book now payment flow',
                'Ask Grok for tweaks chat',
                'Custom form for special needs',
                'Admin placeholder notation'
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-xs text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Back to Demo Button */}
          <div className="fixed top-4 left-4 z-[60]">
            <button
              onClick={() => setShowFlow(false)}
              className="bg-white/90 backdrop-blur-sm text-purple-600 h-10 px-4 rounded-full font-semibold text-sm shadow-lg hover:bg-white transition-all flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Demo Info</span>
            </button>
          </div>

          {/* Actual Flow */}
          <ComboTourFlow
            isOpen={true}
            onClose={() => setShowFlow(false)}
          />
        </>
      )}
    </div>
  );
}
