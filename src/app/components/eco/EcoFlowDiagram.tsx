import { motion } from 'motion/react';
import { ArrowRight, ArrowDown } from 'lucide-react';

export function EcoFlowDiagram() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            🌿 Eco-Tourism User Flow Diagram
          </h1>
          <p className="text-xl text-gray-300 font-semibold">
            Complete journey from discovery to deal notification
          </p>
        </div>

        {/* Flow Type Selector */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl border-3 border-green-400 p-6 text-center">
            <div className="text-6xl mb-3">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">Discovery Flow</h3>
            <p className="text-base text-green-100 font-semibold">Browse → Research → Save</p>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl border-3 border-blue-400 p-6 text-center">
            <div className="text-6xl mb-3">💰</div>
            <h3 className="text-2xl font-bold text-white mb-2">Deal Matching Flow</h3>
            <p className="text-base text-blue-100 font-semibold">Interest → Match → Notify</p>
          </div>
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl border-3 border-purple-400 p-6 text-center">
            <div className="text-6xl mb-3">👨‍💼</div>
            <h3 className="text-2xl font-bold text-white mb-2">Admin Flow</h3>
            <p className="text-base text-purple-100 font-semibold">Create → Publish → Track</p>
          </div>
        </div>

        {/* Main User Flow */}
        <div className="bg-gray-800 rounded-3xl border-3 border-gray-700 p-10 mb-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            📱 Complete User Journey
          </h2>

          <div className="space-y-8">
            {/* Step 1: Landing */}
            <FlowStep
              number={1}
              icon="🏠"
              title="Eco-Tourism Landing Page"
              description="User arrives at eco-tourism category"
              elements={[
                'View 6 sub-categories',
                'See "Admin-Curated Experiences" banner',
                'Browse category cards',
              ]}
              actions={['Tap Google Search', 'Tap YouTube Browse', 'Tap sub-category card']}
              color="from-green-600 to-emerald-600"
            />

            <FlowArrow />

            {/* Step 2: Research */}
            <FlowStep
              number={2}
              icon="🔍"
              title="External Research"
              description="User discovers destinations externally"
              elements={[
                'Opens Google Search in new tab',
                'Watches YouTube videos',
                'Gets inspired by real destinations',
              ]}
              actions={['Research complete', 'Return to app']}
              color="from-blue-600 to-cyan-600"
            />

            <FlowArrow />

            {/* Step 3: Sub-Category */}
            <FlowStep
              number={3}
              icon="🐅"
              title="Sub-Category View"
              description="User selects a category (e.g., National Parks)"
              elements={[
                'See "Admin-Added Results" placeholder cards',
                'View "Admin-Published Experiences"',
                'Find Google/YouTube buttons again',
              ]}
              actions={['Save to Wishlist', 'Mark Interested', 'Set Preferences']}
              color="from-amber-600 to-orange-600"
            />

            <FlowArrow />

            {/* Step 4: Interest Capture */}
            <FlowStep
              number={4}
              icon="❤️"
              title="Interest Capture Modal"
              description="User saves their interest"
              elements={[
                '❤️ Save to Wishlist (toggle)',
                '⭐ Mark Interested (toggle)',
                'Add optional notes',
                '🔔 Enable deal notifications',
              ]}
              actions={['Submit interest', 'See confirmation']}
              color="from-pink-600 to-rose-600"
            />

            <FlowArrow />

            {/* Step 5: Preferences */}
            <FlowStep
              number={5}
              icon="⚙️"
              title="Budget & Preferences"
              description="User sets travel preferences"
              elements={[
                'Budget Range (4 options)',
                'Travel Dates (Fixed/Flexible)',
                'Trip Duration (3 options)',
                'Stay Style (multi-select)',
                'Safety toggles',
              ]}
              actions={['Save preferences', 'Activate deal alert']}
              color="from-purple-600 to-indigo-600"
            />

            <FlowArrow />

            {/* Step 6: Grok AI */}
            <FlowStep
              number={6}
              icon="🤖"
              title="Grok AI Activation"
              description="System processes user interests"
              elements={[
                'Interest saved to database',
                'Preferences recorded',
                'Grok AI monitoring activated',
                'User sees confirmation message',
              ]}
              actions={['Wait for admin to publish deals']}
              color="from-teal-600 to-cyan-600"
              note="User sees: 'We'll notify you when admin-published eco-deals match your preferences'"
            />

            <FlowArrow />

            {/* Step 7: Admin Side */}
            <div className="bg-yellow-900/30 border-3 border-dashed border-yellow-600 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4 text-center">
                👨‍💼 ADMIN SIDE PROCESS
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-900 rounded-xl p-4 border-2 border-gray-700">
                  <p className="text-4xl mb-2 text-center">📝</p>
                  <p className="text-base text-white font-bold mb-1 text-center">Admin Reviews</p>
                  <p className="text-sm text-gray-400 font-semibold text-center">Views user interests & preferences</p>
                </div>
                <div className="bg-gray-900 rounded-xl p-4 border-2 border-gray-700">
                  <p className="text-4xl mb-2 text-center">💰</p>
                  <p className="text-base text-white font-bold mb-1 text-center">Creates Deals</p>
                  <p className="text-sm text-gray-400 font-semibold text-center">Matches real destinations to interests</p>
                </div>
                <div className="bg-gray-900 rounded-xl p-4 border-2 border-gray-700">
                  <p className="text-4xl mb-2 text-center">🚀</p>
                  <p className="text-base text-white font-bold mb-1 text-center">Publishes</p>
                  <p className="text-sm text-gray-400 font-semibold text-center">Triggers Grok AI notifications</p>
                </div>
              </div>
            </div>

            <FlowArrow />

            {/* Step 8: Notification */}
            <FlowStep
              number={8}
              icon="🔔"
              title="Deal Notification"
              description="User receives matching deal alert"
              elements={[
                'WhatsApp/SMS/Email notification',
                'Deal details with real destination',
                'Budget match confirmed',
                'Action: View Deal / Book Now',
              ]}
              actions={['Open app', 'View deal details', 'Proceed to booking']}
              color="from-green-600 to-lime-600"
              note="This is where placeholder becomes real destination"
            />

            <FlowArrow />

            {/* Step 9: Future */}
            <div className="bg-gray-700/50 border-3 border-dashed border-gray-500 rounded-2xl p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-400 mb-2">
                🚧 Future: Booking Flow (Out of Scope)
              </h3>
              <p className="text-base text-gray-500 font-semibold">
                Trip details → Payment → Confirmation
              </p>
            </div>
          </div>
        </div>

        {/* Alternative Flows */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Quick Save Flow */}
          <div className="bg-gray-800 rounded-2xl border-3 border-gray-700 p-6">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-3xl">⚡</span>
              Quick Save Flow
            </h3>
            <div className="space-y-3">
              {[
                '1. User lands on eco-tourism',
                '2. Taps "Save Interest" immediately',
                '3. Modal opens with minimal fields',
                '4. Skips preferences (can set later)',
                '5. Interest saved, returns to browsing',
              ].map((step, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">{idx + 1}</span>
                  </div>
                  <p className="text-base text-gray-300 font-semibold">{step.substring(3)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Research Flow */}
          <div className="bg-gray-800 rounded-2xl border-3 border-gray-700 p-6">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-3xl">🔬</span>
              Detailed Research Flow
            </h3>
            <div className="space-y-3">
              {[
                '1. User opens Google Search from app',
                '2. Researches multiple destinations',
                '3. Watches YouTube videos',
                '4. Takes screenshots/notes externally',
                '5. Returns to app with clear preferences',
                '6. Fills detailed interest form',
                '7. Sets specific budget and dates',
              ].map((step, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">{idx + 1}</span>
                  </div>
                  <p className="text-base text-gray-300 font-semibold">{step.substring(3)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decision Points */}
        <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl border-3 border-orange-400 p-8">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            🔀 Key Decision Points
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white/20">
              <h4 className="text-xl font-bold text-white mb-3">Browse vs. Save</h4>
              <p className="text-base text-orange-100 font-semibold">
                User decides whether to continue browsing or save interest immediately
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white/20">
              <h4 className="text-xl font-bold text-white mb-3">Google vs. YouTube</h4>
              <p className="text-base text-orange-100 font-semibold">
                Choice of research platform based on preference (text vs. video)
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white/20">
              <h4 className="text-xl font-bold text-white mb-3">Notify Channel</h4>
              <p className="text-base text-orange-100 font-semibold">
                WhatsApp, SMS, or Email selection for deal alerts
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface FlowStepProps {
  number: number;
  icon: string;
  title: string;
  description: string;
  elements: string[];
  actions: string[];
  color: string;
  note?: string;
}

function FlowStep({ number, icon, title, description, elements, actions, color, note }: FlowStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: number * 0.1 }}
      className="bg-gray-900 rounded-2xl border-3 border-gray-700 overflow-hidden"
    >
      <div className={`bg-gradient-to-r ${color} px-6 py-4 flex items-center gap-4`}>
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-bold text-2xl">
          {number}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-1">
            <span className="text-4xl">{icon}</span>
            <h3 className="text-2xl font-bold text-white">{title}</h3>
          </div>
          <p className="text-base text-white/90 font-semibold">{description}</p>
        </div>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-bold text-green-400 mb-3">UI Elements:</h4>
            <ul className="space-y-2">
              {elements.map((element, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base text-gray-300 font-semibold">{element}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-blue-400 mb-3">User Actions:</h4>
            <ul className="space-y-2">
              {actions.map((action, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base text-gray-300 font-semibold">{action}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {note && (
          <div className="mt-4 bg-yellow-900/30 border-2 border-yellow-600 rounded-xl p-4">
            <p className="text-sm text-yellow-300 font-bold">💡 Note: {note}</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

function FlowArrow() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center">
        <ArrowDown className="h-12 w-12 text-gray-600" />
        <div className="w-0.5 h-8 bg-gray-600"></div>
      </div>
    </div>
  );
}
