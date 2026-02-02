# 🎨 CUSTOM TOUR BUILDER - VISUAL GUIDE

## Complete Visual Walkthrough of All 4 Steps

---

## 📱 **TRIGGER BUTTON (FAB)**

```
                                    ┌─────────────────────────┐
                                    │                         │
                                    │                         │
                                    │                         │
                                    │    ┌──────────────────┐ │
                                    │    │  + BUILD CUSTOM  │ │
                                    │    │   PILGRIMAGE     │ │
                                    │    └──────────────────┘ │
                                    │      (FAB - Fixed      │
                                    │       bottom-right)    │
                                    └─────────────────────────┘
```

**Click Action:** Opens Custom Tour Builder Dialog

---

## 🎯 **STEP 1: BASICS**

```
┌────────────────────────────────────────────────────────┐
│ 🟠 Build Your Custom Pilgrimage                    [X] │
│    Step 1 of 4: Basics                                 │
│    ████▒▒▒▒ (Progress: 25%)                            │
├────────────────────────────────────────────────────────┤
│                                                        │
│  ┌─ Travel Dates ─────────────────────────────────┐   │
│  │ 📅 Travel Dates                                │   │
│  │                                                │   │
│  │ Start Date:  [____________] (date picker)      │   │
│  │ End Date:    [____________] (date picker)      │   │
│  └────────────────────────────────────────────────┘   │
│  (Orange theme: border-orange-200, bg-orange-50)      │
│                                                        │
│  ┌─ Group Size ──────────────────────────────────┐   │
│  │ 👥 Group Size                                  │   │
│  │                                                │   │
│  │ ⦿ 1-5 people                                   │   │
│  │ ○ 6-15 people                                  │   │
│  │ ○ 16+ people                                   │   │
│  └────────────────────────────────────────────────┘   │
│  (Blue theme: border-blue-200, bg-blue-50)            │
│                                                        │
│  ┌─ Budget Range ────────────────────────────────┐   │
│  │ 💲 Budget Range (per person)                   │   │
│  │                                                │   │
│  │ Minimum ₹    Maximum ₹                         │   │
│  │ [________]   [________]                        │   │
│  └────────────────────────────────────────────────┘   │
│  (Green theme: border-green-200, bg-green-50)         │
│                                                        │
├────────────────────────────────────────────────────────┤
│                           [Next Step →]                │
└────────────────────────────────────────────────────────┘
```

**Form Fields:**
- ✅ Start Date (type="date")
- ✅ End Date (type="date")
- ✅ Group Size (radio: 1-5, 6-15, 16+)
- ✅ Budget Min (type="number")
- ✅ Budget Max (type="number")

**Navigation:**
- Next Step → (goes to Step 2)

---

## 🎯 **STEP 2: SPECIAL NEEDS**

```
┌────────────────────────────────────────────────────────┐
│ 🟣 Build Your Custom Pilgrimage                    [X] │
│    Step 2 of 4: Special Needs                          │
│    ████████▒▒ (Progress: 50%)                          │
├────────────────────────────────────────────────────────┤
│                                                        │
│  ┌─ Accessibility & Medical Support ─────────────┐   │
│  │                                                │   │
│  │ ☐ ♿ Senior care needed                        │   │
│  │ ☐ 👨‍⚕️ Medical assistance required              │   │
│  └────────────────────────────────────────────────┘   │
│  (Purple theme: border-purple-200, bg-purple-50)      │
│                                                        │
│  ┌─ Dietary Preferences ─────────────────────────┐   │
│  │ 🍽️ Dietary Preferences                         │   │
│  │                                                │   │
│  │ [Select dietary preference ▼]                  │   │
│  │   • Vegetarian                                 │   │
│  │   • Vegan                                      │   │
│  │   • Jain (No onion/garlic)                     │   │
│  │   • Sattvic                                    │   │
│  │   • No restrictions                            │   │
│  └────────────────────────────────────────────────┘   │
│  (Orange theme: border-orange-200, bg-orange-50)      │
│                                                        │
│  ┌─ Ritual Preferences ──────────────────────────┐   │
│  │ 🕉️ Ritual Preferences                          │   │
│  │                                                │   │
│  │ [Select ritual preference ▼]                   │   │
│  │   • Traditional Puja                           │   │
│  │   • Archana/Abhishekam                         │   │
│  │   • Simple Darshan                             │   │
│  │   • Guided Rituals                             │   │
│  │   • Observation Only                           │   │
│  └────────────────────────────────────────────────┘   │
│  (Blue theme: border-blue-200, bg-blue-50)            │
│                                                        │
├────────────────────────────────────────────────────────┤
│  [← Back]                         [Next Step →]       │
└────────────────────────────────────────────────────────┘
```

**Form Fields:**
- ✅ Senior Care (checkbox)
- ✅ Medical Assistance (checkbox)
- ✅ Dietary Preferences (dropdown)
- ✅ Ritual Preferences (dropdown)

**Navigation:**
- ← Back (goes to Step 1)
- Next Step → (goes to Step 3)

---

## 🎯 **STEP 3: SPIRITUAL FOCUS** ⭐ (ENHANCED)

```
┌────────────────────────────────────────────────────────┐
│ 🔵 Build Your Custom Pilgrimage                    [X] │
│    Step 3 of 4: Spiritual Focus                        │
│    ████████████▒ (Progress: 75%)                       │
├────────────────────────────────────────────────────────┤
│                                                        │
│  ┌─ Primary Deity Focus ─────────────────────────┐   │
│  │ ✨ Primary Deity Focus                         │   │
│  │ ADMIN_Primary_Deity_Label                      │   │
│  │                                                │   │
│  │ ┌─ Pre-selected from previous page: ─────┐    │   │
│  │ │ 🕉️ Shiva                               │    │   │
│  │ └──────────────────────────────────────────┘    │   │
│  │                                                │   │
│  │ [Admin: Select primary deity ▼]               │   │
│  │   🕉️ Shiva                                     │   │
│  │   🪷 Vishnu                                    │   │
│  │   🌺 Shakti (Devi)                             │   │
│  │   🐘 Ganesha                                   │   │
│  │   🦚 Murugan                                   │   │
│  │   ... (more deities)                           │   │
│  └────────────────────────────────────────────────┘   │
│  (Blue theme: border-blue-200, bg-blue-50)            │
│                                                        │
│  ┌─ Include Sacred Circuits ──────────────────────┐  │
│  │ 🏆 Include Sacred Circuits                      │  │
│  │ ADMIN_Circuits_Selection_Label                  │  │
│  │ [Admin: Select circuits to include]             │  │
│  │                                                  │  │
│  │ ┌─────────────────────────────────────────┐    │  │
│  │ │ ☐ 🕉️ 12 Jyotirlingas [MOST SACRED]      │    │  │
│  │ │    Sacred Shiva Shrines                 │    │  │
│  │ │    [Admin: 12 sacred Shiva temples...]  │    │  │
│  │ └─────────────────────────────────────────┘    │  │
│  │                                                  │  │
│  │ ┌─────────────────────────────────────────┐    │  │
│  │ │ ☑ 🪔 Char Dham Yatra [HIGHLY AUSPICIOUS] │    │  │
│  │ │    Four Sacred Abodes                    │    │  │
│  │ │    [Admin: 4 sacred Himalayan shrines...]│    │  │
│  │ └─────────────────────────────────────────┘    │  │
│  │                                                  │  │
│  │ ┌─────────────────────────────────────────┐    │  │
│  │ │ ☐ 🔱 51 Shakti Peethas [DIVINE FEMININE] │    │  │
│  │ │    Goddess Power Sites                   │    │  │
│  │ │    [Admin: 51 sacred Devi temples...]    │    │  │
│  │ └─────────────────────────────────────────┘    │  │
│  │                                                  │  │
│  │ ... (3 more circuits)                            │  │
│  │                                                  │  │
│  │ ┌─────────────────────────────────────────┐    │  │
│  │ │ 💡 Selected circuits: 1                  │    │  │
│  │ └─────────────────────────────────────────┘    │  │
│  └──────────────────────────────────────────────────┘  │
│  (Orange theme: border-orange-200, bg-orange-50)       │
│  (Scrollable: max-h-80)                                │
│                                                         │
│  ┌─ Additional Deities (Optional) ────────────────┐   │
│  │ ❤️ Additional Deities (Optional)               │   │
│  │ ADMIN_Additional_Deities_Label                 │   │
│  │ [Admin: Select other deities to include]      │   │
│  │                                                │   │
│  │ ☐ 🕉️ Shiva                                     │   │
│  │ ☐ 🪷 Vishnu                                    │   │
│  │ ☐ 🌺 Shakti (Devi)                             │   │
│  │ ☐ 🐘 Ganesha                                   │   │
│  │ ... (more deities)                             │   │
│  └────────────────────────────────────────────────┘   │
│  (Purple theme: border-purple-200, bg-purple-50)      │
│  (Scrollable: max-h-48)                               │
│                                                        │
├────────────────────────────────────────────────────────┤
│  [← Back]                         [Next Step →]       │
└────────────────────────────────────────────────────────┘
```

**Form Fields:**
- ✅ Primary Deity (dropdown with emojis)
- ✅ Sacred Circuits (checkboxes - 6 circuits):
  - 🕉️ 12 Jyotirlingas [MOST SACRED]
  - 🪔 Char Dham Yatra [HIGHLY AUSPICIOUS]
  - 🔱 51 Shakti Peethas [DIVINE FEMININE]
  - 🌺 108 Divya Desams [VISHNU SACRED]
  - 🌿 Pancha Bhoota Sthalams [FIVE ELEMENTS]
  - 🕉️ Pancharama Kshetras [SHIVA TEMPLES]
- ✅ Additional Deities (checkboxes - optional)

**Circuit Display:**
Each circuit shows:
- Icon
- Name
- Tag badge (e.g., "MOST SACRED")
- Subtitle
- Description (admin-editable)

**Special Features:**
- Pre-filled deity from trigger
- Live circuit counter
- Scrollable lists
- Admin-editable zones with labels

**Navigation:**
- ← Back (goes to Step 2)
- Next Step → (goes to Step 4)

---

## 🎯 **STEP 4: SUBMIT**

```
┌────────────────────────────────────────────────────────┐
│ 🟢 Build Your Custom Pilgrimage                    [X] │
│    Step 4 of 4: Submit                                 │
│    ████████████████ (Progress: 100%)                   │
├────────────────────────────────────────────────────────┤
│                                                        │
│  ┌─ Review Your Pilgrimage Plan ────────────────────┐ │
│  │ ✓ Review Your Pilgrimage Plan                   │ │
│  │                                                  │ │
│  │ ┌─────────────────────────────────────────┐     │ │
│  │ │ Dates                                   │     │ │
│  │ │ 2024-01-15 to 2024-01-25                │     │ │
│  │ └─────────────────────────────────────────┘     │ │
│  │                                                  │ │
│  │ ┌─────────────────────────────────────────┐     │ │
│  │ │ Group Size                              │     │ │
│  │ │ 6-15 people                             │     │ │
│  │ └─────────────────────────────────────────┘     │ │
│  │                                                  │ │
│  │ ┌─────────────────────────────────────────┐     │ │
│  │ │ Budget Range                            │     │ │
│  │ │ ₹50,000 - ₹100,000                      │     │ │
│  │ └─────────────────────────────────────────┘     │ │
│  │                                                  │ │
│  │ ┌─────────────────────────────────────────┐     │ │
│  │ │ Special Requirements                    │     │ │
│  │ │ [♿ Senior Care] [🍽️ vegetarian]         │     │ │
│  │ │ [🕉️ traditional]                         │     │ │
│  │ └─────────────────────────────────────────┘     │ │
│  │                                                  │ │
│  │ ┌─────────────────────────────────────────┐     │ │
│  │ │ Selected Deities                        │     │ │
│  │ │ [🕉️ Shiva] [🐘 Ganesha]                 │     │ │
│  │ └─────────────────────────────────────────┘     │ │
│  │                                                  │ │
│  │ ┌─────────────────────────────────────────┐     │ │
│  │ │ Selected Circuits                       │     │ │
│  │ │                                         │     │ │
│  │ │ 🕉️ 12 Jyotirlingas [MOST SACRED]        │     │ │
│  │ │ 🪔 Char Dham Yatra [HIGHLY AUSPICIOUS]  │     │ │
│  │ └─────────────────────────────────────────┘     │ │
│  └──────────────────────────────────────────────────┘ │
│  (Gradient: bg-orange-50 to bg-pink-50)               │
│                                                        │
├────────────────────────────────────────────────────────┤
│  [← Back]                                              │
│                                                        │
│  [✨ Request Customization with Grok AI →]             │
│  (Purple-pink gradient button)                        │
│                                                        │
│  [💾 Save for Later]                                   │
│  (Outline button with dashed border)                  │
└────────────────────────────────────────────────────────┘
```

**Review Summary Shows:**
- ✅ Dates (formatted)
- ✅ Group size
- ✅ Budget range (₹)
- ✅ Special requirements (badges)
- ✅ Selected deities (emoji chips)
- ✅ Selected circuits (cards with icons and tags)

**Action Buttons:**

1. **← Back**
   - Goes to Step 3
   - Outline variant

2. **✨ Request Customization with Grok AI →**
   - Purple-pink gradient
   - Sparkles icon
   - Arrow symbol
   - Opens Grok AI confirmation modal

3. **💾 Save for Later**
   - Outline with dashed border
   - Bookmark icon
   - Floppy disk emoji
   - Saves to localStorage
   - Shows toast notification
   - Closes dialog

---

## 🎉 **GROK AI CONFIRMATION MODAL**

```
┌────────────────────────────────────────────────────────┐
│                                                        │
│                    ┌─────────┐                        │
│                    │    ✓    │  (Green circle)        │
│                    │         │  (Pop-in animation)    │
│                    └─────────┘                        │
│                                                        │
│              ✓ Request Received!                      │
│                                                        │
│  ┌─────────────────────────────────────────────────┐  │
│  │ Received request and will get back to you with │  │
│  │ budget, facilities including senior care and   │  │
│  │ specific request details.                      │  │
│  └─────────────────────────────────────────────────┘  │
│                                                        │
│  Grok AI is analyzing your pilgrimage preferences.    │
│  You'll receive a customized itinerary within         │
│  24 hours including:                                  │
│                                                        │
│  ┌─────────────────────────────────────────────────┐  │
│  │ • Temple recommendations matching your deities  │  │
│  │ • Optimized route based on selected circuits   │  │
│  │ • Budget breakdown with accommodation options  │  │
│  │ • Senior care and medical facilities nearby    │  │
│  │ • Dietary-compliant restaurant suggestions     │  │
│  │ • Ritual timing and ceremony schedules         │  │
│  │ • Weather and best travel season insights      │  │
│  └─────────────────────────────────────────────────┘  │
│                                                        │
│                     [Got It]                          │
│                                                        │
└────────────────────────────────────────────────────────┘
```

**Features:**
- ✅ Green checkmark with pop-in animation
- ✅ Success message
- ✅ Grok AI branding (purple text)
- ✅ 24-hour promise
- ✅ List of deliverables
- ✅ Gradient background card (purple-pink)
- ✅ Close button

---

## 📊 **PROGRESS INDICATOR VISUALIZATION**

```
Step 1:  ████▒▒▒▒▒▒▒▒▒▒▒▒  25%  (1/4 complete)
Step 2:  ████████▒▒▒▒▒▒▒▒  50%  (2/4 complete)
Step 3:  ████████████▒▒▒▒  75%  (3/4 complete)
Step 4:  ████████████████ 100%  (4/4 complete)
```

**Visual Design:**
- Orange filled bars = completed steps
- Gray empty bars = pending steps
- Smooth transitions between steps
- 4 equal segments

---

## 🎨 **COLOR SCHEME BY SECTION**

### **Step 1: Basics**
```
Travel Dates:  🟠 Orange (border-orange-200, bg-orange-50)
Group Size:    🔵 Blue   (border-blue-200, bg-blue-50)
Budget Range:  🟢 Green  (border-green-200, bg-green-50)
```

### **Step 2: Special Needs**
```
Accessibility: 🟣 Purple (border-purple-200, bg-purple-50)
Dietary Prefs: 🟠 Orange (border-orange-200, bg-orange-50)
Ritual Prefs:  🔵 Blue   (border-blue-200, bg-blue-50)
```

### **Step 3: Spiritual Focus**
```
Primary Deity:       🔵 Blue   (border-blue-200, bg-blue-50)
Sacred Circuits:     🟠 Orange (border-orange-200, bg-orange-50)
Additional Deities:  🟣 Purple (border-purple-200, bg-purple-50)
```

### **Step 4: Submit**
```
Review Summary: 🟠➡️🟣 Gradient (bg-orange-50 to bg-pink-50)
Grok AI Button: 🟣➡️🟣 Gradient (indigo-purple-pink)
Save Button:    ⬜ Outline (border-gray-300)
```

---

## 🎭 **ADMIN-EDITABLE VISUAL INDICATORS**

All admin-editable zones have these visual markers:

```
┌─────────────────────────────────────────┐
│ ⋮ ⋮ ⋮ ⋮ ⋮ ⋮ ⋮ ⋮ ⋮ ⋮  (Dashed border)  │
│                                         │
│ ADMIN_Section_Label  (Blue/Orange text)│
│                                         │
│ [Admin: Description text in brackets]  │
│                                         │
│ (Colored background: bg-{color}-50)    │
└─────────────────────────────────────────┘
```

**Indicators:**
1. **Dashed borders** - `border-2 border-dashed`
2. **Admin labels** - `ADMIN_{Section}_Label`
3. **Bracket notation** - `[Admin: ...]`
4. **Light backgrounds** - Pastel tints

---

## 📱 **RESPONSIVE BEHAVIOR**

### **Mobile (< 768px)**
```
┌──────────────┐
│   Dialog     │  ← Full width minus padding
│   Content    │
│              │
│ (Scrollable) │  ← 90vh max height
│              │
│   Buttons    │
└──────────────┘
```

### **Tablet/Desktop (≥ 768px)**
```
        ┌──────────────┐
        │   Dialog     │  ← Max width: 448px
        │   Content    │  ← Centered on screen
        │              │
        │ (Scrollable) │  ← 90vh max height
        │              │
        │   Buttons    │
        └──────────────┘
```

---

## 🔄 **USER FLOW DIAGRAM**

```
START
  │
  ├─ Click FAB Button
  │    └─ Open Dialog → Step 1
  │
  └─ Click Deity-Specific Trigger
       └─ Pre-fill deity → Open Dialog → Step 1

Step 1: BASICS
  ├─ Fill dates, group size, budget
  └─ Click "Next Step" → Step 2

Step 2: SPECIAL NEEDS
  ├─ Select accessibility, dietary, ritual prefs
  ├─ Click "Back" → Step 1
  └─ Click "Next Step" → Step 3

Step 3: SPIRITUAL FOCUS
  ├─ Select primary deity
  ├─ Check circuits (multiple)
  ├─ Check additional deities (optional)
  ├─ Click "Back" → Step 2
  └─ Click "Next Step" → Step 4

Step 4: SUBMIT
  ├─ Review all data
  ├─ Click "Back" → Step 3
  ├─ Click "Save for Later"
  │    ├─ Save to localStorage
  │    ├─ Show toast notification
  │    └─ Close dialog → END
  │
  └─ Click "Request with Grok AI"
       ├─ Close tour builder dialog
       ├─ Open Grok AI confirmation modal
       ├─ Show success animation
       ├─ Display confirmation message
       └─ Click "Got It" → END
```

---

## 💾 **DATA PERSISTENCE**

### **localStorage Structure:**
```javascript
{
  "savedPilgrimageTour": {
    "dates": {
      "start": "2024-01-15",
      "end": "2024-01-25"
    },
    "groupSize": "6-15",
    "budget": {
      "min": "50000",
      "max": "100000"
    },
    "specialNeeds": {
      "seniorCare": true,
      "medicalAssistance": false,
      "dietaryPrefs": "vegetarian",
      "ritualPrefs": "traditional"
    },
    "deities": ["shiva", "ganesha"],
    "circuits": ["jyotirlinga", "char-dham"],
    "savedAt": "2026-01-20T10:30:00.000Z"
  }
}
```

**Retrieval:**
```javascript
const savedTour = localStorage.getItem('savedPilgrimageTour');
if (savedTour) {
  const data = JSON.parse(savedTour);
  // Populate form fields
}
```

---

## ✅ **INTERACTION CHECKLIST**

### **Step 1 Interactions:**
- [ ] Click start date → Opens date picker
- [ ] Click end date → Opens date picker
- [ ] Click group size radio → Selects option
- [ ] Type in budget min → Updates value
- [ ] Type in budget max → Updates value
- [ ] Click "Next Step" → Validates & goes to Step 2

### **Step 2 Interactions:**
- [ ] Click senior care checkbox → Toggles state
- [ ] Click medical checkbox → Toggles state
- [ ] Click dietary dropdown → Shows options
- [ ] Select dietary option → Updates selection
- [ ] Click ritual dropdown → Shows options
- [ ] Select ritual option → Updates selection
- [ ] Click "Back" → Goes to Step 1
- [ ] Click "Next Step" → Validates & goes to Step 3

### **Step 3 Interactions:**
- [ ] Click primary deity dropdown → Shows deities
- [ ] Select deity → Updates selection
- [ ] Check circuit checkbox → Adds to selection
- [ ] Uncheck circuit → Removes from selection
- [ ] Circuit counter updates → Shows count
- [ ] Scroll circuits list → Reveals more options
- [ ] Check additional deities → Adds to selection
- [ ] Click "Back" → Goes to Step 2
- [ ] Click "Next Step" → Validates & goes to Step 4

### **Step 4 Interactions:**
- [ ] Review shows all data → Displays summary
- [ ] Click "Back" → Goes to Step 3
- [ ] Click "Save for Later" → Saves & closes
- [ ] Toast appears → Confirms save
- [ ] Click "Request with Grok AI" → Opens modal
- [ ] Modal animates → Checkmark pops in
- [ ] Click "Got It" → Closes modal

---

## 🎨 **BADGE & TAG EXAMPLES**

### **Special Requirements Badges:**
```
[♿ Senior Care]  (default badge style)
[👨‍⚕️ Medical]     (default badge style)
[🍽️ vegetarian]  (default badge style)
[🕉️ traditional]  (default badge style)
```

### **Circuit Tags:**
```
[MOST SACRED]          (bg-orange-100, text-orange-700)
[HIGHLY AUSPICIOUS]    (bg-orange-100, text-orange-700)
[DIVINE FEMININE]      (bg-orange-100, text-orange-700)
[VISHNU SACRED]        (bg-orange-100, text-orange-700)
[FIVE ELEMENTS]        (bg-orange-100, text-orange-700)
[SHIVA TEMPLES]        (bg-orange-100, text-orange-700)
```

---

## 🎉 **SUCCESS STATES**

### **Save for Later:**
```
┌────────────────────────────────────────┐
│  ✓ Pilgrimage plan saved!              │
│    You can come back anytime.          │
└────────────────────────────────────────┘
(Toast notification - green background)
```

### **Grok AI Request:**
```
        ┌─────────┐
        │    ✓    │  (Green checkmark)
        │         │  (Animated pop-in)
        └─────────┘
        
   ✓ Request Received!
   
Your customized itinerary will be ready in 24 hours.
```

---

## 📐 **DIMENSIONS & SPACING**

### **Dialog:**
- Max Width: 448px (md)
- Max Height: 90vh
- Padding: 24px
- Border Radius: 16px (rounded-2xl)

### **Form Sections:**
- Border: 2px dashed
- Border Radius: 12px (rounded-xl)
- Padding: 16px
- Gap between sections: 16px

### **Buttons:**
- Height: 40px-48px
- Border Radius: 14px (rounded-[14px])
- Padding: px-4 to px-6

### **Progress Bar:**
- Height: 8px (h-2)
- Gap: 8px
- Border Radius: 9999px (rounded-full)

---

## 🚀 **ANIMATION TIMELINE**

```
Dialog Open:
  0ms   → Dialog fades in
  0ms   → Backdrop appears
  0ms   → Content slides up
  300ms → Animation complete

Progress Bar:
  0ms   → Current step fills
  300ms → Transition complete

Grok Modal:
  0ms   → Modal fades in
  0ms   → Checkmark scales from 0
  500ms → Checkmark at full size (spring)
  500ms → Animation complete

Save Toast:
  0ms   → Toast slides in from top
  3000ms → Toast stays visible
  3500ms → Toast fades out
```

---

*Visual guide completed: January 20, 2026*  
*Ready for implementation and testing!* 🎨✨
