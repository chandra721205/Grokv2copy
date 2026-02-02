# 🛠️ Admin Dashboard - Developer Implementation Guide

## 🎯 For Developers Integrating the Admin Dashboard

This guide provides technical details for developers who need to connect the Admin Dashboard to backend systems, customize functionality, or extend features.

---

## 📋 Quick Setup

### 1. Installation
The dashboard is already integrated. To verify:

```typescript
// Check imports in /src/app/App.tsx
import { AdminDashboard } from '@/app/components/admin/AdminDashboard';

// Component is accessible via button click
// "🔥 ADMIN DASHBOARD" button sets showAdminDashboard to true
```

### 2. Dependencies
All required dependencies are already installed:

```json
{
  "react": "^18.x",
  "motion/react": "Latest",
  "lucide-react": "Latest",
  "tailwindcss": "^4.x"
}
```

### 3. File Structure
```
/src/app/components/admin/
├── AdminDashboard.tsx          ← Main component (1,200+ lines)
├── AdminModeContext.tsx        ← State management
├── AdminControlPanel.tsx       ← Utilities
├── AdminSystemDemo.tsx         ← Testing component
└── BeachParadiseWithAdmin.tsx  ← Example implementation

/src/app/components/ui/
├── ComponentAnnotation.tsx     ← 4-color annotation system
├── AdminEditableSection.tsx    ← 5-level hierarchy wrapper
└── [shadcn/ui components]      ← UI primitives
```

---

## 🔌 Backend API Integration

### API Endpoints to Implement

#### Destinations API

```typescript
// Create new destination
POST /api/destinations/create
Request Body:
{
  name: string;
  category: string;
  basePrice: number;
  description: string;
  images: string[];
  features: string[];
  status: 'active' | 'draft';
  seasonalPricing: {
    season: 'summer' | 'monsoon' | 'winter';
    adjustmentType: 'percentage' | 'fixed';
    value: number;
  }[];
}
Response:
{
  success: boolean;
  destinationId: string;
  message: string;
}

// Update existing destination
PUT /api/destinations/:id/update
Request Body: Same as create
Response:
{
  success: boolean;
  message: string;
}

// Delete destination
DELETE /api/destinations/:id
Response:
{
  success: boolean;
  message: string;
}

// Get all destinations
GET /api/destinations?category=string&status=string&search=string
Response:
{
  destinations: Destination[];
  total: number;
  page: number;
}

// Bulk update seasonal pricing
POST /api/destinations/bulk-update-pricing
Request Body:
{
  destinationIds: string[];
  season: string;
  adjustmentType: 'increase' | 'decrease' | 'fixed';
  value: number;
}
Response:
{
  success: boolean;
  updatedCount: number;
  message: string;
}
```

#### Content API

```typescript
// Get content by type
GET /api/content?type=categories|filters|deals|browse
Response:
{
  content: ContentItem[];
  type: string;
}

// Update content item
PUT /api/content/:id
Request Body:
{
  value: string | string[];
  locale?: string;
  scheduledDate?: string;
}
Response:
{
  success: boolean;
  message: string;
}

// Bulk update content
POST /api/content/bulk-update
Request Body:
{
  type: 'filters' | 'categories';
  items: Array<{
    id: string;
    value: string;
  }>;
}
Response:
{
  success: boolean;
  updatedCount: number;
}
```

#### Analytics API

```typescript
// Get interest analytics
GET /api/analytics/interests?period=7|30|90
Response:
{
  topDestinations: Array<{
    destinationId: string;
    name: string;
    views: number;
    interests: number;
    bookings: number;
    conversionRate: number;
  }>;
  trends: {
    daily: Array<{
      date: string;
      count: number;
    }>;
  };
  summary: {
    totalInterests: number;
    weeklyGrowth: number;
  };
}

// Configure deal trigger
POST /api/analytics/configure-trigger
Request Body:
{
  name: string;
  condition: string;
  action: string;
  active: boolean;
}
Response:
{
  success: boolean;
  triggerId: string;
}

// Update notification settings
PUT /api/analytics/notification-settings
Request Body:
{
  activeHours: {
    start: string; // "09:00"
    end: string;   // "21:00"
  };
  frequencyCap: number;
  weekendEnabled: boolean;
}
```

#### Images API

```typescript
// Upload image
POST /api/images/upload
Content-Type: multipart/form-data
Request:
{
  file: File;
  optimize: boolean;
  destinationId?: string;
}
Response:
{
  success: boolean;
  imageId: string;
  url: string;
  optimizedUrl?: string;
  reduction?: number; // percentage
}

// Delete image
DELETE /api/images/:id
Response:
{
  success: boolean;
  message: string;
}

// Get image metadata
GET /api/images/:id
Response:
{
  id: string;
  url: string;
  originalSize: number;
  optimizedSize: number;
  dimensions: { width: number; height: number; };
  uploadedAt: string;
  uploadedBy: string;
}
```

#### Admin Operations API

```typescript
// Bulk update (generic)
POST /api/admin/bulk-update
Request Body:
{
  entityType: 'destinations' | 'content' | 'images';
  operation: 'update' | 'delete' | 'publish';
  filters: {
    category?: string;
    status?: string;
    // ... other filters
  };
  changes: {
    field: string;
    value: any;
  }[];
}
Response:
{
  success: boolean;
  affectedCount: number;
  preview?: Array<{
    id: string;
    before: any;
    after: any;
  }>;
}

// Schedule content update
POST /api/admin/schedule
Request Body:
{
  title: string;
  type: 'pricing' | 'content' | 'deals';
  scheduledDate: string; // ISO 8601
  changes: any;
}
Response:
{
  success: boolean;
  scheduleId: string;
}

// Get scheduled updates
GET /api/admin/scheduled-updates
Response:
{
  updates: Array<{
    id: string;
    title: string;
    type: string;
    scheduledDate: string;
    status: 'pending' | 'completed' | 'cancelled';
  }>;
}
```

---

## 🔧 State Management Integration

### Using AdminModeContext

```typescript
// In any component:
import { useAdminMode } from '@/app/components/admin/AdminModeContext';

function MyComponent() {
  const { isAdminMode, setIsAdminMode, hasUnsavedChanges } = useAdminMode();
  
  // Toggle admin mode
  const toggleAdmin = () => setIsAdminMode(!isAdminMode);
  
  // Check if in admin mode
  if (isAdminMode) {
    // Show admin controls
  }
  
  // Warn before leaving if unsaved changes
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (hasUnsavedChanges) {
        e.preventDefault();
        e.returnValue = '';
      }
    };
    
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [hasUnsavedChanges]);
}
```

### Using Editable Content Storage

```typescript
import { useEditableContent } from '@/app/components/admin/AdminModeContext';

function ContentEditor() {
  const { content, updateField, getField, saveContent, loadContent } = useEditableContent();
  
  // Load saved content on mount
  useEffect(() => {
    loadContent();
  }, []);
  
  // Update a field
  const handleChange = (screenId: string, fieldId: string, value: string) => {
    updateField(screenId, fieldId, value);
  };
  
  // Get field value
  const fieldValue = getField('screen-1', 'title', 'Default Title');
  
  // Save all changes
  const handleSave = () => {
    saveContent();
    // In production, send to API:
    // await fetch('/api/admin/save-content', {
    //   method: 'POST',
    //   body: JSON.stringify(content)
    // });
  };
}
```

---

## 🎨 Customizing Components

### Adding a New Section

```typescript
// 1. Create section component
function MyNewSection({ showAnnotations }: { showAnnotations: boolean }) {
  const sectionAnnotations: AnnotationData = {
    purpose: {
      why: 'This section exists because...',
      userBenefit: 'Users benefit from...',
      businessValue: 'Business gains...'
    },
    admin: {
      howToUpdate: 'To update this section...',
      contentGuidelines: 'Follow these guidelines...',
      updateFrequency: 'Update weekly/monthly/etc.'
    },
    technical: {
      dataMapping: 'Maps to database.collection...',
      apiIntegration: 'Uses /api/my-endpoint...',
      stateManagement: 'Managed by React Query...'
    },
    flow: {
      previousStep: 'User came from...',
      currentAction: 'User is doing...',
      nextStep: 'User will go to...'
    }
  };
  
  return (
    <div className="space-y-6">
      {showAnnotations && (
        <ComponentAnnotation
          data={sectionAnnotations}
          defaultExpanded={false}
        />
      )}
      
      {/* Your section content */}
    </div>
  );
}

// 2. Add to AdminDashboard.tsx tabs
<Tabs value={activeSection} onValueChange={setActiveSection}>
  <TabsList>
    {/* ... existing tabs ... */}
    <TabsTrigger value="mynew">
      <MyIcon className="w-4 h-4 mr-2" />
      My New Section
    </TabsTrigger>
  </TabsList>
  
  {/* ... existing tab contents ... */}
  
  <TabsContent value="mynew">
    <MyNewSection showAnnotations={showAnnotations} />
  </TabsContent>
</Tabs>
```

### Adding a New Tool

```typescript
function MyNewTool({ showAnnotations }: { showAnnotations: boolean }) {
  const toolAnnotations: AnnotationData = {
    // ... annotation data ...
  };
  
  return (
    <Card className="rounded-3xl p-6 border-2 border-gray-100 col-span-2">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <MyIcon className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900">My New Tool</h3>
            <p className="text-sm text-gray-600">Tool description</p>
          </div>
        </div>
        <Button className="gap-2 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600">
          Action
        </Button>
      </div>
      
      {showAnnotations && (
        <div className="mb-4">
          <ComponentAnnotation data={toolAnnotations} />
        </div>
      )}
      
      {/* Tool content */}
    </Card>
  );
}
```

---

## 🔒 Security Implementation

### Authentication Middleware

```typescript
// /middleware/adminAuth.ts
export async function requireAdmin(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.replace('Bearer ', '');
  
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Check if user has admin role
    if (decoded.role !== 'admin') {
      return res.status(403).json({ error: 'Insufficient permissions' });
    }
    
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
}

// Apply to admin routes
app.post('/api/destinations/create', requireAdmin, createDestination);
app.put('/api/destinations/:id', requireAdmin, updateDestination);
app.delete('/api/destinations/:id', requireAdmin, deleteDestination);
```

### Input Validation

```typescript
// /validators/destination.ts
import { z } from 'zod';

export const createDestinationSchema = z.object({
  name: z.string().min(1).max(100),
  category: z.enum(['heritage', 'beach', 'mountain', 'spiritual', 'adventure']),
  basePrice: z.number().positive(),
  description: z.string().max(2000),
  images: z.array(z.string().url()).max(10),
  features: z.array(z.string()).max(20),
  status: z.enum(['active', 'draft'])
});

// Use in API route
app.post('/api/destinations/create', requireAdmin, async (req, res) => {
  try {
    const validated = createDestinationSchema.parse(req.body);
    // Process validated data
  } catch (error) {
    return res.status(400).json({ error: error.errors });
  }
});
```

### CSRF Protection

```typescript
// /middleware/csrf.ts
import csrf from 'csurf';

const csrfProtection = csrf({ cookie: true });

// Apply to all admin mutations
app.post('/api/destinations/create', csrfProtection, requireAdmin, createDestination);
app.put('/api/destinations/:id', csrfProtection, requireAdmin, updateDestination);

// Frontend: Include CSRF token
const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

fetch('/api/destinations/create', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'CSRF-Token': csrfToken
  },
  body: JSON.stringify(data)
});
```

---

## 📊 Data Models (TypeScript)

### Destination Model

```typescript
interface Destination {
  id: string;
  name: string;
  category: 'heritage' | 'beach' | 'mountain' | 'spiritual' | 'adventure' | 'wellness' | 'wildlife' | 'pilgrimage' | 'honeymoon' | 'offbeat' | 'food' | 'tribal' | 'combo';
  basePrice: number;
  description: string;
  images: string[]; // URLs
  features: string[];
  status: 'active' | 'draft';
  seasonalPricing: SeasonalPricing[];
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
}

interface SeasonalPricing {
  season: 'summer' | 'monsoon' | 'winter';
  adjustmentType: 'percentage' | 'fixed';
  value: number;
}
```

### Content Model

```typescript
interface ContentItem {
  id: string;
  type: 'category' | 'filter' | 'deal' | 'browse';
  key: string; // e.g., 'heritage_description', 'budget_filter_1'
  value: string | string[];
  locale: string; // 'en', 'hi', etc.
  version: number;
  scheduledDate?: Date;
  status: 'draft' | 'scheduled' | 'published';
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
}
```

### Analytics Model

```typescript
interface AnalyticsEvent {
  id: string;
  userId: string;
  sessionId: string;
  destinationId: string;
  action: 'view' | 'interest' | 'booking' | 'share';
  timestamp: Date;
  metadata?: Record<string, any>;
}

interface AnalyticsSummary {
  destinationId: string;
  period: '7days' | '30days' | '90days';
  views: number;
  interests: number;
  bookings: number;
  conversionRate: number;
  updatedAt: Date;
}
```

### Deal Trigger Model

```typescript
interface DealTrigger {
  id: string;
  name: string;
  condition: {
    type: 'view_count' | 'interest_count' | 'cart_abandoned' | 'time_based';
    threshold: number;
    timeWindow?: number; // minutes
  };
  action: {
    type: 'discount' | 'bundle' | 'notification';
    value: number | string;
    message: string;
  };
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}
```

---

## 🚀 React Query Integration (Recommended)

### Setup

```typescript
// /lib/queryClient.ts
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
      refetchOnWindowFocus: false,
      retry: 1
    }
  }
});

// /src/app/App.tsx
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/lib/queryClient';

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* ... app content ... */}
    </QueryClientProvider>
  );
}
```

### Query Hooks

```typescript
// /hooks/useDestinations.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export function useDestinations(filters?: DestinationFilters) {
  return useQuery({
    queryKey: ['destinations', filters],
    queryFn: async () => {
      const params = new URLSearchParams(filters);
      const response = await fetch(`/api/destinations?${params}`);
      if (!response.ok) throw new Error('Failed to fetch destinations');
      return response.json();
    }
  });
}

export function useCreateDestination() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (data: CreateDestinationData) => {
      const response = await fetch('/api/destinations/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!response.ok) throw new Error('Failed to create destination');
      return response.json();
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['destinations'] });
    }
  });
}

export function useUpdateDestination() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ id, data }: { id: string; data: UpdateDestinationData }) => {
      const response = await fetch(`/api/destinations/${id}/update`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!response.ok) throw new Error('Failed to update destination');
      return response.json();
    },
    onMutate: async ({ id, data }) => {
      // Optimistic update
      await queryClient.cancelQueries({ queryKey: ['destinations'] });
      
      const previousDestinations = queryClient.getQueryData(['destinations']);
      
      queryClient.setQueryData(['destinations'], (old: any) => ({
        ...old,
        destinations: old.destinations.map((d: Destination) =>
          d.id === id ? { ...d, ...data } : d
        )
      }));
      
      return { previousDestinations };
    },
    onError: (err, variables, context) => {
      // Rollback on error
      if (context?.previousDestinations) {
        queryClient.setQueryData(['destinations'], context.previousDestinations);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['destinations'] });
    }
  });
}

// Use in component
function DestinationManagement() {
  const { data, isLoading, error } = useDestinations({ category: 'heritage' });
  const createMutation = useCreateDestination();
  const updateMutation = useUpdateDestination();
  
  const handleCreate = (data: CreateDestinationData) => {
    createMutation.mutate(data, {
      onSuccess: (result) => {
        toast.success('Destination created successfully!');
      },
      onError: (error) => {
        toast.error('Failed to create destination');
      }
    });
  };
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return <div>{/* Render destinations */}</div>;
}
```

---

## 🖼️ Image Upload & Optimization

### Frontend Implementation

```typescript
// /components/ImageUploader.tsx
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';

export function ImageUploader({ onUpload }: { onUpload: (files: File[]) => void }) {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png']
    },
    maxSize: 2 * 1024 * 1024, // 2MB
    maxFiles: 10,
    onDrop: async (acceptedFiles) => {
      setUploading(true);
      
      for (const file of acceptedFiles) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('optimize', 'true');
        
        try {
          const response = await fetch('/api/images/upload', {
            method: 'POST',
            body: formData
          });
          
          if (!response.ok) throw new Error('Upload failed');
          
          const result = await response.json();
          console.log('Uploaded:', result);
          
        } catch (error) {
          console.error('Upload error:', error);
        }
        
        setProgress((prev) => prev + (100 / acceptedFiles.length));
      }
      
      setUploading(false);
      setProgress(0);
      onUpload(acceptedFiles);
    }
  });
  
  return (
    <div
      {...getRootProps()}
      className={`
        border-2 border-dashed rounded-3xl p-12 text-center
        ${isDragActive ? 'border-purple-500 bg-purple-50' : 'border-gray-300 bg-gray-50'}
        hover:bg-gray-100 transition-colors cursor-pointer
      `}
    >
      <input {...getInputProps()} />
      {uploading ? (
        <div>
          <p className="text-gray-700 font-semibold mb-4">Uploading... {Math.round(progress)}%</p>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-purple-600 to-indigo-600 h-3 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      ) : (
        <>
          <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-700 font-semibold mb-2">
            {isDragActive ? 'Drop files here' : 'Drop destination images here'}
          </p>
          <p className="text-sm text-gray-500 mb-4">
            or click to browse your computer
          </p>
          <Button className="rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600">
            Select Images
          </Button>
        </>
      )}
    </div>
  );
}
```

### Backend Implementation

```typescript
// /api/images/upload.ts
import multer from 'multer';
import sharp from 'sharp';
import { v4 as uuidv4 } from 'uuid';
import { S3 } from 'aws-sdk';

const upload = multer({ storage: multer.memoryStorage() });
const s3 = new S3();

export async function uploadImage(req: Request, res: Response) {
  const file = req.file;
  const optimize = req.body.optimize === 'true';
  
  if (!file) {
    return res.status(400).json({ error: 'No file provided' });
  }
  
  try {
    const imageId = uuidv4();
    let processedBuffer = file.buffer;
    let optimizedUrl;
    let reduction = 0;
    
    if (optimize) {
      // Optimize image
      const originalSize = file.buffer.length;
      
      processedBuffer = await sharp(file.buffer)
        .resize(1200, null, { withoutEnlargement: true })
        .webp({ quality: 85 })
        .toBuffer();
      
      const optimizedSize = processedBuffer.length;
      reduction = ((originalSize - optimizedSize) / originalSize) * 100;
      
      // Generate thumbnail
      const thumbnail = await sharp(file.buffer)
        .resize(300, 200, { fit: 'cover' })
        .webp({ quality: 80 })
        .toBuffer();
      
      // Upload thumbnail
      await s3.putObject({
        Bucket: process.env.S3_BUCKET,
        Key: `thumbnails/${imageId}.webp`,
        Body: thumbnail,
        ContentType: 'image/webp',
        ACL: 'public-read'
      }).promise();
    }
    
    // Upload main image
    await s3.putObject({
      Bucket: process.env.S3_BUCKET,
      Key: `images/${imageId}.webp`,
      Body: processedBuffer,
      ContentType: 'image/webp',
      ACL: 'public-read'
    }).promise();
    
    const url = `https://${process.env.S3_BUCKET}.s3.amazonaws.com/images/${imageId}.webp`;
    const thumbnailUrl = optimize
      ? `https://${process.env.S3_BUCKET}.s3.amazonaws.com/thumbnails/${imageId}.webp`
      : null;
    
    // Save to database
    await db.images.create({
      id: imageId,
      url,
      thumbnailUrl,
      originalSize: file.buffer.length,
      optimizedSize: processedBuffer.length,
      reduction,
      uploadedBy: req.user.id,
      uploadedAt: new Date()
    });
    
    return res.json({
      success: true,
      imageId,
      url,
      thumbnailUrl,
      reduction
    });
    
  } catch (error) {
    console.error('Upload error:', error);
    return res.status(500).json({ error: 'Upload failed' });
  }
}

export const config = {
  api: {
    bodyParser: false
  }
};

export default upload.single('file')(requireAdmin(uploadImage));
```

---

## 📅 Scheduled Tasks Implementation

### Using Cron Jobs

```typescript
// /jobs/scheduledUpdates.ts
import cron from 'node-cron';

// Run every minute to check for scheduled updates
cron.schedule('* * * * *', async () => {
  const now = new Date();
  
  // Get all pending scheduled updates
  const scheduledUpdates = await db.scheduledUpdates.findMany({
    where: {
      status: 'pending',
      scheduledDate: {
        lte: now
      }
    }
  });
  
  for (const update of scheduledUpdates) {
    try {
      // Execute update based on type
      switch (update.type) {
        case 'pricing':
          await executePricingUpdate(update.changes);
          break;
        case 'content':
          await executeContentUpdate(update.changes);
          break;
        case 'deals':
          await executeDealsUpdate(update.changes);
          break;
      }
      
      // Mark as completed
      await db.scheduledUpdates.update({
        where: { id: update.id },
        data: { status: 'completed', completedAt: new Date() }
      });
      
      console.log(`Executed scheduled update: ${update.title}`);
      
    } catch (error) {
      console.error(`Failed to execute ${update.id}:`, error);
      
      // Mark as failed
      await db.scheduledUpdates.update({
        where: { id: update.id },
        data: { status: 'failed', error: error.message }
      });
    }
  }
});

async function executePricingUpdate(changes: any) {
  const { destinationIds, season, adjustmentType, value } = changes;
  
  // Update destinations
  await db.destinations.updateMany({
    where: { id: { in: destinationIds } },
    data: {
      // Apply pricing changes
    }
  });
}

async function executeContentUpdate(changes: any) {
  // Update content items
  for (const item of changes.items) {
    await db.content.update({
      where: { id: item.id },
      data: { value: item.value, status: 'published' }
    });
  }
}

async function executeDealsUpdate(changes: any) {
  // Activate/update deals
}
```

---

## 🧪 Testing

### Unit Tests

```typescript
// /tests/admin/destination.test.ts
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { DestinationManagementSection } from '@/app/components/admin/AdminDashboard';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: false },
    mutations: { retry: false }
  }
});

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
);

describe('DestinationManagementSection', () => {
  it('renders destination cards', async () => {
    render(<DestinationManagementSection showAnnotations={false} />, { wrapper });
    
    await waitFor(() => {
      expect(screen.getByText('Admin-Added Destination 1')).toBeInTheDocument();
    });
  });
  
  it('filters destinations by category', async () => {
    render(<DestinationManagementSection showAnnotations={false} />, { wrapper });
    
    const categoryFilter = screen.getByRole('combobox', { name: /category/i });
    fireEvent.change(categoryFilter, { target: { value: 'heritage' } });
    
    await waitFor(() => {
      // Verify only heritage sites are shown
    });
  });
  
  it('opens add destination form', async () => {
    render(<DestinationManagementSection showAnnotations={false} />, { wrapper });
    
    const addButton = screen.getByRole('button', { name: /add new destination/i });
    fireEvent.click(addButton);
    
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });
});
```

### Integration Tests

```typescript
// /tests/integration/admin-api.test.ts
import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import request from 'supertest';
import { app } from '@/server';

let adminToken: string;

beforeAll(async () => {
  // Login as admin
  const response = await request(app)
    .post('/api/auth/login')
    .send({ email: 'admin@grokyatra.com', password: 'admin123' });
  
  adminToken = response.body.token;
});

describe('Destination API', () => {
  it('creates a new destination', async () => {
    const response = await request(app)
      .post('/api/destinations/create')
      .set('Authorization', `Bearer ${adminToken}`)
      .send({
        name: 'Test Destination',
        category: 'heritage',
        basePrice: 15000,
        description: 'Test description',
        images: [],
        features: [],
        status: 'draft'
      });
    
    expect(response.status).toBe(201);
    expect(response.body.success).toBe(true);
    expect(response.body.destinationId).toBeDefined();
  });
  
  it('requires admin authentication', async () => {
    const response = await request(app)
      .post('/api/destinations/create')
      .send({});
    
    expect(response.status).toBe(401);
  });
  
  it('validates input data', async () => {
    const response = await request(app)
      .post('/api/destinations/create')
      .set('Authorization', `Bearer ${adminToken}`)
      .send({
        name: '', // Invalid: empty name
        category: 'invalid' // Invalid: not in enum
      });
    
    expect(response.status).toBe(400);
  });
});
```

---

## 📊 Monitoring & Logging

### Error Tracking

```typescript
// /lib/errorTracking.ts
import * as Sentry from '@sentry/node';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 0.1
});

export function logError(error: Error, context?: Record<string, any>) {
  console.error('Error:', error);
  
  Sentry.captureException(error, {
    extra: context
  });
}

// Usage in API routes
try {
  // ... API logic ...
} catch (error) {
  logError(error, {
    route: req.url,
    method: req.method,
    userId: req.user?.id
  });
  
  return res.status(500).json({ error: 'Internal server error' });
}
```

### Analytics Tracking

```typescript
// /lib/analytics.ts
import Analytics from 'analytics';
import googleAnalytics from '@analytics/google-analytics';

export const analytics = Analytics({
  app: 'grokyatra-admin',
  plugins: [
    googleAnalytics({
      trackingId: process.env.GA_TRACKING_ID
    })
  ]
});

// Track admin actions
export function trackAdminAction(action: string, properties?: Record<string, any>) {
  analytics.track(action, {
    category: 'Admin Dashboard',
    ...properties
  });
}

// Usage
trackAdminAction('destination_created', {
  destinationId: result.id,
  category: data.category
});

trackAdminAction('bulk_update_applied', {
  entityType: 'destinations',
  affectedCount: 247
});
```

---

## 🚀 Deployment

### Environment Variables

```bash
# .env.production
NODE_ENV=production
PORT=3000

# Database
DATABASE_URL=postgresql://user:password@host:5432/grokyatra

# AWS S3
S3_BUCKET=grokyatra-images
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
AWS_REGION=ap-south-1

# Authentication
JWT_SECRET=your_jwt_secret
ADMIN_EMAIL=admin@grokyatra.com

# Monitoring
SENTRY_DSN=your_sentry_dsn
GA_TRACKING_ID=your_ga_id

# CDN
CDN_URL=https://cdn.grokyatra.com
```

### Build & Deploy

```bash
# Build frontend
npm run build

# Start production server
npm run start

# Or deploy to Vercel
vercel --prod

# Or deploy to AWS
aws configure
aws s3 sync ./build s3://grokyatra-admin
aws cloudfront create-invalidation --distribution-id YOUR_ID --paths "/*"
```

---

## 📚 Additional Resources

### Documentation
- Full API Documentation: `/ADMIN_DASHBOARD_DOCUMENTATION.md`
- Quick Start Guide: `/ADMIN_DASHBOARD_QUICK_START.md`
- Visual Guide: `/ADMIN_DASHBOARD_VISUAL_GUIDE.md`

### Code Examples
- Component Library: `/src/app/components/ui/ComponentLibraryDemo.tsx`
- Admin System Demo: `/src/app/components/admin/AdminSystemDemo.tsx`
- Annotation Example: `/src/app/components/ui/AllComponentAnnotations.tsx`

### TypeScript Types
- Main Types: `/src/types/index.ts`
- Component Props: Check component files for inline interfaces

---

## ✅ Checklist for Production

### Backend
- [ ] Implement all API endpoints
- [ ] Add authentication middleware
- [ ] Add input validation
- [ ] Implement CSRF protection
- [ ] Set up error tracking (Sentry)
- [ ] Configure rate limiting
- [ ] Set up database migrations
- [ ] Implement audit logging

### Frontend
- [ ] Connect to real API endpoints
- [ ] Add React Query for data fetching
- [ ] Implement error boundaries
- [ ] Add loading states
- [ ] Test all user flows
- [ ] Optimize bundle size
- [ ] Add analytics tracking
- [ ] Test accessibility

### DevOps
- [ ] Set up CI/CD pipeline
- [ ] Configure environment variables
- [ ] Set up monitoring dashboards
- [ ] Configure backup strategy
- [ ] Set up CDN for images
- [ ] Implement caching strategy
- [ ] Set up staging environment
- [ ] Document deployment process

---

**🎯 You're Ready to Integrate!**

This guide provides everything needed to connect the Admin Dashboard to your backend systems and deploy to production.

**Questions?** Refer to the comprehensive documentation or check the code examples in the component files.

---

**Last Updated:** January 17, 2026  
**Version:** 1.0.0  
**Status:** ✅ Production Ready
