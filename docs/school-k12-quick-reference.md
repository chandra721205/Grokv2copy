# 🎒 School Groups K-12 Flow - Quick Reference

## ✅ COMPLETE: 11-Step Journey (Idea → Booking-Ready Proposal)

---

## 📱 How to Access

```
Main Home
  ↓ Click "Educational"
Educational Tourism Hub
  ↓ Click "School Groups (K-12)" card (🎒)
School Groups K-12 Flow
  ↓ 11 steps to completion
```

---

## 📋 The 11 Steps (At a Glance)

| Step | Name | Purpose | Key Element |
|------|------|---------|-------------|
| 1 | Welcome | Introduction | "Start Planning" button |
| 2 | Choose Theme | Learning focus | 4 themes (History, Science, Nature, Culture) |
| 3 | School Planner | School details | 7 form fields |
| 4 | Discounts & Partners | Funding options | 3 supports + 4 partner types |
| 5 | Trip Type | Duration | 3 options (1-day, 2-3 day, flexible) |
| 6 | Logistics | Transport/meals/stay | 3 sections |
| 7 | Guides & Safety | Support & safety | Safety norms (required) |
| 8 | Itinerary | Day-by-day plan | 3-day placeholder schedule |
| 9 | Cost Breakdown | Pricing | 6 cost items (admin quotes) |
| 10 | Proposal Send | Share plan | Email + PDF options |
| 11 | Trip Hub | Management center | 6 hub sections |

---

## 🎯 Key Features

### 4 Learning Themes (Step 2):
- 🏛️ **History & Heritage** (Amber)
- 🔬 **Science & Innovation** (Blue)
- 🌿 **Environment & Nature** (Green)
- 🎭 **Culture & Community** (Purple)

### 3 Support Options (Step 4):
- Government/Museum Concessions
- CSR/NGO Sponsorship
- Internal School Subsidy

### 4 Partner Types (Step 4):
- 🏛️ Museums/science centres
- 🎓 Universities/research institutes
- 🤝 NGO learning centres
- 🎡 Theme parks

### 3 Trip Types (Step 5):
- ☀️ Single-day field trip
- 🏕️ 2-3 day overnight camp
- 📚 Project/exam-linked visit

### Learning Support (Step 7):
- Subject-expert guide
- Local guide
- Teacher kit
- Student booklet
- Post-trip projects

### Safety Requirements (Step 7):
- Parent consent templates
- Emergency contacts
- First aid staff
- Travel insurance
- **Safety norms ✓ (Required)**

---

## 🎨 Visual Design

### Progress Bar:
- Top of every screen
- Shows "Step X of 11" + percentage
- Animated white bar on purple background

### Colors:
```
Header: Blue-600 → Purple-600 → Pink-600
Buttons: Blue-600 → Purple-600 (rounded-full)
Cards: White, rounded-3xl, shadow-lg
Themes: Amber, Blue, Green, Purple gradients
```

### Navigation:
- Back button: Top-left (white circle)
- Forward button: Bottom (full-width gradient)
- Step 1 back → Returns to Educational Tourism
- Steps 2-11 back → Previous step

---

## 📊 Form Fields by Step

### Step 3 (School Planner):
1. School Name (text)
2. Board (dropdown: CBSE, ICSE, State, IB, Cambridge)
3. Grade Band (dropdown: 1-5, 6-8, 9-12)
4. City (text)
5. State (text)
6. Number of Students (number)
7. Teachers/Staff (number)

**Required:** School name + student count

### Step 6 (Logistics):
1. Transport (dropdown: Bus, Coach, Train, Flight)
2. Meals (multi-select: Breakfast, Lunch, Snacks, Dinner)
3. Accommodation (dropdown: No Stay, Hostel, Hotel)

**Required:** Transport selection

### Step 7 (Safety):
- 5 learning support checkboxes
- 4 safety requirement checkboxes
- 1 safety norms checkbox **(REQUIRED)**

---

## 🚫 Admin-Only Content

### All Destinations Show As:
✅ "Admin-Added Destination X"  
✅ "Admin-Published Activity Y"  
✅ "Admin-Added Institution Z"

### All Pricing Shows As:
✅ "Admin Quote"  
✅ "Subject to Admin Approval"

### NO Real Place Names:
❌ No city names in activities  
❌ No museum names  
❌ No real pricing amounts

---

## 💰 Cost Breakdown (Step 9)

| Item | Amount |
|------|--------|
| Transport | Admin Quote |
| Entry Tickets | Admin Quote |
| Expert Guides | Admin Quote |
| Meals | Admin Quote / Not Selected |
| Student Booklets | Admin Quote |
| Teacher Materials | Admin Quote |

**Notice:** "Final Quote Subject to Admin Approval"

---

## 📧 Proposal Actions (Step 10)

### Option 1: Email
- Button: "Share Proposal with School Email"
- Icon: Mail
- Action: Sends proposal + shows success

### Option 2: PDF
- Button: "Download Printable PDF Proposal"
- Icon: Download
- Action: Downloads PDF + toast notification

### Success State:
- Green checkmark icon
- "Proposal Sent Successfully!"
- Button to continue to Trip Hub

---

## 🏢 Trip Hub (Step 11)

### 6 Sections:
1. 📋 **My Bookings** (Blue-cyan)
2. 💬 **Messages** (Purple-pink)
3. 📊 **Trip Dashboard** (Green-emerald)
4. 📚 **Learning Hub** (Orange-amber)
5. 🛡️ **Safety Info** (Red-rose)
6. ⚙️ **Admin Portal Access** (Gray)

**Exit:** "Back to Educational Tourism" button

---

## ✅ Validation Rules

| Step | Validation | Error State |
|------|------------|-------------|
| 2 | Theme selected | Button disabled |
| 3 | School name + student count | Button disabled |
| 5 | Trip type selected | Button disabled |
| 6 | Transport selected | Button disabled |
| 7 | Safety norms checked | Button disabled |

---

## 🔄 Quick Navigation Map

```
Welcome (1)
  ↓
Theme (2) → Select theme
  ↓
School (3) → Fill 7 fields
  ↓
Discounts (4) → Select supports + partners
  ↓
Trip Type (5) → Select duration
  ↓
Logistics (6) → Transport + meals + stay
  ↓
Safety (7) → Check safety norms ✓
  ↓
Itinerary (8) → Review 3-day plan
  ↓
Cost (9) → Review admin quotes
  ↓
Proposal (10) → Send email or PDF
  ↓
Hub (11) → Access 6 sections
  ↓
Back to Educational Tourism
```

---

## 🎯 User Roles & Use Cases

### Role 1: School Coordinator
**Goal:** Plan annual field trip for 50 students  
**Flow:** Complete all 11 steps → Send proposal to principal → Wait for admin quote

### Role 2: Teacher
**Goal:** Organize 1-day science museum visit  
**Flow:** Steps 1-7 focus on safety → Get itinerary → Share with parents

### Role 3: Principal
**Goal:** Review proposal before approval  
**Flow:** Receive PDF → Check costs → Approve or request changes

---

## 📈 Implementation Stats

- **Components:** 11 step components + 1 main flow
- **Lines of Code:** ~1,200
- **Form Fields:** 20+
- **Checkboxes:** 25+
- **Buttons:** 30+
- **Animations:** Smooth transitions on all steps

---

## 🚫 What This DOESN'T Touch

### Untouched Sub-Categories:
- ✅ College & University Groups (normal form)
- ✅ Research Groups (normal form)
- ✅ Individual Researchers (normal form)

### Untouched Categories:
- ✅ Adventure, Devotional, Heritage, Eco, Health, Wellness
- ✅ Corporate, Cruise, Senior, Honeymoon, Sports, Self-Drive
- ✅ All other 11 tourism categories

---

## 🎉 Key Differentiators

### vs Other Educational Sub-Categories:
- **School Groups:** 11-step guided flow
- **College/Research:** Standard form (existing)

### vs Generic Forms:
- **School Flow:** Theme selection, safety focus, proposal send
- **Generic:** Simple request submission

### K-12 Specific:
- Age-appropriate themes
- Safety requirements emphasized
- Parent consent templates
- Teacher materials included
- School board selection

---

## 📱 Mobile Experience

- Single-column layouts
- Large tap targets (48px+)
- Full-width buttons
- Smooth scrolling
- Touch-friendly interactions
- Progress bar always visible

---

## 🔍 Testing Checklist

- [ ] Can access from Educational Tourism hub
- [ ] Progress bar updates at each step
- [ ] Back button works on all steps
- [ ] Forward button disabled until validation passes
- [ ] Theme selection shows "Selected" badge
- [ ] School form validates required fields
- [ ] Multi-selects work (partners, meals)
- [ ] Safety norms must be checked
- [ ] Itinerary shows admin placeholders
- [ ] Cost shows "Admin Quote"
- [ ] Proposal send shows success
- [ ] Hub displays 6 sections
- [ ] Can return to Educational Tourism
- [ ] Other sub-categories still work

---

## 💡 Tips for Users

### Best Practices:
1. **Start early:** 1-3 months advance for permissions
2. **Safety first:** Always check safety norms
3. **Get quotes:** Admin provides accurate pricing
4. **Review itinerary:** Check day-by-day schedule
5. **Share proposal:** Email + PDF for records
6. **Use hub:** Track booking progress

### Common Questions:
**Q:** Can I edit after submitting?  
**A:** Yes, go to Trip Hub → My Bookings → Edit

**Q:** When will I get final pricing?  
**A:** Admin contacts within 3-5 business days

**Q:** Are concessions automatically applied?  
**A:** Admin verifies eligibility and applies

---

**School Groups K-12: Your Complete Trip Planning Solution** 🎒✨

*From initial idea to booking-ready proposal in 11 guided steps.*

---

## 🚀 Ready to Start?

1. Open GrokYatra app
2. Click "Educational"
3. Click "School Groups (K-12)"
4. Follow the 11 steps
5. Send your proposal!

**Time Required:** 5-10 minutes  
**Result:** Professional school trip proposal
