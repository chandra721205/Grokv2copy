# 🎬 Live Preview - Visual Reference Guide

## 📐 Complete Layout Structure

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│ HEADER                                                                            │
│ ┌──────┐  Live Preview Editor                    [●Unsaved] [Reset] [💾 Save]   │
│ │  X   │  Edit and preview changes in real-time                                  │
│ └──────┘                                                                          │
├──────────────────────────────────────────────────────────────────────────────────┤
│ TOOLBAR                                                                           │
│ Device: [📱Mobile] [Tablet] [🖥️Desktop]                                          │
│ Mode: [Single] [Compare] [Before/After]                      [⛶ Fullscreen]     │
├──────────────────────────────────────────────────────────────────────────────────┤
│ MAIN CONTENT AREA                                                                 │
│ ┌─────────────────────┬────────────────────────────────────────────────────────┐│
│ │ ADMIN EDITOR PANEL  │ LIVE PREVIEW AREA                                      ││
│ │ (450px fixed width) │ (Flexible width)                                       ││
│ │                     │                                                        ││
│ │ ┌─────────────────┐ │  ┌──────────────────────────────────────┐            ││
│ │ │ Basic Info      │ │  │ [Badge] Mobile View                   │            ││
│ │ │ ────────────    │ │  │ [Badge] Summer Season                 │            ││
│ │ │ • Name         │ │  │                                        │            ││
│ │ │ • Category     │ │  │  ┌────────────────────────────┐        │            ││
│ │ │ • Description  │ │  │  │ 🎯 Save 20% - Limited!    │ ← Deal ││            ││
│ │ └─────────────────┘ │  │  ├────────────────────────────┤        │            ││
│ │                     │ │  │  │ [Gradient Image]       │        │            ││
│ │ ┌─────────────────┐ │  │  │ ❤️ Heart  ☀️ Summer     │        │            ││
│ │ │ Pricing         │ │  │  ├────────────────────────────┤        │            ││
│ │ │ ────────────    │ │  │  │ [Category Badge]         │        │            ││
│ │ │ • Base Price   │ │  │  │ Paradise Beach Resort    │        │            ││
│ │ │ • Season       │ │  │  │ Experience luxury...     │        │            ││
│ │ │   [☀️+20%]    │ │  │  │ [Feature] [Feature]      │        │            ││
│ │ └─────────────────┘ │  │  │ From ₹18,000 per person │        │            ││
│ │                     │ │  │  │ [Book Now] [Details]   │        │            ││
│ │ ┌─────────────────┐ │  │  │ [🔍 Google] [📺 YouTube]│        │            ││
│ │ │ Special Offers  │ │  │  └────────────────────────────┘        │            ││
│ │ │ ────────────    │ │  │                                        │            ││
│ │ │ Deal: [ON/OFF] │ │  └──────────────────────────────────────┘            ││
│ │ │ Message: ...   │ │                                                        ││
│ │ └─────────────────┘ │                                                        ││
│ │                     │                                                        ││
│ │ ┌─────────────────┐ │                                                        ││
│ │ │ Localization    │ │                                                        ││
│ │ │ ────────────    │ │                                                        ││
│ │ │ Lang: [🇬🇧 EN] │ │                                                        ││
│ │ └─────────────────┘ │                                                        ││
│ └─────────────────────┴────────────────────────────────────────────────────────┘│
└──────────────────────────────────────────────────────────────────────────────────┘
```

---

## 🎬 Preview Modes Visualization

### Mode 1: Single Preview

```
┌────────────────────────────────────────────────────────┐
│              LIVE PREVIEW AREA                         │
│                                                        │
│    [Badge] Live Preview                                │
│    [Badge] Mobile View                                 │
│    [Badge] Summer Season                               │
│                                                        │
│         ┌────────────────────────┐                     │
│         │                        │                     │
│         │   [Preview Card]       │                     │
│         │   - Updates instantly  │                     │
│         │   - What users see     │                     │
│         │                        │                     │
│         └────────────────────────┘                     │
│                                                        │
└────────────────────────────────────────────────────────┘
```

### Mode 2: Comparison Preview

```
┌────────────────────────────────────────────────────────────────────┐
│                   COMPARISON MODE                                  │
│                                                                    │
│  ┌──────────────────────────┐  ┌──────────────────────────┐      │
│  │ Before (Original)        │  │ After (Edited) ✓         │      │
│  │                          │  │                          │      │
│  │  ┌──────────────────┐   │  │  ┌──────────────────┐   │      │
│  │  │ [Preview Card]   │   │  │  │ [Preview Card]   │   │      │
│  │  │                  │   │  │  │ (purple border)  │   │      │
│  │  │ Original content │   │  │  │ Updated content  │   │      │
│  │  │                  │   │  │  │                  │   │      │
│  │  └──────────────────┘   │  │  └──────────────────┘   │      │
│  │                          │  │                          │      │
│  └──────────────────────────┘  └──────────────────────────┘      │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

### Mode 3: Before/After Slider

```
┌────────────────────────────────────────────────────────┐
│              BEFORE/AFTER MODE                         │
│                                                        │
│     Before ←──────[▮]──────→ After                    │
│                                                        │
│         ┌────────────────────────┐                     │
│         │ Original  ║  Edited   │                     │
│         │ Content   ║  Content  │ ← Slider divider   │
│         │           ║           │                     │
│         │           ║           │                     │
│         │     ╔═════╬═════╗     │ ← Drag handle      │
│         │     ║     ↔     ║     │                     │
│         │     ╚═════╩═════╝     │                     │
│         └────────────────────────┘                     │
│                                                        │
│  Drag the slider to reveal changes!                   │
└────────────────────────────────────────────────────────┘
```

---

## 📱 Device Views

### Mobile View (375px)
```
┌───────────────┐
│               │
│  [Mobile]     │  ← Active button
│               │
│  ┌─────────┐  │
│  │ Preview │  │
│  │  Card   │  │
│  │ 375px   │  │
│  │  wide   │  │
│  └─────────┘  │
│               │
└───────────────┘
```

### Tablet View (768px)
```
┌─────────────────────────────┐
│                             │
│        [Tablet]             │  ← Active button
│                             │
│  ┌───────────────────────┐  │
│  │      Preview Card     │  │
│  │       768px wide      │  │
│  │                       │  │
│  └───────────────────────┘  │
│                             │
└─────────────────────────────┘
```

### Desktop View (1200px+)
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                    [Desktop]                                │  ← Active
│                                                             │
│  ┌───────────────────────────────────────────────────────┐ │
│  │              Preview Card (Full Width)                │ │
│  │              Max 1200px, responsive                   │ │
│  │                                                       │ │
│  └───────────────────────────────────────────────────────┘ │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 🎨 Admin Editor Panel Sections

### Section 1: Basic Information
```
┌────────────────────────────┐
│ ⚙️ Basic Information       │
│                            │
│ Destination Name           │
│ ┌────────────────────────┐ │
│ │ Paradise Beach Resort  │ │
│ └────────────────────────┘ │
│ 23/50 characters           │
│                            │
│ Category                   │
│ ┌────────────────────────┐ │
│ │ Beach Paradise      ▼  │ │
│ └────────────────────────┘ │
│                            │
│ Description                │
│ ┌────────────────────────┐ │
│ │ Experience luxury...   │ │
│ │                        │ │
│ │                        │ │
│ └────────────────────────┘ │
│ 87/200 characters          │
└────────────────────────────┘
```

### Section 2: Pricing Configuration
```
┌────────────────────────────┐
│ 💰 Pricing Configuration   │
│                            │
│ Base Price (₹)             │
│ ┌────────────────────────┐ │
│ │ 15000                  │ │
│ └────────────────────────┘ │
│                            │
│ Preview Season             │
│ ┌────────────────────────┐ │
│ │ ☀️ Summer +20%      ▼  │ │
│ └────────────────────────┘ │
│                            │
│ ┌────────────────────────┐ │
│ │ Seasonal Preview       │ │
│ │ ────────────           │ │
│ │ ₹18,000          +20%  │ │
│ │ From base: ₹15,000     │ │
│ └────────────────────────┘ │
└────────────────────────────┘
```

### Section 3: Special Offers
```
┌────────────────────────────┐
│ 🏷️ Special Offers          │
│                            │
│ Show Deal Overlay          │
│ Display banner     [●─○]   │ ← Toggle ON
│                            │
│ Deal Message               │
│ ┌────────────────────────┐ │
│ │ 🎯 Save 20% Limited!   │ │
│ └────────────────────────┘ │
│ 24/100 characters          │
└────────────────────────────┘
```

### Section 4: Localization
```
┌────────────────────────────┐
│ 🌐 Localization            │
│                            │
│ Preview Language           │
│ ┌────────────────────────┐ │
│ │ 🇬🇧 English         ▼  │ │
│ └────────────────────────┘ │
│                            │
│ ┌────────────────────────┐ │
│ │ ℹ️ Translations preview │ │
│ │ Edit in Content Config │ │
│ └────────────────────────┘ │
└────────────────────────────┘
```

---

## 🎯 Preview Card Breakdown

### Full Card Structure
```
┌────────────────────────────────────┐
│ ┌────────────────────────────────┐ │ ← Deal overlay (if enabled)
│ │ 🎯 Save 20% - Limited Time!    │ │
│ └────────────────────────────────┘ │
├────────────────────────────────────┤
│                                    │
│  [Gradient Image Background]       │
│                                    │
│  ❤️ ← Heart icon (top-right)      │
│                                    │
│  [☀️ Summer] ← Season badge       │
│                                    │
├────────────────────────────────────┤
│ [Beach Paradise] ← Category badge  │
│                                    │
│ Paradise Beach Resort ← Name       │
│                                    │
│ Experience luxury on pristine      │
│ beaches with world-class...        │
│ ↑ Description (3-line clamp)       │
│                                    │
│ [Guided Tours] [Spa] [Restaurant]  │
│ ↑ Feature badges (up to 3)         │
│                                    │
│ From ₹18,000 per person            │
│ ↑ Pricing (seasonal)               │
│                                    │
│ [Book Now]  [View Details]         │
│ ↑ Action buttons                   │
│                                    │
│ [🔍 Search on Google]              │
│ [📺 Browse on YouTube]             │
│ ↑ External browse buttons          │
│                                    │
└────────────────────────────────────┘
```

### Interactive Elements
```
❤️ Heart Icon
   ┌───┐
   │ ❤ │ ← Click to toggle favorite
   └───┘
   Gray (not interested) ↔ Red (interested)

Category Badge
   ┌─────────────────┐
   │ Beach Paradise  │ ← Purple background
   └─────────────────┘

Season Badge
   ┌───────────┐
   │ ☀️ Summer │ ← White background, semi-transparent
   └───────────┘

Feature Badges
   ┌──────────────┐
   │ Guided Tours │ ← Outline style
   └──────────────┘

Buttons
   ┌──────────┐
   │ Book Now │ ← Purple gradient (primary)
   └──────────┘
   
   ┌──────────────┐
   │ View Details │ ← Outline (secondary)
   └──────────────┘

External Browse
   ┌───────────────────────┐
   │ 🔍 Search on Google   │ ← Outline, external icon
   └───────────────────────┘
```

---

## 🎨 Color System

### Admin Panel
```
Background:     #FFFFFF (white)
Borders:        #E5E7EB (gray-200)
Section Titles: #111827 (gray-900)
Field Labels:   #374151 (gray-700)
Helper Text:    #6B7280 (gray-500)
```

### Preview Area
```
Background:     Linear gradient
                from-purple-50 via-blue-50 to-indigo-50

Card Background: #FFFFFF (white)
Card Shadow:    0 25px 50px -12px rgba(0, 0, 0, 0.25)
Card Border:    2px solid #F3F4F6 (gray-100)

Purple Border (Edited):
                4px solid #7C3AED (purple-500)
```

### Buttons
```
Primary (Active):
  Background:   Linear gradient
                from-purple-600 to-indigo-600
  Text:         #FFFFFF (white)

Secondary (Outline):
  Border:       2px solid #E5E7EB (gray-200)
  Text:         #374151 (gray-700)

Disabled:
  Background:   #F3F4F6 (gray-100)
  Text:         #9CA3AF (gray-400)
  Cursor:       not-allowed
```

### Badges
```
Category:
  Background:   #F3E8FF (purple-100)
  Text:         #6B21A8 (purple-700)

Season:
  Background:   rgba(255, 255, 255, 0.9)
  Text:         #111827 (gray-900)

Status (Active):
  Background:   #10B981 (green-500)
  Text:         #FFFFFF (white)

Status (Draft):
  Background:   #F59E0B (amber-500)
  Text:         #FFFFFF (white)

Unsaved Changes:
  Background:   #FEF3C7 (amber-100)
  Text:         #92400E (amber-700)
  Border:       2px solid #FCD34D (amber-300)
```

---

## 📏 Spacing & Sizing

### Admin Panel
```
Width:          450px (fixed)
Padding:        24px (p-6)
Section Gap:    24px (space-y-6)
Field Gap:      16px (space-y-4)
```

### Preview Area
```
Width:          flex-1 (flexible)
Padding:        32px (p-8)
Card Spacing:   16px (gap-4 for comparison)
```

### Preview Card
```
Border Radius:  24px (rounded-3xl)
Padding:        24px (p-6 for content)
Image Height:   256px (h-64)
```

### Buttons
```
Small:
  Padding:      px-3 py-1.5
  Height:       32px (h-8)
  Font:         text-sm

Default:
  Padding:      px-4 py-2
  Height:       40px (h-10)
  Font:         text-base

Large:
  Padding:      px-6 py-3
  Height:       48px (h-12)
  Font:         text-lg
```

### Input Fields
```
Height:         40px (h-10)
Border Radius:  16px (rounded-2xl)
Border:         2px solid
Padding:        px-4
Font:           text-base
```

### Textarea
```
Min Height:     120px (min-h-[120px])
Border Radius:  16px (rounded-2xl)
Border:         2px solid
Padding:        p-4
Font:           text-base
```

---

## 🎭 Animation Effects

### Card Entrance
```
Initial:  opacity: 0, y: 20px
Animate:  opacity: 1, y: 0px
Duration: 300ms
Delay:    index × 100ms (staggered)
```

### Mode Switching
```
Layout animation: smooth morph
Duration: 300ms
Easing: ease-in-out
```

### Before/After Slider
```
Slider handle: draggable
Clip path: dynamic based on position
Transition: none (instant for smooth drag)
```

### Button Hover
```
Transform:     scale(1.02)
Shadow:        enhanced
Duration:      150ms
Easing:        ease-out
```

### Toggle Switches
```
Thumb position: translate(x)
Duration:       200ms
Easing:         cubic-bezier(0.4, 0, 0.2, 1)
```

---

## 📊 State Indicators

### Unsaved Changes Badge
```
┌─────────────────────┐
│ ● Unsaved Changes   │ ← Amber background
└─────────────────────┘
   ↑ Orange dot pulsing
```

### Active Device Button
```
Selected:
┌──────────────┐
│ 📱 Mobile   │ ← Dark background, white text
└──────────────┘

Not Selected:
┌──────────────┐
│ Tablet      │ ← Light background, gray text
└──────────────┘
```

### Active Preview Mode
```
Selected:
┌─────────────┐
│ Compare ✓   │ ← Dark background
└─────────────┘

Not Selected:
┌─────────────┐
│ Single      │ ← Outline only
└─────────────┘
```

### Toggle Switch (Deal Overlay)
```
OFF:  [○────]  ← Gray track, left position
ON:   [────●]  ← Purple track, right position
```

---

## 🔄 Real-Time Update Flow

### Typing in Name Field
```
Admin types: "Paradise"
      ↓ 0ms
State updates: editedData.name = "Paradise"
      ↓ 10ms
React re-renders preview
      ↓ 20ms
Preview card shows "Paradise"
      ↓ 30ms
Character counter updates: "8/50"
      
Total: ~30ms (imperceptible to user)
```

### Toggling Deal Overlay
```
Admin clicks toggle
      ↓ 0ms
State updates: showDealOverlay = true
      ↓ 10ms
Preview re-renders with overlay
      ↓ 50ms
Overlay animates in (slide down)
      ↓ 350ms
Animation completes
      
Total: ~350ms (smooth animation)
```

### Switching Device View
```
Admin clicks "Tablet"
      ↓ 0ms
State updates: deviceType = 'tablet'
      ↓ 10ms
Preview re-renders with new width
      ↓ 300ms
Layout animation completes
      
Total: ~300ms (smooth transition)
```

---

## 🎯 Comparison Mode Details

### Side-by-Side Layout
```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  ┌────────────────────┐    ┌────────────────────┐     │
│  │ Before (Original)  │    │ After (Edited) ✓   │     │
│  ├────────────────────┤    ├────────────────────┤     │
│  │                    │    │                    │     │
│  │ Admin-Added        │    │ Paradise Beach     │ ← Changed
│  │ Destination 1      │    │ Resort             │
│  │                    │    │                    │     │
│  │ [Original desc]    │    │ [Updated desc]     │ ← Changed
│  │                    │    │                    │     │
│  │ ₹15,000           │    │ ₹18,000           │ ← Changed
│  │                    │    │                    │     │
│  └────────────────────┘    └────────────────────┘     │
│   ↑ Normal border           ↑ Purple border (4px)     │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Differences Highlighted
```
Visual Cues:
- Purple border on edited card (4px)
- Green checkmark badge on "After"
- Gray badge on "Before"
- Same device width for fair comparison
- Same seasonal settings applied
```

---

## 🎬 Before/After Slider Mechanics

### Slider at 0% (All Original)
```
┌────────────────────────┐
│ ║                      │ ← Slider at left edge
│ ║ Original Content     │
│ ║ Shows 100%           │
│ ║                      │
└────────────────────────┘
```

### Slider at 50% (Half & Half)
```
┌────────────────────────┐
│ Original  ║  Edited    │ ← Slider in middle
│ Content   ║  Content   │
│ 50%       ║  50%       │
│           ║            │
└────────────────────────┘
```

### Slider at 100% (All Edited)
```
┌────────────────────────┐
│                      ║ │ ← Slider at right edge
│     Edited Content   ║ │
│     Shows 100%       ║ │
│                      ║ │
└────────────────────────┘
```

### Slider Handle
```
       ┌─────┐
       │  ←→ │ ← Drag handle (white circle)
       └─────┘
          ║
          ║    ← Vertical divider line
          ║
```

---

## 📱 Localization Visual Changes

### English (Default)
```
┌────────────────────────┐
│ Book Now               │
│ From ₹18,000           │
│ per person             │
│ View Details           │
└────────────────────────┘
```

### Hindi (हिंदी)
```
┌────────────────────────┐
│ अभी बुक करें           │
│ से ₹18,000             │
│ प्रति व्यक्ति          │
│ विवरण देखें            │
└────────────────────────┘
```

### Marathi (मराठी)
```
┌────────────────────────┐
│ आता बुक करा            │
│ पासून ₹18,000          │
│ प्रति व्यक्ती          │
│ तपशील पहा              │
└────────────────────────┘
```

### Tamil (தமிழ்)
```
┌────────────────────────┐
│ இப்போது முன்பதிவு       │
│ இருந்து ₹18,000        │
│ ஒரு நபருக்கு            │
│ விவரங்களைக் காண்க      │
└────────────────────────┘
```

---

## 🎉 Summary Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                   LIVE PREVIEW SYSTEM                       │
│                                                             │
│  Admin Edits ────────► Instant Update ────────► User View  │
│     (Left)                  (<50ms)               (Right)   │
│                                                             │
│  Features:                                                  │
│  ✅ Zero latency updates                                   │
│  ✅ 3 device views (mobile/tablet/desktop)                 │
│  ✅ 3 preview modes (single/compare/before-after)          │
│  ✅ Seasonal pricing (summer/monsoon/winter)               │
│  ✅ Deal overlays (toggle on/off)                          │
│  ✅ Localization (4 languages)                             │
│  ✅ Save/reset controls                                    │
│  ✅ Unsaved changes tracking                               │
│                                                             │
│  Result: Admin sees EXACTLY what users will see            │
└─────────────────────────────────────────────────────────────┘
```

---

**🎨 Visual Design Complete!**

This guide provides all layout diagrams, component structures, and visual patterns for the Live Preview System.

**Use this guide when:** Creating new preview features, debugging layouts, or understanding the visual hierarchy.

---

**Last Updated:** January 17, 2026  
**Version:** 1.0.0  
**Status:** ✅ Complete Visual Reference
