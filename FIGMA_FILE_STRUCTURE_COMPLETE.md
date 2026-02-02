# ========================================
# FIGMA FILE STRUCTURE - COMPLETE GUIDE
# Devotional Tourism Complete Design System
# ========================================

## 📁 **MASTER FILE ORGANIZATION**

```
🎨 Devotional Tourism Complete/
│
├── 📄 00. Master Template/
│   ├── 🎨 Design Tokens
│   ├── 📐 Grid System
│   ├── 🌈 Color Palette (All Religions)
│   ├── 🔤 Typography System
│   ├── 📦 Base Components
│   └── 📋 Layout Templates
│
├── 📄 01. Sikh Devotees/
│   ├── 1.1 Overview Dashboard
│   ├── 1.2 Sacred Sites Detail
│   ├── 1.3 Five Takhts Circuit
│   ├── 1.4 Festival Calendar
│   ├── 1.5 Ritual Procedures
│   └── 1.6 Planning Flow (5 Screens)
│
├── 📄 02. Christian Pilgrims/
│   ├── 2.1 Overview Dashboard
│   ├── 2.2 Holy Land Circuit
│   ├── 2.3 Velankanni Detail
│   ├── 2.4 Festival Calendar
│   ├── 2.5 Ritual Procedures
│   └── 2.6 Planning Flow
│
├── 📄 03. Muslim Travelers/
│   ├── 3.1 Overview Dashboard
│   ├── 3.2 Hajj/Umrah Planner
│   ├── 3.3 Mosque/Dargah Details
│   ├── 3.4 Prayer Time System
│   ├── 3.5 Festival Calendar
│   └── 3.6 Planning Flow
│
├── 📄 04. Buddhist Seekers/
│   ├── 4.1 Overview Dashboard
│   ├── 4.2 Four Holy Sites Circuit
│   ├── 4.3 Monastery Details
│   ├── 4.4 Meditation Schedules
│   └── 4.6 Planning Flow
│
├── 📄 05. Jain Pilgrims/
│   ├── 5.1 Overview Dashboard
│   ├── 5.2 Palitana Trek Details
│   ├── 5.3 Tirthankar Sites
│   ├── 5.4 Fasting Schedules
│   └── 5.6 Planning Flow
│
├── 📄 06. Jewish Travelers/
│   ├── 6.1 Overview Dashboard
│   ├── 6.2 Western Wall Details
│   ├── 6.3 Synagogue Circuit
│   ├── 6.4 Shabbat Timings
│   └── 6.6 Planning Flow
│
├── 📄 07. Hindu Pilgrims/
│   ├── 7.1 Overview Dashboard
│   ├── 7.2 Char Dham Circuit
│   ├── 7.3 Temple Details
│   ├── 7.4 Festival Calendar
│   └── 7.6 Planning Flow
│
├── 📄 08. Bahá'í Pilgrims/
│   ├── 8.1 Overview Dashboard
│   ├── 8.2 Lotus Temple Details
│   ├── 8.3 19-Day Feast Calendar
│   └── 8.6 Planning Flow
│
├── 📄 09. Indigenous Spiritual Sites/
│   ├── 9.1 Overview Dashboard
│   ├── 9.2 Sacred Grove Details
│   ├── 9.3 Elder Consultation
│   └── 9.6 Planning Flow
│
├── 📄 10. Parsi/Zoroastrian/
│   ├── 10.1 Overview Dashboard
│   ├── 10.2 Fire Temple Details
│   ├── 10.3 Festival Calendar
│   └── 10.6 Planning Flow
│
├── 📄 Common Screens/
│   ├── CS-01: Faith Selector
│   ├── CS-02: Religion Overview Dashboard
│   ├── CS-03: Destination Detail View (6 Tabs)
│   ├── CS-04: Pilgrimage Planner (5 Steps)
│   ├── CS-05: Interest Confirmation
│   ├── CS-06: Grok AI Planning Dashboard
│   └── CS-07: Admin Content Management
│
├── 📄 Components Library/
│   ├── CL-01: Religion Icons & Emojis
│   ├── CL-02: Sacred Circuit Cards
│   ├── CL-03: Festival Calendar Widgets
│   ├── CL-04: Ritual Procedure Cards
│   ├── CL-05: Sacred Text Display
│   ├── CL-06: Admin Editable Templates
│   ├── CL-07: Filter Chips
│   ├── CL-08: Date Pickers
│   ├── CL-09: Form Inputs
│   ├── CL-10: Buttons & CTAs
│   ├── CL-11: Badges & Tags
│   ├── CL-12: Navigation Elements
│   ├── CL-13: Modal & Overlays
│   ├── CL-14: Grok AI Elements
│   └── CL-15: Animations & Micro-interactions
│
├── 📄 Design System/
│   ├── DS-01: Color Styles (10 Religions)
│   ├── DS-02: Text Styles (Hierarchy)
│   ├── DS-03: Effect Styles (Shadows, Blur)
│   ├── DS-04: Grid Styles (Responsive)
│   └── DS-05: Spacing Tokens
│
├── 📄 Prototypes/
│   ├── PT-01: Sikh Complete Journey
│   ├── PT-02: Christian Complete Journey
│   ├── PT-03: Muslim Complete Journey
│   ├── PT-04: Buddhist Complete Journey
│   ├── PT-05: Admin Management Flow
│   └── PT-06: Cross-Religion Navigation
│
└── 📄 Documentation/
    ├── DOC-01: Design System Guide
    ├── DOC-02: Component Usage
    ├── DOC-03: Admin Editable Guidelines
    ├── DOC-04: Handoff Specifications
    └── DOC-05: Developer Notes
```

---

## 🎨 **00. MASTER TEMPLATE**

### **Frame: Design Tokens**

**Dimensions**: 1920×10000 (scrollable artboard)

#### **Color Tokens**:

```
Religion Color Palettes (10 sets)
─────────────────────────────────

SIKH COLORS
├─ Primary: #1E3A8A (Deep Blue)
├─ Secondary: #F97316 (Saffron)
├─ Gradient: Blue 900 → Orange 500
├─ Text Light: #DBEAFE
└─ Text Dark: #1E3A8A

CHRISTIAN COLORS
├─ Primary: #7C3AED (Purple)
├─ Secondary: #FBBF24 (Gold)
├─ Gradient: Purple 600 → Yellow 500
├─ Text Light: #EDE9FE
└─ Text Dark: #7C3AED

MUSLIM COLORS
├─ Primary: #059669 (Green)
├─ Secondary: #FFFFFF (White)
├─ Gradient: Green 600 → Teal 500
├─ Text Light: #D1FAE5
└─ Text Dark: #059669

[... Continue for all 10 religions]
```

**Layer Naming**:
- `COLOR/Sikh/Primary`
- `COLOR/Sikh/Secondary`
- `COLOR/Sikh/Gradient`

#### **Typography System**:

```
HEADING STYLES
├─ H1: Inter Bold, 48px, Line 120%, Letter -2%
├─ H2: Inter Bold, 36px, Line 120%, Letter -1%
├─ H3: Inter Semibold, 24px, Line 130%, Letter 0%
├─ H4: Inter Semibold, 20px, Line 130%, Letter 0%
├─ H5: Inter Medium, 16px, Line 140%, Letter 0%
└─ H6: Inter Medium, 14px, Line 140%, Letter 0%

BODY STYLES
├─ Body Large: Inter Regular, 18px, Line 150%
├─ Body Medium: Inter Regular, 16px, Line 150%
├─ Body Small: Inter Regular, 14px, Line 150%
└─ Body Tiny: Inter Regular, 12px, Line 140%

LABEL STYLES
├─ Label Large: Inter Semibold, 16px, Line 140%
├─ Label Medium: Inter Semibold, 14px, Line 140%
└─ Label Small: Inter Semibold, 12px, Line 140%

SACRED TEXT STYLES
├─ Sacred Heading: Georgia Italic, 24px, Line 140%
├─ Sacred Body: Georgia Regular, 16px, Line 160%
└─ Sacred Citation: Georgia Italic, 14px, Line 150%
```

**Layer Naming**:
- `TEXT/Heading/H1`
- `TEXT/Body/Medium`
- `TEXT/Sacred/Body`

#### **Spacing System**:

```
SPACING TOKENS
├─ xs: 4px
├─ sm: 8px
├─ md: 16px
├─ lg: 24px
├─ xl: 32px
├─ 2xl: 48px
├─ 3xl: 64px
└─ 4xl: 96px
```

#### **Grid System**:

```
DESKTOP (1440px)
├─ Columns: 12
├─ Gutter: 24px
├─ Margin: 80px
└─ Max Width: 1280px

TABLET (768px)
├─ Columns: 8
├─ Gutter: 16px
├─ Margin: 40px
└─ Max Width: 688px

MOBILE (375px)
├─ Columns: 4
├─ Gutter: 16px
├─ Margin: 20px
└─ Max Width: 335px
```

#### **Shadow Styles**:

```
SHADOWS
├─ sm: 0px 1px 2px rgba(0,0,0,0.05)
├─ md: 0px 4px 6px rgba(0,0,0,0.07)
├─ lg: 0px 10px 15px rgba(0,0,0,0.1)
├─ xl: 0px 20px 25px rgba(0,0,0,0.1)
└─ 2xl: 0px 25px 50px rgba(0,0,0,0.15)

GLOWS (Religion-Specific)
├─ Sikh Glow: 0px 0px 40px rgba(249,115,22,0.3)
├─ Christian Glow: 0px 0px 40px rgba(124,58,237,0.3)
└─ [... for all religions]
```

---

## 📄 **01. SIKH DEVOTEES**

### **Page Structure**: 6 screens, ~25 frames

---

### **Frame 1.1: Overview Dashboard**

**Dimensions**: 1440×3200 (Desktop)

**Layer Structure**:
```
📐 Sikh Overview Dashboard
├── 🎨 Background Gradient (Blue→Saffron)
├── 📦 Header Section
│   ├── ADMIN_SIKH_HEADER_TITLE
│   ├── ADMIN_SIKH_HEADER_EMOJI
│   └── ADMIN_SIKH_HEADER_DESCRIPTION
├── 🔍 Smart Filters Section
│   ├── Filter/Text Search
│   ├── Filter/Date Picker
│   └── Filter/Ritual Type Dropdown
├── 📊 Sacred Circuits Grid (Auto-layout: Horizontal, Gap 24px)
│   ├── Circuit Card 1 (Component Instance)
│   │   ├── ADMIN_SIKH_CIRCUIT1_NAME
│   │   ├── ADMIN_SIKH_CIRCUIT1_DESCRIPTION
│   │   ├── ADMIN_SIKH_CIRCUIT1_DURATION
│   │   ├── ADMIN_SIKH_CIRCUIT1_DESTINATIONS
│   │   └── ADMIN_SIKH_CIRCUIT1_IMAGE
│   ├── Circuit Card 2
│   └── Circuit Card 3
├── 📅 Festival Calendar Section
│   ├── ADMIN_SIKH_FESTIVAL_CALENDAR_TITLE
│   └── Festival Cards (Auto-layout: Vertical, Gap 16px)
│       ├── Festival 1
│       │   ├── ADMIN_SIKH_FESTIVAL1_NAME
│       │   ├── ADMIN_SIKH_FESTIVAL1_DATE
│       │   └── ADMIN_SIKH_FESTIVAL1_COUNTDOWN
│       ├── Festival 2
│       └── Festival 3
├── 📖 Sacred Texts Reference
│   ├── ADMIN_SIKH_SACRED_TEXTS_TITLE
│   └── Text Cards (Auto-layout: Grid 2-col)
│       ├── Text 1: ADMIN_SIKH_TEXT1_NAME
│       └── Text 2: ADMIN_SIKH_TEXT2_NAME
├── ✨ Grok AI Insights Section
│   ├── ADMIN_SIKH_GROK_INSIGHTS_TITLE
│   └── Insight Cards (Auto-layout: Vertical)
│       ├── Insight 1: ADMIN_SIKH_INSIGHT1_TEXT
│       ├── Insight 2: ADMIN_SIKH_INSIGHT2_TEXT
│       └── Insight 3: ADMIN_SIKH_INSIGHT3_TEXT
└── 🎯 Dual CTAs (Auto-layout: Horizontal, Gap 16px)
    ├── Button/Browse Destinations
    └── Button/Custom Plan
```

**Auto-layout Settings**:
- Main Frame: Vertical, Gap 48px, Padding 80px
- Circuit Grid: Horizontal, Gap 24px, Padding 0px
- Festival Calendar: Vertical, Gap 16px, Padding 32px

**Component Instances**:
- `Circuit Card` (variant: Sikh)
- `Festival Card` (variant: Sikh)
- `Sacred Text Card` (variant: Sikh)
- `Grok Insight Card` (variant: Sikh)
- `Button/Primary` (variant: Sikh colors)

---

### **Frame 1.2: Sacred Sites Detail**

**Dimensions**: 1440×4500 (Desktop)

**Layer Structure**:
```
📐 Sikh Sacred Site Detail
├── 🎨 Header with Religion Gradient
│   ├── ADMIN_SIKH_SITE_NAME
│   ├── ADMIN_SIKH_SITE_LOCATION
│   ├── ADMIN_SIKH_SITE_IMAGE
│   └── Action Bar
│       ├── Button/Save
│       ├── Button/Share
│       ├── Button/Download
│       └── Button/Notify
├── 📑 Tab Navigation (6 Tabs)
│   ├── Tab/Overview (Active)
│   ├── Tab/Rituals
│   ├── Tab/Festivals
│   ├── Tab/Timings
│   ├── Tab/Sacred Texts
│   └── Tab/Map
├── 📄 Tab Content Area
│   └── [Dynamic content based on active tab]
│       ├── Overview Content
│       │   ├── ADMIN_SIKH_SITE_SIGNIFICANCE
│       │   ├── ADMIN_SIKH_SITE_HISTORY
│       │   └── ADMIN_SIKH_SITE_FACILITIES
│       ├── Rituals Content (when Rituals tab active)
│       │   ├── ADMIN_SIKH_SITE_RITUALS_LIST
│       │   ├── ADMIN_SIKH_SITE_DRESS_CODE
│       │   └── ADMIN_SIKH_SITE_PROCEDURES
│       └── [... other tabs]
├── 📊 Live Updates Panel (Sidebar)
│   ├── Crowd Level Widget
│   │   ├── ADMIN_SIKH_SITE_CROWD_CURRENT
│   │   └── ADMIN_SIKH_SITE_CROWD_FORECAST
│   ├── Events Widget
│   │   └── ADMIN_SIKH_SITE_EVENTS_TODAY
│   └── Weather Widget
│       └── ADMIN_SIKH_SITE_WEATHER
└── 🎯 Bottom CTA
    └── Button/Plan Your Visit
```

**Tabs Component Structure**:
```
Component: Tab Navigation
├── Variant: 6 Tabs
├── States: Default, Hover, Active
└── Auto-layout: Horizontal, Gap 0px
```

---

### **Frame 1.3: Five Takhts Circuit**

**Dimensions**: 1440×3800

**Layer Structure**:
```
📐 Five Takhts Sacred Circuit
├── 🎨 Header
│   ├── ADMIN_SIKH_CIRCUIT_5TAKHTS_NAME
│   ├── ADMIN_SIKH_CIRCUIT_5TAKHTS_DESCRIPTION
│   └── Circuit Stats
│       ├── ADMIN_SIKH_CIRCUIT_5TAKHTS_DURATION
│       ├── ADMIN_SIKH_CIRCUIT_5TAKHTS_DESTINATIONS
│       └── ADMIN_SIKH_CIRCUIT_5TAKHTS_DIFFICULTY
├── 📍 Destination Cards (Auto-layout: Vertical, Gap 24px)
│   ├── Destination 1: ADMIN_SIKH_5TAKHTS_DEST1
│   │   ├── Name, Location, Image
│   │   ├── Significance
│   │   ├── Rituals Available
│   │   └── Facilities
│   ├── Destination 2: ADMIN_SIKH_5TAKHTS_DEST2
│   ├── Destination 3: ADMIN_SIKH_5TAKHTS_DEST3
│   ├── Destination 4: ADMIN_SIKH_5TAKHTS_DEST4
│   └── Destination 5: ADMIN_SIKH_5TAKHTS_DEST5
├── 🗺️ Interactive Route Map
│   ├── ADMIN_SIKH_5TAKHTS_MAP
│   └── Route Lines with distances
├── 💰 Budget Breakdown
│   ├── ADMIN_SIKH_5TAKHTS_BUDGET_TRANSPORT
│   ├── ADMIN_SIKH_5TAKHTS_BUDGET_ACCOMMODATION
│   └── ADMIN_SIKH_5TAKHTS_BUDGET_TOTAL
└── 🎯 CTA
    └── Button/Add to My Plan
```

---

### **Frame 1.4: Festival Calendar**

**Dimensions**: 1440×2800

**Layer Structure**:
```
📐 Sikh Festival Calendar
├── 🎨 Header
│   ├── ADMIN_SIKH_FESTIVALS_TITLE
│   └── Calendar Toggle (Month/List View)
├── 📅 Calendar View (if active)
│   └── Month Grid with festival markers
│       ├── ADMIN_SIKH_FESTIVAL_VAISAKHI_DATE
│       ├── ADMIN_SIKH_FESTIVAL_GURPURAB_DATE
│       └── [... other festivals]
├── 📋 List View (if active)
│   └── Festival Cards (Auto-layout: Vertical, Gap 20px)
│       ├── Festival Card: Vaisakhi
│       │   ├── ADMIN_SIKH_FESTIVAL_VAISAKHI_NAME
│       │   ├── ADMIN_SIKH_FESTIVAL_VAISAKHI_DATE
│       │   ├── ADMIN_SIKH_FESTIVAL_VAISAKHI_DESCRIPTION
│       │   ├── ADMIN_SIKH_FESTIVAL_VAISAKHI_LOCATIONS
│       │   ├── ADMIN_SIKH_FESTIVAL_VAISAKHI_RITUALS
│       │   └── ADMIN_SIKH_FESTIVAL_VAISAKHI_CROWD_LEVEL
│       ├── Festival Card: Gurpurab
│       └── [... other festivals]
└── 🔍 Filter Sidebar
    ├── Filter by Date Range
    ├── Filter by Location
    └── Filter by Crowd Level
```

---

### **Frame 1.5: Ritual Procedures**

**Dimensions**: 1440×5000

**Layer Structure**:
```
📐 Sikh Ritual Procedures Library
├── 🎨 Header
│   ├── ADMIN_SIKH_RITUALS_TITLE
│   └── Search Bar
├── 🗂️ Ritual Categories (Auto-layout: Horizontal, Gap 12px)
│   ├── Filter Chip: Prayer
│   ├── Filter Chip: Service
│   ├── Filter Chip: Kirtan
│   └── Filter Chip: Paath
├── 📚 Ritual Cards (Auto-layout: Vertical, Gap 32px)
│   ├── Ritual Card: Morning Prayer
│   │   ├── ADMIN_SIKH_RITUAL_MORNING_NAME
│   │   ├── ADMIN_SIKH_RITUAL_MORNING_TYPE
│   │   ├── Step-by-step Guide (Auto-layout: Vertical)
│   │   │   ├── ADMIN_SIKH_RITUAL_MORNING_STEP1
│   │   │   ├── ADMIN_SIKH_RITUAL_MORNING_STEP2
│   │   │   └── [... more steps]
│   │   ├── Timing Requirements
│   │   │   ├── ADMIN_SIKH_RITUAL_MORNING_TIME
│   │   │   ├── ADMIN_SIKH_RITUAL_MORNING_DURATION
│   │   │   └── ADMIN_SIKH_RITUAL_MORNING_FREQUENCY
│   │   ├── Materials Needed
│   │   │   └── ADMIN_SIKH_RITUAL_MORNING_MATERIALS
│   │   ├── Dress Code
│   │   │   ├── ADMIN_SIKH_RITUAL_MORNING_DRESS_REQUIRED
│   │   │   ├── ADMIN_SIKH_RITUAL_MORNING_DRESS_PROHIBITED
│   │   │   └── ADMIN_SIKH_RITUAL_MORNING_DRESS_RECOMMENDED
│   │   └── Accessibility Info
│   │       ├── ADMIN_SIKH_RITUAL_MORNING_SENIOR_FRIENDLY
│   │       ├── ADMIN_SIKH_RITUAL_MORNING_WHEELCHAIR
│   │       └── ADMIN_SIKH_RITUAL_MORNING_PHYSICAL_DEMAND
│   ├── Ritual Card: Langar Service
│   └── [... other rituals]
└── 📖 Sacred Text References
    └── ADMIN_SIKH_RITUALS_SACRED_TEXT_CONTEXT
```

---

### **Frame 1.6: Planning Flow (5 Screens)**

**Screen 1: Select Destinations**
**Dimensions**: 1440×2400

**Layer Structure**:
```
📐 Sikh Planning - Step 1/5
├── 🎨 Header with Progress (20%)
│   ├── ADMIN_SIKH_PLANNER_TITLE
│   └── Progress Bar (1 of 5)
├── 🔍 Search & Filter
│   ├── Search: ADMIN_SIKH_PLANNER_SEARCH_PLACEHOLDER
│   └── Filters: Type, Region, Duration
├── 🗺️ Interactive Map (Placeholder)
│   └── ADMIN_SIKH_PLANNER_MAP
├── 📍 Destination Selection List
│   └── Selectable Cards (Auto-layout: Vertical)
│       ├── ADMIN_SIKH_PLANNER_DEST1 (Checkbox)
│       ├── ADMIN_SIKH_PLANNER_DEST2 (Checkbox)
│       └── [... more destinations]
├── 📊 Summary Sidebar
│   ├── Selected: X destinations
│   ├── Estimated Duration: Y days
│   └── Estimated Budget: ₹Z
└── 🎯 Navigation
    ├── Button/Back
    └── Button/Next Step →
```

**Screen 2: Travel Details**
**Dimensions**: 1440×2000

**Layer Structure**:
```
📐 Sikh Planning - Step 2/5
├── 🎨 Header with Progress (40%)
├── 📅 Date Selection
│   ├── ADMIN_SIKH_PLANNER_ARRIVAL_LABEL
│   ├── Date Picker: Arrival
│   ├── ADMIN_SIKH_PLANNER_DEPARTURE_LABEL
│   └── Date Picker: Departure
├── 👥 Group Composition
│   ├── ADMIN_SIKH_PLANNER_GROUP_LABEL
│   ├── Counter: Adults
│   ├── Counter: Seniors (60+)
│   └── Counter: Children
├── 🏥 Special Requests (Checkboxes)
│   ├── ADMIN_SIKH_PLANNER_SPECIAL_SENIOR_CARE
│   ├── ADMIN_SIKH_PLANNER_SPECIAL_MEDICAL
│   ├── ADMIN_SIKH_PLANNER_SPECIAL_DIETARY
│   ├── ADMIN_SIKH_PLANNER_SPECIAL_RITUAL_GUIDE
│   └── ADMIN_SIKH_PLANNER_SPECIAL_WHEELCHAIR
└── 🎯 Navigation
    ├── Button/← Back
    └── Button/Next Step →
```

**Screen 3: Spiritual Preferences**
**Dimensions**: 1440×2200

**Layer Structure**:
```
📐 Sikh Planning - Step 3/5
├── 🎨 Header with Progress (60%)
├── 🙏 Ritual Selection
│   ├── ADMIN_SIKH_PLANNER_RITUALS_LABEL
│   └── Ritual Chips (Auto-layout: Wrap)
│       ├── ADMIN_SIKH_PLANNER_RITUAL_MORNING_PRAYER
│       ├── ADMIN_SIKH_PLANNER_RITUAL_KIRTAN
│       ├── ADMIN_SIKH_PLANNER_RITUAL_LANGAR
│       └── [... more rituals]
├── 📖 Sacred Text Focus
│   ├── ADMIN_SIKH_PLANNER_TEXTS_LABEL
│   └── Text Checkboxes
│       ├── ADMIN_SIKH_PLANNER_TEXT_PRIMARY
│       └── ADMIN_SIKH_PLANNER_TEXT_SECONDARY
├── 🎉 Festival Participation
│   ├── ADMIN_SIKH_PLANNER_FESTIVALS_LABEL
│   └── Festival Checkboxes (if dates overlap)
│       ├── ADMIN_SIKH_PLANNER_FESTIVAL_OPTION1
│       └── ADMIN_SIKH_PLANNER_FESTIVAL_OPTION2
└── 🎯 Navigation
    ├── Button/← Back
    └── Button/Next Step →
```

**Screen 4: Package Selection**
**Dimensions**: 1440×2500

**Layer Structure**:
```
📐 Sikh Planning - Step 4/5
├── 🎨 Header with Progress (80%)
├── 📦 Package Options (Auto-layout: Horizontal, Gap 24px)
│   ├── Package Card: Basic
│   │   ├── ADMIN_SIKH_PLANNER_PACKAGE_BASIC_NAME
│   │   ├── ADMIN_SIKH_PLANNER_PACKAGE_BASIC_PRICE
│   │   ├── ADMIN_SIKH_PLANNER_PACKAGE_BASIC_FEATURES
│   │   └── Radio Button
│   ├── Package Card: Standard
│   └── Package Card: Premium
├── ⚙️ Customize Option
│   ├── ADMIN_SIKH_PLANNER_CUSTOMIZE_LABEL
│   ├── Budget Slider
│   │   ├── Min: ADMIN_SIKH_PLANNER_BUDGET_MIN
│   │   └── Max: ADMIN_SIKH_PLANNER_BUDGET_MAX
│   └── Custom Checkboxes
│       ├── ADMIN_SIKH_PLANNER_CUSTOM_TRANSPORT
│       ├── ADMIN_SIKH_PLANNER_CUSTOM_ACCOMMODATION
│       └── ADMIN_SIKH_PLANNER_CUSTOM_GUIDE
└── 🎯 Navigation
    ├── Button/← Back
    └── Button/Review Plan →
```

**Screen 5: Review & Submit**
**Dimensions**: 1440×3500

**Layer Structure**:
```
📐 Sikh Planning - Step 5/5
├── 🎨 Header with Progress (100%)
├── 📋 Plan Summary (Auto-layout: Vertical, Gap 32px)
│   ├── Destinations Summary
│   │   ├── ADMIN_SIKH_PLANNER_SUMMARY_DESTINATIONS_TITLE
│   │   └── List of selected destinations
│   ├── Travel Details Summary
│   │   ├── ADMIN_SIKH_PLANNER_SUMMARY_DATES
│   │   └── ADMIN_SIKH_PLANNER_SUMMARY_GROUP
│   ├── Spiritual Preferences Summary
│   │   ├── ADMIN_SIKH_PLANNER_SUMMARY_RITUALS
│   │   └── ADMIN_SIKH_PLANNER_SUMMARY_TEXTS
│   └── Package Summary
│       ├── ADMIN_SIKH_PLANNER_SUMMARY_PACKAGE
│       └── ADMIN_SIKH_PLANNER_SUMMARY_BUDGET
├── ✨ Grok AI Promise Card
│   ├── ADMIN_SIKH_PLANNER_GROK_PROMISE_TITLE
│   ├── ADMIN_SIKH_PLANNER_GROK_PROMISE_TEXT
│   └── What You'll Receive (List)
│       ├── ADMIN_SIKH_PLANNER_GROK_RECEIVE_ITINERARY
│       ├── ADMIN_SIKH_PLANNER_GROK_RECEIVE_SCHEDULE
│       └── [... more items]
└── 🎯 Submit CTA
    ├── Button/← Edit Plan
    └── Button/Submit to Grok AI ✨
```

---

## 📄 **COMMON SCREENS**

### **Frame CS-02: Religion Overview Dashboard (Template)**

**Dimensions**: 1440×3200

**Component Structure** (Reusable across all religions):

```
📦 Component: Religion Overview Dashboard
├── Variants (10):
│   ├── Sikh
│   ├── Christian
│   ├── Muslim
│   ├── Buddhist
│   ├── Jain
│   ├── Jewish
│   ├── Hindu
│   ├── Bahá'í
│   ├── Indigenous
│   └── Parsi
├── Properties:
│   ├── Religion Name (Text)
│   ├── Religion Emoji (Text)
│   ├── Primary Color (Color)
│   └── Gradient (Effect)
└── Nested Components:
    ├── Circuit Card (Variant: Religion-specific)
    ├── Festival Card (Variant: Religion-specific)
    └── Grok Insight Card (Variant: Religion-specific)
```

**Layer Naming Convention**:
```
Component Instance: Religion Overview Dashboard (Variant: Sikh)
├── ADMIN_{RELIGION}_HEADER_TITLE
├── ADMIN_{RELIGION}_HEADER_DESCRIPTION
├── Filters Section
│   ├── ADMIN_{RELIGION}_FILTERS_TEXT_PLACEHOLDER
│   └── ADMIN_{RELIGION}_FILTERS_RITUAL_OPTIONS
├── Circuits Section
│   ├── ADMIN_{RELIGION}_CIRCUIT1_*
│   ├── ADMIN_{RELIGION}_CIRCUIT2_*
│   └── ADMIN_{RELIGION}_CIRCUIT3_*
└── [... continues]
```

---

### **Frame CS-03: Destination Detail View (6 Tabs)**

**Dimensions**: 1440×4500

**Tab Component Structure**:

```
📦 Component: Tab Content Area
├── Variants (6):
│   ├── Overview
│   ├── Rituals
│   ├── Festivals
│   ├── Timings
│   ├── Sacred Texts
│   └── Map
└── Layer Structure per variant:
    ├── Overview Variant:
    │   ├── ADMIN_{RELIGION}_SITE_SIGNIFICANCE
    │   ├── ADMIN_{RELIGION}_SITE_HISTORY
    │   └── ADMIN_{RELIGION}_SITE_FACILITIES
    ├── Rituals Variant:
    │   ├── ADMIN_{RELIGION}_SITE_RITUALS_LIST
    │   ├── ADMIN_{RELIGION}_SITE_DRESS_CODE
    │   └── ADMIN_{RELIGION}_SITE_PROCEDURES
    └── [... other variants]
```

---

### **Frame CS-04: Pilgrimage Planner (Multi-step)**

**Component**: 5-Step Wizard

**Structure**:
```
📦 Component Set: Pilgrimage Planner Steps
├── Step 1: Destinations (Base Component)
│   └── Religion Variant Property
├── Step 2: Travel Details (Base Component)
│   └── Religion Variant Property
├── Step 3: Spiritual Preferences (Base Component)
│   └── Religion Variant Property
├── Step 4: Package Selection (Base Component)
│   └── Religion Variant Property
└── Step 5: Review & Submit (Base Component)
    └── Religion Variant Property
```

Each step has religion-specific text placeholders following naming convention:
`ADMIN_{RELIGION}_PLANNER_STEP{N}_{FIELD}`

---

### **Frame CS-05: Interest Confirmation**

**Dimensions**: 1440×3000

**Layer Structure**:
```
📐 Interest Confirmation
├── 🎉 Confetti Animation Layer (Lottie/GIF)
├── ✅ Success Header
│   ├── Success Icon (96×96)
│   ├── ADMIN_CONFIRMATION_TITLE
│   ├── ADMIN_CONFIRMATION_DESCRIPTION
│   └── Reference Badge: ADMIN_CONFIRMATION_REFERENCE
├── 📊 Summary Grid (Auto-layout: 2×2)
│   ├── Destinations Card
│   │   └── ADMIN_CONFIRMATION_DESTINATIONS
│   ├── Travel Period Card
│   │   └── ADMIN_CONFIRMATION_DATES
│   ├── Group Size Card
│   │   └── ADMIN_CONFIRMATION_GROUP
│   └── Special Requests Card
│       └── ADMIN_CONFIRMATION_REQUESTS
├── ✨ Grok AI Processing Animation
│   ├── ADMIN_CONFIRMATION_GROK_TITLE
│   ├── Processing Stage Carousel (5 stages)
│   │   ├── ADMIN_CONFIRMATION_GROK_STAGE1
│   │   ├── ADMIN_CONFIRMATION_GROK_STAGE2
│   │   └── [... more stages]
│   ├── Progress Bar (5 segments)
│   └── Estimated Time Badge
│       └── ADMIN_CONFIRMATION_GROK_ESTIMATED_TIME
├── 📋 What You'll Receive (Auto-layout: Vertical)
│   ├── ADMIN_CONFIRMATION_RECEIVE_TITLE
│   └── Promise Cards (5)
│       ├── ADMIN_CONFIRMATION_RECEIVE_ITINERARY
│       ├── ADMIN_CONFIRMATION_RECEIVE_SCHEDULE
│       ├── ADMIN_CONFIRMATION_RECEIVE_FACILITIES
│       ├── ADMIN_CONFIRMATION_RECEIVE_FESTIVALS
│       └── ADMIN_CONFIRMATION_RECEIVE_BUDGET
├── 🔔 Notification Preferences (Auto-layout: Horizontal)
│   ├── Email Button
│   ├── SMS Button
│   └── App Notification Button
├── ⚡ Quick Actions (Auto-layout: Horizontal)
│   ├── Download Button
│   ├── Share Button
│   └── Email Button
└── 🎯 Navigation (Auto-layout: Horizontal)
    ├── Button/Return to Dashboard
    └── Button/Explore Other Religions →
```

**Animation Specifications**:
- Confetti: 3-second loop, opacity fade out
- Success Icon: Spring animation (scale 0→1)
- Processing stages: Carousel with 3-second intervals
- Progress bar: Fills left-to-right per stage

---

### **Frame CS-06: Grok AI Planning Dashboard**

**Dimensions**: 1440×8000 (very long scroll)

**Layer Structure**:
```
📐 Grok AI Planning Dashboard
├── 🎨 Header with Religion Gradient
│   ├── ADMIN_GROK_PLAN_TITLE
│   ├── Religion Icon & Name
│   ├── Plan Metadata
│   │   ├── ADMIN_GROK_PLAN_DATES
│   │   ├── ADMIN_GROK_PLAN_DURATION
│   │   └── ADMIN_GROK_PLAN_DESTINATIONS
│   └── Quick Actions
│       ├── Download PDF
│       ├── Share
│       └── Print
├── 📅 Day-by-Day Itinerary (Auto-layout: Vertical, Gap 24px)
│   ├── Day 1 Expandable Card
│   │   ├── Day Header (Clickable)
│   │   │   ├── ADMIN_GROK_DAY1_DATE
│   │   │   ├── ADMIN_GROK_DAY1_DESTINATION
│   │   │   └── ADMIN_GROK_DAY1_CROWD_LEVEL
│   │   └── Day Details (Expandable)
│   │       ├── Morning Activities
│   │       │   ├── ADMIN_GROK_DAY1_MORNING_ACT1
│   │       │   └── [... more activities]
│   │       ├── Afternoon Activities
│   │       ├── Evening Activities
│   │       └── Special Notes
│   │           └── ADMIN_GROK_DAY1_NOTES
│   ├── Day 2 Expandable Card
│   └── [... more days]
├── ⏰ Ritual Alignment Chart
│   ├── ADMIN_GROK_RITUAL_CHART_TITLE
│   └── Ritual Cards (Auto-layout: Vertical)
│       ├── Ritual 1
│       │   ├── ADMIN_GROK_RITUAL1_NAME
│       │   ├── ADMIN_GROK_RITUAL1_OPTIMAL_TIME
│       │   ├── ADMIN_GROK_RITUAL1_DURATION
│       │   └── ADMIN_GROK_RITUAL1_CROWD_PREDICTION
│       └── [... more rituals]
├── 🏥 Facilities & Services (Auto-layout: Grid 2-col)
│   ├── ADMIN_GROK_FACILITIES_TITLE
│   └── Facility Cards
│       ├── Senior Care
│       │   ├── ADMIN_GROK_FACILITY_SENIOR_NAME
│       │   ├── ADMIN_GROK_FACILITY_SENIOR_LOCATION
│       │   └── ADMIN_GROK_FACILITY_SENIOR_DAYS
│       ├── Medical Support
│       ├── Dietary Venues
│       └── Prayer Spaces
├── 📖 Sacred Text References
│   ├── ADMIN_GROK_SACRED_TEXTS_TITLE
│   └── Reading Cards (Auto-layout: Vertical)
│       ├── Day 1 Reading
│       │   ├── ADMIN_GROK_TEXT_DAY1_NAME
│       │   ├── ADMIN_GROK_TEXT_DAY1_PASSAGE
│       │   └── ADMIN_GROK_TEXT_DAY1_RELEVANCE
│       └── [... more readings]
├── 💰 Budget Breakdown
│   ├── ADMIN_GROK_BUDGET_TITLE
│   └── Category Cards (Auto-layout: Vertical, Gap 16px)
│       ├── Accommodation
│       │   ├── ADMIN_GROK_BUDGET_ACCOMMODATION_TOTAL
│       │   └── Breakdown Items (Expandable)
│       ├── Transportation
│       ├── Ritual Materials
│       ├── Guide Services
│       └── Special Care
│   └── Total Summary Card
│       ├── ADMIN_GROK_BUDGET_TOTAL
│       └── ADMIN_GROK_BUDGET_PER_PERSON
└── 🎯 Action Buttons (Auto-layout: Horizontal)
    ├── Button/Request Changes
    └── Button/Approve Plan & Proceed ✅
```

**Expandable Component Specs**:
```
Component: Day Itinerary Card
├── States:
│   ├── Collapsed (Header only)
│   └── Expanded (Header + Details)
├── Auto-layout:
│   └── Vertical, Gap 0px
└── Transition: Ease-out 300ms
```

---

### **Frame CS-07: Admin Content Management**

**Dimensions**: 1920×1080 (full screen)

**Layer Structure**:
```
📐 Admin Dashboard
├── 🎨 Top Navigation Bar
│   ├── Logo & Title
│   ├── Search Bar
│   │   └── ADMIN_DASHBOARD_SEARCH_PLACEHOLDER
│   └── Actions
│       ├── Export All
│       └── Import
├── 📂 Left Sidebar: Religion Selector
│   ├── Religion Cards (Auto-layout: Vertical)
│   │   ├── Sikh Card (Selectable)
│   │   ├── Christian Card
│   │   └── [... all 10 religions]
│   └── Stats Panel
│       ├── Total Religions: 10
│       ├── Total Sites: 142
│       └── Total Rituals: 87
├── 📑 Section Navigation (Sidebar 2)
│   ├── Overview
│   ├── Sacred Texts
│   ├── Festivals
│   ├── Rituals
│   ├── Sacred Sites
│   ├── Filters
│   ├── Grok AI
│   └── Settings
└── 📄 Content Management Panel
    ├── Section Header
    │   ├── Section Title
    │   └── Add New Button
    └── Content List/Grid
        ├── Item Card 1 (with Edit/Delete)
        ├── Item Card 2
        └── [... more items]
```

**Admin Editable Field Component**:
```
Component: Admin Editable Field
├── States:
│   ├── Default (Dashed border #CCC)
│   ├── Hover (Border purple, Edit icon visible)
│   └── Editing (Modal open)
├── Styling:
│   ├── Border: 1px dashed #CCCCCC
│   ├── Background: #F9FAFB
│   ├── Padding: 8px
│   └── Border Radius: 4px
└── Tooltip: "Edit {fieldName} in admin panel"
```

---

## 📦 **COMPONENTS LIBRARY**

### **CL-01: Religion Icons & Emojis**

```
Component Set: Religion Icons
├── Sikh: ☬ (60×60)
├── Christian: ✝️ (60×60)
├── Muslim: ☪️ (60×60)
├── Buddhist: ☸️ (60×60)
├── Jain: 🕉️ (60×60)
├── Jewish: ✡️ (60×60)
├── Hindu: 🕉️ (60×60)
├── Bahá'í: ⭐ (60×60)
├── Indigenous: 🌍 (60×60)
└── Parsi: 🔥 (60×60)
```

**Variants**: 3 sizes (Small 24×24, Medium 48×48, Large 60×60)

---

### **CL-02: Sacred Circuit Cards**

```
Component: Sacred Circuit Card
├── Variants:
│   ├── Default (3-destination preview)
│   ├── Expanded (Full details)
│   └── Compact (List view)
├── Properties:
│   ├── Circuit Name (Text)
│   ├── Duration (Text)
│   ├── Destinations Count (Number)
│   ├── Difficulty (Low/Medium/High)
│   └── Religion Color (Color)
├── Layer Structure:
│   ├── Card Background (Border-radius 24px)
│   ├── Header Image (Height 200px)
│   ├── Content Area (Padding 24px)
│   │   ├── ADMIN_{RELIGION}_CIRCUIT_{ID}_NAME
│   │   ├── ADMIN_{RELIGION}_CIRCUIT_{ID}_DESCRIPTION
│   │   ├── Stats Row
│   │   │   ├── Duration Badge
│   │   │   ├── Destinations Badge
│   │   │   └── Difficulty Badge
│   │   └── Highlights (Expandable)
│   │       └── ADMIN_{RELIGION}_CIRCUIT_{ID}_HIGHLIGHTS
│   └── Actions Footer
│       ├── Save Icon Button
│       └── View Details Button
└── Auto-layout: Vertical, Gap 16px, Padding 24px
```

**States**: Default, Hover, Pressed, Saved

---

### **CL-03: Festival Calendar Widgets**

```
Component Set: Festival Card
├── Variants:
│   ├── Upcoming (with countdown)
│   ├── Current (highlighted)
│   └── Past (muted)
├── Properties:
│   ├── Festival Name (Text)
│   ├── Date (Date)
│   ├── Countdown (Dynamic text)
│   └── Crowd Level (Low/Medium/High/Extreme)
├── Layer Structure:
│   ├── Card Background (Gradient per religion)
│   ├── Icon (Religion-specific)
│   ├── Festival Name
│   │   └── ADMIN_{RELIGION}_FESTIVAL_{ID}_NAME
│   ├── Date Display
│   │   └── ADMIN_{RELIGION}_FESTIVAL_{ID}_DATE
│   ├── Countdown Timer (if upcoming)
│   │   └── "X days away"
│   ├── Location(s)
│   │   └── ADMIN_{RELIGION}_FESTIVAL_{ID}_LOCATIONS
│   └── Crowd Level Badge
│       └── ADMIN_{RELIGION}_FESTIVAL_{ID}_CROWD_LEVEL
└── Auto-layout: Vertical, Gap 12px, Padding 20px
```

---

### **CL-04: Ritual Procedure Cards**

```
Component: Ritual Procedure Card
├── Variants:
│   ├── Collapsed (Title + Type only)
│   └── Expanded (Full step-by-step)
├── Properties:
│   ├── Ritual Name (Text)
│   ├── Type (Prayer/Meditation/Offering/etc.)
│   ├── Duration (Text)
│   ├── Physical Demand (Low/Medium/High)
│   └── Steps Count (Number)
├── Layer Structure (Expanded):
│   ├── Header
│   │   ├── ADMIN_{RELIGION}_RITUAL_{ID}_NAME
│   │   ├── Type Badge
│   │   └── Duration Badge
│   ├── Step-by-step Guide (Auto-layout: Vertical)
│   │   ├── Step 1
│   │   │   ├── Step Number Badge
│   │   │   ├── ADMIN_{RELIGION}_RITUAL_{ID}_STEP1_INSTRUCTION
│   │   │   ├── ADMIN_{RELIGION}_RITUAL_{ID}_STEP1_DURATION
│   │   │   └── ADMIN_{RELIGION}_RITUAL_{ID}_STEP1_MATERIALS
│   │   └── [... more steps]
│   ├── Timing Requirements Section
│   │   ├── ADMIN_{RELIGION}_RITUAL_{ID}_PREFERRED_TIME
│   │   ├── ADMIN_{RELIGION}_RITUAL_{ID}_DURATION
│   │   └── ADMIN_{RELIGION}_RITUAL_{ID}_FREQUENCY
│   ├── Dress Code Section
│   │   ├── Required: ADMIN_{RELIGION}_RITUAL_{ID}_DRESS_REQUIRED
│   │   ├── Prohibited: ADMIN_{RELIGION}_RITUAL_{ID}_DRESS_PROHIBITED
│   │   └── Recommended: ADMIN_{RELIGION}_RITUAL_{ID}_DRESS_RECOMMENDED
│   └── Accessibility Section
│       ├── Senior Friendly: Icon (Y/N)
│       ├── Wheelchair Accessible: Icon (Y/N)
│       ├── Physical Demand Badge
│       └── Alternatives: ADMIN_{RELIGION}_RITUAL_{ID}_ALTERNATIVES
└── Auto-layout: Vertical, Gap 20px, Padding 24px
```

---

### **CL-05: Sacred Text Display**

```
Component: Sacred Text Card
├── Variants:
│   ├── Compact (Title only)
│   ├── Medium (Title + Passage)
│   └── Full (Title + Passage + Context)
├── Layer Structure (Full):
│   ├── Header
│   │   ├── Text Name: ADMIN_{RELIGION}_TEXT_{ID}_NAME
│   │   ├── Language Badge: ADMIN_{RELIGION}_TEXT_{ID}_LANGUAGE
│   │   └── Chapter/Verse Info
│   ├── Passage Display
│   │   ├── Opening Quote Mark
│   │   ├── Passage Text (Georgia Italic)
│   │   │   └── ADMIN_{RELIGION}_TEXT_{ID}_PASSAGE
│   │   └── Closing Quote Mark
│   ├── Context Section
│   │   ├── "Context" Label
│   │   └── ADMIN_{RELIGION}_TEXT_{ID}_CONTEXT
│   └── Ritual Use Section
│       ├── "Used in" Label
│       └── ADMIN_{RELIGION}_TEXT_{ID}_RITUAL_USE
└── Auto-layout: Vertical, Gap 16px, Padding 20px
```

**Typography**:
- Passage Text: Georgia Italic, 18px, Line 160%, Color #374151
- Context: Inter Regular, 14px, Line 150%, Color #6B7280

---

### **CL-06: Admin Editable Templates**

```
Component Set: Admin Editable Field
├── Variants:
│   ├── Text Input (Single line)
│   ├── Textarea (Multi-line)
│   ├── Number Input
│   ├── Date Picker
│   ├── Dropdown Select
│   ├── Checkbox
│   └── Radio Group
├── States (all variants):
│   ├── Default (Dashed border)
│   ├── Hover (Purple border + Edit icon)
│   ├── Focus (Solid purple border)
│   └── Editing (Modal overlay)
├── Styling:
│   ├── Border: 1px dashed #CCCCCC
│   ├── Hover Border: 1px dashed #9333EA
│   ├── Background: #F9FAFB
│   ├── Hover Background: #F3E8FF
│   ├── Padding: 8px 12px
│   ├── Border Radius: 6px
│   └── Font: Inter Regular, 14px
├── Tooltip Component:
│   ├── Text: "Edit {fieldName} in admin panel"
│   ├── Background: #111827
│   ├── Text Color: #FFFFFF
│   └── Position: Bottom center
└── Edit Icon (on hover):
    ├── Icon: ✏️ or Edit icon from library
    ├── Position: Top-right -8px, -8px
    ├── Background: #9333EA
    └── Size: 20×20
```

**Layer Naming**:
- `ADMIN_{RELIGION}_{SECTION}_{FIELD}`
- Example: `ADMIN_SIKH_FESTIVAL_VAISAKHI_DATE`

---

### **CL-07: Filter Chips**

```
Component: Filter Chip
├── Variants:
│   ├── Default (Unselected)
│   ├── Selected
│   └── Disabled
├── States:
│   ├── Default
│   ├── Hover
│   └── Pressed
├── Properties:
│   ├── Label (Text)
│   ├── Icon (Optional)
│   └── Count (Optional number)
├── Layer Structure:
│   ├── Background (Border-radius 99px)
│   ├── Icon (if present) - 16×16
│   ├── Label Text
│   └── Count Badge (if present)
└── Auto-layout: Horizontal, Gap 6px, Padding 8px 16px
```

**Styling**:
- Default: Border #D1D5DB, Background #FFFFFF, Text #374151
- Selected: Border Religion Color, Background Religion Color 10%, Text Religion Color
- Hover: Border Religion Color 50%

---

### **CL-08: Date Pickers**

```
Component: Date Picker
├── Variants:
│   ├── Single Date
│   ├── Date Range
│   └── Multi-date
├── States:
│   ├── Closed (Input field only)
│   ├── Open (Calendar overlay)
│   └── Selected
├── Layer Structure:
│   ├── Input Field
│   │   ├── Icon (Calendar) - 20×20
│   │   ├── Placeholder/Selected Date Text
│   │   └── Clear Button (if date selected)
│   └── Calendar Dropdown (when open)
│       ├── Month/Year Navigation
│       ├── Calendar Grid (7×6)
│       │   ├── Day cells
│       │   ├── Selected state
│       │   └── Today indicator
│       └── Footer Actions
│           ├── Clear
│           └── Apply
└── Auto-layout: Vertical, Gap 0px
```

**Calendar Styling**:
- Selected Date: Religion gradient background, White text
- Today: Border 2px religion color
- Hover: Background #F3F4F6

---

### **CL-09: Form Inputs**

```
Component Set: Form Inputs
├── Text Input
│   ├── States: Default, Focus, Error, Disabled
│   ├── Label (optional)
│   ├── Input Field
│   ├── Helper Text (optional)
│   └── Error Message (if error state)
├── Textarea
│   ├── Same states as Text Input
│   └── Resizable height
├── Number Input
│   ├── Input Field
│   ├── +/- Buttons (Stepper)
│   └── Min/Max constraints
├── Dropdown Select
│   ├── Selected Value Display
│   ├── Dropdown Icon
│   └── Options List (overlay)
├── Checkbox
│   ├── States: Unchecked, Checked, Indeterminate, Disabled
│   ├── Checkbox Icon
│   └── Label Text
└── Radio Button
    ├── States: Unselected, Selected, Disabled
    ├── Radio Icon (circle)
    └── Label Text
```

**Styling**:
- Border: 1px solid #D1D5DB
- Focus Border: 2px solid Religion Color
- Error Border: 2px solid #EF4444
- Padding: 12px 16px
- Border Radius: 8px
- Font: Inter Regular, 14px

---

### **CL-10: Buttons & CTAs**

```
Component Set: Buttons
├── Variants:
│   ├── Primary (Religion gradient)
│   ├── Secondary (White + Religion border)
│   ├── Ghost (Transparent)
│   ├── Danger (Red)
│   └── Icon Only
├── Sizes:
│   ├── Small (h: 32px, px: 12px, text: 12px)
│   ├── Medium (h: 40px, px: 16px, text: 14px)
│   ├── Large (h: 48px, px: 20px, text: 16px)
│   └── XLarge (h: 56px, px: 24px, text: 18px)
├── States:
│   ├── Default
│   ├── Hover
│   ├── Pressed
│   ├── Loading (Spinner)
│   └── Disabled
├── Layer Structure:
│   ├── Background (Auto-layout)
│   ├── Icon (optional, 20×20)
│   ├── Label Text
│   └── Spinner (if loading state)
└── Auto-layout: Horizontal, Gap 8px, Padding varies by size
```

**Primary Button Styling** (per religion):
- Sikh: Gradient Blue 900 → Orange 500
- Christian: Gradient Purple 600 → Yellow 500
- Muslim: Gradient Green 600 → Teal 500
- [... etc for all religions]

**Hover**: Shadow-xl, brightness +10%
**Pressed**: Shadow-md, brightness -10%

---

### **CL-11: Badges & Tags**

```
Component Set: Badges
├── Variants:
│   ├── Status (Success, Warning, Error, Info)
│   ├── Count (Number display)
│   ├── Religion (Religion-colored)
│   └── Custom
├── Sizes:
│   ├── Small (px: 6px 10px, text: 11px)
│   ├── Medium (px: 8px 12px, text: 12px)
│   └── Large (px: 10px 16px, text: 14px)
├── Layer Structure:
│   ├── Background (Border-radius 99px or 6px)
│   ├── Icon (optional, 12×12 or 14×14)
│   └── Label Text
└── Auto-layout: Horizontal, Gap 4px, Padding varies
```

**Status Colors**:
- Success: bg-green-100, text-green-800, border-green-300
- Warning: bg-yellow-100, text-yellow-800, border-yellow-300
- Error: bg-red-100, text-red-800, border-red-300
- Info: bg-blue-100, text-blue-800, border-blue-300

---

### **CL-12: Navigation Elements**

```
Component Set: Navigation
├── Top Navigation Bar
│   ├── Logo
│   ├── Menu Items (Auto-layout: Horizontal)
│   ├── Search Bar
│   └── User Profile Menu
├── Breadcrumbs
│   ├── Home Icon
│   ├── Separator (/)
│   ├── Level 1
│   └── [... more levels]
├── Tabs
│   ├── Variant: Underline, Pills, Boxed
│   ├── States: Default, Hover, Active
│   └── Auto-layout: Horizontal, Gap 0px
└── Pagination
    ├── Previous Button
    ├── Page Numbers (1, 2, 3, ...)
    └── Next Button
```

**Tab Styling**:
- Active: Border-bottom 3px religion color, Text religion color
- Hover: Background #F3F4F6
- Default: Text #6B7280

---

### **CL-13: Modal & Overlays**

```
Component: Modal
├── Variants:
│   ├── Small (w: 400px)
│   ├── Medium (w: 600px)
│   ├── Large (w: 800px)
│   └── Full Screen
├── Layer Structure:
│   ├── Backdrop (Black 50% opacity, blur)
│   ├── Modal Container
│   │   ├── Header
│   │   │   ├── Title
│   │   │   └── Close Button (X)
│   │   ├── Content Area (Scrollable)
│   │   │   └── [Dynamic content]
│   │   └── Footer (Optional)
│   │       ├── Cancel Button
│   │       └── Confirm Button
│   └── Auto-layout: Vertical, Gap 0px
└── Effects:
    ├── Shadow: 2xl
    └─ Border Radius: 24px
```

**Animation**:
- Entry: Scale 0.95 → 1, Opacity 0 → 1, 300ms ease-out
- Exit: Scale 1 → 0.95, Opacity 1 → 0, 200ms ease-in

---

### **CL-14: Grok AI Elements**

```
Component Set: Grok AI Components
├── Grok Insight Card
│   ├── Icon (Sparkles, rotating)
│   ├── Insight Title
│   ├── Insight Text
│   └── Gradient Border (Purple→Blue)
├── Processing Animation
│   ├── Spinner/Loader
│   ├── Progress Bar (5 segments)
│   ├── Stage Text (Cycling)
│   └── Estimated Time Display
├── AI Promise Card
│   ├── "Generated by Grok AI" Badge
│   ├── Promise List (5 items)
│   └── Timeline Display
└── Optimization Badge
    ├── "AI Optimized" Icon
    └── Tooltip explaining optimization
```

**Grok AI Color Scheme**:
- Primary: Purple 600 (#9333EA)
- Secondary: Indigo 600 (#4F46E5)
- Accent: Blue 500 (#3B82F6)
- Gradient: Purple → Indigo → Blue

---

### **CL-15: Animations & Micro-interactions**

```
Animation Library:
├── Confetti Burst (3 seconds)
│   └── 30 particles, random colors
├── Success Checkmark
│   └── Draw animation, 500ms
├── Loading Spinner (Continuous)
│   └── Rotation 360°, 1s linear infinite
├── Skeleton Loader
│   └── Shimmer effect, 1.5s ease-in-out infinite
├── Slide In (from bottom)
│   └── Y: 20 → 0, Opacity: 0 → 1, 300ms ease-out
├── Fade In
│   └── Opacity: 0 → 1, 400ms ease-in
├── Scale In
│   └── Scale: 0.95 → 1, 300ms ease-out
└── Hover Lift
    └── Y: 0 → -4, Shadow: md → lg, 200ms ease
```

**Interaction States**:
- Hover: 200ms ease-out transition
- Press: 100ms ease-in transition
- Release: 200ms ease-out transition

---

## 🎨 **DESIGN SYSTEM STYLES**

### **DS-01: Color Styles (All Religions)**

**Create Color Styles in Figma**:

```
Color Styles Structure:
├── Sikh/
│   ├── Primary
│   ├── Secondary
│   ├── Gradient Start
│   ├── Gradient End
│   ├── Text Light
│   └── Text Dark
├── Christian/
│   ├── [Same structure]
└── [... all 10 religions]

UI Colors/
├── Gray/50 through Gray/900
├── Blue/50 through Blue/900
├── Green/50 through Green/900
├── Red/50 through Red/900
├── Yellow/50 through Yellow/900
└── Purple/50 through Purple/900

Semantic Colors/
├── Success
├── Warning
├── Error
└── Info
```

---

### **DS-02: Text Styles (Complete Hierarchy)**

**Create Text Styles in Figma**:

```
Text Styles:
├── Display/
│   ├── Display 1 (60px, Bold)
│   └── Display 2 (48px, Bold)
├── Heading/
│   ├── H1 (48px, Bold, -2% letter)
│   ├── H2 (36px, Bold, -1% letter)
│   ├── H3 (24px, Semibold)
│   ├── H4 (20px, Semibold)
│   ├── H5 (16px, Medium)
│   └── H6 (14px, Medium)
├── Body/
│   ├── Large (18px, Regular, 150% line)
│   ├── Medium (16px, Regular, 150% line)
│   ├── Small (14px, Regular, 150% line)
│   └── Tiny (12px, Regular, 140% line)
├── Label/
│   ├── Large (16px, Semibold)
│   ├── Medium (14px, Semibold)
│   └── Small (12px, Semibold)
└── Sacred/
    ├── Heading (Georgia, 24px, Italic)
    ├── Body (Georgia, 16px, Regular)
    └── Citation (Georgia, 14px, Italic)
```

---

### **DS-03: Effect Styles (Shadows, Glows, Blurs)**

**Create Effect Styles in Figma**:

```
Shadow Styles:
├── Shadow/sm (0 1 2 rgba(0,0,0,0.05))
├── Shadow/md (0 4 6 rgba(0,0,0,0.07))
├── Shadow/lg (0 10 15 rgba(0,0,0,0.1))
├── Shadow/xl (0 20 25 rgba(0,0,0,0.1))
└── Shadow/2xl (0 25 50 rgba(0,0,0,0.15))

Glow Styles (per religion):
├── Sikh Glow (0 0 40 rgba(249,115,22,0.3))
├── Christian Glow (0 0 40 rgba(124,58,237,0.3))
└── [... all religions]

Blur Styles:
├── Backdrop Blur/sm (4px)
├── Backdrop Blur/md (8px)
└── Backdrop Blur/lg (16px)
```

---

### **DS-04: Grid Styles (Responsive)**

**Create Layout Grid Styles in Figma**:

```
Grid/Desktop (1440px)
├── Columns: 12
├── Type: Center
├── Gutter: 24px
├── Offset: 80px
└── Color: #3B82F6 10%

Grid/Tablet (768px)
├── Columns: 8
├── Gutter: 16px
├── Offset: 40px
└── Color: #10B981 10%

Grid/Mobile (375px)
├── Columns: 4
├── Gutter: 16px
├── Offset: 20px
└── Color: #EF4444 10%
```

---

### **DS-05: Spacing Tokens**

**Use as Variables in Figma (2023+)**:

```
Spacing Variables:
├── xs: 4
├── sm: 8
├── md: 16
├── lg: 24
├── xl: 32
├── 2xl: 48
├── 3xl: 64
└── 4xl: 96
```

---

## 🔗 **PROTOTYPES**

### **PT-01: Sikh Complete Journey**

**Flow**:
```
Faith Selector
  ↓ (Click "Sikh Devotees")
Sikh Overview Dashboard
  ↓ (Click "View Details" on Circuit)
Sacred Site Detail View
  ↓ (Switch tabs: Overview → Rituals → Festivals → etc.)
[Tab navigation within Detail View]
  ↓ (Click "Plan Your Visit")
Pilgrimage Planner Step 1: Destinations
  ↓ (Click "Next Step")
Pilgrimage Planner Step 2: Travel Details
  ↓ (Click "Next Step")
Pilgrimage Planner Step 3: Spiritual Preferences
  ↓ (Click "Next Step")
Pilgrimage Planner Step 4: Package Selection
  ↓ (Click "Review Plan")
Pilgrimage Planner Step 5: Review & Submit
  ↓ (Click "Submit to Grok AI")
Interest Confirmation Screen
  ↓ (Wait 24-48 hours simulation)
Grok AI Planning Dashboard
  ↓ (Click "Approve Plan")
[Booking Confirmation - External]
```

**Prototype Settings**:
- Device: Desktop (1440×1024)
- Starting Frame: Sikh Overview Dashboard
- Flow Type: Smart Animate
- Transition: Ease Out, 300ms
- Overflow: Scroll (vertical)

---

### **PT-02: Admin Management Flow**

**Flow**:
```
Admin Login
  ↓
Admin Dashboard (Overview)
  ↓ (Select "Sikh" from sidebar)
Sikh Content Loaded
  ↓ (Click "Sacred Texts" section)
Sacred Texts Management Panel
  ↓ (Click "Add New")
Add Sacred Text Modal
  ↓ (Fill form, Click "Save")
Sacred Text Added (Success toast)
  ↓ (Click on existing text)
Edit Sacred Text Modal
  ↓ (Modify fields, Click "Save")
Text Updated (Success toast)
  ↓ (Click "Preview")
User-Facing View (Sacred Text Display)
  ↓ (Click "Back to Admin")
Admin Dashboard
```

---

## 📋 **LAYER NAMING CONVENTIONS**

### **Standard Format**:

```
Structure: {TYPE}_{RELIGION}_{SECTION}_{ELEMENT}_{STATE}

Examples:
├── ADMIN_SIKH_FESTIVAL_VAISAKHI_DATE
├── ADMIN_CHRISTIAN_RITUAL_MASS_TIMING
├── ADMIN_MUSLIM_SITE_MOSQUE_COORDINATES
├── BUTTON_PRIMARY_SIKH_DEFAULT
├── CARD_CIRCUIT_CHRISTIAN_HOVER
└── MODAL_ADD_FESTIVAL_OPEN
```

### **Type Prefixes**:

```
ADMIN: Admin-editable content
BUTTON: Interactive button
CARD: Content card
ICON: Icon element
TEXT: Text layer
IMAGE: Image placeholder
MODAL: Modal overlay
DROPDOWN: Dropdown menu
INPUT: Form input field
BADGE: Badge/tag element
SECTION: Major section container
```

### **State Suffixes**:

```
_DEFAULT: Default state
_HOVER: Hover state
_PRESSED: Pressed state
_ACTIVE: Active state
_DISABLED: Disabled state
_ERROR: Error state
_OPEN: Open state (modals, dropdowns)
_CLOSED: Closed state
```

---

## 📤 **EXPORT REQUIREMENTS**

### **Assets for Development**:

```
Export Settings:
├── Icons (SVG)
│   ├── Format: SVG
│   ├── Sizing: 24×24, 48×48
│   └── Color: Preserve or Black (for tinting)
├── Images (PNG/WebP)
│   ├── Format: PNG or WebP
│   ├── Scale: @1x, @2x, @3x
│   └── Compression: Optimized
├── Illustrations (SVG)
│   └── Format: SVG, outlined strokes
└── Component Specs (JSON)
    └── Export with Inspect panel or plugins
```

### **Handoff to Developers**:

```
Deliverables:
├── Figma Link (View access)
├── Design System Documentation
├── Component Library (Exported)
├── Asset Package (Zip)
│   ├── /icons (SVG)
│   ├── /images (PNG/WebP)
│   └── /illustrations (SVG)
├── Color Palette (JSON)
├── Typography Specs (CSS)
└── Spacing Tokens (JSON)
```

---

## ✅ **QUALITY CHECKLIST**

### **Before Handoff**:

- [ ] All frames use proper grid layout (12-col, 8-col, 4-col)
- [ ] All text uses defined text styles (no custom sizes)
- [ ] All colors use defined color styles (no hex codes)
- [ ] All shadows use effect styles
- [ ] All components have proper variants
- [ ] All admin fields follow naming: `ADMIN_{RELIGION}_{SECTION}_{FIELD}`
- [ ] All interactive elements have hover/pressed states
- [ ] All modals have open/closed variants
- [ ] All forms have error states
- [ ] All images have proper aspect ratios
- [ ] All icons are properly sized (24×24 or 48×48)
- [ ] All spacing uses tokens (4, 8, 16, 24, 32, 48, 64, 96)
- [ ] All border-radius values are consistent (4, 6, 8, 12, 16, 24)
- [ ] All religion-specific content uses correct color scheme
- [ ] Prototypes flow correctly between screens
- [ ] Responsive variants exist for desktop/tablet/mobile
- [ ] Accessibility: Contrast ratios meet WCAG AA
- [ ] Documentation pages are complete

---

## 🎉 **SUMMARY**

This Figma file structure provides:

✅ **Complete Organization** for 10 religions
✅ **Master Templates** for consistency
✅ **Component Library** (15 component sets)
✅ **Design System** (color, type, effects, spacing)
✅ **Admin-Editable System** (visual markers, naming)
✅ **Prototypes** (6 complete user journeys)
✅ **Documentation** (usage guides, handoff specs)
✅ **Export-Ready** assets

**Total Frames**: ~500 frames
**Total Components**: ~100 components
**Total Variants**: ~300 variants
**Total Prototypes**: 6 flows

**This is a production-ready design system that can be immediately used for development handoff or stakeholder presentations!** 🚀
