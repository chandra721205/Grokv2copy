/**
 * Trips / Tours Listing Screen
 * Main screen for browsing and filtering available tours
 */

import React, { useState, useCallback } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Pressable,
  TextInput,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { TourCard } from '@/components/tour-card';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useTours, useFavoriteTours } from '@/hooks/use-tours';
import { Tour, TourCategory } from '@/types/tour';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

const CATEGORIES: { id: TourCategory; label: string; icon: string }[] = [
  { id: 'cultural', label: 'Cultural', icon: '🎭' },
  { id: 'adventure', label: 'Adventure', icon: '🏔️' },
  { id: 'food', label: 'Food', icon: '🍽️' },
  { id: 'nature', label: 'Nature', icon: '🌿' },
  { id: 'historical', label: 'History', icon: '🏛️' },
  { id: 'nightlife', label: 'Nightlife', icon: '🌙' },
];

export default function TripsScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const { tours, loading, error, searchTours, filterByCategory, loadTours } = useTours();
  const { toggleFavorite, isFavorite } = useFavoriteTours();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<TourCategory | null>(null);
  const [sortBy, setSortBy] = useState<'rating' | 'price'>('rating');

  const handleSearch = useCallback(
    async (text: string) => {
      setSearchQuery(text);
      if (text.trim()) {
        await searchTours(text);
      } else {
        await loadTours();
      }
    },
    [searchTours, loadTours]
  );

  const handleCategoryPress = useCallback(
    async (category: TourCategory) => {
      if (selectedCategory === category) {
        setSelectedCategory(null);
        await loadTours();
      } else {
        setSelectedCategory(category);
        await filterByCategory(category);
      }
    },
    [selectedCategory, filterByCategory, loadTours]
  );

  const handleTourPress = (tour: Tour) => {
    router.push({
      pathname: '/tour-detail',
      params: { tourId: tour.id },
    });
  };

  const sortedTours = [...tours].sort((a, b) => {
    if (sortBy === 'rating') {
      return b.rating - a.rating;
    }
    return a.price - b.price;
  });

  return (
    <LinearGradient
      colors={['#0f2027', '#203a43', '#2c5364']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <FlatList
        data={sortedTours}
        renderItem={({ item }) => (
          <TourCard
            tour={item}
            onPress={() => handleTourPress(item)}
            onFavoritPress={() => toggleFavorite(item.id)}
            isFavorite={isFavorite(item.id)}
            style={styles.tourCard}
          />
        )}
        keyExtractor={item => item.id}
        ListHeaderComponent={
          <View style={styles.header}>
            {/* Title */}
            <ThemedText type="title" style={styles.headerTitle}>
              Explore Tours
            </ThemedText>

            {/* Search Bar */}
            <View style={[styles.searchContainer, { borderColor: colors.icon }]}>
              <IconSymbol name="magnifyingglass" size={18} color={colors.icon} />
              <TextInput
                style={[styles.searchInput, { color: colors.text }]}
                placeholder="Search tours..."
                placeholderTextColor={`${colors.text}80`}
                value={searchQuery}
                onChangeText={handleSearch}
              />
            </View>

            {/* Categories */}
            <View style={styles.categoriesContainer}>
              <ThemedText style={styles.categoriesLabel}>Categories</ThemedText>
              <FlatList
                data={CATEGORIES}
                renderItem={({ item }) => (
                  <Pressable
                    onPress={() => handleCategoryPress(item.id)}
                    style={[
                      styles.categoryChip,
                      selectedCategory === item.id && styles.categoryChipActive,
                    ]}
                  >
                    <ThemedText style={styles.categoryChipText}>
                      {item.icon} {item.label}
                    </ThemedText>
                  </Pressable>
                )}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.categoriesScroll}
              />
            </View>

            {/* Sort Options */}
            <View style={styles.sortContainer}>
              <Pressable
                onPress={() => setSortBy('rating')}
                style={[
                  styles.sortButton,
                  sortBy === 'rating' && styles.sortButtonActive,
                ]}
              >
                <ThemedText
                  style={[
                    styles.sortButtonText,
                    sortBy === 'rating' && styles.sortButtonTextActive,
                  ]}
                >
                  ⭐ Top Rated
                </ThemedText>
              </Pressable>
              <Pressable
                onPress={() => setSortBy('price')}
                style={[
                  styles.sortButton,
                  sortBy === 'price' && styles.sortButtonActive,
                ]}
              >
                <ThemedText
                  style={[
                    styles.sortButtonText,
                    sortBy === 'price' && styles.sortButtonTextActive,
                  ]}
                >
                  💰 Price
                </ThemedText>
              </Pressable>
            </View>

            {/* Results Count */}
            <ThemedText style={styles.resultCount}>
              {tours.length} {tours.length === 1 ? 'tour' : 'tours'} available
            </ThemedText>
          </View>
        }
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            {loading ? (
              <>
                <ActivityIndicator size="large" color="#fff" />
                <ThemedText style={styles.emptyText}>Loading tours...</ThemedText>
              </>
            ) : error ? (
              <>
                <IconSymbol name="exclamationmark.circle" size={48} color="#ef4444" />
                <ThemedText style={styles.emptyText}>{error}</ThemedText>
                <Pressable onPress={loadTours} style={styles.retryButton}>
                  <ThemedText style={styles.retryButtonText}>Try Again</ThemedText>
                </Pressable>
              </>
            ) : (
              <>
                <IconSymbol name="magnifyingglass" size={48} color="#888" />
                <ThemedText style={styles.emptyText}>No tours found</ThemedText>
              </>
            )}
          </View>
        }
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 12,
    marginBottom: 16,
    height: 44,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
  },
  categoriesContainer: {
    marginBottom: 16,
  },
  categoriesLabel: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  categoriesScroll: {
    gap: 8,
  },
  categoryChip: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  categoryChipActive: {
    backgroundColor: '#0a7ea4',
    borderColor: '#0a7ea4',
  },
  categoryChipText: {
    fontSize: 13,
    fontWeight: '500',
  },
  sortContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 12,
  },
  sortButton: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    alignItems: 'center',
  },
  sortButtonActive: {
    backgroundColor: '#0a7ea4',
    borderColor: '#0a7ea4',
  },
  sortButtonText: {
    fontSize: 12,
    fontWeight: '500',
  },
  sortButtonTextActive: {
    color: '#fff',
  },
  resultCount: {
    fontSize: 12,
    opacity: 0.7,
    marginBottom: 8,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  tourCard: {
    marginBottom: 12,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
  },
  emptyText: {
    marginTop: 12,
    fontSize: 16,
    textAlign: 'center',
  },
  retryButton: {
    marginTop: 16,
    paddingHorizontal: 24,
    paddingVertical: 10,
    backgroundColor: '#0a7ea4',
    borderRadius: 8,
  },
  retryButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },
});

