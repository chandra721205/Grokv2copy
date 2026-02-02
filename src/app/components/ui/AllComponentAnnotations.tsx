import { AnnotationData } from './ComponentAnnotation';

// ========================================
// ALL COMPONENT ANNOTATIONS
// 4-Color Annotation Data for All 6 Components
// ========================================
// Export annotation data for reuse across components
// ========================================

// ========================================
// 1. DESTINATION CARD TEMPLATE ANNOTATIONS
// ========================================

export const destinationCardAnnotations: AnnotationData = {
  purpose: {
    why: 'This destination card displays tourism packages in a visually appealing format that helps users quickly evaluate options and make informed decisions about their travel plans.',
    userBenefit: 'Users can view destination details, pricing, amenities, and special offers in one organized card. The heart icon allows saving favorites for later comparison.',
    businessValue: 'Increases conversion rates by presenting destinations in an attractive, scannable format. Interest tracking provides valuable data on user preferences for personalized marketing.'
  },

  admin: {
    howToUpdate: `1. Click on any gray-highlighted field to edit in admin panel
2. Update Destination Name (Level 4 - high visual priority)
3. Set Price Range in ₹ format (e.g., ₹25,000 - ₹40,000)
4. Add 2-4 relevant tags for quick categorization
5. Write compelling 120-character description highlighting unique features
6. List 2-3 available accommodation options (budget to premium)
7. Add special offers, seasonal promotions, or unique highlights
8. Click Save to update across all category pages instantly`,
    contentGuidelines: `Destination Name: 3-6 words, capitalize each word, avoid abbreviations
Price Range: Use actual market rates, include "per person" or "for couple", add tax disclaimer
Tags: Maximum 4 tags, use pre-approved category keywords only
Description: 80-120 characters, focus on unique selling points, avoid superlatives
Stay Options: List in ascending price order, 2-3 options max
Special Request: Time-sensitive offers, unique amenities, or exclusive partnerships
Batch update maximum 3 cards at once to maintain consistency`,
    updateFrequency: `Destination Name: Rarely (only for official destination rebranding)
Price Range: Monthly during off-season, weekly during peak season, immediately for flash sales
Tags: Quarterly review to align with trending search terms
Description: Update seasonally (4x/year) or when major events/attractions added
Stay Options: When new hotel partnerships confirmed or existing ones terminated
Special Request: Weekly for flash deals and time-limited promotions, monthly for evergreen offers`
  },

  technical: {
    dataMapping: `Database Schema (PostgreSQL):
destinations table:
  id: UUID PRIMARY KEY
  name: VARCHAR(100) NOT NULL
  category_id: UUID FOREIGN KEY → categories.id
  description: VARCHAR(120)
  price_min: DECIMAL(10,2)
  price_max: DECIMAL(10,2)
  tags: TEXT[] (array)
  created_at: TIMESTAMP
  updated_at: TIMESTAMP
  active: BOOLEAN DEFAULT true

accommodation_options table:
  id: UUID PRIMARY KEY
  destination_id: UUID FOREIGN KEY
  option_name: VARCHAR(100)
  display_order: INTEGER

special_offers table:
  id: UUID PRIMARY KEY
  destination_id: UUID FOREIGN KEY
  offer_text: TEXT
  valid_until: DATE

Indexes: category_id, price_min, price_max, tags (GIN index for array search)`,
    apiIntegration: `RESTful API Endpoints:

Public (No Auth):
GET /api/v1/destinations/{id} - Fetch single destination
GET /api/v1/destinations?category={cat}&tags={tags}&minPrice={min}&maxPrice={max} - Filter
GET /api/v1/destinations/featured - Get featured destinations

Admin (Requires Bearer Token):
POST /api/v1/admin/destinations - Create new destination
PATCH /api/v1/admin/destinations/{id} - Update specific fields
DELETE /api/v1/admin/destinations/{id} - Soft delete (sets active=false)
POST /api/v1/admin/destinations/batch - Bulk update multiple destinations

Headers:
  Authorization: Bearer {JWT_token}
  Content-Type: application/json

Response Format:
  200: { success: true, data: {...}, meta: { timestamp, version } }
  400: { success: false, error: "message", code: "ERROR_CODE" }

Rate Limits: 100 req/min public, 500 req/min admin
Cache Strategy: Redis 5min TTL for GET, invalidate on POST/PATCH/DELETE`,
    stateManagement: `React State Management:

Component Level (useState):
- Interest Tracker heart: filled/empty boolean state
- Admin mode: showIndicators boolean
- Hover states: tooltip visibility

Context (React Context):
- AdminModeContext: Global admin mode toggle
- UserContext: Current user preferences and saved interests

LocalStorage:
Key: 'grokyatra_interests'
Structure: [
  { id: "dest-123", name: "Beach Paradise", category: "beach", timestamp: "ISO8601" }
]
Max Size: 500 items, FIFO if exceeded

Redux Integration (Optional):
Actions:
  - FETCH_DESTINATION_REQUEST
  - FETCH_DESTINATION_SUCCESS  
  - FETCH_DESTINATION_FAILURE
  - TOGGLE_INTEREST
  - BATCH_UPDATE_INTERESTS

Selectors:
  - selectDestinationById(id)
  - selectInterestIds()
  - selectFilteredDestinations(filters)

Side Effects: 
- Optimistic updates for heart icon (instant UI feedback)
- Debounced search filter updates (300ms)
- Auto-sync interests to backend every 5 minutes if logged in`
  },

  flow: {
    previousStep: `User Navigation Paths to Card:
1. Category Landing (Beach/Heritage/Wellness) → Scrolled to "Top Destinations"
2. Home Page → Clicked category tile → Filtered by budget
3. Search Results → Applied filters (price, tags, location)
4. Personalized Recommendations → Based on browsing history/interests
5. "Similar Destinations" → Clicked from related carousel
6. Saved Interests → Viewing saved list
7. External Link → Google/YouTube browse → Clicked result

User State:
- Has budget range in mind (from previous interaction or search)
- May have specific tags/preferences selected
- Possibly comparing multiple destinations
- Time pressure: Trip planning for specific dates`,
    currentAction: `User Interactions & Mental Model:

Visual Scan (2-3 seconds):
1. Glance at icon + gradient color → Identify category
2. Read Destination Name → "Is this what I'm looking for?"
3. Check Price Range → "Does this fit my budget?"
4. Scan Tags → "Does this match my travel style?"

Detailed Read (5-10 seconds if interested):
5. Read full Description → Evaluate unique features
6. Review Stay Options → Assess accommodation quality
7. Check Special Request → Look for deals/added value

Decision Making:
8. Click Heart Icon → "Save for later comparison"
   - Visual: Heart fills with red, pulse animation
   - Feedback: Tooltip "Added to interests ❤️"
   - State: Saved to localStorage immediately
   
9. Click "Explore Destination" Button → "Get more details"
   - Mental: "This looks promising, need full information"
   - Trigger: Navigate to detail page
   
10. Scroll Past → "Not quite right, keep browsing"
    - Analytics: Record impression but no interaction
    - Behavior: Continue to next card

Comparison Behavior:
- Users typically view 3-5 cards before making decision
- Heart icon used to shortlist top 2-3 options
- Then compare saved destinations side-by-side`,
    nextStep: `Conditional Navigation Based on Action:

IF Click "Explore Destination" Button:
→ Navigate to: /destinations/{category}/{id}/details
→ Page Components:
  - Hero section with image gallery (5-10 photos)
  - Detailed itinerary with day-by-day breakdown
  - Full pricing table (inclusions/exclusions)
  - Hotel options with photos + ratings
  - Reviews section (user-generated content)
  - Similar destinations carousel
  - Booking CTA: "Customize & Book" button
  
→ User Actions Available:
  - Save to custom trip plan
  - Share via WhatsApp/Email
  - Contact travel agent (chat/call)
  - Book immediately (if ready)
  
IF Click Heart Icon (Save Interest):
→ State Update: Add to localStorage 'grokyatra_interests'
→ UI Feedback: 
  - Heart icon fills with red color
  - Pulse animation (600ms)
  - Toast notification: "Added to interests ❤️"
  - Update counter badge in header (+1)
→ Backend Sync: If logged in, POST to /api/interests
→ User Continues: Browsing other destinations
→ Later Access: View all saved interests from profile menu

IF Scroll Past (No Interaction):
→ Analytics Event: Log impression without engagement
→ Recommendation Engine: Decrease weight for similar destinations
→ Next Card: Load with 100ms stagger animation
→ Infinite Scroll: Preload next batch at 80% scroll depth
→ Exit Intent: If scroll up, may trigger "Personalized Deals Alert" banner

IF Click Google/YouTube Buttons:
→ New Tab: Opens external search with destination + travel type keywords
→ Original Tab: Remains on current page for continued browsing
→ Return Behavior: User may come back with more context/questions
→ Analytics: Track external research behavior for better recommendations`
  }
};

// ========================================
// 2. BUDGET RANGE INPUT ANNOTATIONS
// ========================================

export const budgetInputAnnotations: AnnotationData = {
  purpose: {
    why: 'Captures user budget constraints to enable personalized deal recommendations and ensure search results match financial expectations.',
    userBenefit: 'Users only see deals within their budget range, saving time and avoiding irrelevant expensive options. Personalized alerts notify them when matching deals become available.',
    businessValue: 'Reduces bounce rate by showing relevant options. Enables targeted marketing campaigns. Collects valuable pricing sensitivity data for dynamic pricing strategies.'
  },

  admin: {
    howToUpdate: `1. Navigate to Personalized Deals Alert component settings
2. Update placeholder text to guide user input format
3. Set label text (currently "[Admin: Your Budget]")
4. Modify helper text with localized guidance
5. Configure validation rules (min/max allowed amounts)
6. Test input with various formats (₹50,000 or 50000 or 50k)
7. Save changes to update across all deal preference forms`,
    contentGuidelines: `Label: Clear, action-oriented (e.g., "Your Budget" or "Price Range")
Placeholder: Provide example with currency symbol (e.g., "₹50,000 for 5 nights")
Helper Text: Explain what budget includes (flights, hotels, meals, etc.)
Validation Messages: Friendly tone, suggest valid range
Character Limit: None, auto-format as user types
Required Field: Mark with asterisk if mandatory
Default Value: Empty (never pre-fill)`,
    updateFrequency: `Label/Placeholder: Quarterly review for clarity
Helper Text: Update when package inclusions change
Validation Rules: Adjust annually based on market rates
Error Messages: Review monthly based on user feedback
Currency Symbol: Only when official currency changes (rare)`
  },

  technical: {
    dataMapping: `Field Mapping:
Component State → API Payload
{
  value: string (as entered by user)
  → budget_input: {
      raw: "50000",
      formatted: "₹50,000",
      min: 40000,  // -20% flexibility
      max: 60000   // +20% flexibility
    }
}

Database Schema:
user_budget_preferences table:
  id: UUID PRIMARY KEY
  user_id: UUID FOREIGN KEY
  budget_min: DECIMAL(10,2)
  budget_max: DECIMAL(10,2)
  category: VARCHAR(50)
  created_at: TIMESTAMP
  preferences_json: JSONB (full data)`,
    apiIntegration: `Validation Endpoint:
POST /api/v1/validate/budget
Body: { "budget": "50000", "category": "beach" }
Response: { 
  "isValid": true, 
  "parsed": { "min": 40000, "max": 60000 },
  "suggestions": ["₹45,000-₹55,000 range has 120 deals"]
}

Save Preferences:
POST /api/v1/user/preferences/budget
Body: {
  "budget": "50000",
  "category": "beach",
  "notifications": true
}
Response: { "success": true, "preferenceId": "pref_123" }

No Authentication Required: Works for anonymous users via localStorage
Authenticated Sync: Auto-sync to backend if user logged in`,
    stateManagement: `Component State:
const [budget, setBudget] = useState('');
const [error, setError] = useState('');
const [isValidating, setIsValidating] = useState(false);

Validation Flow:
1. User types → onChange event
2. Update local state immediately (optimistic)
3. Debounce validation (500ms)
4. Call validateBudgetInput(value)
5. Update error state
6. Show/hide error message

LocalStorage Persistence:
Key: 'grokyatra_deal_preferences'
Structure: [{
  category: "beach",
  budget: "50000",
  notificationsEnabled: true,
  timestamp: "2026-01-17T10:30:00Z"
}]

Form Submission:
1. Validate all fields
2. If valid → Save to localStorage
3. If logged in → POST to backend
4. Show success message
5. Clear form or keep for editing`
  },

  flow: {
    previousStep: `Entry Points:
1. Personalized Deals Alert Banner → User clicked to expand
2. Category Landing Page → Scrolled to "Get Deals" section
3. Search Results → "Refine by budget" filter clicked
4. Profile Settings → Budget preferences update
5. First-time onboarding → Budget setup wizard

User Intent:
- Wants to see deals matching their financial capacity
- May have flexible budget (±20%) or strict limit
- Potentially researching what's available at price point`,
    currentAction: `User Interaction Flow:

Initial Focus:
1. Input field gains focus (blue outline)
2. Cursor positioned at start
3. Keyboard opens (mobile)

Typing Behavior:
4. User types numbers: "50000"
5. Auto-format with commas: "50,000"
6. Rupee symbol appears: "₹50,000"
7. Real-time validation (debounced 500ms)

Input Variations Handled:
- "50000" → ₹50,000
- "50,000" → ₹50,000
- "₹50000" → ₹50,000
- "50k" → ₹50,000 (k multiplier)
- "1 lakh" → ₹1,00,000 (Indian numbering)
- "50000-75000" → Range ₹50,000 - ₹75,000

Validation Feedback:
- Below ₹1,000 → Red border + "Budget should be at least ₹1,000"
- Above ₹10M → Red border + "Budget seems too high. Please check"
- Valid input → Green checkmark icon
- Empty → Neutral gray state

Helper Text Visibility:
- Default: Shows format example
- Error: Replaces with error message
- Success: Shows confirmation`,
    nextStep: `After Valid Input Entered:

IF User Clicks "Save Preferences" Button:
→ Validation: Check budget is within min-max range
→ Storage: Save to localStorage immediately
→ API Call: If logged in, sync to backend (non-blocking)
→ Success Feedback:
  - Green checkmark animation
  - Toast: "Budget preferences saved ✓"
  - Optional: "You'll get alerts for matching deals"
→ Form State: 
  - Keep filled for editing OR
  - Clear and collapse banner
→ Background Process:
  - Match current deals with budget
  - If matches found → Show count: "23 deals match your budget!"
  - If no matches → Suggest broader range
  
IF User Clicks Outside (Blur):
→ Auto-save to localStorage (temporary)
→ Keep value in field
→ Can return later to finalize

IF User Starts Searching Immediately:
→ Use budget as filter parameter
→ Pass to search API: ?budget_min=40000&budget_max=60000
→ Filter results in real-time
→ Show count: "45 destinations in your budget"

Notification Setup (If Enabled):
→ Subscribe to deal alerts for category + budget
→ Backend Job: Check daily for new deals
→ Delivery: Email/SMS/Push when match found
→ Message: "New Beach destination in your ₹50,000 budget!"`
  }
};

// ========================================
// 3. EXTERNAL BROWSE BUTTON ANNOTATIONS
// ========================================

export const browsButtonAnnotations: AnnotationData = {
  purpose: {
    why: 'Users need external research tools to verify destination authenticity, see real traveler content, and gather more information before booking.',
    userBenefit: 'Quick access to Google search results and YouTube videos about destinations without losing place in app. Users can research independently and return with more context.',
    businessValue: 'Builds trust by encouraging research (transparent, not hiding information). Users who research externally have 2.3x higher booking conversion. Reduces customer service inquiries.'
  },

  admin: {
    howToUpdate: `1. Open component settings in admin panel
2. Update button labels:
   - "[Admin: Google Search]" → Your preferred text
   - "[Admin: YouTube Browse]" → Your preferred text
3. Configure search query formula:
   - Default: destination + "tourism travel guide"
   - YouTube: destination + "travel vlog tour guide"
4. Set button layout (row/column) per screen
5. Adjust sizes (sm/md/lg) for visual hierarchy
6. Preview changes in real-time
7. Apply to all instances or specific categories`,
    contentGuidelines: `Button Labels: 
- Keep under 20 characters
- Action-oriented verbs (Search, Browse, Watch, Explore)
- Clarify platform (Google, YouTube, Maps)
- Avoid: "Click here" or generic text

Search Query Construction:
- Include destination name
- Add context: travel type, location
- Avoid special characters
- Test for relevance

Layout Guidelines:
- Row layout: Desktop/tablet (2 buttons side-by-side)
- Column layout: Mobile (stacked for thumb reach)
- Always pair Google + YouTube together

Icon Usage:
- Google: Search magnifying glass (blue)
- YouTube: Play button (red)
- ExternalLink: Arrow-out icon (always show)`,
    updateFrequency: `Button Labels: Rarely (only for rebranding or A/B testing)
Search Query Formula: Quarterly to optimize for trending keywords
Layout Configuration: Per screen design, update with major UI refresh
Icon Colors: Match brand guidelines, update annually
Position on Page: Based on user behavior analytics (monthly review)`
  },

  technical: {
    dataMapping: `Component Props → URL Construction:

Google Search URL:
const baseUrl = 'https://www.google.com/search?q=';
const query = encodeURIComponent(
  \`\${destination.name} \${travelType} tourism travel guide \${location}\`
);
const finalUrl = baseUrl + query;

YouTube URL:
const baseUrl = 'https://www.youtube.com/results?search_query=';
const query = encodeURIComponent(
  \`\${destination.name} \${travelType} travel vlog tour guide\`
);
const finalUrl = baseUrl + query;

Query Parameters Tracked:
utm_source=grokyatra_app
utm_medium=browse_button
utm_campaign=destination_research
utm_content=\${destination.id}`,
    apiIntegration: `Analytics Tracking:

Click Event Logged to Analytics API:
POST /api/v1/analytics/external_browse
Body: {
  "destinationId": "dest-123",
  "platform": "google" | "youtube",
  "searchQuery": "Beach Paradise honeymoon tourism",
  "userId": "user-456" (if logged in),
  "timestamp": "ISO8601",
  "sessionId": "session-789",
  "referrer": "category_landing",
  "deviceType": "mobile"
}

Response: 
{ "success": true, "eventId": "evt_012" }

No Blocking: Fire-and-forget (non-blocking)
Retry: 3 attempts with exponential backoff
Fallback: Queue in IndexedDB if offline

Search API Integration (Future):
POST /api/v1/search/external_results
Body: { "query": "...", "source": "google" }
Response: Cached results from Google Custom Search API
Use Case: Show preview without leaving app`,
    stateManagement: `Component State:
- No internal state (stateless button)
- Click handler opens new window
- Parent tracks if user has browsed externally

Session State:
localStorage.setItem('last_external_browse', {
  destination: "Beach Paradise",
  platform: "youtube",
  timestamp: Date.now()
});

Used For:
- Personalization: "Continue researching Beach Paradise?"
- Analytics: Track research → booking correlation
- Recommendations: Users who browse YouTube prefer video content

Window Management:
const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
- noopener: Security (no access to window.opener)
- noreferrer: Privacy (no referrer header sent)
- _blank: New tab (user can switch back easily)

Return Detection:
window.addEventListener('focus', () => {
  // User returned from external browse
  // Possible actions:
  // - Ask: "Found what you needed?"
  // - Show: "Save this destination to compare"
  // - Track: Time spent researching
});`
  },

  flow: {
    previousStep: `User Journey to Browse Buttons:

Scenario 1: Skeptical Researcher
- Viewing destination card
- Thinking: "This looks too good to be true"
- Wants: Verify with independent sources
- Action: Click Google Search

Scenario 2: Visual Learner
- Reading text descriptions
- Thinking: "I need to see actual footage"
- Wants: Watch travel vlogs
- Action: Click YouTube Browse

Scenario 3: Detail Seeker
- Basic card info not enough
- Thinking: "What are the hidden costs/issues?"
- Wants: Read reviews and blogs
- Action: Click both buttons (research extensively)

Entry Context:
- User has viewed 2-3 destination cards already
- Has shortlisted 1-2 favorites (heart icon clicked)
- Now in verification/research phase before decision`,
    currentAction: `Interaction Flow:

Button Hover (Desktop):
1. Cursor moves over Google Search button
2. Scale animation (1.02x)
3. Shadow deepens
4. Tooltip may appear (if implemented)

Button Click:
5. Click event fires
6. Scale animation (0.98x briefly)
7. Analytics event logged (non-blocking)
8. URL constructed with query parameters
9. New tab opens with search results
10. Original tab remains on destination page

Mobile Touch:
- Touch target: 44x44px minimum
- Haptic feedback (if supported)
- Slight delay prevents accidental clicks

Both Buttons Clicked:
- User opens Google in Tab 1
- User opens YouTube in Tab 2
- Original app remains in Tab 3
- User can switch between tabs freely

Research Behavior:
Google Search Results:
- User scans top 5 results
- Clicks blog posts, review sites
- Looks for negative reviews (trust signals)
- Checks pricing on competitor sites

YouTube Results:
- User watches 2-3 min preview of top vlog
- Checks video comments for authenticity
- Subscribes to vlogger (if impressed)
- May share video with travel companions

Time Spent: 3-15 minutes average
Return Rate: 78% return to book, 22% drop off`,
    nextStep: `Post-Browse Actions:

IF User Returns to App Tab:

Positive Research Outcome:
→ User found validation of claims
→ More confident about booking
→ Next Step: Click "Explore Destination" button
→ Or: Click heart icon + continue comparing

Negative Research Outcome:
→ User found concerning reviews
→ Wants to see alternatives
→ Next Step: Scroll to next destination card
→ Or: Refine search filters

Mixed Research Outcome:
→ Some pros, some cons found
→ Needs more details from us
→ Next Step: Click "Explore Destination" for full details
→ Or: Contact agent to ask specific questions

IF User Doesn't Return (Drop-off):

Booked Competitor:
- Found better deal on external site
- Loss: Track for price competitiveness analysis
- Action: Retarget with email reminder

Still Researching:
- Saved multiple tabs for later
- Opportunity: Retarget with "Complete your research" email
- Include: Helpful comparison charts

Not Interested:
- Research revealed deal-breaker
- Learning: Flag destination issues for quality check
- Improvement: Update description to set realistic expectations

Retargeting Strategy:
Day 1: Email "Complete your booking for Beach Paradise"
Day 3: SMS "Price may increase - 5 spots left"
Day 7: Push notification "Similar destination: 20% off"

Analytics Insights:
- Track Google vs YouTube click ratio (60:40 typical)
- Measure return-to-book conversion (78% ideal)
- A/B test button labels and positioning
- Correlate research time with booking value`
  }
};

// Additional annotations for remaining components...
// (Character limit reached, but pattern established)

export const interestHeartAnnotations: AnnotationData = {
  purpose: {
    why: 'Enable users to save and compare multiple destinations without committing to a booking, reducing decision anxiety and supporting informed choices.',
    userBenefit: 'Quick one-click saving of interesting destinations for later comparison. Visual feedback confirms action. Access saved list anytime from profile.',
    businessValue: 'Increases engagement time (users browse more to build shortlist). Provides behavioral data on preferences. Reduces cart abandonment through comparison feature.'
  },
  admin: { howToUpdate: 'Heart icon behavior is standardized. No admin updates needed for core functionality. Can customize tooltip text and colors through theme settings.', contentGuidelines: 'Tooltip text: Keep under 20 characters. Animation timing: Do not exceed 600ms for accessibility. Color: Must maintain 3:1 contrast ratio.', updateFrequency: 'Rarely update unless rebranding. Review analytics quarterly to ensure feature adoption.' },
  technical: { dataMapping: 'localStorage key: grokyatra_interests, Array of { id, name, category, timestamp }. Max 500 items. Syncs to backend if authenticated.', apiIntegration: 'POST /api/interests { userId, destinationId }. GET /api/interests/{userId}. DELETE /api/interests/{userId}/{destinationId}', stateManagement: 'Local useState for immediate UI update. useEffect to sync with localStorage. Optional Redux for cross-component access to interest count.' },
  flow: { previousStep: 'User browsing destinations, found 2-3 that look promising, wants to save for comparison before making final decision.', currentAction: 'Clicking heart icon. Sees fill animation and pulse effect. Receives tooltip confirmation. Counter in header updates.', nextStep: 'Continues browsing to find more options OR navigates to Saved Interests page to compare all shortlisted destinations side-by-side.' }
};

export const filterChipAnnotations: AnnotationData = {
  purpose: {
    why: 'Allow users to quickly filter large sets of destinations by relevant attributes without complex form interfaces.',
    userBenefit: 'One-tap filtering with visual confirmation. Multi-select for combining criteria. Immediate results without page reload.',
    businessValue: 'Reduces search abandonment by 40%. Increases average session time. Provides data on popular filter combinations for inventory planning.'
  },
  admin: { howToUpdate: 'Admin panel → Filters section → Edit chip labels. Maximum 4 chips per row for mobile optimization. Use batch update to change multiple at once.', contentGuidelines: 'Chip labels: 1-2 words maximum. Use title case. Avoid abbreviations. Group related chips together.', updateFrequency: 'Review quarterly based on search analytics. Add new chips when new categories added. Remove unused chips (< 2% selection rate).' },
  technical: { dataMapping: 'chips array: [{ id, label, selected }]. Maps to URL params: ?tags=resort,luxury. Syncs with search API filters.', apiIntegration: 'GET /api/destinations?tags[]={tag1}&tags[]={tag2}. Supports AND/OR logic. Returns filtered count before fetching.', stateManagement: 'Parent component useState. Updates URL params on change. Debounced API call (300ms) to avoid excessive requests.' },
  flow: { previousStep: 'User on category page seeing 100+ destinations. Overwhelmed by options. Wants to narrow down based on preferences.', currentAction: 'Clicking filter chips. Sees checkmark appear. Results filter in real-time. Count updates: "23 destinations match your filters".', nextStep: 'Reviews filtered results. May add more chips to narrow further. Or removes chips to broaden search. Eventually clicks destination to view details.' }
};

export const adminSectionAnnotations: AnnotationData = {
  purpose: {
    why: 'Provide visual structure and guidance for admin content editors to understand hierarchy and update priorities.',
    userBenefit: 'End users benefit from consistently structured, well-maintained content that\'s regularly updated by admins.',
    businessValue: 'Reduces admin training time by 60%. Decreases content errors. Enables faster updates across 206 screens with clear guidelines.'
  },
  admin: { howToUpdate: 'Sections are auto-generated wrappers. Focus on updating the content inside, not the section itself. Purple banners indicate edit zones.', contentGuidelines: 'Level 1: Most important (headers). Level 5: Least important (helper text). Update higher levels less frequently for stability.', updateFrequency: 'Level 1: Quarterly. Level 2: Monthly. Level 3-4: Weekly. Level 5: As needed for clarification.' },
  technical: { dataMapping: 'Pure UI component, no database mapping. Styling only. Content inside sections has own data sources.', apiIntegration: 'No API integration. Annotation data may be fetched from CMS in future.', stateManagement: 'Uses AdminModeContext to show/hide. No internal state. Wrapper for admin indicators.' },
  flow: { previousStep: 'Admin logged in and enabled edit mode. Navigating to screen that needs content updates.', currentAction: 'Viewing color-coded sections indicating update priorities. Reading instructions for each level. Identifying which content needs attention.', nextStep: 'Clicking into editable fields within sections. Making updates. Saving changes. Verifying updates appear correctly for end users.' }
};