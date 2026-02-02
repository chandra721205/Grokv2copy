import { useState } from 'react';
import { HeritageTripDashboard } from './HeritageTripDashboard';
import { Button } from '@/app/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export function HeritageTripDashboardDemo() {
  const [showItinerary, setShowItinerary] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showTickets, setShowTickets] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-amber-50 to-yellow-50 p-6">
      {/* Demo Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="bg-white rounded-2xl border-3 border-purple-500 p-6 shadow-xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-3 flex items-center gap-3">
            <span className="text-5xl">🏛️</span>
            Heritage Trip Dashboard Demo
          </h1>
          <p className="text-lg text-gray-700 font-semibold mb-4">
            Complete trip management interface integrated into User's Trip Hub
          </p>
          <div className="flex flex-wrap gap-3">
            <div className="bg-purple-100 border-2 border-purple-400 rounded-xl px-4 py-2">
              <p className="text-sm font-bold text-purple-700">✅ Day-by-Day Itinerary</p>
            </div>
            <div className="bg-blue-100 border-2 border-blue-400 rounded-xl px-4 py-2">
              <p className="text-sm font-bold text-blue-700">✅ Service Details</p>
            </div>
            <div className="bg-green-100 border-2 border-green-400 rounded-xl px-4 py-2">
              <p className="text-sm font-bold text-green-700">✅ Real-time Updates</p>
            </div>
            <div className="bg-orange-100 border-2 border-orange-400 rounded-xl px-4 py-2">
              <p className="text-sm font-bold text-orange-700">✅ Quick Actions</p>
            </div>
            <div className="bg-amber-100 border-2 border-amber-400 rounded-xl px-4 py-2">
              <p className="text-sm font-bold text-amber-700">✅ Google Search & YouTube</p>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Component */}
      <div className="max-w-7xl mx-auto">
        <HeritageTripDashboard
          tripName="Golden Triangle Tour"
          onViewItinerary={() => {
            setShowItinerary(true);
            setTimeout(() => setShowItinerary(false), 3000);
          }}
          onModifyServices={() => {
            setShowServices(true);
            setTimeout(() => setShowServices(false), 3000);
          }}
          onViewTickets={() => {
            setShowTickets(true);
            setTimeout(() => setShowTickets(false), 3000);
          }}
        />
      </div>

      {/* Action Feedback Modals */}
      {showItinerary && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl border-3 border-blue-500 p-8 shadow-2xl max-w-md">
            <div className="text-center">
              <div className="text-7xl mb-4">📋</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Detailed Itinerary
              </h3>
              <p className="text-lg text-gray-700 font-semibold">
                Opening full day-by-day itinerary with maps, timings, and contact details...
              </p>
            </div>
          </div>
        </div>
      )}

      {showServices && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl border-3 border-purple-500 p-8 shadow-2xl max-w-md">
            <div className="text-center">
              <div className="text-7xl mb-4">✏️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Modify Services
              </h3>
              <p className="text-lg text-gray-700 font-semibold">
                Opening services editor: add/remove guides, transport, experiences...
              </p>
            </div>
          </div>
        </div>
      )}

      {showTickets && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl border-3 border-green-500 p-8 shadow-2xl max-w-md">
            <div className="text-center">
              <div className="text-7xl mb-4">🎫</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Tickets & Passes
              </h3>
              <p className="text-lg text-gray-700 font-semibold">
                Opening digital tickets: monument passes, train tickets, show bookings...
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Feature Highlights */}
      <div className="max-w-7xl mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Feature 1 */}
          <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl border-3 border-blue-400 p-6 shadow-lg">
            <div className="text-5xl mb-3">📅</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Day-by-Day Itinerary
            </h3>
            <ul className="space-y-2 text-base text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span className="font-semibold">Complete 3-day Golden Triangle schedule</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span className="font-semibold">Location pins, timings, and service details</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span className="font-semibold">Guide assignments and special bookings</span>
              </li>
            </ul>
          </div>

          {/* Feature 2 */}
          <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl border-3 border-orange-400 p-6 shadow-lg">
            <div className="text-5xl mb-3">⚠️</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Real-time Updates
            </h3>
            <ul className="space-y-2 text-base text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span className="font-semibold">Color-coded alerts (warning, success, info)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span className="font-semibold">Monument closures & rescheduling notifications</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span className="font-semibold">Booking confirmations and pickup times</span>
              </li>
            </ul>
          </div>

          {/* Feature 3 */}
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl border-3 border-purple-400 p-6 shadow-lg">
            <div className="text-5xl mb-3">📊</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Quick Stats Dashboard
            </h3>
            <ul className="space-y-2 text-base text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span className="font-semibold">Total days, attractions, and confirmations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span className="font-semibold">Action-needed counter for pending items</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span className="font-semibold">Visual stat cards with gradient backgrounds</span>
              </li>
            </ul>
          </div>

          {/* Feature 4 */}
          <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl border-3 border-green-400 p-6 shadow-lg">
            <div className="text-5xl mb-3">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Destination Research Tools
            </h3>
            <ul className="space-y-2 text-base text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span className="font-semibold">Google Search integration for trip details</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span className="font-semibold">YouTube Browse for heritage tour videos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span className="font-semibold">Opens in new tab without leaving dashboard</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Technical Details */}
      <div className="max-w-7xl mx-auto mt-8">
        <div className="bg-gray-900 rounded-2xl border-3 border-gray-700 p-8 shadow-xl">
          <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">⚙️</span>
            Technical Implementation
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-xl p-5 border-2 border-gray-600">
              <h4 className="text-xl font-bold text-amber-400 mb-3">Data Structure</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500">→</span>
                  <span className="font-mono">DayActivity[]</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500">→</span>
                  <span className="font-mono">Activity interface</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500">→</span>
                  <span className="font-mono">Update alerts system</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 rounded-xl p-5 border-2 border-gray-600">
              <h4 className="text-xl font-bold text-purple-400 mb-3">Animation</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500">→</span>
                  <span>Staggered entry delays</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500">→</span>
                  <span>Slide-in day cards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500">→</span>
                  <span>Hover shadow effects</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 rounded-xl p-5 border-2 border-gray-600">
              <h4 className="text-xl font-bold text-green-400 mb-3">Integration</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">→</span>
                  <span>Trip Hub compatible</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">→</span>
                  <span>Callback handlers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">→</span>
                  <span>Admin editable elements</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Admin Notes */}
      <div className="max-w-7xl mx-auto mt-8 mb-8">
        <div className="bg-yellow-100 border-3 border-yellow-500 rounded-2xl p-6 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="text-3xl">📝</span>
            Component Usage Notes
          </h3>
          <div className="space-y-3 text-base text-gray-800">
            <p className="flex items-start gap-3">
              <span className="text-yellow-600 font-bold text-xl">•</span>
              <span className="font-semibold">
                <span className="bg-yellow-200 px-2 py-0.5 rounded font-bold">[Integration Point]</span>
                {' '}This component should be rendered inside the main Trip Hub as a card alongside other tourism categories
              </span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-yellow-600 font-bold text-xl">•</span>
              <span className="font-semibold">
                Props interface supports dynamic trip names, custom callbacks, and real-time data updates
              </span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-yellow-600 font-bold text-xl">•</span>
              <span className="font-semibold">
                Day activities, updates, and stats are configurable via props or backend API calls
              </span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-yellow-600 font-bold text-xl">•</span>
              <span className="font-semibold">
                Google Search and YouTube Browse buttons provide instant research without leaving the app context
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
