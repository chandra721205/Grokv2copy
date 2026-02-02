# 🎨 COMPONENTS QUICK REFERENCE CARD
## Copy-Paste Ready Code Snippets

---

## 📦 IMPORT STATEMENTS

```typescript
// Import all components
import {
  DestinationCardTemplate,
  BudgetRangeInput,
  ExternalBrowseButton,
  BrowseButtonsGroup,
  InterestHeartIcon,
  InterestHeartWithCounter,
  FilterChipTemplate,
  FilterChipGroup,
  AdminEditableSection,
  GroupedAdminSections,
  AdminEditableText
} from '@/app/components/ui';

// Import icons
import { Waves, Castle, Mountain, Heart, Activity } from 'lucide-react';
```

---

## 1️⃣ DESTINATION CARD TEMPLATE

### **Basic Usage:**
```tsx
<DestinationCardTemplate
  id="beach-1"
  icon={Waves}
  gradientFrom="from-blue-500"
  gradientTo="to-cyan-600"
  category="beach"
  content={{
    name: '[Admin: Beach Paradise]',
    priceRange: '[Admin: ₹25,000 - ₹40,000]',
    tags: ['[Admin: Resort]', '[Admin: Water Sports]'],
    description: '[Admin: Beautiful beach destination]',
    stayOptions: ['[Admin: Luxury Resort]', '[Admin: Beach Villa]'],
    specialRequest: '[Admin: Includes water sports package]'
  }}
  onExplore={() => console.log('Exploring!')}
  showAdminIndicators={true}
/>
```

### **Compact Mode:**
```tsx
<DestinationCardTemplate
  compact={true}
  {...otherProps}
/>
```

### **All Category Gradients:**
```typescript
Beach:        from-blue-500 to-cyan-600
Heritage:     from-amber-500 to-orange-600
Wellness:     from-emerald-500 to-teal-600
Adventure:    from-red-500 to-rose-600
Hill Station: from-green-500 to-lime-600
International: from-purple-500 to-indigo-600
```

---

## 2️⃣ BUDGET RANGE INPUT

### **Basic Usage:**
```tsx
const [budget, setBudget] = useState('');
const [error, setError] = useState('');

const handleChange = (value: string) => {
  setBudget(value);
  const validation = validateBudgetInput(value);
  setError(validation.error || '');
};

<BudgetRangeInput
  value={budget}
  onChange={handleChange}
  error={error}
  content={{
    label: '[Admin: Your Budget]',
    placeholder: '[Admin: e.g., ₹50,000 for 5 nights]',
    helperText: '[Admin: Enter your approximate budget]'
  }}
  showAdminIndicators={true}
  size="md"
/>
```

### **Validation:**
```typescript
import { validateBudgetInput, formatBudgetValue, parseBudgetRange } from '@/app/components/ui';

// Validate
const result = validateBudgetInput('50000');
// { isValid: true } or { isValid: false, error: 'message' }

// Format
const formatted = formatBudgetValue('50000');
// "₹50,000"

// Parse range
const range = parseBudgetRange('₹50,000 - ₹75,000');
// { min: 50000, max: 75000 }
```

---

## 3️⃣ EXTERNAL BROWSE BUTTONS

### **Single Button:**
```tsx
<ExternalBrowseButton
  type="google"
  searchQuery="Beach destinations India"
  label="[Admin: Google Search]"
  size="md"
/>

<ExternalBrowseButton
  type="youtube"
  searchQuery="Beach destinations India"
  label="[Admin: YouTube Browse]"
  size="md"
/>
```

### **Button Group (Row):**
```tsx
<BrowseButtonsGroup
  searchQuery="Honeymoon destinations"
  content={{
    googleLabel: '[Admin: Search on Google]',
    youtubeLabel: '[Admin: Watch on YouTube]'
  }}
  layout="row"
  size="md"
  showAdminIndicators={true}
/>
```

### **Button Group (Column):**
```tsx
<BrowseButtonsGroup
  searchQuery="Heritage sites"
  layout="column"
  size="lg"
/>
```

### **Build Search Query:**
```typescript
import { buildSearchQuery } from '@/app/components/ui';

const query = buildSearchQuery({
  destination: 'Beach Paradise',
  travelType: 'honeymoon',
  location: 'Goa',
  keywords: ['luxury', 'resort']
});
// "Beach Paradise honeymoon Goa luxury resort"
```

---

## 4️⃣ INTEREST HEART ICON

### **Basic Heart Icon:**
```tsx
<InterestHeartIcon
  itemId="beach-1"
  itemName="Beach Paradise"
  category="beach"
  size="md"
  onToggle={(filled) => console.log('Filled:', filled)}
  showAdminIndicators={true}
/>
```

### **All Sizes:**
```tsx
size="xs"  // 32x32px container
size="sm"  // 40x40px container
size="md"  // 48x48px container (default)
size="lg"  // 56x56px container
size="xl"  // 64x64px container
```

### **With Counter:**
```tsx
import { InterestHeartWithCounter, getAllInterests } from '@/app/components/ui';

<InterestHeartWithCounter
  count={getAllInterests().length}
  onClick={() => console.log('View interests')}
  size="md"
/>
```

### **Helper Functions:**
```typescript
import {
  getAllInterests,
  getInterestsByCategory,
  clearAllInterests,
  removeInterest
} from '@/app/components/ui';

// Get all
const all = getAllInterests();
// [{ id, name, category, timestamp }, ...]

// Get by category
const beachInterests = getInterestsByCategory('beach');

// Clear all
clearAllInterests();

// Remove one
removeInterest('beach-1');
```

---

## 5️⃣ FILTER CHIP TEMPLATE

### **Single Chip:**
```tsx
<FilterChipTemplate
  id="filter-1"
  label="[Admin: Beach Resorts]"
  selected={true}
  onToggle={(id) => console.log('Toggled:', id)}
  variant="primary"
  size="md"
  showCheckmark={true}
  showAdminIndicators={true}
/>
```

### **Color Variants:**
```typescript
variant="default"  // Gray → Blue
variant="primary"  // Blue → Indigo
variant="success"  // Green → Emerald
variant="warning"  // Amber → Orange
variant="danger"   // Red → Rose
```

### **Chip Group:**
```tsx
const [chips, setChips] = useState([
  { id: '1', label: '[Admin: Beach]', selected: false },
  { id: '2', label: '[Admin: Heritage]', selected: true },
  { id: '3', label: '[Admin: Wellness]', selected: false }
]);

const handleToggle = (id: string) => {
  setChips(chips => chips.map(chip =>
    chip.id === id ? { ...chip, selected: !chip.selected } : chip
  ));
};

<FilterChipGroup
  chips={chips}
  onToggle={handleToggle}
  variant="primary"
  multiSelect={true}
  showAllOption={true}
  showAdminIndicators={true}
/>
```

### **Generate Sample Chips:**
```typescript
import { generateSampleChips } from '@/app/components/ui';

const chips = generateSampleChips(5);
// Returns 5 chips with placeholder labels
```

---

## 6️⃣ ADMIN EDITABLE SECTION

### **Single Section:**
```tsx
<AdminEditableSection
  level={4}
  title="Destination Cards"
  description="All destination card content"
  batchUpdateEnabled={true}
  batchItemCount={3}
  showBanner={true}
  showInstructions={true}
  showAdminIndicators={true}
>
  {/* Your admin-editable content */}
</AdminEditableSection>
```

### **5 Levels:**
```tsx
level={1}  // Purple - Headers/Titles
level={2}  // Indigo - Section Headings
level={3}  // Blue - Filter Labels
level={4}  // Cyan - Card Content
level={5}  // Gray - Helper Text
```

### **Grouped Sections:**
```tsx
<GroupedAdminSections
  sections={[
    {
      level: 1,
      title: 'Page Headers',
      content: <div>[Admin: Title]</div>
    },
    {
      level: 3,
      title: 'Filter Chips',
      content: <FilterChipGroup {...props} />,
      batchUpdateEnabled: true,
      batchItemCount: 5
    },
    {
      level: 4,
      title: 'Destination Cards',
      content: <DestinationCards />,
      batchUpdateEnabled: true,
      batchItemCount: 10
    }
  ]}
  showAdminIndicators={true}
/>
```

### **Admin Editable Text:**
```tsx
<AdminEditableText
  content="[Admin: Section Heading]"
  level={2}
  as="h2"
  showAdminIndicators={true}
  className="text-xl font-bold"
/>
```

---

## 🎨 COMPLETE SCREEN EXAMPLE

### **Beach Category Landing Page:**

```tsx
import {
  DestinationCardTemplate,
  BrowseButtonsGroup,
  FilterChipGroup,
  AdminEditableSection,
  GroupedAdminSections,
  InterestHeartIcon
} from '@/app/components/ui';
import { Waves } from 'lucide-react';

function BeachCategoryScreen() {
  const [filterChips, setFilterChips] = useState([
    { id: '1', label: '[Admin: All]', selected: true },
    { id: '2', label: '[Admin: Resorts]', selected: false },
    { id: '3', label: '[Admin: Water Sports]', selected: false },
    { id: '4', label: '[Admin: Family]', selected: false },
    { id: '5', label: '[Admin: Luxury]', selected: false }
  ]);

  const destinations = [
    {
      id: 'beach-1',
      name: '[Admin: Beach Destination 1]',
      priceRange: '[Admin: ₹25,000 - ₹40,000]',
      tags: ['[Admin: Resort]', '[Admin: Water Sports]'],
      description: '[Admin: Beautiful beach with pristine waters]'
    },
    // ... more destinations
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header with Gradient */}
      <div className="bg-gradient-to-r from-blue-500 to-cyan-600 px-6 pt-12 pb-8 rounded-b-[2rem]">
        <h1 className="text-white text-3xl font-bold mb-2">
          [Admin: Beach Paradise]
        </h1>
        <p className="text-white/80 text-sm">
          [Admin: Explore beautiful beaches]
        </p>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* Browse Buttons */}
        <BrowseButtonsGroup
          searchQuery="Beach destinations India"
          layout="row"
          size="md"
        />

        {/* Grouped Admin Sections */}
        <GroupedAdminSections
          sections={[
            {
              level: 3,
              title: 'Filter Chips',
              content: (
                <FilterChipGroup
                  chips={filterChips}
                  onToggle={(id) => {
                    setFilterChips(chips => chips.map(c =>
                      c.id === id ? { ...c, selected: !c.selected } : c
                    ));
                  }}
                  variant="primary"
                  multiSelect={true}
                  showAllOption={true}
                />
              ),
              batchUpdateEnabled: true,
              batchItemCount: 5
            },
            {
              level: 4,
              title: 'Destination Cards',
              content: (
                <div className="space-y-4">
                  {destinations.map((dest, i) => (
                    <DestinationCardTemplate
                      key={dest.id}
                      id={dest.id}
                      icon={Waves}
                      gradientFrom="from-blue-500"
                      gradientTo="to-cyan-600"
                      category="beach"
                      content={dest}
                      animationDelay={i * 0.1}
                      onExplore={() => console.log('Exploring:', dest.name)}
                    />
                  ))}
                </div>
              ),
              batchUpdateEnabled: true,
              batchItemCount: destinations.length
            }
          ]}
          showAdminIndicators={true}
        />
      </div>
    </div>
  );
}
```

---

## 🎯 COMMON PATTERNS

### **Pattern 1: Card with Heart**
```tsx
<div className="relative">
  <DestinationCardTemplate {...cardProps} />
  <div className="absolute top-4 right-4">
    <InterestHeartIcon
      itemId={cardProps.id}
      itemName={cardProps.content.name}
      category={cardProps.category}
      size="md"
    />
  </div>
</div>
```

### **Pattern 2: Filters + Cards**
```tsx
<AdminEditableSection level={3} batchUpdateEnabled>
  <FilterChipGroup {...filterProps} />
</AdminEditableSection>

<AdminEditableSection level={4} batchUpdateEnabled>
  {filteredCards.map(card => (
    <DestinationCardTemplate key={card.id} {...card} />
  ))}
</AdminEditableSection>
```

### **Pattern 3: Budget Input in Modal**
```tsx
<div className="bg-white rounded-3xl p-6">
  <h3 className="text-xl font-bold mb-4">Set Your Budget</h3>
  <BudgetRangeInput
    value={budget}
    onChange={setBudget}
    size="lg"
  />
  <button onClick={handleSave}>Save Preferences</button>
</div>
```

---

## 📊 PROPS QUICK REFERENCE

### **DestinationCardTemplate:**
```typescript
id: string
icon: LucideIcon
gradientFrom: string (e.g., 'from-blue-500')
gradientTo: string (e.g., 'to-cyan-600')
content: { name, priceRange, tags[], description, stayOptions[], specialRequest }
category?: string
animationDelay?: number (seconds)
onExplore?: () => void
showAdminIndicators?: boolean
compact?: boolean
className?: string
```

### **BudgetRangeInput:**
```typescript
value: string
onChange: (value: string) => void
content?: { label, placeholder, helperText }
error?: string
disabled?: boolean
size?: 'sm' | 'md' | 'lg'
showAdminIndicators?: boolean
className?: string
```

### **ExternalBrowseButton:**
```typescript
type: 'google' | 'youtube'
searchQuery: string
label?: string
onClick?: () => void
size?: 'sm' | 'md' | 'lg'
fullWidth?: boolean
showAdminIndicators?: boolean
className?: string
```

### **InterestHeartIcon:**
```typescript
itemId: string
itemName: string
category?: string
size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
initialFilled?: boolean
onToggle?: (filled: boolean) => void
showAdminIndicators?: boolean
className?: string
```

### **FilterChipTemplate:**
```typescript
id: string
label: string
selected: boolean
onToggle: (id: string) => void
variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger'
size?: 'sm' | 'md' | 'lg'
showCheckmark?: boolean
showClose?: boolean
disabled?: boolean
showAdminIndicators?: boolean
className?: string
```

### **AdminEditableSection:**
```typescript
level: 1 | 2 | 3 | 4 | 5
title?: string
description?: string
children: ReactNode
showBanner?: boolean
showInstructions?: boolean
batchUpdateEnabled?: boolean
batchItemCount?: number
animationDelay?: number
showAdminIndicators?: boolean
className?: string
```

---

## 🎨 TAILWIND CLASSES USED

### **Spacing:**
```
gap-2  gap-3  gap-4  gap-6
p-3    p-4    p-6    p-8
mb-2   mb-3   mb-4   mb-6
```

### **Border Radius:**
```
rounded-xl   (12px)
rounded-2xl  (16px)
rounded-3xl  (24px)
rounded-full (pill)
```

### **Shadows:**
```
shadow-sm
shadow-md
shadow-lg
shadow-xl
shadow-2xl
```

### **Colors:**
```
bg-gray-100  border-gray-300  text-gray-600
bg-blue-50   border-blue-300  text-blue-600
bg-purple-50 border-purple-300 text-purple-600
bg-red-50    border-red-300   text-red-600
```

---

## ✅ CHECKLIST FOR NEW SCREENS

When creating a new category screen:

- [ ] Import all needed components from `@/app/components/ui`
- [ ] Add BrowseButtonsGroup for Google/YouTube
- [ ] Wrap filters in AdminEditableSection level 3
- [ ] Wrap cards in AdminEditableSection level 4
- [ ] Add InterestHeartIcon to each card
- [ ] Use appropriate gradient for category
- [ ] Set showAdminIndicators={true} for all components
- [ ] Add proper animation delays (0.1 * index)
- [ ] Test all interactive elements
- [ ] Verify localStorage persistence

---

## 🚀 READY TO USE!

All components are production-ready and can be imported from:

```typescript
import { ... } from '@/app/components/ui';
```

**View the live demo:** Click "Component Library" button in the app!

---

📱✨ **Happy Coding!** 🎨🚀
