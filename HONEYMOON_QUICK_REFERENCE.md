# 🌺 Honeymoon & Romance - Quick Reference Card

## 🎨 **DESIGN SYSTEM - At a Glance**

```
┌────────────────────────────────────────────────┐
│  HONEYMOON & ROMANCE TOURISM - CATEGORY #11   │
├────────────────────────────────────────────────┤
│  COLORS                                        │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│  Gradient:  #EC4899 ───→ #E11D48              │
│             from-pink-500 to-rose-600          │
│  Icon:      Heart ❤️                          │
│  Status:    ✅ Established & Consistent       │
├────────────────────────────────────────────────┤
│  TYPOGRAPHY                                    │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│  h1:  text-3xl font-bold (30px)               │
│  h2:  text-xl font-bold (20px)                │
│  h3:  text-lg font-bold (18px)                │
│  p:   text-sm (14px)                          │
│  small: text-xs (12px)                        │
├────────────────────────────────────────────────┤
│  SPACING                                       │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│  Border:  rounded-3xl (24px)                  │
│  Gap:     gap-4 (16px)                        │
│  Padding: p-6 (24px)                          │
│  Margin:  mb-6 (24px)                         │
├────────────────────────────────────────────────┤
│  MOBILE                                        │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│  Width:   375px (primary target)              │
│  Height:  812px (iPhone X/11/12/13)           │
│  Grid:    2 columns for cards                 │
└────────────────────────────────────────────────┘
```

---

## 📊 **CURRENT vs. PROPOSED**

| Element | Current | To Build |
|---------|---------|----------|
| **Screens** | 1 generic | 4 specialized ✨ |
| **Icon** | ❤️ Heart | ❤️ + 🏔️🎿✈️ |
| **Themes** | Generic | Romantic 💑 |
| **Pricing** | Per person | **Per couple** |
| **Inclusions** | None | Dinner/Spa/Décor |

---

## 🏗️ **SCREENS TO BUILD**

### **1️⃣ HoneymoonHub.tsx** (Enhanced Parent)
```
├─ 3 destination cards (Hill, Adventure, International)
├─ Couple activities section
├─ Romantic packages with inclusions
└─ Enhanced romantic copy
```

### **2️⃣ HillStationRetreats.tsx** 🏔️
```
├─ Mountain resort packages
├─ Fireplace & hot chocolate
├─ Scenic viewpoints
└─ Weather recommendations
```

### **3️⃣ AdventureRomance.tsx** 🎿
```
├─ Skiing & snowboarding
├─ Trekking & hiking
├─ Water sports
└─ Adrenaline + intimacy
```

### **4️⃣ InternationalEscapes.tsx** ✈️
```
├─ European romance
├─ Asian cultural
├─ Beach paradises
└─ Visa/currency info
```

---

## 🎯 **COMPONENT TEMPLATE**

```tsx
import { motion } from 'motion/react';
import { Heart, Mountain, Activity, Plane } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export function HoneymoonScreen() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-500 to-rose-600 px-6 pt-12 pb-8 rounded-b-[2rem]">
        <h1 className="text-white text-3xl font-bold">Honeymoon</h1>
        <p className="text-white/80 text-sm">Create unforgettable memories</p>
      </div>

      {/* Destination Cards */}
      <div className="px-6 -mt-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-6 shadow-md"
        >
          {/* Card content */}
        </motion.div>
      </div>
    </div>
  );
}
```

---

## 🔗 **MUST INCLUDE - Every Screen**

✅ Pink-rose gradient header  
✅ Heart icon (or variant)  
✅ Search bar with filter  
✅ Google Search button  
✅ YouTube Browse button  
✅ Back button (top-left)  
✅ Admin placeholders (no real destinations)  
✅ Mobile-first (375px)  
✅ Motion animations  
✅ rounded-3xl cards  

---

## 💑 **ROMANTIC ELEMENTS - Add These**

```tsx
// Couple pricing
<p className="text-2xl font-bold text-pink-600">₹30,000/couple</p>

// Romantic inclusions
<div className="space-y-2">
  <div className="flex items-center gap-2">
    <span>🕯️</span>
    <span>Candlelight dinner</span>
  </div>
  <div className="flex items-center gap-2">
    <span>💆</span>
    <span>Couple spa session</span>
  </div>
  <div className="flex items-center gap-2">
    <span>❤️</span>
    <span>Romantic room décor</span>
  </div>
</div>

// Couple badge
<Badge className="bg-pink-100 text-pink-700">
  💑 For Couples
</Badge>
```

---

## 🎨 **COLOR PALETTE - Copy/Paste**

```css
/* Primary Gradient */
bg-gradient-to-r from-pink-500 to-rose-600

/* Light Background */
bg-gradient-to-br from-pink-50 to-rose-50

/* Text Gradient */
bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent

/* Accent Colors */
text-pink-600  /* Dark pink text */
bg-pink-100    /* Light pink bg */
border-pink-300 /* Pink borders */
ring-pink-400  /* Focus rings */
```

---

## 📐 **LAYOUT TEMPLATE**

```tsx
<div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
  {/* Header - Pink/Rose Gradient */}
  <header className="bg-gradient-to-r from-pink-500 to-rose-600 px-6 pt-12 pb-8 rounded-b-[2rem]">
    {/* Back button, Title, Search */}
  </header>

  {/* Content */}
  <div className="px-6">
    {/* Action Cards (2-column) */}
    <div className="grid grid-cols-2 gap-4 -mt-6 mb-6">
      {/* Cards */}
    </div>

    {/* Destination Cards (Romantic) */}
    <div className="space-y-4 mb-6">
      {/* Package cards */}
    </div>

    {/* Activities (2x2 grid) */}
    <div className="grid grid-cols-2 gap-4 mb-6">
      {/* Activity chips */}
    </div>
  </div>
</div>
```

---

## 🚀 **CHECKLIST - Before Submit**

- [ ] Pink-rose gradient (`from-pink-500 to-rose-600`)
- [ ] Heart icon used
- [ ] rounded-3xl cards (24px radius)
- [ ] Google/YouTube buttons present
- [ ] Admin placeholders (no real destinations)
- [ ] Mobile-first (375px width)
- [ ] Motion animations (fade + slide)
- [ ] Couple pricing (₹X/couple)
- [ ] Romantic inclusions listed
- [ ] Back button works
- [ ] Search bar functional
- [ ] Responsive grid (2-column)

---

## 🎯 **ICONS - Lucide React**

```typescript
import {
  Heart,       // Main category ❤️
  Mountain,    // Hill stations 🏔️
  Activity,    // Adventure 🎿
  Plane,       // International ✈️
  Flame,       // Candlelight 🕯️
  Sparkles,    // Spa 💆
  Sunrise,     // Sunset 🌅
  Utensils,    // Dining 🍽️
  Users,       // Couple 💑
  Gift,        // Inclusions 🎁
  Globe,       // Google 🌍
  Youtube,     // YouTube ▶️
  Search,      // Search 🔍
  Filter,      // Filter 🎯
  ArrowLeft,   // Back ←
  Star,        // Rating ⭐
  MapPin,      // Location 📍
  Calendar     // Duration 📅
} from 'lucide-react';
```

---

## 💾 **QUICK COPY/PASTE SNIPPETS**

### **Destination Card:**
```tsx
<motion.button
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  whileTap={{ scale: 0.95 }}
  className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all"
>
  <div className="h-32 bg-gradient-to-br from-pink-50 to-rose-50 flex items-center justify-center">
    <Mountain className="w-12 h-12 text-pink-600" />
  </div>
  <div className="p-6">
    <h3 className="font-bold text-lg mb-1">Hill Station Retreats</h3>
    <p className="text-sm text-gray-600">Cozy mountain escapes</p>
  </div>
</motion.button>
```

### **Romantic Package Card:**
```tsx
<div className="bg-white rounded-3xl p-6 shadow-md">
  <div className="flex items-start gap-4 mb-4">
    <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center">
      <Heart className="w-8 h-8 text-white" />
    </div>
    <div className="flex-1">
      <h3 className="font-bold text-lg mb-1">Romantic Escape</h3>
      <p className="text-sm text-gray-600">For 2 People • 3N/4D</p>
    </div>
  </div>

  <div className="bg-pink-50 rounded-2xl p-3 mb-4">
    <p className="text-xs font-semibold text-pink-700 mb-2">🎁 Inclusions:</p>
    <ul className="text-xs text-gray-700 space-y-1">
      <li>🕯️ Candlelight dinner</li>
      <li>💆 Couple spa session</li>
      <li>❤️ Romantic room décor</li>
    </ul>
  </div>

  <div className="flex items-center justify-between mb-4">
    <p className="text-sm text-gray-500">Duration</p>
    <p className="text-2xl font-bold text-pink-600">₹30,000/couple</p>
  </div>

  <div className="flex gap-2">
    <Button className="flex-1 bg-white border-2 border-blue-600 text-blue-600 rounded-full h-11">
      <Globe className="w-4 h-4 mr-2" />
      Google
    </Button>
    <Button className="flex-1 bg-red-600 text-white rounded-full h-11">
      <Youtube className="w-4 h-4 mr-2" />
      YouTube
    </Button>
  </div>
</div>
```

### **Activity Filter Chip:**
```tsx
<button className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-600 text-white text-sm font-semibold">
  🕯️ Candlelight
</button>

<button className="px-4 py-2 rounded-full bg-white border-2 border-pink-300 text-pink-700 text-sm font-semibold">
  💆 Spa & Wellness
</button>
```

---

## 📚 **FULL DOCUMENTATION**

For complete details, see:
1. **HONEYMOON_SCREENS_ANALYSIS.md** - Gap analysis
2. **HONEYMOON_DESIGN_AUDIT.md** - Design system
3. **HONEYMOON_VISUAL_REFERENCE.md** - Layouts & specs
4. **HONEYMOON_EXAMINATION_COMPLETE.md** - Summary

---

## ✅ **YOU'RE READY!**

**Status:** ✅ All patterns documented  
**Confidence:** HIGH (clear and consistent)  
**Next:** Start building HoneymoonHub.tsx

---

**🌺 Let's create beautiful honeymoon experiences! 💕**
