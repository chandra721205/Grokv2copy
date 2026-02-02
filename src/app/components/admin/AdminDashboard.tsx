import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Settings,
  Image as ImageIcon,
  FileText,
  TrendingUp,
  Edit3,
  Save,
  Upload,
  Calendar,
  BarChart3,
  MapPin,
  DollarSign,
  Tag,
  Bell,
  Search,
  Filter,
  MoreVertical,
  Plus,
  Trash2,
  Eye,
  RefreshCw,
  ChevronRight,
  ChevronDown,
  Layout,
  MessageSquare,
  Heart,
  Users,
  Globe,
  Clock,
  CheckCircle2,
  AlertCircle,
  Zap
} from 'lucide-react';
import { ComponentAnnotation, type AnnotationData } from '@/app/components/ui/ComponentAnnotation';
import { AdminEditableSection } from '@/app/components/ui/AdminEditableSection';
import { LivePreviewButton, type LivePreviewData } from '@/app/components/admin/LivePreview';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { Card } from '@/app/components/ui/card';
import { Switch } from '@/app/components/ui/switch';
import { Badge } from '@/app/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';

// ========================================
// ADMIN DASHBOARD - MAIN COMPONENT
// Complete Admin Management Interface
// ========================================

export function AdminDashboard() {
  const [activeSection, setActiveSection] = useState<string>('destination');
  const [showAnnotations, setShowAnnotations] = useState(true);

  const dashboardAnnotations: AnnotationData = {
    purpose: {
      why: 'Central hub for admins to manage all app content, destinations, and configurations without touching code',
      userBenefit: 'Admins can update content quickly, schedule changes, and view analytics in one place',
      businessValue: 'Reduces dependency on developers for content updates, enabling faster iteration and seasonal campaigns'
    },
    admin: {
      howToUpdate: 'Navigate between 4 main sections using tabs. Each section provides specialized tools for different content types',
      contentGuidelines: 'Use clear, descriptive names for destinations. Follow seasonal pricing patterns. Keep messages under 100 characters',
      updateFrequency: 'Update destinations weekly, seasonal pricing monthly, trending content daily'
    },
    technical: {
      dataMapping: 'Maps to destinations[], categories[], filters[], deals[], and analytics[] collections in database',
      apiIntegration: 'REST API endpoints: /api/admin/destinations, /api/admin/content, /api/admin/analytics',
      stateManagement: 'Uses React Query for caching, optimistic updates, and real-time sync across admin sessions'
    },
    flow: {
      previousStep: 'Admin login → Role verification → Dashboard access granted',
      currentAction: 'Admin views overview stats and selects management section to work in',
      nextStep: 'Admin navigates to specific section (Destinations, Content, Analytics, or Tools) to perform updates'
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  GrokYatra Admin Dashboard
                </h1>
                <p className="text-sm text-gray-600">
                  Comprehensive Content Management System
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="gap-2">
                <Eye className="w-4 h-4" />
                Preview App
              </Button>
              <Button size="sm" className="gap-2 bg-gradient-to-r from-purple-600 to-indigo-600">
                <Save className="w-4 h-4" />
                Save All Changes
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto px-6 py-8">
        {/* Dashboard Annotations */}
        {showAnnotations && (
          <div className="mb-8">
            <ComponentAnnotation
              data={dashboardAnnotations}
              defaultExpanded={false}
            />
          </div>
        )}

        {/* Quick Stats */}
        <QuickStatsSection />

        {/* Main Content Tabs */}
        <Tabs value={activeSection} onValueChange={setActiveSection} className="mt-8">
          <TabsList className="grid w-full grid-cols-4 h-auto p-1 bg-white rounded-3xl shadow-sm">
            <TabsTrigger value="destination" className="rounded-2xl py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white">
              <MapPin className="w-4 h-4 mr-2" />
              Destination Management
            </TabsTrigger>
            <TabsTrigger value="content" className="rounded-2xl py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white">
              <FileText className="w-4 h-4 mr-2" />
              Content Configuration
            </TabsTrigger>
            <TabsTrigger value="analytics" className="rounded-2xl py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white">
              <TrendingUp className="w-4 h-4 mr-2" />
              User Interest Analytics
            </TabsTrigger>
            <TabsTrigger value="tools" className="rounded-2xl py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white">
              <Zap className="w-4 h-4 mr-2" />
              Admin Tools
            </TabsTrigger>
          </TabsList>

          {/* Section 1: Destination Management */}
          <TabsContent value="destination" className="mt-6">
            <DestinationManagementSection showAnnotations={showAnnotations} />
          </TabsContent>

          {/* Section 2: Content Configuration */}
          <TabsContent value="content" className="mt-6">
            <ContentConfigurationSection showAnnotations={showAnnotations} />
          </TabsContent>

          {/* Section 3: User Interest Analytics */}
          <TabsContent value="analytics" className="mt-6">
            <UserInterestAnalyticsSection showAnnotations={showAnnotations} />
          </TabsContent>

          {/* Section 4: Admin Tools */}
          <TabsContent value="tools" className="mt-6">
            <AdminToolsSection showAnnotations={showAnnotations} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

// ========================================
// QUICK STATS SECTION
// Overview metrics
// ========================================

function QuickStatsSection() {
  const stats = [
    { 
      label: 'Total Destinations', 
      value: '247', 
      change: '+12 this week',
      icon: MapPin,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      label: 'Active Categories', 
      value: '13', 
      change: 'All configured',
      icon: Layout,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      label: 'User Interests Tracked', 
      value: '1,834', 
      change: '+156 today',
      icon: Heart,
      color: 'from-orange-500 to-red-500'
    },
    { 
      label: 'Pending Updates', 
      value: '8', 
      change: 'Needs attention',
      icon: AlertCircle,
      color: 'from-amber-500 to-yellow-500'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="p-6 rounded-3xl border-2 border-gray-100 bg-white hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-xs text-gray-500">{stat.change}</p>
              </div>
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

// ========================================
// SECTION 1: DESTINATION MANAGEMENT
// Add, edit, update destinations
// ========================================

function DestinationManagementSection({ showAnnotations }: { showAnnotations: boolean }) {
  const [destinations, setDestinations] = useState([
    { id: 1, name: 'Admin-Added Destination 1', category: 'Heritage Sites', price: '₹15,000', status: 'active', image: 'placeholder.jpg' },
    { id: 2, name: 'Location X - Beach Paradise', category: 'Beach Paradise', price: '₹22,000', status: 'active', image: 'placeholder.jpg' },
    { id: 3, name: '[Admin: Update Destination Name]', category: 'Mountain Retreats', price: '₹18,500', status: 'draft', image: 'placeholder.jpg' }
  ]);

  const sectionAnnotations: AnnotationData = {
    purpose: {
      why: 'Admins need to manage destination database - add new places, update existing info, control pricing',
      userBenefit: 'Users see accurate, up-to-date destination info with current pricing and availability',
      businessValue: 'Dynamic content updates without developer dependency, seasonal campaigns, regional expansion'
    },
    admin: {
      howToUpdate: 'Click "Add New Destination" button → Fill form → Upload images → Set pricing → Publish or Save as Draft',
      contentGuidelines: 'Use format "Location X - Description" for names. Upload high-quality 1200x800px images. Keep descriptions under 200 words',
      updateFrequency: 'Add new destinations weekly. Update prices before peak seasons. Review all quarterly'
    },
    technical: {
      dataMapping: 'destinations[] collection: {id, name, category, basePrice, seasonalPricing[], images[], description, features[], status}',
      apiIntegration: 'POST /api/destinations/create, PUT /api/destinations/:id/update, DELETE /api/destinations/:id',
      stateManagement: 'Optimistic updates with rollback on error. Real-time sync via WebSocket for multi-admin editing'
    },
    flow: {
      previousStep: 'Admin logged into dashboard → Selected Destination Management tab',
      currentAction: 'Admin browses destination list, searches, filters, or clicks to add/edit destination',
      nextStep: 'Admin modifies destination → Saves changes → System validates → Updates database → Reflects in user-facing app'
    }
  };

  return (
    <div className="space-y-6">
      {/* Annotations */}
      {showAnnotations && (
        <ComponentAnnotation
          data={sectionAnnotations}
          defaultExpanded={false}
        />
      )}

      {/* Action Bar */}
      <div className="flex items-center justify-between bg-white rounded-3xl p-4 shadow-sm border-2 border-gray-100">
        <div className="flex items-center gap-3 flex-1">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Search destinations by name, category, or location..."
              className="pl-10 rounded-2xl border-2"
            />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px] rounded-2xl border-2">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="heritage">Heritage Sites</SelectItem>
              <SelectItem value="beach">Beach Paradise</SelectItem>
              <SelectItem value="mountain">Mountain Retreats</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="active">
            <SelectTrigger className="w-[150px] rounded-2xl border-2">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button className="gap-2 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600">
          <Plus className="w-4 h-4" />
          Add New Destination
        </Button>
      </div>

      {/* Destinations Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {destinations.map((dest, index) => (
          <DestinationCard key={dest.id} destination={dest} index={index} />
        ))}
      </div>

      {/* Bulk Actions Panel */}
      <AdminEditableSection
        level={4}
        title="Seasonal Pricing Update"
        description="Update pricing for multiple destinations at once"
        showAdminIndicators={showAnnotations}
        showBanner={true}
        showInstructions={true}
        batchUpdateEnabled={true}
        batchItemCount={247}
      >
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="text-sm font-semibold text-gray-700 mb-2 block">
              Season
            </label>
            <Select defaultValue="summer">
              <SelectTrigger className="rounded-2xl">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="summer">Summer (Mar-Jun)</SelectItem>
                <SelectItem value="monsoon">Monsoon (Jul-Sep)</SelectItem>
                <SelectItem value="winter">Winter (Oct-Feb)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-700 mb-2 block">
              Price Adjustment
            </label>
            <Select defaultValue="increase">
              <SelectTrigger className="rounded-2xl">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="increase">Increase by %</SelectItem>
                <SelectItem value="decrease">Decrease by %</SelectItem>
                <SelectItem value="fixed">Set Fixed Amount</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-700 mb-2 block">
              Percentage/Amount
            </label>
            <Input
              type="number"
              placeholder="Enter value"
              className="rounded-2xl"
            />
          </div>
        </div>
        <Button className="w-full mt-4 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600">
          <Save className="w-4 h-4 mr-2" />
          Apply to Selected Destinations
        </Button>
      </AdminEditableSection>

      {/* Image Upload Tool */}
      <ImageUploadTool showAnnotations={showAnnotations} />
    </div>
  );
}

// ========================================
// DESTINATION CARD
// Individual destination in management grid
// ========================================

function DestinationCard({ destination, index }: { destination: any; index: number }) {
  const previewData: LivePreviewData = {
    name: destination.name,
    category: destination.category,
    description: 'Experience the beauty and culture of this amazing destination. Perfect for travelers seeking adventure and relaxation.',
    basePrice: parseFloat(destination.price.replace('₹', '').replace(',', '')),
    images: [],
    features: ['Guided Tours', 'Accommodation', 'Meals Included'],
    locale: 'en'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="rounded-3xl overflow-hidden border-2 border-gray-100 hover:shadow-xl transition-all">
        {/* Image Preview */}
        <div className="h-48 bg-gradient-to-br from-purple-200 to-blue-200 relative">
          <div className="absolute top-3 right-3 flex gap-2">
            <Badge className={`
              ${destination.status === 'active' ? 'bg-green-500' : 'bg-amber-500'}
              text-white rounded-full
            `}>
              {destination.status === 'active' ? '✓ Active' : '📝 Draft'}
            </Badge>
          </div>
          <div className="absolute bottom-3 left-3">
            <Button size="sm" variant="secondary" className="gap-2 rounded-2xl">
              <Upload className="w-3 h-3" />
              Change Image
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h4 className="font-bold text-gray-900 mb-1">{destination.name}</h4>
              <p className="text-sm text-gray-600">{destination.category}</p>
            </div>
            <Button size="sm" variant="ghost" className="rounded-full">
              <MoreVertical className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <DollarSign className="w-4 h-4 text-gray-400" />
            <span className="font-bold text-lg text-purple-600">{destination.price}</span>
            <span className="text-xs text-gray-500">Base Price</span>
          </div>

          <div className="flex gap-2 mb-3">
            <Button size="sm" className="flex-1 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600">
              <Edit3 className="w-3 h-3 mr-1" />
              Edit
            </Button>
            <LivePreviewButton
              data={previewData}
              variant="outline"
              size="sm"
              className="flex-1 rounded-2xl"
              onSave={(updatedData) => {
                console.log('Saved:', updatedData);
              }}
            />
            <Button size="sm" variant="outline" className="rounded-2xl text-red-600 hover:bg-red-50">
              <Trash2 className="w-3 h-3" />
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

// ========================================
// IMAGE UPLOAD TOOL
// Bulk image management
// ========================================

function ImageUploadTool({ showAnnotations }: { showAnnotations: boolean }) {
  const toolAnnotations: AnnotationData = {
    purpose: {
      why: 'High-quality destination images are critical for user engagement and booking conversion',
      userBenefit: 'Users see beautiful, optimized photos that load fast and showcase destinations accurately',
      businessValue: 'Professional imagery increases trust, reduces bounce rate, and improves booking conversion by 40%'
    },
    admin: {
      howToUpdate: 'Drag & drop images or click to browse → System auto-optimizes for web → Preview before saving → Assign to destinations',
      contentGuidelines: 'Use landscape orientation 16:9 ratio. Minimum 1200x800px. JPEG format preferred. File size under 2MB',
      updateFrequency: 'Upload new images when adding destinations. Refresh seasonal photos quarterly (summer/monsoon/winter)'
    },
    technical: {
      dataMapping: 'images[] collection: {id, url, destinationId, type, optimizedSizes[], alt, uploadedBy, uploadDate}',
      apiIntegration: 'POST /api/images/upload (multipart), GET /api/images/:id, DELETE /api/images/:id. CDN integration for delivery',
      stateManagement: 'Upload progress tracking, automatic WebP conversion, lazy loading implementation, CDN cache invalidation'
    },
    flow: {
      previousStep: 'Admin in Destination Management → Clicked "Upload Images" or editing destination',
      currentAction: 'Admin selects images → System processes and optimizes → Preview generated thumbnails',
      nextStep: 'Admin assigns images to destinations → System updates database → CDN distributes → Live in app'
    }
  };

  return (
    <div>
      {showAnnotations && (
        <div className="mb-4">
          <ComponentAnnotation
            data={toolAnnotations}
            defaultExpanded={false}
          />
        </div>
      )}

      <Card className="rounded-3xl p-6 border-2 border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <ImageIcon className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Destination Image Upload</h3>
              <p className="text-sm text-gray-600">Drag & drop or browse to upload</p>
            </div>
          </div>
          <Button variant="outline" className="gap-2 rounded-2xl">
            <RefreshCw className="w-4 h-4" />
            Auto-Optimize All
          </Button>
        </div>

        <div className="border-2 border-dashed border-gray-300 rounded-3xl p-12 text-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
          <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-700 font-semibold mb-2">
            Drop destination images here
          </p>
          <p className="text-sm text-gray-500 mb-4">
            or click to browse your computer
          </p>
          <Button className="rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600">
            Select Images
          </Button>
        </div>

        <div className="mt-4 grid grid-cols-4 gap-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-video rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 border-2 border-gray-200 flex items-center justify-center text-gray-400">
              <ImageIcon className="w-8 h-8" />
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

// ========================================
// SECTION 2: CONTENT CONFIGURATION
// Update app text, labels, messages
// ========================================

function ContentConfigurationSection({ showAnnotations }: { showAnnotations: boolean }) {
  const sectionAnnotations: AnnotationData = {
    purpose: {
      why: 'All user-facing text, labels, and messages need to be editable without code changes',
      userBenefit: 'Users see localized, seasonally-relevant content and clear navigation labels',
      businessValue: 'Enables A/B testing of messaging, seasonal campaigns, and multi-language support'
    },
    admin: {
      howToUpdate: 'Select content type → Edit in WYSIWYG editor → Preview changes → Publish or schedule for later',
      contentGuidelines: 'Keep category descriptions under 50 words. Filter labels: 2-3 words max. Deals: action-oriented, urgent language',
      updateFrequency: 'Category descriptions: monthly. Filter labels: quarterly. Deal messages: daily during campaigns'
    },
    technical: {
      dataMapping: 'content[] collection: {id, type, key, value, locale, version, scheduledDate, status}',
      apiIntegration: 'GET /api/content?type=categories, PUT /api/content/:id, POST /api/content/bulk-update',
      stateManagement: 'Version history tracking, rollback capability, scheduled publishing queue, cache invalidation'
    },
    flow: {
      previousStep: 'Admin accessed Content Configuration tab from dashboard',
      currentAction: 'Admin browses content categories and edits text fields using rich text editor',
      nextStep: 'Admin saves changes → Validates content → Publishes immediately or schedules → Updates app display'
    }
  };

  return (
    <div className="space-y-6">
      {showAnnotations && (
        <ComponentAnnotation
          data={sectionAnnotations}
          defaultExpanded={false}
        />
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Category Descriptions */}
        <CategoryDescriptionsEditor showAnnotations={showAnnotations} />

        {/* Filter Labels Manager */}
        <FilterLabelsManager showAnnotations={showAnnotations} />

        {/* Deal Messages */}
        <DealMessagesEditor showAnnotations={showAnnotations} />

        {/* Browse Integration Texts */}
        <BrowseIntegrationEditor showAnnotations={showAnnotations} />
      </div>
    </div>
  );
}

// ========================================
// CATEGORY DESCRIPTIONS EDITOR
// ========================================

function CategoryDescriptionsEditor({ showAnnotations }: { showAnnotations: boolean }) {
  const categories = [
    { id: 1, name: 'Heritage Sites', description: '[Admin: Update category description for Heritage Sites]' },
    { id: 2, name: 'Beach Paradise', description: '[Admin: Update category description for Beach Paradise]' },
    { id: 3, name: 'Mountain Retreats', description: '[Admin: Update category description for Mountain Retreats]' }
  ];

  return (
    <Card className="rounded-3xl p-6 border-2 border-gray-100 col-span-2">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <FileText className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900">Category Descriptions</h3>
            <p className="text-sm text-gray-600">Update category introductory text</p>
          </div>
        </div>
        <Button variant="outline" className="gap-2 rounded-2xl">
          <Save className="w-4 h-4" />
          Save All
        </Button>
      </div>

      <AdminEditableSection
        level={2}
        showAdminIndicators={showAnnotations}
        showBanner={true}
        showInstructions={true}
        batchUpdateEnabled={false}
      >
        <div className="space-y-4">
          {categories.map((category) => (
            <div key={category.id} className="bg-white rounded-2xl p-4 border-2 border-gray-200">
              <label className="text-sm font-bold text-gray-700 mb-2 block">
                {category.name}
              </label>
              <Textarea
                defaultValue={category.description}
                className="rounded-2xl min-h-[100px] bg-gray-50 border-2"
                placeholder="Enter category description..."
              />
              <p className="text-xs text-gray-500 mt-2">
                0/200 characters • Keep under 50 words
              </p>
            </div>
          ))}
        </div>
      </AdminEditableSection>
    </Card>
  );
}

// ========================================
// FILTER LABELS MANAGER
// ========================================

function FilterLabelsManager({ showAnnotations }: { showAnnotations: boolean }) {
  const filters = [
    { id: 1, category: 'Budget', labels: ['Budget-Friendly', 'Mid-Range', 'Luxury'] },
    { id: 2, category: 'Duration', labels: ['Weekend', '3-5 Days', 'Week+'] },
    { id: 3, category: 'Season', labels: ['Summer', 'Monsoon', 'Winter'] }
  ];

  return (
    <Card className="rounded-3xl p-6 border-2 border-gray-100 col-span-2">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
            <Filter className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900">Filter Labels</h3>
            <p className="text-sm text-gray-600">Manage user selection chips</p>
          </div>
        </div>
        <Button className="gap-2 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600">
          <Plus className="w-4 h-4" />
          Add Filter
        </Button>
      </div>

      <AdminEditableSection
        level={3}
        showAdminIndicators={showAnnotations}
        showBanner={true}
        showInstructions={true}
        batchUpdateEnabled={true}
        batchItemCount={9}
      >
        <div className="space-y-6">
          {filters.map((filter) => (
            <div key={filter.id}>
              <label className="text-sm font-bold text-gray-700 mb-3 block">
                {filter.category}
              </label>
              <div className="flex flex-wrap gap-2">
                {filter.labels.map((label, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-white rounded-full px-4 py-2 border-2 border-purple-200">
                    <Input
                      defaultValue={label}
                      className="border-0 p-0 h-auto text-sm w-24 focus-visible:ring-0"
                    />
                    <button className="text-red-500 hover:text-red-700">
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                ))}
                <Button size="sm" variant="outline" className="rounded-full">
                  <Plus className="w-3 h-3 mr-1" />
                  Add
                </Button>
              </div>
            </div>
          ))}
        </div>
      </AdminEditableSection>
    </Card>
  );
}

// ========================================
// DEAL MESSAGES EDITOR
// ========================================

function DealMessagesEditor({ showAnnotations }: { showAnnotations: boolean }) {
  const deals = [
    { id: 1, trigger: 'User viewed 3+ destinations', message: '🎯 Special Deal: Save 20% on your favorite picks!' },
    { id: 2, trigger: 'User favorited 5+ items', message: '💝 Exclusive: Bundle your favorites for 30% off!' },
    { id: 3, trigger: 'Seasonal campaign', message: '🌴 Summer Sale: Book now and save up to 40%!' }
  ];

  return (
    <Card className="rounded-3xl p-6 border-2 border-gray-100 col-span-2">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
            <Tag className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900">Deal Messages</h3>
            <p className="text-sm text-gray-600">Configure promotional alerts</p>
          </div>
        </div>
        <Button className="gap-2 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600">
          <Plus className="w-4 h-4" />
          Create Deal
        </Button>
      </div>

      <AdminEditableSection
        level={1}
        showAdminIndicators={showAnnotations}
        showBanner={true}
        showInstructions={true}
        batchUpdateEnabled={false}
      >
        <div className="space-y-4">
          {deals.map((deal) => (
            <div key={deal.id} className="bg-white rounded-2xl p-4 border-2 border-gray-200">
              <div className="flex items-center justify-between mb-3">
                <Badge className="bg-purple-100 text-purple-700 rounded-full">
                  {deal.trigger}
                </Badge>
                <Switch defaultChecked />
              </div>
              <Input
                defaultValue={deal.message}
                className="rounded-2xl bg-gray-50 border-2"
                placeholder="Enter deal message..."
              />
              <p className="text-xs text-gray-500 mt-2">
                0/100 characters • Keep urgent and action-oriented
              </p>
            </div>
          ))}
        </div>
      </AdminEditableSection>
    </Card>
  );
}

// ========================================
// BROWSE INTEGRATION EDITOR
// ========================================

function BrowseIntegrationEditor({ showAnnotations }: { showAnnotations: boolean }) {
  return (
    <Card className="rounded-3xl p-6 border-2 border-gray-100 col-span-2">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
            <Globe className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900">Browse Integration Texts</h3>
            <p className="text-sm text-gray-600">Google Search & YouTube buttons</p>
          </div>
        </div>
      </div>

      <AdminEditableSection
        level={5}
        showAdminIndicators={showAnnotations}
        showBanner={true}
        showInstructions={true}
      >
        <div className="space-y-4">
          <div>
            <label className="text-sm font-semibold text-gray-700 mb-2 block">
              Google Search Button Text
            </label>
            <Input
              defaultValue="🔍 Search on Google"
              className="rounded-2xl bg-gray-50 border-2"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-700 mb-2 block">
              YouTube Browse Button Text
            </label>
            <Input
              defaultValue="📺 Browse on YouTube"
              className="rounded-2xl bg-gray-50 border-2"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-700 mb-2 block">
              Helper Text (shown below buttons)
            </label>
            <Textarea
              defaultValue="[Admin: Update helper text for external browse buttons]"
              className="rounded-2xl bg-gray-50 border-2"
              rows={3}
            />
          </div>
        </div>
      </AdminEditableSection>
    </Card>
  );
}

// ========================================
// SECTION 3: USER INTEREST ANALYTICS
// View trends, configure triggers
// ========================================

function UserInterestAnalyticsSection({ showAnnotations }: { showAnnotations: boolean }) {
  const sectionAnnotations: AnnotationData = {
    purpose: {
      why: 'Understanding user behavior drives personalized recommendations and targeted marketing campaigns',
      userBenefit: 'Users get relevant deals and suggestions based on their browsing history and interests',
      businessValue: 'Data-driven insights improve conversion rates, reduce cart abandonment, and increase average booking value'
    },
    admin: {
      howToUpdate: 'Analytics are auto-generated. Configure triggers (e.g., "3 views = send deal"). Set notification schedules',
      contentGuidelines: 'Review analytics weekly. Adjust triggers based on conversion data. Set notifications during peak hours (9AM-9PM)',
      updateFrequency: 'View analytics daily. Adjust triggers monthly. Configure seasonal campaigns quarterly'
    },
    technical: {
      dataMapping: 'analytics[] collection: {userId, destinationId, action, timestamp, sessionId}. Aggregated in analytics_summary[]',
      apiIntegration: 'GET /api/analytics/interests, GET /api/analytics/trends, POST /api/analytics/configure-trigger',
      stateManagement: 'Real-time event tracking via WebSocket. Data warehouse sync nightly. Chart rendering with cached queries'
    },
    flow: {
      previousStep: 'Admin accessed User Interest Analytics tab',
      currentAction: 'Admin views charts, identifies trends, and configures automatic deal triggers',
      nextStep: 'System monitors user behavior → Triggers deals when conditions met → Sends notifications to users'
    }
  };

  return (
    <div className="space-y-6">
      {showAnnotations && (
        <ComponentAnnotation
          data={sectionAnnotations}
          defaultExpanded={false}
        />
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Popular Destinations */}
        <PopularDestinationsChart />

        {/* Interest Trends */}
        <InterestTrendsChart />

        {/* Deal Triggers Configuration */}
        <DealTriggersConfig showAnnotations={showAnnotations} />

        {/* Notification Schedules */}
        <NotificationSchedules showAnnotations={showAnnotations} />
      </div>
    </div>
  );
}

// ========================================
// POPULAR DESTINATIONS CHART
// ========================================

function PopularDestinationsChart() {
  const destinations = [
    { name: 'Admin-Added Destination 1', views: 1234, interests: 456, bookings: 89 },
    { name: 'Location X - Beach Paradise', views: 987, interests: 321, bookings: 67 },
    { name: 'Mountain Retreat Y', views: 765, interests: 234, bookings: 45 },
    { name: 'Heritage Site Z', views: 654, interests: 198, bookings: 34 },
    { name: 'Spiritual Tour A', views: 543, interests: 167, bookings: 28 }
  ];

  return (
    <Card className="rounded-3xl p-6 border-2 border-gray-100 col-span-2">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900">Popular Destinations</h3>
            <p className="text-sm text-gray-600">Top 5 by user engagement (Last 7 days)</p>
          </div>
        </div>
        <Select defaultValue="7days">
          <SelectTrigger className="w-[140px] rounded-2xl">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7days">Last 7 days</SelectItem>
            <SelectItem value="30days">Last 30 days</SelectItem>
            <SelectItem value="90days">Last 90 days</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        {destinations.map((dest, index) => (
          <div key={index} className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 text-white flex items-center justify-center font-bold text-sm">
                  #{index + 1}
                </div>
                <span className="font-semibold text-gray-900">{dest.name}</span>
              </div>
              <div className="flex gap-4 text-sm">
                <div className="text-center">
                  <p className="text-gray-600">Views</p>
                  <p className="font-bold text-blue-600">{dest.views}</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-600">❤️ Interests</p>
                  <p className="font-bold text-red-600">{dest.interests}</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-600">Bookings</p>
                  <p className="font-bold text-green-600">{dest.bookings}</p>
                </div>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-purple-600 to-indigo-600 h-2 rounded-full"
                style={{ width: `${(dest.bookings / dest.views) * 100}%` }}
              />
            </div>
            <p className="text-xs text-gray-600 mt-1">
              Conversion Rate: {((dest.bookings / dest.views) * 100).toFixed(1)}%
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}

// ========================================
// INTEREST TRENDS CHART
// ========================================

function InterestTrendsChart() {
  return (
    <Card className="rounded-3xl p-6 border-2 border-gray-100 col-span-2">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900">Interest Trends</h3>
            <p className="text-sm text-gray-600">Heart icon clicks over time</p>
          </div>
        </div>
      </div>

      {/* Simplified chart visualization */}
      <div className="h-64 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 flex items-end justify-around gap-2">
        {[40, 65, 45, 80, 60, 90, 75].map((height, index) => (
          <div key={index} className="flex-1 flex flex-col items-center gap-2">
            <div className="w-full bg-gradient-to-t from-purple-600 to-indigo-600 rounded-t-xl transition-all hover:opacity-80" style={{ height: `${height}%` }} />
            <span className="text-xs text-gray-600">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="bg-blue-50 rounded-2xl p-3 text-center">
          <p className="text-sm text-gray-600">This Week</p>
          <p className="text-2xl font-bold text-blue-600">1,834</p>
        </div>
        <div className="bg-purple-50 rounded-2xl p-3 text-center">
          <p className="text-sm text-gray-600">Last Week</p>
          <p className="text-2xl font-bold text-purple-600">1,678</p>
        </div>
        <div className="bg-green-50 rounded-2xl p-3 text-center">
          <p className="text-sm text-gray-600">Growth</p>
          <p className="text-2xl font-bold text-green-600">+9.3%</p>
        </div>
      </div>
    </Card>
  );
}

// ========================================
// DEAL TRIGGERS CONFIGURATION
// ========================================

function DealTriggersConfig({ showAnnotations }: { showAnnotations: boolean }) {
  const triggers = [
    { id: 1, name: 'Interest Trigger', condition: 'User viewed 3+ destinations', action: 'Send 20% discount deal', active: true },
    { id: 2, name: 'Favorite Bundle', condition: 'User favorited 5+ items', action: 'Send bundle deal (30% off)', active: true },
    { id: 3, name: 'Cart Abandonment', condition: 'User added to cart but not booked', action: 'Send reminder after 24h', active: false }
  ];

  return (
    <Card className="rounded-3xl p-6 border-2 border-gray-100 col-span-2">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900">Deal Triggers</h3>
            <p className="text-sm text-gray-600">Automated deal delivery rules</p>
          </div>
        </div>
        <Button className="gap-2 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600">
          <Plus className="w-4 h-4" />
          Add Trigger
        </Button>
      </div>

      <AdminEditableSection
        level={4}
        showAdminIndicators={showAnnotations}
        showBanner={true}
        showInstructions={true}
        batchUpdateEnabled={false}
      >
        <div className="space-y-3">
          {triggers.map((trigger) => (
            <div key={trigger.id} className="bg-white rounded-2xl p-4 border-2 border-gray-200 flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="font-bold text-gray-900">{trigger.name}</h4>
                  <Badge className={trigger.active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}>
                    {trigger.active ? '✓ Active' : 'Inactive'}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>When:</strong> {trigger.condition}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Then:</strong> {trigger.action}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Switch defaultChecked={trigger.active} />
                <Button size="sm" variant="ghost" className="rounded-full">
                  <Edit3 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </AdminEditableSection>
    </Card>
  );
}

// ========================================
// NOTIFICATION SCHEDULES
// ========================================

function NotificationSchedules({ showAnnotations }: { showAnnotations: boolean }) {
  return (
    <Card className="rounded-3xl p-6 border-2 border-gray-100 col-span-2">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center">
            <Bell className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900">Notification Schedules</h3>
            <p className="text-sm text-gray-600">When to send alerts to users</p>
          </div>
        </div>
      </div>

      <AdminEditableSection
        level={5}
        showAdminIndicators={showAnnotations}
        showBanner={true}
        showInstructions={true}
      >
        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-4 border-2 border-gray-200">
            <label className="text-sm font-semibold text-gray-700 mb-2 block">
              Active Hours (Don't disturb outside)
            </label>
            <div className="flex items-center gap-3">
              <Input type="time" defaultValue="09:00" className="rounded-2xl" />
              <span className="text-gray-600">to</span>
              <Input type="time" defaultValue="21:00" className="rounded-2xl" />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 border-2 border-gray-200">
            <label className="text-sm font-semibold text-gray-700 mb-2 block">
              Frequency Cap
            </label>
            <Select defaultValue="3">
              <SelectTrigger className="rounded-2xl">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Max 1 notification per day</SelectItem>
                <SelectItem value="3">Max 3 notifications per day</SelectItem>
                <SelectItem value="5">Max 5 notifications per day</SelectItem>
                <SelectItem value="unlimited">Unlimited</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="bg-white rounded-2xl p-4 border-2 border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-700">Weekend Notifications</p>
                <p className="text-xs text-gray-500">Send deals on Saturdays & Sundays</p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </div>
      </AdminEditableSection>
    </Card>
  );
}

// ========================================
// SECTION 4: ADMIN TOOLS
// Advanced features
// ========================================

function AdminToolsSection({ showAnnotations }: { showAnnotations: boolean }) {
  const sectionAnnotations: AnnotationData = {
    purpose: {
      why: 'Admins need power tools for bulk operations, advanced editing, and content scheduling',
      userBenefit: 'Users experience consistent, high-quality content maintained efficiently by admin team',
      businessValue: 'Reduces admin workload by 70% through automation, prevents errors, enables strategic planning'
    },
    admin: {
      howToUpdate: 'Tools are self-service. WYSIWYG editor: click fields to edit. Bulk update: select items, apply changes. Scheduling: set date/time',
      contentGuidelines: 'Use WYSIWYG for formatting (bold, lists, links). Schedule major updates during low-traffic hours (2AM-6AM)',
      updateFrequency: 'Use bulk update for seasonal changes. Schedule campaigns 1 week in advance. Optimize images before upload'
    },
    technical: {
      dataMapping: 'Tools interact with all collections. Scheduling uses jobs[] collection. Image optimization uses media_processing queue',
      apiIntegration: 'POST /api/admin/bulk-update, POST /api/admin/schedule, POST /api/media/optimize',
      stateManagement: 'Job queue for scheduled tasks. Background workers for image processing. Real-time progress updates via WebSocket'
    },
    flow: {
      previousStep: 'Admin accessed Admin Tools tab for advanced operations',
      currentAction: 'Admin uses specialized tools (WYSIWYG editor, bulk updater, scheduler, optimizer)',
      nextStep: 'Tool processes request → Queue jobs if needed → Execute changes → Notify admin of completion'
    }
  };

  return (
    <div className="space-y-6">
      {showAnnotations && (
        <ComponentAnnotation
          data={sectionAnnotations}
          defaultExpanded={false}
        />
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* WYSIWYG Text Editor */}
        <WYSIWYGEditor />

        {/* Bulk Update Capabilities */}
        <BulkUpdateTool />

        {/* Image Optimization Preview */}
        <ImageOptimizationTool />

        {/* Content Scheduling Calendar */}
        <ContentSchedulingCalendar />
      </div>
    </div>
  );
}

// ========================================
// WYSIWYG TEXT EDITOR
// ========================================

function WYSIWYGEditor() {
  return (
    <Card className="rounded-3xl p-6 border-2 border-gray-100 col-span-2">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <Edit3 className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900">WYSIWYG Text Editor</h3>
            <p className="text-sm text-gray-600">Rich text editing for descriptions</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="rounded-2xl">
            Preview
          </Button>
          <Button className="rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600">
            Save
          </Button>
        </div>
      </div>

      {/* Toolbar */}
      <div className="bg-gray-100 rounded-2xl p-3 mb-4 flex flex-wrap gap-2">
        <Button size="sm" variant="outline" className="rounded-xl h-8 w-8 p-0">
          <span className="font-bold">B</span>
        </Button>
        <Button size="sm" variant="outline" className="rounded-xl h-8 w-8 p-0">
          <span className="italic">I</span>
        </Button>
        <Button size="sm" variant="outline" className="rounded-xl h-8 w-8 p-0">
          <span className="underline">U</span>
        </Button>
        <div className="w-px bg-gray-300 mx-1" />
        <Button size="sm" variant="outline" className="rounded-xl h-8 px-3">
          H1
        </Button>
        <Button size="sm" variant="outline" className="rounded-xl h-8 px-3">
          H2
        </Button>
        <div className="w-px bg-gray-300 mx-1" />
        <Button size="sm" variant="outline" className="rounded-xl h-8 px-3">
          • List
        </Button>
        <Button size="sm" variant="outline" className="rounded-xl h-8 px-3">
          1. List
        </Button>
        <div className="w-px bg-gray-300 mx-1" />
        <Button size="sm" variant="outline" className="rounded-xl h-8 px-3">
          🔗 Link
        </Button>
        <Button size="sm" variant="outline" className="rounded-xl h-8 px-3">
          🖼️ Image
        </Button>
      </div>

      {/* Editor Area */}
      <Textarea
        className="min-h-[300px] rounded-2xl border-2 font-mono text-sm"
        placeholder="Start typing your content here...

You can use the toolbar above to format text with:
• Bold, Italic, Underline
• Headings (H1, H2)
• Bullet and numbered lists
• Links and images

[Admin: Update destination description]"
      />

      <div className="mt-4 flex items-center justify-between text-sm">
        <p className="text-gray-600">
          0/2000 characters
        </p>
        <div className="flex gap-4 text-gray-600">
          <span>0 words</span>
          <span>0 paragraphs</span>
        </div>
      </div>
    </Card>
  );
}

// ========================================
// BULK UPDATE TOOL
// ========================================

function BulkUpdateTool() {
  return (
    <Card className="rounded-3xl p-6 border-2 border-gray-100 col-span-2">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
            <RefreshCw className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900">Bulk Update Capabilities</h3>
            <p className="text-sm text-gray-600">Update multiple items at once</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-4">
          <label className="text-sm font-semibold text-gray-700 mb-3 block">
            Select Items to Update
          </label>
          <Select>
            <SelectTrigger className="rounded-2xl bg-white">
              <SelectValue placeholder="Choose category..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-destinations">All Destinations (247)</SelectItem>
              <SelectItem value="heritage">Heritage Sites (42)</SelectItem>
              <SelectItem value="beach">Beach Paradise (38)</SelectItem>
              <SelectItem value="mountain">Mountain Retreats (35)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-4">
          <label className="text-sm font-semibold text-gray-700 mb-3 block">
            Update Type
          </label>
          <Select>
            <SelectTrigger className="rounded-2xl bg-white">
              <SelectValue placeholder="What to update..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pricing">Pricing Adjustment</SelectItem>
              <SelectItem value="category">Change Category</SelectItem>
              <SelectItem value="status">Update Status</SelectItem>
              <SelectItem value="tags">Add/Remove Tags</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-4">
          <label className="text-sm font-semibold text-gray-700 mb-3 block">
            New Value
          </label>
          <Input
            placeholder="Enter new value or adjustment..."
            className="rounded-2xl bg-white"
          />
        </div>

        <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-amber-900 mb-1">
              Preview Changes Before Applying
            </p>
            <p className="text-xs text-amber-700">
              You'll see a preview of all changes before they're saved. You can review and confirm each update.
            </p>
          </div>
        </div>

        <Button className="w-full rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 h-12">
          Preview Bulk Update (0 items selected)
        </Button>
      </div>
    </Card>
  );
}

// ========================================
// IMAGE OPTIMIZATION TOOL
// ========================================

function ImageOptimizationTool() {
  return (
    <Card className="rounded-3xl p-6 border-2 border-gray-100 col-span-2">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
            <ImageIcon className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900">Image Optimization Preview</h3>
            <p className="text-sm text-gray-600">Auto-optimize before upload</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-6 text-center">
            <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <p className="text-sm font-semibold text-gray-700 mb-1">Original</p>
            <p className="text-xs text-gray-600">2.4 MB • 2400x1600px</p>
          </div>
          <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-6 text-center">
            <ImageIcon className="w-12 h-12 text-green-600 mx-auto mb-3" />
            <p className="text-sm font-semibold text-gray-700 mb-1">Optimized</p>
            <p className="text-xs text-gray-600">348 KB • 1200x800px</p>
          </div>
        </div>

        <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-semibold text-green-900">Size Reduction</p>
            <p className="text-2xl font-bold text-green-600">85.5%</p>
          </div>
          <div className="w-full bg-green-200 rounded-full h-3">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full" style={{ width: '85.5%' }} />
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-4 space-y-3">
          <h4 className="text-sm font-semibold text-gray-700">Optimization Settings</h4>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Auto-resize to 1200px width</span>
            <Switch defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Convert to WebP format</span>
            <Switch defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Generate thumbnails</span>
            <Switch defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Strip metadata</span>
            <Switch defaultChecked />
          </div>
        </div>

        <Button className="w-full rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 h-12">
          <CheckCircle2 className="w-4 h-4 mr-2" />
          Apply Optimization & Upload
        </Button>
      </div>
    </Card>
  );
}

// ========================================
// CONTENT SCHEDULING CALENDAR
// ========================================

function ContentSchedulingCalendar() {
  const scheduledUpdates = [
    { date: '2026-01-20', title: 'Summer Season Pricing Update', type: 'pricing' },
    { date: '2026-01-25', title: 'New Heritage Sites Launch', type: 'content' },
    { date: '2026-02-01', title: 'Valentine\'s Day Deals Campaign', type: 'deals' }
  ];

  return (
    <Card className="rounded-3xl p-6 border-2 border-gray-100 col-span-2">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center">
            <Calendar className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900">Content Scheduling Calendar</h3>
            <p className="text-sm text-gray-600">Plan updates in advance</p>
          </div>
        </div>
        <Button className="gap-2 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600">
          <Plus className="w-4 h-4" />
          Schedule Update
        </Button>
      </div>

      <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 mb-4">
        <div className="grid grid-cols-7 gap-2 text-center mb-4">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="text-xs font-semibold text-gray-600">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: 35 }, (_, i) => (
            <div
              key={i}
              className={`
                aspect-square rounded-lg flex items-center justify-center text-sm
                ${i % 7 === 0 || i % 7 === 6 ? 'bg-gray-100 text-gray-400' : 'bg-white text-gray-700 hover:bg-purple-100 cursor-pointer'}
                ${i === 3 || i === 8 || i === 15 ? 'bg-gradient-to-br from-purple-500 to-indigo-500 text-white font-bold' : ''}
              `}
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-gray-700">Upcoming Scheduled Updates</h4>
        {scheduledUpdates.map((update, index) => (
          <div key={index} className="bg-white rounded-2xl p-4 border-2 border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                <Clock className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">{update.title}</p>
                <p className="text-xs text-gray-600">{update.date} • {update.type}</p>
              </div>
            </div>
            <Button size="sm" variant="outline" className="rounded-xl">
              <Edit3 className="w-3 h-3 mr-1" />
              Edit
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default AdminDashboard;
