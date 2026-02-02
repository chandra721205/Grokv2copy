import { DestinationCardTemplate, DestinationCardTemplateProps } from './DestinationCardTemplate';
import { ComponentAnnotation, AnnotationData } from './ComponentAnnotation';

// ========================================
// ANNOTATED DESTINATION CARD
// Destination Card with 4-Color Annotations
// ========================================

interface AnnotatedDestinationCardProps extends DestinationCardTemplateProps {
  /** Show annotations panel */
  showAnnotations?: boolean;
}

export function AnnotatedDestinationCard({
  showAnnotations = true,
  ...props
}: AnnotatedDestinationCardProps) {
  
  const annotations: AnnotationData = {
    // PURPOSE ANNOTATION (Blue)
    purpose: {
      why: 'This destination card displays tourism packages in a visually appealing format that helps users quickly evaluate options and make informed decisions about their travel plans.',
      userBenefit: 'Users can view destination details, pricing, amenities, and special offers in one organized card. The heart icon allows saving favorites for later comparison.',
      businessValue: 'Increases conversion rates by presenting destinations in an attractive, scannable format. Interest tracking provides valuable data on user preferences for personalized marketing.'
    },

    // ADMIN GUIDE (Purple)
    admin: {
      howToUpdate: `1. Click on any gray-highlighted field to edit
2. Update Destination Name (Level 4 - high priority)
3. Set Price Range in ₹ format (e.g., ₹25,000 - ₹40,000)
4. Add 2-4 relevant tags for categorization
5. Write compelling 120-character description
6. List available accommodation options
7. Add special offers or highlights
8. Save changes to update across all category pages`,
      contentGuidelines: `Destination Name: 3-6 words, capitalize each word
Price Range: Use actual market rates, include tax disclaimer
Tags: Use pre-approved category tags only
Description: Focus on unique selling points, avoid jargon
Stay Options: List from budget to premium
Special Request: Highlight time-sensitive offers or unique amenities
Max 3 cards per batch update for consistency`,
      updateFrequency: `Destination Name: Rarely (only for rebranding)
Price Range: Monthly or when promotions change
Tags: Quarterly review for relevance
Description: Update seasonally or for special events
Stay Options: When new partners added/removed
Special Request: Weekly for flash deals, monthly for regular updates`
    },

    // TECHNICAL NOTE (Green)
    technical: {
      dataMapping: `Database Schema:
{
  id: string (UUID),
  name: destinations.name,
  priceRange: {
    min: packages.price_min,
    max: packages.price_max,
    currency: 'INR'
  },
  tags: destinations.tags (array),
  description: destinations.description (varchar 120),
  stayOptions: accommodation.options (array),
  specialRequest: offers.special_text (text),
  category: destinations.category_id (FK),
  icon: categories.icon_name (string),
  gradients: {
    from: categories.gradient_from,
    to: categories.gradient_to
  }
}

Indexes: id (PK), category_id, price_min, tags (GIN)`,
      apiIntegration: `API Endpoints:
GET /api/destinations/{id} - Fetch single destination
GET /api/destinations?category={cat}&tags={tags} - Filter destinations
POST /api/admin/destinations - Create new destination
PATCH /api/admin/destinations/{id} - Update destination fields
DELETE /api/admin/destinations/{id} - Soft delete destination

Request Headers: 
Authorization: Bearer {admin_token}
Content-Type: application/json

Response: JSON with destination object + metadata
Rate Limit: 100 req/min for public, 500 req/min for admin
Cache: Redis 5min TTL for GET requests`,
      stateManagement: `React State Management:
- Component: useState for Interest Tracker heart toggle
- Parent: useContext for Admin Mode indicators
- Global: localStorage for saved interests
  Key: 'grokyatra_interests'
  Format: [{ id, name, category, timestamp }]
  
Redux Actions (if integrated):
- FETCH_DESTINATION_START
- FETCH_DESTINATION_SUCCESS
- FETCH_DESTINATION_FAIL
- UPDATE_INTEREST_TRACKER
- TOGGLE_ADMIN_MODE

Optimistic Updates: Heart icon fills immediately, syncs to storage
Error Handling: Fallback to cached data on network fail
Revalidation: On focus, every 5 minutes when tab active`
    },

    // USER FLOW (Yellow)
    flow: {
      previousStep: `User arrived from one of:
1. Category Landing Page (Beach, Heritage, Wellness, etc.)
2. Search Results filtered by budget/location
3. Personalized Recommendations based on interests
4. "Similar Destinations" carousel from another card
5. Saved Interests list from profile
6. External link from Google/YouTube browse`,
      currentAction: `User is:
1. Reading destination name and scanning price range
2. Evaluating tags to match their travel preferences
3. Reading description for unique selling points
4. Reviewing available accommodation options
5. Checking for special offers or highlights
6. Deciding to click heart icon to save for later
7. Deciding whether to click "Explore Destination" button

Mental Model: "Does this fit my budget, timeline, and interests?"
Decision Point: Save for comparison OR explore immediately OR keep browsing`,
      nextStep: `If user clicks "Explore Destination":
→ Navigate to Destination Detail Page (Full screen)
→ Shows: Image gallery, detailed itinerary, full pricing breakdown
→ Options: Book now, Save to trip, Share, Contact agent

If user clicks heart icon:
→ Add to Saved Interests (localStorage)
→ Show confirmation toast: "Added to interests ❤️"
→ Update Interest Counter badge in header
→ Continue browsing other destinations

If user scrolls past:
→ Load more destination cards (infinite scroll)
→ Track view event for analytics
→ Potentially trigger Personalized Deals Alert`
    }
  };

  return (
    <div className="space-y-4">
      {/* Component Annotations */}
      {showAnnotations && (
        <ComponentAnnotation
          data={annotations}
          defaultExpanded={false}
        />
      )}

      {/* Destination Card */}
      <DestinationCardTemplate {...props} />
    </div>
  );
}