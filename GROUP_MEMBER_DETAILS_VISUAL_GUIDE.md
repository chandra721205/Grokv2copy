# Group Member Details - Visual Guide

## 🎨 Screen States

### State 1: Initial View (No Travelers Added)
```
┌─────────────────────────────────────────────┐
│ 🔧 [Admin: This section title can be       │
│    customized]                              │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│ 👤 Group Member Details (Optional but      │
│    Recommended)                             │
│                                             │
│ Adding individual details helps us plan    │
│ better: age-appropriate activities,        │
│ accessibility, dietary needs, etc.          │
│                                             │
│ ┌─────────────────────────────────────┐   │
│ │  0 of 4 travelers added            │   │
│ │  4 more to go                      │ ○ │
│ │                                    │ 0%│
│ └─────────────────────────────────────┘   │
│                                             │
│ ┌─────────────────────────────────────┐   │
│ │         + Add Person                │   │
│ └─────────────────────────────────────┘   │
│ (dashed blue border)                       │
│                                             │
│ Click "Add Person" to provide details      │
│ for each traveler                          │
└─────────────────────────────────────────────┘
```

### State 2: Modal - Add Traveler
```
┌─────────────────────────────────────────────┐
│ [Gradient Header: Blue → Purple]           │
│ Add Traveler Details                    ✕ │
│ Fill in as much detail as possible         │
└─────────────────────────────────────────────┘
│ [Scrollable Content]                       │
│                                             │
│ 👤 Basic Information                       │
│ ┌─────────────┐  ┌─────────────┐         │
│ │ Full Name*  │  │ Age*        │         │
│ └─────────────┘  └─────────────┘         │
│ Age Group: Adults (19-59 years)           │
│ ┌─────────────┐  ┌─────────────┐         │
│ │ Gender      │  │ Relation    │         │
│ └─────────────┘  └─────────────┘         │
│                                             │
│ 🚨 Medical & Accessibility                │
│ ☐ Diabetes        ☐ Heart Condition       │
│ ☐ Asthma          ☐ Arthritis             │
│ ☐ High BP         ☐ Low BP                │
│ ☑ Requires Mobility Assistance            │
│   ┌─────────────────────────────┐         │
│   │ Mobility Details            │         │
│   └─────────────────────────────┘         │
│                                             │
│ 🍽️ Dietary Preferences                    │
│ ☐ Vegetarian      ☐ Vegan                 │
│ ☐ Gluten-Free     ☐ Lactose Intolerant    │
│ ☐ Nut Allergies   ☐ Halal                 │
│   ┌─────────────────────────────┐         │
│   │ Allergies & Sensitivities   │         │
│   └─────────────────────────────┘         │
│                                             │
│ ❤️ Interests & Preferences                │
│ ☐ Photography     ☐ Adventure             │
│ ☐ History         ☐ Culture               │
│ ☐ Nature          ☐ Wildlife              │
│   ┌─────────────────────────────┐         │
│   │ Special Requests            │         │
│   └─────────────────────────────┘         │
│                                             │
│ 📅 Emergency Contact (Optional)           │
│ ┌──────┐  ┌──────┐  ┌──────┐            │
│ │ Name │  │Phone │  │Relat │            │
│ └──────┘  └──────┘  └──────┘            │
│                                             │
└─────────────────────────────────────────────┘
│ [Footer]                                   │
│ ┌─────────┐  ┌────────────────────────┐  │
│ │ Cancel  │  │  Add Traveler          │  │
│ └─────────┘  └────────────────────────┘  │
└─────────────────────────────────────────────┘
```

### State 3: Traveler Card (Collapsed)
```
┌─────────────────────────────────────────────┐
│ Added Travelers                             │
│                                             │
│ ┌─────────────────────────────────────────┐│
│ │ 👨  Rahul Sharma                      ✏️🗑│
│ │     25 years  │  Self  │ 🦽 Mobility   ││
│ │                🚨 Medical  🍽️ Dietary    ││
│ │     ▼ View Full Details                 ││
│ └─────────────────────────────────────────┘│
└─────────────────────────────────────────────┘

Age Group Color Codes:
👶 Kids    → Yellow badge
🧒 Teens   → Purple badge
👨 Adults  → Green badge
👴 Seniors → Teal badge
```

### State 4: Traveler Card (Expanded)
```
┌─────────────────────────────────────────────┐
│ 👨  Rahul Sharma                      ✏️🗑 │
│     25 years  │  Self  │ 🦽 Mobility      │
│                🚨 Medical  🍽️ Dietary       │
│     ▲ Show Less                            │
│ ────────────────────────────────────────── │
│ Medical Conditions:                        │
│ Diabetes, High Blood Pressure             │
│                                             │
│ Mobility Details:                          │
│ Requires wheelchair, prefers ground floor  │
│ rooms                                       │
│                                             │
│ Dietary Restrictions:                      │
│ Vegetarian, Lactose Intolerant            │
│                                             │
│ Allergies:                                 │
│ Peanuts, shellfish                         │
│                                             │
│ Interests:                                 │
│ Photography  History  Culture              │
│                                             │
│ Special Requests:                          │
│ Prefers quiet rooms away from elevator     │
│                                             │
│ Emergency Contact:                         │
│ Priya Sharma (Wife) - +91 98765 43210     │
└─────────────────────────────────────────────┘
```

### State 5: Progress Complete
```
┌─────────────────────────────────────────────┐
│ ┌─────────────────────────────────────┐   │
│ │  4 of 4 travelers added            │   │
│ │  All travelers added! ✨           │ ● │
│ │                                    │100│
│ └─────────────────────────────────────┘   │
│                                             │
│ [Traveler Cards Listed]                    │
│                                             │
│ ┌─────────────────────────────────────┐   │
│ │ Save 4 Travelers & Continue         │   │
│ └─────────────────────────────────────┘   │
│ (Green gradient button)                    │
│                                             │
│ You can always edit these details later    │
└─────────────────────────────────────────────┘
```

## 🎨 Color Palette

### Primary Colors
```
Blue Gradient:   from-blue-600 to-purple-600
Green Success:   from-green-600 to-emerald-600
Orange Gradient: from-orange-400 to-orange-500
```

### Age Group Badges
```
Kids (0-12):    bg-yellow-500 text-white
Teens (13-18):  bg-purple-500 text-white
Adults (19-59): bg-green-500 text-white
Seniors (60+):  bg-teal-500 text-white
```

### Status Badges
```
Age:          bg-blue-100 text-blue-700
Relation:     bg-purple-100 text-purple-700
Mobility:     bg-teal-100 text-teal-700
Medical:      bg-red-100 text-red-700
Dietary:      bg-orange-100 text-orange-700
Interests:    bg-pink-100 text-pink-700
```

### Admin Markers
```
Banner:       bg-purple-100 border-l-4 border-purple-600
Text BG:      bg-gray-100 px-2 py-1 rounded
Border:       border-2 border-dashed border-blue-300
```

## 📐 Spacing & Sizing

### Card Dimensions
```
Rounded:   rounded-2xl (16px) | rounded-3xl (24px)
Padding:   p-4 (16px) | p-6 (24px)
Gap:       gap-2 (8px) | gap-3 (12px) | gap-4 (16px)
Shadow:    shadow-md | shadow-lg
```

### Typography
```
H1:        text-2xl font-bold
H2:        text-xl font-bold
H3:        text-lg font-bold
H4:        text-base font-bold
Body:      text-sm
Caption:   text-xs
```

### Buttons
```
Primary:   py-4 rounded-2xl font-bold
           bg-gradient-to-r from-blue-600 to-purple-600
           
Secondary: py-3 rounded-xl font-semibold
           bg-gray-200 text-gray-700

Icon:      w-8 h-8 rounded-lg
           bg-blue-100 text-blue-600
```

## 🎬 Animations

### Modal
```
Entry:  y: 100% → y: 0 (slide up)
Exit:   y: 0 → y: 100% (slide down)
Type:   Spring (damping: 25, stiffness: 300)
```

### Cards
```
Entry:  opacity: 0, y: 20 → opacity: 1, y: 0
Delay:  index * 0.05 (staggered)
```

### Expand/Collapse
```
Expand:   height: 0 → height: auto
Collapse: height: auto → height: 0
Timing:   opacity transition concurrent
```

### Button Press
```
Active:  scale: 1 → scale: 0.98
Hover:   shadow-lg → shadow-xl
```

## 📱 Responsive Breakpoints

### Mobile (default)
```
Modal:      Full width, slide from bottom
Cards:      Single column
Buttons:    Full width
Min Touch:  44px (accessibility)
```

### Tablet (sm: 640px+)
```
Modal:      max-w-2xl, centered
Grid:       grid-cols-2 for checkboxes
```

### Desktop (lg: 1024px+)
```
Modal:      Centered with rounded-3xl
Grid:       grid-cols-4 for group types
Container:  max-w-2xl mx-auto
```

## 🔍 Icon Reference

```
User:           <User />        Basic info
AlertCircle:    <AlertCircle /> Medical
Utensils:       <Utensils />    Dietary
Heart:          <Heart />       Interests
Calendar:       <Calendar />    Emergency contact
Wheelchair:     <Wheelchair />  Mobility
Plus:           <Plus />        Add person
Edit2:          <Edit2 />       Edit
Trash2:         <Trash2 />      Delete
X:              <X />           Close
ChevronDown:    <ChevronDown /> Expand
ChevronUp:      <ChevronUp />   Collapse
```

## 🎯 Interactive States

### Button States
```
Default:   bg-blue-600 text-white
Hover:     bg-blue-700 shadow-xl
Active:    scale-[0.98]
Disabled:  bg-gray-300 text-gray-500 cursor-not-allowed
```

### Input States
```
Default:   border-2 border-gray-200
Focus:     border-blue-400 outline-none
Error:     border-red-400
Success:   border-green-400
```

### Checkbox States
```
Unchecked: border-2 border-gray-300
Checked:   bg-blue-600 text-white
Hover:     ring-2 ring-blue-400
```

## 📊 Data Flow Diagram

```
┌─────────────────┐
│  GroupDetails   │
│  totalTravelers │
│  ageGroupCounts │
└────────┬────────┘
         │
         ↓
┌─────────────────────────────┐
│ GroupMemberDetailsManager   │
│ • Manages traveler list     │
│ • Opens modal on "Add"      │
│ • Handles save              │
└────────┬────────────────────┘
         │
         ↓
┌─────────────────────────────┐
│ Modal Form                  │
│ • Collects traveler data    │
│ • Validates required fields │
│ • Saves to parent state     │
└────────┬────────────────────┘
         │
         ↓
┌─────────────────────────────┐
│ Traveler Card               │
│ • Displays summary          │
│ • Edit/Delete actions       │
│ • Expand for full details   │
└─────────────────────────────┘
         │
         ↓
┌─────────────────────────────┐
│ Save & Continue Button      │
│ • Passes data to next step  │
│ • Includes all travelers    │
└─────────────────────────────┘
```

## ✅ Accessibility Checklist

```
☑ ARIA labels on all buttons
☑ Keyboard navigation support
☑ Focus indicators visible
☑ Color contrast ratio ≥ 4.5:1
☑ Touch targets ≥ 44px
☑ Screen reader compatible
☑ Skip links for long forms
☑ Error messages descriptive
☑ Form labels associated
☑ Modal traps focus properly
```

## 🎊 Visual Hierarchy

```
Level 1: Page Title          (text-2xl, gradient header)
Level 2: Section Headers     (text-lg, with icons)
Level 3: Subsections         (text-base, font-bold)
Level 4: Field Labels        (text-xs, font-medium)
Level 5: Helper Text         (text-xs, text-gray-600)
```

---

**Quick Reference:**  
• **Add Person Button:** Dashed blue border, center icon  
• **Traveler Cards:** White bg, rounded-2xl, shadow-md  
• **Edit/Delete:** Icon buttons, 32px square  
• **Progress Circle:** SVG, 64px diameter, shows %  
• **Save Button:** Green gradient, full width, rounded-xl  

**Status:** ✅ COMPLETE  
**Last Updated:** January 30, 2026
