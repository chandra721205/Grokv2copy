/**
 * ========================================
 * DESIGN SYSTEM INTEGRATION ROUTER
 * ========================================
 * 
 * This component acts as the central integration hub for all Design System
 * components, prototype flows, and feature modules listed in the Figma file.
 * 
 * Integration Mapping:
 * 
 * FROM FIGMA (Right Panel) → TO USER FLOW (Left Panel)
 * ================================================================================
 * 
 * 1. GROK AI MULTI-CATEGORY → Main Dashboard Entry Point
 * 2. Travel Essentials → Booking Flow (after Transport Preferences)
 * 3. Travel Essentials V2 → Enhanced version in booking flow
 * 4. Research Destinations → Discovery Phase (before Combo Selection)
 * 5. Interest Tracker → User Profile + All destination cards
 * 6. Component Library → Applied throughout all screens
 * 
 * WELLNESS SUITE:
 * 7. Health & Wellness → Category selection flow
 * 8. Wellness Interest Flow → Specialized onboarding
 * 9. Wellness Request System → Customization interface
 * 10. Wellness Complete Flow → Full booking experience
 * 11. Wellness Complete Integration → Backend integration
 * 12. Health Profile Wellness Demo → Onboarding/Profile setup
 * 
 * HERITAGE SUITE:
 * 13. Heritage Complete Flow → Cultural tourism path
 * 14. Heritage Trip Dashboard Demo → Preview interface
 * 
 * OTHER SPECIALIZED FLOWS:
 * 15. Post Trip Feedback Demo → Post-completion flow
 * 16. Eco Tourism Demo → Environmental tourism guide
 * 17. Devotional Low-Fi → Spiritual tourism (needs upgrade)
 * 
 * ================================================================================
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Home, 
  Compass, 
  Calendar, 
  Heart,
  MapPin,
  Package,
  BookOpen,
  User,
  Sparkles,
  Leaf,
  Church,
  Building2,
  Star,
  MessageCircle,
  ArrowRight
} from 'lucide-react';

// ========================================
// DESIGN SYSTEM MAPPING TYPES
// ========================================

type DesignSystemModule = 
  | 'grok-ai-multi-category'
  | 'travel-essentials'
  | 'travel-essentials-v2'
  | 'research-destinations'
  | 'interest-tracker'
  | 'component-library'
  | 'health-wellness'
  | 'wellness-interest-flow'
  | 'wellness-request-system'
  | 'wellness-complete-flow'
  | 'wellness-complete-integration'
  | 'health-profile-wellness-demo'
  | 'heritage-complete-flow'
  | 'heritage-trip-dashboard-demo'
  | 'post-trip-feedback-demo'
  | 'eco-tourism-demo'
  | 'devotional-low-fi';

interface DesignSystemModuleConfig {
  id: DesignSystemModule;
  name: string;
  description: string;
  integrationPoint: string;
  icon: React.ElementType;
  gradient: string;
  status: 'integrated' | 'ready' | 'needs-upgrade';
  route: string;
  category: 'core' | 'wellness' | 'heritage' | 'specialized';
}

// ========================================
// DESIGN SYSTEM MODULE CONFIGURATIONS
// ========================================

const designSystemModules: DesignSystemModuleConfig[] = [
  // CORE MODULES
  {
    id: 'grok-ai-multi-category',
    name: 'GROK AI Multi-Category',
    description: 'AI-powered category selection and recommendation engine',
    integrationPoint: 'Main Dashboard Entry',
    icon: Sparkles,
    gradient: 'from-orange-400 to-pink-500',
    status: 'integrated',
    route: '/dashboard',
    category: 'core'
  },
  {
    id: 'travel-essentials',
    name: 'Travel Essentials',
    description: 'Essential travel items and booking add-ons',
    integrationPoint: 'After Transport Preferences',
    icon: Package,
    gradient: 'from-purple-500 to-pink-500',
    status: 'integrated',
    route: '/booking/essentials',
    category: 'core'
  },
  {
    id: 'travel-essentials-v2',
    name: 'Travel Essentials V2',
    description: 'Enhanced version with bundle builder',
    integrationPoint: 'Booking Flow Enhancement',
    icon: Package,
    gradient: 'from-blue-500 to-cyan-500',
    status: 'integrated',
    route: '/booking/essentials-v2',
    category: 'core'
  },
  {
    id: 'research-destinations',
    name: 'Research Destinations',
    description: 'Destination research and discovery tools',
    integrationPoint: 'Before Combo Selection',
    icon: BookOpen,
    gradient: 'from-green-500 to-emerald-500',
    status: 'integrated',
    route: '/research',
    category: 'core'
  },
  {
    id: 'interest-tracker',
    name: 'Interest Tracker',
    description: 'User interest collection and wishlist management',
    integrationPoint: 'User Profile + All Cards',
    icon: Heart,
    gradient: 'from-pink-500 to-rose-600',
    status: 'integrated',
    route: '/profile/interests',
    category: 'core'
  },
  {
    id: 'component-library',
    name: 'Component Library',
    description: 'Reusable UI components and design patterns',
    integrationPoint: 'All Screens (System-wide)',
    icon: Building2,
    gradient: 'from-gray-600 to-gray-800',
    status: 'integrated',
    route: '/components',
    category: 'core'
  },

  // WELLNESS SUITE
  {
    id: 'health-wellness',
    name: 'Health & Wellness',
    description: 'Wellness tourism category and features',
    integrationPoint: 'Category Selection',
    icon: Heart,
    gradient: 'from-green-500 to-teal-500',
    status: 'integrated',
    route: '/wellness',
    category: 'wellness'
  },
  {
    id: 'wellness-interest-flow',
    name: 'Wellness Interest Flow',
    description: 'Specialized wellness preference onboarding',
    integrationPoint: 'Wellness Category Entry',
    icon: Sparkles,
    gradient: 'from-green-500 to-emerald-500',
    status: 'integrated',
    route: '/wellness/interest-flow',
    category: 'wellness'
  },
  {
    id: 'wellness-request-system',
    name: 'Wellness Request System',
    description: 'Custom wellness package request interface',
    integrationPoint: 'Wellness Customization',
    icon: MessageCircle,
    gradient: 'from-teal-500 to-cyan-500',
    status: 'integrated',
    route: '/wellness/request',
    category: 'wellness'
  },
  {
    id: 'wellness-complete-flow',
    name: 'Wellness Complete Flow',
    description: 'End-to-end wellness booking experience',
    integrationPoint: 'Full Wellness Journey',
    icon: Calendar,
    gradient: 'from-green-600 to-emerald-600',
    status: 'integrated',
    route: '/wellness/complete',
    category: 'wellness'
  },
  {
    id: 'wellness-complete-integration',
    name: 'Wellness Complete Integration',
    description: 'Backend integration for wellness bookings',
    integrationPoint: 'Wellness Booking Completion',
    icon: ArrowRight,
    gradient: 'from-emerald-500 to-green-500',
    status: 'integrated',
    route: '/wellness/integration',
    category: 'wellness'
  },
  {
    id: 'health-profile-wellness-demo',
    name: 'Health Profile Wellness Demo',
    description: 'User health profile and preferences setup',
    integrationPoint: 'Onboarding + Profile',
    icon: User,
    gradient: 'from-teal-600 to-green-600',
    status: 'integrated',
    route: '/profile/health',
    category: 'wellness'
  },

  // HERITAGE SUITE
  {
    id: 'heritage-complete-flow',
    name: 'Heritage Complete Flow',
    description: 'Cultural and heritage tourism experience',
    integrationPoint: 'Heritage Category',
    icon: Building2,
    gradient: 'from-orange-600 to-amber-700',
    status: 'integrated',
    route: '/heritage/complete',
    category: 'heritage'
  },
  {
    id: 'heritage-trip-dashboard-demo',
    name: 'Heritage Trip Dashboard Demo',
    description: 'Heritage tour preview and management',
    integrationPoint: 'Heritage Booking Preview',
    icon: MapPin,
    gradient: 'from-amber-600 to-orange-700',
    status: 'integrated',
    route: '/heritage/dashboard',
    category: 'heritage'
  },

  // SPECIALIZED FLOWS
  {
    id: 'post-trip-feedback-demo',
    name: 'Post Trip Feedback Demo',
    description: 'Trip completion and feedback collection',
    integrationPoint: 'Post-Completion Flow',
    icon: Star,
    gradient: 'from-orange-500 to-red-600',
    status: 'integrated',
    route: '/feedback',
    category: 'specialized'
  },
  {
    id: 'eco-tourism-demo',
    name: 'Eco Tourism Demo',
    description: 'Environmental and sustainable tourism',
    integrationPoint: 'Eco Tourism Category',
    icon: Leaf,
    gradient: 'from-green-600 to-lime-600',
    status: 'integrated',
    route: '/eco-tourism',
    category: 'specialized'
  },
  {
    id: 'devotional-low-fi',
    name: 'Devotional Low-Fi',
    description: 'Spiritual and devotional tourism (upgrading to high-fidelity)',
    integrationPoint: 'Devotional Category',
    icon: Church,
    gradient: 'from-blue-500 to-indigo-600',
    status: 'needs-upgrade',
    route: '/devotional',
    category: 'specialized'
  }
];

// ========================================
// DESIGN SYSTEM INTEGRATION HUB
// ========================================

export function DesignSystemIntegrationHub() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'core' | 'wellness' | 'heritage' | 'specialized'>('all');

  const categories = [
    { id: 'all', label: 'All Modules', count: designSystemModules.length },
    { id: 'core', label: 'Core Features', count: designSystemModules.filter(m => m.category === 'core').length },
    { id: 'wellness', label: 'Wellness Suite', count: designSystemModules.filter(m => m.category === 'wellness').length },
    { id: 'heritage', label: 'Heritage Suite', count: designSystemModules.filter(m => m.category === 'heritage').length },
    { id: 'specialized', label: 'Specialized', count: designSystemModules.filter(m => m.category === 'specialized').length },
  ];

  const filteredModules = selectedCategory === 'all' 
    ? designSystemModules 
    : designSystemModules.filter(m => m.category === selectedCategory);

  const statusColors = {
    integrated: 'bg-green-100 text-green-700 border-green-300',
    ready: 'bg-blue-100 text-blue-700 border-blue-300',
    'needs-upgrade': 'bg-yellow-100 text-yellow-700 border-yellow-300'
  };

  const statusLabels = {
    integrated: '✓ Integrated',
    ready: '⚡ Ready',
    'needs-upgrade': '⚠ Needs Upgrade'
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 pt-12 pb-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-white font-bold text-3xl mb-3">Design System Integration Hub</h1>
            <p className="text-white/90 text-sm leading-relaxed">
              Comprehensive mapping of all Figma design system components into GrokYatra user flows
            </p>
          </motion.div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="px-4 py-6 max-w-4xl mx-auto">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`px-4 py-2 rounded-xl font-semibold text-sm whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-300'
              }`}
            >
              {cat.label} ({cat.count})
            </button>
          ))}
        </div>
      </div>

      {/* Module Grid */}
      <div className="px-4 pb-20 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredModules.map((module, index) => {
            const Icon = module.icon;
            
            return (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all border-2 border-gray-100"
              >
                {/* Header with Icon and Status */}
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${module.gradient} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-bold border-2 ${statusColors[module.status]}`}>
                    {statusLabels[module.status]}
                  </div>
                </div>

                {/* Module Name */}
                <h3 className="font-bold text-base text-gray-900 mb-2">
                  {module.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                  {module.description}
                </p>

                {/* Integration Point */}
                <div className="bg-blue-50 rounded-xl p-3 border border-blue-200">
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    <span className="text-xs font-semibold text-blue-900">Integration Point:</span>
                  </div>
                  <p className="text-sm text-blue-700 font-medium">
                    {module.integrationPoint}
                  </p>
                </div>

                {/* Route */}
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs font-mono text-gray-500">{module.route}</span>
                  <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-1">
                    View <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Summary Stats */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 px-4 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex gap-6">
            <div>
              <p className="text-xs text-gray-500">Total Modules</p>
              <p className="text-lg font-bold text-gray-900">{designSystemModules.length}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Integrated</p>
              <p className="text-lg font-bold text-green-600">
                {designSystemModules.filter(m => m.status === 'integrated').length}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Needs Work</p>
              <p className="text-lg font-bold text-yellow-600">
                {designSystemModules.filter(m => m.status === 'needs-upgrade').length}
              </p>
            </div>
          </div>
          <div className="text-xs text-gray-500">
            Design System v4.0
          </div>
        </div>
      </div>
    </div>
  );
}

// ========================================
// INTEGRATION STATUS CHECKER
// ========================================

export function getModuleStatus(moduleId: DesignSystemModule): DesignSystemModuleConfig | undefined {
  return designSystemModules.find(m => m.id === moduleId);
}

export function getAllModulesByCategory(category: 'core' | 'wellness' | 'heritage' | 'specialized') {
  return designSystemModules.filter(m => m.category === category);
}

export function getIntegratedModules() {
  return designSystemModules.filter(m => m.status === 'integrated');
}

export function getPendingModules() {
  return designSystemModules.filter(m => m.status !== 'integrated');
}
