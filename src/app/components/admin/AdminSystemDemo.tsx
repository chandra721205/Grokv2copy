import { useState } from 'react';
import { 
  Settings, Eye, Edit3, Layers, Zap, Shield, Globe, Sparkles,
  ArrowRight, CheckCircle, Code, Palette, Lock
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { AdminModeProvider } from '@/app/components/admin/AdminModeContext';
import { BeachParadiseWithAdmin } from '@/app/components/admin/BeachParadiseWithAdmin';

// ========================================
// ADMIN SYSTEM DEMO & DOCUMENTATION
// ========================================

export function AdminSystemDemo() {
  const [showLiveDemo, setShowLiveDemo] = useState(false);

  if (showLiveDemo) {
    return (
      <AdminModeProvider>
        <BeachParadiseWithAdmin
          onBack={() => setShowLiveDemo(false)}
          onGoogleSearch={(query) => window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank')}
          onYouTubeSearch={(query) => window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`, '_blank')}
        />
      </AdminModeProvider>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 px-6 pt-16 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Settings className="w-9 h-9 text-white" />
            </div>
            <div>
              <h1 className="text-white text-4xl font-bold">Admin Control System</h1>
              <p className="text-white/80 text-sm">Complete editing framework for GrokYatra</p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
              <div className="text-3xl font-bold text-white mb-1">100+</div>
              <div className="text-xs text-white/80">Editable Fields</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
              <div className="text-3xl font-bold text-white mb-1">5</div>
              <div className="text-xs text-white/80">Hierarchy Levels</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
              <div className="text-3xl font-bold text-white mb-1">∞</div>
              <div className="text-xs text-white/80">Screens Supported</div>
            </div>
          </div>

          {/* Launch Demo Button */}
          <Button
            onClick={() => setShowLiveDemo(true)}
            className="w-full bg-white text-purple-600 hover:bg-gray-100 h-14 rounded-2xl text-lg font-bold shadow-2xl"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Launch Live Demo
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* System Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Layers className="w-6 h-6 text-purple-600" />
            System Overview
          </h2>
          
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-6 border-2 border-purple-100">
            <p className="text-gray-700 mb-4">
              The Admin Control System provides a comprehensive editing framework that allows administrators 
              to modify all content across GrokYatra screens without touching code. It features a clean 
              toggle between User View and Admin Edit View, real-time preview, and organized field management.
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-xl p-3 flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-sm font-semibold text-gray-800">Real-time Preview</span>
              </div>
              <div className="bg-white rounded-xl p-3 flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-sm font-semibold text-gray-800">No Code Required</span>
              </div>
              <div className="bg-white rounded-xl p-3 flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-sm font-semibold text-gray-800">Purple Overlay Mode</span>
              </div>
              <div className="bg-white rounded-xl p-3 flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-sm font-semibold text-gray-800">Auto-save System</span>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Zap className="w-6 h-6 text-purple-600" />
            Key Features
          </h2>

          <div className="space-y-4">
            {/* Feature 1 */}
            <div className="bg-white rounded-3xl p-6 shadow-md border-2 border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">User View / Admin Edit View Toggle</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Seamlessly switch between clean user interface and powerful admin editing mode with a 
                    single toggle in the top-right corner.
                  </p>
                  <div className="bg-gray-50 rounded-xl p-3 flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-4 bg-gray-300 rounded-full relative">
                        <div className="w-3 h-3 bg-white rounded-full absolute top-0.5 left-0.5 shadow" />
                      </div>
                      <span className="text-xs font-semibold text-gray-600">User View</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-4 bg-purple-600 rounded-full relative">
                        <div className="w-3 h-3 bg-white rounded-full absolute top-0.5 right-0.5 shadow" />
                      </div>
                      <span className="text-xs font-semibold text-purple-600">Admin Edit</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-3xl p-6 shadow-md border-2 border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Edit3 className="w-6 h-6 text-indigo-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">Floating Edit Button</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    When in Admin Mode, a floating purple button appears in the bottom-right corner, 
                    allowing instant access to the control panel for the current screen.
                  </p>
                  <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full w-14 h-14 flex items-center justify-center shadow-lg">
                    <Edit3 className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-3xl p-6 shadow-md border-2 border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Palette className="w-6 h-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">Purple Overlay Mode</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Admin Edit View shows a subtle purple overlay across the entire screen, making it 
                    clear you're in editing mode while maintaining full visibility of content.
                  </p>
                  <div className="h-12 bg-purple-600/5 rounded-xl border-2 border-purple-200 flex items-center justify-center">
                    <span className="text-xs font-semibold text-purple-700">5% Purple Overlay</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-3xl p-6 shadow-md border-2 border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Layers className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">5-Level Hierarchy System</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Content is organized into 5 hierarchy levels with color-coded badges for easy navigation 
                    and batch editing.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-2 py-1 bg-purple-500 text-white text-xs rounded-full">Level 1</span>
                    <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded-full">Level 2</span>
                    <span className="px-2 py-1 bg-green-500 text-white text-xs rounded-full">Level 3</span>
                    <span className="px-2 py-1 bg-amber-500 text-white text-xs rounded-full">Level 4</span>
                    <span className="px-2 py-1 bg-rose-500 text-white text-xs rounded-full">Level 5</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="bg-white rounded-3xl p-6 shadow-md border-2 border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">Real-time Preview</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    See changes instantly as you type. The screen updates in real-time, allowing you to 
                    perfect your content before publishing.
                  </p>
                  <div className="bg-blue-50 rounded-xl p-3 text-xs text-blue-800">
                    ⚡ Changes appear immediately - No refresh needed
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="bg-white rounded-3xl p-6 shadow-md border-2 border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-amber-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">Save & Publish System</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Draft changes are auto-saved locally. When ready, publish to the live site with a 
                    single click. Includes unsaved changes indicator.
                  </p>
                  <div className="flex gap-2">
                    <Button className="bg-purple-600 text-white hover:bg-purple-700 h-9 text-xs">
                      Save Changes
                    </Button>
                    <Button className="bg-green-600 text-white hover:bg-green-700 h-9 text-xs">
                      <Sparkles className="w-3 h-3 mr-1" />
                      Publish
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Field Types */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Code className="w-6 h-6 text-purple-600" />
            Supported Field Types
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-4 shadow-md border-2 border-gray-100">
              <div className="font-bold mb-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-600 rounded-full" />
                Text Input
              </div>
              <p className="text-xs text-gray-600">Single-line text fields for titles, labels, and short content</p>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-md border-2 border-gray-100">
              <div className="font-bold mb-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full" />
                Textarea
              </div>
              <p className="text-xs text-gray-600">Multi-line text with character limits for descriptions</p>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-md border-2 border-gray-100">
              <div className="font-bold mb-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-600 rounded-full" />
                Price Range
              </div>
              <p className="text-xs text-gray-600">Formatted price inputs with currency symbols</p>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-md border-2 border-gray-100">
              <div className="font-bold mb-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-600 rounded-full" />
                Tags
              </div>
              <p className="text-xs text-gray-600">Dynamic tag management with add/remove functionality</p>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-md border-2 border-gray-100">
              <div className="font-bold mb-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-rose-600 rounded-full" />
                Image Upload
              </div>
              <p className="text-xs text-gray-600">URL input or file upload with preview functionality</p>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-md border-2 border-gray-100">
              <div className="font-bold mb-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-indigo-600 rounded-full" />
                More Coming
              </div>
              <p className="text-xs text-gray-600">Sliders, color pickers, and more field types</p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Settings className="w-6 h-6 text-purple-600" />
            How It Works
          </h2>

          <div className="space-y-3">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                1
              </div>
              <div className="flex-1">
                <h3 className="font-bold mb-1">Toggle Admin Mode</h3>
                <p className="text-sm text-gray-600">
                  Click the toggle in the top-right corner to switch from User View to Admin Edit View. 
                  The screen will show a purple overlay and the floating edit button will appear.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                2
              </div>
              <div className="flex-1">
                <h3 className="font-bold mb-1">Click Edit Button</h3>
                <p className="text-sm text-gray-600">
                  Click the floating purple button in the bottom-right corner to open the Admin Control Panel 
                  for the current screen.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                3
              </div>
              <div className="flex-1">
                <h3 className="font-bold mb-1">Edit Content</h3>
                <p className="text-sm text-gray-600">
                  The control panel slides in from the right showing all editable fields organized by hierarchy level. 
                  Make your changes and see them update in real-time.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                4
              </div>
              <div className="flex-1">
                <h3 className="font-bold mb-1">Save & Publish</h3>
                <p className="text-sm text-gray-600">
                  Click "Save Changes" to save your edits locally, or "Publish to Live Site" to make 
                  changes visible to all users. You can also reset changes if needed.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                ✓
              </div>
              <div className="flex-1">
                <h3 className="font-bold mb-1">Exit Admin Mode</h3>
                <p className="text-sm text-gray-600">
                  Toggle back to User View to see your changes in the clean, production-ready interface 
                  without any admin indicators.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Files Created */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Lock className="w-6 h-6 text-purple-600" />
            System Components
          </h2>

          <div className="bg-gray-900 rounded-3xl p-6 text-white">
            <div className="space-y-3 text-sm font-mono">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span className="text-green-400">AdminModeContext.tsx</span>
                <span className="text-gray-400 ml-auto">Context & State</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full" />
                <span className="text-blue-400">AdminControlPanel.tsx</span>
                <span className="text-gray-400 ml-auto">Main Panel UI</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full" />
                <span className="text-purple-400">BeachParadiseWithAdmin.tsx</span>
                <span className="text-gray-400 ml-auto">Integration Example</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full" />
                <span className="text-amber-400">AdminSystemDemo.tsx</span>
                <span className="text-gray-400 ml-auto">Documentation</span>
              </div>
            </div>
          </div>
        </section>

        {/* Launch Demo CTA */}
        <section>
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Experience It?</h2>
            <p className="text-white/90 mb-6">
              See the Admin Control System in action with a fully functional demo
            </p>
            <Button
              onClick={() => setShowLiveDemo(true)}
              className="bg-white text-purple-600 hover:bg-gray-100 h-14 rounded-2xl text-lg font-bold px-8 shadow-2xl"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Launch Live Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
