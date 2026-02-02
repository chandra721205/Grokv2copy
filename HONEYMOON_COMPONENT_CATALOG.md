# 🧩 Honeymoon & Romance - Component Catalog
## Design System Reference Guide

**Purpose:** Visual catalog of all existing UI components  
**Status:** Complete reference for adding new elements  
**Rule:** All new components must match these exact patterns

---

## 📐 COMPONENT SPECIFICATIONS

### **1. HEADER COMPONENT**

```tsx
// SPECIFICATION
┌─────────────────────────────────────────┐
│ ← BACK (40x40, white/20, rounded-full) │ ← 24px margin-bottom
│                                         │
│ [64x64 Icon Container]  TITLE          │ ← Icon: 64x64, white/20, rounded-2xl
│                          subtitle       │ ← Title: text-3xl font-bold text-white
│                                         │ ← Subtitle: text-sm text-white/80
│ 🔍 [Search Bar - Full Width]           │ ← 12px margin-bottom
│                                         │
│ [Google Button] [YouTube Button]       │ ← flex gap-3, 12px margin-bottom
│                                         │
│ ✨ Helper text                          │ ← text-xs text-white/70
└─────────────────────────────────────────┘

// CODE PATTERN
<div className="bg-gradient-to-r from-pink-600 to-rose-600 
                px-6 pt-12 pb-8 rounded-b-[2rem]">
  {/* Back Button */}
  <button className="w-10 h-10 bg-white/20 rounded-full 
                     flex items-center justify-center 
                     backdrop-blur-sm mb-6">
    <ArrowLeft className="w-5 h-5 text-white" />
  </button>

  {/* Icon + Title */}
  <div className="flex items-center gap-4 mb-6">
    <div className="w-16 h-16 bg-white/20 rounded-2xl 
                    flex items-center justify-center backdrop-blur-sm">
      <Heart className="w-9 h-9 text-white" />
    </div>
    <div>
      <h1 className="text-white text-3xl font-bold">Title</h1>
      <p className="text-white/80 text-sm">Subtitle</p>
    </div>
  </div>

  {/* Search Bar */}
  <div className="relative mb-3">
    <Search className="absolute left-4 top-1/2 -translate-y-1/2 
                       w-5 h-5 text-gray-400" />
    <Input className="pl-12 pr-12 h-12 rounded-full 
                      bg-white border-0 shadow-lg" />
    <button className="absolute right-4 top-1/2 -translate-y-1/2 
                       w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 
                       rounded-full">
      <Filter className="w-4 h-4 text-white" />
    </button>
  </div>

  {/* Browse Buttons */}
  <div className="flex gap-3 mb-3">
    <Button className="flex-1 bg-white text-blue-600 
                       hover:bg-gray-100 rounded-full h-9">
      <Globe className="w-4 h-4" /> Google Search
    </Button>
    <Button className="flex-1 bg-white text-red-600 
                       hover:bg-gray-100 rounded-full h-9">
      <Youtube className="w-4 h-4" /> YouTube
    </Button>
  </div>

  {/* Helper */}
  <div className="flex items-center gap-2 text-white/70 text-xs">
    <Sparkles className="w-4 h-4" />
    <span>Helper text...</span>
  </div>
</div>

// MEASUREMENTS
Height: Dynamic (content-based)
Padding: 48px top, 32px bottom, 24px horizontal
Background: Linear gradient from-pink-600 to-rose-600
Border Radius: 32px bottom corners only

// COLORS
Background: from-pink-600 to-rose-600
Back Button: white 20% opacity
Icon Container: white 20% opacity
Text: white (title), white 80% (subtitle), white 70% (helper)
Search Bar: white background
Filter Icon: blue-600 to purple-600 gradient
Google Button: blue-600 text on white
YouTube Button: red-600 text on white
```

---

### **2. NAVIGATION CARD (2-Column Grid)**

```tsx
// SPECIFICATION
┌──────────────┐
│              │ ← 128px height
│     ICON     │ ← Icon area: pink-50 to rose-50 gradient
│   (48x48)    │
├──────────────┤
│ Title        │ ← 16px padding
│ Description  │ ← text-sm font-bold
└──────────────┘ ← text-xs text-gray-600

// CODE PATTERN
<motion.button
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  whileTap={{ scale: 0.95 }}
  className="bg-white rounded-3xl overflow-hidden 
             shadow-md hover:shadow-xl transition-all"
>
  <div className="h-32 bg-gradient-to-br from-pink-50 to-rose-50 
                  flex items-center justify-center">
    <Mountain className="w-12 h-12 text-pink-600" />
  </div>
  <div className="p-4">
    <h3 className="font-bold text-sm mb-1">Hill Station Retreats</h3>
    <p className="text-xs text-gray-600">Cozy mountain escapes</p>
  </div>
</motion.button>

// GRID USAGE
<div className="grid grid-cols-2 gap-4">
  <NavigationCard />
  <NavigationCard />
</div>

// MEASUREMENTS
Width: 50% minus 8px gap
Height: Icon area 128px + Text area ~60px
Border Radius: 24px
Shadow: md (default), xl (hover)

// COLORS
Background: white
Icon Area: from-pink-50 to-rose-50
Icon: text-pink-600
Title: text-gray-900
Description: text-gray-600
```

---

### **3. NAVIGATION CARD (Full Width)**

```tsx
// SPECIFICATION
┌────────────────────────────────────────┐
│ [Icon]  Title            →             │
│ (80x80) Description                    │
└────────────────────────────────────────┘

// CODE PATTERN
<motion.button
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  whileTap={{ scale: 0.98 }}
  className="w-full bg-white rounded-3xl overflow-hidden 
             shadow-md hover:shadow-xl transition-all"
>
  <div className="flex items-center p-6 gap-4">
    <div className="w-20 h-20 bg-gradient-to-br from-pink-50 to-rose-50 
                    rounded-2xl flex items-center justify-center flex-shrink-0">
      <Plane className="w-10 h-10 text-pink-600" />
    </div>
    <div className="text-left flex-1">
      <h3 className="font-bold text-lg mb-1">International Escapes</h3>
      <p className="text-sm text-gray-600">Exotic destinations worldwide</p>
    </div>
    <ChevronRight className="w-6 h-6 text-gray-400" />
  </div>
</motion.button>

// MEASUREMENTS
Width: 100%
Height: ~92px (24px padding + 80px icon area)
Border Radius: 24px
Icon Container: 80x80
Padding: 24px all sides

// COLORS
Background: white
Icon Container: from-pink-50 to-rose-50
Icon: text-pink-600
Title: text-gray-900 (text-lg)
Description: text-gray-600
Chevron: text-gray-400
```

---

### **4. PACKAGE CARD**

```tsx
// SPECIFICATION
┌──────────────────────────────────────┐
│ [Icon]  Package Name                 │ ← 24px padding
│ (64x64) 💑 Badge • 3N/4D             │
│         ⭐ 4.8 (234 reviews)         │
│                                      │
│ ┌──────────────────────────────┐   │
│ │ 🎁 What's Included:          │   │ ← Inclusions box
│ │ • 🕯️ Item 1                  │   │   (pink-50 background)
│ │ • 💆 Item 2                  │   │
│ └──────────────────────────────┘   │
│                                      │
│ ┌──────────────────────────────┐   │
│ │ 📍 Destination: Admin-Added  │   │ ← Info box
│ │ * Note about admin content   │   │   (blue-50 background)
│ └──────────────────────────────┘   │
│                                      │
│ Duration        Per Couple          │
│ 3N/4D           ₹30,000             │
│                                      │
│ [Google Search] [YouTube]           │
│                                      │
│ [🔖 Track Interest]                 │
└──────────────────────────────────────┘

// CODE PATTERN
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
  className="bg-white rounded-3xl overflow-hidden shadow-md 
             hover:shadow-xl transition-all"
>
  <div className="p-6">
    {/* Header */}
    <div className="flex items-start gap-4 mb-4">
      <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-600 
                      rounded-2xl flex items-center justify-center flex-shrink-0">
        <Heart className="w-10 h-10 text-white" />
      </div>
      <div className="flex-1">
        <h3 className="font-bold text-lg mb-1">Romantic Escape Package</h3>
        <div className="flex items-center gap-2 mb-2">
          <Badge className="bg-pink-100 text-pink-700 border-pink-300">
            💑 For Couples
          </Badge>
          <span className="text-xs text-gray-500">• 3N/4D</span>
        </div>
        <div className="flex items-center gap-2">
          <Star className="w-4 h-4 text-yellow-500 fill-current" />
          <span className="font-semibold text-sm">4.8</span>
          <span className="text-gray-500 text-xs">(234 couples)</span>
        </div>
      </div>
    </div>

    {/* Inclusions */}
    <div className="bg-pink-50 rounded-2xl p-3 mb-4">
      <p className="text-xs font-semibold text-pink-700 mb-2 
                    flex items-center gap-1">
        <Gift className="w-4 h-4" /> What's Included:
      </p>
      <ul className="text-xs text-gray-700 space-y-1">
        <li className="flex items-center gap-2">
          <span>🕯️</span>
          <span>Candlelight dinner</span>
        </li>
      </ul>
    </div>

    {/* Destination Info */}
    <div className="bg-blue-50 rounded-2xl p-3 mb-4">
      <div className="flex items-center gap-2">
        <MapPin className="w-4 h-4 text-blue-600" />
        <p className="text-sm text-gray-700">
          <span className="font-semibold">Destination: </span>
          Admin-Selected Romantic Destination
        </p>
      </div>
      <p className="text-xs text-gray-500 mt-1">
        * Actual destinations will be selected by admin
      </p>
    </div>

    {/* Pricing */}
    <div className="flex items-center justify-between mb-4">
      <div>
        <p className="text-sm text-gray-500">Duration</p>
        <p className="font-semibold">3N/4D</p>
      </div>
      <div className="text-right">
        <p className="text-sm text-gray-500">Per Couple</p>
        <p className="font-bold text-2xl bg-gradient-to-r from-pink-500 to-rose-600 
                      bg-clip-text text-transparent">
          ₹30,000
        </p>
      </div>
    </div>

    {/* Browse Buttons */}
    <div className="flex gap-2">
      <Button className="flex-1 rounded-full bg-white border-2 border-blue-600 
                         text-blue-600 hover:bg-blue-50 h-11">
        <Globe className="w-4 h-4" /> Google Search
      </Button>
      <Button className="flex-1 rounded-full bg-gradient-to-r from-red-600 to-red-700 
                         hover:from-red-700 hover:to-red-800 h-11">
        <Youtube className="w-4 h-4" /> YouTube
      </Button>
    </div>

    {/* Interest Tracking */}
    <div className="flex items-center gap-2 mt-4">
      <Button className="rounded-full bg-gradient-to-r from-pink-500 to-rose-600 
                         text-white hover:from-pink-600 hover:to-rose-700">
        <Bookmark className="w-4 h-4" /> Track Interest
      </Button>
    </div>
  </div>
</motion.div>

// MEASUREMENTS
Width: 100%
Padding: 24px
Border Radius: 24px
Icon Container: 80x80 (rounded-2xl)
Inclusions Box: 12px padding, 16px border radius
Button Height: 44px (h-11)

// COLORS
Background: white
Icon Container: from-pink-500 to-rose-600
Badge: bg-pink-100 text-pink-700
Star: text-yellow-500
Inclusions Box: bg-pink-50, text-pink-700
Info Box: bg-blue-50, text-blue-600
Price Gradient: from-pink-500 to-rose-600
Google Button: border-blue-600 text-blue-600
YouTube Button: from-red-600 to-red-700
Track Button: from-pink-500 to-rose-600
```

---

### **5. ACTIVITY CHIP**

```tsx
// SPECIFICATION
┌─────────────────────┐
│ 🕯️ Candlelight      │ ← 8px vertical, 16px horizontal padding
└─────────────────────┘

// CODE PATTERN
<motion.button
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.3 }}
  className="px-4 py-2 rounded-full 
             bg-gradient-to-r from-pink-500 to-rose-600 
             text-white text-sm font-semibold 
             hover:from-pink-600 hover:to-rose-700 
             transition-all flex items-center gap-2"
>
  <Flame className="w-4 h-4" />
  Candlelight Dinner
</motion.button>

// USAGE
<div className="flex flex-wrap gap-2">
  <ActivityChip icon={Flame} label="Candlelight Dinner" />
  <ActivityChip icon={Sparkles} label="Spa & Wellness" />
</div>

// MEASUREMENTS
Height: ~32px (py-2)
Padding: 8px vertical, 16px horizontal
Border Radius: Full (pill shape)
Icon Size: 16x16

// COLORS
Background: from-pink-500 to-rose-600
Hover: from-pink-600 to-rose-700
Text: white
Icon: white
Font: text-sm font-semibold
```

---

### **6. ACTION CARD**

```tsx
// SPECIFICATION
┌──────────────┐
│ [Icon]       │ ← 48x48 icon container
│ (24x24)      │
│              │
│ Title        │ ← text-sm font-bold
│ Description  │ ← text-xs text-gray-600
└──────────────┘

// CODE PATTERN
<motion.button
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5 }}
  whileTap={{ scale: 0.95 }}
  className="bg-white rounded-3xl p-6 
             shadow-xl hover:shadow-2xl transition-all"
>
  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 
                  rounded-2xl flex items-center justify-center mb-3">
    <Calendar className="w-6 h-6 text-white" />
  </div>
  <h3 className="font-bold text-sm mb-1">Custom Tour</h3>
  <p className="text-xs text-gray-600">Plan your way</p>
</motion.button>

// GRID USAGE
<div className="grid grid-cols-2 gap-4">
  <ActionCard />
  <ActionCard />
</div>

// MEASUREMENTS
Width: 50% minus 8px gap
Padding: 24px
Icon Container: 48x48
Border Radius: 24px
Shadow: xl (default), 2xl (hover)

// COLORS
Background: white
Icon Container: from-pink-500 to-rose-600
Icon: white (24x24)
Title: text-gray-900
Description: text-gray-600
```

---

### **7. INFO BANNER**

```tsx
// SPECIFICATION
┌──────────────────────────────────────┐
│ ✨  Admin-Managed Content            │
│     Packages shown below are...      │
└──────────────────────────────────────┘

// CODE PATTERN
<div className="bg-gradient-to-r from-blue-50 to-purple-50 
                rounded-2xl p-4 mb-6">
  <div className="flex items-start gap-3">
    <Sparkles className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
    <div>
      <p className="text-sm font-semibold text-gray-900 mb-1">
        Admin-Managed Content
      </p>
      <p className="text-xs text-gray-600">
        Packages shown below are placeholder templates...
      </p>
    </div>
  </div>
</div>

// MEASUREMENTS
Width: 100%
Padding: 16px
Border Radius: 16px
Icon: 20x20

// COLORS
Background: from-blue-50 to-purple-50
Icon: text-blue-600
Title: text-gray-900 font-semibold
Body: text-gray-600
```

---

### **8. TOAST NOTIFICATION**

```tsx
// SPECIFICATION
┌───────────────────────────────────────┐
│ 🔔 Added "Package Name" to tracking! │
│    You'll receive deal notifications  │
└───────────────────────────────────────┘

// CODE PATTERN
{showNotification && (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 50 }}
    className="fixed bottom-6 left-1/2 -translate-x-1/2 
               bg-gradient-to-r from-green-500 to-green-600 
               text-white px-6 py-3 rounded-full shadow-2xl 
               flex items-center gap-3 z-50"
  >
    <BellRing className="w-5 h-5" />
    <span className="text-sm font-semibold">{notificationMessage}</span>
  </motion.div>
)}

// MEASUREMENTS
Position: Fixed bottom-6, centered
Padding: 12px vertical, 24px horizontal
Border Radius: Full (pill)
Icon: 20x20
Auto-dismiss: 3 seconds

// COLORS
Background: from-green-500 to-green-600
Text: white
Icon: white
Shadow: 2xl
```

---

## 🎨 COLOR PALETTE REFERENCE

### **Gradients:**

```css
/* PRIMARY (Headers, Buttons) */
from-pink-600 to-rose-600    /* Main header */
from-pink-500 to-rose-600    /* Buttons, icon containers */

/* SECONDARY (Card Backgrounds) */
from-pink-50 to-rose-50      /* Navigation card icon areas */
from-gray-50 to-white        /* Page background */

/* ACCENT (Buttons) */
from-blue-600 to-purple-600  /* Filter button */
from-red-600 to-red-700      /* YouTube button */
from-green-500 to-green-600  /* Success toast */

/* INFO (Banners) */
from-blue-50 to-purple-50    /* Admin notice */
```

### **Solid Colors:**

```css
/* BACKGROUNDS */
bg-white                     /* Cards */
bg-pink-50                   /* Inclusions box */
bg-blue-50                   /* Info box */
bg-orange-50                 /* Activities box (Adventure) */

/* TEXT */
text-white                   /* On gradients */
text-gray-900                /* Primary text */
text-gray-700                /* Secondary text */
text-gray-600                /* Tertiary text */
text-gray-500                /* Muted text */
text-pink-600                /* Icons on light backgrounds */
text-pink-700                /* Inclusion box text */
text-blue-600                /* Info box icon/text */
text-orange-700              /* Activity box text */
text-yellow-500              /* Star rating */

/* BORDERS */
border-blue-600              /* Google button */
border-pink-300              /* Badge */

/* OPACITY */
bg-white/20                  /* Back button, icon containers */
text-white/80                /* Subtitle */
text-white/70                /* Helper text */
```

---

## 📏 SPACING REFERENCE

```css
/* PADDING */
p-6  = 24px    /* Cards, content areas */
p-4  = 16px    /* Small cards */
p-3  = 12px    /* Info boxes */

px-6 = 24px    /* Screen horizontal */
pt-12 = 48px   /* Header top */
pb-8  = 32px   /* Header bottom */

/* MARGIN */
mb-6 = 24px    /* Section spacing */
mb-4 = 16px    /* Element spacing */
mb-3 = 12px    /* Small spacing */
mb-2 = 8px     /* Tiny spacing */
mb-1 = 4px     /* Micro spacing */

-mt-6 = -24px  /* Overlap effect */

/* GAP */
gap-4 = 16px   /* Grid, flex large */
gap-3 = 12px   /* Flex medium */
gap-2 = 8px    /* Flex small */
```

---

## 🔤 TYPOGRAPHY REFERENCE

```css
/* HEADINGS */
text-3xl font-bold         /* 30px - Main title */
text-xl font-bold          /* 20px - Section title */
text-lg font-bold          /* 18px - Card title */

/* BODY */
text-sm                    /* 14px - Normal text */
text-sm font-semibold      /* 14px - Emphasized */
text-xs                    /* 12px - Small text */
text-xs font-semibold      /* 12px - Small emphasized */

/* SPECIAL */
text-2xl font-bold         /* 24px - Price */
bg-gradient-to-r from-pink-500 to-rose-600 
bg-clip-text text-transparent  /* Gradient text */
```

---

## 📐 SIZE REFERENCE

```css
/* ICON CONTAINERS */
w-16 h-16    /* 64x64 - Header icon */
w-20 h-20    /* 80x80 - Package icon */
w-12 h-12    /* 48x48 - Action card icon */

/* ICONS */
w-9 h-9      /* 36x36 - Header icon */
w-10 h-10    /* 40x40 - Package icon */
w-8 h-8      /* 32x32 - Package icon (sub-screens) */
w-6 h-6      /* 24x24 - Action card icon */
w-5 h-5      /* 20x20 - Search icon, banner icon */
w-4 h-4      /* 16x16 - Button icon, star, chip icon */

/* BUTTONS */
h-12         /* 48px - Search bar */
h-11         /* 44px - Browse buttons */
h-9          /* 36px - Sub-screen buttons */
w-10 h-10    /* 40x40 - Back button */
w-8 h-8      /* 32x32 - Filter button */

/* SPECIAL */
h-32         /* 128px - Nav card icon area */
```

---

## 🎬 ANIMATION REFERENCE

```tsx
/* FADE IN + SLIDE UP */
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: 0.2 }}

/* FADE IN + SCALE */
initial={{ opacity: 0, scale: 0.9 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ delay: 0.3 }}

/* PRESS FEEDBACK */
whileTap={{ scale: 0.95 }}   /* Cards, buttons */
whileTap={{ scale: 0.98 }}   /* Large cards */

/* STAGGERED ANIMATION */
transition={{ delay: 0.2 + index * 0.1 }}

/* TOAST ANIMATION */
initial={{ opacity: 0, y: 50 }}
animate={{ opacity: 1, y: 0 }}
exit={{ opacity: 0, y: 50 }}
```

---

## ✅ USAGE RULES

### **When Creating New Components:**

1. **Copy existing pattern** from this catalog
2. **Match colors exactly** from palette reference
3. **Use same spacing** from spacing reference
4. **Follow typography scale** from typography reference
5. **Apply same animations** from animation reference
6. **Maintain border radius** (rounded-3xl for cards)
7. **Preserve shadows** (shadow-md → shadow-xl on hover)

### **DO NOT:**

❌ Create new color values  
❌ Invent new spacing sizes  
❌ Use different font sizes  
❌ Change border radius values  
❌ Modify shadow intensities  
❌ Alter animation patterns  

### **DO:**

✅ Reuse existing components  
✅ Follow established patterns  
✅ Match visual hierarchy  
✅ Maintain consistency  
✅ Copy animation timing  
✅ Preserve accessibility  

---

## 📚 QUICK REFERENCE

**Most Used Patterns:**

```tsx
// Card
<div className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl">

// Button (Pink)
<Button className="rounded-full bg-gradient-to-r from-pink-500 to-rose-600 
                   text-white hover:from-pink-600 hover:to-rose-700">

// Icon Container
<div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 
                rounded-2xl flex items-center justify-center">

// Section Title
<h2 className="text-xl font-bold mb-4">

// Info Box
<div className="bg-pink-50 rounded-2xl p-3">
```

---

## ✅ CATALOG COMPLETE

**All component patterns documented.**  
**Ready for consistent design additions.**  
**Follow these patterns for all new elements.**

