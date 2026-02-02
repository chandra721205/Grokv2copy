# 📐 SCREEN ORGANIZATION TEMPLATE

## FIGMA-STYLE CODE STRUCTURE FOR ALL SCREENS

Every screen in GrokYatra follows this standardized organization pattern, mirroring Figma's layer structure for consistency and maintainability.

---

## 🎯 SCREEN TEMPLATE STRUCTURE

```
📁 Screen Name - Template
  ├─ 📁 Group: Static UI Elements (Non-Editable)
  │   ├─ 🎨 Background gradients
  │   ├─ 🔲 Layout containers
  │   ├─ 🎭 Icons and decorative elements
  │   └─ 📏 Spacing dividers
  │
  ├─ 📁 Group: Admin Editable Content (All Placeholders)
  │   ├─ 📝 text/header/title/placeholder
  │   ├─ 📝 text/header/tagline/placeholder
  │   ├─ 📝 text/section/heading/placeholder
  │   ├─ 📝 text/section/description/placeholder
  │   ├─ 📝 text/card/title/placeholder
  │   └─ 📝 text/card/description/placeholder
  │
  ├─ 📁 Group: Interactive Elements (Buttons, Filters)
  │   ├─ 🔘 component/button/primary/search
  │   ├─ 🔘 component/button/secondary/filter
  │   ├─ 🔘 component/input/search/main
  │   ├─ 🔘 component/filter/chips/category
  │   ├─ 💙 component/tracker/heart-icon/interest
  │   └─ 🔔 component/alert/deals/personalized
  │
  └─ 📁 Group: Annotations (Purple Sticky Notes)
      ├─ 📌 annotation/admin/level-1/screen-title
      ├─ 📌 annotation/admin/level-2/section-heading
      ├─ 📌 annotation/admin/level-3/subsection
      ├─ 📌 annotation/admin/level-4/card-content
      └─ 📌 annotation/integration/interest-tracker
```

---

## 📋 NAMING CONVENTIONS

### **1. Text Layers**
Format: `text/[section]/[element]/placeholder`

```typescript
// EXAMPLES:
text/header/title/placeholder           // "Screen Title"
text/header/tagline/placeholder         // "Tagline beneath title"
text/search/placeholder/main            // "Search destinations..."
text/section/heading/featured           // "Featured Destinations"
text/section/description/intro          // "Section description"
text/card/title/destination-1           // "Admin-Added Destination 1"
text/card/subtitle/location             // "Location: Admin-Set Region"
text/card/description/details           // "Card description text"
text/button/label/primary               // "Book Now"
text/button/label/secondary             // "Learn More"
text/filter/label/category-1            // "Beach Destinations"
text/badge/tag/popular                  // "Popular"
text/alert/heading/deals                // "Get Deal Alerts"
text/footer/copyright/main              // "© 2024 GrokYatra"
```

### **2. Components**
Format: `component/[type]/[variant]`

```typescript
// EXAMPLES:
component/button/primary/gradient       // Main CTA button
component/button/secondary/outline      // Secondary action
component/button/icon/back              // Back arrow button
component/input/search/main             // Search input field
component/input/text/budget             // Budget input
component/card/destination/beach        // Destination card
component/card/feature/highlight        // Feature card
component/filter/chips/horizontal       // Filter chips row
component/badge/tag/rounded             // Tag badge
component/icon/category/beach           // Category icon
component/icon/action/heart             // Heart interest tracker
component/icon/action/share             // Share button
component/alert/banner/deals            // Deals alert banner
component/modal/overlay/admin           // Admin control panel
component/navigation/header/gradient    // Header section
component/navigation/footer/simple      // Footer section
```

### **3. Groups**
Format: `group/[screen]/[section]`

```typescript
// EXAMPLES:
group/beach-paradise/header             // Header section
group/beach-paradise/search             // Search area
group/beach-paradise/deals-alert        // Deals alert component
group/beach-paradise/filters            // Filter chips
group/beach-paradise/destinations       // Destination cards list
group/beach-paradise/footer             // Footer section
group/beach-paradise/admin-overlay      // Admin mode overlay

group/heritage-sites/header             // Heritage screen header
group/heritage-sites/category-intro     // Category introduction
group/heritage-sites/featured-list      // Featured destinations

group/main-home/hero                    // Home hero section
group/main-home/categories              // Category grid
group/main-home/trending                // Trending section
```

---

## 🎨 TEMPLATE: BEACH PARADISE SCREEN

### **Complete Code Organization:**

```tsx
// ========================================
// SCREEN: BEACH PARADISE - TEMPLATE
// Frame: Beach Paradise - Template
// ========================================

import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Search, Globe, Youtube, Waves } from 'lucide-react';

export function BeachParadiseScreen({ onBack, onGoogleSearch, onYouTubeSearch }) {
  
  // ========================================
  // GROUP: ADMIN EDITABLE CONTENT (ALL PLACEHOLDERS)
  // These values are admin-configurable
  // ========================================
  
  const [editableContent, setEditableContent] = useState({
    // text/header/title/placeholder
    headerTitle: '[Admin: Beach Paradise Category Title]',
    
    // text/header/tagline/placeholder
    headerTagline: '[Admin: Discover pristine beaches and islands]',
    
    // text/search/placeholder/main
    searchPlaceholder: '[Admin: Search beach destinations...]',
    
    // text/section/heading/featured
    sectionHeading: '[Admin: Featured Beach Destinations]',
    
    // text/section/description/intro
    sectionDescription: '[Admin: Explore our curated beach paradise collection]',
    
    // text/alert/heading/deals
    dealsAlertHeading: '[Admin: Get Beach Deal Alerts]',
    
    // text/alert/description/deals
    dealsAlertDescription: '[Admin: Set your budget for personalized deals]',
    
    // text/button/label/google-search
    googleSearchLabel: '[Admin: Google Search]',
    
    // text/button/label/youtube-browse
    youtubeLabel: '[Admin: YouTube Browse]'
  });

  // ========================================
  // GROUP: INTERACTIVE ELEMENTS (BUTTONS, FILTERS)
  // User-facing interactive components
  // ========================================
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [expandedDeals, setExpandedDeals] = useState(false);

  // ========================================
  // GROUP: STATIC UI ELEMENTS (NON-EDITABLE)
  // Layout, styling, structure - not admin configurable
  // ========================================
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      
      {/* ========================================
          ANNOTATION: Admin Mode Banner
          Level: System-wide
          ======================================== */}
      {isAdminMode && (
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 text-center text-xs font-semibold">
          📌 ADMIN MODE ACTIVE - Click edit button to modify content
        </div>
      )}

      {/* ========================================
          GROUP: group/beach-paradise/header
          STATIC UI: Background gradient, layout
          ======================================== */}
      <div className="bg-gradient-to-r from-pink-600 to-rose-600 px-6 pt-12 pb-8 rounded-b-[2rem]">
        
        {/* component/button/icon/back */}
        <button
          onClick={onBack}
          className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6"
          aria-label="Go back"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <div className="flex items-center gap-4 mb-6">
          {/* component/icon/category/beach */}
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            <Waves className="w-9 h-9 text-white" />
          </div>
          
          <div>
            {/* text/header/title/placeholder */}
            <h1 className={`text-white text-3xl font-bold ${
              isAdminMode ? 'bg-white/10 px-3 py-1 rounded inline-block' : ''
            } mb-2`}>
              {editableContent.headerTitle}
            </h1>
            
            {/* ANNOTATION: Level 1 - Screen Title */}
            {isAdminMode && (
              <span className="text-xs text-yellow-300 font-semibold">
                📌 Level 1: Screen Title
              </span>
            )}
            
            {/* text/header/tagline/placeholder */}
            <p className={`text-white/90 text-sm ${
              isAdminMode ? 'bg-white/10 px-3 py-1 rounded inline-block' : ''
            }`}>
              {editableContent.headerTagline}
            </p>
            
            {/* ANNOTATION: Level 1 - Tagline */}
            {isAdminMode && (
              <span className="text-xs text-yellow-300 font-semibold ml-2">
                📌 Level 1: Tagline
              </span>
            )}
          </div>
        </div>

        {/* ========================================
            GROUP: group/beach-paradise/search
            INTERACTIVE: Search input
            ======================================== */}
        <div className="relative mb-3">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          
          {/* component/input/search/main */}
          <input
            type="text"
            placeholder={editableContent.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full pl-12 pr-4 h-12 rounded-full border-0 shadow-lg ${
              isAdminMode ? 'bg-gray-100' : 'bg-white'
            }`}
          />
          
          {/* ANNOTATION: Search functionality */}
          {isAdminMode && (
            <div className="mt-1 text-xs text-yellow-300">
              📌 Connects to: Search API + Local filtering
            </div>
          )}
        </div>

        {/* ========================================
            GROUP: group/beach-paradise/research-buttons
            INTERACTIVE: Google Search + YouTube buttons
            ======================================== */}
        <div className="flex gap-3 mb-3">
          {/* component/button/secondary/google */}
          <button
            onClick={() => onGoogleSearch('beach island honeymoon')}
            className="flex-1 bg-white text-blue-600 hover:bg-gray-100 rounded-full h-9 flex items-center justify-center gap-2"
          >
            <Globe className="w-4 h-4" />
            <span className="text-sm font-semibold">
              {editableContent.googleSearchLabel}
            </span>
          </button>
          
          {/* component/button/secondary/youtube */}
          <button
            onClick={() => onYouTubeSearch('beach paradise travel')}
            className="flex-1 bg-white text-red-600 hover:bg-gray-100 rounded-full h-9 flex items-center justify-center gap-2"
          >
            <Youtube className="w-4 h-4" />
            <span className="text-sm font-semibold">
              {editableContent.youtubeLabel}
            </span>
          </button>
        </div>
      </div>

      {/* ========================================
          GROUP: group/beach-paradise/content
          Main content area
          ======================================== */}
      <div className="px-6">
        
        {/* ========================================
            GROUP: group/beach-paradise/deals-alert
            COMPONENT: Personalized Deals Alert
            ANNOTATION: Connects to Interest Tracker
            ======================================== */}
        <div className="-mt-6 mb-6">
          {/* component/alert/banner/deals */}
          <PersonalizedDealsAlert
            category="beach"
            showAdminIndicators={isAdminMode}
            content={{
              heading: editableContent.dealsAlertHeading,
              description: editableContent.dealsAlertDescription
            }}
          />
          
          {/* ANNOTATION: Integration point */}
          {isAdminMode && (
            <div className="mt-2 p-2 bg-purple-50 border border-purple-200 rounded-lg">
              <p className="text-xs text-purple-700">
                📌 <strong>Integration:</strong> Connects to Interest Tracker system
                <br />
                📌 <strong>Data Flow:</strong> User budget → localStorage → Backend → Push notifications
                <br />
                📌 <strong>Admin Config:</strong> Level 3 heading, Level 4 form fields
              </p>
            </div>
          )}
        </div>

        {/* ========================================
            GROUP: group/beach-paradise/section-header
            ADMIN EDITABLE: Section heading
            ======================================== */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            {/* text/section/heading/featured */}
            <h2 className={`text-xl font-bold ${
              isAdminMode ? 'bg-gray-100 px-3 py-1 rounded' : ''
            }`}>
              {editableContent.sectionHeading}
            </h2>
            
            {/* ANNOTATION: Level 2 heading */}
            {isAdminMode && (
              <span className="text-xs text-purple-600 font-semibold">
                📌 Level 2: Section Heading
              </span>
            )}
          </div>

          {/* ========================================
              GROUP: group/beach-paradise/destinations
              INTERACTIVE: Destination cards with heart icons
              ======================================== */}
          <div className="space-y-4">
            {destinations.map((destination, index) => (
              <div key={destination.id}>
                {/* component/card/destination/beach */}
                <DestinationCard
                  data={destination}
                  showAdminIndicators={isAdminMode}
                />
                
                {/* ANNOTATION: Card structure */}
                {isAdminMode && index === 0 && (
                  <div className="mt-2 p-2 bg-purple-50 border border-purple-200 rounded-lg">
                    <p className="text-xs text-purple-700">
                      📌 <strong>Card Components:</strong>
                      <br />• text/card/title/placeholder → Level 4
                      <br />• text/card/subtitle/location → Level 4
                      <br />• text/card/description/details → Level 5
                      <br />• component/icon/action/heart → Interest Tracker
                      <br />• component/button/primary/explore → Navigation
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
```

---

## 📝 DETAILED NAMING GUIDE

### **TEXT LAYERS (text/...)**

#### **Header Section**
```typescript
text/header/title/placeholder              // Main screen title
text/header/subtitle/placeholder           // Subtitle under title
text/header/tagline/placeholder            // Tagline description
text/header/breadcrumb/current             // Current page in breadcrumb
text/header/badge/new                      // "New" badge text
```

#### **Search Section**
```typescript
text/search/placeholder/main               // "Search destinations..."
text/search/label/filter                   // "Filter by:"
text/search/results/count                  // "124 results found"
text/search/empty/message                  // "No results found"
```

#### **Section Headers**
```typescript
text/section/heading/featured              // "Featured Destinations"
text/section/heading/popular               // "Popular Choices"
text/section/heading/recommended           // "Recommended For You"
text/section/description/intro             // Section introduction text
```

#### **Card Content**
```typescript
text/card/title/destination-1              // "Admin-Added Destination 1"
text/card/subtitle/location                // "Location: Region X"
text/card/description/short                // Short description
text/card/description/long                 // Full description
text/card/label/price                      // "From ₹45,000"
text/card/label/duration                   // "5 Days / 4 Nights"
text/card/badge/tag-1                      // "Romantic"
text/card/badge/tag-2                      // "Beach"
```

#### **Button Labels**
```typescript
text/button/label/primary                  // "Book Now"
text/button/label/secondary                // "Learn More"
text/button/label/action-1                 // "Explore Packages"
text/button/label/action-2                 // "View Details"
text/button/label/google-search            // "Google Search"
text/button/label/youtube-browse           // "YouTube Browse"
```

#### **Filter & Chips**
```typescript
text/filter/label/category                 // "Category"
text/filter/chip/beach                     // "Beach Destinations"
text/filter/chip/heritage                  // "Heritage Sites"
text/filter/chip/all                       // "All Destinations"
text/filter/active/indicator               // Selected filter indicator
```

#### **Alert/Banner Content**
```typescript
text/alert/heading/deals                   // "Get Personalized Deals"
text/alert/description/deals               // Alert description
text/alert/input/placeholder               // Input placeholder
text/alert/checkbox/label                  // Checkbox label text
text/alert/button/save                     // "Save Preferences"
```

---

### **COMPONENTS (component/...)**

#### **Buttons**
```typescript
component/button/primary/gradient          // Primary CTA with gradient
component/button/primary/solid            // Solid color primary button
component/button/secondary/outline        // Outlined secondary button
component/button/secondary/ghost          // Ghost/transparent button
component/button/icon/back                // Back navigation button
component/button/icon/close               // Close/X button
component/button/icon/share               // Share icon button
component/button/icon/favorite            // Favorite/bookmark button
component/button/action/google            // Google Search button
component/button/action/youtube           // YouTube Browse button
```

#### **Inputs**
```typescript
component/input/search/main               // Main search input
component/input/search/secondary          // Secondary search field
component/input/text/budget               // Budget input field
component/input/text/email                // Email input
component/input/text/phone                // Phone number input
component/input/select/dropdown           // Select dropdown
component/input/checkbox/standard         // Standard checkbox
component/input/radio/option              // Radio button
component/input/date/picker               // Date picker
```

#### **Cards**
```typescript
component/card/destination/beach          // Beach destination card
component/card/destination/heritage       // Heritage site card
component/card/destination/wellness       // Wellness retreat card
component/card/feature/highlight          // Feature highlight card
component/card/package/offer              // Package offer card
component/card/review/testimonial         // Review/testimonial card
component/card/category/grid-item         // Category grid item
```

#### **Icons & Indicators**
```typescript
component/icon/category/beach             // Beach category icon
component/icon/category/heritage          // Heritage category icon
component/icon/category/wellness          // Wellness category icon
component/icon/action/heart               // Heart (Interest Tracker)
component/icon/action/heart-filled        // Filled heart state
component/icon/action/share               // Share icon
component/icon/action/bookmark            // Bookmark icon
component/icon/status/verified            // Verified checkmark
component/icon/status/popular             // Popular indicator
```

#### **Filters & Chips**
```typescript
component/filter/chips/horizontal         // Horizontal filter chips
component/filter/chips/vertical           // Vertical filter list
component/filter/chip/active              // Active filter chip
component/filter/chip/inactive            // Inactive filter chip
component/filter/dropdown/category        // Category dropdown filter
component/filter/toggle/switch            // Toggle switch filter
```

#### **Alerts & Banners**
```typescript
component/alert/banner/deals              // Deals alert banner
component/alert/banner/info               // Info banner
component/alert/banner/warning            // Warning banner
component/alert/banner/success            // Success banner
component/alert/toast/notification        // Toast notification
component/alert/modal/overlay             // Modal overlay
```

#### **Navigation**
```typescript
component/navigation/header/gradient      // Gradient header
component/navigation/header/solid         // Solid color header
component/navigation/breadcrumb/path      // Breadcrumb navigation
component/navigation/tabs/horizontal      // Horizontal tabs
component/navigation/footer/simple        // Simple footer
component/navigation/footer/detailed      // Detailed footer
```

---

### **GROUPS (group/...)**

#### **Screen-Level Groups**
```typescript
group/beach-paradise/header               // Header section
group/beach-paradise/search               // Search area
group/beach-paradise/deals-alert          // Deals alert component
group/beach-paradise/filters              // Filter section
group/beach-paradise/destinations         // Destinations list
group/beach-paradise/footer               // Footer section
group/beach-paradise/admin-overlay        // Admin mode overlay

group/main-home/hero                      // Hero section
group/main-home/categories                // Categories grid
group/main-home/trending                  // Trending section
group/main-home/featured                  // Featured content

group/heritage-sites/header               // Header
group/heritage-sites/intro                // Introduction
group/heritage-sites/highlights           // Highlights section
group/heritage-sites/list                 // Sites list
```

#### **Component-Level Groups**
```typescript
group/destination-card/image              // Card image area
group/destination-card/content            // Card content area
group/destination-card/footer             // Card footer/actions
group/destination-card/badges             // Tag badges group

group/deals-alert/collapsed               // Collapsed state
group/deals-alert/expanded                // Expanded state
group/deals-alert/success                 // Success state

group/admin-panel/header                  // Panel header
group/admin-panel/fields                  // Editable fields
group/admin-panel/actions                 // Action buttons
```

---

## 📌 ANNOTATION TYPES

### **Purple Sticky Notes (Admin Mode)**

```typescript
// ========================================
// ANNOTATION: Level 1 - Screen Title
// Admin can edit: Main screen title
// Impact: High - Changes entire screen identity
// Character limit: 40
// ========================================

// ========================================
// ANNOTATION: Level 2 - Section Heading
// Admin can edit: Section heading text
// Impact: Medium - Changes section organization
// Character limit: 60
// ========================================

// ========================================
// ANNOTATION: Level 3 - Alert Heading
// Admin can edit: Alert/banner heading
// Impact: Medium - Changes component title
// Character limit: 50
// ========================================

// ========================================
// ANNOTATION: Level 4 - Card Content
// Admin can edit: Card title, subtitle, tags
// Impact: Low - Changes individual card
// Character limit: 80 per field
// ========================================

// ========================================
// ANNOTATION: Level 5 - Helper Text
// Admin can edit: Descriptions, tooltips
// Impact: Low - Changes supporting text
// Character limit: 200
// ========================================

// ========================================
// ANNOTATION: Integration Point
// System: Interest Tracker
// Data flow: Component → localStorage → Backend
// Dependencies: InterestTrackerProvider
// ========================================

// ========================================
// ANNOTATION: Backend Connection
// Endpoint: /api/deals/preferences
// Method: POST
// Auth: Required (Bearer token)
// Sync: Real-time
// ========================================

// ========================================
// ANNOTATION: Admin Configuration
// Editable via: Admin Control Panel
// Access level: Admin only
// Screen ID: beach-paradise
// Field count: 12 editable fields
// ========================================
```

---

## 🎨 VISUAL HIERARCHY

### **Layer Organization (Top to Bottom)**

```
📁 Beach Paradise Screen - Template
  │
  ├─ 📁 Annotations (Top Layer - Admin Mode Only)
  │   ├─ Purple sticky notes
  │   ├─ Admin badges
  │   └─ Integration markers
  │
  ├─ 📁 Interactive Elements
  │   ├─ Buttons (clickable)
  │   ├─ Inputs (editable)
  │   ├─ Heart icons (Interest Tracker)
  │   └─ Filter chips (selectable)
  │
  ├─ 📁 Admin Editable Content
  │   ├─ Text placeholders
  │   ├─ Admin indicators (gray bg)
  │   └─ Level badges (purple text)
  │
  └─ 📁 Static UI Elements (Bottom Layer)
      ├─ Background gradients
      ├─ Containers & layout
      ├─ Decorative icons
      └─ Spacing elements
```

---

## 📋 COMPLETE SCREEN CHECKLIST

### **For Every New Screen:**

#### **1. Frame Structure**
- [ ] Create main frame: `"Screen Name - Template"`
- [ ] Set dimensions: 375x812px (mobile) or responsive
- [ ] Add background color/gradient

#### **2. Static UI Elements Group**
- [ ] Background gradients defined
- [ ] Layout containers positioned
- [ ] Icon placeholders added
- [ ] Spacing dividers included
- [ ] Border radius: 24px for cards
- [ ] Mobile-optimized sizing

#### **3. Admin Editable Content Group**
- [ ] Header title: `text/header/title/placeholder`
- [ ] Header tagline: `text/header/tagline/placeholder`
- [ ] Search placeholder: `text/search/placeholder/main`
- [ ] Section headings: `text/section/heading/[name]`
- [ ] Card titles: `text/card/title/destination-[n]`
- [ ] Card descriptions: `text/card/description/[type]`
- [ ] Button labels: `text/button/label/[action]`
- [ ] All text marked with `[Admin: ...]` brackets
- [ ] Level indicators assigned (1-5)

#### **4. Interactive Elements Group**
- [ ] Back button: `component/button/icon/back`
- [ ] Search input: `component/input/search/main`
- [ ] Google Search button: `component/button/action/google`
- [ ] YouTube button: `component/button/action/youtube`
- [ ] Filter chips: `component/filter/chips/horizontal`
- [ ] Heart icons: `component/icon/action/heart` (Interest Tracker)
- [ ] Deals alert: `component/alert/banner/deals`
- [ ] Primary CTA: `component/button/primary/gradient`
- [ ] Card explore buttons: `component/button/secondary/outline`

#### **5. Annotations Group**
- [ ] Admin mode banner annotation
- [ ] Level 1 markers (screen title)
- [ ] Level 2 markers (section headings)
- [ ] Level 3 markers (component headings)
- [ ] Level 4 markers (card content)
- [ ] Level 5 markers (helper text)
- [ ] Integration point notes (purple bg)
- [ ] Backend connection docs
- [ ] Data flow diagrams in comments

---

## 🎯 EXAMPLE: COMPLETE NAMING FOR ONE CARD

### **Destination Card Component**

```tsx
// ========================================
// COMPONENT: Destination Card - Beach Type
// component/card/destination/beach
// ========================================

<motion.div className="bg-white rounded-3xl shadow-lg overflow-hidden">
  
  {/* ========================================
      GROUP: group/destination-card/image
      STATIC: Image container
      ======================================== */}
  <div className="relative h-48 bg-gray-200">
    <img src={destination.imageUrl} alt={destination.name} />
    
    {/* component/icon/action/heart */}
    <div className="absolute top-4 right-4">
      <InterestTrackerIcon destinationId={destination.id} />
      
      {/* ANNOTATION: Interest Tracker Integration */}
      {isAdminMode && (
        <div className="absolute -bottom-8 right-0 w-48 p-2 bg-purple-100 border border-purple-300 rounded text-xs">
          📌 Connects to Interest Tracker system
        </div>
      )}
    </div>
  </div>

  {/* ========================================
      GROUP: group/destination-card/content
      ADMIN EDITABLE: Card content
      ======================================== */}
  <div className="p-6">
    
    {/* text/card/title/destination-1 */}
    <h3 className={`text-xl font-bold mb-2 ${
      isAdminMode ? 'bg-gray-100 px-2 py-1 rounded' : ''
    }`}>
      {destination.name}
    </h3>
    {isAdminMode && (
      <span className="text-xs text-purple-600">
        📌 Level 4: Card Title
      </span>
    )}
    
    {/* text/card/subtitle/location */}
    <p className={`text-sm text-gray-600 mb-3 ${
      isAdminMode ? 'bg-gray-100 px-2 py-1 rounded inline-block' : ''
    }`}>
      {destination.location}
    </p>
    {isAdminMode && (
      <span className="text-xs text-purple-600">
        📌 Level 4: Location
      </span>
    )}
    
    {/* text/card/description/short */}
    <p className={`text-sm text-gray-700 mb-4 ${
      isAdminMode ? 'bg-gray-100 px-2 py-1 rounded' : ''
    }`}>
      {destination.description}
    </p>
    {isAdminMode && (
      <span className="text-xs text-purple-600">
        📌 Level 5: Description
      </span>
    )}

    {/* ========================================
        GROUP: group/destination-card/badges
        ADMIN EDITABLE: Tags
        ======================================== */}
    <div className="flex flex-wrap gap-2 mb-4">
      {destination.tags.map((tag, i) => (
        <span
          key={i}
          className={`px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full ${
            isAdminMode ? 'ring-1 ring-purple-400' : ''
          }`}
        >
          {/* text/card/badge/tag-{i} */}
          {tag}
        </span>
      ))}
      {isAdminMode && (
        <span className="text-xs text-purple-600 w-full mt-1">
          📌 Level 4: Tags (admin can add/remove)
        </span>
      )}
    </div>

    {/* ========================================
        GROUP: group/destination-card/footer
        INTERACTIVE: Action buttons
        ======================================== */}
    <div className="flex items-center justify-between">
      
      {/* text/card/label/price */}
      <div>
        <p className="text-xs text-gray-600">Starting from</p>
        <p className={`text-lg font-bold text-pink-600 ${
          isAdminMode ? 'bg-gray-100 px-2 py-1 rounded inline-block' : ''
        }`}>
          {destination.priceRange}
        </p>
        {isAdminMode && (
          <span className="text-xs text-purple-600 block">
            📌 Level 4: Price
          </span>
        )}
      </div>
      
      {/* component/button/primary/explore */}
      <button
        onClick={() => onExplore(destination)}
        className="px-6 py-2 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-full font-semibold hover:shadow-lg transition-all"
      >
        {/* text/button/label/explore */}
        Explore
      </button>
    </div>
  </div>

  {/* ========================================
      ANNOTATION: Complete card documentation
      ======================================== */}
  {isAdminMode && (
    <div className="border-t border-purple-200 bg-purple-50 p-3">
      <p className="text-xs text-purple-700 font-mono">
        <strong>Component:</strong> component/card/destination/beach<br />
        <strong>Editable Fields:</strong> 7 (title, location, description, 3 tags, price)<br />
        <strong>Interactive:</strong> Heart icon (Interest Tracker), Explore button<br />
        <strong>Data Source:</strong> generateDestinationCards('beach', 6)
      </p>
    </div>
  )}
</motion.div>
```

---

## 📚 TEMPLATE FILES TO CREATE

For each new category/screen, create these organized files:

### **1. Main Screen Component**
`/src/app/components/[category]/[ScreenName]Complete.tsx`

### **2. Card Components**
`/src/app/components/[category]/DestinationCard.tsx`

### **3. Admin Integration**
Extend: `/src/app/components/admin/AdminControlPanel.tsx`

### **4. Documentation**
`/docs/screens/[SCREEN_NAME]_TEMPLATE.md`

---

## ✅ QUALITY CHECKLIST

Before marking a screen as complete:

### **Structure**
- [ ] All 4 groups defined (Static, Editable, Interactive, Annotations)
- [ ] Naming follows conventions exactly
- [ ] Code organized top-to-bottom by layer
- [ ] Comments use `// ========` separator style

### **Admin Editable Content**
- [ ] All text uses `[Admin: ...]` format
- [ ] Level indicators assigned (1-5)
- [ ] Gray backgrounds on placeholders
- [ ] Purple badges visible in admin mode
- [ ] Character limits documented

### **Interactive Elements**
- [ ] Interest Tracker hearts on ALL cards
- [ ] Google Search + YouTube buttons
- [ ] Personalized Deals Alert integrated
- [ ] Filter chips (if applicable)
- [ ] Primary CTA buttons

### **Annotations**
- [ ] Integration points documented
- [ ] Backend connections noted
- [ ] Data flow explained
- [ ] Admin configuration detailed
- [ ] Purple sticky notes in admin mode

### **Visual**
- [ ] 24px rounded cards
- [ ] Scenic gradients (category-specific)
- [ ] Modern typography (system fonts)
- [ ] Indian tourism theme elements
- [ ] Mobile-optimized (375x812px)

---

## 🎊 SUCCESS METRICS

A well-organized screen has:

1. **Clear Structure:** 4 distinct groups visible in code
2. **Consistent Naming:** All components follow `type/category/variant` format
3. **Admin Ready:** All placeholders marked, levels assigned
4. **Interactive:** Hearts, searches, alerts functional
5. **Documented:** Annotations explain every integration
6. **Mobile-First:** Responsive, touch-friendly, 44px minimum targets
7. **Production-Ready:** No hardcoded destinations, all admin-managed

---

**This template ensures every screen in GrokYatra follows the exact same organizational pattern, making the codebase maintainable and admin-friendly!** 📐✨
