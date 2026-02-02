import { useState } from 'react';
import { PostTripHeritageFeedback } from './PostTripHeritageFeedback';
import { Button } from '@/app/components/ui/button';

export function PostTripFeedbackDemo() {
  const [showFeedback, setShowFeedback] = useState(true);

  return (
    <div className="min-h-screen p-6" style={{ background: 'linear-gradient(135deg, #F5E9D9 0%, #E8D5C4 100%)' }}>
      {/* Demo Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="bg-white rounded-2xl border-3 p-6 shadow-xl" style={{ borderColor: '#8B0000' }}>
          <h1 className="text-4xl font-bold mb-3 flex items-center gap-3" style={{ fontFamily: 'Playfair Display, serif', color: '#8B0000' }}>
            <span className="text-5xl">🏛️</span>
            Post-Trip Heritage Feedback System Demo
          </h1>
          <p className="text-lg font-semibold mb-4" style={{ color: '#4A4A4A' }}>
            Specialized feedback form for heritage tourism experiences with badge rewards
          </p>
          <div className="flex flex-wrap gap-3">
            <div className="bg-red-100 border-2 rounded-xl px-4 py-2" style={{ borderColor: '#8B0000' }}>
              <p className="text-sm font-bold" style={{ color: '#8B0000' }}>✅ Heritage Maroon Theme</p>
            </div>
            <div className="bg-yellow-100 border-2 rounded-xl px-4 py-2" style={{ borderColor: '#D4AF37' }}>
              <p className="text-sm font-bold" style={{ color: '#D4AF37' }}>✅ Antiqued Gold Accents</p>
            </div>
            <div className="bg-orange-100 border-2 rounded-xl px-4 py-2" style={{ borderColor: '#E2725B' }}>
              <p className="text-sm font-bold" style={{ color: '#E2725B' }}>✅ Terracotta Details</p>
            </div>
            <div className="bg-amber-100 border-2 border-amber-400 rounded-xl px-4 py-2">
              <p className="text-sm font-bold text-amber-700">✅ Playfair Display Typography</p>
            </div>
            <div className="bg-green-100 border-2 border-green-400 rounded-xl px-4 py-2">
              <p className="text-sm font-bold text-green-700">✅ Heritage Explorer Badge</p>
            </div>
          </div>
        </div>
      </div>

      {/* Launch Button */}
      {!showFeedback && (
        <div className="max-w-7xl mx-auto text-center mb-8">
          <Button
            onClick={() => setShowFeedback(true)}
            className="px-12 py-8 rounded-2xl text-2xl font-bold shadow-2xl"
            style={{ background: 'linear-gradient(135deg, #8B0000 0%, #D4AF37 100%)', color: 'white' }}
          >
            <span className="text-4xl mr-3">🏛️</span>
            Open Feedback Form
          </Button>
        </div>
      )}

      {/* Feedback Component */}
      <PostTripHeritageFeedback
        isOpen={showFeedback}
        onClose={() => setShowFeedback(false)}
        tripName="Golden Triangle Tour"
      />

      {/* Feature Highlights */}
      {!showFeedback && (
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl border-3 p-6 shadow-lg" style={{ borderColor: '#8B0000' }}>
              <div className="text-5xl mb-3">⭐</div>
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif', color: '#8B0000' }}>
                Specialized Ratings
              </h3>
              <ul className="space-y-2 text-base" style={{ color: '#4A4A4A' }}>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#D4AF37' }}>•</span>
                  <span className="font-semibold">Guide Knowledge (5-star)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#D4AF37' }}>•</span>
                  <span className="font-semibold">Historical Accuracy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#D4AF37' }}>•</span>
                  <span className="font-semibold">Accessibility Features</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#D4AF37' }}>•</span>
                  <span className="font-semibold">Cultural Authenticity</span>
                </li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl border-3 p-6 shadow-lg" style={{ borderColor: '#D4AF37' }}>
              <div className="text-5xl mb-3">✅</div>
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif', color: '#8B0000' }}>
                Experience Factors
              </h3>
              <ul className="space-y-2 text-base" style={{ color: '#4A4A4A' }}>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#D4AF37' }}>•</span>
                  <span className="font-semibold">Expert guides selection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#D4AF37' }}>•</span>
                  <span className="font-semibold">Accessible facilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#D4AF37' }}>•</span>
                  <span className="font-semibold">Artisan interactions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#D4AF37' }}>•</span>
                  <span className="font-semibold">Value for money</span>
                </li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl border-3 p-6 shadow-lg" style={{ borderColor: '#E2725B' }}>
              <div className="text-5xl mb-3">🏆</div>
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif', color: '#8B0000' }}>
                Badge Reward System
              </h3>
              <ul className="space-y-2 text-base" style={{ color: '#4A4A4A' }}>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#D4AF37' }}>•</span>
                  <span className="font-semibold">Heritage Explorer Badge</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#D4AF37' }}>•</span>
                  <span className="font-semibold">Instant badge award</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#D4AF37' }}>•</span>
                  <span className="font-semibold">Photo gallery feature</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#D4AF37' }}>•</span>
                  <span className="font-semibold">Conservation impact</span>
                </li>
              </ul>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-2xl border-3 p-6 shadow-lg" style={{ borderColor: '#8B0000' }}>
              <div className="text-5xl mb-3">💬</div>
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif', color: '#8B0000' }}>
                Conservation Input
              </h3>
              <ul className="space-y-2 text-base" style={{ color: '#4A4A4A' }}>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#D4AF37' }}>•</span>
                  <span className="font-semibold">Open text suggestions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#D4AF37' }}>•</span>
                  <span className="font-semibold">Forward to authorities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#D4AF37' }}>•</span>
                  <span className="font-semibold">Maintenance improvements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#D4AF37' }}>•</span>
                  <span className="font-semibold">Visitor management ideas</span>
                </li>
              </ul>
            </div>

            {/* Feature 5 */}
            <div className="bg-white rounded-2xl border-3 p-6 shadow-lg" style={{ borderColor: '#D4AF37' }}>
              <div className="text-5xl mb-3">📸</div>
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif', color: '#8B0000' }}>
                Photo Sharing
              </h3>
              <ul className="space-y-2 text-base" style={{ color: '#4A4A4A' }}>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#D4AF37' }}>•</span>
                  <span className="font-semibold">Upload best photo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#D4AF37' }}>•</span>
                  <span className="font-semibold">Heritage gallery feature</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#D4AF37' }}>•</span>
                  <span className="font-semibold">JPG, PNG up to 10MB</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#D4AF37' }}>•</span>
                  <span className="font-semibold">Preview before submit</span>
                </li>
              </ul>
            </div>

            {/* Feature 6 */}
            <div className="bg-white rounded-2xl border-3 p-6 shadow-lg" style={{ borderColor: '#E2725B' }}>
              <div className="text-5xl mb-3">🎨</div>
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif', color: '#8B0000' }}>
                Heritage Theme Design
              </h3>
              <ul className="space-y-2 text-base" style={{ color: '#4A4A4A' }}>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#D4AF37' }}>•</span>
                  <span className="font-semibold">Maroon & Gold palette</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#D4AF37' }}>•</span>
                  <span className="font-semibold">Playfair Display serif</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#D4AF37' }}>•</span>
                  <span className="font-semibold">Parchment background</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#D4AF37' }}>•</span>
                  <span className="font-semibold">Terracotta accents</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Design Specifications */}
          <div className="mt-8 bg-gray-900 rounded-2xl border-3 border-gray-700 p-8 shadow-xl">
            <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3" style={{ fontFamily: 'Playfair Display, serif' }}>
              <span className="text-4xl">🎨</span>
              Heritage Design System
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-800 rounded-xl p-5 border-2 border-gray-600">
                <h4 className="text-lg font-bold mb-3" style={{ color: '#8B0000' }}>Primary Color</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg border-2 border-white" style={{ backgroundColor: '#8B0000' }}></div>
                    <div>
                      <p className="text-sm font-bold text-white">Heritage Maroon</p>
                      <p className="text-xs font-mono text-gray-400">#8B0000</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-5 border-2 border-gray-600">
                <h4 className="text-lg font-bold mb-3" style={{ color: '#D4AF37' }}>Secondary Color</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg border-2 border-white" style={{ backgroundColor: '#D4AF37' }}></div>
                    <div>
                      <p className="text-sm font-bold text-white">Antiqued Gold</p>
                      <p className="text-xs font-mono text-gray-400">#D4AF37</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-5 border-2 border-gray-600">
                <h4 className="text-lg font-bold mb-3" style={{ color: '#E2725B' }}>Accent Color</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg border-2 border-white" style={{ backgroundColor: '#E2725B' }}></div>
                    <div>
                      <p className="text-sm font-bold text-white">Clay Terracotta</p>
                      <p className="text-xs font-mono text-gray-400">#E2725B</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-5 border-2 border-gray-600">
                <h4 className="text-lg font-bold mb-3" style={{ color: '#F5E9D9' }}>Background</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg border-2 border-gray-500" style={{ backgroundColor: '#F5E9D9' }}></div>
                    <div>
                      <p className="text-sm font-bold text-white">Parchment</p>
                      <p className="text-xs font-mono text-gray-400">#F5E9D9</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t-2 border-gray-700">
              <h4 className="text-xl font-bold text-white mb-4">Typography System</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-800 rounded-xl p-4 border-2 border-gray-600">
                  <p className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Headers
                  </p>
                  <p className="text-sm text-gray-400">Playfair Display (Serif)</p>
                  <p className="text-xs text-gray-500 mt-1">Heritage feel, elegance</p>
                </div>
                <div className="bg-gray-800 rounded-xl p-4 border-2 border-gray-600">
                  <p className="text-xl font-semibold text-white mb-2">
                    Body Text
                  </p>
                  <p className="text-sm text-gray-400">Open Sans (Sans-serif)</p>
                  <p className="text-xs text-gray-500 mt-1">Readability, consistency</p>
                </div>
                <div className="bg-gray-800 rounded-xl p-4 border-2 border-gray-600">
                  <p className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Prices
                  </p>
                  <p className="text-sm text-gray-400">Montserrat Bold</p>
                  <p className="text-xs text-gray-500 mt-1">Emphasis, clarity</p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Details */}
          <div className="mt-8 bg-white rounded-2xl border-3 p-8 shadow-xl" style={{ borderColor: '#8B0000' }}>
            <h3 className="text-3xl font-bold mb-6 flex items-center gap-3" style={{ fontFamily: 'Playfair Display, serif', color: '#8B0000' }}>
              <span className="text-4xl">⚙️</span>
              Component Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-bold mb-4" style={{ color: '#8B0000' }}>Interactive Elements</h4>
                <ul className="space-y-2 text-base" style={{ color: '#4A4A4A' }}>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#D4AF37' }}>→</span>
                    <span className="font-semibold">5-star rating system with hover effects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#D4AF37' }}>→</span>
                    <span className="font-semibold">Toggle checkboxes with visual feedback</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#D4AF37' }}>→</span>
                    <span className="font-semibold">Image upload with preview</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#D4AF37' }}>→</span>
                    <span className="font-semibold">Real-time completion tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#D4AF37' }}>→</span>
                    <span className="font-semibold">Success state with badge animation</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4" style={{ color: '#8B0000' }}>Data Collection</h4>
                <ul className="space-y-2 text-base" style={{ color: '#4A4A4A' }}>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#D4AF37' }}>→</span>
                    <span className="font-semibold">4 specialized rating categories</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#D4AF37' }}>→</span>
                    <span className="font-semibold">5 pre-defined experience factors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#D4AF37' }}>→</span>
                    <span className="font-semibold">Open-ended conservation suggestions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#D4AF37' }}>→</span>
                    <span className="font-semibold">Photo upload with file validation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#D4AF37' }}>→</span>
                    <span className="font-semibold">Average rating calculation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
