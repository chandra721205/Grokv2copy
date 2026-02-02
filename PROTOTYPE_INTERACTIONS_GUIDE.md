# 🎬 PROTOTYPE INTERACTIONS - COMPLETE GUIDE

## Complete Interactive Design System for GrokYatra Hindu Pilgrims

---

## 📋 TABLE OF CONTENTS

1. [Navigation Flows](#navigation-flows)
2. [Interactive States](#interactive-states)
3. [Animations Library](#animations-library)
4. [Gesture Interactions](#gesture-interactions)
5. [Feedback Systems](#feedback-systems)
6. [Loading States](#loading-states)
7. [Success States](#success-states)

---

## 🗺️ NAVIGATION FLOWS

### **1. Circuit Card → Detail Page**

**User Action:** Click "View Details" on any Sacred Circuit card

**Animation Sequence:**
```
Time 0ms:
├─ User clicks button
└─ Button depresses (scale: 0.98)

Time 50ms:
├─ Button returns to normal
└─ Trigger navigation

Time 100ms:
├─ Current screen slides left (-300px)
└─ Current screen fades out (opacity: 0)

Time 100-400ms:
├─ New screen slides in from right (300px → 0px)
└─ New screen fades in (opacity: 0 → 1)

Time 400ms:
└─ Navigation complete
```

**Code Implementation:**
```tsx
// Circuit Card Button
<motion.div whileTap={{ scale: 0.98 }}>
  <Button onClick={() => handleCircuitClick(circuit.id)}>
    View Details <ChevronRight />
  </Button>
</motion.div>

// Screen Transition
<AnimatePresence mode="wait">
  {currentScreen === 'main' && (
    <motion.div
      key="main"
      initial={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      {/* Main content */}
    </motion.div>
  )}
  
  {currentScreen === 'circuit-detail' && (
    <motion.div
      key="circuit-detail"
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      {/* Circuit detail content */}
    </motion.div>
  )}
</AnimatePresence>
```

**Visual Flow:**
```
┌─────────────────┐        ┌─────────────────┐
│  Circuit Card   │   →    │  Detail Page    │
│                 │        │                 │
│ [View Details]  │  Click │  Circuit Info   │
│                 │  0.3s  │  Temples List   │
└─────────────────┘  slide └─────────────────┘
```

---

### **2. Hidden Gem Card → Gem Detail Page**

**User Action:** Click on any Hidden Gem card

**Animation Sequence:**
```
Time 0ms:
├─ Card hover state active
├─ Card scaled to 1.02
└─ Card lifted by 4px

Time 0ms (on click):
├─ Card taps down (scale: 0.98)
└─ Trigger navigation

Time 100ms:
├─ Current screen slides left
└─ Gem detail slides in from right

Time 400ms:
└─ Detail page fully visible
```

**Code Implementation:**
```tsx
<AdminEditableCard label="ADMIN_HiddenGem1_Card">
  <motion.div
    whileHover={{ scale: 1.02, y: -4 }}
    whileTap={{ scale: 0.98 }}
    onClick={() => setSelectedGem(gem.id)}
    className="cursor-pointer"
  >
    <div className="bg-white rounded-3xl p-6 shadow-lg">
      {/* Gem content */}
    </div>
  </motion.div>
</AdminEditableCard>
```

---

### **3. State Region → Filtered Temple Results**

**User Action:** Click state/region in state picker

**Animation Sequence:**
```
Time 0ms:
├─ State card clicked
└─ Loading state begins

Time 100ms:
├─ Show loading spinner
└─ Fade out current results

Time 500ms:
├─ Filter temples by state
└─ Fade in new results

Time 800ms:
└─ Loading complete
```

**Code Implementation:**
```tsx
const [loading, setLoading] = useState(false);

const handleStateFilter = (state: string) => {
  setLoading(true);
  
  setTimeout(() => {
    setFilteredTemples(temples.filter(t => t.state === state));
    setLoading(false);
  }, 500);
};

// Results display
<AnimatePresence mode="wait">
  {loading ? (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Loader2 className="w-8 h-8 animate-spin" />
    </motion.div>
  ) : (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {filteredTemples.map(temple => (
        <TempleCard key={temple.id} {...temple} />
      ))}
    </motion.div>
  )}
</AnimatePresence>
```

---

### **4. Deity Icon → Deity-Specific View**

**User Action:** Click deity category icon

**Animation Sequence:**
```
Time 0ms:
├─ Icon pulses (scale: 1.1)
└─ Icon glows with deity color

Time 50ms:
├─ Icon returns to normal
└─ Trigger navigation

Time 100ms:
├─ Screen slides up from bottom
└─ Deity-specific circuits appear

Time 400ms:
└─ Animation complete
```

**Code Implementation:**
```tsx
<motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
  onClick={() => handleDeityClick(deity.id)}
  className="relative"
>
  <div className={`w-16 h-16 rounded-2xl ${deity.iconBg} flex items-center justify-center`}>
    <deity.icon className={`w-8 h-8 ${deity.iconColor}`} />
  </div>
</motion.button>

// Screen transition
<motion.div
  initial={{ y: '100%', opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.4, ease: 'easeOut' }}
>
  {/* Deity-specific content */}
</motion.div>
```

---

### **5. Package Card → Booking Flow**

**User Action:** Click "Book Now" on package card

**Animation Sequence:**
```
Time 0ms:
├─ Button pressed
└─ Modal overlay begins

Time 100ms:
├─ Backdrop fades in (opacity: 0 → 0.5)
└─ Modal scales in from center

Time 300ms:
├─ Modal fully visible
└─ Booking form appears

Time 600ms:
└─ Animation complete, form ready
```

**Code Implementation:**
```tsx
<Dialog open={showBookingModal} onOpenChange={setShowBookingModal}>
  <DialogContent>
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {/* Booking form */}
    </motion.div>
  </DialogContent>
</Dialog>
```

---

### **6. Custom Builder → AI Confirmation**

**User Action:** Click "Request Customization with Grok AI"

**Animation Sequence:**
```
Time 0ms:
├─ Submit button pressed
├─ Button shows loading spinner
└─ Close Custom Tour Builder

Time 500ms:
├─ Open Grok AI modal
└─ Backdrop fades in

Time 600ms:
├─ Green checkmark pops in (spring)
└─ Title appears

Time 1000ms:
├─ Message content fades in
└─ AI typing indicator appears

Time 4000ms:
└─ Typing indicator fades out

Final State:
└─ "OK, Close" button ready
```

**Code Implementation:**
```tsx
const handleGrokSubmit = () => {
  setShowCustomTourBuilder(false);
  setShowGrokConfirmation(true);
  setGrokTyping(true);
  
  setTimeout(() => {
    setGrokTyping(false);
  }, 3000);
};

// Grok AI Modal
<Dialog open={showGrokConfirmation} onOpenChange={setShowGrokConfirmation}>
  <DialogContent className="max-w-lg">
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', duration: 0.5 }}
      className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full"
    >
      <Check className="w-10 h-10 text-white" />
    </motion.div>
    
    {/* AI Typing Indicator */}
    {grokTyping && (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Pulsing dots */}
      </motion.div>
    )}
  </DialogContent>
</Dialog>
```

---

## 🎨 INTERACTIVE STATES

### **Default State**

All clickable elements have a clear visual hierarchy:

```tsx
// Cards
className="bg-white shadow-lg rounded-3xl border-2 border-gray-200"

// Buttons
className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl shadow-md"

// Icons
className="w-5 h-5 text-gray-600"

// Inputs
className="border-2 border-gray-200 rounded-xl focus:border-purple-400"
```

---

### **Hover State**

**Cards:**
```tsx
<motion.div
  whileHover={{ 
    scale: 1.02, 
    y: -4,
    boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
  }}
  transition={{ duration: 0.2, ease: 'easeOut' }}
>
```

**Buttons:**
```tsx
<motion.button
  whileHover={{ 
    scale: 1.05,
    boxShadow: '0 10px 25px rgba(0,0,0,0.15)'
  }}
  className="bg-purple-600 hover:bg-purple-700"
>
```

**Icons:**
```tsx
<motion.div
  whileHover={{ scale: 1.1, rotate: 5 }}
  transition={{ duration: 0.2 }}
>
  <Sparkles className="w-5 h-5 text-yellow-500" />
</motion.div>
```

**Inputs:**
```tsx
<input
  className="border-2 border-gray-200 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all"
/>
```

---

### **Active/Clicked State**

**Buttons:**
```tsx
<motion.button
  whileTap={{ scale: 0.95 }}
  transition={{ duration: 0.1 }}
>
```

**Cards:**
```tsx
<motion.div
  whileTap={{ scale: 0.98 }}
>
```

**Toggle Switches:**
```tsx
<Switch
  className={`${
    isOn ? 'bg-purple-600' : 'bg-gray-200'
  } transition-colors duration-300`}
/>
```

---

### **Loading State**

**Button with Spinner:**
```tsx
<Button disabled={loading}>
  {loading ? (
    <>
      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
      Loading...
    </>
  ) : (
    'Submit'
  )}
</Button>
```

**Full Overlay Spinner:**
```tsx
{loading && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="absolute inset-0 flex items-center justify-center bg-white/90"
  >
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
      className="w-8 h-8 border-4 border-purple-600 border-t-transparent rounded-full"
    />
  </motion.div>
)}
```

**Skeleton Loading:**
```tsx
<div className="space-y-4">
  <div className="h-4 bg-gray-200 rounded animate-pulse" />
  <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4" />
  <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2" />
</div>
```

---

### **Success State**

**Button with Checkmark:**
```tsx
{success ? (
  <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ type: 'spring', duration: 0.5 }}
    className="bg-green-500 text-white rounded-xl px-6 py-3"
  >
    <Check className="w-5 h-5 inline mr-2" />
    Saved!
  </motion.div>
) : (
  <Button onClick={handleSave}>Save</Button>
)}
```

**Toast Notification:**
```tsx
import { toast } from 'sonner';

toast.success('Your request has been saved! 🙏', {
  duration: 3000,
  position: 'bottom-center',
});
```

---

## 🎬 ANIMATIONS LIBRARY

### **1. Page Slide Transition (0.3s)**

**Left to Right:**
```tsx
<motion.div
  initial={{ x: -300, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  exit={{ x: 300, opacity: 0 }}
  transition={{ duration: 0.3, ease: 'easeInOut' }}
>
```

**Right to Left:**
```tsx
<motion.div
  initial={{ x: 300, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  exit={{ x: -300, opacity: 0 }}
  transition={{ duration: 0.3, ease: 'easeInOut' }}
>
```

**Bottom to Top:**
```tsx
<motion.div
  initial={{ y: '100%', opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  exit={{ y: '100%', opacity: 0 }}
  transition={{ duration: 0.4, ease: 'easeOut' }}
>
```

---

### **2. Card Hover Animation (0.2s)**

**Gentle Lift:**
```tsx
<motion.div
  whileHover={{ 
    scale: 1.02, 
    y: -4,
    boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
  }}
  transition={{ duration: 0.2, ease: 'easeOut' }}
>
```

**With Rotation:**
```tsx
<motion.div
  whileHover={{ 
    scale: 1.05, 
    rotate: 2,
    boxShadow: '0 25px 50px rgba(0,0,0,0.2)'
  }}
  transition={{ duration: 0.2 }}
>
```

---

### **3. Toggle Fade/Expand Animation**

**Accordion Expand:**
```tsx
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="overflow-hidden"
    >
      {/* Content */}
    </motion.div>
  )}
</AnimatePresence>
```

**Simple Fade:**
```tsx
<AnimatePresence>
  {isVisible && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Content */}
    </motion.div>
  )}
</AnimatePresence>
```

---

### **4. AI Typing Indicator (Pulsing Dots)**

**Three Dots Animation:**
```tsx
<div className="flex gap-1.5">
  {[0, 0.2, 0.4].map((delay, i) => (
    <motion.div
      key={i}
      animate={{ scale: [1, 1.3, 1] }}
      transition={{ 
        repeat: Infinity, 
        duration: 1, 
        delay,
        ease: 'easeInOut'
      }}
      className="w-2 h-2 bg-yellow-300 rounded-full"
    />
  ))}
</div>
```

**Alternative Wave Animation:**
```tsx
<div className="flex gap-1.5">
  {[0, 0.15, 0.3].map((delay, i) => (
    <motion.div
      key={i}
      animate={{ y: [0, -8, 0] }}
      transition={{ 
        repeat: Infinity, 
        duration: 0.9, 
        delay,
        ease: 'easeInOut'
      }}
      className="w-2 h-2 bg-purple-500 rounded-full"
    />
  ))}
</div>
```

---

### **5. Modal Entrance Animation**

**Scale In:**
```tsx
<Dialog open={isOpen} onOpenChange={setIsOpen}>
  <DialogContent>
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ duration: 0.3, type: 'spring' }}
    >
      {/* Modal content */}
    </motion.div>
  </DialogContent>
</Dialog>
```

**Slide Down:**
```tsx
<motion.div
  initial={{ y: -50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  exit={{ y: -50, opacity: 0 }}
  transition={{ duration: 0.3, ease: 'easeOut' }}
>
```

---

### **6. Stagger Children Animation**

**List Items:**
```tsx
<motion.div
  initial="hidden"
  animate="visible"
  variants={{
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }}
>
  {items.map((item, i) => (
    <motion.div
      key={i}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    >
      {item}
    </motion.div>
  ))}
</motion.div>
```

---

### **7. Spring Pop Animation**

**Checkmark Pop:**
```tsx
<motion.div
  initial={{ scale: 0, rotate: -180 }}
  animate={{ scale: 1, rotate: 0 }}
  transition={{ 
    type: 'spring', 
    stiffness: 200, 
    damping: 15 
  }}
>
  <Check className="w-10 h-10 text-green-500" />
</motion.div>
```

**Success Badge:**
```tsx
<motion.div
  initial={{ scale: 0, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ 
    type: 'spring', 
    duration: 0.6,
    bounce: 0.5
  }}
  className="bg-green-100 text-green-700 px-4 py-2 rounded-full"
>
  ✓ Success!
</motion.div>
```

---

### **8. Continuous Rotation (Loading)**

**Spinner:**
```tsx
<motion.div
  animate={{ rotate: 360 }}
  transition={{ 
    repeat: Infinity, 
    duration: 1, 
    ease: 'linear' 
  }}
  className="w-8 h-8 border-4 border-purple-600 border-t-transparent rounded-full"
/>
```

**Sparkle Icon:**
```tsx
<motion.div
  animate={{ rotate: [0, 10, -10, 0] }}
  transition={{ 
    repeat: Infinity, 
    duration: 2, 
    ease: 'easeInOut' 
  }}
>
  <Sparkles className="w-5 h-5 text-yellow-500" />
</motion.div>
```

---

## 👆 GESTURE INTERACTIONS

### **Swipe Gestures**

**Horizontal Swipe (Card Dismiss):**
```tsx
<motion.div
  drag="x"
  dragConstraints={{ left: 0, right: 0 }}
  dragElastic={0.2}
  onDragEnd={(e, { offset, velocity }) => {
    if (Math.abs(offset.x) > 100) {
      // Dismiss card
      handleDismiss();
    }
  }}
>
  {/* Swipeable card */}
</motion.div>
```

**Pull to Refresh:**
```tsx
<motion.div
  drag="y"
  dragConstraints={{ top: 0, bottom: 0 }}
  onDragEnd={(e, { offset }) => {
    if (offset.y > 100) {
      handleRefresh();
    }
  }}
>
  {/* Refreshable content */}
</motion.div>
```

---

### **Long Press**

```tsx
const [isLongPress, setIsLongPress] = useState(false);
let pressTimer: NodeJS.Timeout;

const handlePressStart = () => {
  pressTimer = setTimeout(() => {
    setIsLongPress(true);
    // Show context menu
  }, 500);
};

const handlePressEnd = () => {
  clearTimeout(pressTimer);
  setIsLongPress(false);
};

<motion.div
  onPointerDown={handlePressStart}
  onPointerUp={handlePressEnd}
  whileTap={{ scale: 0.95 }}
>
  {/* Long-pressable element */}
</motion.div>
```

---

## 🔔 FEEDBACK SYSTEMS

### **Toast Notifications**

**Success Toast:**
```tsx
toast.success('Your request has been saved! 🙏', {
  duration: 3000,
  position: 'bottom-center',
  style: {
    background: '#10b981',
    color: 'white',
  },
});
```

**Error Toast:**
```tsx
toast.error('Something went wrong. Please try again.', {
  duration: 4000,
  position: 'top-center',
});
```

**Loading Toast:**
```tsx
const toastId = toast.loading('Processing your request...');

// Later, update it:
toast.success('Request completed!', { id: toastId });
```

---

### **Haptic Feedback (Mobile)**

```tsx
const triggerHaptic = () => {
  if ('vibrate' in navigator) {
    navigator.vibrate(10); // 10ms vibration
  }
};

<Button
  onClick={() => {
    triggerHaptic();
    handleSubmit();
  }}
>
  Submit
</Button>
```

---

### **Sound Feedback**

```tsx
const playSound = (soundType: 'click' | 'success' | 'error') => {
  const audio = new Audio(`/sounds/${soundType}.mp3`);
  audio.volume = 0.3;
  audio.play();
};

<Button
  onClick={() => {
    playSound('click');
    handleAction();
  }}
>
  Click Me
</Button>
```

---

## ⏳ LOADING STATES GALLERY

### **1. Button Loading**
```tsx
<Button disabled={loading}>
  {loading ? (
    <>
      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
      Processing...
    </>
  ) : (
    'Submit'
  )}
</Button>
```

### **2. Inline Spinner**
```tsx
<div className="flex items-center gap-2">
  <Loader2 className="w-5 h-5 animate-spin text-purple-600" />
  <span className="text-sm text-gray-600">Loading temples...</span>
</div>
```

### **3. Skeleton Loader**
```tsx
<div className="space-y-4">
  <div className="h-6 bg-gray-200 rounded animate-pulse" />
  <div className="h-6 bg-gray-200 rounded animate-pulse w-5/6" />
  <div className="h-6 bg-gray-200 rounded animate-pulse w-4/6" />
</div>
```

### **4. Progress Bar**
```tsx
<div className="w-full bg-gray-200 rounded-full h-2">
  <motion.div
    initial={{ width: '0%' }}
    animate={{ width: `${progress}%` }}
    transition={{ duration: 0.3 }}
    className="bg-purple-600 h-2 rounded-full"
  />
</div>
```

### **5. Pulsing Placeholder**
```tsx
<motion.div
  animate={{ opacity: [0.5, 1, 0.5] }}
  transition={{ repeat: Infinity, duration: 1.5 }}
  className="bg-gray-200 rounded-3xl p-6"
>
  {/* Content placeholder */}
</motion.div>
```

---

## ✅ SUCCESS STATES GALLERY

### **1. Checkmark Animation**
```tsx
<motion.div
  initial={{ scale: 0, rotate: -180 }}
  animate={{ scale: 1, rotate: 0 }}
  transition={{ type: 'spring', duration: 0.5 }}
  className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center"
>
  <Check className="w-10 h-10 text-white" strokeWidth={3} />
</motion.div>
```

### **2. Success Badge**
```tsx
<motion.div
  initial={{ scale: 0, y: 20 }}
  animate={{ scale: 1, y: 0 }}
  transition={{ type: 'spring', bounce: 0.6 }}
  className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold"
>
  ✓ Saved Successfully!
</motion.div>
```

### **3. Confetti Effect**
```tsx
import confetti from 'canvas-confetti';

const triggerConfetti = () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
};

<Button onClick={() => {
  handleSubmit();
  triggerConfetti();
}}>
  Complete
</Button>
```

### **4. Progress Complete**
```tsx
<motion.div
  initial={{ width: '0%' }}
  animate={{ width: '100%' }}
  transition={{ duration: 1 }}
  className="h-2 bg-green-500 rounded-full"
  onAnimationComplete={() => {
    toast.success('All done!');
  }}
/>
```

---

## 📱 RESPONSIVE INTERACTIONS

### **Touch vs. Mouse Interactions**

```tsx
const [isTouchDevice, setIsTouchDevice] = useState(false);

useEffect(() => {
  setIsTouchDevice('ontouchstart' in window);
}, []);

<motion.div
  whileHover={!isTouchDevice ? { scale: 1.05 } : {}}
  whileTap={{ scale: 0.95 }}
>
  {/* Content */}
</motion.div>
```

---

## 🎯 COMPLETE INTERACTION MATRIX

| Element | Default | Hover | Active | Loading | Success | Duration |
|---------|---------|-------|--------|---------|---------|----------|
| **Primary Button** | scale: 1 | scale: 1.05 | scale: 0.95 | Spinner | Checkmark | 0.2s |
| **Card** | scale: 1, y: 0 | scale: 1.02, y: -4 | scale: 0.98 | Pulse | - | 0.2s |
| **Icon** | scale: 1 | scale: 1.1 | scale: 0.9 | Rotate 360 | - | 0.15s |
| **Input** | border: gray-200 | border: purple-400 | - | - | border: green | 0.2s |
| **Toggle** | bg: gray-200 | bg: gray-300 | bg: purple-600 | - | - | 0.3s |
| **Modal** | - | - | - | Fade in | - | 0.3s |
| **Toast** | - | - | - | - | Slide in | 0.3s |
| **Page** | opacity: 1 | - | - | - | - | 0.3s slide |

---

*Prototype Interactions Guide completed: January 20, 2026*  
*Complete interactive design system implemented!* ✨
