# Lucide React Icons - Quick Reference

## ✅ Icons Used in GroupMemberDetailsManager

### Available & Correct
```typescript
import {
  X,              // Close/Cancel
  Plus,           // Add
  User,           // User profile
  Calendar,       // Dates/scheduling
  Heart,          // Interests/favorites
  Utensils,       // Dietary/food
  Accessibility,  // Mobility/accessibility (✅ CORRECT)
  AlertCircle,    // Medical/warnings
  Edit2,          // Edit action
  Trash2,         // Delete action
  ChevronDown,    // Expand
  ChevronUp       // Collapse
} from 'lucide-react';
```

## ❌ Common Mistakes

### Icons NOT in Lucide React
- ❌ `Wheelchair` - Use `Accessibility` instead
- ❌ `MedicalCross` - Use `AlertCircle` or `Activity` instead
- ❌ `FoodTray` - Use `Utensils` instead

## 🔍 How to Find Available Icons

1. Visit: https://lucide.dev/icons
2. Search for the concept (e.g., "access", "medical", "food")
3. Click to see exact import name
4. Copy exact name (case-sensitive!)

## 📚 Accessibility & Health Icons

### Accessibility
- `Accessibility` ♿ - Universal accessibility symbol
- `Users` 👥 - Multiple people
- `UserCheck` ✓ - Verified user
- `UserX` ✗ - User with issue

### Medical & Health
- `AlertCircle` ⚠️ - Warnings/alerts
- `Activity` 📊 - Health activity
- `Heart` ❤️ - Heart/care
- `Pill` 💊 - Medication
- `Stethoscope` 🩺 - Medical (if available)

### Food & Dietary
- `Utensils` 🍴 - Dining/food
- `Coffee` ☕ - Beverages
- `Apple` 🍎 - Healthy food (if available)

### Actions
- `Edit2` ✏️ - Edit
- `Trash2` 🗑️ - Delete
- `Plus` ➕ - Add
- `X` ✖️ - Close
- `Check` ✔️ - Confirm

### Navigation
- `ChevronDown` ▼ - Expand
- `ChevronUp` ▲ - Collapse
- `ChevronLeft` ◀ - Back
- `ChevronRight` ▶ - Forward
- `ArrowLeft` ← - Navigate back
- `ArrowRight` → - Navigate forward

## 💡 Tips

1. **Case Sensitive:** Icons are PascalCase (e.g., `ChevronDown` not `chevronDown`)
2. **Version Matters:** Some icons added in newer versions
3. **Search First:** Always search on lucide.dev before assuming icon exists
4. **Fallback:** Have a generic fallback icon (e.g., `Circle`, `Square`)

## 🔧 Debugging Import Errors

If you see: `does not provide an export named 'IconName'`

1. Check spelling (case-sensitive)
2. Verify icon exists at https://lucide.dev
3. Check your lucide-react version
4. Try similar icon as fallback

## 📦 Version Info

Current lucide-react version in project: (check package.json)

```bash
# Check version
npm list lucide-react

# Update if needed
npm install lucide-react@latest
```

---

**Last Updated:** January 30, 2026  
**Reference:** https://lucide.dev/icons
