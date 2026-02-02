# Group Member Details - Quick Start Guide

## 🚀 5-Minute Integration

### Step 1: Import the Component (30 seconds)

```typescript
import { GroupMemberDetailsManager, type TravelerDetails } from '@/app/components/planning/GroupMemberDetailsManager';
```

### Step 2: Add State Management (1 minute)

```typescript
function YourBookingComponent() {
  const [travelers, setTravelers] = useState<TravelerDetails[]>([]);
  const totalTravelers = 4; // From your group size selection
  
  const handleSaveTravelers = (savedTravelers: TravelerDetails[]) => {
    setTravelers(savedTravelers);
    console.log('Travelers saved:', savedTravelers);
  };
}
```

### Step 3: Render the Component (30 seconds)

```typescript
return (
  <div className="p-4">
    <GroupMemberDetailsManager 
      totalTravelers={totalTravelers}
      onSave={handleSaveTravelers}
      initialTravelers={travelers}
    />
  </div>
);
```

### Step 4: Use the Data (2 minutes)

```typescript
// Example: Pass to next step
const handleContinue = () => {
  const bookingData = {
    groupSize: totalTravelers,
    travelers: travelers,
    // ... other booking details
  };
  
  // Send to backend or next screen
  onNext(bookingData);
};

// Example: Calculate special requirements
const requiresMobility = travelers.filter(t => t.mobilityAssistance).length;
const hasDietary = travelers.filter(t => t.dietaryRestrictions.length > 0).length;
const hasKids = travelers.filter(t => t.ageGroup === 'kids').length;

console.log(`Mobility support needed for ${requiresMobility} travelers`);
console.log(`Dietary customization needed for ${hasDietary} travelers`);
console.log(`Kid-friendly activities needed for ${hasKids} kids`);
```

### Step 5: Test It! (1 minute)

Run your app and:
1. ✅ Click "Add Person"
2. ✅ Fill in traveler details
3. ✅ Click "Add Traveler"
4. ✅ See the traveler card appear
5. ✅ Click "Save X Travelers & Continue"

**Done!** 🎉

---

## 📋 Complete Example

```typescript
import { useState } from 'react';
import { GroupMemberDetailsManager, type TravelerDetails } from '@/app/components/planning/GroupMemberDetailsManager';

export function BookingFlow() {
  const [step, setStep] = useState<'group-size' | 'traveler-details' | 'preferences'>('group-size');
  const [groupSize, setGroupSize] = useState(2);
  const [travelers, setTravelers] = useState<TravelerDetails[]>([]);

  // Step 1: Group Size Selection
  if (step === 'group-size') {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">How many travelers?</h1>
        <div className="flex items-center gap-4">
          <button onClick={() => setGroupSize(Math.max(1, groupSize - 1))}>−</button>
          <span className="text-4xl font-bold">{groupSize}</span>
          <button onClick={() => setGroupSize(groupSize + 1)}>+</button>
        </div>
        <button 
          onClick={() => setStep('traveler-details')}
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl"
        >
          Continue
        </button>
      </div>
    );
  }

  // Step 2: Traveler Details
  if (step === 'traveler-details') {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Add Traveler Details</h1>
        <GroupMemberDetailsManager 
          totalTravelers={groupSize}
          onSave={(savedTravelers) => {
            setTravelers(savedTravelers);
            setStep('preferences');
          }}
          initialTravelers={travelers}
        />
      </div>
    );
  }

  // Step 3: Preferences
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Booking Summary</h1>
      <p>Group Size: {groupSize}</p>
      <p>Travelers Added: {travelers.length}</p>
      <div className="mt-4 space-y-2">
        {travelers.map((t, idx) => (
          <div key={t.id} className="p-3 bg-gray-100 rounded">
            {idx + 1}. {t.name} ({t.age} years, {t.relation})
          </div>
        ))}
      </div>
      <button 
        onClick={() => alert('Booking complete!')}
        className="mt-6 px-6 py-3 bg-green-600 text-white rounded-xl"
      >
        Confirm Booking
      </button>
    </div>
  );
}
```

---

## 🎯 Common Use Cases

### Use Case 1: Family Tour Planning
```typescript
const familyAnalysis = {
  kids: travelers.filter(t => t.ageGroup === 'kids').length,
  adults: travelers.filter(t => t.ageGroup === 'adults').length,
  seniors: travelers.filter(t => t.ageGroup === 'seniors').length,
  needsKidActivities: travelers.some(t => t.ageGroup === 'kids'),
  needsSeniorCare: travelers.some(t => t.ageGroup === 'seniors' || t.mobilityAssistance)
};

if (familyAnalysis.needsKidActivities) {
  console.log('Suggest: Theme parks, kid-friendly museums, interactive exhibits');
}
if (familyAnalysis.needsSeniorCare) {
  console.log('Suggest: Gentle tours, accessible routes, senior-friendly hotels');
}
```

### Use Case 2: Dietary Customization
```typescript
const dietaryNeeds = travelers.reduce((acc, t) => {
  t.dietaryRestrictions.forEach(restriction => {
    acc[restriction] = (acc[restriction] || 0) + 1;
  });
  return acc;
}, {} as Record<string, number>);

console.log('Dietary Requirements:', dietaryNeeds);
// Example output: { "Vegetarian": 2, "Gluten-Free": 1, "Halal": 3 }

// Pre-book special meals
if (dietaryNeeds['Vegetarian']) {
  console.log(`Reserve ${dietaryNeeds['Vegetarian']} vegetarian meals`);
}
```

### Use Case 3: Accessibility Planning
```typescript
const accessibilityNeeds = {
  wheelchairs: travelers.filter(t => t.mobilityDetails?.includes('wheelchair')).length,
  walkers: travelers.filter(t => t.mobilityDetails?.includes('walker')).length,
  medicalSupport: travelers.filter(t => t.medicalConditions.length > 0).length,
  emergencyContacts: travelers.filter(t => t.emergencyContact?.phone).length
};

console.log('Accessibility Summary:', accessibilityNeeds);

// Pre-arrange resources
if (accessibilityNeeds.wheelchairs > 0) {
  console.log('Request wheelchair-accessible vehicle and hotel rooms');
}
```

### Use Case 4: Interest-Based Recommendations
```typescript
const allInterests = travelers.flatMap(t => t.interests);
const interestCounts = allInterests.reduce((acc, interest) => {
  acc[interest] = (acc[interest] || 0) + 1;
  return acc;
}, {} as Record<string, number>);

const topInterests = Object.entries(interestCounts)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 3)
  .map(([interest]) => interest);

console.log('Top 3 Group Interests:', topInterests);
// Suggest activities based on topInterests
```

---

## 📊 Data Structure Reference

### TravelerDetails Interface
```typescript
interface TravelerDetails {
  id: string;                    // Unique identifier
  name: string;                  // Full name
  age: number;                   // Age in years
  ageGroup: 'kids' | 'teens' | 'adults' | 'seniors';
  gender: 'male' | 'female' | 'other' | 'prefer-not-to-say';
  relation: string;              // Self, Spouse, Child, etc.
  
  // Medical & Accessibility
  medicalConditions: string[];   // Array of conditions
  mobilityAssistance: boolean;   // true if needs help
  mobilityDetails: string;       // Wheelchair, walker, etc.
  
  // Dietary
  dietaryRestrictions: string[]; // Array of restrictions
  allergies: string;             // Free text
  
  // Preferences
  interests: string[];           // Array of interests
  specialRequests: string;       // Free text
  
  // Emergency
  emergencyContact: {
    name: string;
    phone: string;
    relation: string;
  };
}
```

### Example Traveler Object
```typescript
const exampleTraveler: TravelerDetails = {
  id: 'traveler-1706633200000',
  name: 'Rahul Sharma',
  age: 35,
  ageGroup: 'adults',
  gender: 'male',
  relation: 'Self',
  medicalConditions: ['Diabetes', 'High Blood Pressure'],
  mobilityAssistance: false,
  mobilityDetails: '',
  dietaryRestrictions: ['Vegetarian', 'Low Sodium'],
  allergies: 'Peanuts',
  interests: ['Photography', 'History', 'Culture'],
  specialRequests: 'Prefers window seats on long journeys',
  emergencyContact: {
    name: 'Priya Sharma',
    phone: '+91 98765 43210',
    relation: 'Wife'
  }
};
```

---

## 🔧 Advanced Customization

### Custom Validation
```typescript
const handleSaveTravelers = (savedTravelers: TravelerDetails[]) => {
  // Custom validation
  const hasMinorWithoutGuardian = savedTravelers.some(t => 
    t.age < 18 && !savedTravelers.some(g => g.relation === 'Parent' || g.relation === 'Guardian')
  );
  
  if (hasMinorWithoutGuardian) {
    alert('At least one adult guardian required for minor travelers');
    return;
  }
  
  setTravelers(savedTravelers);
};
```

### Pre-Fill Data
```typescript
// Load from backend or localStorage
useEffect(() => {
  const savedData = localStorage.getItem('travelers');
  if (savedData) {
    setTravelers(JSON.parse(savedData));
  }
}, []);

// Save to localStorage
const handleSaveTravelers = (savedTravelers: TravelerDetails[]) => {
  setTravelers(savedTravelers);
  localStorage.setItem('travelers', JSON.stringify(savedTravelers));
};
```

### Backend Integration
```typescript
const handleSaveTravelers = async (savedTravelers: TravelerDetails[]) => {
  try {
    const response = await fetch('/api/bookings/travelers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ travelers: savedTravelers })
    });
    
    if (!response.ok) throw new Error('Failed to save travelers');
    
    const data = await response.json();
    setTravelers(savedTravelers);
    console.log('Saved to backend:', data);
  } catch (error) {
    console.error('Error saving travelers:', error);
    alert('Failed to save travelers. Please try again.');
  }
};
```

---

## 🎨 Styling Tips

### Custom Theme Colors
```typescript
// Wrap component to match your brand
<div className="[&_button]:bg-your-brand-color">
  <GroupMemberDetailsManager {...props} />
</div>
```

### Mobile Optimization
```typescript
// Already mobile-optimized, but you can add custom breakpoints
<div className="max-w-lg mx-auto sm:max-w-2xl">
  <GroupMemberDetailsManager {...props} />
</div>
```

---

## 🐛 Troubleshooting

### Issue: Modal Not Opening
**Solution:** Check for z-index conflicts
```css
/* Ensure nothing has z-index > 50 */
.your-header { z-index: 10; }
.your-modal { z-index: 50; }
```

### Issue: State Not Updating
**Solution:** Ensure parent component re-renders
```typescript
const [, forceUpdate] = useReducer(x => x + 1, 0);
const handleSaveTravelers = (savedTravelers: TravelerDetails[]) => {
  setTravelers(savedTravelers);
  forceUpdate(); // Force re-render
};
```

### Issue: TypeScript Errors
**Solution:** Import the type
```typescript
import type { TravelerDetails } from '@/app/components/planning/GroupMemberDetailsManager';
```

---

## ✅ Checklist Before Launch

- [ ] Imported component correctly
- [ ] Added state management
- [ ] Implemented save handler
- [ ] Tested add/edit/delete flows
- [ ] Verified data structure
- [ ] Tested on mobile devices
- [ ] Checked accessibility
- [ ] Added error handling
- [ ] Integrated with backend (if needed)
- [ ] Tested with edge cases (0 travelers, 50+ travelers)

---

## 📚 Resources

- **Main Component:** `/src/app/components/planning/GroupMemberDetailsManager.tsx`
- **Demo:** `/src/app/components/planning/GroupMemberDetailsDemo.tsx`
- **Integration Example:** `/src/app/components/planning/GroupDetails.tsx`
- **Full Documentation:** `/GROUP_MEMBER_DETAILS_IMPLEMENTATION.md`
- **Visual Guide:** `/GROUP_MEMBER_DETAILS_VISUAL_GUIDE.md`

---

**Need Help?** Check the demo component for a working example!

```bash
# Run the demo
import { GroupMemberDetailsDemo } from '@/app/components/planning/GroupMemberDetailsDemo';
<GroupMemberDetailsDemo />
```

**Status:** ✅ READY TO USE  
**Estimated Integration Time:** 5 minutes  
**Last Updated:** January 30, 2026
