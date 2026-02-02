# 🎯 NAMING QUICK REFERENCE CARD

## ONE-PAGE CHEAT SHEET FOR DEVELOPERS

Print this and keep it next to your desk! 📌

---

## 📐 THE 4 GROUPS (Every Screen Has These)

```
1. GROUP: Static UI Elements       → Layout, gradients, structure
2. GROUP: Admin Editable Content   → [Admin: ...] placeholders
3. GROUP: Interactive Elements     → Buttons, inputs, hearts
4. GROUP: Annotations             → Purple sticky notes
```

---

## 🏷️ NAMING PATTERN

```
[type] / [section] / [element] / [variant]
  ↓         ↓          ↓           ↓
 text    header      title    placeholder
```

---

## 📝 TEXT LAYERS (text/...)

### **Format:** `text/[section]/[element]/placeholder`

```typescript
// HEADER
text/header/title/placeholder
text/header/tagline/placeholder
text/header/subtitle/placeholder
text/header/breadcrumb/current

// SEARCH
text/search/placeholder/main
text/search/label/filter
text/search/results/count

// SECTION
text/section/heading/featured
text/section/heading/popular
text/section/description/intro

// CARD
text/card/title/destination-1
text/card/subtitle/location
text/card/description/short
text/card/description/long
text/card/label/price
text/card/label/duration
text/card/badge/tag-1

// BUTTON
text/button/label/primary
text/button/label/secondary
text/button/label/google-search
text/button/label/youtube-browse

// FILTER
text/filter/label/category
text/filter/chip/beach
text/filter/chip/heritage

// ALERT
text/alert/heading/deals
text/alert/description/deals
text/alert/input/placeholder
text/alert/button/save
```

---

## 🧩 COMPONENTS (component/...)

### **Format:** `component/[type]/[variant]`

```typescript
// BUTTONS
component/button/primary/gradient
component/button/primary/solid
component/button/secondary/outline
component/button/icon/back
component/button/icon/close
component/button/action/google
component/button/action/youtube

// INPUTS
component/input/search/main
component/input/text/budget
component/input/text/email
component/input/checkbox/standard
component/input/date/picker

// CARDS
component/card/destination/beach
component/card/destination/heritage
component/card/destination/wellness
component/card/feature/highlight
component/card/package/offer

// ICONS
component/icon/category/beach
component/icon/category/heritage
component/icon/action/heart
component/icon/action/share
component/icon/status/verified

// FILTERS
component/filter/chips/horizontal
component/filter/chip/active
component/filter/dropdown/category

// ALERTS
component/alert/banner/deals
component/alert/banner/info
component/alert/toast/notification
component/alert/modal/overlay

// NAVIGATION
component/navigation/header/gradient
component/navigation/breadcrumb/path
component/navigation/footer/simple
```

---

## 📦 GROUPS (group/...)

### **Format:** `group/[screen]/[section]`

```typescript
// SCREEN GROUPS
group/beach-paradise/header
group/beach-paradise/search
group/beach-paradise/deals-alert
group/beach-paradise/filters
group/beach-paradise/destinations
group/beach-paradise/footer
group/beach-paradise/admin-overlay

// COMPONENT GROUPS
group/destination-card/image
group/destination-card/content
group/destination-card/footer
group/destination-card/badges

group/deals-alert/collapsed
group/deals-alert/expanded
group/deals-alert/success

group/admin-panel/header
group/admin-panel/fields
group/admin-panel/actions
```

---

## 📌 ANNOTATION TYPES

```typescript
// ADMIN LEVELS
📌 Level 1: Screen Title (40 char max)
📌 Level 1: Tagline (60 char max)
📌 Level 2: Section Heading (60 char max)
📌 Level 3: Component Heading (50 char max)
📌 Level 4: Card Content (80 char max per field)
📌 Level 5: Helper Text (200 char max)

// INTEGRATIONS
📌 Integration: Interest Tracker
📌 Integration: Personalized Deals Alert
📌 Integration: Search API
📌 Backend: POST /api/deals/preferences

// DATA FLOW
📌 Data Flow: localStorage → Backend → Admin Dashboard
📌 Connects to: InterestTrackerProvider
📌 Saves to: grokyatra_interests

// SCREEN INFO
📌 SCREEN: [Name] - Template
📌 Total fields: [X] editable
📌 Interactive components: [Y]
📌 Integration points: [Z]
```

---

## 🎨 CODE STRUCTURE TEMPLATE

```tsx
// ========================================
// FRAME: Screen Name - Template
// ========================================

import { ... } from '...';

export function ScreenNameComplete({ ... }) {
  
  // ========================================
  // GROUP: ADMIN EDITABLE CONTENT
  // ========================================
  
  const [headerTitle, setHeaderTitle] = useState('[Admin: ...]');
  const [headerTagline, setHeaderTagline] = useState('[Admin: ...]');
  // ... more editable fields
  
  // ========================================
  // GROUP: INTERACTIVE ELEMENTS
  // ========================================
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState([]);
  
  // ========================================
  // RETURN: MAIN LAYOUT
  // ========================================
  
  return (
    <>
      {/* GROUP: Admin System */}
      <AdminModeToggle />
      <AdminOverlay />
      
      {/* GROUP: Static UI Elements */}
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        
        {/* ANNOTATION: Admin Banner */}
        {isAdminMode && (
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600">
            📌 ADMIN MODE ACTIVE
          </div>
        )}
        
        {/* ========================================
            GROUP: group/screen-name/header
            ======================================== */}
        <div className="bg-gradient-to-r from-[color1] to-[color2]">
          
          {/* component/button/icon/back */}
          <button onClick={onBack}>
            <ArrowLeft />
          </button>
          
          {/* text/header/title/placeholder [Level 1] */}
          <h1 className={isAdminMode ? 'bg-white/10 ...' : ''}>
            {headerTitle}
          </h1>
          
          {/* ANNOTATION: Level 1 */}
          {isAdminMode && (
            <span>📌 Level 1: Screen Title</span>
          )}
          
          {/* component/input/search/main */}
          <Input placeholder={searchPlaceholder} />
          
          {/* component/button/action/google */}
          <Button onClick={() => onGoogleSearch('...')}>
            <Globe /> Google Search
          </Button>
        </div>
        
        {/* ========================================
            GROUP: group/screen-name/content
            ======================================== */}
        <div className="px-6">
          
          {/* component/alert/banner/deals */}
          <PersonalizedDealsAlert category="..." />
          
          {/* ANNOTATION: Integration */}
          {isAdminMode && (
            <div className="bg-purple-50 border border-purple-200">
              📌 Integration: Connects to Interest Tracker
            </div>
          )}
          
          {/* text/section/heading/featured [Level 2] */}
          <h2>{sectionHeading}</h2>
          
          {/* Destination Cards */}
          {destinations.map((dest, i) => (
            <DestinationCard
              key={dest.id}
              data={dest}
              showAdminIndicators={isAdminMode}
            />
          ))}
        </div>
      </div>
    </>
  );
}
```

---

## ✅ QUICK CHECKLIST

Every screen must have:

### **Structure**
- [ ] 4 groups defined
- [ ] Naming follows conventions
- [ ] Comments use `// ========`

### **Content**
- [ ] All text uses `[Admin: ...]`
- [ ] Level indicators (1-5)
- [ ] Gray backgrounds on placeholders
- [ ] Purple badges in admin mode

### **Interactive**
- [ ] ❤️ Hearts on ALL cards
- [ ] 🔍 Google + YouTube buttons
- [ ] 🔔 Personalized Deals Alert
- [ ] 🔙 Back button

### **Annotations**
- [ ] 📌 Integration points
- [ ] 📌 Backend connections
- [ ] 📌 Data flow docs
- [ ] 📌 Purple sticky notes

---

## 🎨 COLOR GRADIENTS BY CATEGORY

```typescript
Beach:      from-pink-600    to-rose-600
Heritage:   from-amber-600   to-orange-600
Wellness:   from-green-600   to-teal-600
Adventure:  from-red-600     to-orange-600
Hill:       from-blue-600    to-cyan-600
Wildlife:   from-green-700   to-emerald-700
Spiritual:  from-purple-600  to-pink-600
Culinary:   from-yellow-600  to-orange-600
```

---

## 🔢 LEVEL DEFINITIONS

| Level | Usage | Max Length | Example |
|-------|-------|------------|---------|
| **1** | Screen Title, Tagline | 40-60 | "[Admin: Beach Paradise]" |
| **2** | Section Headings | 60 | "[Admin: Featured Destinations]" |
| **3** | Component Headings | 50 | "[Admin: Get Deal Alerts]" |
| **4** | Card Content, Tags | 80 | "[Admin: Destination 1]" |
| **5** | Descriptions, Help | 200 | "[Admin: Full description...]" |

---

## 🎯 COMMON PATTERNS

### **Admin Editable Text**
```tsx
const [text, setText] = useState('[Admin: Placeholder]');

<h1 className={isAdminMode ? 'bg-gray-100 px-2 py-1 rounded' : ''}>
  {text}
</h1>

{isAdminMode && (
  <span className="text-xs text-purple-600">
    📌 Level X: Description
  </span>
)}
```

### **Interest Tracker Heart**
```tsx
import { InterestTrackerIcon } from '@/app/components/shared/InterestTracker';

<div className="absolute top-4 right-4">
  <InterestTrackerIcon
    destinationId={destination.id}
    destinationName={destination.name}
  />
</div>
```

### **Personalized Deals Alert**
```tsx
<PersonalizedDealsAlert
  category="[category-name]"
  showAdminIndicators={isAdminMode}
  content={{
    heading: '[Admin: Category Deal Alerts]',
    description: '[Admin: Set your budget...]',
    budgetPlaceholder: '[Admin: e.g., ₹50,000]',
    notificationText: '[Admin: Notify me...]',
    buttonLabel: '[Admin: Save Preferences]'
  }}
/>
```

### **Research Buttons**
```tsx
<div className="flex gap-3">
  <Button onClick={() => onGoogleSearch('query')}>
    <Globe /> Google Search
  </Button>
  <Button onClick={() => onYouTubeSearch('query')}>
    <Youtube /> YouTube
  </Button>
</div>
```

---

## 📊 FIELD COUNT CALCULATOR

**Per Card:**
- Title: 1
- Subtitle/Location: 1
- Description: 1
- Tags: 3
- Price: 1
- **Total:** 7 fields

**Per Screen (with 6 cards):**
- Screen-level: 4 fields
- Card-level: 7 × 6 = 42 fields
- **Total:** 46 editable fields

**Interactive Components (typical):**
- Back: 1
- Search: 1
- Google: 1
- YouTube: 1
- Deals Alert: 1
- Hearts: 6
- Explore: 6
- **Total:** 17 components

---

## 🚀 COPY-PASTE STARTERS

### **New Screen File**
```bash
# Create new screen
touch /src/app/components/[category]/[ScreenName]Complete.tsx

# Copy template
cp /src/app/components/honeymoon/BeachParadiseComplete.tsx \
   /src/app/components/[category]/[ScreenName]Complete.tsx
```

### **Find & Replace**
```
Beach → [NewCategory]
beach → [newcategory]
Waves → [NewIcon]
pink → [newcolor1]
rose → [newcolor2]
```

---

## 💡 PRO TIPS

1. **Always start with Static UI** (gradients, layout)
2. **Then add Admin Editable** (`[Admin: ...]` text)
3. **Then add Interactive** (hearts, buttons)
4. **Finally add Annotations** (purple notes)

5. **Name files consistently:**
   - `[Category]Complete.tsx` for screens
   - `DestinationCard.tsx` for cards
   - `[Feature]Component.tsx` for shared components

6. **Group imports by type:**
   - React imports
   - Icon imports
   - Component imports
   - Admin imports

7. **Use TypeScript interfaces** for all props

8. **Comment every section** with `// ========`

9. **Test in admin mode** to verify all indicators

10. **Mobile-first:** Always test at 375px width

---

## 📞 QUICK LINKS

- **Main Template:** `/SCREEN_ORGANIZATION_TEMPLATE.md`
- **Full Example:** `/IMPLEMENTATION_EXAMPLE_HERITAGE_SITES.md`
- **Deals Alert:** `/PERSONALIZED_DEALS_ALERT_DOCS.md`
- **Interest Tracker:** `/INTEREST_TRACKER_DOCS.md`
- **Admin System:** `/ADMIN_SYSTEM_DOCS.md`

---

**Print this page and keep it visible while coding!** 🎯✨
