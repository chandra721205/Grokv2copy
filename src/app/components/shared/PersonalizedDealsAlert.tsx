import { useState } from 'react';
import { motion } from 'motion/react';
import { Bell, Check, X } from 'lucide-react';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import { useAdminMode } from '@/app/components/admin/AdminModeContext';

// ========================================
// PERSONALIZED DEALS ALERT COMPONENT
// ========================================
// Banner-style alert component for deal notifications
// Connects to interest tracking system
// All content is admin-editable
// ========================================

interface PersonalizedDealsAlertProps {
  /** Category being viewed (for targeted deals) */
  category?: string;
  
  /** Show admin editable indicators */
  showAdminIndicators?: boolean;
  
  /** Callback when user saves preferences */
  onSavePreferences?: (data: DealPreferenceData) => void;
  
  /** Optional override content */
  content?: {
    heading?: string;
    description?: string;
    budgetPlaceholder?: string;
    notificationText?: string;
    buttonLabel?: string;
  };
}

export interface DealPreferenceData {
  category: string;
  budget: string;
  notificationsEnabled: boolean;
  timestamp: string;
}

export function PersonalizedDealsAlert({
  category = 'all',
  showAdminIndicators = false,
  onSavePreferences,
  content
}: PersonalizedDealsAlertProps) {
  const { isAdminMode } = useAdminMode();
  const [budget, setBudget] = useState('');
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  
  // Admin-editable content
  const heading = content?.heading || '[Admin: Get Personalized Deal Alerts]';
  const description = content?.description || '[Admin: Save your budget and we\'ll notify you of best deals]';
  const budgetPlaceholder = content?.budgetPlaceholder || '[Admin: Enter your budget (e.g., ₹50,000)]';
  const notificationText = content?.notificationText || '[Admin: Send me notifications for deals in this category]';
  const buttonLabel = content?.buttonLabel || '[Admin: Save Preferences]';

  const handleSave = () => {
    const preferenceData: DealPreferenceData = {
      category,
      budget,
      notificationsEnabled,
      timestamp: new Date().toISOString()
    };
    
    // Save to localStorage
    const existingPreferences = JSON.parse(localStorage.getItem('grokyatra_deal_preferences') || '[]');
    const updatedPreferences = [...existingPreferences, preferenceData];
    localStorage.setItem('grokyatra_deal_preferences', JSON.stringify(updatedPreferences));
    
    // Callback
    onSavePreferences?.(preferenceData);
    
    // Show success state
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
      setIsExpanded(false);
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mb-6"
    >
      {/* Collapsed Banner State */}
      {!isExpanded && !isSaved && (
        <div
          onClick={() => setIsExpanded(true)}
          className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-3xl p-4 cursor-pointer hover:shadow-md transition-all"
        >
          <div className="flex items-start gap-4">
            {/* Bell Icon */}
            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Bell className="w-6 h-6 text-white" />
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className={`font-bold text-lg mb-1 ${ 
                isAdminMode && showAdminIndicators ? 'bg-gray-100 px-2 py-1 rounded inline-block' : ''
              }`}>
                {heading}
              </h3>
              {isAdminMode && showAdminIndicators && (
                <span className="text-xs text-purple-600 font-semibold ml-2">Level 3: Alert Heading</span>
              )}
              
              <p className={`text-sm text-gray-700 ${ 
                isAdminMode && showAdminIndicators ? 'bg-gray-100 px-2 py-1 rounded inline-block mt-1' : ''
              }`}>
                {description}
              </p>
              {isAdminMode && showAdminIndicators && (
                <span className="text-xs text-purple-600 font-semibold ml-2">Level 3: Alert Description</span>
              )}
            </div>

            {/* Arrow Indicator */}
            <div className="flex items-center">
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-amber-600 text-sm font-semibold"
              >
                Tap to set →
              </motion.div>
            </div>
          </div>
        </div>
      )}

      {/* Expanded Form State */}
      {isExpanded && !isSaved && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          className="bg-white border-2 border-amber-300 rounded-3xl shadow-lg overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Bell className="w-5 h-5 text-white" />
                </div>
                <h3 className={`text-white font-bold text-lg ${ 
                  isAdminMode && showAdminIndicators ? 'bg-white/20 px-2 py-1 rounded' : ''
                }`}>
                  {heading}
                </h3>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>

          {/* Form Content */}
          <div className="p-6 space-y-4">
            {/* Budget Input */}
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-2 block">
                Your Budget
                {isAdminMode && showAdminIndicators && (
                  <span className="text-xs text-purple-600 font-semibold ml-2">Level 4: Input Label</span>
                )}
              </label>
              <Input
                type="text"
                placeholder={budgetPlaceholder}
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className={`h-12 rounded-2xl border-2 border-gray-200 focus:border-amber-400 ${ 
                  isAdminMode && showAdminIndicators ? 'bg-gray-50' : ''
                }`}
              />
              {isAdminMode && showAdminIndicators && (
                <span className="text-xs text-purple-600 font-semibold">Level 4: Budget Input Field</span>
              )}
            </div>

            {/* Notification Checkbox */}
            <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-2xl border border-amber-100">
              <input
                type="checkbox"
                id="deal-notifications"
                checked={notificationsEnabled}
                onChange={(e) => setNotificationsEnabled(e.target.checked)}
                className="w-5 h-5 mt-0.5 rounded border-amber-300 text-amber-600 focus:ring-amber-500 cursor-pointer"
              />
              <label 
                htmlFor="deal-notifications" 
                className={`text-sm text-gray-700 cursor-pointer flex-1 ${ 
                  isAdminMode && showAdminIndicators ? 'bg-white px-2 py-1 rounded' : ''
                }`}
              >
                {notificationText}
              </label>
              {isAdminMode && showAdminIndicators && (
                <span className="text-xs text-purple-600 font-semibold">Level 4: Checkbox Text</span>
              )}
            </div>

            {/* Info Banner */}
            <div className="flex items-start gap-2 p-3 bg-blue-50 rounded-xl border border-blue-100">
              <Bell className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-blue-800">
                We'll analyze your interests and send personalized deal alerts matching your preferences.
              </p>
            </div>

            {/* Save Button */}
            <Button
              onClick={handleSave}
              disabled={!budget}
              className={`w-full h-12 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold disabled:opacity-50 disabled:cursor-not-allowed ${ 
                isAdminMode && showAdminIndicators ? 'ring-2 ring-purple-400' : ''
              }`}
            >
              {buttonLabel}
            </Button>
            {isAdminMode && showAdminIndicators && (
              <span className="text-xs text-purple-600 font-semibold text-center block">Level 4: Save Button</span>
            )}
          </div>

          {/* Admin Integration Note */}
          {isAdminMode && showAdminIndicators && (
            <div className="bg-purple-50 border-t border-purple-200 px-6 py-3">
              <p className="text-xs text-purple-700">
                <span className="font-bold">Data Flow:</span> Saves to localStorage → Backend sync → Admin dashboard analytics → Automated deal matching
              </p>
            </div>
          )}
        </motion.div>
      )}

      {/* Success State */}
      {isSaved && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-3xl p-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center">
              <Check className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg text-green-900 mb-1">
                Preferences Saved! ✓
              </h3>
              <p className="text-sm text-green-700">
                We'll notify you when we find deals matching your budget and interests.
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Admin Guide */}
      {isAdminMode && showAdminIndicators && !isExpanded && !isSaved && (
        <div className="mt-2 p-3 bg-purple-50 border border-purple-200 rounded-xl">
          <p className="text-xs text-purple-700">
            <span className="font-bold">Admin:</span> This component collects user budget and notification preferences. 
            Click to expand and test the form. Data syncs with Interest Tracker for automated deal matching.
          </p>
        </div>
      )}
    </motion.div>
  );
}

// ========================================
// ADMIN HELPER: GET SAVED PREFERENCES
// ========================================

export function getDealPreferences(): DealPreferenceData[] {
  const preferences = localStorage.getItem('grokyatra_deal_preferences');
  return preferences ? JSON.parse(preferences) : [];
}

export function getDealPreferencesByCategory(category: string): DealPreferenceData[] {
  const allPreferences = getDealPreferences();
  return allPreferences.filter(pref => pref.category === category || pref.category === 'all');
}

// ========================================
// ADMIN DASHBOARD SUMMARY
// ========================================

export interface DealPreferenceSummary {
  totalPreferences: number;
  categoriesTracked: string[];
  averageBudget: number;
  notificationsEnabled: number;
  recentPreferences: DealPreferenceData[];
}

export function getDealPreferencesSummary(): DealPreferenceSummary {
  const preferences = getDealPreferences();
  
  const budgets = preferences
    .map(p => p.budget)
    .filter(b => b)
    .map(b => {
      const match = b.match(/[\d,]+/);
      return match ? parseInt(match[0].replace(/,/g, '')) : 0;
    })
    .filter(n => n > 0);
  
  const averageBudget = budgets.length > 0 
    ? budgets.reduce((a, b) => a + b, 0) / budgets.length 
    : 0;
  
  const categoriesTracked = [...new Set(preferences.map(p => p.category))];
  const notificationsEnabled = preferences.filter(p => p.notificationsEnabled).length;
  
  return {
    totalPreferences: preferences.length,
    categoriesTracked,
    averageBudget,
    notificationsEnabled,
    recentPreferences: preferences.slice(-5).reverse()
  };
}
