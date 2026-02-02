# GrokYatra - Testing Guide (Rectified Version)

## 🧪 Comprehensive Testing Checklist

Use this guide to verify all rectification changes are working correctly.

---

## 1️⃣ Main Home Page Tests

### Visual Verification
- [ ] Google Search button visible in header (below search bar)
- [ ] YouTube button visible in header (below search bar)
- [ ] Admin notice card displays correctly
- [ ] 12 category cards display in 3-column grid
- [ ] "Popular Categories" heading (not "Trending Destinations")
- [ ] No specific destination names visible

### Functional Tests
**Test 1: Google Search (No Input)**
1. Don't type anything in search bar
2. Click "Google Search" button
3. ✅ Expected: Opens Google with query "tourist destinations india"

**Test 2: Google Search (With Input)**
1. Type "beach vacation" in search bar
2. Click "Google Search" button
3. ✅ Expected: Opens Google with query "beach vacation"

**Test 3: YouTube Browse (No Input)**
1. Clear search bar
2. Click "YouTube" button
3. ✅ Expected: Opens YouTube with query "travel destinations india"

**Test 4: YouTube Browse (With Input)**
1. Type "mountain trekking" in search bar
2. Click "YouTube" button
3. ✅ Expected: Opens YouTube with query "mountain trekking"

**Test 5: Category Cards**
1. Click on each of the 12 category cards
2. ✅ Expected: Each opens its respective Category Hub
3. ✅ Expected: "Senior" category opens Senior Wellness Hub

**Test 6: Destination Card Actions**
1. Scroll to "Popular Categories" section
2. Click "Google" button on any card
3. ✅ Expected: Opens Google search
4. Click "YouTube" button on any card
5. ✅ Expected: Opens YouTube search

### Content Verification
- [ ] No specific city names (Goa, Mumbai, Delhi, etc.)
- [ ] Cards show: "Adventure Tours", "Cultural Experiences", "Wellness Retreats"
- [ ] Admin notice text explains placeholders
- [ ] All icons display correctly (Globe, Youtube)

---

## 2️⃣ Explore Page Tests

### Visual Verification
- [ ] Google Search button in header
- [ ] YouTube button in header
- [ ] Admin notice card visible
- [ ] 6 destination cards with placeholders
- [ ] Map preview shows "Search on Google Maps" button
- [ ] Title is "Explore Destinations" (not "Explore India")

### Functional Tests
**Test 1: Header Search Buttons**
1. Type "heritage sites" in search bar
2. Click "Google Search" button
3. ✅ Expected: Opens Google with query "heritage sites"
4. Click "YouTube" button
5. ✅ Expected: Opens YouTube with query "heritage sites"

**Test 2: Map Search**
1. Click "Search on Google Maps" button in map preview
2. ✅ Expected: Opens Google search (or Google Maps)

**Test 3: Card Actions**
1. Click "Google" button on first destination card
2. ✅ Expected: Opens Google search
3. Click "YouTube" button on first destination card
4. ✅ Expected: Opens YouTube search

**Test 4: Filter Tabs**
1. Click each filter: All, Popular, Nearby, Top Rated, Budget
2. ✅ Expected: Active filter highlighted in white
3. ✅ Expected: Content updates (if filtering logic added)

### Content Verification
- [ ] Destinations show: "Admin-Added Destination 1/2/3", "Popular Spot A/B", "Location X"
- [ ] No references to: Goa, Varanasi, Ladakh, Kerala, Jaipur, Rishikesh
- [ ] Admin notice explains to use Google/YouTube
- [ ] Browse Options heading (6 items)

---

## 3️⃣ Category Hub Tests (All 12 Categories)

### Categories to Test
1. Adventure
2. Wellness
3. Devotional
4. Heritage
5. Eco Tourism
6. Educational
7. Corporate
8. Cruise
9. Health
10. Senior (redirects to Senior Hub)
11. Honeymoon
12. Sports

### Visual Verification (Per Category)
- [ ] Google Search button in header
- [ ] YouTube button in header
- [ ] "Search Online" quick action card
- [ ] Admin notice card
- [ ] 3 tour template cards
- [ ] "Tour Templates" heading (not "Featured Tours")
- [ ] 4 theme option cards at bottom

### Functional Tests (Per Category)
**Test 1: Header Search**
1. Navigate to [Category] Hub
2. Type category-specific query
3. Click "Google Search"
4. ✅ Expected: Opens Google with contextual query
5. Click "YouTube"
6. ✅ Expected: Opens YouTube with contextual query

**Test 2: Quick Action - Search Online**
1. Click "Search Online" quick action card
2. ✅ Expected: Opens Google search for category

**Test 3: Tour Card Actions**
1. Find any tour template card
2. Click "Google Search" button
3. ✅ Expected: Opens Google with category-specific query
4. Click "YouTube" button
5. ✅ Expected: Opens YouTube with category-specific query

**Test 4: Theme Options**
1. Click any "Theme Option" card
2. ✅ Expected: Opens Google search for category

**Test 5: Custom Tour Planner**
1. Click "Custom Tour" quick action card
2. ✅ Expected: Opens Combo Tour Planner

**Test 6: Back Navigation**
1. Click back button (top-left)
2. ✅ Expected: Returns to Main Home

### Content Verification (Per Category)
- [ ] Tour names: "[Category] Experience 1", "[Category] Package A", "[Category] Tour Option"
- [ ] Destinations: "Location to be assigned", "Admin-selected destination", "Popular spot TBD"
- [ ] Theme areas: "Theme Option 1/2/3/4"
- [ ] No specific destination names
- [ ] Admin notice explains templates

---

## 4️⃣ My Bookings Page Tests

### Visual Verification
- [ ] Tabs: "Upcoming" and "Past"
- [ ] 2 upcoming bookings visible
- [ ] 1 past booking visible
- [ ] No specific destination names

### Content Verification
**Upcoming Bookings:**
- [ ] BK001: "Admin-Added Destination 1" - Beach & Cruise
- [ ] BK002: "Popular Location A" - Wellness

**Past Bookings:**
- [ ] BK003: "Heritage Tour Package" - Heritage

**Should NOT see:**
- [ ] ❌ "Goa Beach Resort"
- [ ] ❌ "Rishikesh Yoga Retreat"
- [ ] ❌ "Rajasthan Heritage Tour"

### Functional Tests
1. Switch between Upcoming/Past tabs
2. ✅ Expected: Content updates correctly
3. Click "View Details" on any booking
4. ✅ Expected: Button interaction works (may show placeholder)
5. Click "View Ticket" if available
6. ✅ Expected: Button interaction works

---

## 5️⃣ Messages Page Tests

### Visual Verification
- [ ] 4 message cards visible
- [ ] Messages from: Grok AI, Customer Support, Notifications, Trip Updates
- [ ] No specific destination references

### Content Verification
- [ ] Message 1: "Your custom tour itinerary is ready!"
- [ ] Message 4: "Your upcoming trip starts in 5 days"
- [ ] Message 3: "20% off on selected categories!"

**Should NOT see:**
- [ ] ❌ "Kerala Backwaters"
- [ ] ❌ "trip to Goa"
- [ ] ❌ "Hill Stations"

### Functional Tests
1. Click on any message card
2. ✅ Expected: Visual feedback (hover/press state)
3. Check unread indicator
4. ✅ Expected: "New" badge shows on unread messages

---

## 6️⃣ Profile Page Tests

### Visual Verification
- [ ] Profile card with user avatar
- [ ] Contact information displayed
- [ ] Location shows: "City, State (Admin-set)"
- [ ] Stats: Trips, Reviews, Spent
- [ ] 10 menu items visible

### Content Verification
- [ ] Location field: "City, State (Admin-set)"

**Should NOT see:**
- [ ] ❌ "Mumbai, Maharashtra"
- [ ] ❌ Any specific city/state name

### Functional Tests
1. Click each menu item
2. ✅ Expected: Visual feedback on click
3. Check KYC Verified badge
4. ✅ Expected: Shows green checkmark ✓
5. Click Logout button
6. ✅ Expected: Logout interaction works

---

## 7️⃣ Senior Wellness Hub Tests

### Visual Verification
- [ ] 6 care service cards in 2-column grid
- [ ] 3 senior package cards
- [ ] "Recommended Packages" heading
- [ ] No specific destination names

### Service Cards (All 6)
- [ ] Doctor on Tour
- [ ] Nursing Care
- [ ] Personal Assistant
- [ ] Emergency Support
- [ ] Medication Management
- [ ] Health Monitoring

### Content Verification
**Package Destinations:**
- [ ] "Admin-Selected Destination 1"
- [ ] "Popular Location A"
- [ ] "Destination Package B"

**Should NOT see:**
- [ ] ❌ "Rishikesh & Haridwar"
- [ ] ❌ "Jaipur & Udaipur"
- [ ] ❌ "Goa & Kerala"

### Functional Tests
**Test 1: Service Selection**
1. Click any service card
2. ✅ Expected: Card highlights in gradient
3. ✅ Expected: Service details expand below
4. Click "Book This Service" button
5. ✅ Expected: Button interaction works

**Test 2: Package Cards**
1. Verify all 3 packages show
2. Check includes badges
3. ✅ Expected: Green badges show service inclusions
4. Click "View Package Details"
5. ✅ Expected: Button interaction works

**Test 3: Back Navigation**
1. Click back button
2. ✅ Expected: Returns to Main Home

---

## 8️⃣ Combo Tour Planner Tests

### Step 1: Select Interests
- [ ] 12 category cards visible in 2-column grid
- [ ] Counter shows "0/5 selected"
- [ ] "Continue" button disabled when 0 selected

**Test 1: Category Selection**
1. Click 3 different category cards
2. ✅ Expected: Cards highlight with gradient
3. ✅ Expected: Checkmark appears on selected
4. ✅ Expected: Counter updates to "3/5 selected"
5. Try to select 6th category
6. ✅ Expected: Can't select more than 5
7. Click "Continue"
8. ✅ Expected: Proceeds to Step 2

### Step 2: Travel Preferences
- [ ] Date inputs visible
- [ ] Traveler slider (range 1-10)
- [ ] Budget slider
- [ ] Travel pace slider

**Test 2: Preferences Input**
1. Select dates
2. Adjust traveler count
3. Adjust budget
4. Adjust pace (Relaxed/Balanced/Fast-paced)
5. ✅ Expected: All inputs work smoothly
6. Click "Continue"
7. ✅ Expected: Proceeds to Step 3

### Step 3: Review & Generate
- [ ] Selected categories display with icons
- [ ] Travel details summary shown
- [ ] Grok AI card visible

**Test 3: Plan Generation**
1. Review all selections
2. Click "Generate My Plan"
3. ✅ Expected: AI processing animation
4. ✅ Expected: Success message or next step

**Test 4: Back Navigation**
1. Click back button at any step
2. ✅ Expected: Returns to previous screen

---

## 9️⃣ Travel Essentials Hub Tests

### Visual Verification
- [ ] Quick action grid (2x2)
- [ ] Popular services section
- [ ] No destination-specific content

### Functional Tests
1. Click any service card
2. ✅ Expected: Service interaction works
3. Navigate back to main home
4. ✅ Expected: Back button works

---

## 🔟 Cross-Screen Navigation Tests

### Bottom Navigation
**Test All 5 Tabs:**
1. Click "Home" tab
2. ✅ Expected: Shows Main Home page
3. Click "Explore" tab
4. ✅ Expected: Shows Explore page
5. Click "Bookings" tab
6. ✅ Expected: Shows My Bookings page
7. Click "Messages" tab
8. ✅ Expected: Shows Messages page
9. Click "Profile" tab
10. ✅ Expected: Shows Profile page

**Active State:**
- [ ] Active tab highlighted correctly
- [ ] Active tab icon shows filled version
- [ ] Smooth transition between tabs

---

## 1️⃣1️⃣ External Link Tests

### Google Search Links
**Test Query Handling:**
1. Test with no input: Default query used
2. Test with input: User query used
3. Test special characters: "yoga & meditation retreat"
4. ✅ Expected: Characters properly encoded
5. Test long query: "luxury wellness spa retreat himalayan mountains"
6. ✅ Expected: Full query handled

**Test Tab Behavior:**
1. Click Google Search button
2. ✅ Expected: Opens in NEW tab
3. Check original tab
4. ✅ Expected: App state preserved
5. Return to app tab
6. ✅ Expected: Everything still works

### YouTube Links
**Test Query Handling:**
1. Test default query: "travel destinations india"
2. Test custom query: "adventure sports destinations"
3. ✅ Expected: YouTube search results show

**Test Tab Behavior:**
1. Click YouTube button
2. ✅ Expected: Opens in NEW tab
3. Return to app
4. ✅ Expected: State preserved

---

## 1️⃣2️⃣ Mobile Responsiveness Tests

### Screen Sizes to Test
- [ ] iPhone SE (375x667)
- [ ] iPhone 12/13 (390x844)
- [ ] iPhone 12/13 Pro Max (428x926)
- [ ] Standard Design (375x812)

### Elements to Verify
- [ ] All buttons accessible
- [ ] Text readable (no overflow)
- [ ] Cards properly sized
- [ ] Gradients display correctly
- [ ] Icons not distorted
- [ ] Touch targets minimum 44x44px

### Orientation
- [ ] Portrait mode works perfectly
- [ ] Landscape mode (if applicable)

---

## 1️⃣3️⃣ Performance Tests

### Page Load Times
- [ ] Main Home: < 1 second
- [ ] Category Hub: < 1 second
- [ ] Explore: < 1 second
- [ ] Profile: < 1 second

### Animation Performance
- [ ] Smooth 60fps animations
- [ ] No jank on scroll
- [ ] Transitions smooth
- [ ] Card animations fluid

### External Link Response
- [ ] Google opens quickly
- [ ] YouTube opens quickly
- [ ] No app freeze during link open

---

## 1️⃣4️⃣ Edge Case Tests

### Empty States
1. Clear search bar completely
2. ✅ Expected: Default queries used
3. Navigate with no bookings
4. ✅ Expected: Empty state shows

### Rapid Clicking
1. Rapidly click Google Search button 5 times
2. ✅ Expected: Opens 5 tabs (or browser blocks)
3. ✅ Expected: App doesn't crash

### Long Content
1. Type very long search query (200+ characters)
2. ✅ Expected: Query handled gracefully
3. Check destination cards with long names
4. ✅ Expected: Text doesn't overflow

### Network Issues
1. Test with slow network
2. ✅ Expected: App still navigable
3. External links may load slowly
4. ✅ Expected: No app errors

---

## ✅ Final Verification Checklist

### Content Compliance
- [ ] ZERO specific destination names in entire app
- [ ] ALL placeholders use agreed terminology
- [ ] ALL tour/package names use generic labels
- [ ] ALL notices explain admin-managed content

### Feature Completeness
- [ ] Google Search buttons: 20+ locations
- [ ] YouTube Browse buttons: 20+ locations
- [ ] Admin notices: 3+ locations
- [ ] All 12 categories functional

### Design Preservation
- [ ] All gradients intact
- [ ] All rounded corners (24px) intact
- [ ] Typography unchanged
- [ ] Colors consistent
- [ ] Spacing/layout preserved

### Navigation Integrity
- [ ] All category hubs accessible
- [ ] Back buttons work everywhere
- [ ] Bottom nav functional
- [ ] Deep linking preserved

### Technical Quality
- [ ] No TypeScript errors
- [ ] No console warnings
- [ ] No broken imports
- [ ] Clean build output

---

## 🎯 Testing Summary Template

```
Date: ___________
Tester: ___________
Device: ___________
Browser: ___________

Results:
[ ] Main Home - PASS / FAIL
[ ] Explore - PASS / FAIL
[ ] Category Hubs (12) - PASS / FAIL
[ ] My Bookings - PASS / FAIL
[ ] Messages - PASS / FAIL
[ ] Profile - PASS / FAIL
[ ] Senior Hub - PASS / FAIL
[ ] Combo Planner - PASS / FAIL
[ ] Travel Essentials - PASS / FAIL
[ ] Navigation - PASS / FAIL
[ ] External Links - PASS / FAIL
[ ] Mobile Responsive - PASS / FAIL

Overall Status: PASS / FAIL

Notes:
_________________________________
_________________________________
```

---

**Testing Complete!** 🎉

If all tests pass, the rectified app is ready for production deployment.
