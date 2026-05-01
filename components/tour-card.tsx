/**
 * Tour Card Component
 * Displays a tour preview with image, rating, and key details
 */

import React from 'react';
import { Image } from 'expo-image';
import {
  Pressable,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import { Tour } from '@/types/tour';
import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';
import { IconSymbol } from './ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

interface TourCardProps {
  tour: Tour;
  onPress: () => void;
  onFavoritPress?: () => void;
  isFavorite?: boolean;
  style?: ViewStyle;
}

export function TourCard({
  tour,
  onPress,
  onFavoritPress,
  isFavorite = false,
  style,
}: TourCardProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  const difficultyColors = {
    easy: '#4ade80',
    moderate: '#facc15',
    hard: '#ef4444',
  };

  const categoryEmojis = {
    cultural: '🎭',
    adventure: '🏔️',
    food: '🍽️',
    nature: '🌿',
    historical: '🏛️',
    nightlife: '🌙',
  };

  return (
    <Pressable onPress={onPress} style={({ pressed }) => [pressed && styles.pressed]}>
      <ThemedView style={[styles.card, style]}>
        {/* Image Container */}
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: tour.image }}
            style={styles.image}
            contentFit="cover"
          />

          {/* Overlay Badge */}
          <View style={styles.badgeOverlay}>
            <View style={[styles.badge, { backgroundColor: difficultyColors[tour.difficulty] }]}>
              <ThemedText style={styles.badgeText}>
                {tour.difficulty.charAt(0).toUpperCase() + tour.difficulty.slice(1)}
              </ThemedText>
            </View>
          </View>

          {/* Favorite Button */}
          {onFavoritPress && (
            <Pressable
              onPress={onFavoritPress}
              style={[styles.favoriteButton, isFavorite && styles.favoriteActive]}
            >
              <IconSymbol
                name={isFavorite ? 'heart.fill' : 'heart'}
                size={24}
                color={isFavorite ? '#ef4444' : 'white'}
              />
            </Pressable>
          )}
        </View>

        {/* Content */}
        <View style={styles.content}>
          {/* Category & Title */}
          <View style={styles.header}>
            <ThemedText style={styles.category}>
              {categoryEmojis[tour.category]} {tour.category}
            </ThemedText>
            <ThemedText type="defaultSemiBold" style={styles.title} numberOfLines={2}>
              {tour.title}
            </ThemedText>
          </View>

          {/* Location */}
          <View style={styles.locationRow}>
            <IconSymbol name="mappin" size={14} color={colors.icon} />
            <ThemedText style={styles.location}>{tour.location}</ThemedText>
          </View>

          {/* Rating & Reviews */}
          <View style={styles.ratingRow}>
            <View style={styles.ratingContent}>
              <IconSymbol name="star.fill" size={14} color="#fbbf24" />
              <ThemedText style={styles.rating}>{tour.rating}</ThemedText>
              <ThemedText style={styles.reviews}>({tour.reviews} reviews)</ThemedText>
            </View>
            <ThemedText style={styles.duration}>
              {tour.duration < 60 ? `${tour.duration}m` : `${Math.floor(tour.duration / 60)}h`}
            </ThemedText>
          </View>

          {/* Footer with Price */}
          <View style={styles.footer}>
            <View>
              <ThemedText style={styles.priceLabel}>From</ThemedText>
              <ThemedText type="defaultSemiBold" style={styles.price}>
                ${tour.price}
              </ThemedText>
            </View>
            <View style={styles.groupSize}>
              <IconSymbol name="person.2" size={14} color={colors.icon} />
              <ThemedText style={styles.groupText}>Max {tour.groupSize}</ThemedText>
            </View>
          </View>
        </View>
      </ThemedView>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
  card: {
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 180,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  badgeOverlay: {
    position: 'absolute',
    top: 8,
    left: 8,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#000',
  },
  favoriteButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  favoriteActive: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  content: {
    padding: 12,
  },
  header: {
    marginBottom: 8,
  },
  category: {
    fontSize: 12,
    marginBottom: 4,
    opacity: 0.7,
  },
  title: {
    fontSize: 16,
    lineHeight: 20,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 4,
  },
  location: {
    fontSize: 12,
    opacity: 0.8,
  },
  ratingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  ratingContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  rating: {
    fontSize: 12,
    fontWeight: '600',
  },
  reviews: {
    fontSize: 11,
    opacity: 0.7,
  },
  duration: {
    fontSize: 12,
    fontWeight: '500',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
    paddingTop: 8,
    marginTop: 8,
  },
  priceLabel: {
    fontSize: 11,
    opacity: 0.6,
    marginBottom: 2,
  },
  price: {
    fontSize: 16,
  },
  groupSize: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  groupText: {
    fontSize: 11,
    opacity: 0.8,
  },
});
