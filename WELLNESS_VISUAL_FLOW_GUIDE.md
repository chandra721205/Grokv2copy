# 🎨 GrokYatra Wellness System - Visual Flow Guide

## 📊 Complete Navigation Flow

```
┌─────────────────────────────────────────────────────────────────────┐
│                    WELLNESS JOURNEY COMPLETE MAP                      │
└─────────────────────────────────────────────────────────────────────┘

    ┌──────────────────┐
    │  Wellness Main   │  6 Categories: Medical Tourism, Ayurveda, 
    │     Screen       │  Yoga, Mental Health, Rehab, Executive
    └────────┬─────────┘
             │ Select Category
             ▼
    ┌──────────────────┐
    │  Sub-Category    │  Dual Buttons:
    │     Screen       │  • View Top Centers & Book
    └────────┬─────────┘  • 🎯 Get Personalized Plan ◄─────┐
             │                                              │
             │ Click "Get Personalized Plan"                │
             ▼                                              │
    ┌──────────────────┐                                   │
    │  Interest Form   │  10 Sections (A-J):               │
    │   (MODAL)        │  A. Treatment Selection            │
    │                  │  B. Trip Details                   │
    │  [Current Form]  │  C. Special Requirements          │
    │                  │  D. Health Profile (conditional)   │
    └────────┬─────────┘  E. Document Upload (conditional) │
             │            F-J. Additional sections          │
             │                                              │
             │ Submit Form                                  │
             ▼                                              │
    ┌──────────────────┐                                   │
    │  Inquiry         │  Status Tabs:                     │
    │   Dashboard      │  All • Pending • Quote Ready •    │
    │                  │  Booked                           │
    │  [NEW SCREEN 1]  │                                   │
    └────────┬─────────┘  Filter & View All Inquiries     │
             │                                              │
             │ View Proposal (when ready)                   │
             ▼                                              │
    ┌──────────────────┐                                   │
    │   Proposal       │  5 Sections:                      │
    │    Screen        │  A. Summary Card                  │
    │   (MODAL)        │  B. Detailed Breakdown            │
    │                  │  C. Special Requests              │
    │  [NEW SCREEN 2]  │  D. Daily Schedule                │
    └────────┬─────────┘  E. Action Buttons                │
             │                                              │
             │ Accept & Book                                │
             ▼                                              │
    ┌──────────────────┐                                   │
    │   Payment        │  Payment Gateway                  │
    │   Processing     │  (Not implemented in demo)        │
    └────────┬─────────┘                                   │
             │                                              │
             │ Payment Success                              │
             ▼                                              │
    ┌──────────────────┐                                   │
    │   Booking        │  🎉 Success Animation             │
    │  Confirmation    │  ✅ Checklist                     │
    │                  │  📱 What's Next (4 steps)         │
    │  [NEW SCREEN 3]  │  Buttons: Itinerary, Contact,    │
    └────────┬─────────┘  Back to Trip                     │
             │                                              │
             │ View Complete Itinerary                      │
             ▼                                              │
    ┌──────────────────┐                                   │
    │   Trip Hub       │  Wellness Services Section:       │
    │   Integration    │  • Upcoming Services (2)          │
    │                  │  • Day-wise Itinerary             │
    │  [NEW SCREEN 4]  │  • Hospital admission             │
    └──────────────────┘  • Doctor consultations           │
                          • Special meals                  │
                                                            │
    ┌──────────────────┐                                   │
    │  Health Profile  │  Wellness Interests Section:      │
    │   + Wellness     │  8 Checkboxes                     │
    │   Interests      │  • Cardiac Care                   │
    │                  │  • Joint Replacement              │
    │  [NEW SECTION]   │  • Panchakarma, etc.              │
    └──────────────────┘  → Browse Curated Trips ──────────┘

```

---

## 🎯 Screen Breakdown

### **SCREEN 1: Wellness Main Screen** (Existing)

```
┌─────────────────────────────────────────────────────────┐
│                                                           │
│   🌿 HEALTH & WELLNESS TOURISM                           │
│   Your journey to holistic health                        │
│                                                           │
│   ┌───────────────┐  ┌───────────────┐  ┌─────────────┐│
│   │ 🏥 Medical    │  │ 🌿 Ayurveda   │  │ 🧘 Yoga &   ││
│   │   Tourism     │  │  Panchakarma  │  │  Meditation ││
│   │               │  │               │  │             ││
│   │ [View Top]    │  │ [View Top]    │  │ [View Top]  ││
│   │ [🎯 Get Plan] │  │ [🎯 Get Plan] │  │ [🎯 Get Plan││
│   └───────────────┘  └───────────────┘  └─────────────┘│
│                                                           │
│   ┌───────────────┐  ┌───────────────┐  ┌─────────────┐│
│   │ 🧠 Mental     │  │ 🩹 Rehab      │  │ 💼 Executive││
│   │   Health      │  │               │  │   Wellness  ││
│   └───────────────┘  └───────────────┘  └─────────────┘│
│                                                           │
└─────────────────────────────────────────────────────────┘
```

### **SCREEN 2: Interest Form Modal** (Updated)

```
┌─────────────────────────────────────────────────────────┐
│  Your Personalized [Treatment] Plan             [X]     │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
│  Progress: ▓▓▓▓░░░░░░ 40% • Takes 3-5 minutes          │
│                                                           │
│  ┌─ A. TREATMENT SELECTION ─────────────────────────┐   │
│  │  Selected: 🏥 Medical Tourism                     │   │
│  │  Specific: [Dropdown: Cardiac Surgery ▼]         │   │
│  └───────────────────────────────────────────────────┘   │
│                                                           │
│  ┌─ B. TRIP DETAILS ─────────────────────────────────┐  │
│  │  Link to Your Trip:                                │  │
│  │  ○ Create New Wellness Trip                        │  │
│  │  ○ Add to Existing Trip: [Dropdown ▼]             │  │
│  │                                                     │  │
│  │  Travel Dates: [Start] ─── [End]                   │  │
│  │  Travelers: [- 1 +]  Attendants: [- 2 +]          │  │
│  └───────────────────────────────────────────────────┘  │
│                                                           │
│  ┌─ C. SPECIAL REQUIREMENTS ──────────────────────────┐ │
│  │  Special Care Needs:                                │ │
│  │  ☑ Senior Care (65+)     ☑ Hindi Interpreter       │ │
│  │  ☐ Mobility Support      ☐ Post-Treatment Nursing  │ │
│  │  ☐ Dietary Management    ☐ Airport Escort          │ │
│  │  ☐ Other: [___________]                            │ │
│  └───────────────────────────────────────────────────┘  │
│                                                           │
│  ┌─ D. HEALTH PROFILE (Conditional) ──────────────────┐ │
│  │  💡 For better safety & customization:              │ │
│  │  [Complete Health Profile (2 min)]                  │ │
│  │  • Encrypted & shared only upon booking             │ │
│  │  • AI-powered safety recommendations                │ │
│  └───────────────────────────────────────────────────┘  │
│                                                           │
│  ┌─ E. DOCUMENT UPLOAD (Medical Tourism Only) ────────┐ │
│  │  📄 Click to upload medical documents               │ │
│  │  or drag and drop files here                        │ │
│  │  [Choose Files]                                     │ │
│  └───────────────────────────────────────────────────┘  │
│                                                           │
│  [Sections F-J collapsed for brevity]                    │
│                                                           │
│  ┌───────────────────────────────────────────────────┐  │
│  │ [✅ Submit for Custom Quote] [⚡ Book Standard]    │  │
│  │ 🔒 Encrypted • Reviewed in 24 hours                │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

### **SCREEN 3: Inquiry Dashboard** (NEW)

```
┌─────────────────────────────────────────────────────────┐
│  🌿 My Wellness Inquiries                                │
│  Track your health & wellness treatment requests         │
│                                                           │
│  Filters: [All: 6] [Pending: 3] [Quote Ready: 1] [Booked: 2] │
│                                                           │
│  ┌─ INQUIRY CARD ─────────────────────────────────────┐  │
│  │  🏥 [Quote Ready]                                   │  │
│  │  Medical Tourism - Cardiac Surgery                  │  │
│  │  Fortis Hospital, Bangalore                         │  │
│  │  Submitted: 15 Mar 2024 • For: "Dad's Heart Trip"  │  │
│  │                                                      │  │
│  │  📅 Apr 10-25  👥 1+2  🎯 Senior Care, Hindi        │  │
│  │                                                      │  │
│  │  📋 View Custom Proposal (Ready in 24h)             │  │
│  │  [📋 View Custom Proposal →]                        │  │
│  └─────────────────────────────────────────────────────┘  │
│                                                           │
│  ┌─ INQUIRY CARD ─────────────────────────────────────┐  │
│  │  🌿 [Pending]                                       │  │
│  │  Ayurveda & Panchakarma - Panchakarma Detox        │  │
│  │  Somatheeram Resort, Kerala                         │  │
│  │  ⏳ Specialist reviewing your request               │  │
│  │  [💬 Chat with Advisor]                             │  │
│  └─────────────────────────────────────────────────────┘  │
│                                                           │
│  ┌─ INQUIRY CARD ─────────────────────────────────────┐  │
│  │  🏥 [Booked ✅]                                     │  │
│  │  Medical Tourism - Joint Replacement                │  │
│  │  Apollo Hospitals, Chennai                          │  │
│  │  ✅ Added to "Mom's Knee Surgery"                   │  │
│  │  [View in Trip →]                                   │  │
│  └─────────────────────────────────────────────────────┘  │
│                                                           │
└─────────────────────────────────────────────────────────┘
```

### **SCREEN 4: Proposal View Modal** (NEW)

```
┌─────────────────────────────────────────────────────────┐
│  Your Personalized Cardiac Surgery Proposal      [X]     │
│  Prepared by GrokYatra Health Team • Valid 7 days       │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
│                                                           │
│  ┌─ A. PROPOSAL SUMMARY ────────────────────────────┐   │
│  │  Total Package: ₹4,85,000         [Saves 72%]    │   │
│  │  Includes: Treatment + 14-day stay + meals +      │   │
│  │  transfers                                         │   │
│  │  ────────────────────────────────────────────────  │   │
│  │  🏥 Apollo Hospitals, Chennai                     │   │
│  │  👨‍⚕️ Dr. Rajesh Verma (25 yrs exp)                │   │
│  │  📅 Apr 15-29, 2024                               │   │
│  │  ⭐ JCI Accredited • 94% Success Rate             │   │
│  └───────────────────────────────────────────────────┘   │
│                                                           │
│  ┌─ B. DETAILED BREAKDOWN ──────────────────────────┐   │
│  │  Treatment: ₹3,20,000                             │   │
│  │  • Bypass Surgery • ICU (3 days) • Medicines      │   │
│  │                                                    │   │
│  │  Accommodation: ₹1,20,000                         │   │
│  │  • Deluxe Room (Patient + 2) • 14 nights         │   │
│  │  • Special Diabetic/Jain meals                    │   │
│  │                                                    │   │
│  │  Transport: ₹45,000                               │   │
│  │  • Airport-Hospital transfers • Medical escort    │   │
│  │                                                    │   │
│  │  Total: ₹4,85,000 (Saves 72% vs US pricing)      │   │
│  └───────────────────────────────────────────────────┘   │
│                                                           │
│  ┌─ C. SPECIAL REQUESTS ADDRESSED ──────────────────┐   │
│  │  ✅ Senior Care Package Included:                 │   │
│  │  • Dedicated nurse (8 hrs/day)                    │   │
│  │  • Ground-floor accessible room                   │   │
│  │                                                    │   │
│  │  ✅ Language Support:                             │   │
│  │  • Hindi coordinator • Daily updates              │   │
│  │                                                    │   │
│  │  ✅ Dietary Arranged:                             │   │
│  │  • Jain meals • Diabetic-friendly menu           │   │
│  └───────────────────────────────────────────────────┘   │
│                                                           │
│  ┌─ D. DAILY SCHEDULE ───────────────────────────────┐  │
│  │  Day 1-3   Pre-op tests & consultation            │  │
│  │  Day 4     Surgery + ICU monitoring               │  │
│  │  Day 5-7   Hospital recovery                      │  │
│  │  Day 8-14  Hotel recovery + follow-ups            │  │
│  │  Day 15    Final check-up & departure             │  │
│  └───────────────────────────────────────────────────┘  │
│                                                           │
│  ┌─ E. ACTION BUTTONS ───────────────────────────────┐  │
│  │  [✅ Accept & Book Now] [📝 Request Modifications]│  │
│  │  [💬 Chat with Health Advisor]                    │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

### **SCREEN 5: Booking Confirmation** (NEW)

```
┌─────────────────────────────────────────────────────────┐
│                                                           │
│              ┌───────────────┐                           │
│              │  ✅ SUCCESS   │                           │
│              └───────────────┘                           │
│                                                           │
│       🎉 Your Wellness Journey is Confirmed!             │
│                                                           │
│  ┌─ CONFIRMATION CHECKLIST ──────────────────────────┐  │
│  │  ✅ Medical Package Booked                         │  │
│  │  ✅ Senior Care Arranged                           │  │
│  │  ✅ Special Diet Confirmed                         │  │
│  │  ✅ Trip Updated: "Dad's Heart Treatment"          │  │
│  └───────────────────────────────────────────────────┘  │
│                                                           │
│  ┌─ 📱 WHAT'S NEXT ─────────────────────────────────┐  │
│  │  1. Health coordinator contacts in 2 hours         │  │
│  │  2. Receive hospital admission documents           │  │
│  │  3. Visa assistance (if international)             │  │
│  │  4. Pre-travel health checklist                    │  │
│  └───────────────────────────────────────────────────┘  │
│                                                           │
│  [📋 View Complete Itinerary]                            │
│  [👨‍⚕️ Contact Health Team (24/7)]                       │
│  [🏠 Back to Trip Planning]                              │
│                                                           │
│  🔒 Booking ID: WB-123456                                │
└─────────────────────────────────────────────────────────┘
```

### **SCREEN 6: Trip Hub Integration** (NEW)

```
┌─────────────────────────────────────────────────────────┐
│  Dad's Heart Treatment Trip                              │
│  Apr 15 - May 7, 2024 • Chennai & Kerala                │
│                                                           │
│  ┌─ WELLNESS SERVICES (2) ───────────────────────────┐  │
│  │  🏥 Apr 15-29 • Medical Tourism                    │  │
│  │  Apollo Hospitals, Chennai • Cardiac Surgery       │  │
│  │  [Status: Confirmed ✅] [View Details]             │  │
│  │                                                     │  │
│  │  🌿 May 1-7 • Ayurveda Recovery                    │  │
│  │  Somatheeram Resort, Kerala • Panchakarma          │  │
│  │  [Status: Quote Pending] [Review Proposal]         │  │
│  └───────────────────────────────────────────────────┘  │
│                                                           │
│  ┌─ APRIL 15, MONDAY ─────────────────────────────────┐ │
│  │  🕘 9:00 AM  🏥 Hospital Admission                 │ │
│  │  Apollo Hospitals, Greams Road                     │ │
│  │  • Report submission • Room allocation             │ │
│  │  📞 Hospital: +91-XXXXXXXXXX                       │ │
│  │                                                     │ │
│  │  🕐 1:00 PM  👨‍⚕️ Doctor Consultation               │ │
│  │  Dr. Rajesh Verma - Pre-surgery briefing           │ │
│  │                                                     │ │
│  │  🕔 5:00 PM  🍽 Special Dinner                     │ │
│  │  Jain diabetic meal delivered to room              │ │
│  └───────────────────────────────────────────────────┘  │
│                                                           │
└─────────────────────────────────────────────────────────┘
```

### **SCREEN 7: Health Profile + Wellness Interests** (NEW SECTION)

```
┌─────────────────────────────────────────────────────────┐
│  Health Profile                                          │
│                                                           │
│  [Existing health profile sections above...]             │
│                                                           │
│  ┌─ WELLNESS INTERESTS ──────────────────────────────┐  │
│  │  Select treatments you're considering:              │  │
│  │  This helps us prioritize relevant providers        │  │
│  │                                                      │  │
│  │  ☑ ❤️ Cardiac Care        ☐ 🦴 Joint Replacement   │  │
│  │  ☑ 🌿 Panchakarma Detox   ☐ 😌 Stress Relief       │  │
│  │  ☐ 🧘 Yoga Retreats       ☐ 🧠 Mental Wellness     │  │
│  │  ☐ 🩹 Post-Surgery        ☐ 💼 Executive Check-up  │  │
│  └─────────────────────────────────────────────────────┘ │
│                                                           │
│  ┌─ BASED ON YOUR PROFILE ──────────────────────────┐   │
│  │  We recommend:                                     │   │
│  │  🏔️ Ooty - Cardiac-friendly high-altitude        │   │
│  │  🌳 Coorg - Peaceful environment for recovery     │   │
│  │  ♿ Senior-accessible Ayurveda centers             │   │
│  │                                                    │   │
│  │  [Browse Curated Wellness Trips →]                │   │
│  └───────────────────────────────────────────────────┘   │
│                                                           │
└─────────────────────────────────────────────────────────┘
```

---

## 🎨 Button State Examples

### **"Get Personalized Plan" Button States**

```
┌──────────────────────────────────────────┐
│  DEFAULT STATE                            │
│  ┌────────────────────────────────────┐  │
│  │ 🎯 Get Personalized Plan           │  │
│  └────────────────────────────────────┘  │
│  Purple/Pink gradient, normal size       │
└──────────────────────────────────────────┘

┌──────────────────────────────────────────┐
│  HOVER STATE                              │
│  ┌────────────────────────────────────┐  │
│  │ 🎯 Get Personalized Plan           │  │
│  └────────────────────────────────────┘  │
│  Darker gradient, scale 1.02             │
└──────────────────────────────────────────┘

┌──────────────────────────────────────────┐
│  ACTIVE (PRESSED) STATE                   │
│  ┌────────────────────────────────────┐  │
│  │ 🎯 Get Personalized Plan           │  │
│  └────────────────────────────────────┘  │
│  Darkest gradient, scale 0.98            │
└──────────────────────────────────────────┘

┌──────────────────────────────────────────┐
│  LOADING STATE                            │
│  ┌────────────────────────────────────┐  │
│  │ ⏳ Loading Your Plan...            │  │
│  └────────────────────────────────────┘  │
│  Gray with spinner animation             │
└──────────────────────────────────────────┘
```

### **Status Badge Color System**

```
🟡 PENDING     #FFB74D  [⏳ Pending]
🔵 QUOTE READY #64B5F6  [📋 Quote Ready]
🟢 BOOKED      #81C784  [✅ Booked]
⚪ COMPLETED   #BDBDBD  [✔️ Completed]
```

---

## 📱 Responsive Layout Examples

### **Desktop (1024px+)**

```
┌──────────────────────────────────────────────────────┐
│  Header                                              │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐    │
│  │   Card 1   │  │   Card 2   │  │   Card 3   │    │
│  └────────────┘  └────────────┘  └────────────┘    │
│  2-3 column grid layout                             │
└──────────────────────────────────────────────────────┘
```

### **Tablet (768-1023px)**

```
┌──────────────────────────────────┐
│  Header                          │
│  ┌────────────┐  ┌────────────┐  │
│  │   Card 1   │  │   Card 2   │  │
│  └────────────┘  └────────────┘  │
│  ┌────────────┐                  │
│  │   Card 3   │                  │
│  └────────────┘                  │
│  2 column grid, wraps to single  │
└──────────────────────────────────┘
```

### **Mobile (<768px)**

```
┌──────────────────┐
│  Header          │
│  ┌────────────┐  │
│  │   Card 1   │  │
│  └────────────┘  │
│  ┌────────────┐  │
│  │   Card 2   │  │
│  └────────────┘  │
│  ┌────────────┐  │
│  │   Card 3   │  │
│  └────────────┘  │
│  Single column   │
└──────────────────┘
```

---

**Visual Guide Version:** 1.0.0  
**Last Updated:** January 21, 2026  
**Status:** ✅ Production Ready
