import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft,
  ChevronDown,
  Info,
  Sparkles,
  TrendingUp,
  Check
} from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import {
  FlowPathIndicator,
  FlowEntryPoints,
  FlowConnectionIndicator,
  FlowMapVisualization
} from '@/app/components/essentials/FlowPathComponents';

export default function SelfDriveFlowsDocumentation() {
  const [activeFlow, setActiveFlow] = useState<'essentials' | 'custom-tour' | 'multi-category' | null>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [expandedSection, setExpandedSection] = useState<string | null>('overview');

  const documentationSections = [
    {
      id: 'overview',
      title: 'Flow Overview',
      icon: '📖',
      content: 'Three distinct paths to access self-drive vehicles'
    },
    {
      id: 'flow1',
      title: 'Flow 1: Travel Essentials',
      icon: '🚗',
      content: 'Direct vehicle rental from Travel Essentials Hub'
    },
    {
      id: 'flow2',
      title: 'Flow 2: Custom Tour',
      icon: '🎨',
      content: 'Integrated transport selection in tour builder'
    },
    {
      id: 'flow3',
      title: 'Flow 3: Multi-Category',
      icon: '🎪',
      content: 'Complex transport planning with multiple segments'
    }
  ];

  if (activeFlow) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#ffe5d4] via-[#ffd4e5] to-[#e5d4ff] pb-20">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 px-6 pt-12 pb-6 rounded-b-[2rem] shadow-xl sticky top-0 z-30">
          <div className="flex items-center gap-4 mb-4">
            <button 
              onClick={() => {
                setActiveFlow(null);
                setCurrentStep(1);
              }}
              className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
            >
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>
            <div className="flex-1">
              <h1 className="text-white text-xl font-bold">Flow Navigation</h1>
              <p className="text-white/90 text-sm">
                {activeFlow === 'essentials' && 'Travel Essentials Path'}
                {activeFlow === 'custom-tour' && 'Custom Tour Path'}
                {activeFlow === 'multi-category' && 'Multi-Category Path'}
              </p>
            </div>
          </div>
        </div>

        <div className="px-6 py-6">
          <FlowPathIndicator 
            currentStep={currentStep}
            flowType={activeFlow}
            onNavigate={(screen) => {
              console.log(`Navigate to screen: ${screen}`);
              // In real app, this would navigate to the actual screen
            }}
          />

          {/* Step Controls */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            <Button
              onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
              disabled={currentStep === 1}
              className="h-12 bg-white border-2 border-purple-300 text-purple-700 rounded-2xl font-semibold disabled:opacity-30"
            >
              ← Previous
            </Button>
            <Button
              onClick={() => setCurrentStep(Math.min(7, currentStep + 1))}
              disabled={currentStep === 7}
              className="h-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-semibold disabled:opacity-30"
            >
              Next →
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ffe5d4] via-[#ffd4e5] to-[#e5d4ff] pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 px-6 pt-12 pb-6 rounded-b-[2rem] shadow-xl sticky top-0 z-30">
        <div className="flex items-center gap-4 mb-4">
          <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div className="flex-1">
            <h1 className="text-white text-2xl font-bold">Self-Drive Flow Paths</h1>
            <p className="text-white/90 text-sm">Complete integration documentation</p>
          </div>
        </div>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* Summary Stats */}
        <div className="grid grid-cols-3 gap-3">
          <Card className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-4 border-2 border-orange-200">
            <div className="text-center">
              <p className="text-3xl font-bold text-orange-600 mb-1">3</p>
              <p className="text-xs text-gray-700 font-semibold">Entry Points</p>
            </div>
          </Card>
          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-4 border-2 border-purple-200">
            <div className="text-center">
              <p className="text-3xl font-bold text-purple-600 mb-1">5</p>
              <p className="text-xs text-gray-700 font-semibold">New Screens</p>
            </div>
          </Card>
          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-4 border-2 border-blue-200">
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600 mb-1">12</p>
              <p className="text-xs text-gray-700 font-semibold">Total Screens</p>
            </div>
          </Card>
        </div>

        {/* Flow Map */}
        <FlowMapVisualization />

        {/* Entry Points */}
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-4">Select a Flow Path</h2>
          <FlowEntryPoints onSelectFlow={(flow) => setActiveFlow(flow as any)} />
        </div>

        {/* Documentation Sections */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-gray-900">Detailed Documentation</h2>
          
          {documentationSections.map((section) => (
            <Card key={section.id} className="bg-white rounded-3xl overflow-hidden border-2 border-gray-200 shadow-lg">
              <button
                onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
                className="w-full p-5 flex items-center gap-4 text-left"
              >
                <span className="text-3xl">{section.icon}</span>
                <div className="flex-1">
                  <h3 className="font-bold text-sm text-gray-900 mb-1">{section.title}</h3>
                  <p className="text-xs text-gray-600">{section.content}</p>
                </div>
                <motion.div
                  animate={{ rotate: expandedSection === section.id ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </motion.div>
              </button>

              <AnimatePresence>
                {expandedSection === section.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-5 pb-5 border-t border-gray-200">
                      {section.id === 'overview' && (
                        <div className="pt-4 space-y-4">
                          <p className="text-sm text-gray-700">
                            The self-drive vehicle system is accessible through three distinct flow paths, each optimized for different user scenarios:
                          </p>
                          
                          <div className="space-y-3">
                            <div className="flex items-start gap-3 bg-orange-50 rounded-2xl p-3">
                              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                                1
                              </div>
                              <div className="flex-1">
                                <p className="text-sm font-bold text-gray-900 mb-1">Travel Essentials</p>
                                <p className="text-xs text-gray-700">Direct access for users specifically looking for vehicle rentals</p>
                              </div>
                            </div>

                            <div className="flex items-start gap-3 bg-purple-50 rounded-2xl p-3">
                              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                                2
                              </div>
                              <div className="flex-1">
                                <p className="text-sm font-bold text-gray-900 mb-1">Custom Tour Builder</p>
                                <p className="text-xs text-gray-700">Integrated transport selection as part of tour customization</p>
                              </div>
                            </div>

                            <div className="flex items-start gap-3 bg-blue-50 rounded-2xl p-3">
                              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                                3
                              </div>
                              <div className="flex-1">
                                <p className="text-sm font-bold text-gray-900 mb-1">Multi-Category</p>
                                <p className="text-xs text-gray-700">Part of complex trip planning with multiple transport segments</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {section.id === 'flow1' && (
                        <div className="pt-4 space-y-4">
                          <div className="bg-orange-50 rounded-2xl p-4 border border-orange-200">
                            <h4 className="font-bold text-sm text-orange-900 mb-2">Flow Path</h4>
                            <code className="text-xs font-mono text-orange-700 block mb-3">
                              77 → 77U → 77V → 77W → 82 → 83 → 84
                            </code>
                            <div className="space-y-2">
                              <div className="flex items-start gap-2">
                                <Check className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                                <p className="text-xs text-gray-700"><strong>Screen 77:</strong> Travel Essentials Hub landing</p>
                              </div>
                              <div className="flex items-start gap-2">
                                <Badge className="bg-yellow-500 text-white border-0 text-[9px]">NEW</Badge>
                                <p className="text-xs text-gray-700"><strong>Screen 77U:</strong> Self-Drive Vehicles category entry</p>
                              </div>
                              <div className="flex items-start gap-2">
                                <Badge className="bg-yellow-500 text-white border-0 text-[9px]">NEW</Badge>
                                <p className="text-xs text-gray-700"><strong>Screen 77V:</strong> Vehicle listings with filters</p>
                              </div>
                              <div className="flex items-start gap-2">
                                <Badge className="bg-yellow-500 text-white border-0 text-[9px]">NEW</Badge>
                                <p className="text-xs text-gray-700"><strong>Screen 77W:</strong> Vehicle details page</p>
                              </div>
                              <div className="flex items-start gap-2">
                                <Check className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                                <p className="text-xs text-gray-700"><strong>Screen 82:</strong> Booking form with dates/locations</p>
                              </div>
                              <div className="flex items-start gap-2">
                                <Check className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                                <p className="text-xs text-gray-700"><strong>Screen 83:</strong> Payment processing</p>
                              </div>
                              <div className="flex items-start gap-2">
                                <Check className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                                <p className="text-xs text-gray-700"><strong>Screen 84:</strong> Booking confirmation</p>
                              </div>
                            </div>
                          </div>

                          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-4 border border-purple-200">
                            <div className="flex items-start gap-2">
                              <Sparkles className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                              <div>
                                <p className="text-xs font-bold text-purple-900 mb-1">User Journey</p>
                                <p className="text-xs text-purple-800">
                                  User browses Travel Essentials → Discovers Self-Drive section → Filters vehicles → Views details → Books directly
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {section.id === 'flow2' && (
                        <div className="pt-4 space-y-4">
                          <div className="bg-purple-50 rounded-2xl p-4 border border-purple-200">
                            <h4 className="font-bold text-sm text-purple-900 mb-2">Flow Path</h4>
                            <code className="text-xs font-mono text-purple-700 block mb-3">
                              32B3 → 32B4 → 77U → (vehicle selection) → 32-FLOW
                            </code>
                            <div className="space-y-2">
                              <div className="flex items-start gap-2">
                                <Check className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                                <p className="text-xs text-gray-700"><strong>Screen 32B3:</strong> Transport Preferences selection</p>
                              </div>
                              <div className="flex items-start gap-2">
                                <Badge className="bg-orange-500 text-white border-0 text-[9px]">UPDATED</Badge>
                                <p className="text-xs text-gray-700"><strong>Screen 32B4:</strong> Transport Mode details (self-drive option)</p>
                              </div>
                              <div className="flex items-start gap-2">
                                <Badge className="bg-yellow-500 text-white border-0 text-[9px]">BRIDGE</Badge>
                                <p className="text-xs text-gray-700"><strong>Screen 77U:</strong> Vehicle selection interface</p>
                              </div>
                              <div className="flex items-start gap-2">
                                <Check className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                                <p className="text-xs text-gray-700"><strong>Return:</strong> Back to custom tour builder with vehicle selected</p>
                              </div>
                            </div>
                          </div>

                          <FlowConnectionIndicator
                            fromScreen="32B4"
                            toScreen="77U"
                            connectionType="bridge"
                          />

                          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-4 border border-blue-200">
                            <div className="flex items-start gap-2">
                              <TrendingUp className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                              <div>
                                <p className="text-xs font-bold text-blue-900 mb-1">Key Feature</p>
                                <p className="text-xs text-blue-800">
                                  Vehicle selection is seamlessly integrated into tour planning. Selected vehicle automatically appears in transport summary with pricing.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {section.id === 'flow3' && (
                        <div className="pt-4 space-y-4">
                          <div className="bg-blue-50 rounded-2xl p-4 border border-blue-200">
                            <h4 className="font-bold text-sm text-blue-900 mb-2">Flow Path</h4>
                            <code className="text-xs font-mono text-blue-700 block mb-3">
                              101 → 109 → 109A → 77V → 101
                            </code>
                            <div className="space-y-2">
                              <div className="flex items-start gap-2">
                                <Check className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                <p className="text-xs text-gray-700"><strong>Screen 101:</strong> Multi-Category Hub</p>
                              </div>
                              <div className="flex items-start gap-2">
                                <Badge className="bg-green-500 text-white border-0 text-[9px]">ENHANCED</Badge>
                                <p className="text-xs text-gray-700"><strong>Screen 109:</strong> Transport Planner (now with self-drive)</p>
                              </div>
                              <div className="flex items-start gap-2">
                                <Badge className="bg-yellow-500 text-white border-0 text-[9px]">NEW</Badge>
                                <p className="text-xs text-gray-700"><strong>Screen 109A:</strong> Self-drive segment addition</p>
                              </div>
                              <div className="flex items-start gap-2">
                                <Check className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                <p className="text-xs text-gray-700"><strong>Screen 77V:</strong> Vehicle selection</p>
                              </div>
                              <div className="flex items-start gap-2">
                                <Check className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                <p className="text-xs text-gray-700"><strong>Return to 101:</strong> Continue multi-category planning</p>
                              </div>
                            </div>
                          </div>

                          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-4 border border-orange-200">
                            <div className="flex items-start gap-2">
                              <Info className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                              <div>
                                <p className="text-xs font-bold text-orange-900 mb-1">Complex Planning</p>
                                <p className="text-xs text-orange-800">
                                  Allows users to add self-drive segments as part of complex multi-day itineraries with coordinated timing across activities, accommodation, and transport.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          ))}
        </div>

        {/* Quick Reference */}
        <Card className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-5 border-0 shadow-xl">
          <h3 className="font-bold text-base text-white mb-4">Screen Reference</h3>
          <div className="space-y-2">
            {[
              { screen: '77U', status: 'NEW', desc: 'Self-Drive Vehicles Hub' },
              { screen: '77V', status: 'NEW', desc: 'Vehicle Listings' },
              { screen: '77W', status: 'NEW', desc: 'Vehicle Details' },
              { screen: '32B4', status: 'UPDATED', desc: 'Transport Mode (with self-drive)' },
              { screen: '109', status: 'ENHANCED', desc: 'Transport Planner (+ self-drive)' },
              { screen: '109A', status: 'NEW', desc: 'Self-Drive Segment' }
            ].map((item) => (
              <div key={item.screen} className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-xl p-3">
                <div className="flex items-center gap-3">
                  <code className="text-sm font-bold text-cyan-400">{item.screen}</code>
                  <span className="text-xs text-white/80">{item.desc}</span>
                </div>
                <Badge className={`${
                  item.status === 'NEW' ? 'bg-yellow-500' : 
                  item.status === 'UPDATED' ? 'bg-orange-500' : 
                  'bg-green-500'
                } text-white border-0 text-[9px]`}>
                  {item.status}
                </Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-2xl z-40">
        <div className="max-w-md mx-auto">
          <Button 
            onClick={() => setActiveFlow('essentials')}
            className="w-full h-14 bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-2xl font-bold text-base hover:from-orange-700 hover:to-amber-700"
          >
            Try Flow Navigation Demo
            <Sparkles className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
