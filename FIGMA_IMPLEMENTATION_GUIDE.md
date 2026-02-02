# ========================================
# FIGMA IMPLEMENTATION GUIDE
# Devotional Tourism (Non-Hindu Religions)
# Low-Fidelity Wireframe Specification
# ========================================

## 🚨 IMPORTANT: HOW TO USE THIS GUIDE

Since I cannot directly access Figma, this document provides:
1. **Exact frame specifications** for each screen
2. **Component layouts** with measurements
3. **All text content** ready to copy-paste
4. **Prototype connection map**
5. **Admin-editable markers**

You will manually create these frames in Figma following these specs.

---

## 📐 GLOBAL SPECIFICATIONS

### **Canvas Setup**:
- Frame size: **375 × 812** (iPhone 13/14)
- Background: `#F5F5F5` (light gray)
- Font: **Inter** (or system monospace for low-fi)
- Grid: 8px base unit

### **Color Palette** (Low-Fi):
```
Primary Border: #000000 (Black)
Background White: #FFFFFF
Background Gray: #F9FAFB
Admin Yellow: #FEF3C7
Info Blue: #DBEAFE
Success Green: #D1FAE5
Warning Red: #FEE2E2
Purple Grok: #E9D5FF
```

### **Border Styles**:
- Standard: 2px solid #000000
- Admin Editable: 2px dashed #9CA3AF
- Section Divider: 1px solid #E5E7EB

### **Typography Scale**:
```
H1: 24px Bold Uppercase
H2: 20px Bold Uppercase
H3: 16px Bold
Body: 14px Regular
Small: 12px Regular
Label: 11px Bold Uppercase
```

---

## 🖼️ FRAME-BY-FRAME SPECIFICATIONS

### **FRAME 1: FAITH SELECTOR**
**Frame Name**: `Devotional-FaithSelector`
**Size**: 375 × 812
**Layer Group**: "Devotional Tourism – Rectified (Non-Hindu)"

#### **Layout Structure**:

**Header (0, 0, 375, 120)**:
- Background: White
- Border-bottom: 4px solid Black
- Padding: 16px

**Content**:
```
Text: "DEVOTIONAL TOURISM - LOW-FI WIREFRAME"
Position: (16, 16)
Font: 18px Bold Uppercase
```

```
Badge: "ADMIN EDITABLE"
Position: (270, 20)
Background: #A855F7 (Purple)
Color: White
Padding: 8px 16px
Border-radius: 20px
```

**Main Content (0, 120, 375, 692)**:
- Padding: 24px

**Title Section (24, 140, 327, auto)**:
```
Text: "Choose Your Faith Journey"
Font: 24px Bold Uppercase
Margin-bottom: 8px
```

```
Text: "[LAYER GROUP: "Devotional – Rectified (Rituals + Special Days + Admin-Driven)"]"
Font: 12px Regular
Color: #6B7280
Margin-bottom: 24px
```

**Religion Grid (24, 220, 327, auto)**:
- Layout: Auto-layout Vertical
- Gap: 16px
- 3 columns (calculated width: 101px each with 10px gap)

**Religion Tile Component** (repeat 9 times):
- Size: 101 × 120
- Border: 4px solid Black
- Padding: 12px
- Background: Religion-specific color at 20% opacity
- Hover: Background #F3F4F6

**Tile Content**:
```
Emoji: (centered, 48px)
Text: Religion Name (10px Bold Uppercase, centered, multi-line)
Subtext: "[CLICKABLE TILE]" (8px, #6B7280, centered)
```

**Religion Data for Tiles**:

| Religion | Emoji | Name | BG Color |
|----------|-------|------|----------|
| Sikh | ☬ | Sikh Devotees | #FFA726 (20%) |
| Christian | ✝️ | Christian Pilgrims | #64B5F6 (20%) |
| Muslim | ☪️ | Muslim Travelers | #66BB6A (20%) |
| Buddhist | ☸️ | Buddhist Followers | #FFA726 (20%) |
| Jain | 卐 | Jain Pilgrims | #AB47BC (20%) |
| Jewish | ✡ | Jewish Heritage | #42A5F5 (20%) |
| Bahá'í | ★ | Bahá'í Visitors | #26A69A (20%) |
| Indigenous | 🌿 | Indigenous & Tribal | #8BC34A (20%) |
| Parsi | 🔥 | Parsi Heritage | #FF7043 (20%) |

**Warning Box (24, 580, 327, auto)**:
- Background: #FEF3C7
- Border: 2px solid #F59E0B
- Padding: 16px
- Border-radius: 8px

```
Text: "⚠️ LOCK RULE: Hindu Pilgrims NOT shown here (separate flow). No other categories (Adventure, Wellness, etc.) affected."
Font: 11px Bold
```

#### **Prototype Connections**:
Each religion tile → corresponding "Religion Home" frame

---

### **FRAME 2: RELIGION HOME** (Template for All 9)
**Frame Name**: `Devotional-[Religion]-Home`
**Size**: 375 × 2400 (scrollable)
**Layer Group**: "Devotional Tourism – Rectified (Non-Hindu)"

#### **Header (0, 0, 375, 160)**:
- Background: White
- Border: 4px solid Black
- Border-top-color: Religion-specific color

**Header Content**:
```
Back Button (16, 16, 80, 40):
  Border: 2px solid Black
  Text: "← BACK"
  Font: 12px Bold
  
Emoji (16, 70, 60, 60):
  Size: 48px
  
Title (90, 70, 270, auto):
  Text: "[Religion Name]"
  Font: 24px Bold Uppercase
  
Subtitle (90, 100, 270, auto):
  Text: "Religion Home Screen"
  Font: 12px Regular
  Color: #6B7280
```

**Browse Buttons Row (16, 125, 343, 40)**:
- Layout: Auto-layout Horizontal
- Gap: 8px

```
Button 1 (Google):
  Width: 163px
  Height: 40px
  Border: 2px solid Black
  Background: White
  Icon: 🌐 (16px)
  Text: "GOOGLE SEARCH" (11px Bold)
  
Button 2 (YouTube):
  Width: 163px
  Height: 40px
  Border: 2px solid Black
  Background: White
  Icon: ▶️ (16px)
  Text: "YOUTUBE BROWSE" (11px Bold)
  
Button 3 (Heart):
  Width: 40px
  Height: 40px
  Border: 2px solid Black
  Background: White
  Icon: ❤️ (20px)
```

#### **MODULE A: Religious Procedures & Etiquette (16, 180, 343, auto)**:

**Header Bar**:
- Height: 56px
- Background: White
- Border: 4px solid Black
- Cursor: Pointer
- Has chevron down icon (rotates when expanded)

```
Icon (16px): ℹ️
Text: "MODULE A: RELIGIOUS PROCEDURES & ETIQUETTE"
Font: 12px Bold Uppercase
Chevron: ⌄ (rotates 180° when open)
```

**Expanded Content** (if open):
- Border-top: 2px solid Black
- Padding: 16px
- Background: White

**Procedure Card** (repeat 4-5 times):
```
Container:
  Border: 2px dashed #9CA3AF
  Padding: 12px
  Background: #F9FAFB
  Margin-bottom: 12px
  
Icon: ✓ (16px, #10B981)
Text: "[Admin Edit] [Procedure text]"
Font: 12px Regular
```

**Senior Care Toggle**:
```
Container:
  Border: 2px solid Black
  Padding: 12px
  Background: White
  Margin-top: 16px
  
Label: "Senior Care Considerations"
Font: 12px Bold
Toggle: Switch component (right-aligned)
```

#### **MODULE B: Rituals & Special Days Calendar (16, [Y], 343, auto)**:

**Header Bar** (same as Module A):
```
Icon: 📅
Text: "MODULE B: RITUALS & SPECIAL DAYS CALENDAR"
```

**Expanded Content**:

**Special Day Card** (repeat 2-4 times):
```
Container:
  Border: 2px solid Black
  Padding: 16px
  Background: #DBEAFE (light blue)
  Border-radius: 8px
  Margin-bottom: 16px
  
Header Row:
  Title: "[Admin Edit] [Special Day Name]"
  Font: 16px Bold
  Badge: "[Festival/Fast/Pilgrimage]"
    Background: Black
    Color: White
    Padding: 4px 8px
    Border-radius: 4px
    
Date Row:
  Text: "[Admin: Date/Period]"
  Font: 11px Regular
  Color: #6B7280
  Background: #FEF3C7
  Padding: 4px 8px
  Border-radius: 4px
  Display: inline-block
  
Ritual Steps Section:
  Label: "RITUAL STEPS:" (11px Bold, margin-top: 12px)
  List:
    "1. [Admin Edit] [Step text]"
    "2. [Admin Edit] [Step text]"
    Font: 12px Regular
    Line-height: 1.5
    
Destination Link:
  Background: #FEF3C7
  Border: 1px solid #F59E0B
  Padding: 8px
  Font: 11px Regular
  Text: "📍 Destination Link: [Admin-Added Destination 1]"
```

**Add Button**:
```
Button:
  Width: 100%
  Height: 48px
  Border: 2px solid Black
  Background: White
  Text: "+ [ADMIN: ADD NEW SPECIAL DAY]"
  Font: 12px Bold Uppercase
```

#### **MODULE C: Sacred Text References (16, [Y], 343, auto)**:

**Header Bar**:
```
Icon: 📖
Text: "MODULE C: SACRED TEXT REFERENCES"
```

**Expanded Content**:

**Text Card** (repeat 1-3 times):
```
Container:
  Border: 2px dashed #9CA3AF
  Padding: 16px
  Background: White
  Margin-bottom: 12px
  
Header Row:
  Title: "[Admin Edit] [Sacred Text Name]"
  Font: 14px Bold
  Toggle: Switch (right-aligned)
  
Excerpt:
  Text: "[Admin Edit] [Summary/excerpt text]"
  Font: 12px Regular
  Color: #374151
  Margin-top: 8px
  
Footer:
  Text: "Use in itinerary planning: YES/NO"
  Font: 11px Regular
  Color: #6B7280
  Margin-top: 8px
```

#### **MODULE D: Save Interest & Notifications (16, [Y], 343, auto)**:

**Header**:
```
Icon: ❤️
Text: "MODULE D: SAVE INTEREST & NOTIFICATIONS"
Font: 14px Bold Uppercase
Margin-bottom: 16px
```

**Content**:

**Text Area**:
```
Label: "What do you want to visit / why / constraints?"
Font: 12px Bold
Margin-bottom: 8px

Textarea:
  Width: 100%
  Height: 80px
  Border: 2px solid Black
  Padding: 12px
  Font: 12px Regular
  Placeholder: "[User input field - Admin can see submissions]"
  Font-family: Monospace
```

**Toggle List** (3 items):
```
Toggle Item Container:
  Border: 2px solid Black
  Padding: 12px
  Background: White
  Margin-bottom: 8px
  Display: flex
  Justify-content: space-between
  Align-items: center
  
Label (with icon):
  Icon: 🔔 (16px)
  Text: "Notify me about [deals/budget/festivals]"
  Font: 12px Bold
  
Switch: (right-aligned)
```

#### **GROK AI INSIGHTS (16, [Y], 343, auto)**:

```
Container:
  Background: Linear gradient (#9333EA → #4F46E5)
  Border: 4px solid Black
  Padding: 24px
  Color: White
  
Header Row:
  Icon: ✨ (20px)
  Text: "GROK AI INSIGHTS"
  Font: 14px Bold Uppercase
  Button: "ASK GROK" / "HIDE" (right-aligned)
    Border: 2px solid White
    Background: Transparent
    Color: White
    Padding: 8px 16px
    
Insights (if expanded):
  Card 1-3:
    Background: White
    Color: Black
    Padding: 16px
    Border: 2px solid Black
    Margin-bottom: 12px
    
    Label: "🌤️ Best Season:" (12px Bold)
    Text: "[Grok AI: October to March recommended for most locations]"
    Font: 12px Regular
    
Action Buttons Row:
  Button 1: "APPLY TO PLAN"
    Background: White
    Color: #9333EA
    Border: 2px solid White
    
  Button 2: "SAVE INSIGHT"
    Background: Transparent
    Color: White
    Border: 2px solid White
```

#### **Continue Button (16, [Y], 343, 56)**:
```
Background: Black
Color: White
Border: 4px solid Black
Text: "CONTINUE TO DESTINATION SELECTION →"
Font: 14px Bold Uppercase
Height: 56px
```

#### **Prototype Connection**:
Continue button → Destinations screen

---

### **FRAME 3: DESTINATIONS**
**Frame Name**: `Devotional-Destinations`
**Size**: 375 × 900

#### **Header (0, 0, 375, 80)**:
- Same as Religion Home header
- Title: "STEP 1: Select Destination(s)"

#### **Warning Banner (16, 96, 343, auto)**:
```
Background: #FEF3C7
Border: 2px solid #F59E0B
Padding: 16px
Border-radius: 8px

Text: "⚠️ NO REAL PLACE NAMES: All destinations are admin-added placeholders. Users discover via Google/YouTube browse."
Font: 11px Bold
```

#### **Destination Cards (16, 180, 343, auto)**:

**Destination Card** (repeat 5 times):
```
Container:
  Border: 2px solid Black
  Padding: 16px
  Background: White
  Margin-bottom: 12px
  Display: flex
  Align-items: center
  Gap: 12px
  
Checkbox:
  Width: 20px
  Height: 20px
  Border: 2px solid Black
  
Content:
  Title: "[Admin-Added Destination 1/2/3/4/5]"
  Font: 14px Bold
  
  Subtitle: "[Admin can edit location details]"
  Font: 11px Regular
  Color: #6B7280
  Margin-top: 4px
  
Badge:
  Text: "PLACEHOLDER"
  Background: #E5E7EB
  Color: Black
  Padding: 4px 8px
  Border-radius: 4px
  Font: 9px Bold
```

#### **Browse Buttons (16, 600, 343, 48)**:
- Same as Religion Home browse buttons
- 2 buttons: Google Search, YouTube Browse

#### **Continue Button (16, 680, 343, 56)**:
```
Background: Black (disabled: #9CA3AF)
Color: White
Border: 4px solid Black
Text: "CONTINUE TO GROUP DETAILS →"
Disabled state: No destinations selected
```

#### **Prototype Connection**:
Continue button → Group Details screen

---

### **FRAME 4: GROUP DETAILS**
**Frame Name**: `Devotional-GroupDetails`
**Size**: 375 × 1000

#### **Header**:
- Title: "STEP 2: Group Details"

#### **Form Sections**:

**Group Size (16, 96, 343, auto)**:
```
Label: "👥 GROUP SIZE"
Font: 11px Bold Uppercase
Margin-bottom: 8px

Input:
  Width: 100%
  Height: 48px
  Border: 2px solid Black
  Padding: 12px
  Font: 14px Regular
  Font-family: Monospace
  Placeholder: "Enter number of people"
```

**Age Mix (16, 200, 343, auto)**:
```
Label: "AGE MIX"
Font: 11px Bold Uppercase
Margin-bottom: 8px

Button Group (4 buttons in 2×2 grid):
  Button size: 163 × 48px
  Border: 2px solid Black
  Background: White
  Selected: Background #F3F4F6
  Text: "Children" / "Adults" / "Seniors" / "Mixed"
  Font: 11px Bold
  Gap: 8px
```

**Senior Care Toggle (16, 320, 343, 64)**:
```
Container:
  Border: 2px solid Black
  Padding: 16px
  Background: White
  Display: flex
  Justify-content: space-between
  Align-items: center
  
Label: "♿ Senior Care Required"
Font: 12px Bold

Switch: (right-aligned)
```

**Medical Support Toggle (16, 400, 343, 64)**:
```
(Same as Senior Care)
Label: "❤️ Medical Support 24/7"
```

**Special Requests (16, 480, 343, auto)**:
```
Label: "SPECIAL REQUESTS"
Font: 11px Bold Uppercase
Margin-bottom: 8px

Textarea:
  Width: 100%
  Height: 120px
  Border: 2px solid Black
  Padding: 12px
  Font: 12px Regular
  Font-family: Monospace
  Placeholder: "[Any dietary restrictions, accessibility needs, ritual participation preferences, etc.]"
```

#### **Continue Button (16, 640, 343, 56)**:
```
Background: Black (disabled: #9CA3AF)
Text: "CONTINUE TO PACKAGE SELECTION →"
Disabled: Group size not entered
```

#### **Prototype Connection**:
Continue → Package Choice screen

---

### **FRAME 5: PACKAGE CHOICE**
**Frame Name**: `Devotional-PackageChoice`
**Size**: 375 × 900

#### **Header**:
- Title: "STEP 3: Choose Package Type"

#### **Option Cards**:

**Option A (16, 96, 343, auto)**:
```
Container:
  Border: 4px solid Black
  Padding: 24px
  Background: White
  Selected: Background #D1FAE5 (green tint)
  Cursor: Pointer
  Margin-bottom: 16px
  
Header Row:
  Title: "OPTION A: Choose Existing Package"
  Font: 18px Bold
  
  Checkmark (if selected):
    Icon: ✓
    Size: 24px
    Color: #10B981
    Position: Top-right
    
Subtitle:
  Text: "[Admin Curated Package] - Pre-designed itineraries with fixed pricing"
  Font: 12px Regular
  Color: #6B7280
  Margin-top: 8px
  
Features Box:
  Background: #DBEAFE
  Border: 2px solid #3B82F6
  Padding: 12px
  Border-radius: 8px
  Margin-top: 16px
  
  Label: "INCLUDES:" (11px Bold)
  List:
    "✓ Guided tours at [Admin-Added Destinations]"
    "✓ Ritual support services"
    "✓ Accommodation & meals"
    "✓ Festival participation (if dates align)"
  Font: 11px Regular
  Line-height: 1.6
```

**Option B (16, 380, 343, auto)**:
```
Container:
  Border: 4px solid Black
  Padding: 24px
  Background: White
  Selected: Background #E9D5FF (purple tint)
  
Header:
  Title: "OPTION B: Request Custom Plan"
  
Subtitle:
  Text: "[Grok AI Powered] - Personalized itinerary based on your inputs"
  
Features Box:
  Background: #E9D5FF
  Border: 2px solid #9333EA
  
  Label: "✨ GROK AI WILL OPTIMIZE FOR:" (11px Bold)
  List:
    "✓ Your budget constraints"
    "✓ Senior care & accessibility needs"
    "✓ Festival dates alignment"
    "✓ Special ritual participation requests"
```

#### **Continue Button (16, 720, 343, 56)**:
```
Text: "CONTINUE TO PRICING →"
Disabled: No option selected
```

#### **Prototype Connection**:
Continue → Pricing screen

---

### **FRAME 6: PRICING**
**Frame Name**: `Devotional-Pricing`
**Size**: 375 × 1000

#### **Header**:
- Title: "STEP 4: Pricing Estimate"

#### **Price Banner (16, 96, 343, 140)**:
```
Background: #FEF3C7
Border: 4px solid #F59E0B
Padding: 24px
Border-radius: 8px

Label: "📊 ESTIMATED RANGE (Admin Provided)"
Font: 11px Bold
Margin-bottom: 8px

Price Display:
  "₹[XX,XXX]  to  ₹[XX,XXX]"
  Font: 32px Bold
  Letter-spacing: -1px
  
Subtext:
  "Per person | Based on group size: [X] | [Package Type]"
  Font: 11px Regular
  Color: #6B7280
  Margin-top: 8px
```

#### **Breakdown (16, 260, 343, auto)**:
```
Container:
  Border: 2px solid Black
  Padding: 16px
  Background: White
  
Title: "PRICING BREAKDOWN (ADMIN EDITABLE)"
Font: 11px Bold Uppercase
Margin-bottom: 12px

Line Items:
  Row height: 32px
  Border-bottom: 1px solid #E5E7EB
  Display: flex
  Justify-content: space-between
  
  Items:
    "Accommodation" → "₹[X,XXX]"
    "Transport" → "₹[X,XXX]"
    "Guided Tours & Ritual Support" → "₹[X,XXX]"
    "Meals" → "₹[X,XXX]"
    
  Conditional (if senior care selected):
    "♿ Senior Care Services" → "₹[X,XXX]"
    Color: #9333EA
    
  Conditional (if medical support selected):
    "❤️ Medical Support 24/7" → "₹[X,XXX]"
    Color: #DC2626
    
  Font: 12px Regular
  Price Font: 12px Bold
```

#### **Info Box (16, 520, 343, auto)**:
```
Background: #DBEAFE
Border: 2px solid #3B82F6
Padding: 16px
Border-radius: 8px

Label: "💡 NOTE:"
Font: 11px Bold
Margin-bottom: 8px

Text: "No payment required at this stage. This is an INTEREST/REQUEST submission only. Final pricing will be provided after Grok AI planning."
Font: 11px Regular
Line-height: 1.5
```

#### **Submit Button (16, 640, 343, 56)**:
```
Background: #10B981 (Green)
Border: 4px solid Black
Color: White
Text: "SUBMIT INTEREST / REQUEST →"
Font: 14px Bold Uppercase
```

#### **Prototype Connection**:
Submit → Confirmation screen

---

### **FRAME 7: CONFIRMATION**
**Frame Name**: `Devotional-Confirmation`
**Size**: 375 × 1200

#### **Success Icon (0, 80, 375, 120)**:
```
Checkmark Circle:
  Width: 80px
  Height: 80px
  Background: #10B981
  Border-radius: 50%
  Position: Center
  
  Icon: ✓
  Size: 48px
  Color: White
  Center-aligned
```

#### **Heading (16, 220, 343, auto)**:
```
Text: "✅ Interest Received!"
Font: 28px Bold Uppercase
Text-align: Center
```

#### **Promise Card (16, 280, 343, auto)**:
```
Container:
  Background: #F9FAFB
  Border: 2px solid #9CA3AF
  Padding: 24px
  Border-radius: 8px
  
Title: "Grok AI will plan and we'll get back shortly with:"
Font: 16px Bold
Margin-bottom: 16px

Checklist:
  Item height: 48px
  Display: flex
  Align-items: flex-start
  Gap: 8px
  
  Items:
    "✓ Budget breakdown & final pricing"
    "✓ Facility details at [Admin-Added Destinations]"
    "✓ Senior care options & accessibility info"
    "✓ Your requested ritual participation details"
    "✓ Festival alignment & special days calendar"
    
  Icon: ✓ (20px, #10B981)
  Font: 13px Regular
  Line-height: 1.5
```

#### **Grok Processing Card (16, 560, 343, auto)**:
```
Background: #E9D5FF
Border: 2px solid #9333EA
Padding: 16px
Border-radius: 8px

Title Row:
  Icon: ✨ (20px)
  Text: "GROK AI IS NOW PROCESSING YOUR REQUEST"
  Font: 12px Bold
  
Subtext:
  "You will receive notifications via email/SMS when your personalized plan is ready."
  Font: 11px Regular
  Color: #6B7280
  Margin-top: 8px
```

#### **Action Buttons (16, 680, 343, auto)**:
```
Row layout (2 buttons):
  Gap: 12px
  
Button 1: "START NEW JOURNEY"
  Width: 163px
  Height: 48px
  Border: 2px solid Black
  Background: White
  Text: Black
  
Button 2: "🔔 VIEW NOTIFICATIONS"
  Width: 163px
  Height: 48px
  Border: 2px solid Black
  Background: White
```

#### **Summary Card (16, 780, 343, auto)**:
```
Container:
  Border: 4px solid Black
  Padding: 16px
  Background: White
  
Title: "YOUR SUBMISSION SUMMARY:"
Font: 12px Bold Uppercase
Margin-bottom: 12px

Summary Rows:
  Row height: 40px
  Border-bottom: 1px solid #E5E7EB
  Display: flex
  Justify-content: space-between
  Align-items: center
  
  Rows:
    "Religion:" → "[Emoji] [Name]"
    "Destinations:" → "[X] selected"
    "Group Size:" → "[X] people"
    "Package Type:" → "[Existing/Custom]"
    "Senior Care:" → "YES ✓ / NO"
    "Medical Support:" → "YES ✓ / NO"
    
  Label: 12px Bold
  Value: 12px Regular
```

#### **Prototype Connections**:
- Start New Journey → Faith Selector
- View Notifications → (external or new frame)

---

## 🔗 COMPLETE PROTOTYPE CONNECTION MAP

```
Faith Selector
  ↓ (Click religion tile)
Religion Home
  ↓ (Continue button)
Destinations
  ↓ (Continue button, after selection)
Group Details
  ↓ (Continue button, after group size)
Package Choice
  ↓ (Continue button, after selection)
Pricing
  ↓ (Submit button)
Confirmation
  ↓ (Start New Journey button)
Back to Faith Selector
```

**Back Button Flow**:
- All screens except Faith Selector have Back button
- Back button returns to previous screen
- State is preserved (selections remain)

---

## 🎨 ADMIN EDITABLE MARKERS

### **How to Mark Admin-Editable Content**:

1. **Dashed Border Method**:
```
Border: 2px dashed #9CA3AF
Background: #F9FAFB or #FEF3C7
```

2. **Label Method**:
```
Add small text label: "Admin Editable"
Position: Top-right corner
Font: 9px Bold
Color: #6B7280
```

3. **Bracket Notation**:
```
All admin content starts with:
[Admin: ...] or [Admin Edit]
```

### **What Must Be Marked**:
- ✅ All destination names
- ✅ All ritual/practice names
- ✅ All festival/special day names
- ✅ All sacred text names
- ✅ All dates
- ✅ All pricing
- ✅ All descriptions
- ✅ All procedure text

---

## 📊 RELIGION-SPECIFIC DATA TABLES

### **Content to Copy-Paste for Each Religion**:

#### **☬ SIKH DEVOTEES**

**Procedures**:
```
[Admin Edit] Cover head with turban/scarf before entry
[Admin Edit] Remove shoes at designated area
[Admin Edit] Langar (community meal) participation etiquette
[Admin Edit] Accessibility: Wheelchair ramps available at most locations
```

**Special Days**:
```
1. [Admin Edit] Vaisakhi
   Date: [Admin: April 13-14 annually]
   Type: Festival
   Steps:
   - [Admin Edit] Nagar Kirtan procession
   - [Admin Edit] Amrit Sanchar ceremony
   - [Admin Edit] Community seva
   Link: [Admin-Added Destination 1]

2. [Admin Edit] Guru Nanak Gurpurab
   Date: [Admin: Kartik Purnima - Variable lunar]
   Type: Festival
   Steps:
   - [Admin Edit] Akhand Path reading
   - [Admin Edit] Prabhat Pheri early morning procession
   - [Admin Edit] Langar seva
   Link: [Admin-Added Sacred Site A]

3. [Admin Edit] Hola Mohalla
   Date: [Admin: Day after Holi - Variable]
   Type: Pilgrimage
   Steps:
   - [Admin Edit] Martial arts demonstrations
   - [Admin Edit] Gatka displays
   Link: [Location X]
```

**Sacred Texts**:
```
1. [Admin Edit] Guru Granth Sahib
   Excerpt: [Admin Edit] Central holy scripture - 1,430 pages of hymns and teachings
   Use in Itinerary: ✓

2. [Admin Edit] Dasam Granth
   Excerpt: [Admin Edit] Compilation attributed to Guru Gobind Singh
   Use in Itinerary: -
```

#### **✝️ CHRISTIAN PILGRIMS**

**Procedures**:
```
[Admin Edit] Modest dress required (shoulders/knees covered)
[Admin Edit] Silence during Mass/services
[Admin Edit] Candle lighting procedures at shrines
[Admin Edit] Accessibility: Most churches have ramps; contact in advance
```

**Special Days**:
```
1. [Admin Edit] Velankanni Festival
   Date: [Admin: August 29 - September 8 annually]
   Type: Festival
   Steps:
   - [Admin Edit] 10-day novena prayers
   - [Admin Edit] Procession with statue
   - [Admin Edit] Special healing Mass
   Link: [Admin-Added Destination 1]

2. [Admin Edit] Feast of St. Thomas
   Date: [Admin: July 3 annually]
   Type: Festival
   Steps:
   - [Admin Edit] Special Mass
   - [Admin Edit] Tomb veneration
   Link: [Admin-Published Sacred Site A]
```

**Sacred Texts**:
```
1. [Admin Edit] The Holy Bible
   Excerpt: [Admin Edit] Old and New Testament - foundational scripture
   Use in Itinerary: ✓
```

#### **☪️ MUSLIM TRAVELERS**

**Procedures**:
```
[Admin Edit] Wudu (ablution) before entering prayer area
[Admin Edit] Head covering for women recommended
[Admin Edit] Offer chadar/flowers at dargahs
[Admin Edit] Recite Fatiha and duas
[Admin Edit] Accessibility: Wheelchair access varies; confirm ahead
```

**Special Days**:
```
1. [Admin Edit] Urs Celebration
   Date: [Admin: Variable Islamic calendar]
   Type: Pilgrimage
   Steps:
   - [Admin Edit] Ziyarat (shrine visitation)
   - [Admin Edit] Qawwali devotional music
   - [Admin Edit] Chadar offering ceremony
   Link: [Admin-Added Destination 1]

2. [Admin Edit] Ramadan Observances
   Date: [Admin: 9th month Islamic calendar]
   Type: Fast
   Steps:
   - [Admin Edit] Iftar timing at dargahs
   - [Admin Edit] Taraweeh prayers
   Link: [Location X]
```

**Sacred Texts**:
```
1. [Admin Edit] The Holy Quran
   Excerpt: [Admin Edit] Primary religious text revealed to Prophet Muhammad
   Use in Itinerary: ✓
```

#### **☸️ BUDDHIST FOLLOWERS**

**Procedures**:
```
[Admin Edit] Remove shoes before entering temples
[Admin Edit] Clockwise circumambulation of stupas
[Admin Edit] Silence during meditation sessions
[Admin Edit] No photography inside meditation halls
[Admin Edit] Accessibility: Most sites have basic wheelchair access
```

**Special Days**:
```
1. [Admin Edit] Vesak / Buddha Purnima
   Date: [Admin: Vaishakha Purnima - Variable lunar]
   Type: Festival
   Steps:
   - [Admin Edit] Meditation under Bodhi tree
   - [Admin Edit] Circumambulation rituals
   - [Admin Edit] Offering of flowers and incense
   Link: [Admin-Added Enlightenment Site 1]
```

**Sacred Texts**:
```
1. [Admin Edit] Tripitaka (Pali Canon)
   Excerpt: [Admin Edit] Complete canonical collection of Buddhist teachings
   Use in Itinerary: ✓

2. [Admin Edit] Dhammapada
   Excerpt: [Admin Edit] Sayings of the Buddha
   Use in Itinerary: ✓
```

*(Continue for remaining 5 religions with same pattern)*

---

## ✅ FIGMA LAYER STRUCTURE

### **Proper Organization**:

```
Page: Devotional Tourism
└── Layer Group: "Devotional Tourism – Rectified (Non-Hindu)"
    ├── Faith Selector
    ├── Sikh Home
    ├── Christian Home
    ├── Muslim Home
    ├── Buddhist Home
    ├── Jain Home
    ├── Jewish Home
    ├── Bahai Home
    ├── Indigenous Home
    ├── Parsi Home
    ├── Destinations (Shared)
    ├── Group Details (Shared)
    ├── Package Choice (Shared)
    ├── Pricing (Shared)
    └── Confirmation (Shared)
```

---

## 🎯 FINAL CHECKLIST

Before Publishing in Figma:

- [ ] All 7 frame types created
- [ ] All 9 religion-specific home screens
- [ ] All text uses proper hierarchy
- [ ] All borders are 2px or 4px solid black
- [ ] All admin content has dashed borders or [Admin] prefix
- [ ] All buttons have prototype connections
- [ ] Back buttons work on all screens
- [ ] Color palette matches specification
- [ ] Spacing uses 8px grid system
- [ ] Mobile frame size (375×812)
- [ ] Layer group properly named
- [ ] No real destination/festival/text names

---

## 📞 IMPLEMENTATION SUPPORT

If you encounter issues:

1. **Reference the live React prototype** by clicking "Devotional Low-Fi" button
2. **Screenshot any screen** for exact visual reference
3. **Copy all text content** directly from this document
4. **Use the color codes** provided in Global Specifications
5. **Follow the measurements** exactly as specified

---

*This guide provides everything needed to manually recreate the Devotional Tourism low-fi wireframe in Figma. The React prototype serves as your working reference.*

**Estimated Time to Build in Figma**: 6-8 hours for experienced Figma user

**Components to Create**: 15-20 reusable components recommended
