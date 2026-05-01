/**
 * Tour Detail Screen
 * Shows comprehensive information about a selected tour
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  ActivityIndicator,
  Pressable,
  Alert,
} from 'react-native';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useTourDetail, useFavoriteTours } from '@/hooks/use-tours';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { TourService } from '@/services/tour-service';

export default function TourDetailScreen() {
  const router = useRouter();
  const { tourId } = useLocalSearchParams<{ tourId: string }>();
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const { tour, loading, error } = useTourDetail(tourId || null);
  const { toggleFavorite, isFavorite } = useFavoriteTours();
  const [booking, setBooking] = useState(false);

  if (!tourId) {
    return (
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <ThemedText>Tour not found</ThemedText>
      </View>
    );
  }

  if (loading) {
    return (
      <View style={[styles.container, styles.centerContainer, { backgroundColor: colors.background }]}>
        <ActivityIndicator size="large" color={colors.tint} />
      </View>
    );
  }

  if (error || !tour) {
    return (
      <View style={[styles.container, styles.centerContainer, { backgroundColor: colors.background }]}>
        <IconSymbol name="exclamationmark.circle" size={48} color="#ef4444" />
        <ThemedText style={styles.errorText}>{error || 'Tour not found'}</ThemedText>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <ThemedText style={styles.backButtonText}>Go Back</ThemedText>
        </Pressable>
      </View>
    );
  }

  const handleBooking = async () => {
    try {
      setBooking(true);
      const result = await TourService.bookTour({
        tourId: tour.id,
        date: new Date(),
        participants: 1,
        totalPrice: tour.price,
      });

      if (result.success) {
        Alert.alert('Success', `Tour booked! Booking ID: ${result.bookingId}`);
        router.back();
      }
    } catch (err) {
      Alert.alert('Error', 'Failed to book tour. Please try again.');
    } finally {
      setBooking(false);
    }
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
    <LinearGradient
      colors={['#0f2027', '#203a43', '#2c5364']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Header with Back Button */}
        <View style={styles.headerBar}>
          <Pressable onPress={() => router.back()} style={styles.backButtonRound}>
            <IconSymbol name="chevron.left" size={24} color="#fff" />
          </Pressable>
          <Pressable
            onPress={() => toggleFavorite(tour.id)}
            style={[styles.favoriteButtonRound, isFavorite(tour.id) && styles.favoriteActive]}
          >
            <IconSymbol
              name={isFavorite(tour.id) ? 'heart.fill' : 'heart'}
              size={24}
              color={isFavorite(tour.id) ? '#ef4444' : '#fff'}
            />
          </Pressable>
        </View>

        {/* Hero Image */}
        <Image source={{ uri: tour.image }} style={styles.heroImage} contentFit="cover" />

        {/* Content Card */}
        <ThemedView style={styles.card}>
          {/* Title Section */}
          <View style={styles.titleSection}>
            <View style={styles.titleRow}>
              <ThemedText type="title" style={styles.title}>
                {tour.title}
              </ThemedText>
            </View>
            <View style={styles.categoryRow}>
              <ThemedText style={styles.category}>
                {categoryEmojis[tour.category]} {tour.category}
              </ThemedText>
              <ThemedText style={styles.location}>📍 {tour.location}</ThemedText>
            </View>
          </View>

          {/* Rating & Reviews */}
          <View style={styles.ratingCard}>
            <View style={styles.ratingLeft}>
              <IconSymbol name="star.fill" size={16} color="#fbbf24" />
              <ThemedText style={styles.ratingNumber}>{tour.rating}</ThemedText>
              <ThemedText style={styles.reviewsCount}>({tour.reviews})</ThemedText>
            </View>
            <View style={styles.ratingDivider} />
            <View style={styles.ratingRight}>
              <ThemedText style={styles.priceLabel}>From</ThemedText>
              <ThemedText style={styles.priceAmount}>${tour.price}</ThemedText>
            </View>
          </View>

          {/* Quick Info */}
          <View style={styles.quickInfoGrid}>
            <View style={styles.quickInfoItem}>
              <IconSymbol name="clock" size={18} color="#0a7ea4" />
              <ThemedText style={styles.quickInfoLabel}>Duration</ThemedText>
              <ThemedText style={styles.quickInfoValue}>
                {tour.duration < 60 ? `${tour.duration}m` : `${Math.floor(tour.duration / 60)}h`}
              </ThemedText>
            </View>
            <View style={styles.quickInfoItem}>
              <IconSymbol name="person.2" size={18} color="#0a7ea4" />
              <ThemedText style={styles.quickInfoLabel}>Group Size</ThemedText>
              <ThemedText style={styles.quickInfoValue}>Max {tour.groupSize}</ThemedText>
            </View>
            <View style={styles.quickInfoItem}>
              <IconSymbol name="globe" size={18} color="#0a7ea4" />
              <ThemedText style={styles.quickInfoLabel}>Language</ThemedText>
              <ThemedText style={styles.quickInfoValue}>{tour.language}</ThemedText>
            </View>
          </View>

          {/* Description */}
          <View style={styles.section}>
            <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>
              About This Tour
            </ThemedText>
            <ThemedText style={styles.description}>{tour.description}</ThemedText>
          </View>

          {/* Highlights */}
          <View style={styles.section}>
            <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>
              ✨ Highlights
            </ThemedText>
            {tour.highlights.map((highlight, index) => (
              <View key={index} style={styles.listItem}>
                <ThemedText style={styles.bullet}>•</ThemedText>
                <ThemedText style={styles.listItemText}>{highlight}</ThemedText>
              </View>
            ))}
          </View>

          {/* What's Included */}
          <View style={styles.section}>
            <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>
              ✓ What's Included
            </ThemedText>
            {tour.included.map((item, index) => (
              <View key={index} style={styles.listItem}>
                <IconSymbol name="checkmark.circle.fill" size={16} color="#4ade80" />
                <ThemedText style={styles.listItemText}>{item}</ThemedText>
              </View>
            ))}
          </View>

          {/* Guide Info */}
          <View style={styles.section}>
            <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>
              👤 Your Guide
            </ThemedText>
            <View style={styles.guideCard}>
              <View style={styles.guideLeft}>
                <View style={styles.guideAvatar}>
                  <IconSymbol name="person.fill" size={24} color="#fff" />
                </View>
              </View>
              <View style={styles.guideRight}>
                <ThemedText type="defaultSemiBold">{tour.guide.name}</ThemedText>
                <ThemedText style={styles.guideExperience}>
                  {tour.guide.experience} years experience
                </ThemedText>
                <ThemedText style={styles.guideLanguages}>
                  🗣️ {tour.guide.languages.join(', ')}
                </ThemedText>
              </View>
            </View>
          </View>

          {/* Meeting Point & Cancellation */}
          <View style={styles.section}>
            <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>
              ℹ️ Important Details
            </ThemedText>
            <View style={styles.detailRow}>
              <ThemedText style={styles.detailLabel}>Meeting Point:</ThemedText>
              <ThemedText style={styles.detailValue}>{tour.meetingPoint}</ThemedText>
            </View>
            <View style={styles.detailRow}>
              <ThemedText style={styles.detailLabel}>Cancellation:</ThemedText>
              <ThemedText style={styles.detailValue}>{tour.cancellation}</ThemedText>
            </View>
          </View>
        </ThemedView>
      </ScrollView>

      {/* Booking Button */}
      <View style={styles.bookingBar}>
        <Pressable
          onPress={handleBooking}
          disabled={booking}
          style={({ pressed }) => [
            styles.bookingButton,
            pressed && styles.bookingButtonPressed,
            booking && styles.bookingButtonDisabled,
          ]}
        >
          {booking ? (
            <ActivityIndicator color="#fff" size="small" />
          ) : (
            <ThemedText style={styles.bookingButtonText}>Book Tour Now</ThemedText>
          )}
        </Pressable>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContent: {
    paddingBottom: 100,
  },
  headerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 12,
    zIndex: 10,
  },
  backButtonRound: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  favoriteButtonRound: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  favoriteActive: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  heroImage: {
    width: '100%',
    height: 240,
    marginBottom: 16,
  },
  card: {
    marginHorizontal: 16,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  titleSection: {
    marginBottom: 16,
  },
  titleRow: {
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
  },
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  category: {
    fontSize: 13,
    opacity: 0.8,
  },
  location: {
    fontSize: 13,
    opacity: 0.8,
  },
  ratingCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginBottom: 16,
  },
  ratingLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ratingNumber: {
    fontWeight: '600',
    fontSize: 14,
  },
  reviewsCount: {
    fontSize: 12,
    opacity: 0.7,
  },
  ratingDivider: {
    width: 1,
    height: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginHorizontal: 12,
  },
  ratingRight: {
    flex: 1,
    alignItems: 'flex-end',
  },
  priceLabel: {
    fontSize: 11,
    opacity: 0.6,
  },
  priceAmount: {
    fontSize: 18,
    fontWeight: '800',
  },
  quickInfoGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    gap: 8,
  },
  quickInfoItem: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 12,
    paddingVertical: 12,
  },
  quickInfoLabel: {
    fontSize: 11,
    opacity: 0.7,
    marginTop: 4,
  },
  quickInfoValue: {
    fontSize: 12,
    fontWeight: '600',
    marginTop: 2,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    opacity: 0.85,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
    gap: 8,
  },
  bullet: {
    fontSize: 16,
    marginTop: -2,
  },
  listItemText: {
    flex: 1,
    fontSize: 13,
    lineHeight: 18,
    opacity: 0.85,
  },
  guideCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 12,
    padding: 12,
  },
  guideLeft: {
    marginRight: 12,
  },
  guideAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#0a7ea4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  guideRight: {
    flex: 1,
  },
  guideExperience: {
    fontSize: 12,
    opacity: 0.7,
    marginTop: 2,
  },
  guideLanguages: {
    fontSize: 12,
    marginTop: 4,
    opacity: 0.8,
  },
  detailRow: {
    marginBottom: 12,
  },
  detailLabel: {
    fontSize: 12,
    fontWeight: '600',
    opacity: 0.7,
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 13,
    opacity: 0.85,
    lineHeight: 18,
  },
  bookingBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
  },
  bookingButton: {
    backgroundColor: '#0a7ea4',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookingButtonPressed: {
    opacity: 0.8,
  },
  bookingButtonDisabled: {
    opacity: 0.6,
  },
  bookingButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
  },
  errorText: {
    marginTop: 12,
    fontSize: 16,
    textAlign: 'center',
  },
  backButton: {
    marginTop: 16,
    paddingHorizontal: 24,
    paddingVertical: 10,
    backgroundColor: '#0a7ea4',
    borderRadius: 8,
  },
  backButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },
});
