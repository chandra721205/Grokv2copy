import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { Switch } from '@/app/components/ui/switch';
import { Badge } from '@/app/components/ui/badge';
import { Separator } from '@/app/components/ui/separator';
import { InterestHeartIcon } from '@/app/components/ui/InterestHeartIcon';
import { ExternalBrowseButton } from '@/app/components/ui/ExternalBrowseButton';

// ========================================
// LIVE PREVIEW - MAIN COMPONENT
// Split-screen admin editing with live preview
// ========================================

export interface LivePreviewData {
  name: string;
  category: string;
  description: string;
  basePrice: number;
  seasonalPrice?: number;
  images: string[];
  features: string[];
  dealMessage?: string;
  locale: string;
}

interface LivePreviewProps {
  /** Initial data to preview */
  initialData: LivePreviewData;
  
  /** Callback when changes are saved */
  onSave?: (data: LivePreviewData) => void;
  
  /** Callback when preview is closed */
  onClose?: () => void;
  
  /** Show comparison mode by default */
  defaultComparison?: boolean;
}

type DeviceType = 'mobile' | 'tablet' | 'desktop';
type PreviewMode = 'single' | 'comparison' | 'before-after';
type Season = 'summer' | 'monsoon' | 'winter';

export function LivePreview({
  initialData,
  onSave,
  onClose,
  defaultComparison = false
}: LivePreviewProps) {
  const [editedData, setEditedData] = useState<LivePreviewData>(initialData);
  const [deviceType, setDeviceType] = useState<DeviceType>('mobile');
  const [previewMode, setPreviewMode] = useState<PreviewMode>(defaultComparison ? 'comparison' : 'single');
  const [selectedSeason, setSelectedSeason] = useState<Season>('summer');
  const [showDealOverlay, setShowDealOverlay] = useState(false);
  const [selectedLocale, setSelectedLocale] = useState('en');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);

  // Track changes
  useEffect(() => {
    const changed = JSON.stringify(editedData) !== JSON.stringify(initialData);
    setHasChanges(changed);
  }, [editedData, initialData]);

  const handleFieldChange = (field: keyof LivePreviewData, value: any) => {
    setEditedData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    onSave?.(editedData);
    setHasChanges(false);
  };

  const handleReset = () => {
    setEditedData(initialData);
    setHasChanges(false);
  };

  const getDeviceWidth = () => {
    switch (deviceType) {
      case 'mobile': return 'w-[375px]';
      case 'tablet': return 'w-[768px]';
      case 'desktop': return 'w-full max-w-[1200px]';
    }
  };

  const getSeasonalPrice = () => {
    const adjustments = {
      summer: 1.2,
      monsoon: 0.8,
      winter: 1.0
    };
    return Math.round(editedData.basePrice * adjustments[selectedSeason]);
  };

  return (
    <div className="fixed inset-0 z-50 bg-gray-900/95 backdrop-blur-sm">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between max-w-[2000px] mx-auto">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="gap-2"
            >
              <X className="w-4 h-4" />
              Close Preview
            </Button>
            <Separator orientation="vertical" className="h-6" />
            <div>
              <h2 className="text-lg font-bold text-gray-900">Live Preview Editor</h2>
              <p className="text-sm text-gray-600">Edit and preview changes in real-time</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {hasChanges && (
              <Badge className="bg-amber-100 text-amber-700 border-amber-300">
                ● Unsaved Changes
              </Badge>
            )}
            <Button
              variant="outline"
              size="sm"
              onClick={handleReset}
              disabled={!hasChanges}
              className="gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              Reset
            </Button>
            <Button
              size="sm"
              onClick={handleSave}
              disabled={!hasChanges}
              className="gap-2 bg-gradient-to-r from-purple-600 to-indigo-600"
            >
              <Check className="w-4 h-4" />
              Save Changes
            </Button>
          </div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="bg-gray-100 border-b border-gray-200 px-6 py-3">
        <div className="flex items-center justify-between max-w-[2000px] mx-auto">
          {/* Device Toggle */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-gray-700 mr-2">Device:</span>
            <Button
              variant={deviceType === 'mobile' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setDeviceType('mobile')}
              className="gap-2"
            >
              <Smartphone className="w-4 h-4" />
              Mobile
            </Button>
            <Button
              variant={deviceType === 'tablet' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setDeviceType('tablet')}
              className="gap-2"
            >
              <Tablet className="w-4 h-4" />
              Tablet
            </Button>
            <Button
              variant={deviceType === 'desktop' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setDeviceType('desktop')}
              className="gap-2"
            >
              <Monitor className="w-4 h-4" />
              Desktop
            </Button>
          </div>

          {/* Preview Mode Toggle */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-gray-700 mr-2">Mode:</span>
            <Button
              variant={previewMode === 'single' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setPreviewMode('single')}
              className="gap-2"
            >
              <Eye className="w-4 h-4" />
              Single
            </Button>
            <Button
              variant={previewMode === 'comparison' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setPreviewMode('comparison')}
              className="gap-2"
            >
              <ArrowLeftRight className="w-4 h-4" />
              Compare
            </Button>
            <Button
              variant={previewMode === 'before-after' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setPreviewMode('before-after')}
              className="gap-2"
            >
              <ArrowLeftRight className="w-4 h-4" />
              Before/After
            </Button>
          </div>

          {/* Fullscreen Toggle */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="gap-2"
          >
            {isFullscreen ? (
              <>
                <Minimize2 className="w-4 h-4" />
                Exit Fullscreen
              </>
            ) : (
              <>
                <Maximize2 className="w-4 h-4" />
                Fullscreen
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="h-[calc(100vh-140px)] overflow-hidden">
        <div className="h-full flex max-w-[2000px] mx-auto">
          {/* Left Panel - Admin Editor */}
          {!isFullscreen && (
            <div className="w-[450px] bg-white border-r border-gray-200 overflow-y-auto">
              <AdminEditorPanel
                data={editedData}
                onChange={handleFieldChange}
                selectedSeason={selectedSeason}
                onSeasonChange={setSelectedSeason}
                showDealOverlay={showDealOverlay}
                onToggleDeal={setShowDealOverlay}
                selectedLocale={selectedLocale}
                onLocaleChange={setSelectedLocale}
              />
            </div>
          )}

          {/* Right Panel - Live Preview */}
          <div className="flex-1 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 overflow-y-auto p-8">
            {previewMode === 'single' && (
              <SinglePreview
                data={editedData}
                deviceType={deviceType}
                season={selectedSeason}
                showDeal={showDealOverlay}
                locale={selectedLocale}
                deviceWidth={getDeviceWidth()}
                seasonalPrice={getSeasonalPrice()}
              />
            )}

            {previewMode === 'comparison' && (
              <ComparisonPreview
                originalData={initialData}
                editedData={editedData}
                deviceType={deviceType}
                season={selectedSeason}
                showDeal={showDealOverlay}
                locale={selectedLocale}
                deviceWidth={getDeviceWidth()}
                seasonalPrice={getSeasonalPrice()}
              />
            )}

            {previewMode === 'before-after' && (
              <BeforeAfterPreview
                originalData={initialData}
                editedData={editedData}
                deviceType={deviceType}
                season={selectedSeason}
                showDeal={showDealOverlay}
                locale={selectedLocale}
                deviceWidth={getDeviceWidth()}
                seasonalPrice={getSeasonalPrice()}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ========================================
// ADMIN EDITOR PANEL
// Left-side editing controls
// ========================================

interface AdminEditorPanelProps {
  data: LivePreviewData;
  onChange: (field: keyof LivePreviewData, value: any) => void;
  selectedSeason: Season;
  onSeasonChange: (season: Season) => void;
  showDealOverlay: boolean;
  onToggleDeal: (show: boolean) => void;
  selectedLocale: string;
  onLocaleChange: (locale: string) => void;
}

function AdminEditorPanel({
  data,
  onChange,
  selectedSeason,
  onSeasonChange,
  showDealOverlay,
  onToggleDeal,
  selectedLocale,
  onLocaleChange
}: AdminEditorPanelProps) {
  return (
    <div className="p-6 space-y-6">
      {/* Section: Basic Info */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Settings className="w-5 h-5" />
          Basic Information
        </h3>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-semibold text-gray-700 mb-2 block">
              Destination Name
            </label>
            <Input
              value={data.name}
              onChange={(e) => onChange('name', e.target.value)}
              placeholder="Enter destination name..."
              className="rounded-2xl"
            />
            <p className="text-xs text-gray-500 mt-1">
              {data.name.length}/50 characters
            </p>
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-700 mb-2 block">
              Category
            </label>
            <Select value={data.category} onValueChange={(value) => onChange('category', value)}>
              <SelectTrigger className="rounded-2xl">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Heritage Sites">Heritage Sites</SelectItem>
                <SelectItem value="Beach Paradise">Beach Paradise</SelectItem>
                <SelectItem value="Mountain Retreats">Mountain Retreats</SelectItem>
                <SelectItem value="Spiritual Tours">Spiritual Tours</SelectItem>
                <SelectItem value="Adventure">Adventure</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-700 mb-2 block">
              Description
            </label>
            <Textarea
              value={data.description}
              onChange={(e) => onChange('description', e.target.value)}
              placeholder="Enter destination description..."
              className="rounded-2xl min-h-[120px]"
            />
            <p className="text-xs text-gray-500 mt-1">
              {data.description.length}/200 characters
            </p>
          </div>
        </div>
      </div>

      <Separator />

      {/* Section: Pricing */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <DollarSign className="w-5 h-5" />
          Pricing Configuration
        </h3>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-semibold text-gray-700 mb-2 block">
              Base Price (₹)
            </label>
            <Input
              type="number"
              value={data.basePrice}
              onChange={(e) => onChange('basePrice', parseFloat(e.target.value))}
              placeholder="Enter base price..."
              className="rounded-2xl"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-700 mb-2 block">
              Preview Season
            </label>
            <Select value={selectedSeason} onValueChange={onSeasonChange}>
              <SelectTrigger className="rounded-2xl">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="summer">☀️ Summer (Mar-Jun) +20%</SelectItem>
                <SelectItem value="monsoon">🌧️ Monsoon (Jul-Sep) -20%</SelectItem>
                <SelectItem value="winter">❄️ Winter (Oct-Feb) Base Price</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-blue-900">Seasonal Preview</span>
              <Badge className="bg-blue-600 text-white">
                {selectedSeason === 'summer' ? '+20%' : selectedSeason === 'monsoon' ? '-20%' : 'Base'}
              </Badge>
            </div>
            <div className="text-2xl font-bold text-blue-600">
              ₹{Math.round(data.basePrice * (selectedSeason === 'summer' ? 1.2 : selectedSeason === 'monsoon' ? 0.8 : 1.0)).toLocaleString()}
            </div>
            <p className="text-xs text-blue-700 mt-1">
              From base price: ₹{data.basePrice.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      <Separator />

      {/* Section: Special Offers */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Tag className="w-5 h-5" />
          Special Offers
        </h3>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-gray-700">Show Deal Overlay</p>
              <p className="text-xs text-gray-500">Display promotional banner</p>
            </div>
            <Switch
              checked={showDealOverlay}
              onCheckedChange={onToggleDeal}
            />
          </div>

          {showDealOverlay && (
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-2 block">
                Deal Message
              </label>
              <Input
                value={data.dealMessage || ''}
                onChange={(e) => onChange('dealMessage', e.target.value)}
                placeholder="e.g., 🎯 Save 20% - Limited Time!"
                className="rounded-2xl"
              />
              <p className="text-xs text-gray-500 mt-1">
                {(data.dealMessage || '').length}/100 characters
              </p>
            </div>
          )}
        </div>
      </div>

      <Separator />

      {/* Section: Localization */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Globe className="w-5 h-5" />
          Localization
        </h3>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-semibold text-gray-700 mb-2 block">
              Preview Language
            </label>
            <Select value={selectedLocale} onValueChange={onLocaleChange}>
              <SelectTrigger className="rounded-2xl">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">🇬🇧 English</SelectItem>
                <SelectItem value="hi">🇮🇳 Hindi (हिंदी)</SelectItem>
                <SelectItem value="mr">🇮🇳 Marathi (मराठी)</SelectItem>
                <SelectItem value="ta">🇮🇳 Tamil (தமிழ்)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-3">
            <p className="text-xs text-amber-800">
              ℹ️ Localization preview shows how content appears in different languages. 
              Edit translations in the Content Configuration section.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ========================================
// SINGLE PREVIEW
// Show only edited version
// ========================================

interface PreviewProps {
  data: LivePreviewData;
  deviceType: DeviceType;
  season: Season;
  showDeal: boolean;
  locale: string;
  deviceWidth: string;
  seasonalPrice: number;
}

function SinglePreview({
  data,
  deviceType,
  season,
  showDeal,
  locale,
  deviceWidth,
  seasonalPrice
}: PreviewProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-3">
        <Badge className="bg-purple-600 text-white">Live Preview</Badge>
        <Badge className="bg-gray-200 text-gray-700">
          {deviceType.charAt(0).toUpperCase() + deviceType.slice(1)} View
        </Badge>
        <Badge className="bg-blue-200 text-blue-700">
          {season.charAt(0).toUpperCase() + season.slice(1)} Season
        </Badge>
      </div>

      <motion.div
        layout
        className={`${deviceWidth} bg-white rounded-3xl shadow-2xl overflow-hidden`}
      >
        <DestinationPreviewCard
          data={data}
          seasonalPrice={seasonalPrice}
          showDeal={showDeal}
          locale={locale}
          season={season}
        />
      </motion.div>
    </div>
  );
}

// ========================================
// COMPARISON PREVIEW
// Side-by-side original vs edited
// ========================================

interface ComparisonPreviewProps extends PreviewProps {
  originalData: LivePreviewData;
  editedData: LivePreviewData;
}

function ComparisonPreview({
  originalData,
  editedData,
  deviceType,
  season,
  showDeal,
  locale,
  deviceWidth,
  seasonalPrice
}: ComparisonPreviewProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-center gap-3">
        <Badge className="bg-gray-600 text-white">Comparison Mode</Badge>
        <Badge className="bg-gray-200 text-gray-700">
          {deviceType.charAt(0).toUpperCase() + deviceType.slice(1)} View
        </Badge>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {/* Original */}
        <div className="space-y-3">
          <div className="text-center">
            <Badge className="bg-gray-500 text-white">Before (Original)</Badge>
          </div>
          <motion.div
            layout
            className="bg-white rounded-3xl shadow-xl overflow-hidden mx-auto"
            style={{ width: deviceType === 'mobile' ? '375px' : deviceType === 'tablet' ? '600px' : '100%' }}
          >
            <DestinationPreviewCard
              data={originalData}
              seasonalPrice={Math.round(originalData.basePrice * (season === 'summer' ? 1.2 : season === 'monsoon' ? 0.8 : 1.0))}
              showDeal={showDeal}
              locale={locale}
              season={season}
            />
          </motion.div>
        </div>

        {/* Edited */}
        <div className="space-y-3">
          <div className="text-center">
            <Badge className="bg-purple-600 text-white">After (Edited) ✓</Badge>
          </div>
          <motion.div
            layout
            className="bg-white rounded-3xl shadow-xl overflow-hidden mx-auto border-4 border-purple-500"
            style={{ width: deviceType === 'mobile' ? '375px' : deviceType === 'tablet' ? '600px' : '100%' }}
          >
            <DestinationPreviewCard
              data={editedData}
              seasonalPrice={seasonalPrice}
              showDeal={showDeal}
              locale={locale}
              season={season}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// ========================================
// BEFORE/AFTER PREVIEW
// Slider to compare
// ========================================

function BeforeAfterPreview({
  originalData,
  editedData,
  deviceType,
  season,
  showDeal,
  locale,
  deviceWidth,
  seasonalPrice
}: ComparisonPreviewProps) {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <div className="space-y-4">
      <div className="flex flex-col items-center gap-3">
        <div className="flex items-center gap-3">
          <Badge className="bg-indigo-600 text-white">Before/After Mode</Badge>
          <Badge className="bg-gray-200 text-gray-700">
            {deviceType.charAt(0).toUpperCase() + deviceType.slice(1)} View
          </Badge>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">Before</span>
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPosition}
            onChange={(e) => setSliderPosition(parseFloat(e.target.value))}
            className="w-64"
          />
          <span className="text-sm text-gray-600">After</span>
        </div>
      </div>

      <div className="flex justify-center">
        <div className={`${deviceWidth} relative`}>
          {/* After (on bottom) */}
          <motion.div
            layout
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <DestinationPreviewCard
              data={editedData}
              seasonalPrice={seasonalPrice}
              showDeal={showDeal}
              locale={locale}
              season={season}
            />
          </motion.div>

          {/* Before (on top, clipped) */}
          <div
            className="absolute inset-0 overflow-hidden rounded-3xl"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <motion.div
              layout
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
            >
              <DestinationPreviewCard
                data={originalData}
                seasonalPrice={Math.round(originalData.basePrice * (season === 'summer' ? 1.2 : season === 'monsoon' ? 0.8 : 1.0))}
                showDeal={showDeal}
                locale={locale}
                season={season}
              />
            </motion.div>
          </div>

          {/* Slider Line */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-purple-500">
              <ArrowLeftRight className="w-4 h-4 text-purple-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ========================================
// DESTINATION PREVIEW CARD
// The actual user-facing card preview
// ========================================

interface DestinationPreviewCardProps {
  data: LivePreviewData;
  seasonalPrice: number;
  showDeal: boolean;
  locale: string;
  season: Season;
}

function DestinationPreviewCard({
  data,
  seasonalPrice,
  showDeal,
  locale,
  season
}: DestinationPreviewCardProps) {
  const getLocalizedText = (key: string) => {
    const translations: Record<string, Record<string, string>> = {
      en: {
        category: data.category,
        bookNow: 'Book Now',
        details: 'View Details',
        from: 'From',
        person: 'per person'
      },
      hi: {
        category: data.category,
        bookNow: 'अभी बुक करें',
        details: 'विवरण देखें',
        from: 'से',
        person: 'प्रति व्यक्ति'
      },
      mr: {
        category: data.category,
        bookNow: 'आता बुक करा',
        details: 'तपशील पहा',
        from: 'पासून',
        person: 'प्रति व्यक्ती'
      },
      ta: {
        category: data.category,
        bookNow: 'இப்போது முன்பதிவு',
        details: 'விவரங்களைக் காண்க',
        from: 'இருந்து',
        person: 'ஒரு நபருக்கு'
      }
    };
    return translations[locale]?.[key] || translations.en[key];
  };

  return (
    <div className="relative">
      {/* Deal Overlay */}
      <AnimatePresence>
        {showDeal && data.dealMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-4 left-4 right-4 z-10"
          >
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-2xl shadow-lg">
              <p className="text-sm font-bold text-center">{data.dealMessage}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image */}
      <div className="h-64 bg-gradient-to-br from-purple-300 via-blue-300 to-indigo-300 relative">
        {/* Interest Heart Icon */}
        <div className="absolute top-4 right-4 z-10">
          <InterestHeartIcon
            itemId={`preview-${data.name}`}
            itemName={data.name}
            category={data.category}
            size="md"
          />
        </div>

        {/* Season Badge */}
        <div className="absolute bottom-4 left-4">
          <Badge className="bg-white/90 text-gray-900 backdrop-blur-sm">
            {season === 'summer' ? '☀️ Summer' : season === 'monsoon' ? '🌧️ Monsoon' : '❄️ Winter'}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Category */}
        <Badge className="bg-purple-100 text-purple-700">
          {getLocalizedText('category')}
        </Badge>

        {/* Name */}
        <h3 className="text-xl font-bold text-gray-900">
          {data.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-3">
          {data.description}
        </p>

        {/* Features */}
        {data.features && data.features.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {data.features.slice(0, 3).map((feature, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {feature}
              </Badge>
            ))}
          </div>
        )}

        {/* Pricing */}
        <div className="flex items-baseline gap-2">
          <span className="text-sm text-gray-600">{getLocalizedText('from')}</span>
          <span className="text-2xl font-bold text-purple-600">
            ₹{seasonalPrice.toLocaleString()}
          </span>
          <span className="text-sm text-gray-500">{getLocalizedText('person')}</span>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Button className="flex-1 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600">
            {getLocalizedText('bookNow')}
          </Button>
          <Button variant="outline" className="flex-1 rounded-2xl">
            {getLocalizedText('details')}
          </Button>
        </div>

        {/* External Browse */}
        <div className="grid grid-cols-2 gap-3">
          <ExternalBrowseButton type="google" searchQuery={data.name} />
          <ExternalBrowseButton type="youtube" searchQuery={data.name} />
        </div>
      </div>
    </div>
  );
}

// ========================================
// LIVE PREVIEW BUTTON
// Trigger to open live preview
// ========================================

export interface LivePreviewButtonProps {
  data: LivePreviewData;
  onSave?: (data: LivePreviewData) => void;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'default' | 'lg';
  className?: string;
}

export function LivePreviewButton({
  data,
  onSave,
  variant = 'default',
  size = 'default',
  className = ''
}: LivePreviewButtonProps) {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <>
      <Button
        variant={variant}
        size={size}
        onClick={() => setShowPreview(true)}
        className={`gap-2 ${className}`}
      >
        <Eye className="w-4 h-4" />
        Live Preview
      </Button>

      {showPreview && (
        <LivePreview
          initialData={data}
          onSave={(updatedData) => {
            onSave?.(updatedData);
            setShowPreview(false);
          }}
          onClose={() => setShowPreview(false)}
        />
      )}
    </>
  );
}

export default LivePreview;