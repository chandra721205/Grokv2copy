# ✅ **FIGMA 6-POINT EXECUTION CHECKLIST**

**Execute this protocol IN FIGMA manually**

**Date:** ___________  
**Time Started:** ___________

---

## ⚠️ **BEFORE YOU START (CRITICAL)**

- [ ] ✅ **BACKUP:** File → Duplicate → Rename: "GrokYatra_BACKUP_2026_01_26"
- [ ] ✅ **BACKUP:** File → Save to Version History → Comment: "PRE-CLEANUP BACKUP"
- [ ] ✅ Close all other Figma files (free up browser memory)
- [ ] ✅ Use **Figma Desktop App** (not browser) for better memory handling
- [ ] ✅ Install plugins: "TinyImage" and "Clean Document"

**⏱️ Time:** 5 minutes  
**Status:** ☐ Not Started  ☐ In Progress  ✅ Complete

---

## 📍 **POINT 1: HIGH-IMPACT IMAGE DOWNSCALING (CRITICAL)**

**Priority:** 🔴 **HIGHEST - Execute First**  
**Expected Impact:** 40-60% memory reduction

### **Step 1.1: Scan for Oversized Images**

**Using Plugin (RECOMMENDED):**
- [ ] Plugins → Browse → Install "TinyImage" or "Image Compressor"
- [ ] Run plugin → "Scan all images"
- [ ] Note images flagged as:
  - [ ] >2MB in size
  - [ ] >1920px in dimensions
  - [ ] Resolution >2x frame size

**Images Found:** _______ (write number)

**⏱️ Time:** 10 minutes  
**Status:** ☐ Not Started  ☐ In Progress  ✅ Complete

---

### **Step 1.2: Calculate Target Sizes**

**For EACH oversized image:**

```
Image #1:
├─ Current size: ______ px × ______ px
├─ Frame size: ______ px × ______ px
├─ Target (2x): ______ px × ______ px (frame × 2)
└─ Action: ☐ Downscale  ☐ Skip (already optimized)

Image #2:
├─ Current size: ______ px × ______ px
├─ Frame size: ______ px × ______ px
├─ Target (2x): ______ px × ______ px
└─ Action: ☐ Downscale  ☐ Skip

Image #3:
├─ Current size: ______ px × ______ px
├─ Frame size: ______ px × ______ px
├─ Target (2x): ______ px × ______ px
└─ Action: ☐ Downscale  ☐ Skip

[Continue for all images...]
```

**⏱️ Time:** 5 minutes  
**Status:** ☐ Not Started  ☐ In Progress  ✅ Complete

---

### **Step 1.3: Downscale Images**

**Method A - Plugin (FASTEST):**
- [ ] Select all frames (Cmd/Ctrl + A)
- [ ] Plugins → "Image Compressor"
- [ ] Settings:
  - [ ] Quality: 80%
  - [ ] Max dimensions: 1920px
  - [ ] Format: JPEG or WebP
- [ ] Click "Compress All"
- [ ] Wait for completion

**Method B - Manual (For specific images):**

**For EACH image:**
- [ ] Select image fill layer
- [ ] Export → Settings:
  - [ ] Format: JPEG (80% quality)
  - [ ] Scale: Custom → Enter target width
  - [ ] Constraint: Width
- [ ] Export to desktop
- [ ] Delete old image fill in Figma
- [ ] Drag new optimized image onto frame
- [ ] Adjust: Cmd/Ctrl + Shift + K (scale to fit)
- [ ] Assets panel → Right-click original → "Remove unused images"

**Images Downscaled:** _______ / _______ (completed / total)

**⏱️ Time:** 20 minutes  
**Status:** ☐ Not Started  ☐ In Progress  ✅ Complete

---

### **Point 1 Summary:**

- **Images before:** _______ images @ avg _____ MB = _____ MB total
- **Images after:** _______ images @ avg _____ KB = _____ MB total
- **Savings:** _____ MB (______ % reduction)

---

## 📍 **POINT 2: COMPONENT & STYLE LIBRARY PURGE**

**Priority:** 🟡 **HIGH**  
**Expected Impact:** 10-20% memory reduction

### **Step 2.1: Audit Unused Components**

- [ ] Open Assets Panel (Shift + I)
- [ ] Click "Components" tab
- [ ] For EACH component:
  - [ ] Right-click → "Select all instances"
  - [ ] If "No instances found" → Mark for deletion ✅

**Components to Delete (list names):**
```
1. _______________________
2. _______________________
3. _______________________
4. _______________________
5. _______________________
[Continue...]
```

**Total unused components found:** _______

**⏱️ Time:** 10 minutes  
**Status:** ☐ Not Started  ☐ In Progress  ✅ Complete

---

### **Step 2.2: Delete Unused Components**

**For EACH component marked above:**
- [ ] Right-click component
- [ ] Select "Delete component"
- [ ] Confirm: "Yes, delete"

**⚠️ DO NOT DELETE:**
- [ ] Verified: No components from Team Libraries deleted
- [ ] Verified: No components with >0 instances deleted

**Components deleted:** _______ / _______ (deleted / found)

**⏱️ Time:** 5 minutes  
**Status:** ☐ Not Started  ☐ In Progress  ✅ Complete

---

### **Step 2.3: Audit Unused Styles**

- [ ] Open Assets Panel (Shift + I)
- [ ] Click "Styles" icon (paint palette)
- [ ] For EACH style:
  - [ ] Right-click → "Select all with style"
  - [ ] If "No layers found" → Mark for deletion ✅

**Styles to Delete (list names):**
```
1. _______________________
2. _______________________
3. _______________________
4. _______________________
5. _______________________
[Continue...]
```

**Total unused styles found:** _______

**⏱️ Time:** 10 minutes  
**Status:** ☐ Not Started  ☐ In Progress  ✅ Complete

---

### **Step 2.4: Delete Unused Styles**

**For EACH style marked above:**
- [ ] Right-click style
- [ ] Select "Delete style"
- [ ] Confirm: "Yes, delete"

**Styles deleted:** _______ / _______ (deleted / found)

**⏱️ Time:** 5 minutes  
**Status:** ☐ Not Started  ☐ In Progress  ✅ Complete

---

### **Point 2 Summary:**

- **Components deleted:** _______
- **Styles deleted:** _______
- **Total reduction:** ______ % (estimated)

---

## 📍 **POINT 3: HIDDEN & GHOST LAYER CLEANUP**

**Priority:** 🟡 **HIGH**  
**Expected Impact:** 5-15% memory reduction

### **Step 3.1: Find Hidden Layers**

**Method A - Plugin (RECOMMENDED):**
- [ ] Plugins → "Clean Document"
- [ ] Select: "Find hidden layers"
- [ ] Review list shown

**Method B - Manual:**
- [ ] Select any layer
- [ ] Press Cmd/Ctrl + F (Find)
- [ ] Type: "hidden:true"
- [ ] Press Enter

**Hidden layers found:** _______

**⏱️ Time:** 5 minutes  
**Status:** ☐ Not Started  ☐ In Progress  ✅ Complete

---

### **Step 3.2: Audit Hidden Layers**

**For EACH hidden layer:**

**Check if it should be kept:**
- [ ] Is it part of a component variant? → KEEP
- [ ] Is it part of a prototype interaction? → KEEP
- [ ] Is it labeled "Archive/Old/Test"? → DELETE
- [ ] Has it been hidden >7 days? → DELETE

**Hidden layers to DELETE (list names):**
```
1. _______________________
2. _______________________
3. _______________________
4. _______________________
5. _______________________
[Continue...]
```

**Hidden layers to delete:** _______

**⏱️ Time:** 10 minutes  
**Status:** ☐ Not Started  ☐ In Progress  ✅ Complete

---

### **Step 3.3: Delete Hidden Layers**

**For EACH layer marked for deletion:**
- [ ] Select layer
- [ ] Press Backspace/Delete
- [ ] Confirm deletion

**Hidden layers deleted:** _______ / _______ (deleted / found)

**⏱️ Time:** 5 minutes  
**Status:** ☐ Not Started  ☐ In Progress  ✅ Complete

---

### **Step 3.4: Find & Delete Ghost Layers**

**Using Plugin:**
- [ ] Plugins → "Clean Document"
- [ ] Select: "Remove empty groups"
- [ ] Select: "Remove empty frames"
- [ ] Click "Clean"

**OR Manual:**
- [ ] Layers panel → Expand all (Option/Alt + Click)
- [ ] Look for groups/frames with no children
- [ ] Select empty layer → Delete

**Ghost layers deleted:** _______

**⏱️ Time:** 5 minutes  
**Status:** ☐ Not Started  ☐ In Progress  ✅ Complete

---

### **Point 3 Summary:**

- **Hidden layers deleted:** _______
- **Ghost layers deleted:** _______
- **Total reduction:** ______ % (estimated)

---

## 📍 **POINT 4: COMPLEX VECTOR SIMPLIFICATION**

**Priority:** 🟡 **MEDIUM**  
**Expected Impact:** 5-10% memory reduction

### **Step 4.1: Identify Complex Vectors**

**Look for:**
- [ ] Boolean operations (Union, Subtract, Intersect icons: ⊕ ⊖ ∩ ⊗)
- [ ] Nested vector groups (>5 levels deep)
- [ ] Vector networks with 100+ anchor points
- [ ] Decorative elements (finalized, not actively edited)

**Complex vectors to simplify (list names):**
```
1. _______________________
2. _______________________
3. _______________________
4. _______________________
5. _______________________
[Continue...]
```

**Complex vectors found:** _______

**⏱️ Time:** 10 minutes  
**Status:** ☐ Not Started  ☐ In Progress  ✅ Complete

---

### **Step 4.2: Flatten Complex Vectors**

**For EACH complex vector:**

**Method 1 - Flatten to Path:**
- [ ] Select complex vector
- [ ] Press Cmd/Ctrl + E (Flatten)
- [ ] Verify appearance unchanged

**Method 2 - Rasterize (for very complex vectors):**
- [ ] Select complex vector
- [ ] Right-click → "Flatten selection"
- [ ] Then: Right-click → "Rasterize selection"
- [ ] Verify appearance unchanged

**Vectors flattened:** _______ / _______ (flattened / found)

**⏱️ Time:** 15 minutes  
**Status:** ☐ Not Started  ☐ In Progress  ✅ Complete

---

### **Step 4.3: Outline Strokes (Bonus)**

**For vectors with thick strokes:**
- [ ] Select vector
- [ ] Right-click → "Outline stroke"
- [ ] Verify appearance unchanged

**Strokes outlined:** _______

**⏱️ Time:** 5 minutes  
**Status:** ☐ Not Started  ☐ In Progress  ✅ Complete

---

### **Point 4 Summary:**

- **Vectors flattened:** _______
- **Strokes outlined:** _______
- **Total reduction:** ______ % (estimated)

---

## 📍 **POINT 5: PAGE ARCHIVING STRATEGY**

**Priority:** 🔴 **CRITICAL**  
**Expected Impact:** 30-50% memory reduction

### **Step 5.1: Identify Archive-Worthy Pages**

**Check current pages and mark for archiving:**

**Pages to ARCHIVE (mark with ✅):**
- [ ] Pages named "Old"
- [ ] Pages named "Archive"
- [ ] Pages named "V1" / "V2" / "V3"
- [ ] Pages named "Final final" / "Final v2"
- [ ] Pages named "Backup"
- [ ] Pages named "Exploration"
- [ ] Pages named "Test"
- [ ] Pages named "Draft"
- [ ] Pages named "Wireframe" (if superseded)
- [ ] Pages not edited in >30 days

**Pages to archive (list names):**
```
1. _______________________
2. _______________________
3. _______________________
4. _______________________
5. _______________________
6. _______________________
7. _______________________
8. _______________________
9. _______________________
10. ______________________
[Continue...]
```

**Total pages to archive:** _______

**⏱️ Time:** 5 minutes  
**Status:** ☐ Not Started  ☐ In Progress  ✅ Complete

---

### **Step 5.2: Create Archive File**

**CRITICAL: Do this BEFORE deleting pages!**

- [ ] File → Duplicate
- [ ] Rename duplicate: "GrokYatra_ARCHIVE_2026_01_26"
- [ ] Open archive file
- [ ] Delete ALL current/active pages from archive
- [ ] Keep ONLY the old/exploration/V1-V2 pages in archive
- [ ] Verify archive file contains all old pages
- [ ] Verify archive file is accessible

**Archive file created:** ☐ No  ✅ Yes

**⏱️ Time:** 10 minutes  
**Status:** ☐ Not Started  ☐ In Progress  ✅ Complete

---

### **Step 5.3: Delete Archived Pages from Main File**

**⚠️ ONLY PROCEED IF ARCHIVE FILE IS VERIFIED!**

**In MAIN file:**
- [ ] Verified archive file exists and is complete
- [ ] For EACH archived page:
  - [ ] Right-click page → Delete
  - [ ] Confirm deletion

**Pages deleted from main file:** _______ / _______ (deleted / total)

**⏱️ Time:** 5 minutes  
**Status:** ☐ Not Started  ☐ In Progress  ✅ Complete

---

### **Step 5.4: Verify Main File**

**Check main file now has ONLY active pages:**

**Pages KEPT in main file (list names):**
```
✅ Home
✅ Explore
✅ Trips
✅ Messages
✅ Profile
✅ Custom Tour / Grok AI Assistant
✅ Multi-Category Planner
✅ Devotional Tourism
✅ Adventure Tourism
✅ Heritage & Cultural
✅ Eco-Tourism
✅ Educational Tourism
✅ Corporate & MICE
✅ Cruise & Family Fun
✅ Senior Wellness
✅ Sports Tourism
✅ Health & Wellness
✅ Honeymoon & Romance
✅ Travel Essentials
✅ Components Library (if local)
✅ Design System / Styles
[Add any others...]
```

**Active pages remaining:** _______

**⏱️ Time:** 5 minutes  
**Status:** ☐ Not Started  ☐ In Progress  ✅ Complete

---

### **Point 5 Summary:**

- **Pages before:** _______
- **Pages archived:** _______
- **Pages remaining:** _______
- **Reduction:** ______ % (pages removed)

---

## 📍 **CHECKPOINT: TEST FILE**

**⚠️ CRITICAL: Test if error is resolved BEFORE Point 6**

- [ ] Close Figma file
- [ ] Wait 10 seconds
- [ ] Reopen file
- [ ] Check if "Project too large" error appears

**Error Status:**
- [ ] ✅ RESOLVED (file opens normally) → **STOP! You're done!**
- [ ] ⏳ STILL PRESENT → Continue to Point 6

**⏱️ Time:** 2 minutes

---

## 📍 **POINT 6: FINAL HISTORY RESET (MANUAL TRIGGER)**

**Priority:** 🟢 **FINAL STEP**  
**Expected Impact:** 10-20% additional memory reduction

**⚠️ ONLY EXECUTE IF ERROR STILL PERSISTS AFTER POINTS 1-5**

### **Step 6.1: Check Current File Size**

- [ ] Note current file size/memory usage
- [ ] File → Show file info (if available)
- [ ] Confirm error still persists

**File size after cleanup:** _____ MB

**⏱️ Time:** 2 minutes  
**Status:** ☐ Not Started  ☐ In Progress  ✅ Complete

---

### **Step 6.2: Duplicate to Fresh File ID**

**Create final optimized file:**

- [ ] File → Duplicate
- [ ] Rename: "GrokYatra_OPTIMIZED_2026_01_26"
- [ ] This creates a NEW file ID
- [ ] Version history is reset (clean slate)

**New file created:** ☐ No  ✅ Yes

**⏱️ Time:** 5 minutes  
**Status:** ☐ Not Started  ☐ In Progress  ✅ Complete

---

### **Step 6.3: Verify New File Works**

- [ ] Open new optimized file
- [ ] Check all pages load properly
- [ ] Verify components render correctly
- [ ] Test prototype links work
- [ ] Confirm NO "Project too large" error

**New file status:**
- [ ] ✅ Works perfectly
- [ ] ⚠️ Has issues (describe): _________________

**⏱️ Time:** 10 minutes  
**Status:** ☐ Not Started  ☐ In Progress  ✅ Complete

---

### **Step 6.4: Transition to New File**

- [ ] Share new file link with team
- [ ] Archive old file (rename: "GrokYatra_OLD_2026_01_26")
- [ ] Work in new file going forward
- [ ] Keep old file as backup for 7 days
- [ ] Delete old file after 7 days (if stable)

**Team notified:** ☐ No  ✅ Yes

**⏱️ Time:** 5 minutes  
**Status:** ☐ Not Started  ☐ In Progress  ✅ Complete

---

### **Point 6 Summary:**

- **File ID changed:** ☐ No  ✅ Yes
- **Version history reset:** ☐ No  ✅ Yes
- **Error resolved:** ☐ No  ✅ Yes

---

## ✅ **FINAL VERIFICATION CHECKLIST**

### **Post-Optimization Checks:**

- [ ] ✅ File opens without "Project too large" error
- [ ] ✅ File loads in <10 seconds
- [ ] ✅ All active pages load properly
- [ ] ✅ All components render correctly
- [ ] ✅ Prototype links work
- [ ] ✅ No visual design changes
- [ ] ✅ Color styles intact
- [ ] ✅ Text styles intact
- [ ] ✅ Team can access file
- [ ] ✅ File size reduced by 50%+

---

## 📊 **OPTIMIZATION SUMMARY**

### **Before Optimization:**

- **File size:** _____ MB
- **Page count:** _____
- **Component count:** _____
- **Style count:** _____
- **Error status:** "Project too large" 🔴

### **After Optimization:**

- **File size:** _____ MB
- **Page count:** _____
- **Component count:** _____
- **Style count:** _____
- **Error status:** ☐ Resolved ✅  ☐ Still present ⏳

### **Total Reduction:**

- **File size reduction:** _____ MB (_____ %)
- **Pages archived:** _____ pages
- **Components deleted:** _____
- **Styles deleted:** _____
- **Images optimized:** _____
- **Hidden layers deleted:** _____
- **Vectors simplified:** _____

### **Time Breakdown:**

- **Point 1 (Images):** _____ min
- **Point 2 (Components):** _____ min
- **Point 3 (Hidden):** _____ min
- **Point 4 (Vectors):** _____ min
- **Point 5 (Pages):** _____ min
- **Point 6 (History):** _____ min
- **Total time:** _____ hours _____ minutes

---

## 🎯 **SUCCESS CRITERIA**

**Optimization is SUCCESSFUL if:**

```
✅ File opens without "Project too large" error
✅ File size reduced by 60-80%
✅ All active pages intact
✅ All components functional
✅ Prototype working
✅ Team can collaborate
✅ No visual regressions
```

**Status:** ☐ SUCCESS ✅  ☐ PARTIAL  ☐ NEEDS MORE WORK

---

## 🚨 **IF ERROR STILL PERSISTS**

### **Emergency Actions:**

- [ ] Contact Figma Support
  - Help → Contact support
  - Subject: "Project too large after optimization"
  - Attach: This completed checklist

- [ ] Consider File Splitting
  - Create: GrokYatra_DesignSystem (components only)
  - Create: GrokYatra_Screens_Main (main screens)
  - Create: GrokYatra_Screens_Tourism (tourism categories)
  - Link via Team Library

---

## 📝 **NOTES & OBSERVATIONS**

**Issues encountered:**
```
_______________________________________
_______________________________________
_______________________________________
```

**Lessons learned:**
```
_______________________________________
_______________________________________
_______________________________________
```

**Next steps:**
```
_______________________________________
_______________________________________
_______________________________________
```

---

**OPTIMIZATION COMPLETE!** ✅

**Date Completed:** ___________  
**Time Completed:** ___________  
**Executed By:** ___________

---

**END OF EXECUTION CHECKLIST** ✅
