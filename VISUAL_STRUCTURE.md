# 🎨 Hindu Pilgrims - Visual Structure Diagram

## 📐 Screen Layout Blueprint

This document provides a visual representation of the screen layout and component structure.

---

## 🖥️ Main Screen Layout

```
┌─────────────────────────────────────────────────────────────────┐
│ HEADER (Orange → Red Gradient)                                  │
│ ┌──────┐  🕉️ Hindu Pilgrims                    ┌──────────────┐ │
│ │ ← Back│  Sacred Circuits & Divine Journeys    │ Build Custom │ │
│ └──────┘  [Admin: Subtitle]                     │ Pilgrimage   │ │
│                                                  └──────────────┘ │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ NOTIFICATION PREFERENCES (White Card)                           │
│ 🔔 Notification Preferences                                     │
│ ┌──────────────┬──────────────┬──────────────┬──────────────┐  │
│ │ Deal Alerts  │ Package      │ New Circuits │ Festival     │  │
│ │ ●━━━━○       │ ○━━━━●       │ ●━━━━○       │ ○━━━━●       │  │
│ └──────────────┴──────────────┴──────────────┴──────────────┘  │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ SACRED CIRCUITS (3-Column Grid)                                 │
│ ✨ Sacred Circuits                              [6 Major Circuits]│
│                                                                 │
│ ┌──────────────┬──────────────┬──────────────┐                 │
│ │ CHAR DHAM    │ 12 JYOTIR.   │ 108 DIVYA    │                 │
│ │ [Green Grad] │ [Orange Grad]│ [Blue Grad]  │                 │
│ │ ⛰️ Icon      │ 🕉️ Icon      │ 🪷 Icon      │                 │
│ │ ❤️ Save      │ ❤️ Save      │ ❤️ Save      │                 │
│ │              │              │              │                 │
│ │ Price: ...   │ Price: ...   │ Price: ...   │                 │
│ │ Duration: .. │ Duration: .. │ Duration: .. │                 │
│ │ State: ...   │ State: ...   │ State: ...   │                 │
│ │              │              │              │                 │
│ │[View Details]│[View Details]│[View Details]│                 │
│ │[YouTube][G] │[YouTube][G]  │[YouTube][G]  │                 │
│ └──────────────┴──────────────┴──────────────┘                 │
│ ┌──────────────┬──────────────┬──────────────┐                 │
│ │ 51 SHAKTI    │ NAVAGRAHA    │ PANCHA       │                 │
│ │ [Pink Grad]  │ [Yellow Grad]│ [Cyan Grad]  │                 │
│ │ 🌺 Icon      │ 🪐 Icon      │ 🌊 Icon      │                 │
│ │ ...          │ ...          │ ...          │                 │
│ └──────────────┴──────────────┴──────────────┘                 │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ BROWSE BY DEITY (4-Column Grid)                                 │
│ ✨ Browse by Deity                                              │
│ ┌─────┬─────┬─────┬─────┬─────┬─────┬─────┐                   │
│ │Shiva│Vishn│Shakt│Ganes│Hanum│Surya│Other│                   │
│ │🕉️   │🪷   │🌺   │🐘   │🦁   │☀️   │⭐   │                   │
│ │45+  │108+ │51+  │30+  │25+  │12+  │20+  │                   │
│ └─────┴─────┴─────┴─────┴─────┴─────┴─────┘                   │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ HIDDEN SPIRITUAL GEMS (Collapsible)                             │
│ 💎 Hidden Spiritual Gems              [Show/Hide Hidden Gems]   │
│                                                                 │
│ ┌──────────────────────────┬──────────────────────────┐        │
│ │ [Purple Gradient BG]     │ [Purple Gradient BG]     │        │
│ │ Temple Name 1            │ Temple Name 2            │        │
│ │ 📍 Location              │ 📍 Location              │        │
│ │ ✨ Deity: ...            │ ✨ Deity: ...            │        │
│ │ ♿ Access: Easy           │ ♿ Access: Moderate       │        │
│ │ Description...           │ Description...           │        │
│ │ ⭐ Special: ...          │ ⭐ Special: ...          │        │
│ │ [Explore] [Videos]       │ [Explore] [Videos]       │        │
│ └──────────────────────────┴──────────────────────────┘        │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ BROWSE BY GEOGRAPHY (3-Column Grid)                             │
│ 🗺️ Browse by Geography                    [Filter by District]  │
│ ┌──────────────┬──────────────┬──────────────┐                 │
│ │ STATE 1      │ STATE 2      │ STATE 3      │                 │
│ │ [Green BG]   │ [Green BG]   │ [Green BG]   │                 │
│ │ 45+ temples  │ 38+ temples  │ 52+ temples  │                 │
│ │ 12 districts │ 8 districts  │ 15 districts │                 │
│ │[View Temples]│[View Temples]│[View Temples]│                 │
│ └──────────────┴──────────────┴──────────────┘                 │
│ ┌──────────────┬──────────────┬──────────────┐                 │
│ │ STATE 4      │ STATE 5      │ STATE 6      │                 │
│ │ ...          │ ...          │ ...          │                 │
│ └──────────────┴──────────────┴──────────────┘                 │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ SPECIAL PILGRIMAGE PACKAGES (4-Column Grid)                     │
│ 📦 Special Pilgrimage Packages                                  │
│ ┌─────┬─────┬─────┬─────┐                                      │
│ │PKG 1│PKG 2│PKG 3│PKG 4│                                      │
│ │[Purp│[Gree│[Blue│[Oran│                                      │
│ │Grad]│Grad]│Grad]│Grad]│                                      │
│ │ 🎁  │ ♿  │ 🏆  │ ⚡  │                                      │
│ │     │     │     │     │                                      │
│ │Dur: │Dur: │Dur: │Dur: │                                      │
│ │12d  │8d   │10d  │5d   │                                      │
│ │₹45k │₹32k │₹38k │₹22k │                                      │
│ │     │     │     │     │                                      │
│ │[Book│[Book│[Book│[Book│                                      │
│ │ Now]│ Now]│ Now]│ Now]│                                      │
│ └─────┴─────┴─────┴─────┘                                      │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🎨 Sacred Circuit Card Structure

```
┌────────────────────────────────────────┐
│ CARD HEADER (Gradient Background)      │
│ ┌──────┐                       ┌────┐ │
│ │ Icon │                       │ ❤️  │ │
│ │ 🕉️   │                       │Save│ │
│ └──────┘                       └────┘ │
│                                       │
│ Char Dham Yatra                       │
│ Four Divine Abodes                    │
│ [4 DHAMS]                             │
├───────────────────────────────────────┤
│ CARD BODY (White Background)          │
│ ┌───────────────────────────────────┐ │
│ │ Description (Admin Editable)      │ │
│ └───────────────────────────────────┘ │
│                                       │
│ ┌────────────┬────────────┐          │
│ │ 📍 State   │ ⏰ Duration │          │
│ │ Admin: ... │ Admin: ... │          │
│ └────────────┴────────────┘          │
│ ┌────────────┬────────────┐          │
│ │ 💰 Price   │ 📅 Best    │          │
│ │ Admin: ... │ Admin: ... │          │
│ └────────────┴────────────┘          │
│ ┌────────────┬────────────┐          │
│ │ 👥 Crowd   │ 📊 Diff.   │          │
│ │ Admin: ... │ Admin: ... │          │
│ └────────────┴────────────┘          │
│                                       │
│ ┌───────────────────────────────────┐ │
│ │ View Details & Plan Yatra         │ │
│ └───────────────────────────────────┘ │
│ ┌─────────────┬─────────────┐        │
│ │   YouTube   │   Google    │        │
│ └─────────────┴─────────────┘        │
└────────────────────────────────────────┘
```

---

## 🎛️ Custom Tour Builder Dialog

```
┌─────────────────────────────────────────────┐
│ 🛤️ Build Custom Pilgrimage            [×]   │
├─────────────────────────────────────────────┤
│ Fill in your requirements and Grok AI      │
│ will create a custom itinerary             │
├─────────────────────────────────────────────┤
│                                             │
│ ┌──────────────┬──────────────┐            │
│ │ Start Date   │ End Date     │            │
│ │ [Calendar]   │ [Calendar]   │            │
│ └──────────────┴──────────────┘            │
│                                             │
│ ┌─────────────────────────────────┐        │
│ │ Group Size                      │        │
│ │ [Dropdown: Solo/Couple/Family]  │        │
│ └─────────────────────────────────┘        │
│                                             │
│ ┌─────────────────────────────────┐        │
│ │ Senior Citizen Needs            │        │
│ │ [Dropdown: None/Wheelchair/...] │        │
│ └─────────────────────────────────┘        │
│                                             │
│ ┌─────────────────────────────────┐        │
│ │ Deity Preference                │        │
│ │ [Dropdown: All/Shiva/Vishnu...] │        │
│ └─────────────────────────────────┘        │
│                                             │
│ ┌─────────────────────────────────┐        │
│ │ Budget Range                    │        │
│ │ [Dropdown: Budget/Moderate/...] │        │
│ └─────────────────────────────────┘        │
│                                             │
│ ┌─────────────────────────────────┐        │
│ │ Accessibility Requirements      │        │
│ │ [Dropdown: Standard/Easy/...]   │        │
│ └─────────────────────────────────┘        │
│                                             │
│ ┌─────────────────────────────────┐        │
│ │ Transportation Preference       │        │
│ │ [Dropdown: Train/Flight/Cab...] │        │
│ └─────────────────────────────────┘        │
│                                             │
│ ┌─────────────────────────────────┐        │
│ │ Accommodation Type              │        │
│ │ [Dropdown: Budget/3-star/...]   │        │
│ └─────────────────────────────────┘        │
│                                             │
│ ┌─────────────────────────────────┐        │
│ │ ✨ Request Custom Itinerary      │        │
│ └─────────────────────────────────┘        │
└─────────────────────────────────────────────┘
```

---

## 🤖 Grok AI Response Dialog

### **Loading State (3 seconds)**
```
┌─────────────────────────────────────┐
│ ✨ Grok AI Response           [×]   │
├─────────────────────────────────────┤
│                                     │
│         ⟳ Loading Spinner           │
│                                     │
│    Analyzing your requirements...   │
│                                     │
│  AI is processing your custom       │
│  pilgrimage request                 │
│                                     │
└─────────────────────────────────────┘
```

### **Success State**
```
┌─────────────────────────────────────┐
│ ✨ Grok AI Response           [×]   │
├─────────────────────────────────────┤
│ ┌───────────────────────────────┐   │
│ │ ✅ Request Received           │   │
│ │                               │   │
│ │ Reference ID: GROK-12345      │   │
│ │                               │   │
│ │ We've received your request.  │   │
│ │ Grok AI will get back with:   │   │
│ │                               │   │
│ │ ✓ Detailed budget breakdown   │   │
│ │ ✓ Senior care facilities info │   │
│ │ ✓ Custom itinerary w/ timings │   │
│ │ ✓ Accessibility details       │   │
│ │ ✓ Accommodation recommends    │   │
│ └───────────────────────────────┘   │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │         Close                   │ │
│ └─────────────────────────────────┘ │
└─────────────────────────────────────┘
```

---

## 📱 Deity Filter Screen

```
┌─────────────────────────────────────────────────────────┐
│ DEITY HEADER (Gradient - Deity Specific)                │
│ ┌──────┐  🕉️ Lord Shiva                                 │
│ │ ← Back│  [Admin: Deity Description]                   │
│ └──────┘                                                │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ ASSOCIATED CIRCUITS                                      │
│ ┌──────────────┬──────────────┬──────────────┐          │
│ │ 12 Jyotir.   │ Pancha Bhoota│ Circuit 3    │          │
│ │ [Gradient]   │ [Gradient]   │ [Gradient]   │          │
│ │              │              │              │          │
│ │ Description  │ Description  │ Description  │          │
│ │              │              │              │          │
│ │[View Details]│[View Details]│[View Details]│          │
│ └──────────────┴──────────────┴──────────────┘          │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│              ┌──────────────────────────┐               │
│              │ ← Back to All Circuits   │               │
│              └──────────────────────────┘               │
└─────────────────────────────────────────────────────────┘
```

---

## 🎨 Design System Visual Reference

### **Gradient Palette**
```
┌────────────────────────────────────────┐
│ Char Dham: Green → Emerald → Teal     │ ███████████
│ Jyotirlingas: Orange → Red → Pink     │ ███████████
│ Divya Desam: Blue → Indigo → Purple   │ ███████████
│ Shakti Peetha: Pink → Rose → Red      │ ███████████
│ Navagraha: Yellow → Amber → Orange    │ ███████████
│ Pancha Bhoota: Cyan → Teal → Blue     │ ███████████
│ Purple Package: Purple → Pink         │ ███████████
└────────────────────────────────────────┘
```

### **Icon Mapping**
```
Category          Icon        Lucide Component
─────────────────────────────────────────────
Char Dham         ⛰️          Mountain
12 Jyotirlingas   🕉️          Flame
108 Divya Desams  🪷          Flower2
51 Shakti Peethas 🌺          Sparkles
Navagraha         🪐          Sun
Pancha Bhoota     🌊          Waves
Hidden Gems       💎          Gem
Geography         🗺️          Map
Special Packages  🎁          Package
Notifications     🔔          Bell
Custom Tour       🛤️          Route
Grok AI           ✨          Sparkles
```

### **Spacing System**
```
Component        Padding    Gap      Radius
───────────────────────────────────────────
Page             p-6        -        -
Section          -          space-y-8 -
Card             p-6        -        rounded-3xl
Grid             -          gap-6    -
Button           px-6 py-3  -        rounded-full
Input Field      p-3        -        rounded-xl
```

### **Typography Scale**
```
Level     Class       Size    Weight   Usage
─────────────────────────────────────────────
H1        text-3xl    30px    bold     Main title
H2        text-2xl    24px    bold     Section headers
H3        text-xl     20px    bold     Card titles
Body      text-base   16px    normal   Content
Small     text-sm     14px    normal   Details
Tiny      text-xs     12px    normal   Labels
```

---

## 📊 Component Hierarchy

```
HinduPilgrimsFlow_Ultimate
│
├── Main Screen
│   ├── Header
│   │   ├── Back Button
│   │   ├── Title + Subtitle
│   │   └── "Build Custom" Button
│   │
│   ├── Notification Toggles
│   │   └── 4 × Switch Components
│   │
│   ├── Sacred Circuits Section
│   │   └── Grid (3 cols)
│   │       └── 6 × Circuit Cards
│   │           ├── Gradient Header
│   │           │   ├── Icon
│   │           │   ├── Heart Button
│   │           │   ├── Title/Subtitle
│   │           │   └── Tag Badge
│   │           ├── White Body
│   │           │   ├── Description
│   │           │   ├── 6 × Info Fields
│   │           │   ├── Primary Button
│   │           │   └── 2 × Secondary Buttons
│   │
│   ├── Browse by Deity Section
│   │   └── Grid (4 cols)
│   │       └── 7 × Deity Cards
│   │           ├── Icon Background
│   │           ├── Deity Name
│   │           └── Temple Count
│   │
│   ├── Hidden Gems Section
│   │   ├── Toggle Button
│   │   └── Collapsible Grid (2 cols)
│   │       └── 4 × Gem Cards
│   │           ├── Purple BG
│   │           ├── Temple Details
│   │           └── 2 × Action Buttons
│   │
│   ├── Geography Section
│   │   ├── Filter Button
│   │   └── Grid (3 cols)
│   │       └── 6 × State Cards
│   │           ├── Green BG
│   │           ├── Counts
│   │           └── Action Button
│   │
│   └── Special Packages Section
│       └── Grid (4 cols)
│           └── 4 × Package Cards
│               ├── Gradient Header
│               ├── White Body
│               └── Book Button
│
├── Deity Filter Screen
│   ├── Deity Header
│   ├── Associated Circuits Grid
│   └── Back Button
│
├── Dialogs
│   ├── Custom Tour Builder
│   │   ├── Header
│   │   ├── 9 × Form Fields
│   │   └── Submit Button
│   │
│   └── Grok AI Response
│       ├── Loading State
│       │   └── Spinner + Message
│       └── Success State
│           └── Confirmation + List
│
└── Toast Notifications
    └── sonner toasts
```

---

## 🎯 Interaction Flow Diagram

```
User Opens App
    │
    ├─> Clicks "HINDU PILGRIMS ✨" Button
    │       │
    │       └─> Demo Page Loads
    │               │
    │               ├─> Reviews Features
    │               │
    │               └─> Clicks "Launch" Button
    │
    └─> Main Screen Appears
            │
            ├─> Browses Sacred Circuits
            │   │
            │   ├─> Clicks Heart → Saves Interest ✓
            │   │
            │   ├─> Clicks YouTube → Opens Video ✓
            │   │
            │   └─> Clicks "View Details" → Detail Page
            │
            ├─> Toggles Notifications
            │   └─> Switch Toggles → Toast ✓
            │
            ├─> Clicks "Show Hidden Gems"
            │   │
            │   └─> Section Expands → Shows Gems ✓
            │
            ├─> Clicks Deity Card
            │   │
            │   └─> Deity Filter Page
            │       │
            │       └─> Clicks Back → Returns ✓
            │
            ├─> Clicks "Build Custom Pilgrimage"
            │   │
            │   └─> Dialog Opens
            │       │
            │       ├─> Fills 9 Fields
            │       │
            │       └─> Clicks Submit
            │           │
            │           └─> Grok AI Dialog Opens
            │               │
            │               ├─> Shows Loading (3s)
            │               │
            │               └─> Shows Success ✓
            │
            └─> Explores Geography/Packages
                └─> Clicks Cards → Navigation ✓
```

---

## 📱 Responsive Breakpoints

```
Mobile (< 768px)
┌──────────────┐
│ Circuit 1    │
├──────────────┤
│ Circuit 2    │
├──────────────┤
│ Circuit 3    │
└──────────────┘
1 column grid

Tablet (768px - 1024px)
┌────────┬────────┐
│Circuit1│Circuit2│
├────────┼────────┤
│Circuit3│Circuit4│
└────────┴────────┘
2 column grid

Desktop (> 1024px)
┌───────┬───────┬───────┐
│Circ 1 │Circ 2 │Circ 3 │
├───────┼───────┼───────┤
│Circ 4 │Circ 5 │Circ 6 │
└───────┴───────┴───────┘
3 column grid
```

---

## 🎨 Admin Zone Visualization

```
┌─────────────────────────────────────┐
│ ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓   │
│ ┃ Admin editable: Title        ┃   │  ← Label
│ ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛   │
│ ╔═══════════════════════════════╗   │
│ ║ [Admin: Char Dham Yatra]      ║   │  ← Dashed Border
│ ╚═══════════════════════════════╝   │    + Placeholder
│                                     │    + Light BG
└─────────────────────────────────────┘

Regular Content
┌─────────────────────────────────────┐
│ Char Dham Yatra                     │  ← No special styling
└─────────────────────────────────────┘
```

---

## ✨ Animation Timeline

```
Page Load
  0ms   ├─> Header fades in
 100ms  ├─> Notifications fade in
 200ms  ├─> Circuit 1 fades in
 300ms  ├─> Circuit 2 fades in
 400ms  ├─> Circuit 3 fades in
 500ms  ├─> Circuit 4 fades in
 600ms  ├─> Circuit 5 fades in
 700ms  ├─> Circuit 6 fades in
 800ms  ├─> Deity section fades in
 900ms  ├─> Geography section fades in
1000ms  └─> Packages section fades in

Hover Interactions
  0ms   ├─> Hover starts
 150ms  ├─> Scale to 1.02
 150ms  ├─> Shadow increases
 150ms  └─> All transitions complete

Toggle Hidden Gems
  0ms   ├─> Click button
 100ms  ├─> Section expands
 200ms  ├─> Gem 1 slides in
 300ms  ├─> Gem 2 slides in
 400ms  ├─> Gem 3 slides in
 500ms  └─> Gem 4 slides in

Grok AI Response
  0ms   ├─> Submit form
 100ms  ├─> Dialog opens
3000ms  ├─> Loading complete
3100ms  └─> Success shows
```

---

## 🎯 Component State Diagram

```
                    ┌─────────────┐
                    │ Main Screen │
                    └──────┬──────┘
                           │
          ┌────────────────┼────────────────┐
          │                │                │
    ┌─────▼─────┐   ┌─────▼─────┐   ┌─────▼─────┐
    │ Deity     │   │ Hidden    │   │ Custom    │
    │ Filter    │   │ Gems      │   │ Tour      │
    └─────┬─────┘   └─────┬─────┘   └─────┬─────┘
          │               │               │
          │               │         ┌─────▼─────┐
          │               │         │ Grok AI   │
          │               │         │ Response  │
          │               │         └───────────┘
          │               │
          └───────┬───────┘
                  │
            ┌─────▼─────┐
            │ Back to   │
            │   Main    │
            └───────────┘
```

---

## 📊 Data Flow Diagram

```
User Action
    │
    ├─> Click Heart
    │       │
    │       └─> Update savedInterests Set
    │               │
    │               └─> Show Toast
    │
    ├─> Toggle Notification
    │       │
    │       └─> Update notificationToggles Object
    │               │
    │               └─> Show Toast
    │
    ├─> Click YouTube/Google
    │       │
    │       └─> window.open(url)
    │               │
    │               └─> Show Toast
    │
    └─> Submit Custom Tour
            │
            ├─> Validate Form Data
            │
            ├─> Show Loading (3s)
            │
            └─> Show Success
                    │
                    └─> Display Results
```

---

## 🎨 Color Coding Legend

```
Header Bars         : Orange → Red
Sacred Circuits     : 6 different gradients
Hidden Gems         : Purple → Pink
Geography Browse    : Green → Teal
Special Packages    : 4 different gradients
Admin Editable      : Gray-50 background + Dashed borders
Success Messages    : Green-50 background
Error Messages      : Red-50 background
Loading States      : Purple-600 spinner
```

---

This visual structure provides a complete blueprint of the implementation.
Use this alongside the code to understand the layout and hierarchy! 🎨✨
