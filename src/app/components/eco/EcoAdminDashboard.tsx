import { motion } from 'motion/react';
import { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { X, Plus, Edit2, Trash2, Eye, Save, Upload, CheckCircle } from 'lucide-react';

interface EcoAdminDashboardProps {
  isOpen: boolean;
  onClose: () => void;
}

type AdminTab = 'destinations' | 'deals' | 'content' | 'preferences';

export function EcoAdminDashboard({ isOpen, onClose }: EcoAdminDashboardProps) {
  const [activeTab, setActiveTab] = useState<AdminTab>('destinations');
  const [isEditing, setIsEditing] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);

  const destinations = [
    {
      id: 1,
      placeholder: 'Admin-Added Destination 1',
      category: 'National Parks & Wildlife',
      location: 'Admin-Added Location',
      ecoScore: 'Admin-Verified Eco-Rating',
      status: 'Published',
    },
    {
      id: 2,
      placeholder: 'Admin-Added Destination 2',
      category: 'Tribal & Heritage Villages',
      location: 'Location X',
      ecoScore: 'Admin-Verified Eco-Rating',
      status: 'Draft',
    },
    {
      id: 3,
      placeholder: 'Admin-Added Destination 3',
      category: 'Organic Farms & Agro-Tourism',
      location: 'Admin-Added Location',
      ecoScore: 'Admin-Verified Eco-Rating',
      status: 'Published',
    },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-6 border-b-4 border-green-700">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
                <span className="text-5xl">🛠️</span>
                Eco-Tourism Admin Dashboard
              </h1>
              <p className="text-lg text-green-100 font-semibold">
                Manage destinations, deals, and user preferences
              </p>
            </div>
            <Button
              onClick={onClose}
              className="bg-white/20 hover:bg-white/30 text-white rounded-full p-3"
            >
              <X className="h-8 w-8" />
            </Button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-gray-800 border-b-2 border-gray-700">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex gap-4">
            {[
              { id: 'destinations' as AdminTab, label: 'Destinations', icon: '🏞️' },
              { id: 'deals' as AdminTab, label: 'Deals & Alerts', icon: '💰' },
              { id: 'content' as AdminTab, label: 'Content Updates', icon: '📝' },
              { id: 'preferences' as AdminTab, label: 'User Preferences', icon: '⚙️' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-bold text-base flex items-center gap-2 transition-all border-b-4 ${
                  activeTab === tab.id
                    ? 'text-white border-green-500'
                    : 'text-gray-400 border-transparent hover:text-gray-200'
                }`}
              >
                <span className="text-2xl">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-8 py-8 overflow-y-auto max-h-[calc(100vh-200px)]">
        {activeTab === 'destinations' && (
          <div className="space-y-6">
            {/* Actions Bar */}
            <div className="bg-gray-800 rounded-2xl border-3 border-gray-700 p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">Manage Destinations</h2>
                <div className="flex gap-3">
                  <Button
                    onClick={() => setPreviewMode(!previewMode)}
                    className={`px-6 py-3 rounded-xl font-bold flex items-center gap-2 ${
                      previewMode
                        ? 'bg-blue-600 hover:bg-blue-700'
                        : 'bg-gray-700 hover:bg-gray-600'
                    } text-white`}
                  >
                    <Eye className="h-5 w-5" />
                    {previewMode ? 'Exit Preview' : 'Preview Mode'}
                  </Button>
                  <Button
                    onClick={() => setIsEditing(!isEditing)}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2"
                  >
                    <Plus className="h-5 w-5" />
                    Add New Destination
                  </Button>
                </div>
              </div>
            </div>

            {/* Admin Note */}
            <div className="bg-purple-900 border-3 border-purple-700 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">📌 Admin Instructions</h3>
              <div className="space-y-2 text-purple-100 text-base">
                <p className="font-semibold">
                  • All destinations shown to users as <span className="bg-purple-700 px-2 py-0.5 rounded">"Admin-Added Destination X"</span>
                </p>
                <p className="font-semibold">
                  • Real destination data is stored in backend but NOT displayed in UI
                </p>
                <p className="font-semibold">
                  • Users discover via Google/YouTube and save interests
                </p>
                <p className="font-semibold">
                  • When publishing deals, match user interests with real destinations
                </p>
              </div>
            </div>

            {/* Destinations Grid */}
            <div className="space-y-4">
              {destinations.map((dest, index) => (
                <motion.div
                  key={dest.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800 rounded-2xl border-3 border-gray-700 p-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {/* Left Column - Placeholder Info */}
                    <div className="md:col-span-2">
                      <div className="bg-yellow-900/30 border-2 border-dashed border-yellow-600 rounded-xl p-4 mb-4">
                        <p className="text-sm font-bold text-yellow-400 mb-2">USER SEES:</p>
                        <h3 className="text-2xl font-bold text-white mb-2">{dest.placeholder}</h3>
                        <p className="text-base text-gray-300 font-semibold">📍 {dest.location}</p>
                        <p className="text-base text-gray-300 font-semibold">♻️ {dest.ecoScore}</p>
                      </div>

                      <div className="bg-gray-900 border-2 border-gray-600 rounded-xl p-4">
                        <p className="text-sm font-bold text-gray-400 mb-2">ADMIN ONLY - ACTUAL DATA:</p>
                        <div className="space-y-2">
                          <input
                            type="text"
                            placeholder="Real destination name..."
                            className="w-full px-4 py-2 rounded-lg bg-gray-700 border-2 border-gray-600 text-white font-semibold focus:outline-none focus:ring-2 focus:ring-green-500"
                          />
                          <input
                            type="text"
                            placeholder="Real location..."
                            className="w-full px-4 py-2 rounded-lg bg-gray-700 border-2 border-gray-600 text-white font-semibold focus:outline-none focus:ring-2 focus:ring-green-500"
                          />
                          <select className="w-full px-4 py-2 rounded-lg bg-gray-700 border-2 border-gray-600 text-white font-semibold focus:outline-none focus:ring-2 focus:ring-green-500">
                            <option>Eco-Score: Platinum</option>
                            <option>Eco-Score: Gold</option>
                            <option>Eco-Score: Silver</option>
                            <option>Eco-Score: Bronze</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Meta & Actions */}
                    <div className="md:col-span-2 space-y-4">
                      <div className="bg-gray-900 rounded-xl p-4">
                        <p className="text-sm font-bold text-gray-400 mb-3">CATEGORY & STATUS</p>
                        <div className="space-y-3">
                          <div>
                            <label className="text-xs text-gray-400 font-semibold mb-1 block">Category</label>
                            <select className="w-full px-4 py-2 rounded-lg bg-gray-700 border-2 border-gray-600 text-white font-semibold">
                              <option>{dest.category}</option>
                              <option>National Parks & Wildlife</option>
                              <option>Tribal & Heritage Villages</option>
                              <option>Organic Farms & Agro-Tourism</option>
                              <option>Eco-Lodges & Sustainable Stays</option>
                              <option>Coastal & Marine Conservation</option>
                              <option>Forest Conservation Camps</option>
                            </select>
                          </div>
                          <div>
                            <label className="text-xs text-gray-400 font-semibold mb-1 block">Status</label>
                            <div className="flex gap-2">
                              <button className={`flex-1 px-4 py-2 rounded-lg font-bold text-sm ${
                                dest.status === 'Published'
                                  ? 'bg-green-600 text-white'
                                  : 'bg-gray-700 text-gray-400'
                              }`}>
                                Published
                              </button>
                              <button className={`flex-1 px-4 py-2 rounded-lg font-bold text-sm ${
                                dest.status === 'Draft'
                                  ? 'bg-yellow-600 text-white'
                                  : 'bg-gray-700 text-gray-400'
                              }`}>
                                Draft
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-900 rounded-xl p-4">
                        <p className="text-sm font-bold text-gray-400 mb-3">IMAGE UPLOAD</p>
                        <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center">
                          <Upload className="h-8 w-8 text-gray-500 mx-auto mb-2" />
                          <p className="text-sm text-gray-400 font-semibold">Click to upload image</p>
                          <p className="text-xs text-gray-500 mt-1">JPG, PNG up to 5MB</p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-xl font-bold flex items-center justify-center gap-2">
                          <Edit2 className="h-4 w-4" />
                          Edit
                        </Button>
                        <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-xl font-bold flex items-center justify-center gap-2">
                          <Save className="h-4 w-4" />
                          Save
                        </Button>
                        <Button className="px-4 py-3 rounded-xl font-bold bg-red-600 hover:bg-red-700 text-white">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Add New Button */}
            <div className="bg-gray-800 border-3 border-dashed border-gray-600 rounded-2xl p-12 text-center">
              <Plus className="h-16 w-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Add New Destination</h3>
              <p className="text-base text-gray-400 font-semibold mb-6">
                Create a new eco-tourism destination placeholder
              </p>
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl text-lg font-bold">
                Create Destination
              </Button>
            </div>
          </div>
        )}

        {activeTab === 'deals' && (
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-2xl border-3 border-gray-700 p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Deal Matching & Alerts</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-blue-900/30 border-2 border-blue-700 rounded-xl p-6">
                  <p className="text-4xl mb-3">📊</p>
                  <p className="text-3xl font-bold text-white mb-2">247</p>
                  <p className="text-base text-blue-300 font-semibold">Active Interests</p>
                </div>
                <div className="bg-green-900/30 border-2 border-green-700 rounded-xl p-6">
                  <p className="text-4xl mb-3">💰</p>
                  <p className="text-3xl font-bold text-white mb-2">18</p>
                  <p className="text-base text-green-300 font-semibold">Published Deals</p>
                </div>
                <div className="bg-purple-900/30 border-2 border-purple-700 rounded-xl p-6">
                  <p className="text-4xl mb-3">🔔</p>
                  <p className="text-3xl font-bold text-white mb-2">156</p>
                  <p className="text-base text-purple-300 font-semibold">Pending Notifications</p>
                </div>
              </div>

              <div className="bg-gray-900 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Create New Deal</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-bold text-gray-300 mb-2 block">Select Destination</label>
                      <select className="w-full px-4 py-3 rounded-lg bg-gray-700 border-2 border-gray-600 text-white font-semibold">
                        <option>Admin-Added Destination 1</option>
                        <option>Admin-Added Destination 2</option>
                        <option>Admin-Added Destination 3</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-bold text-gray-300 mb-2 block">Budget Range</label>
                      <select className="w-full px-4 py-3 rounded-lg bg-gray-700 border-2 border-gray-600 text-white font-semibold">
                        <option>₹5,000-15,000 (Budget)</option>
                        <option>₹15,000-35,000 (Medium)</option>
                        <option>₹35,000-75,000 (Premium)</option>
                        <option>₹75,000+ (Luxury)</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-bold text-gray-300 mb-2 block">Valid From</label>
                      <input
                        type="date"
                        className="w-full px-4 py-3 rounded-lg bg-gray-700 border-2 border-gray-600 text-white font-semibold"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-bold text-gray-300 mb-2 block">Valid Until</label>
                      <input
                        type="date"
                        className="w-full px-4 py-3 rounded-lg bg-gray-700 border-2 border-gray-600 text-white font-semibold"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-bold text-gray-300 mb-2 block">Deal Description</label>
                    <textarea
                      className="w-full px-4 py-3 rounded-lg bg-gray-700 border-2 border-gray-600 text-white font-semibold h-24 resize-none"
                      placeholder="Describe the deal..."
                    />
                  </div>
                  <div className="flex gap-3">
                    <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-xl text-lg font-bold flex items-center justify-center gap-2">
                      <CheckCircle className="h-5 w-5" />
                      Publish Deal & Notify Users
                    </Button>
                    <Button className="px-6 py-4 rounded-xl text-lg font-bold bg-gray-700 hover:bg-gray-600 text-white">
                      Save as Draft
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'content' && (
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-2xl border-3 border-gray-700 p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Content Management</h2>
              
              <div className="space-y-6">
                {/* Editable Text Sections */}
                {[
                  { id: 'landing-hero', label: 'Landing Page Hero Text', current: 'Explore nature-based experiences responsibly...' },
                  { id: 'admin-banner', label: 'Admin Banner Text', current: 'Discover sustainable destinations and eco-friendly activities...' },
                  { id: 'grok-insights', label: 'Grok AI Insights Text', current: 'AI-powered eco-travel recommendations...' },
                ].map(section => (
                  <div key={section.id} className="bg-gray-900 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-white">{section.label}</h3>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2">
                        <Edit2 className="h-4 w-4" />
                        Edit
                      </Button>
                    </div>
                    <div className="bg-yellow-900/20 border-2 border-dashed border-yellow-600 rounded-lg p-4">
                      <p className="text-sm font-bold text-yellow-400 mb-2">[Admin Editable]</p>
                      <p className="text-base text-gray-300 font-semibold">{section.current}</p>
                    </div>
                  </div>
                ))}

                {/* Image Assets */}
                <div className="bg-gray-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Category Images</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      '🐅 National Parks',
                      '🏘️ Tribal Villages',
                      '🌾 Organic Farms',
                      '🏡 Eco-Lodges',
                      '🐚 Coastal Marine',
                      '🌲 Forest Camps',
                    ].map(cat => (
                      <div key={cat} className="bg-gray-800 border-2 border-gray-700 rounded-lg p-4 text-center">
                        <div className="text-6xl mb-3">{cat.split(' ')[0]}</div>
                        <p className="text-sm text-gray-300 font-semibold mb-3">{cat.substring(3)}</p>
                        <Button className="w-full bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded-lg text-xs font-bold">
                          Replace Image
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'preferences' && (
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-2xl border-3 border-gray-700 p-8">
              <h2 className="text-3xl font-bold text-white mb-6">User Preferences Analytics</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Budget Distribution */}
                <div className="bg-gray-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Budget Distribution</h3>
                  <div className="space-y-3">
                    {[
                      { range: 'Budget (₹5k-15k)', count: 89, color: 'bg-blue-500' },
                      { range: 'Medium (₹15k-35k)', count: 156, color: 'bg-green-500' },
                      { range: 'Premium (₹35k-75k)', count: 67, color: 'bg-amber-500' },
                      { range: 'Luxury (₹75k+)', count: 23, color: 'bg-purple-500' },
                    ].map(item => (
                      <div key={item.range}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-gray-300 font-semibold">{item.range}</span>
                          <span className="text-sm text-white font-bold">{item.count}</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className={`${item.color} h-2 rounded-full`} style={{ width: `${(item.count / 335) * 100}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Category Preferences */}
                <div className="bg-gray-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Popular Categories</h3>
                  <div className="space-y-3">
                    {[
                      { cat: 'National Parks', count: 178 },
                      { cat: 'Eco-Lodges', count: 145 },
                      { cat: 'Organic Farms', count: 98 },
                      { cat: 'Coastal Marine', count: 76 },
                      { cat: 'Tribal Villages', count: 54 },
                      { cat: 'Forest Camps', count: 32 },
                    ].map(item => (
                      <div key={item.cat} className="flex items-center justify-between">
                        <span className="text-sm text-gray-300 font-semibold">{item.cat}</span>
                        <span className="text-lg text-white font-bold">{item.count}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Notification Preferences */}
                <div className="bg-gray-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Notification Channels</h3>
                  <div className="space-y-3">
                    {[
                      { channel: 'WhatsApp', count: 203, icon: '💬' },
                      { channel: 'Email', count: 98, icon: '📧' },
                      { channel: 'SMS', count: 34, icon: '📱' },
                    ].map(item => (
                      <div key={item.channel} className="flex items-center justify-between bg-gray-800 rounded-lg p-4">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl">{item.icon}</span>
                          <span className="text-base text-gray-300 font-semibold">{item.channel}</span>
                        </div>
                        <span className="text-xl text-white font-bold">{item.count}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stay Preferences */}
                <div className="bg-gray-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Stay Style Preferences</h3>
                  <div className="space-y-2">
                    {['Resort', 'Villa', 'Boutique', 'Budget', 'Luxury'].map((style, idx) => (
                      <div key={style} className="flex items-center justify-between bg-gray-800 rounded-lg p-3">
                        <span className="text-sm text-gray-300 font-semibold">{style}</span>
                        <span className="text-base text-white font-bold">{[87, 65, 43, 112, 28][idx]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
