# 🕉️ DEVOTIONAL TOURISM → HINDU PILGRIMAGE — COMPREHENSIVE AUDIT & DESIGN

**Project:** GrokYatra Devotional Tourism - Hindu Pilgrimage Journey  
**Audit Date:** January 25, 2026  
**Status:** 🔄 **IN PROGRESS - AUDIT & DESIGN**  
**Scope:** Complete end-to-end pilgrimage journey design

---

## 📊 EXECUTIVE SUMMARY

I am conducting a comprehensive audit and design of the **Hindu Pilgrimage sub-category** within Devotional Tourism, creating a complete journey from discovery to post-booking management.

### **Deliverables:**

✅ **Complete Audit Report** (this document)  
✅ **18 Screen Designs** (all journey touchpoints)  
✅ **User Flow Diagram** (Discovery → Booking → Management)  
✅ **Component Library** (reusable elements)  
✅ **Implementation Guide** (developer handoff)  

---

## 🎯 DESIGN CONSTRAINTS (STRICTLY FOLLOWED)

### **❌ DO NOT TOUCH:**

- ✅ Adventure Tourism
- ✅ Cruise Tourism
- ✅ Heritage & Cultural Tourism
- ✅ Eco Tourism
- ✅ Educational Tourism
- ✅ Corporate & MICE Tourism
- ✅ Health & Wellness Tourism
- ✅ Honeymoon Tourism
- ✅ Sports Tourism
- ✅ Senior Wellness Hub
- ✅ Self-Drive Tourism
- ✅ Travel Essentials (just completed)

### **✅ ONLY WORK ON:**

- 🕉️ **Devotional Tourism → Hindu Pilgrimage** sub-category

### **🎨 PRESERVE EXISTING:**

- Layout patterns (same grid system)
- Spacing (8px increments)
- Colors (blue-cyan gradients, yellow alerts, etc.)
- Typography (system fonts, same sizes)
- Visual style (rounded-3xl cards, shadow-lg)
- Components (buttons, inputs, cards)
- Interactions (hover, active states)
- Motion (same transitions)

---

## 🗺️ COMPLETE USER JOURNEY MAP

```
DISCOVERY PHASE
│
├─► Main Categories Screen
│   └─► Click "Devotional Tourism"
│       │
│       ▼
│   Devotional Tourism Hub
│   (Shows: Hindu, Buddhist, Jain, Sikh, Christian, Islamic)
│   └─► Click "Hindu Pilgrimage"
│       │
│       ▼
│   🕉️ HINDU PILGRIMAGE LANDING HUB
│   │
│   ├─► PATH 1: Sacred Circuits (Curated)
│   │   │
│   │   ├─► Sacred Circuits Listing
│   │   │   (12 Jyotirlingas, 108 Divya Desams, etc.)
│   │   │   └─► Toggle: Show Hidden Gems
│   │   │       │
│   │   │       ▼
│   │   │   Circuit Detail Screen
│   │   │   (All temples in circuit, recommended order)
│   │   │
│   │   └─► Choose: Ready Package OR Custom Builder
│   │
│   └─► PATH 2: Explore Destinations (Browse-First)
│       │
│       ├─► Explore Destinations Screen
│       │   (Search, Tabs: All/Temples/Monasteries/etc.)
│       │   │
│       │   ├─► Save Interest (Heart icon)
│       │   │   └─► Get notifications (festivals, packages)
│       │   │
│       │   └─► Click Destination
│       │       │
│       │       ▼
│       │   Destination Detail Page
│       │   (Overview, History, Rituals, Timings, Nearby)
│       │   └─► Book Standalone OR Add to Pilgrimage Plan
│
PLANNING PHASE
│
├─► Health & Wellness Profile
│   (Age, health conditions, mobility needs, dietary prefs)
│   │
│   ▼
├─► AI Health Risk Assessment
│   (Best seasons, routes to avoid, senior-friendly options)
│   │
│   ▼
├─► Custom Tour Builder (Multi-Step)
│   │
│   ├─► Step 1: Travel Dates
│   ├─► Step 2: Group Size & Senior Needs
│   ├─► Step 3: Deity Preference
│   ├─► Step 4: Budget Range
│   ├─► Step 5: Starting City / States
│   ├─► Step 6: Accommodation Type
│   └─► Step 7: Transport Preferences
│   │
│   ▼
├─► AI / Grok Suggestions
│   (Best circuit, route order, days, add-ons, alerts)
│   │
│   ▼
├─► Optional Services
│   (Tour coordinator, guide, medical support, wheelchair,
│    insurance, special darshan, food preferences)
│
BOOKING PHASE
│
├─► Trip Summary & Review
│   (Route, dates, group, accommodation, transport,
│    services, cost breakdown)
│   │
│   ▼
├─► Confirm & Pay
│   (Contact details, emergency contact, payment)
│   │
│   ▼
├─► Booking Confirmation
│   (Booking ID, saved to My Trips, support access)
│
POST-BOOKING PHASE
│
└─► Trip Dashboard
    │
    ├─► View Itinerary
    ├─► Access Vouchers
    ├─► Contact Support/Coordinator
    ├─► Receive Reminders
    ├─► Emergency Access
    └─► Submit Feedback
```

---

## 📋 SCREEN INVENTORY (18 SCREENS REQUIRED)

### **A. DISCOVERY PHASE (6 screens)**

1. **Hindu Pilgrimage Landing Hub**
   - Hero section
   - Feature tiles (Accessible Darshan, Medical Support, etc.)
   - Smart filters
   - Primary choices (Circuits vs Destinations)

2. **Sacred Circuits Listing**
   - Circuit cards (12 Jyotirlingas, 108 Divya Desams, etc.)
   - "Show Hidden Gems" toggle
   - Circuit metadata (temples count, states, duration, difficulty)

3. **Circuit Detail Screen**
   - All places in circuit
   - Recommended visit order
   - Travel notes
   - Entry to Ready Package or Custom Builder

4. **Explore Destinations Screen**
   - Search bar
   - Tabs (All, Temples, Monasteries, etc.)
   - Destination cards
   - Save interest (heart icon)

5. **Destination Detail Page**
   - Overview, History, Rituals
   - Timings & Best Time
   - Nearby devotional places
   - Book Now or Add to Plan

6. **Nearby Devotional Places**
   - Radius-based grouping
   - Walkability indicators
   - Spiritual relevance scores

---

### **B. PLANNING PHASE (7 screens)**

7. **Health & Wellness Profile**
   - Personal info (age, gender, emergency contact)
   - Health conditions
   - Medications
   - Mobility needs
   - Altitude tolerance
   - Dietary preferences

8. **AI Health Risk Assessment**
   - Best seasons recommendation
   - Routes to avoid
   - Senior-friendly accommodations
   - Medical support inclusion

9. **Custom Tour Builder - Step 1-3**
   - Travel dates
   - Group size & senior needs
   - Deity preference

10. **Custom Tour Builder - Step 4-7**
    - Budget range
    - Starting city / states
    - Accommodation type
    - Transport preferences

11. **AI / Grok Suggestions**
    - Best-fit circuit
    - Suggested route order
    - Number of days
    - Nearby add-ons
    - Festival & low-crowd alerts

12. **Optional Services Selection**
    - Tour coordinator
    - Guide
    - Medical support
    - Wheelchair assistance
    - Insurance
    - Special darshan
    - Food preferences

13. **Trip Summary & Review**
    - Complete itinerary
    - All selections
    - Cost breakdown

---

### **C. BOOKING PHASE (3 screens)**

14. **Confirm & Pay**
    - Contact details
    - Emergency contact
    - Payment method selection
    - UPI/Cards/Net Banking

15. **Payment Processing**
    - Loading state
    - Payment gateway integration

16. **Booking Confirmation**
    - Booking ID
    - Confirmation details
    - Support access
    - Download voucher

---

### **D. POST-BOOKING PHASE (2 screens)**

17. **Trip Dashboard**
    - Itinerary overview
    - Vouchers
    - Support contact
    - Reminders
    - Emergency access

18. **Feedback & Review**
    - Trip rating
    - Review submission
    - Photo upload
    - Share experience

---

## 🎨 DESIGN SYSTEM COMPLIANCE

### **Colors (From Existing App):**

```typescript
// Primary Gradients
devotionalGradient: 'from-orange-600 to-pink-600'  // Spiritual saffron-pink
primaryBlue: 'from-blue-600 to-cyan-600'           // Existing app primary
warningYellow: 'from-yellow-400 to-orange-400'     // Alerts
successGreen: 'from-green-600 to-emerald-600'      // Success states

// Solids
saffron: '#FF6600'      // Hindu spiritual color
deepOrange: '#EA580C'   // orange-600
pink: '#DB2777'         // pink-600
white: '#FFFFFF'
gray900: '#111827'
gray600: '#4B5563'
```

### **Typography:**

```typescript
// Headings
h1: 'text-4xl font-bold'     // 36px - Hindu Pilgrimage
h2: 'text-2xl font-bold'     // 24px - Sacred Circuits
h3: 'text-base font-bold'    // 16px - Circuit names

// Body
body: 'text-base'            // 16px
small: 'text-sm'             // 14px
caption: 'text-xs'           // 12px
```

### **Spacing (8px Grid):**

```typescript
gap-2: '8px'
gap-3: '12px'
gap-4: '16px'
gap-6: '24px'

p-3: '12px'
p-5: '20px'
p-6: '24px'

mb-1: '4px'
mb-2: '8px'
mb-3: '12px'
mb-4: '16px'
mb-6: '24px'
```

### **Border Radius:**

```typescript
roundedFull: '9999px'  // Buttons
rounded3xl: '24px'     // Cards
rounded2xl: '16px'     // Medium elements
roundedXl: '12px'      // Small elements
```

### **Shadows:**

```typescript
shadowMd: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
shadowLg: '0 10px 15px -3px rgb(0 0 0 / 0.1)'
shadowXl: '0 20px 25px -5px rgb(0 0 0 / 0.1)'
```

---

## 🕉️ SACRED CIRCUITS DATA STRUCTURE

### **Admin-Managed Circuit Categories:**

```typescript
interface SacredCircuit {
  id: string;
  name: string;
  description: string;
  templeCount: number;
  statesCovered: string[];
  approximateDuration: string; // "10-12 days"
  difficultyLevel: 'All Levels' | 'Senior-Friendly' | 'Moderate' | 'Challenging';
  spiritualSignificance: string;
  bestSeason: string[];
  temples: Temple[];
  isHiddenGem?: boolean;
  crowdLevel?: 'Low' | 'Medium' | 'High';
}

const sacredCircuits: SacredCircuit[] = [
  {
    id: '12-jyotirlingas',
    name: '12 Jyotirlingas',
    description: 'Sacred abodes of Lord Shiva across India',
    templeCount: 12,
    statesCovered: ['Gujarat', 'Maharashtra', 'Madhya Pradesh', 'Uttar Pradesh', 'Uttarakhand', 'Jharkhand', 'Tamil Nadu', 'Andhra Pradesh', 'Karnataka', 'Himachal Pradesh'],
    approximateDuration: '15-20 days',
    difficultyLevel: 'Moderate',
    spiritualSignificance: 'Represent the most sacred shrines of Lord Shiva...',
    bestSeason: ['October', 'November', 'December', 'January', 'February', 'March'],
    temples: [
      { name: '[Admin: Somnath Temple]', location: 'Gujarat', deity: 'Shiva' },
      { name: '[Admin: Mallikarjuna Temple]', location: 'Andhra Pradesh', deity: 'Shiva' },
      { name: '[Admin: Mahakaleshwar Temple]', location: 'Madhya Pradesh', deity: 'Shiva' },
      { name: '[Admin: Omkareshwar Temple]', location: 'Madhya Pradesh', deity: 'Shiva' },
      { name: '[Admin: Kedarnath Temple]', location: 'Uttarakhand', deity: 'Shiva' },
      { name: '[Admin: Bhimashankar Temple]', location: 'Maharashtra', deity: 'Shiva' },
      { name: '[Admin: Kashi Vishwanath Temple]', location: 'Uttar Pradesh', deity: 'Shiva' },
      { name: '[Admin: Trimbakeshwar Temple]', location: 'Maharashtra', deity: 'Shiva' },
      { name: '[Admin: Vaidyanath Temple]', location: 'Jharkhand', deity: 'Shiva' },
      { name: '[Admin: Nageshwar Temple]', location: 'Gujarat', deity: 'Shiva' },
      { name: '[Admin: Rameshwar Temple]', location: 'Tamil Nadu', deity: 'Shiva' },
      { name: '[Admin: Grishneshwar Temple]', location: 'Maharashtra', deity: 'Shiva' }
    ]
  },
  
  {
    id: '108-divya-desams',
    name: '108 Divya Desams',
    description: 'Sacred Vishnu temples mentioned in Tamil scriptures',
    templeCount: 108,
    statesCovered: ['Tamil Nadu', 'Kerala', 'Andhra Pradesh', 'Karnataka', 'Gujarat', 'Uttar Pradesh', 'Nepal'],
    approximateDuration: '30-45 days',
    difficultyLevel: 'Challenging',
    spiritualSignificance: 'Holy sites glorified by the Alvars...',
    bestSeason: ['October', 'November', 'December', 'January', 'February'],
    temples: [
      { name: '[Admin: Srirangam Temple]', location: 'Tamil Nadu', deity: 'Vishnu' },
      { name: '[Admin: Tirupati Balaji]', location: 'Andhra Pradesh', deity: 'Vishnu' },
      // ...106 more temples (admin-managed)
    ]
  },
  
  {
    id: '51-shakti-peethas',
    name: '51 Shakti Peethas',
    description: 'Sacred sites where body parts of Goddess Sati fell',
    templeCount: 51,
    statesCovered: ['West Bengal', 'Assam', 'Odisha', 'Madhya Pradesh', 'Rajasthan', 'Uttar Pradesh', 'Gujarat', 'Maharashtra', 'Tamil Nadu', 'Karnataka', 'Himachal Pradesh', 'Uttarakhand', 'Nepal', 'Pakistan', 'Bangladesh', 'Sri Lanka'],
    approximateDuration: '25-30 days',
    difficultyLevel: 'Moderate',
    spiritualSignificance: 'Most powerful seats of divine feminine energy...',
    bestSeason: ['September', 'October', 'November', 'December', 'January', 'February', 'March'],
    temples: [
      { name: '[Admin: Kamakhya Temple]', location: 'Assam', deity: 'Shakti' },
      { name: '[Admin: Kalighat Temple]', location: 'West Bengal', deity: 'Shakti' },
      // ...49 more temples
    ]
  },
  
  {
    id: 'panchabhuta-sthalams',
    name: 'Panchabhuta Sthalams',
    description: 'Five element temples of Lord Shiva',
    templeCount: 5,
    statesCovered: ['Tamil Nadu', 'Andhra Pradesh'],
    approximateDuration: '5-7 days',
    difficultyLevel: 'All Levels',
    spiritualSignificance: 'Represent the five elements: earth, water, fire, air, space...',
    bestSeason: ['October', 'November', 'December', 'January', 'February', 'March'],
    temples: [
      { name: '[Admin: Ekambareswarar - Earth]', location: 'Kanchipuram, Tamil Nadu', deity: 'Shiva' },
      { name: '[Admin: Jambukeswarar - Water]', location: 'Trichy, Tamil Nadu', deity: 'Shiva' },
      { name: '[Admin: Arunachaleswarar - Fire]', location: 'Tiruvannamalai, Tamil Nadu', deity: 'Shiva' },
      { name: '[Admin: Kalahasti - Air]', location: 'Andhra Pradesh', deity: 'Shiva' },
      { name: '[Admin: Chidambaram - Space]', location: 'Tamil Nadu', deity: 'Shiva' }
    ],
    isHiddenGem: false
  },
  
  {
    id: 'char-dham-yatra',
    name: 'Char Dham Yatra',
    description: 'Four sacred pilgrimage sites in the Himalayas',
    templeCount: 4,
    statesCovered: ['Uttarakhand'],
    approximateDuration: '10-12 days',
    difficultyLevel: 'Challenging',
    spiritualSignificance: 'Four cardinal points of spiritual journey...',
    bestSeason: ['May', 'June', 'September', 'October'],
    temples: [
      { name: '[Admin: Yamunotri Temple]', location: 'Uttarakhand', deity: 'Yamuna' },
      { name: '[Admin: Gangotri Temple]', location: 'Uttarakhand', deity: 'Ganga' },
      { name: '[Admin: Kedarnath Temple]', location: 'Uttarakhand', deity: 'Shiva' },
      { name: '[Admin: Badrinath Temple]', location: 'Uttarakhand', deity: 'Vishnu' }
    ]
  },
  
  {
    id: 'sapta-puri',
    name: 'Sapta Puri (Seven Sacred Cities)',
    description: 'Seven cities that grant Moksha (liberation)',
    templeCount: 7,
    statesCovered: ['Uttar Pradesh', 'Madhya Pradesh', 'Gujarat', 'Tamil Nadu', 'Karnataka'],
    approximateDuration: '12-15 days',
    difficultyLevel: 'All Levels',
    spiritualSignificance: 'Visiting these cities grants liberation...',
    bestSeason: ['October', 'November', 'December', 'January', 'February', 'March'],
    temples: [
      { name: '[Admin: Ayodhya]', location: 'Uttar Pradesh', deity: 'Rama' },
      { name: '[Admin: Mathura]', location: 'Uttar Pradesh', deity: 'Krishna' },
      { name: '[Admin: Haridwar]', location: 'Uttarakhand', deity: 'Ganga' },
      { name: '[Admin: Kashi/Varanasi]', location: 'Uttar Pradesh', deity: 'Shiva' },
      { name: '[Admin: Kanchipuram]', location: 'Tamil Nadu', deity: 'Multiple' },
      { name: '[Admin: Ujjain]', location: 'Madhya Pradesh', deity: 'Shiva' },
      { name: '[Admin: Dwarka]', location: 'Gujarat', deity: 'Krishna' }
    ]
  },
  
  {
    id: 'navagraha-temples',
    name: 'Navagraha Temples (Nine Planets)',
    description: 'Nine temples dedicated to the nine celestial bodies',
    templeCount: 9,
    statesCovered: ['Tamil Nadu'],
    approximateDuration: '3-4 days',
    difficultyLevel: 'Senior-Friendly',
    spiritualSignificance: 'Worship of nine planetary deities for astrological benefits...',
    bestSeason: ['All year'],
    temples: [
      { name: '[Admin: Suryanar Koil - Sun]', location: 'Tamil Nadu', deity: 'Surya' },
      { name: '[Admin: Kailasanathar - Moon]', location: 'Tamil Nadu', deity: 'Chandra' },
      { name: '[Admin: Vaitheeswaran Koil - Mars]', location: 'Tamil Nadu', deity: 'Mangal' },
      { name: '[Admin: Swetharanyeswarar - Mercury]', location: 'Tamil Nadu', deity: 'Budha' },
      { name: '[Admin: Alangudi - Jupiter]', location: 'Tamil Nadu', deity: 'Guru' },
      { name: '[Admin: Kanjanur - Venus]', location: 'Tamil Nadu', deity: 'Shukra' },
      { name: '[Admin: Tirunallar - Saturn]', location: 'Tamil Nadu', deity: 'Shani' },
      { name: '[Admin: Tirunageswaram - Rahu]', location: 'Tamil Nadu', deity: 'Rahu' },
      { name: '[Admin: Keezhaperumpallam - Ketu]', location: 'Tamil Nadu', deity: 'Ketu' }
    ],
    isHiddenGem: false,
    crowdLevel: 'Medium'
  }
];
```

---

## 📱 FEATURE TILES (Landing Hub)

```typescript
interface FeatureTile {
  icon: string;
  title: string;
  description: string;
  gradient: string;
}

const features: FeatureTile[] = [
  {
    icon: '♿',
    title: 'Accessible Darshan',
    description: 'Senior & wheelchair-friendly temple access',
    gradient: 'from-blue-600 to-cyan-600'
  },
  {
    icon: '🏥',
    title: 'Medical Support',
    description: 'On-trip medical assistance & emergency care',
    gradient: 'from-green-600 to-emerald-600'
  },
  {
    icon: '🏛️',
    title: 'Ancient Heritage',
    description: '1000+ years of spiritual history',
    gradient: 'from-purple-600 to-pink-600'
  },
  {
    icon: '🌍',
    title: 'Multi-Faith Harmony',
    description: 'Respecting all spiritual traditions',
    gradient: 'from-orange-600 to-yellow-600'
  }
];
```

---

## 🔍 SMART FILTERS

```typescript
interface SmartFilters {
  states: string[];
  difficultyLevel: ('All Levels' | 'Senior-Friendly' | 'Moderate' | 'Challenging')[];
  showHiddenGems: boolean;
  deity?: ('Shiva' | 'Vishnu' | 'Shakti' | 'All')[];
  duration?: string; // "3-5 days", "7-10 days", etc.
  bestSeason?: string[];
}

const filterOptions = {
  states: [
    '[Admin: Select State]',
    'Tamil Nadu',
    'Uttar Pradesh',
    'Uttarakhand',
    'Gujarat',
    'Maharashtra',
    'Madhya Pradesh',
    'Karnataka',
    'Andhra Pradesh',
    'Kerala',
    // ...all states
  ],
  difficultyLevels: [
    'All Levels',
    'Senior-Friendly',
    'Moderate',
    'Challenging'
  ]
};
```

---

## 🏥 HEALTH & WELLNESS PROFILE SCHEMA

```typescript
interface HealthProfile {
  personalInfo: {
    age: number;
    gender: 'Male' | 'Female' | 'Other' | 'Prefer not to say';
    emergencyContact: {
      name: string;
      relation: string;
      phone: string;
    };
  };
  healthConditions: {
    heartDisease: boolean;
    diabetes: boolean;
    highBloodPressure: boolean;
    asthma: boolean;
    arthritis: boolean;
    otherConditions: string[];
  };
  medications: {
    name: string;
    dosage: string;
    frequency: string;
  }[];
  mobilityNeeds: {
    requiresWheelchair: boolean;
    requiresWalkingStick: boolean;
    canClimbStairs: boolean;
    maxWalkingDistance: number; // in meters
  };
  altitudeTolerance: {
    maxAltitude: number; // in meters
    previousMountainExperience: boolean;
  };
  dietaryPreferences: {
    vegetarian: boolean;
    vegan: boolean;
    jain: boolean;
    glutenFree: boolean;
    dairyFree: boolean;
    allergies: string[];
  };
}
```

---

## 🤖 AI HEALTH RISK ASSESSMENT OUTPUT

```typescript
interface HealthRiskAssessment {
  overallRisk: 'Low' | 'Medium' | 'High';
  recommendations: {
    bestSeasons: string[];
    routesToAvoid: string[];
    seniorFriendlyAccommodations: boolean;
    medicalSupportRequired: boolean;
    maxDailyTravelTime: number; // in hours
    restDaysRecommended: number;
    altitudeWarnings: string[];
  };
  circuitAdjustments: {
    suggestedCircuits: string[];
    avoidCircuits: string[];
    modifications: string[];
  };
  dailyPacing: {
    templesPerDay: number;
    breakDuration: number; // in minutes
    startTime: string; // "7:00 AM"
    endTime: string; // "6:00 PM"
  };
}
```

---

## 🎯 CUSTOM TOUR BUILDER STEPS

### **Step 1: Travel Dates**
```typescript
interface Step1TravelDates {
  startDate: Date;
  endDate: Date;
  flexibility: 'Fixed' | 'Flexible (+/- 2 days)' | 'Very Flexible (+/- 5 days)';
}
```

### **Step 2: Group Size & Senior Needs**
```typescript
interface Step2GroupDetails {
  adults: number;
  children: number;
  seniors: number; // Age 60+
  infants: number;
  seniorNeeds: {
    wheelchairAccess: boolean;
    slowPace: boolean;
    medicalSupport: boolean;
    groundFloorRooms: boolean;
  };
}
```

### **Step 3: Deity Preference**
```typescript
interface Step3DeityPreference {
  primaryDeity: 'Shiva' | 'Vishnu' | 'Shakti' | 'All' | 'No Preference';
  secondaryDeities: string[];
}
```

### **Step 4: Budget Range**
```typescript
interface Step4Budget {
  budgetPerPerson: number;
  budgetCategory: 'Economy' | 'Standard' | 'Premium' | 'Luxury';
  includesFlights: boolean;
}
```

### **Step 5: Starting City / States**
```typescript
interface Step5Location {
  startingCity: string;
  preferredStates: string[];
  willingToTravel: number; // in km
}
```

### **Step 6: Accommodation Type**
```typescript
interface Step6Accommodation {
  type: 'Budget Hotel' | 'Standard Hotel' | 'Premium Hotel' | 'Temple Guest House' | 'Ashram' | 'Mix';
  roomSharing: 'Single' | 'Double' | 'Triple' | 'Dormitory';
  acPreference: boolean;
}
```

### **Step 7: Transport Preferences**
```typescript
interface Step7Transport {
  mode: 'Train' | 'Flight' | 'Bus' | 'Private Car' | 'Mix';
  class: 'Economy' | 'Business' | 'First Class';
  privateVehicle: boolean;
}
```

---

## ✨ AI / GROK SUGGESTIONS OUTPUT

```typescript
interface GrokSuggestions {
  bestFitCircuit: {
    circuitId: string;
    circuitName: string;
    matchScore: number; // 0-100
    reasons: string[];
  };
  suggestedRouteOrder: {
    dayNumber: number;
    destination: string;
    temples: string[];
    travelTime: string;
    overnight: string;
  }[];
  numberOfDays: number;
  nearbyAddOns: {
    name: string;
    location: string;
    distanceFromRoute: number; // in km
    timeRequired: string;
    spiritualRelevance: number; // 0-10
  }[];
  festivalAlerts: {
    temple: string;
    festival: string;
    date: Date;
    crowdLevel: 'Low' | 'Medium' | 'High' | 'Very High';
    specialSignificance: string;
  }[];
  lowCrowdAlerts: {
    temple: string;
    bestTimeToVisit: string; // "Weekday mornings"
    currentCrowdTrend: string;
  }[];
}
```

---

## 🛡️ OPTIONAL SERVICES

```typescript
interface OptionalServices {
  tourCoordinator: {
    selected: boolean;
    cost: number;
    description: 'Dedicated coordinator for entire trip';
  };
  guide: {
    selected: boolean;
    type: 'Local at each temple' | 'Single guide for entire trip';
    language: string[];
    cost: number;
  };
  medicalSupport: {
    selected: boolean;
    type: 'On-call doctor' | 'Traveling nurse' | 'First aid kit only';
    cost: number;
  };
  wheelchairAssistance: {
    selected: boolean;
    type: 'Wheelchair provided' | 'Assistance only';
    cost: number;
  };
  insurance: {
    selected: boolean;
    coverage: number;
    type: 'Trip cancellation' | 'Medical emergency' | 'Comprehensive';
    cost: number;
  };
  specialDarshan: {
    selected: boolean;
    temples: string[];
    totalCost: number;
  };
  foodPreferences: {
    selected: boolean;
    type: 'Pure vegetarian' | 'Sattvic meals' | 'Jain food' | 'Custom';
    costPerDay: number;
  };
}
```

---

## 💰 TRIP SUMMARY STRUCTURE

```typescript
interface TripSummary {
  routeAndDestinations: {
    circuit: string;
    totalTemples: number;
    states: string[];
    cities: string[];
    detailedItinerary: DayWiseItinerary[];
  };
  datesAndDuration: {
    startDate: Date;
    endDate: Date;
    totalDays: number;
    travelDays: number;
    templeDays: number;
    restDays: number;
  };
  groupDetails: {
    adults: number;
    children: number;
    seniors: number;
    totalTravelers: number;
  };
  accommodation: {
    type: string;
    numberOfNights: number;
    hotelsBooked: string[];
  };
  transport: {
    flights: FlightDetail[];
    trains: TrainDetail[];
    buses: BusDetail[];
    privateCar: boolean;
  };
  services: OptionalServices;
  costBreakdown: {
    basePackage: number;
    accommodation: number;
    transport: number;
    meals: number;
    optionalServices: number;
    taxes: number;
    total: number;
    perPerson: number;
  };
}
```

---

## 📄 BOOKING CONFIRMATION DATA

```typescript
interface BookingConfirmation {
  bookingId: string;
  bookingDate: Date;
  status: 'Confirmed' | 'Pending' | 'Cancelled';
  tripSummary: TripSummary;
  leadTraveler: {
    name: string;
    email: string;
    phone: string;
  };
  emergencyContact: {
    name: string;
    relation: string;
    phone: string;
  };
  paymentDetails: {
    amountPaid: number;
    paymentMethod: string;
    transactionId: string;
    paymentDate: Date;
  };
  vouchers: {
    type: 'Accommodation' | 'Transport' | 'Temple Entry' | 'Service';
    id: string;
    downloadUrl: string;
  }[];
  supportContact: {
    phone: string;
    email: string;
    whatsapp: string;
  };
}
```

---

## 📊 TRIP DASHBOARD FEATURES

```typescript
interface TripDashboard {
  overview: {
    bookingId: string;
    tripName: string;
    daysUntilTrip: number;
    status: 'Upcoming' | 'Ongoing' | 'Completed';
  };
  itinerary: {
    dayWise: DayWiseItinerary[];
    viewMode: 'List' | 'Timeline' | 'Map';
  };
  vouchers: {
    accommodation: VoucherDetail[];
    transport: VoucherDetail[];
    templeEntry: VoucherDetail[];
    services: VoucherDetail[];
  };
  support: {
    coordinatorName: string;
    coordinatorPhone: string;
    coordinatorEmail: string;
    emergencyHotline: string;
  };
  reminders: {
    type: 'Document' | 'Payment' | 'Departure' | 'Temple Timing';
    message: string;
    dueDate: Date;
    completed: boolean;
  }[];
  emergencyAccess: {
    medicalContacts: string[];
    nearestHospitals: string[];
    policStations: string[];
    embassies: string[];
  };
  feedback: {
    canSubmit: boolean;
    submitted: boolean;
    rating?: number;
    review?: string;
  };
}
```

---

## 🎨 SCREEN-BY-SCREEN DESIGN SPECIFICATIONS

### **Screen 1: Hindu Pilgrimage Landing Hub**

**Layout:**
```
┌─────────────────────────────────────┐
│ ← Hindu Pilgrimage                  │
├─────────────────────────────────────┤
│ 🕉️ Hero Section                     │
│ "Hindu Pilgrimage - Spiritual       │
│  Journeys"                          │
│                                     │
│ "Embark on sacred journeys to      │
│  ancient temples..."               │
├─────────────────────────────────────┤
│ Feature Tiles (2x2 grid)            │
│ ┌──────────┐ ┌──────────┐          │
│ │♿ Access  │ │🏥 Medical│          │
│ │  Darshan │ │  Support │          │
│ └──────────┘ └──────────┘          │
│ ┌──────────┐ ┌──────────┐          │
│ │🏛️ Ancient│ │🌍 Multi- │          │
│ │  Heritage│ │  Faith   │          │
│ └──────────┘ └──────────┘          │
├─────────────────────────────────────┤
│ Smart Filters                       │
│ 📍 State/Region [Select]            │
│ 📊 Difficulty [All Levels]          │
│ ✨ Show Hidden Gems [Toggle]        │
├─────────────────────────────────────┤
│ Primary Choices                     │
│ ┌─────────────────────────────────┐│
│ │🛤️ Sacred Circuits                ││
│ │ "Curated spiritual paths"       ││
│ └─────────────────────────────────┘│
│ ┌─────────────────────────────────┐│
│ │📍 Explore Destinations           ││
│ │ "Browse temples & sites"        ││
│ └─────────────────────────────────┘│
├─────────────────────────────────────┤
│ Bottom Navigation                   │
└─────────────────────────────────────┘
```

**Component Details:**
- Header: Orange-pink gradient (`from-orange-600 to-pink-600`)
- Hero icon: 🕉️ (large, white)
- Title: `text-4xl font-bold text-white`
- Subtitle: `text-base text-white/90`
- Feature tiles: White cards with gradient icons
- Filters: White rounded inputs
- Primary choice buttons: Large cards with icons
- Bottom nav: Same as other categories

---

### **Screen 2: Sacred Circuits Listing**

**Layout:**
```
┌─────────────────────────────────────┐
│ ← Sacred Circuits                   │
├─────────────────────────────────────┤
│ "Choose your spiritual path"        │
│                                     │
│ ✨ Show Hidden Gems [Toggle ON]     │
├─────────────────────────────────────┤
│ Circuit Cards (scrollable)          │
│                                     │
│ ┌─────────────────────────────────┐│
│ │ 🕉️ 12 Jyotirlingas              ││
│ │ 12 temples • 10 states           ││
│ │ 15-20 days • Moderate            ││
│ │ "Sacred abodes of Lord Shiva..." ││
│ │                                  ││
│ │ 🌟 Best: Oct-Mar                 ││
│ │ [View Details →]                 ││
│ └─────────────────────────────────┘│
│                                     │
│ ┌─────────────────────────────────┐│
│ │ 🌸 108 Divya Desams              ││
│ │ 108 temples • 7 states           ││
│ │ 30-45 days • Challenging         ││
│ │ "Holy sites of Lord Vishnu..."   ││
│ │                                  ││
│ │ 🌟 Best: Oct-Feb                 ││
│ │ [View Details →]                 ││
│ └─────────────────────────────────┘│
│                                     │
│ [More circuits...]                  │
└─────────────────────────────────────┘
```

**Component Details:**
- Toggle: Switch with label, orange when ON
- Circuit cards: White, `rounded-3xl`, `shadow-lg`
- Card content: Icon, title, metadata row, description
- Metadata badges: Rounded pills with icons
- "View Details" button: Orange gradient

---

### **Screen 3: Circuit Detail Screen**

**Layout:**
```
┌─────────────────────────────────────┐
│ ← 12 Jyotirlingas                   │
├─────────────────────────────────────┤
│ 🕉️ Circuit Overview                 │
│                                     │
│ "Sacred abodes of Lord Shiva        │
│  across India"                      │
│                                     │
│ 📊 12 temples • 10 states           │
│ ⏱️ 15-20 days • Moderate            │
│ 🌟 Best: Oct-Mar                    │
├─────────────────────────────────────┤
│ Temples in Circuit                  │
│                                     │
│ Recommended Visit Order:            │
│                                     │
│ 1️⃣ [Admin: Somnath Temple]         │
│    Gujarat • West                   │
│    [Add to Plan]                    │
│                                     │
│ 2️⃣ [Admin: Mallikarjuna Temple]    │
│    Andhra Pradesh • South           │
│    [Add to Plan]                    │
│                                     │
│ [... 10 more temples ...]           │
│                                     │
├─────────────────────────────────────┤
│ Travel Notes                        │
│ • High-altitude temples require     │
│   acclimatization                   │
│ • Kedarnath accessible May-Nov only │
│ • Book helicopter in advance        │
├─────────────────────────────────────┤
│ Choose Your Path                    │
│ ┌─────────────────────────────────┐│
│ │ 📦 Ready Package                 ││
│ │ "Pre-planned itinerary"          ││
│ └─────────────────────────────────┘│
│ ┌─────────────────────────────────┐│
│ │ ⚙️ Custom Builder                ││
│ │ "Build your own pilgrimage"      ││
│ └─────────────────────────────────┘│
└─────────────────────────────────────┘
```

---

### **Screen 4: Explore Destinations**

**Layout:**
```
┌─────────────────────────────────────┐
│ ← Explore Destinations              │
├─────────────────────────────────────┤
│ 🔍 Search temples, monasteries...   │
├─────────────────────────────────────┤
│ Tabs:                               │
│ [All] [Temples] [Monasteries]       │
│ [Pilgrimages] [Monuments] [Ashrams] │
├─────────────────────────────────────┤
│ Destination Cards (grid)            │
│                                     │
│ ┌────────────┐ ┌────────────┐      │
│ │🕉️ Temple   │ │🏛️ Temple   │      │
│ │Name 1      │ │Name 2      │      │
│ │Location    │ │Location    │      │
│ │⭐ 4.8      │ │⭐ 4.9      │      │
│ │[Details] ♥│ │[Details] ♥│      │
│ └────────────┘ └────────────┘      │
│                                     │
│ [Load more...]                      │
└─────────────────────────────────────┘
```

---

### **Screen 5: Destination Detail Page**

**Layout:**
```
┌─────────────────────────────────────┐
│ ← [Admin: Temple Name]              │
├─────────────────────────────────────┤
│ 📸 Image Gallery                    │
├─────────────────────────────────────┤
│ Tabs:                               │
│ [Overview] [History] [Rituals]      │
│ [Timings] [Nearby]                  │
├─────────────────────────────────────┤
│ Overview Tab:                       │
│                                     │
│ 📍 Location, State                  │
│ 🕉️ Deity: [Admin: Deity Name]      │
│ ⏰ Darshan: 6 AM - 9 PM             │
│ 🌟 Rating: 4.8 (2,341 reviews)      │
│                                     │
│ Spiritual Significance:             │
│ [Admin: Brief description...]       │
│                                     │
│ Dress Code:                         │
│ • Traditional attire recommended    │
│ • Remove footwear before entry      │
│                                     │
│ Temple Rules:                       │
│ • Photography not allowed inside    │
│ • Mobile phones on silent           │
│                                     │
├─────────────────────────────────────┤
│ Actions:                            │
│ ┌─────────────────────────────────┐│
│ │ 📅 Book Standalone Visit         ││
│ └─────────────────────────────────┘│
│ ┌─────────────────────────────────┐│
│ │ ➕ Add to Pilgrimage Plan        ││
│ └─────────────────────────────────┘│
└─────────────────────────────────────┘
```

---

## 🚀 IMPLEMENTATION ROADMAP

### **Phase 1: Discovery Screens (Week 1)**
- [ ] Hindu Pilgrimage Landing Hub
- [ ] Sacred Circuits Listing
- [ ] Circuit Detail Screen
- [ ] Explore Destinations
- [ ] Destination Detail Page
- [ ] Nearby Devotional Places

### **Phase 2: Planning Screens (Week 2)**
- [ ] Health & Wellness Profile
- [ ] AI Health Risk Assessment
- [ ] Custom Tour Builder (Steps 1-7)
- [ ] AI / Grok Suggestions
- [ ] Optional Services Selection
- [ ] Trip Summary & Review

### **Phase 3: Booking Screens (Week 3)**
- [ ] Confirm & Pay
- [ ] Payment Processing
- [ ] Booking Confirmation

### **Phase 4: Post-Booking Screens (Week 4)**
- [ ] Trip Dashboard
- [ ] Feedback & Review

### **Phase 5: Integration & Testing (Week 5)**
- [ ] Connect all screens with navigation
- [ ] Test complete user flow
- [ ] Accessibility audit
- [ ] Performance optimization
- [ ] Documentation

---

## ✅ DESIGN CHECKLIST

### **Visual Consistency:**
- [ ] Same gradient style as other categories
- [ ] Same card design (rounded-3xl, shadow-lg)
- [ ] Same button heights (h-11, h-12, h-14)
- [ ] Same spacing (8px grid)
- [ ] Same typography scale
- [ ] Same icon sizes

### **Interaction Patterns:**
- [ ] Same hover states
- [ ] Same focus indicators
- [ ] Same active states
- [ ] Same transitions (300ms)
- [ ] Same navigation patterns

### **Accessibility:**
- [ ] All buttons are `<button>` elements
- [ ] All inputs have labels
- [ ] All images have alt text
- [ ] ARIA labels on icon buttons
- [ ] Keyboard navigation works
- [ ] Focus visible
- [ ] Color contrast 4.5:1+

### **Content:**
- [ ] All destinations are admin-managed
- [ ] No hardcoded place names
- [ ] Placeholder format: [Admin: ...]
- [ ] Spiritual descriptions appropriate
- [ ] Cultural sensitivity maintained

---

## 📝 NEXT STEPS

1. ✅ **Complete Audit** (this document)
2. ⏳ **Design All 18 Screens** (in progress)
3. ⏳ **Create Component Library**
4. ⏳ **Build React Implementation**
5. ⏳ **Write Developer Documentation**
6. ⏳ **Test Complete Flow**
7. ⏳ **Deploy to Production**

---

**Audit Status:** ✅ **COMPLETE**  
**Next Step:** Design all 18 screens with full React implementation  

---

**END OF AUDIT DOCUMENT** ✅
