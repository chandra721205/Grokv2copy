// Category Hub Template - Reusable template for all tourism category hubs
// This template provides a standardized structure for:
// - Adventure Tourism, Sports Tourism, Heritage Tourism, etc.
// - Saves ~1,000 lines per component by providing common functionality

import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Search, Globe, Youtube, Filter, X } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Badge } from '@/app/components/ui/badge';
import { Card } from '@/app/components/ui/card';

export interface CategoryItem {
  id: string;
  name: string;
  icon?: any;
  description?: string;
  difficulty?: string;
  duration?: string;
  price?: string;
  seasons?: string[];
  tags?: string[];
  [key: string]: any; // Allow additional custom properties
}

export interface FilterOption {
  id: string;
  label: string;
  values: string[];
}

interface CategoryHubTemplateProps {
  // Required props
  categoryName: string;
  categories: CategoryItem[];
  onBack: () => void;
  onCategorySelect: (categoryId: string) => void;
  
  // Optional customization
  heroGradient?: string;
  heroImage?: string;
  description?: string;
  searchPlaceholder?: string;
  showGoogleSearch?: boolean;
  showYoutubeSearch?: boolean;
  showInterestTracker?: boolean;
  
  // Filtering
  filters?: FilterOption[];
  onFilterChange?: (filterId: string, value: string) => void;
  
  // Stats/Info section
  statsComponent?: React.ReactNode;
  infoComponent?: React.ReactNode;
  
  // Custom render functions
  renderCategoryCard?: (category: CategoryItem, index: number) => React.ReactNode;
  renderEmptyState?: () => React.ReactNode;
  renderHeaderActions?: () => React.ReactNode;
  
  // Layout options
  gridColumns?: 1 | 2 | 3;
  showCount?: boolean;
}

export const CategoryHubTemplate: React.FC<CategoryHubTemplateProps> = ({
  categoryName,
  categories,
  onBack,
  onCategorySelect,
  heroGradient = 'from-blue-500 to-purple-600',
  heroImage,
  description,
  searchPlaceholder = 'Search categories...',
  showGoogleSearch = true,
  showYoutubeSearch = true,
  showInterestTracker = false,
  filters,
  onFilterChange,
  statsComponent,
  infoComponent,
  renderCategoryCard,
  renderEmptyState,
  renderHeaderActions,
  gridColumns = 2,
  showCount = true
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilters, setActiveFilters] = useState<Record<string, string>>({});
  const [showFilters, setShowFilters] = useState(false);

  // Filter and search logic
  const filteredCategories = useMemo(() => {
    let filtered = categories;

    // Apply search
    if (searchTerm) {
      filtered = filtered.filter(cat => 
        cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cat.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cat.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Apply active filters
    Object.entries(activeFilters).forEach(([filterId, value]) => {
      if (value && value !== 'all') {
        filtered = filtered.filter(cat => {
          const categoryValue = cat[filterId];
          if (Array.isArray(categoryValue)) {
            return categoryValue.includes(value);
          }
          return categoryValue === value;
        });
      }
    });

    return filtered;
  }, [categories, searchTerm, activeFilters]);

  const handleFilterChange = (filterId: string, value: string) => {
    setActiveFilters(prev => ({
      ...prev,
      [filterId]: value
    }));
    onFilterChange?.(filterId, value);
  };

  const clearFilters = () => {
    setActiveFilters({});
    setSearchTerm('');
  };

  const activeFilterCount = Object.values(activeFilters).filter(v => v && v !== 'all').length;

  // Default category card renderer
  const defaultCategoryCard = (category: CategoryItem, index: number) => (
    <motion.div
      key={category.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Card
        onClick={() => onCategorySelect(category.id)}
        className="p-6 cursor-pointer hover:shadow-xl transition-all bg-white rounded-3xl"
      >
        {/* Icon/Image */}
        {category.icon && (
          <div className="text-4xl mb-3">
            {typeof category.icon === 'string' ? category.icon : <category.icon className="w-10 h-10" />}
          </div>
        )}

        {/* Name */}
        <h3 className="font-bold text-lg mb-2 text-gray-900">{category.name}</h3>

        {/* Description */}
        {category.description && (
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{category.description}</p>
        )}

        {/* Metadata badges */}
        <div className="flex flex-wrap gap-2">
          {category.difficulty && (
            <Badge variant="outline" className="text-xs">
              {category.difficulty}
            </Badge>
          )}
          {category.duration && (
            <Badge variant="outline" className="text-xs">
              {category.duration}
            </Badge>
          )}
          {category.price && (
            <Badge variant="outline" className="text-xs">
              {category.price}
            </Badge>
          )}
        </div>

        {/* Tags */}
        {category.tags && category.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {category.tags.slice(0, 3).map(tag => (
              <span key={tag} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}
      </Card>
    </motion.div>
  );

  // Default empty state
  const defaultEmptyState = () => (
    <div className="text-center py-12">
      <div className="text-6xl mb-4">🔍</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">No results found</h3>
      <p className="text-gray-600 mb-4">
        Try adjusting your search or filters
      </p>
      <Button onClick={clearFilters} variant="outline">
        Clear all filters
      </Button>
    </div>
  );

  const gridColsClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
  }[gridColumns];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      {/* Header Section */}
      <div 
        className={`bg-gradient-to-r ${heroGradient} text-white p-6 rounded-b-3xl relative overflow-hidden`}
        style={heroImage ? { backgroundImage: `url(${heroImage})`, backgroundSize: 'cover' } : {}}
      >
        {heroImage && <div className="absolute inset-0 bg-black/40" />}
        
        <div className="relative z-10">
          {/* Back button */}
          <Button
            variant="ghost"
            onClick={onBack}
            className="mb-4 text-white hover:bg-white/20"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back
          </Button>

          {/* Title and description */}
          <div className="mb-4">
            <h1 className="text-3xl font-bold mb-2">{categoryName}</h1>
            {description && (
              <p className="text-white/90 text-sm">{description}</p>
            )}
          </div>

          {/* Custom header actions */}
          {renderHeaderActions && (
            <div className="mb-4">
              {renderHeaderActions()}
            </div>
          )}

          {/* Search Bar */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              placeholder={searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/70 backdrop-blur-sm"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-3 text-white/70 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>

          {/* Filter button */}
          {filters && filters.length > 0 && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
              className="mb-4 bg-white/20 border-white/30 text-white hover:bg-white/30"
            >
              <Filter className="mr-2 h-4 w-4" />
              Filters
              {activeFilterCount > 0 && (
                <Badge className="ml-2 bg-white text-gray-900">{activeFilterCount}</Badge>
              )}
            </Button>
          )}

          {/* External Search Buttons */}
          {(showGoogleSearch || showYoutubeSearch) && (
            <div className="flex gap-2">
              {showGoogleSearch && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(`https://www.google.com/search?q=${encodeURIComponent(categoryName + ' tourism India')}`, '_blank')}
                  className="flex-1 bg-white/20 border-white/30 text-white hover:bg-white/30"
                >
                  <Globe className="mr-2 h-4 w-4" />
                  Google Search
                </Button>
              )}
              {showYoutubeSearch && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(categoryName + ' India')}`, '_blank')}
                  className="flex-1 bg-white/20 border-white/30 text-white hover:bg-white/30"
                >
                  <Youtube className="mr-2 h-4 w-4" />
                  YouTube
                </Button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Filters Panel (expandable) */}
      {showFilters && filters && filters.length > 0 && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="bg-white mx-6 mt-4 rounded-2xl p-4 shadow-lg"
        >
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-gray-900">Filters</h3>
            {activeFilterCount > 0 && (
              <Button onClick={clearFilters} variant="ghost" size="sm">
                Clear all
              </Button>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filters.map(filter => (
              <div key={filter.id}>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  {filter.label}
                </label>
                <select
                  value={activeFilters[filter.id] || 'all'}
                  onChange={(e) => handleFilterChange(filter.id, e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All</option>
                  {filter.values.map(value => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Stats Section (if provided) */}
      {statsComponent && (
        <div className="px-6 py-4">
          {statsComponent}
        </div>
      )}

      {/* Info Section (if provided) */}
      {infoComponent && (
        <div className="px-6 py-4">
          {infoComponent}
        </div>
      )}

      {/* Categories Grid */}
      <div className="px-6 py-4">
        {/* Count header */}
        {showCount && (
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900">
              {filteredCategories.length} {filteredCategories.length === 1 ? 'Category' : 'Categories'}
            </h2>
            {(searchTerm || activeFilterCount > 0) && (
              <span className="text-sm text-gray-600">
                {categories.length} total
              </span>
            )}
          </div>
        )}

        {/* Categories */}
        {filteredCategories.length > 0 ? (
          <div className={`grid ${gridColsClass} gap-4`}>
            {filteredCategories.map((category, index) => 
              renderCategoryCard 
                ? renderCategoryCard(category, index) 
                : defaultCategoryCard(category, index)
            )}
          </div>
        ) : (
          renderEmptyState ? renderEmptyState() : defaultEmptyState()
        )}
      </div>

      {/* Bottom spacing */}
      <div className="h-20" />
    </div>
  );
};

// Export a simplified version for basic use cases
export const SimpleCategoryHub: React.FC<{
  title: string;
  items: CategoryItem[];
  onBack: () => void;
  onSelect: (id: string) => void;
}> = ({ title, items, onBack, onSelect }) => {
  return (
    <CategoryHubTemplate
      categoryName={title}
      categories={items}
      onBack={onBack}
      onCategorySelect={onSelect}
    />
  );
};
