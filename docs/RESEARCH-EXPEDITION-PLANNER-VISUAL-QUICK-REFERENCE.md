# 🔬 RESEARCH EXPEDITION PLANNER - VISUAL QUICK REFERENCE

## 🎨 COLOR THEME

```
DEEP BLUE:  #003366  ████████  Primary (buttons, headers, selected states)
NAVY BLUE:  #004080  ████████  Secondary (subheadings, labels)
DARK BLUE:  #002147  ████████  Text (body content)
GOLD:       #FFD700  ████████  Accent (highlights, badges, borders)
DARK GOLD:  #B8860B  ████████  Accent dark
AMBER:      #FFA500  ████████  Warning/info
WHITE:      #FFFFFF  ████████  Backgrounds (main)
LIGHT GRAY: #F5F5F5  ████████  Backgrounds (sections)
MED GRAY:   #E0E0E0  ████████  Borders
```

---

## 📋 7-SCREEN FLOW

```
┌─────────────────────────────────────────────────────────┐
│  LANDING: Research Groups & Academic Delegations        │
│  • 6 feature cards (3x2 grid)                          │
│  • Deep Blue hero section with Gold icon               │
│  • CTA: "Plan Research Expedition" (Deep Blue/Gold)    │
└─────────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────┐
│  SCREEN A: Purpose & Profile                            │
│  ┌───────────────────────────────────────────────────┐  │
│  │ 5 Purpose Cards (2-col grid)                      │  │
│  │ • Lab Visit, Collaboration, Data Collection       │  │
│  │ • Workshop, Conference+Lab                        │  │
│  │ Selected: Deep Blue bg + Gold border              │  │
│  └───────────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────────────┐  │
│  │ 👥 DELEGATION PROFILE [Accordion ▼]               │  │
│  │ ──────────────────────────────────────────────    │  │
│  │ • Total Pax                                       │  │
│  │ • Role Assignment (3-col: PI, Coord, Safety)     │  │
│  │ • Participant Level (4 cards)                    │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────┐
│  SCREEN B: Domain & Outcomes                            │
│  ┌───────────────────────────────────────────────────┐  │
│  │ 📚 RESEARCH DOMAIN [Accordion ▼]                  │  │
│  │ ──────────────────────────────────────────────    │  │
│  │ • Discipline (dropdown)                           │  │
│  │ • Keywords (tag input)                            │  │
│  │ • Host Types (4 cards: Univ/Govt/Corp/Field)     │  │
│  └───────────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────────────┐  │
│  │ 🏆 MEASURABLE OUTCOMES [Accordion ▼]              │  │
│  │ ──────────────────────────────────────────────    │  │
│  │ ☐ Instrument Demo                                 │  │
│  │ ☐ Dataset Collection                              │  │
│  │ ☐ Mentoring Session                               │  │
│  │ ☐ Collaboration Roadmap                           │  │
│  │ ☐ Certification                                   │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────┐
│  SCREEN C: Format & Access                              │
│  ┌───────────────────────────────────────────────────┐  │
│  │ 📅 EXPEDITION FORMAT (3 cards)                    │  │
│  │ ⚡Short | 🔄Circuit | ⛺Field Camp                 │  │
│  └───────────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────────────┐  │
│  │ Preferred Dates | Alternate Dates                 │  │
│  └───────────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────────────┐  │
│  │ 🧪 ACCESS REQUIREMENTS [Accordion ▼]              │  │
│  │ ──────────────────────────────────────────────    │  │
│  │ ☐ Lab Walkthrough                                 │  │
│  │ ☐ Hands-on Instrument Time                        │  │
│  │ ☐ Data/Sample Collection                          │  │
│  │ ☐ Photography Permitted                           │  │
│  └───────────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────────────┐  │
│  │ ⚠️ COMPLIANCE: "Do you have?"                     │  │
│  │ ☐ Institute Permission | ☐ Ethics | ☐ IP/NDA     │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────┐
│  SCREEN D: Logistics & Safety                           │
│  ┌───────────────────────────────────────────────────┐  │
│  │ 📍 LOGISTICS [Accordion ▼]                        │  │
│  │ ──────────────────────────────────────────────    │  │
│  │ • Transport | Local Commute                       │  │
│  │ • Stay (dropdown)                                 │  │
│  │ ☐ Add 60min Lab Buffer                            │  │
│  └───────────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────────────┐  │
│  │ 🛡️ SAFETY PLAN [Accordion ▼]                      │  │
│  │ ──────────────────────────────────────────────    │  │
│  │ 📤 Upload Emergency Contact Sheet                 │  │
│  │ ☐ First Aid Kit Assigned                          │  │
│  │ ☐ Insurance Coverage Confirmed                    │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────┐
│  SCREEN E: Itinerary Builder                            │
│  ┌───────────────────────────────────────────────────┐  │
│  │ Day-wise Vertical Timeline:                       │  │
│  │                                                    │  │
│  │  ①  Day 1: Arrival & Lab Induction                │  │
│  │  │   [Editable text input]                        │  │
│  │  │                                                 │  │
│  │  ②  Day 2: Main Session (Demo/Data Capture)       │  │
│  │  │   [Editable text input]                        │  │
│  │  │                                                 │  │
│  │  ③  Day 3: Wrap-up + Documentation                │  │
│  │      [Editable text input]                         │  │
│  │                                                    │  │
│  │ ┌─────────────────────────────────────────────┐   │  │
│  │ │ ℹ️ FIXED SLOT (All Days) - Gold bg          │   │  │
│  │ │ 18:00-19:00: Daily Research Debrief         │   │  │
│  │ └─────────────────────────────────────────────┘   │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────┐
│  SCREEN F: Budget & Proposal                            │
│  ┌───────────────────────────────────────────────────┐  │
│  │ 💰 COST BREAKDOWN [Accordion ▼]                   │  │
│  │ ──────────────────────────────────────────────    │  │
│  │ ₹ Travel       | ₹ Stay                           │  │
│  │ ₹ Lab Fees     | ₹ Documentation                  │  │
│  │                                                    │  │
│  │ ┌──────────────────────────────────────────┐      │  │
│  │ │ Total Expedition Cost: ₹[calculated]     │      │  │
│  │ │ Per Scholar ([X] pax): ₹[per-person]     │      │  │
│  │ └──────────────────────────────────────────┘      │  │
│  └───────────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────────────┐  │
│  │ [Deep Blue] Generate Proposal Pack               │  │
│  │             (Objective, Safety, Budget)           │  │
│  └───────────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────────────┐  │
│  │ [White/Border] Submit to HOD/Dean                │  │
│  │                (Placeholder Action)               │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────┐
│  SCREEN G: Confirmation Dashboard                       │
│  ┌───────────────────────────────────────────────────┐  │
│  │          ⭕ ✅ (Gold circle, large)                │  │
│  │       Expedition Confirmed                        │  │
│  │   Your research expedition is ready to proceed    │  │
│  └───────────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────────────┐  │
│  │ STATUS INDICATORS (Light Gray box, Gold border)  │  │
│  │ ✅ 📅 Dates Confirmed                             │  │
│  │ ✅ ✔️ Host Permissions Granted                    │  │
│  │ ✅ 📍 Logistics Locked                            │  │
│  └───────────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────────────┐  │
│  │ [Deep Blue] 📥 Download Itinerary PDF            │  │
│  └───────────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────────────┐  │
│  │ [White/Border] 📥 Download Permission Letters    │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

---

## 🎨 VISUAL COMPONENT STATES

### Primary Button
```
┌─────────────────────────────────────┐
│  [Plan Research Expedition →]       │  ← Deep Blue bg (#003366)
│                                     │     Gold text (#FFD700)
└─────────────────────────────────────┘     h-14, rounded-xl, font-bold
```

### Accordion (Collapsed)
```
┌───────────────────────────────────────────────────────┐
│  👥 Delegation Profile                          ▼     │  ← Light Gray bg
└───────────────────────────────────────────────────────┘     Dark Blue text
```

### Accordion (Expanded)
```
┌───────────────────────────────────────────────────────┐
│  👥 Delegation Profile                          ▲     │  ← Deep Blue bg
├───────────────────────────────────────────────────────┤     White text
│  [Accordion content here...]                          │  ← White bg
│                                                       │     (content area)
└───────────────────────────────────────────────────────┘
```

### Purpose Card (Unselected)
```
┌─────────────────────────────────────┐
│  🔬                                  │  ← White bg
│  Lab & Facility Visit                │     Med Gray border (2px)
│  Comprehensive laboratory tours...   │     Dark Blue text
│  [Admin-Added: Lab Program]         │     Gray badge
└─────────────────────────────────────┘
```

### Purpose Card (Selected)
```
┌═════════════════════════════════════┐
│  🔬                           ✅     │  ← Deep Blue bg
│  Lab & Facility Visit                │     Gold border (2px)
│  Comprehensive laboratory tours...   │     White text
│  [Admin-Added: Lab Program]         │     Gold badge
└═════════════════════════════════════┘     Gold checkmark
```

### Checkbox (Unchecked)
```
☐ Lab Walkthrough  ← White bg, Med Gray border
```

### Checkbox (Checked)
```
☑ Lab Walkthrough  ← Light Gray bg, Gold border (2px)
```

### Compliance Box
```
┌───────────────────────────────────────────────────────┐
│  ⚠️ COMPLIANCE: "Do you have?"                        │  ← Light Gray bg
│                                                       │     Gold border
│  ☐ Institute Permission Letter                       │     Amber icon
│  ☐ Ethics Clearance (if applicable)                  │
│  ☐ IP/NDA Agreement                                  │
└───────────────────────────────────────────────────────┘
```

### Timeline Day Badge
```
 ①  ← Gold circle (#FFD700)
     Deep Blue text (#003366)
     w-6 h-6, text-xs font-bold
```

### Fixed Slot Box
```
┌───────────────────────────────────────────────────────┐
│  ℹ️ Fixed Slot (All Days)                             │  ← Gold bg
│  18:00-19:00: Daily Research Debrief Session         │     Dark Gold border
└───────────────────────────────────────────────────────┘     Deep Blue text
```

### Cost Summary
```
┌───────────────────────────────────────────────────────┐
│  Total Expedition Cost:          ₹50,000.00          │  ← Gold bg
│  Per Scholar (8 pax):            ₹6,250.00           │     Dark Gold border
└───────────────────────────────────────────────────────┘     Deep Blue text
                                                              (large bold)
```

### Status Indicator
```
┌───────────────────────────────────────────────────────┐
│  ✅ 📅  Dates Confirmed                               │  ← White bg inside
└───────────────────────────────────────────────────────┘     Light Gray container
    ^   ^                                                      Gold checkmark
    |   |_ Relevant icon (Deep Blue)                          Deep Blue text
    |_ Green checkmark
```

---

## 📐 SPACING & SIZING

### Main Card
```
rounded-2xl
p-6 (24px padding)
shadow-xl
backgroundColor: white
```

### Section Card
```
rounded-xl
p-4 (16px padding) or p-3 (12px)
border-2
backgroundColor: lightGray or white
```

### Button Heights
```
Primary CTA:  h-14 (56px)
Regular:      h-12 (48px)
Compact:      h-8  (32px) - role inputs
```

### Typography
```
Screen Titles:   text-2xl (24px) or text-3xl (30px) font-bold
Section Titles:  text-sm (14px) font-bold
Labels:          text-xs (12px) font-bold or font-medium
Helper Text:     text-[10px] (10px)
```

### Grid Gaps
```
Large sections:  gap-4 (16px)
Medium sections: gap-3 (12px)
Compact grids:   gap-2 (8px)
```

---

## 🔢 FORM FIELD SUMMARY

| Screen | Fields | Checkboxes | Dropdowns | Special |
|--------|--------|------------|-----------|---------|
| **A** | 4 | - | - | 5 purpose cards, 4 level cards |
| **B** | 1 | 5 | 1 | 4 host type cards, tags input |
| **C** | 2 | 7 | - | 3 format cards, date inputs |
| **D** | 1 | 3 | 2 | Upload component |
| **E** | 3 | - | - | Timeline with badges |
| **F** | 4 | - | - | Auto-calculation display |
| **G** | - | - | - | Status + downloads |

**Total:** 15 text inputs, 15 checkboxes, 3 dropdowns, 12 card selectors

---

## 🎯 KEY DIFFERENCES FROM PREVIOUS VERSION

| Aspect | Previous (14 screens) | New (7 screens) |
|--------|----------------------|-----------------|
| **Screens** | 14 separate | 7 consolidated |
| **Theme** | Royal Blue/Purple | Deep Blue/Gold |
| **Density** | Standard | High (accordion-based) |
| **Target** | General academic | PhD/Faculty specific |
| **Terminology** | Mixed | Specialist academic |
| **Layout** | Spacious | Compact/sophisticated |
| **Visual** | Clean modern | Professional research |

---

## ✅ QUICK VALIDATION CHECKLIST

**Visual Theme:**
- [ ] Deep Blue (#003366) for primary elements
- [ ] Gold (#FFD700) for accents
- [ ] White backgrounds
- [ ] High-density layouts
- [ ] Accordion system working

**Content:**
- [ ] All placeholders: [Admin-Added: ...]
- [ ] Academic terminology (PI, Ethics, Bench Fees, etc.)
- [ ] No undergraduate language
- [ ] No real institution names

**Functionality:**
- [ ] 7 screens flow smoothly (Landing → A → B → C → D → E → F → G)
- [ ] Accordions expand/collapse properly
- [ ] Form validations work
- [ ] Calculations correct (budget)
- [ ] Toasts appear on actions

**User Suitability:**
- [ ] Suitable for PhD scholars
- [ ] Suitable for Postdocs
- [ ] Suitable for Faculty/PIs
- [ ] Professional appearance
- [ ] No overlap with College Groups

---

**Status:** ✅ Production-Ready  
**Theme:** Deep Blue/Gold/White  
**Density:** High (PhD/Faculty)  
**Screens:** 7 (A-G)  

🔬 **Research Expedition Planner** - *Sophisticated academic planning*
