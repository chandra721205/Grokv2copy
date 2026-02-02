# 🎨 Hindu Pilgrims - Customization Guide

Quick reference for customizing the Hindu Pilgrims Ultimate implementation.

---

## 🎯 Quick Customizations

### **Change Colors**

#### **Header Gradient:**
```typescript
// Current:
className="bg-gradient-to-r from-orange-500 to-red-600"

// Change to Purple/Pink:
className="bg-gradient-to-r from-purple-500 to-pink-600"

// Change to Blue/Cyan:
className="bg-gradient-to-r from-blue-500 to-cyan-600"
```

#### **Circuit Card Gradients:**
```typescript
// In sacredCircuits array, modify the gradient property:
{
  gradient: 'from-green-500 via-emerald-500 to-teal-600', // Change this
}
```

---

### **Add More Circuits**

Add to the `sacredCircuits` array:

```typescript
{
  id: 'new-circuit',
  emoji: '⭐',
  icon: Star, // Import from lucide-react
  name: '[Admin: New Circuit Name]',
  deity: '[Admin: Deity]',
  subtitle: '[Admin: Subtitle]',
  description: '[Admin: Description]',
  state: '[Admin: State]',
  difficulty: '[Admin: Difficulty]',
  duration: '[Admin: Duration]',
  priceRange: '[Admin: Price]',
  bestTime: '[Admin: Best Time]',
  crowd: '[Admin: Crowd Level]',
  gradient: 'from-red-500 via-orange-500 to-yellow-600',
  iconBg: 'bg-red-100',
  iconColor: 'text-red-600',
  tag: '[Admin: TAG]',
  totalSites: '[Admin: Number]',
}
```

---

### **Add More Hidden Gems**

Add to the `hiddenGems` array:

```typescript
{
  id: 'gem-5',
  name: '[Admin: Temple Name]',
  location: '[Admin: Location]',
  deity: '[Admin: Deity]',
  visitorCount: '[Admin: Visitor Count]',
  accessibility: '[Admin: Accessibility]',
  description: '[Admin: Description]',
  speciality: '[Admin: Special Feature]',
}
```

---

### **Add More Deities**

Add to the `deityCategories` array:

```typescript
{
  id: 'newdeity' as Deity, // Add to Deity type first
  name: '[Admin: Deity Name]',
  icon: TrendingUp, // Choose lucide icon
  emoji: '✨',
  count: '[Admin: Temple count]',
  gradient: 'from-teal-500 to-cyan-600',
  iconBg: 'bg-teal-100',
  iconColor: 'text-teal-600',
}
```

**Don't forget to update the Deity type:**
```typescript
type Deity = 'all' | 'shiva' | 'vishnu' | 'shakti' | 'ganesha' | 'hanuman' | 'surya' | 'newdeity' | 'others';
```

---

### **Add More States**

Add to the `geographyStates` array:

```typescript
{
  id: 'state-7',
  name: '[Admin: State Name]',
  templeCount: '[Admin: Temple count]',
  districts: '[Admin: District count]',
}
```

---

### **Add More Packages**

Add to the `specialPackages` array:

```typescript
{
  id: 'package-5',
  name: '[Admin: Package Name]',
  duration: '[Admin: Duration]',
  price: '[Admin: Price]',
  inclusions: '[Admin: Inclusions]',
  tag: '[Admin: TAG]',
  gradient: 'from-indigo-500 to-blue-600',
  icon: Package, // Choose lucide icon
}
```

---

### **Modify Custom Tour Form**

Add more fields by adding to the form state and adding Select/Input components:

```typescript
// Add to customTourForm state:
const [customTourForm, setCustomTourForm] = useState({
  // ... existing fields
  newField: '',
});

// Add Select component in the dialog:
<div className="border-2 border-dashed border-gray-200 p-3 rounded">
  <label className="text-sm font-medium text-gray-700 mb-2 block">
    [Admin: New Field Label]
  </label>
  <Select
    value={customTourForm.newField}
    onValueChange={(value) => setCustomTourForm({ ...customTourForm, newField: value })}
  >
    <SelectTrigger>
      <SelectValue placeholder="Select option" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="option1">[Admin: Option 1]</SelectItem>
      <SelectItem value="option2">[Admin: Option 2]</SelectItem>
    </SelectContent>
  </Select>
</div>
```

---

### **Change Notification Types**

Modify `notificationToggles` object and corresponding UI:

```typescript
// Add to notificationToggles state:
const [notificationToggles, setNotificationToggles] = useState({
  // ... existing toggles
  newToggle: false,
});

// Add new toggle UI:
<div className="flex items-center justify-between p-4 bg-orange-50 rounded-2xl border-2 border-dashed border-orange-200">
  <span className="text-sm font-medium">[Admin: New Notification Type]</span>
  <Switch
    checked={notificationToggles.newToggle}
    onCheckedChange={() => handleNotificationToggle('newToggle')}
  />
</div>
```

---

### **Modify Card Sizes**

Change grid columns:

```typescript
// Sacred Circuits - Current: 3 columns
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"

// Change to 4 columns:
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"

// Change to 2 columns:
className="grid grid-cols-1 md:grid-cols-2 gap-6"
```

---

### **Adjust Spacing**

```typescript
// Increase gap between sections:
className="space-y-8" // Current
className="space-y-12" // Larger spacing

// Increase card padding:
className="p-6" // Current
className="p-8" // More padding

// Increase grid gap:
className="gap-6" // Current
className="gap-8" // More gap
```

---

### **Change Border Radius**

```typescript
// Current: rounded-3xl (24px)
className="rounded-3xl"

// Larger: 32px
className="rounded-[32px]"

// Smaller: 16px
className="rounded-2xl"
```

---

### **Modify Shadow Effects**

```typescript
// Current:
className="shadow-xl hover:shadow-2xl"

// Stronger:
className="shadow-2xl hover:shadow-3xl"

// Subtle:
className="shadow-lg hover:shadow-xl"

// Custom:
className="shadow-[0_10px_40px_rgba(0,0,0,0.1)]"
```

---

### **Change Animation Delays**

```typescript
// Current stagger:
transition={{ delay: index * 0.1 }}

// Faster:
transition={{ delay: index * 0.05 }}

// Slower:
transition={{ delay: index * 0.2 }}
```

---

### **Customize Hover Scale**

```typescript
// Current:
className="hover:scale-[1.02]"

// More dramatic:
className="hover:scale-105"

// Subtle:
className="hover:scale-[1.01]"

// No scale:
// Remove the class
```

---

## 🔧 Advanced Customizations

### **Add Image Support**

For circuit cards, add image field:

```typescript
// In circuit object:
{
  // ... other fields
  image: '/images/char-dham.jpg',
}

// In card JSX, add before gradient header:
<div className="relative h-48 overflow-hidden">
  <img 
    src={circuit.image} 
    alt={circuit.name}
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
</div>
```

---

### **Add Search Functionality**

Add search state and filter:

```typescript
const [searchQuery, setSearchQuery] = useState('');

const filteredCircuits = sacredCircuits.filter(circuit =>
  circuit.name.toLowerCase().includes(searchQuery.toLowerCase())
);

// Add search input before grid:
<div className="mb-6">
  <Input
    type="text"
    placeholder="Search circuits..."
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    className="max-w-md"
  />
</div>

// Use filteredCircuits instead of sacredCircuits in map
```

---

### **Add Sorting**

Add sort state and logic:

```typescript
const [sortBy, setSortBy] = useState<'name' | 'price' | 'duration'>('name');

const sortedCircuits = [...sacredCircuits].sort((a, b) => {
  if (sortBy === 'name') return a.name.localeCompare(b.name);
  // Add other sort logic
  return 0;
});

// Add sort select:
<Select value={sortBy} onValueChange={(value: any) => setSortBy(value)}>
  <SelectTrigger className="w-48">
    <SelectValue />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="name">Sort by Name</SelectItem>
    <SelectItem value="price">Sort by Price</SelectItem>
    <SelectItem value="duration">Sort by Duration</SelectItem>
  </SelectContent>
</Select>
```

---

### **Add Pagination**

Add pagination state:

```typescript
const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 6;

const paginatedCircuits = sacredCircuits.slice(
  (currentPage - 1) * itemsPerPage,
  currentPage * itemsPerPage
);

// Add pagination controls:
<div className="flex justify-center gap-2 mt-6">
  <Button
    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
    disabled={currentPage === 1}
  >
    Previous
  </Button>
  <span className="px-4 py-2">
    Page {currentPage} of {Math.ceil(sacredCircuits.length / itemsPerPage)}
  </span>
  <Button
    onClick={() => setCurrentPage(p => p + 1)}
    disabled={currentPage >= Math.ceil(sacredCircuits.length / itemsPerPage)}
  >
    Next
  </Button>
</div>
```

---

### **Add Favorites Section**

Create a favorites view:

```typescript
const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

const displayCircuits = showFavoritesOnly
  ? sacredCircuits.filter(c => savedInterests.has(c.id))
  : sacredCircuits;

// Add toggle:
<Button
  onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
  variant={showFavoritesOnly ? "default" : "outline"}
>
  {showFavoritesOnly ? 'Show All' : 'Show Favorites Only'}
</Button>
```

---

### **Add Export Functionality**

Export saved interests:

```typescript
const handleExport = () => {
  const favorites = sacredCircuits.filter(c => savedInterests.has(c.id));
  const data = JSON.stringify(favorites, null, 2);
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'my-pilgrimage-interests.json';
  a.click();
};

// Add export button:
<Button onClick={handleExport}>
  <Download className="w-4 h-4 mr-2" />
  Export Favorites
</Button>
```

---

### **Add Print Functionality**

Create printable itinerary:

```typescript
const handlePrint = () => {
  window.print();
};

// Add print styles in a <style> tag:
<style>
  {`
    @media print {
      .no-print { display: none; }
      .print-only { display: block; }
    }
  `}
</style>

// Add print button:
<Button onClick={handlePrint} className="no-print">
  <Printer className="w-4 h-4 mr-2" />
  Print Itinerary
</Button>
```

---

## 🎨 Theme Customization

### **Change Overall Theme**

Create a theme constant:

```typescript
const theme = {
  primary: 'orange',
  secondary: 'red',
  accent: 'pink',
  gradients: {
    header: 'from-orange-500 to-red-600',
    button: 'from-orange-600 to-red-700',
  },
  colors: {
    light: 'orange-50',
    border: 'orange-200',
  }
};

// Use throughout component:
className={`bg-gradient-to-r ${theme.gradients.header}`}
```

---

### **Dark Mode Support**

Add dark mode classes:

```typescript
className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
```

---

## 📱 Responsive Adjustments

### **Mobile-First Approach**

```typescript
// Current:
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"

// Tablet gets 2, Desktop gets 4:
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"

// Always 1 column on mobile, 3+ on tablet:
className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4"
```

---

### **Hide Elements on Mobile**

```typescript
className="hidden md:block" // Hide on mobile, show on tablet+
className="md:hidden" // Show on mobile only
```

---

## 🚀 Performance Optimizations

### **Lazy Load Images**

```typescript
<img 
  loading="lazy" 
  src={circuit.image} 
  alt={circuit.name}
/>
```

---

### **Memoize Expensive Computations**

```typescript
import { useMemo } from 'react';

const filteredAndSortedCircuits = useMemo(() => {
  return sacredCircuits
    .filter(c => c.name.includes(searchQuery))
    .sort((a, b) => a.name.localeCompare(b.name));
}, [searchQuery]);
```

---

### **Debounce Search**

```typescript
import { useEffect, useState } from 'react';

const [searchQuery, setSearchQuery] = useState('');
const [debouncedQuery, setDebouncedQuery] = useState('');

useEffect(() => {
  const timer = setTimeout(() => {
    setDebouncedQuery(searchQuery);
  }, 300);
  return () => clearTimeout(timer);
}, [searchQuery]);
```

---

## ✅ Testing Checklist

After customizations, test:

- ✅ All buttons work
- ✅ Animations are smooth
- ✅ Responsive on mobile/tablet/desktop
- ✅ Heart icons toggle correctly
- ✅ Notification toggles work
- ✅ YouTube/Google links open
- ✅ Custom tour form submits
- ✅ Grok AI response shows
- ✅ Hidden gems toggle works
- ✅ Deity filter navigates
- ✅ All admin zones are marked
- ✅ No console errors
- ✅ Toast notifications appear

---

## 📞 Need Help?

Refer to:
- `/HINDU_PILGRIMS_ULTIMATE_GUIDE.md` - Complete feature guide
- `/src/app/components/categories/HinduPilgrimsFlow_Ultimate.tsx` - Source code
- Lucide Icons: https://lucide.dev/icons/
- Tailwind CSS: https://tailwindcss.com/docs

---

**Happy Customizing!** 🎨✨
