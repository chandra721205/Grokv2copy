# 🎨 Admin Dashboard Visual Reference Guide

## 📐 Layout Structure

```
┌─────────────────────────────────────────────────────────────────┐
│ HEADER                                                           │
│ ┌──────┐  GrokYatra Admin Dashboard    [Preview] [Save All]    │
│ │ LOGO │  Comprehensive Content Management                      │
│ └──────┘                                                         │
├─────────────────────────────────────────────────────────────────┤
│ QUICK STATS (4 Cards)                                           │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐           │
│ │   247    │ │    13    │ │  1,834   │ │     8    │           │
│ │Total Dest│ │Categories│ │ Interests│ │ Pending  │           │
│ └──────────┘ └──────────┘ └──────────┘ └──────────┘           │
├─────────────────────────────────────────────────────────────────┤
│ TABS                                                             │
│ [Destination Mgmt] [Content Config] [Analytics] [Tools]        │
├─────────────────────────────────────────────────────────────────┤
│ TAB CONTENT AREA                                                │
│                                                                  │
│ Section-specific content based on active tab                    │
│                                                                  │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🗺️ Tab 1: Destination Management

```
┌─────────────────────────────────────────────────────────────────┐
│ [🔍 Search] [Category ▼] [Status ▼]     [+ Add New Destination]│
├─────────────────────────────────────────────────────────────────┤
│ DESTINATION GRID (3 columns)                                    │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐              │
│ │ [IMAGE]     │ │ [IMAGE]     │ │ [IMAGE]     │              │
│ │ Active ✓    │ │ Active ✓    │ │ Draft 📝    │              │
│ │             │ │             │ │             │              │
│ │ Dest Name 1 │ │ Dest Name 2 │ │ Dest Name 3 │              │
│ │ Heritage    │ │ Beach       │ │ Mountain    │              │
│ │ ₹15,000     │ │ ₹22,000     │ │ ₹18,500     │              │
│ │[Edit][View] │ │[Edit][View] │ │[Edit][View] │              │
│ └─────────────┘ └─────────────┘ └─────────────┘              │
├─────────────────────────────────────────────────────────────────┤
│ SEASONAL PRICING UPDATE (Purple Banner)                         │
│ 🟣 ADMIN EDITABLE CONTENT - LEVEL 4                            │
│ ┌─────────────────────────────────────────────────────────────┐│
│ │ Season [Summer ▼] Adjustment [Increase% ▼] Value [20]      ││
│ │ [Apply to Selected Destinations (247 items)]                ││
│ └─────────────────────────────────────────────────────────────┘│
├─────────────────────────────────────────────────────────────────┤
│ IMAGE UPLOAD TOOL                                               │
│ ┌─────────────────────────────────────────────────────────────┐│
│ │ 🖼️ Destination Image Upload                                 ││
│ │ ╔═══════════════════════════════════════════════════════╗   ││
│ │ ║  📤 Drop destination images here                      ║   ││
│ │ ║  or click to browse your computer                     ║   ││
│ │ ║  [Select Images]                                      ║   ││
│ │ ╚═══════════════════════════════════════════════════════╝   ││
│ │ [Preview 1] [Preview 2] [Preview 3] [Preview 4]            ││
│ └─────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────┘
```

---

## 📝 Tab 2: Content Configuration

```
┌─────────────────────────────────────────────────────────────────┐
│ CATEGORY DESCRIPTIONS EDITOR                                    │
│ ┌─────────────────────────────────────────────────────────────┐│
│ │ 📄 Category Descriptions            [Save All]              ││
│ │ 🟣 ADMIN EDITABLE CONTENT - LEVEL 2                        ││
│ │ ┌─────────────────────────────────────────────────────────┐││
│ │ │ Heritage Sites                                          │││
│ │ │ ┌─────────────────────────────────────────────────────┐│││
│ │ │ │ [Admin: Update category description...]             ││││
│ │ │ └─────────────────────────────────────────────────────┘│││
│ │ │ 0/200 characters • Keep under 50 words                 │││
│ │ └─────────────────────────────────────────────────────────┘││
│ └─────────────────────────────────────────────────────────────┘│
├─────────────────────────────────────────────────────────────────┤
│ FILTER LABELS MANAGER                                           │
│ ┌─────────────────────────────────────────────────────────────┐│
│ │ 🔍 Filter Labels                    [+ Add Filter]         ││
│ │ 🟣 ADMIN EDITABLE CONTENT - LEVEL 3                        ││
│ │ Budget                                                      ││
│ │ [Budget-Friendly ✕] [Mid-Range ✕] [Luxury ✕] [+Add]       ││
│ │ Duration                                                    ││
│ │ [Weekend ✕] [3-5 Days ✕] [Week+ ✕] [+Add]                 ││
│ └─────────────────────────────────────────────────────────────┘│
├─────────────────────────────────────────────────────────────────┤
│ DEAL MESSAGES EDITOR                                            │
│ ┌─────────────────────────────────────────────────────────────┐│
│ │ 🏷️ Deal Messages                    [+ Create Deal]        ││
│ │ 🟣 ADMIN EDITABLE CONTENT - LEVEL 1                        ││
│ │ ┌─────────────────────────────────────────────────────────┐││
│ │ │ [User viewed 3+ destinations]              [ON/OFF ▶]  │││
│ │ │ 🎯 Special Deal: Save 20% on your favorite picks!       │││
│ │ │ 0/100 characters • Keep urgent and action-oriented      │││
│ │ └─────────────────────────────────────────────────────────┘││
│ └─────────────────────────────────────────────────────────────┘│
├─────────────────────────────────────────────────────────────────┤
│ BROWSE INTEGRATION EDITOR                                       │
│ ┌─────────────────────────────────────────────────────────────┐│
│ │ 🌐 Browse Integration Texts                                ││
│ │ 🟣 ADMIN EDITABLE CONTENT - LEVEL 5                        ││
│ │ Google Search Button Text                                   ││
│ │ [🔍 Search on Google]                                      ││
│ │ YouTube Browse Button Text                                  ││
│ │ [📺 Browse on YouTube]                                     ││
│ └─────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────┘
```

---

## 📊 Tab 3: User Interest Analytics

```
┌─────────────────────────────────────────────────────────────────┐
│ POPULAR DESTINATIONS CHART                                      │
│ ┌─────────────────────────────────────────────────────────────┐│
│ │ 📊 Popular Destinations (Top 5)    [Last 7 days ▼]        ││
│ │ ┌───────────────────────────────────────────────────────┐  ││
│ │ │ #1  Admin-Added Dest 1   Views:1234 ❤️:456 Book:89   │  ││
│ │ │ ███████████████████░░░░░░░░░░░░░░░░░░░░░  7.2%       │  ││
│ │ └───────────────────────────────────────────────────────┘  ││
│ │ [Similar for #2, #3, #4, #5]                               ││
│ └─────────────────────────────────────────────────────────────┘│
├─────────────────────────────────────────────────────────────────┤
│ INTEREST TRENDS CHART                                           │
│ ┌─────────────────────────────────────────────────────────────┐│
│ │ 📈 Interest Trends (Heart icon clicks over time)           ││
│ │ ┌───────────────────────────────────────────────────────┐  ││
│ │ │     █                                                  │  ││
│ │ │   ███                   █                             │  ││
│ │ │ ███████       █       █████   █                       │  ││
│ │ │ Mon Tue Wed Thu Fri Sat Sun                           │  ││
│ │ └───────────────────────────────────────────────────────┘  ││
│ │ [This Week: 1,834] [Last Week: 1,678] [Growth: +9.3%]     ││
│ └─────────────────────────────────────────────────────────────┘│
├─────────────────────────────────────────────────────────────────┤
│ DEAL TRIGGERS CONFIGURATION                                     │
│ ┌─────────────────────────────────────────────────────────────┐│
│ │ ⚡ Deal Triggers                    [+ Add Trigger]        ││
│ │ 🟣 ADMIN EDITABLE CONTENT - LEVEL 4                        ││
│ │ ┌─────────────────────────────────────────────────────────┐││
│ │ │ Interest Trigger               [✓ Active]  [ON/OFF ▶]  │││
│ │ │ When: User viewed 3+ destinations                       │││
│ │ │ Then: Send 20% discount deal                           │││
│ │ └─────────────────────────────────────────────────────────┘││
│ └─────────────────────────────────────────────────────────────┘│
├─────────────────────────────────────────────────────────────────┤
│ NOTIFICATION SCHEDULES                                          │
│ ┌─────────────────────────────────────────────────────────────┐│
│ │ 🔔 Notification Schedules                                  ││
│ │ 🟣 ADMIN EDITABLE CONTENT - LEVEL 5                        ││
│ │ Active Hours: [09:00] to [21:00]                           ││
│ │ Frequency Cap: [Max 3 notifications per day ▼]             ││
│ │ Weekend Notifications: [ON/OFF ▶]                          ││
│ └─────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────┘
```

---

## ⚡ Tab 4: Admin Tools

```
┌─────────────────────────────────────────────────────────────────┐
│ WYSIWYG TEXT EDITOR                                             │
│ ┌─────────────────────────────────────────────────────────────┐│
│ │ ✏️ WYSIWYG Text Editor              [Preview] [Save]       ││
│ │ ┌─────────────────────────────────────────────────────────┐││
│ │ │ [B] [I] [U] | [H1] [H2] | [• List] [1. List] | [🔗] [🖼️]│││
│ │ └─────────────────────────────────────────────────────────┘││
│ │ ╔═══════════════════════════════════════════════════════╗ ││
│ │ ║ Start typing your content here...                    ║ ││
│ │ ║                                                       ║ ││
│ │ ║ You can use the toolbar above to format text...      ║ ││
│ │ ║                                                       ║ ││
│ │ ╚═══════════════════════════════════════════════════════╝ ││
│ │ 0/2000 characters • 0 words • 0 paragraphs                 ││
│ └─────────────────────────────────────────────────────────────┘│
├─────────────────────────────────────────────────────────────────┤
│ BULK UPDATE TOOL                                                │
│ ┌─────────────────────────────────────────────────────────────┐│
│ │ 🔄 Bulk Update Capabilities                                ││
│ │ Select Items: [All Destinations (247) ▼]                   ││
│ │ Update Type: [Pricing Adjustment ▼]                        ││
│ │ New Value: [Enter new value or adjustment...]              ││
│ │ ┌─────────────────────────────────────────────────────────┐││
│ │ │ ⚠️ Preview Changes Before Applying                     │││
│ │ │ You'll see a preview of all changes before they're     │││
│ │ │ saved. You can review and confirm each update.         │││
│ │ └─────────────────────────────────────────────────────────┘││
│ │ [Preview Bulk Update (0 items selected)]                   ││
│ └─────────────────────────────────────────────────────────────┘│
├─────────────────────────────────────────────────────────────────┤
│ IMAGE OPTIMIZATION TOOL                                         │
│ ┌─────────────────────────────────────────────────────────────┐│
│ │ 🖼️ Image Optimization Preview                              ││
│ │ ┌──────────────────┐ ┌──────────────────┐                  ││
│ │ │ ORIGINAL         │ │ OPTIMIZED        │                  ││
│ │ │ [Image Preview]  │ │ [Image Preview]  │                  ││
│ │ │ 2.4 MB           │ │ 348 KB           │                  ││
│ │ │ 2400x1600px      │ │ 1200x800px       │                  ││
│ │ └──────────────────┘ └──────────────────┘                  ││
│ │ Size Reduction: 85.5%                                       ││
│ │ ████████████████████████████████░░░░░░░                    ││
│ │ Settings:                                                   ││
│ │ ✓ Auto-resize to 1200px width     [ON/OFF ▶]               ││
│ │ ✓ Convert to WebP format          [ON/OFF ▶]               ││
│ │ ✓ Generate thumbnails             [ON/OFF ▶]               ││
│ │ ✓ Strip metadata                  [ON/OFF ▶]               ││
│ │ [✓ Apply Optimization & Upload]                            ││
│ └─────────────────────────────────────────────────────────────┘│
├─────────────────────────────────────────────────────────────────┤
│ CONTENT SCHEDULING CALENDAR                                     │
│ ┌─────────────────────────────────────────────────────────────┐│
│ │ 📅 Content Scheduling Calendar     [+ Schedule Update]     ││
│ │ ┌─────────────────────────────────────────────────────────┐││
│ │ │ Sun Mon Tue Wed Thu Fri Sat                             │││
│ │ │  1   2   3   4   5   6   7                              │││
│ │ │  8   9  10  11  12  13  14                              │││
│ │ │ 15  16  17  18  19  20  21                              │││
│ │ │ 22  23  24  25  26  27  28                              │││
│ │ │ [Purple dots on dates with scheduled updates]           │││
│ │ └─────────────────────────────────────────────────────────┘││
│ │ Upcoming Scheduled Updates:                                 ││
│ │ ┌─────────────────────────────────────────────────────────┐││
│ │ │ 🕐 Summer Season Pricing Update                  [Edit] │││
│ │ │    2026-01-20 • pricing                                 │││
│ │ └─────────────────────────────────────────────────────────┘││
│ └─────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────┘
```

---

## 🎨 Color System

### Gradient Combinations

```
Purple-Indigo (Primary)
██████████████████████
from-purple-600 to-indigo-600

Blue-Cyan (Secondary)
██████████████████████
from-blue-500 to-cyan-500

Orange-Red (Interest/Heart)
██████████████████████
from-orange-500 to-red-500

Green-Emerald (Success)
██████████████████████
from-green-500 to-emerald-500

Amber-Yellow (Warning)
██████████████████████
from-amber-500 to-yellow-500
```

### Background Gradients

```
Dashboard Background
██████████████████████
from-purple-50 via-blue-50 to-indigo-50

Card Hover Gradient
██████████████████████
from-purple-50 to-blue-50

Admin Section Background
██████████████████████
Level-specific colors (purple/indigo/blue/cyan/gray)
```

---

## 📐 Component Sizes

### Cards
```
┌─────────────────────┐
│ Rounded: 24px       │  rounded-3xl
│ Border: 2px solid   │  border-2
│ Padding: 24px       │  p-6
│ Shadow: hover XL    │  hover:shadow-xl
└─────────────────────┘
```

### Buttons
```
Primary (Large)
┌───────────────────────┐
│  🔥 ADMIN DASHBOARD   │  h-12, rounded-2xl
└───────────────────────┘

Secondary (Medium)
┌─────────────┐
│  Edit  👁️   │  h-10, rounded-2xl
└─────────────┘

Icon (Small)
┌───┐
│ ✕ │  h-8, w-8, rounded-full
└───┘
```

### Inputs
```
Text Input
┌─────────────────────────────────────┐
│ [Admin: Enter text...]              │  h-10, rounded-2xl, border-2
└─────────────────────────────────────┘

Textarea
┌─────────────────────────────────────┐
│ [Admin: Enter description...]       │  min-h-[100px]
│                                     │  rounded-2xl
│                                     │  border-2
└─────────────────────────────────────┘

Select Dropdown
┌─────────────────────┐
│ Choose option...  ▼ │  h-10, rounded-2xl, border-2
└─────────────────────┘
```

---

## 🎨 Admin Content Level Indicators

### Level 1 - Purple Banner
```
┌─────────────────────────────────────────────────────────┐
│ 🟣 ADMIN EDITABLE CONTENT - LEVEL 1                     │
│ Headers/Titles                                          │
└─────────────────────────────────────────────────────────┘
```

### Level 2 - Indigo Banner
```
┌─────────────────────────────────────────────────────────┐
│ 🟣 ADMIN EDITABLE CONTENT - LEVEL 2                     │
│ Section Headings                                        │
└─────────────────────────────────────────────────────────┘
```

### Level 3 - Blue Banner
```
┌─────────────────────────────────────────────────────────┐
│ 🟣 ADMIN EDITABLE CONTENT - LEVEL 3                     │
│ Filter Labels • Batch Update: 9 items                   │
└─────────────────────────────────────────────────────────┘
```

### Level 4 - Cyan Banner
```
┌─────────────────────────────────────────────────────────┐
│ 🟣 ADMIN EDITABLE CONTENT - LEVEL 4                     │
│ Card Content • Batch Update: 247 items                  │
└─────────────────────────────────────────────────────────┘
```

### Level 5 - Gray Banner
```
┌─────────────────────────────────────────────────────────┐
│ 🟣 ADMIN EDITABLE CONTENT - LEVEL 5                     │
│ Helper Text                                             │
└─────────────────────────────────────────────────────────┘
```

---

## 🎯 Annotation System Visualization

### Collapsed State
```
┌─────────────────────────────────────────────────────────┐
│ 🔵 🟣 🟢 🟡 📋 View Component Annotations (4)      ▼    │
└─────────────────────────────────────────────────────────┘
```

### Expanded State
```
┌─────────────────────────────────────────────────────────┐
│ 🔵 🟣 🟢 🟡 📋 View Component Annotations (4)      ▲    │
├─────────────────────────────────────────────────────────┤
│ [All Annotations] [🔵 PURPOSE] [🟣 ADMIN] [🟢 TECH] [🟡 FLOW] │
├─────────────────────────────────────────────────────────┤
│ 🔵 PURPOSE ANNOTATION                                   │
│ ┌───────────────────────────────────────────────────┐   │
│ │ 🎯 Why This Exists                                │   │
│ │ This feature exists because...                    │   │
│ │                                                   │   │
│ │ 👤 User Benefit                                   │   │
│ │ Users benefit by...                               │   │
│ │                                                   │   │
│ │ 💼 Business Value                                 │   │
│ │ Business gains...                                 │   │
│ └───────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

---

## 📊 Status Badges

### Active Status
```
┌─────────┐
│ ✓ Active│  bg-green-500, text-white
└─────────┘
```

### Draft Status
```
┌─────────┐
│ 📝 Draft│  bg-amber-500, text-white
└─────────┘
```

### Category Badge
```
┌──────────────────────┐
│ User viewed 3+ dest  │  bg-purple-100, text-purple-700
└──────────────────────┘
```

---

## 🎯 Interactive States

### Card Hover Effect
```
Normal State:
┌─────────────────┐
│ Destination     │  border-2 border-gray-100
│ Card            │  shadow-none
└─────────────────┘

Hover State:
┌═════════════════┐
║ Destination     ║  border-2 border-gray-100
║ Card            ║  shadow-xl (elevated)
└═════════════════┘
```

### Button States
```
Default:
┌────────────┐
│    Edit    │  bg-gradient, opacity-100
└────────────┘

Hover:
┌════════════┐
│    Edit    │  bg-gradient, opacity-90, shadow-lg
└════════════┘

Active:
┌════════════┐
│    Edit    │  bg-gradient, opacity-80, scale-95
└════════════┘

Disabled:
┌────────────┐
│    Edit    │  bg-gray-300, opacity-50, cursor-not-allowed
└────────────┘
```

---

## 📱 Responsive Breakpoints

### Desktop (1400px+)
```
4-column Quick Stats
3-column Destination Grid
Side-by-side Editors
```

### Tablet (768px - 1399px)
```
2-column Quick Stats
2-column Destination Grid
Stacked Editors
```

### Mobile (< 768px)
```
Note: Dashboard optimized for desktop/tablet
Recommend using desktop/tablet for admin tasks
```

---

## 🎨 Icon Reference

### Section Icons
- 🗺️ MapPin - Destination Management
- 📝 FileText - Content Configuration
- 📊 TrendingUp - User Interest Analytics
- ⚡ Zap - Admin Tools

### Action Icons
- ✏️ Edit3 - Edit action
- 👁️ Eye - Preview action
- 💾 Save - Save action
- 🗑️ Trash2 - Delete action
- ➕ Plus - Add new action
- 🔄 RefreshCw - Refresh/Update action

### Status Icons
- ✓ CheckCircle2 - Success/Completed
- ⚠️ AlertCircle - Warning/Attention
- 🔔 Bell - Notifications
- 🕐 Clock - Scheduled/Time

### Content Type Icons
- 🖼️ ImageIcon - Images
- 📄 FileText - Documents
- 🏷️ Tag - Tags/Labels
- 🎯 Target - Goals/Deals
- 📈 BarChart3 - Analytics

---

## 🎨 Typography Scale

### Headings
```
Dashboard Title (h1)
GrokYatra Admin Dashboard
text-2xl font-bold

Section Title (h3)
Destination Management
text-lg font-bold

Card Title (h4)
Popular Destinations
text-base font-bold
```

### Body Text
```
Description (p)
Comprehensive Content Management System
text-sm text-gray-600

Helper Text (small)
0/200 characters • Keep under 50 words
text-xs text-gray-500
```

### Labels
```
Form Label
Category Description
text-sm font-semibold text-gray-700
```

---

## 🎯 Spacing System

### Margins & Padding
```
Container: max-w-[1400px] mx-auto px-6 py-8
Section Gap: space-y-6 (24px)
Card Padding: p-6 (24px)
Button Padding: px-6 py-3 (24px x 12px)
```

### Grid Gaps
```
Quick Stats: gap-4 (16px)
Destination Grid: gap-6 (24px)
Form Elements: gap-3 (12px)
```

---

**🎨 Visual Design Complete!**

This guide provides all visual patterns, layouts, and design tokens used in the Admin Dashboard.

**Reference:** Use this guide when creating new sections or modifying existing designs to maintain consistency.

---

**Last Updated:** January 17, 2026  
**Version:** 1.0.0
