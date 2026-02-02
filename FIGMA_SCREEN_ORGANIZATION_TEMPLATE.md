# 📐 FIGMA SCREEN ORGANIZATION TEMPLATE
## GrokYatra Mobile Tourism App - Design System Structure

---

## 🎯 TEMPLATE STRUCTURE

### **Every Screen Must Follow This Exact Structure:**

```
📱 [Screen Name] - Template (375x812px)
├── 📁 Group: Static UI Elements
│   ├── Header
│   ├── Navigation
│   ├── Background Gradients
│   └── Fixed Components
├── 📁 Group: Admin Editable Content
│   ├── Level 1: Headers/Titles
│   ├── Level 2: Section Headings
│   ├── Level 3: Filter Labels
│   ├── Level 4: Card Content
│   └── Level 5: Helper Text
├── 📁 Group: Interactive Elements
│   ├── Buttons
│   ├── Input Fields
│   ├── Filters/Chips
│   ├── Search Bars
│   └── Toggle Switches
├── 📁 Group: Annotations
│   ├── Purple Sticky Notes
│   ├── Admin Instructions
│   ├── Flow Indicators
│   └── Design Notes
└── 📁 Group: Component Instances
    ├── Personalized Deals Alert
    ├── Interest Tracker Icons
    ├── Destination Cards
    └── Shared Components
```

---

## 🏗️ DETAILED GROUP SPECIFICATIONS

### **1. GROUP: STATIC UI ELEMENTS**
**Purpose:** Non-editable design elements that maintain brand consistency

#### **Contents:**
```
group/static/header
├── component/header/gradient-background
├── component/header/back-button
├── component/header/category-icon-container
└── component/header/search-bar-container

group/static/navigation
├── component/nav/bottom-bar
├── component/nav/tab-icons
└── component/nav/active-indicator

group/static/background
├── layer/gradient/primary
├── layer/gradient/secondary
└── layer/decoration/pattern

group/static/fixed-components
├── component/card/shadow
├── component/card/rounded-corner-24px
└── component/divider/horizontal
```

#### **Layer Naming:**
- `static/header/gradient-[color]`
- `static/nav/button-back`
- `static/background/gradient-main`
- `static/shadow/card-elevation`

#### **Properties:**
- **Locked:** Yes (prevent accidental edits)
- **Visible:** Always
- **Export:** Include in developer handoff

---

### **2. GROUP: ADMIN EDITABLE CONTENT**
**Purpose:** All text/content that admins can update via dashboard

#### **5-Level Hierarchy Structure:**

```
group/admin-editable/level-1-headers
├── text/header/title/placeholder
│   └── "[Admin: Main Category Title]"
├── text/header/tagline/placeholder
│   └── "[Admin: Category Tagline]"
└── text/header/subtitle/placeholder
    └── "[Admin: Category Description]"

group/admin-editable/level-2-sections
├── text/section/destinations/heading
│   └── "[Admin: Section Heading 1]"
├── text/section/packages/heading
│   └── "[Admin: Section Heading 2]"
└── text/section/services/heading
    └── "[Admin: Section Heading 3]"

group/admin-editable/level-3-filters
├── text/filter/chip-1/label
│   └── "[Admin: Filter Label 1]"
├── text/filter/chip-2/label
│   └── "[Admin: Filter Label 2]"
├── text/filter/chip-3/label
│   └── "[Admin: Filter Label 3]"
├── text/filter/chip-4/label
│   └── "[Admin: Filter Label 4]"
└── text/filter/chip-5/label
    └── "[Admin: Filter Label 5]"

group/admin-editable/level-4-cards
├── group/card/destination-1
│   ├── text/card/destination-1/name/placeholder
│   │   └── "[Admin: Destination 1]"
│   ├── text/card/destination-1/price/placeholder
│   │   └── "[Admin: Price 1]"
│   ├── text/card/destination-1/tag-1/placeholder
│   │   └── "[Admin: Tag 1]"
│   └── text/card/destination-1/description/placeholder
│       └── "[Admin: Description 1]"
└── group/card/destination-2
    └── [Same structure as destination-1]

group/admin-editable/level-5-helper
├── text/helper/search-hint/placeholder
│   └── "[Admin: Search Instruction]"
├── text/helper/info-banner/placeholder
│   └── "[Admin: Info Message]"
└── text/helper/disclaimer/placeholder
    └── "[Admin: Legal Text]"
```

#### **Layer Naming Convention:**
```
text/[section]/[element]/[type]

Examples:
- text/header/title/placeholder
- text/section/destinations/heading
- text/filter/chip-3/label
- text/card/destination-1/name/placeholder
- text/helper/search-hint/placeholder
```

#### **Properties:**
- **Background:** Light gray (#F5F5F5) for visibility
- **Border:** Dashed purple (#9333EA) 2px
- **Icon:** 📝 emoji prefix
- **Lock:** No (admins need to edit)
- **Export:** Text content only

#### **Visual Indicators:**
1. **Purple Banner Above:** "ADMIN EDITABLE CONTENT - LEVEL [X]"
2. **Gray Background:** On all placeholder text
3. **Bracket Notation:** [Admin: Update This Text]
4. **Grouped Together:** All Level X elements in one group

---

### **3. GROUP: INTERACTIVE ELEMENTS**
**Purpose:** Buttons, inputs, and user interaction components

#### **Contents:**
```
group/interactive/buttons
├── component/button/primary/google-search
│   ├── icon/google
│   └── text/button/google-search/label
├── component/button/primary/youtube-browse
│   ├── icon/youtube
│   └── text/button/youtube-browse/label
├── component/button/primary/save-preferences
│   └── text/button/save/label
└── component/button/secondary/filter-toggle
    └── icon/filter

group/interactive/inputs
├── component/input/search-bar
│   ├── icon/search
│   ├── text/input/search/placeholder
│   └── icon/filter-button
├── component/input/budget-field
│   ├── icon/currency
│   └── text/input/budget/placeholder
└── component/checkbox/notifications
    └── text/checkbox/notifications/label

group/interactive/filters
├── component/chip/filter-1
│   └── text/chip/filter-1/label
├── component/chip/filter-2
│   └── text/chip/filter-2/label
└── component/chip/filter-all
    └── text/chip/all/label

group/interactive/toggles
├── component/toggle/notifications
├── component/toggle/admin-mode
└── component/switch/theme
```

#### **Layer Naming:**
```
component/[type]/[variant]/[name]

Examples:
- component/button/primary/google-search
- component/input/text/budget-field
- component/chip/filter/beach-resorts
- component/toggle/switch/notifications
```

#### **Properties:**
- **Interactive:** Yes (prototype links)
- **States:** Default, Hover, Pressed, Disabled
- **Export:** Include all states

#### **Button Specifications:**
- **Google Search:** Blue (#2563EB), 44px height
- **YouTube Browse:** Red (#DC2626), 44px height
- **Primary Actions:** Gradient, 48px height
- **Secondary Actions:** White bg, 44px height
- **Touch Target:** Minimum 44x44px

---

### **4. GROUP: ANNOTATIONS**
**Purpose:** Design notes, instructions, and flow indicators

#### **Contents:**
```
group/annotations/purple-sticky-notes
├── note/admin/level-1-instructions
│   └── "📝 LEVEL 1: Main headers - largest impact"
├── note/admin/level-2-instructions
│   └── "📝 LEVEL 2: Section headings - organize content"
├── note/admin/level-3-instructions
│   └── "📝 LEVEL 3: Filter labels - user selection"
├── note/admin/level-4-instructions
│   └── "📝 LEVEL 4: Card content - bulk updates"
└── note/admin/level-5-instructions
    └── "📝 LEVEL 5: Helper text - guidance"

group/annotations/flow-indicators
├── arrow/flow/google-search
│   └── "Opens Google in new tab"
├── arrow/flow/youtube-browse
│   └── "Opens YouTube search"
└── arrow/flow/save-preferences
    └── "Saves to localStorage → Backend"

group/annotations/design-notes
├── note/spacing/card-gap
│   └── "16px gap between cards"
├── note/color/gradient-values
│   └── "from-pink-600 to-rose-600"
└── note/typography/font-size
    └── "text-3xl (30px) - Category titles"

group/annotations/admin-instructions
├── banner/purple/level-1
│   └── "⚠️ ADMIN EDITABLE CONTENT - LEVEL 1"
├── banner/purple/level-2
│   └── "⚠️ ADMIN EDITABLE CONTENT - LEVEL 2"
└── banner/purple/grouped-edits
    └── "ℹ️ These elements can be batch updated"
```

#### **Layer Naming:**
```
note/[category]/[topic]
arrow/[type]/[target]
banner/[color]/[level]

Examples:
- note/admin/level-1-instructions
- arrow/flow/google-search
- banner/purple/admin-editable-level-2
```

#### **Properties:**
- **Color:** Purple (#9333EA) background
- **Size:** 200x100px sticky notes
- **Font:** Inter 12px Regular
- **Opacity:** 90%
- **Export:** No (design reference only)

#### **Annotation Types:**

**Purple Sticky Notes:**
```
┌─────────────────────────────┐
│ 📝 ADMIN EDITABLE          │
│                             │
│ Level 1: Main Headers       │
│ - Category title            │
│ - Tagline                   │
│ - Description               │
│                             │
│ Update these first for      │
│ maximum visual impact!      │
└─────────────────────────────┘
```

**Flow Arrows:**
```
[Button] ──────────> [Action]
         "Opens Google Search"
```

**Design Specs:**
```
┌─────────────────────────────┐
│ 📐 SPACING SPEC             │
│                             │
│ Card gap: 16px              │
│ Section margin: 24px        │
│ Edge padding: 24px (6)      │
└─────────────────────────────┘
```

---

### **5. GROUP: COMPONENT INSTANCES**
**Purpose:** Reusable components from the design system

#### **Contents:**
```
group/components/personalized-deals-alert
├── component/deals-alert/collapsed-state
│   ├── icon/bell-notification
│   ├── text/deals-alert/heading/placeholder
│   ├── text/deals-alert/description/placeholder
│   └── text/deals-alert/cta/tap-to-set
├── component/deals-alert/expanded-state
│   ├── text/deals-alert/heading/placeholder
│   ├── component/input/budget-field
│   ├── component/checkbox/notifications
│   └── component/button/save-preferences
└── component/deals-alert/success-state
    ├── icon/checkmark
    ├── text/deals-alert/success/message
    └── animation/fade-out-2s

group/components/interest-tracker
├── component/tracker/heart-icon-empty
├── component/tracker/heart-icon-filled
└── component/tracker/heart-icon-animated

group/components/destination-cards
├── component/card/beach-destination
│   ├── text/card/name/placeholder
│   ├── text/card/price/placeholder
│   ├── group/tags/3-chips
│   └── component/button/view-details
├── component/card/heritage-destination
│   └── [Same structure]
└── component/card/wellness-destination
    └── [Same structure]

group/components/shared
├── component/search-bar/universal
├── component/google-button/standard
├── component/youtube-button/standard
└── component/filter-chips/set
```

#### **Layer Naming:**
```
component/[component-name]/[variant]

Examples:
- component/deals-alert/collapsed-state
- component/tracker/heart-icon-filled
- component/card/beach-destination
- component/search-bar/universal
```

#### **Properties:**
- **Source:** Main component library
- **Overrides:** Document all customizations
- **States:** Include all variants
- **Export:** Component specs + code snippets

---

## 📋 NAMING CONVENTION REFERENCE

### **Complete Naming System:**

#### **1. Text Layers:**
```
text/[section]/[element]/[type]

Format:
- Section: Where it appears (header, section, card, etc.)
- Element: Specific item (title, description, price, etc.)
- Type: placeholder, label, value, helper

Examples:
✅ text/header/title/placeholder
✅ text/section/destinations/heading
✅ text/card/destination-1/name/placeholder
✅ text/filter/chip-3/label
✅ text/helper/search-hint/placeholder
✅ text/button/google-search/label

❌ Title Text
❌ Heading
❌ Card Name
```

#### **2. Components:**
```
component/[type]/[variant]/[name]

Format:
- Type: Component category (button, input, card, etc.)
- Variant: Style variation (primary, secondary, outline, etc.)
- Name: Specific identifier

Examples:
✅ component/button/primary/google-search
✅ component/button/secondary/filter-toggle
✅ component/input/text/budget-field
✅ component/card/destination/beach-style
✅ component/chip/filter/active-state
✅ component/deals-alert/collapsed-state

❌ Button
❌ Search Button
❌ Primary Button 1
```

#### **3. Groups:**
```
group/[screen-or-category]/[section]

Format:
- Screen/Category: Where it belongs
- Section: What it contains

Examples:
✅ group/beach-paradise/admin-editable
✅ group/honeymoon-hub/interactive-elements
✅ group/deals-alert/collapsed-state
✅ group/static/header
✅ group/annotations/purple-sticky-notes

❌ Group 1
❌ Content
❌ Editable Stuff
```

#### **4. Icons:**
```
icon/[name]/[size]

Examples:
✅ icon/bell-notification/24px
✅ icon/heart-filled/20px
✅ icon/google/16px
✅ icon/arrow-right/12px

❌ Icon
❌ Bell
```

#### **5. Static Elements:**
```
static/[category]/[element]

Examples:
✅ static/header/gradient-background
✅ static/nav/back-button
✅ static/shadow/card-elevation
✅ static/background/gradient-primary

❌ Background
❌ Header BG
```

#### **6. Annotations:**
```
note/[category]/[topic]
arrow/[type]/[target]
banner/[color]/[purpose]

Examples:
✅ note/admin/level-1-instructions
✅ arrow/flow/google-search-action
✅ banner/purple/admin-editable-level-2

❌ Note 1
❌ Purple Box
❌ Instructions
```

---

## 🎨 VISUAL HIERARCHY SYSTEM

### **Admin Editable Content - 5 Levels:**

```
┌─────────────────────────────────────────────────────────────┐
│ 🟣 ADMIN EDITABLE CONTENT - LEVEL 1: HEADERS/TITLES         │
├─────────────────────────────────────────────────────────────┤
│ Largest visual impact - Category names, main headers        │
│                                                              │
│ 📝 [Admin: Main Category Title]                             │
│ 📝 [Admin: Category Tagline]                                │
│                                                              │
│ Background: Light Gray (#F5F5F5)                            │
│ Border: Dashed Purple 2px                                   │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ 🟣 ADMIN EDITABLE CONTENT - LEVEL 2: SECTION HEADINGS       │
├─────────────────────────────────────────────────────────────┤
│ Organize content into logical groups                        │
│                                                              │
│ 📝 [Admin: Section Heading 1]                               │
│ 📝 [Admin: Section Heading 2]                               │
│                                                              │
│ Background: Light Gray (#F5F5F5)                            │
│ Border: Dashed Purple 2px                                   │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ 🟣 ADMIN EDITABLE CONTENT - LEVEL 3: FILTER LABELS          │
├─────────────────────────────────────────────────────────────┤
│ User selection chips - can be batch updated                 │
│                                                              │
│ [Admin: Filter 1]  [Admin: Filter 2]  [Admin: Filter 3]    │
│                                                              │
│ Background: Light Gray (#F5F5F5)                            │
│ Border: Dashed Purple 2px                                   │
│ Group: Can update all 5 chips together                      │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ 🟣 ADMIN EDITABLE CONTENT - LEVEL 4: CARD CONTENT           │
├─────────────────────────────────────────────────────────────┤
│ Destination cards, packages - bulk update capability        │
│                                                              │
│ Card 1:                                                      │
│ 📝 [Admin: Destination 1]                                   │
│ 📝 [Admin: Price 1]                                         │
│ 📝 [Admin: Tag 1] [Admin: Tag 2]                            │
│                                                              │
│ Background: Light Gray (#F5F5F5)                            │
│ Border: Dashed Purple 2px                                   │
│ Group: Update all destination cards in batch                │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ 🟣 ADMIN EDITABLE CONTENT - LEVEL 5: HELPER TEXT            │
├─────────────────────────────────────────────────────────────┤
│ Instructions, hints, disclaimers                            │
│                                                              │
│ 📝 [Admin: Search Instruction Text]                         │
│ 📝 [Admin: Info Banner Message]                             │
│                                                              │
│ Background: Light Gray (#F5F5F5)                            │
│ Border: Dashed Purple 2px                                   │
└─────────────────────────────────────────────────────────────┘
```

---

## 📱 SCREEN-SPECIFIC EXAMPLES

### **EXAMPLE 1: BEACH PARADISE SCREEN**

```
📱 Beach Paradise - Template (375x812px)
├── 📁 group/beach-paradise/static-ui
│   ├── static/header/gradient-turquoise-to-cyan
│   ├── static/header/back-button
│   ├── static/header/icon-container-waves
│   ├── static/background/gradient-main
│   └── static/card/shadow-elevation
│
├── 📁 group/beach-paradise/admin-editable
│   ├── 📁 group/admin-editable/level-1-headers
│   │   ├── text/header/title/placeholder
│   │   │   → "[Admin: Beach Category Title]"
│   │   ├── text/header/tagline/placeholder
│   │   │   → "[Admin: Beach Tagline]"
│   │   └── text/header/search/placeholder
│   │       → "[Admin: Search Placeholder]"
│   │
│   ├── 📁 group/admin-editable/level-2-sections
│   │   ├── text/section/destinations/heading
│   │   │   → "[Admin: Destinations Section]"
│   │   └── text/section/packages/heading
│   │       → "[Admin: Packages Section]"
│   │
│   ├── 📁 group/admin-editable/level-3-filters
│   │   ├── text/filter/chip-1/label → "[Admin: Filter 1]"
│   │   ├── text/filter/chip-2/label → "[Admin: Filter 2]"
│   │   ├── text/filter/chip-3/label → "[Admin: Filter 3]"
│   │   ├── text/filter/chip-4/label → "[Admin: Filter 4]"
│   │   └── text/filter/chip-5/label → "[Admin: Filter 5]"
│   │
│   ├── 📁 group/admin-editable/level-4-cards
│   │   ├── group/card/destination-1
│   │   │   ├── text/card/destination-1/name/placeholder
│   │   │   │   → "[Admin: Destination 1]"
│   │   │   ├── text/card/destination-1/price/placeholder
│   │   │   │   → "[Admin: Price 1]"
│   │   │   ├── text/card/destination-1/tag-1/placeholder
│   │   │   │   → "[Admin: Tag 1]"
│   │   │   └── text/card/destination-1/special-request/placeholder
│   │   │       → "[Admin: Special Request 1]"
│   │   ├── group/card/destination-2
│   │   │   └── [Same structure as destination-1]
│   │   └── group/card/destination-3
│   │       └── [Same structure as destination-1]
│   │
│   └── 📁 group/admin-editable/level-5-helper
│       ├── text/helper/search-hint/placeholder
│       │   → "[Admin: Search Instruction]"
│       └── text/helper/info-banner/placeholder
│           → "[Admin: Info Message]"
│
├── 📁 group/beach-paradise/interactive-elements
│   ├── 📁 group/interactive/buttons
│   │   ├── component/button/primary/google-search
│   │   │   ├── icon/google/16px
│   │   │   └── text/button/google-search/label
│   │   ├── component/button/primary/youtube-browse
│   │   │   ├── icon/youtube/16px
│   │   │   └── text/button/youtube-browse/label
│   │   └── component/button/secondary/filter-toggle
│   │       └── icon/filter/16px
│   │
│   ├── 📁 group/interactive/inputs
│   │   ├── component/input/search-bar
│   │   │   ├── icon/search/20px
│   │   │   └── text/input/search/placeholder
│   │   └── component/checkbox/notifications
│   │       └── text/checkbox/notifications/label
│   │
│   └── 📁 group/interactive/filters
│       ├── component/chip/filter-1
│       ├── component/chip/filter-2
│       ├── component/chip/filter-3
│       ├── component/chip/filter-4
│       └── component/chip/filter-5
│
├── 📁 group/beach-paradise/annotations
│   ├── 📁 group/annotations/purple-sticky-notes
│   │   ├── note/admin/level-1-instructions
│   │   │   → "📝 LEVEL 1: Beach category headers
│   │   │      Update these first for max impact!"
│   │   ├── note/admin/level-3-filters
│   │   │   → "📝 LEVEL 3: Filter chips
│   │   │      Can batch update all 5 chips"
│   │   └── note/admin/level-4-cards
│   │       → "📝 LEVEL 4: Destination cards
│   │          Update all cards in one operation"
│   │
│   ├── 📁 group/annotations/flow-indicators
│   │   ├── arrow/flow/google-search
│   │   │   → "Opens: google.com/search?q=beach+destinations"
│   │   ├── arrow/flow/youtube-browse
│   │   │   → "Opens: youtube.com/results?search_query=beaches"
│   │   └── arrow/flow/heart-icon
│   │       → "Saves to Interest Tracker → localStorage"
│   │
│   └── 📁 group/annotations/design-notes
│       ├── note/spacing/card-gap
│       │   → "16px gap between cards (gap-4)"
│       ├── note/color/gradient
│       │   → "from-turquoise-500 to-cyan-600"
│       └── note/typography/title
│           → "text-3xl font-bold (30px)"
│
└── 📁 group/beach-paradise/components
    ├── component/deals-alert/collapsed-state
    │   ├── icon/bell-notification/24px
    │   ├── text/deals-alert/heading/placeholder
    │   │   → "[Admin: Get Beach Deal Alerts]"
    │   └── text/deals-alert/cta/tap-to-set
    ├── component/deals-alert/expanded-state
    │   └── [Full form structure]
    └── component/tracker/heart-icon
        ├── icon/heart-empty/20px
        └── icon/heart-filled/20px
```

---

### **EXAMPLE 2: HONEYMOON HUB SCREEN**

```
📱 Honeymoon Hub - Template (375x812px)
├── 📁 group/honeymoon-hub/static-ui
│   ├── static/header/gradient-pink-to-rose
│   ├── static/header/back-button
│   ├── static/header/icon-container-heart
│   └── static/background/gradient-gray-to-white
│
├── 📁 group/honeymoon-hub/admin-editable
│   ├── 📁 group/admin-editable/level-1-headers
│   │   ├── text/header/title/placeholder
│   │   │   → "[Admin: Honeymoon Category Title]"
│   │   ├── text/header/tagline/placeholder
│   │   │   → "[Admin: Romantic Journey Tagline]"
│   │   └── text/header/description/placeholder
│   │       → "[Admin: Create Unforgettable Memories]"
│   │
│   ├── 📁 group/admin-editable/level-2-sections
│   │   ├── text/section/destinations/heading
│   │   │   → "[Admin: Romantic Destinations]"
│   │   └── text/section/experiences/heading
│   │       → "[Admin: Special Experiences]"
│   │
│   ├── 📁 group/admin-editable/level-3-categories
│   │   ├── text/category/hill-stations/label
│   │   │   → "[Admin: Hill Stations]"
│   │   ├── text/category/adventure/label
│   │   │   → "[Admin: Adventure]"
│   │   ├── text/category/international/label
│   │   │   → "[Admin: International]"
│   │   ├── text/category/beach/label
│   │   │   → "[Admin: Beach Paradise]"
│   │   ├── text/category/heritage/label
│   │   │   → "[Admin: Heritage Palaces]"
│   │   └── text/category/wellness/label
│   │       → "[Admin: Wellness Retreats]"
│   │
│   ├── 📁 group/admin-editable/level-4-cards
│   │   ├── group/card/category-1-hill-stations
│   │   │   ├── text/card/hill-stations/title/placeholder
│   │   │   └── text/card/hill-stations/description/placeholder
│   │   ├── group/card/category-2-adventure
│   │   │   └── [Same structure]
│   │   └── group/card/category-3-international
│   │       └── [Same structure]
│   │
│   └── 📁 group/admin-editable/level-5-helper
│       └── text/helper/search-hint/placeholder
│           → "[Admin: Search romantic destinations...]"
│
├── 📁 group/honeymoon-hub/interactive-elements
│   ├── component/button/primary/google-search
│   ├── component/button/primary/youtube-browse
│   ├── component/search-bar/universal
│   └── component/category-cards/grid-6
│
├── 📁 group/honeymoon-hub/annotations
│   ├── note/admin/level-1-instructions
│   ├── note/admin/level-3-categories
│   ├── arrow/flow/hill-stations-card
│   │   → "Navigate to: Hill Stations Sub-Screen"
│   └── arrow/flow/beach-paradise-card
│       → "Navigate to: Beach Paradise Sub-Screen"
│
└── 📁 group/honeymoon-hub/components
    ├── component/deals-alert/collapsed-state
    │   └── text/deals-alert/heading/placeholder
    │       → "[Admin: Get Romantic Deal Alerts]"
    └── component/category-cards/set-of-6
```

---

### **EXAMPLE 3: SENIOR WELLNESS HUB SCREEN**

```
📱 Senior Wellness Hub - Template (375x812px)
├── 📁 group/senior-wellness/static-ui
│   ├── static/header/gradient-indigo-to-purple
│   ├── static/header/back-button
│   ├── static/header/icon-container-heart
│   └── static/background/gradient-indigo-to-purple-light
│
├── 📁 group/senior-wellness/admin-editable
│   ├── 📁 group/admin-editable/level-1-headers
│   │   ├── text/header/title/placeholder
│   │   │   → "[Admin: Senior Wellness Category]"
│   │   └── text/header/tagline/placeholder
│   │       → "[Admin: Comfortable Travel with Care]"
│   │
│   ├── 📁 group/admin-editable/level-2-sections
│   │   ├── text/section/services/heading
│   │   │   → "[Admin: Care Services Section]"
│   │   └── text/section/packages/heading
│   │       → "[Admin: Senior-Friendly Packages]"
│   │
│   ├── 📁 group/admin-editable/level-3-services
│   │   ├── text/service/doctor-on-tour/label
│   │   │   → "[Admin: Doctor on Tour]"
│   │   ├── text/service/nursing-care/label
│   │   │   → "[Admin: Nursing Care]"
│   │   ├── text/service/personal-assistant/label
│   │   │   → "[Admin: Personal Assistant]"
│   │   └── text/service/emergency-support/label
│   │       → "[Admin: Emergency Support]"
│   │
│   ├── 📁 group/admin-editable/level-4-cards
│   │   ├── group/card/package-1
│   │   │   ├── text/card/package-1/name/placeholder
│   │   │   │   → "[Admin: Package Name 1]"
│   │   │   ├── text/card/package-1/destination/placeholder
│   │   │   │   → "[Admin: Admin-Selected Destination]"
│   │   │   └── text/card/package-1/price/placeholder
│   │   │       → "[Admin: ₹25,000]"
│   │   └── group/card/package-2
│   │       └── [Same structure]
│   │
│   └── 📁 group/admin-editable/level-5-helper
│       └── text/helper/info-banner/placeholder
│           → "[Admin: Professional care during journey]"
│
├── 📁 group/senior-wellness/interactive-elements
│   ├── component/search-bar/universal
│   ├── component/service-cards/grid-6
│   └── component/package-cards/list-3
│
├── 📁 group/senior-wellness/annotations
│   ├── note/admin/level-1-instructions
│   ├── note/admin/level-3-services
│   │   → "📝 LEVEL 3: Senior care services
│   │      Update all 6 service cards together"
│   └── arrow/flow/service-card
│       → "Selects service → Updates package filters"
│
└── 📁 group/senior-wellness/components
    └── component/deals-alert/collapsed-state
        └── text/deals-alert/heading/placeholder
            → "[Admin: Get Senior Care Deal Alerts]"
```

---

### **EXAMPLE 4: PERSONALIZED DEALS ALERT COMPONENT**

```
📱 Personalized Deals Alert - Component Library
├── 📁 component/deals-alert/collapsed-state
│   ├── group/static/container
│   │   ├── static/background/gradient-amber-to-orange
│   │   ├── static/shadow/elevation-md
│   │   └── static/border/rounded-24px
│   │
│   ├── group/admin-editable/content
│   │   ├── text/deals-alert/heading/placeholder
│   │   │   → "[Admin: Get Personalized Deal Alerts]"
│   │   ├── text/deals-alert/description/placeholder
│   │   │   → "[Admin: Set your budget description]"
│   │   └── text/deals-alert/cta/tap-to-set
│   │       → "Tap to set →"
│   │
│   ├── group/interactive/elements
│   │   ├── icon/bell-notification/24px
│   │   └── component/button/expand-trigger
│   │
│   └── group/annotations
│       └── note/admin/collapsed-state
│           → "📝 Collapsed state - 120px height
│              Expands on tap to show full form"
│
├── 📁 component/deals-alert/expanded-state
│   ├── group/static/container
│   │   ├── static/background/white
│   │   ├── static/shadow/elevation-xl
│   │   └── static/border/rounded-24px
│   │
│   ├── group/admin-editable/content
│   │   ├── text/deals-alert/heading/placeholder
│   │   │   → "[Admin: Deal Notification Heading]"
│   │   ├── text/deals-alert/budget-label/placeholder
│   │   │   → "[Admin: Your Budget]"
│   │   ├── text/input/budget/placeholder
│   │   │   → "[Admin: e.g., ₹50,000 for 5 nights]"
│   │   ├── text/checkbox/notifications/label
│   │   │   → "[Admin: Send me notifications]"
│   │   └── text/button/save/label
│   │       → "[Admin: Save Preferences]"
│   │
│   ├── group/interactive/elements
│   │   ├── icon/bell-notification/24px
│   │   ├── component/button/close
│   │   ├── component/input/budget-field
│   │   ├── component/checkbox/notifications
│   │   └── component/button/save-preferences
│   │
│   └── group/annotations
│       ├── note/admin/expanded-state
│       │   → "📝 Expanded state - 450px height
│       │      Shows budget input + checkbox + save"
│       └── arrow/flow/save-button
│           → "Saves to localStorage → Shows success"
│
└── 📁 component/deals-alert/success-state
    ├── group/static/container
    │   ├── static/background/gradient-green-to-emerald
    │   └── static/border/rounded-24px
    │
    ├── group/admin-editable/content
    │   ├── text/deals-alert/success/heading
    │   │   → "✓ Preferences Saved! ✓"
    │   └── text/deals-alert/success/message
    │       → "We'll notify you when we find deals"
    │
    ├── group/interactive/elements
    │   ├── icon/checkmark/24px
    │   └── animation/auto-close-2s
    │
    └── group/annotations
        └── note/admin/success-state
            → "📝 Success state - Auto-closes after 2s
               Returns to collapsed state"
```

---

## 🎯 QUALITY CHECKLIST

### **Before Marking a Screen as Complete:**

#### **✅ STRUCTURE CHECKLIST:**
- [ ] Frame named: "[Screen Name] - Template"
- [ ] Frame size: 375x812px (iPhone X)
- [ ] 4 main groups present:
  - [ ] Static UI Elements
  - [ ] Admin Editable Content
  - [ ] Interactive Elements
  - [ ] Annotations
- [ ] Component Instances group (if applicable)

#### **✅ STATIC UI ELEMENTS:**
- [ ] Header gradient background
- [ ] Back button
- [ ] Category icon container
- [ ] Background gradients
- [ ] All elements locked
- [ ] Export settings configured

#### **✅ ADMIN EDITABLE CONTENT:**
- [ ] All 5 levels organized:
  - [ ] Level 1: Headers/Titles
  - [ ] Level 2: Section Headings
  - [ ] Level 3: Filter Labels
  - [ ] Level 4: Card Content
  - [ ] Level 5: Helper Text
- [ ] Gray background (#F5F5F5) on all placeholders
- [ ] Dashed purple border (2px) on all placeholders
- [ ] Bracket notation: [Admin: Update This]
- [ ] Purple banners above each level
- [ ] Grouped for batch editing

#### **✅ INTERACTIVE ELEMENTS:**
- [ ] All buttons present:
  - [ ] Google Search button
  - [ ] YouTube Browse button
  - [ ] Filter toggles
  - [ ] Action buttons
- [ ] Input fields configured
- [ ] Search bar included
- [ ] Filter chips/tags
- [ ] Minimum 44x44px touch targets
- [ ] Prototype links configured

#### **✅ ANNOTATIONS:**
- [ ] Purple sticky notes for each level
- [ ] Flow arrows showing interactions
- [ ] Design spec notes (spacing, colors)
- [ ] Admin instructions clear
- [ ] All annotations at 90% opacity
- [ ] Export disabled for annotations

#### **✅ NAMING CONVENTIONS:**
- [ ] Text layers: `text/[section]/[element]/[type]`
- [ ] Components: `component/[type]/[variant]/[name]`
- [ ] Groups: `group/[screen]/[section]`
- [ ] Icons: `icon/[name]/[size]`
- [ ] Static: `static/[category]/[element]`
- [ ] Notes: `note/[category]/[topic]`

#### **✅ PERSONALIZED DEALS ALERT:**
- [ ] Component instance included
- [ ] Positioned below header, above content
- [ ] Margin: -mt-6 mb-6
- [ ] All 3 states visible in component:
  - [ ] Collapsed state
  - [ ] Expanded state
  - [ ] Success state
- [ ] Admin-editable content configured
- [ ] Category ID set correctly

#### **✅ INTEREST TRACKER:**
- [ ] Heart icon components included
- [ ] Empty state
- [ ] Filled state
- [ ] Animation variant
- [ ] Positioned on destination cards

#### **✅ GOOGLE SEARCH & YOUTUBE:**
- [ ] Both buttons present
- [ ] Correct colors (Blue/Red)
- [ ] Icons included
- [ ] Flow arrows showing external links
- [ ] Annotations explaining behavior

#### **✅ DOCUMENTATION:**
- [ ] Screen appears in master index
- [ ] Implementation notes added
- [ ] Flow diagram updated
- [ ] Developer handoff notes ready

---

## 📊 MASTER SCREEN INDEX

### **All 206 Screens - Organization Tracking:**

```
SECTION 1: AUTHENTICATION (8 screens)
├── ✅ Splash Screen - Template
├── ✅ Onboarding 1 - Template
├── ✅ Onboarding 2 - Template
├── ✅ Onboarding 3 - Template
├── ✅ Login - Template
├── ✅ Sign Up - Template
├── ✅ Forgot Password - Template
└── ✅ OTP Verification - Template

SECTION 2: MAIN NAVIGATION (1 screen)
└── ✅ Main Home - Template

SECTION 3: BEACH PARADISE (12 screens)
├── ✅ Beach Paradise Hub - Template
├── ✅ Beach Destination 1 Details - Template
├── ✅ Beach Destination 2 Details - Template
├── [... 9 more destination screens]
└── ✅ Beach Booking Confirmation - Template

SECTION 4: HONEYMOON & ROMANCE (18 screens)
├── ✅ Honeymoon Hub - Template
├── ✅ Hill Stations Sub-Screen - Template
├── ✅ Adventure Sub-Screen - Template
├── ✅ International Sub-Screen - Template
├── ✅ Beach Paradise Sub-Screen - Template
├── ✅ Heritage Palaces Sub-Screen - Template
├── ✅ Wellness Retreats Sub-Screen - Template
└── [... 11 more screens]

SECTION 5: HERITAGE SITES (15 screens)
├── 🔜 Heritage Hub - Template
├── 🔜 Heritage Destination 1 - Template
└── [... 13 more screens]

SECTION 6: ADVENTURE TOURS (15 screens)
├── 🔜 Adventure Hub - Template
└── [... 14 more screens]

SECTION 7: HILL STATIONS (15 screens)
├── 🔜 Hill Stations Hub - Template
└── [... 14 more screens]

SECTION 8: WILDLIFE & NATURE (15 screens)
├── 🔜 Wildlife Hub - Template
└── [... 14 more screens]

SECTION 9: WELLNESS & SPA (15 screens)
├── 🔜 Wellness Hub - Template
└── [... 14 more screens]

SECTION 10: CULTURAL EXPERIENCES (12 screens)
├── 🔜 Cultural Hub - Template
└── [... 11 more screens]

SECTION 11: PILGRIMAGE TOURS (12 screens)
├── 🔜 Pilgrimage Hub - Template
└── [... 11 more screens]

SECTION 12: INTERNATIONAL DESTINATIONS (15 screens)
├── 🔜 International Hub - Template
└── [... 14 more screens]

SECTION 13: FOOD & CUISINE (12 screens)
├── 🔜 Food Hub - Template
└── [... 11 more screens]

SECTION 14: PHOTOGRAPHY TOURS (10 screens)
├── 🔜 Photography Hub - Template
└── [... 9 more screens]

SECTION 15: SPORTS & RECREATION (10 screens)
├── 🔜 Sports Hub - Template
└── [... 9 more screens]

SECTION 16: ECO TOURISM (10 screens)
├── 🔜 Eco Tourism Hub - Template
└── [... 9 more screens]

SECTION 17: FESTIVAL & EVENTS (10 screens)
├── 🔜 Festival Hub - Template
└── [... 9 more screens]

SECTION 18: SENIOR WELLNESS (8 screens)
├── ✅ Senior Wellness Hub - Template
└── [... 7 more screens]

SECTION 19: TRAVEL ESSENTIALS (15 screens)
├── ✅ Travel Essentials Hub - Template
├── ✅ Self-Drive Flow - Template
└── [... 13 more screens]

SECTION 20: CUSTOM TOUR PLANNING (8 screens)
├── ✅ Combo Tour Planner - Template
└── [... 7 more screens]

SECTION 21: BOOKING & PAYMENT (10 screens)
├── 🔜 Booking Summary - Template
├── 🔜 Payment Gateway - Template
└── [... 8 more screens]

SECTION 22: USER PROFILE (6 screens)
├── 🔜 Profile Home - Template
├── 🔜 Saved Trips - Template
├── 🔜 Booking History - Template
└── [... 3 more screens]

SECTION 23: AI FEATURES (6 screens)
├── 🔜 AI Itinerary Builder - Template
├── 🔜 Smart Recommendations - Template
└── [... 4 more screens]

TOTAL: 206 screens
✅ Complete: 25 screens
🔜 Pending: 181 screens
```

---

## 🚀 FIGMA BEST PRACTICES

### **1. LAYER ORGANIZATION:**
```
✅ DO:
- Use consistent naming: text/section/element/type
- Group related elements together
- Lock static layers to prevent accidental edits
- Use components for repeated elements
- Apply auto-layout where possible

❌ DON'T:
- Use generic names like "Layer 1", "Group 2"
- Mix editable and static content in same group
- Leave ungrouped floating elements
- Duplicate components unnecessarily
- Ignore the 5-level hierarchy
```

### **2. ADMIN EDITABLE SYSTEM:**
```
✅ DO:
- Always use [Admin: Description] bracket notation
- Apply gray background (#F5F5F5) to placeholders
- Add dashed purple border (2px) for visibility
- Include purple banner above each level
- Group elements that can be batch updated

❌ DON'T:
- Use plain text without brackets
- Mix editable and final content
- Forget visual indicators (gray bg, purple border)
- Leave individual items ungrouped
- Skip level categorization
```

### **3. COMPONENT USAGE:**
```
✅ DO:
- Use main component library for all shared elements
- Document all component overrides
- Include all states (default, hover, pressed, disabled)
- Name component instances clearly
- Link to component documentation

❌ DON'T:
- Detach components unnecessarily
- Create duplicate components
- Forget to update component library
- Use inconsistent component variants
- Mix component versions
```

### **4. ANNOTATIONS:**
```
✅ DO:
- Use purple (#9333EA) for all admin notes
- Include sticky notes for each level
- Add flow arrows for interactions
- Document spacing and color specs
- Set annotations to 90% opacity
- Disable export for annotation layers

❌ DON'T:
- Use multiple annotation colors
- Leave annotations unclear or vague
- Forget to document interactions
- Export annotations to developers
- Overcrowd the design with notes
```

### **5. EXPORT SETTINGS:**
```
✅ DO:
- Configure export for developer handoff
- Include all component states
- Export at @1x, @2x, @3x for images
- Use SVG for icons
- Document export settings

❌ DON'T:
- Export annotations
- Forget retina resolutions
- Use PNG for vector graphics
- Include hidden layers in export
- Skip naming exported assets
```

---

## 📖 QUICK REFERENCE CARD

### **COPY-PASTE NAMING TEMPLATES:**

#### **Text Layers:**
```
text/header/title/placeholder
text/header/tagline/placeholder
text/section/[section-name]/heading
text/filter/chip-[number]/label
text/card/[card-name]/name/placeholder
text/card/[card-name]/price/placeholder
text/helper/[helper-type]/placeholder
text/button/[button-name]/label
```

#### **Components:**
```
component/button/primary/[name]
component/button/secondary/[name]
component/input/text/[name]
component/card/[type]/[variant]
component/chip/filter/[name]
component/deals-alert/[state]
component/tracker/heart-icon-[state]
```

#### **Groups:**
```
group/[screen-name]/static-ui
group/[screen-name]/admin-editable
group/[screen-name]/interactive-elements
group/[screen-name]/annotations
group/[screen-name]/components
group/admin-editable/level-[1-5]-[category]
```

#### **Static Elements:**
```
static/header/gradient-[color]
static/header/back-button
static/header/icon-container
static/background/gradient-[type]
static/shadow/card-elevation
static/border/rounded-[size]px
```

#### **Annotations:**
```
note/admin/level-[1-5]-instructions
note/spacing/[element]-gap
note/color/gradient-values
note/typography/[element]-size
arrow/flow/[target-name]
banner/purple/admin-editable-level-[1-5]
```

---

## ✨ CONCLUSION

This Figma organization template ensures:
- ✅ **Consistency** across all 206 screens
- ✅ **Clarity** for developers and designers
- ✅ **Scalability** for future screen additions
- ✅ **Admin-friendliness** with clear editable markers
- ✅ **Documentation** embedded in the design
- ✅ **Collaboration** with clear naming and grouping
- ✅ **Quality** through systematic organization

**Follow this template for every new screen to maintain the grandeur design system and admin-editable hierarchy across the entire GrokYatra app!** 📱✨

---

**Total Screens:** 206
**Template Structure:** 5 groups per screen
**Naming Convention:** Hierarchical and descriptive
**Admin Levels:** 5-tier content hierarchy
**Ready for:** Design handoff + Development + Admin CMS

🎨 **Design System Complete!** 🎉
