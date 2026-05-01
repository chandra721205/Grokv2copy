/**
 * Language Selection Screen
 * Mobile onboarding screen for selecting app language
 */

import React, { useState, useCallback, useMemo } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Pressable,
  TextInput,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { LanguageCard } from '@/components/language-card';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useLanguage } from '@/hooks/use-language';
import { LanguageService } from '@/services/language-service';
import { LanguageCode } from '@/types/language';

export default function LanguageSelectionScreen() {
  const router = useRouter();
  const { changeLanguage } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageCode>('en');
  const [isLoading, setIsLoading] = useState(false);

  const allLanguages = useMemo(() => LanguageService.getSupportedLanguages(), []);

  const filteredLanguages = useMemo(() => {
    if (!searchQuery.trim()) {
      return allLanguages;
    }
    return LanguageService.searchLanguages(searchQuery);
  }, [searchQuery, allLanguages]);

  const handleLanguageSelect = useCallback((languageCode: LanguageCode) => {
    setSelectedLanguage(languageCode);
  }, []);

  const handleContinue = async () => {
    try {
      setIsLoading(true);
      await changeLanguage(selectedLanguage);
      // Navigate to main app
      router.replace('/(tabs)');
    } catch (err) {
      console.error('Failed to set language:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LinearGradient
      colors={['#fffaff', '#f8f6ff']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#fffaff" />
      <SafeAreaView style={styles.safeArea}>
        {/* Header */}
        <View style={styles.header}>
          <ThemedText type="title" style={styles.logo}>
            TourVerse
          </ThemedText>
        </View>

        {/* Content */}
        <FlatList
          data={filteredLanguages}
          renderItem={({ item }) => (
            <LanguageCard
              language={item}
              isSelected={selectedLanguage === item.code}
              onPress={() => handleLanguageSelect(item.code)}
            />
          )}
          keyExtractor={item => item.code}
          numColumns={3}
          scrollEnabled={true}
          contentContainerStyle={styles.listContent}
          columnWrapperStyle={styles.columnWrapper}
          ListHeaderComponent={
            <View style={styles.titleSection}>
              {/* Main Title */}
              <ThemedText style={styles.mainTitle}>
                Choose Your Language
              </ThemedText>

              {/* Subtitle */}
              <ThemedText style={styles.subtitle}>
                Languages
              </ThemedText>

              {/* Search Field */}
              <View style={styles.searchContainer}>
                <IconSymbol
                  name="magnifyingglass"
                  size={18}
                  color="rgba(20,46,46,0.62)"
                />
                <TextInput
                  style={styles.searchInput}
                  placeholder="Search languages"
                  placeholderTextColor="rgba(20,46,46,0.62)"
                  value={searchQuery}
                  onChangeText={setSearchQuery}
                />
                <IconSymbol
                  name="mic.fill"
                  size={18}
                  color="rgba(20,46,46,0.62)"
                />
              </View>
            </View>
          }
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <IconSymbol
                name="magnifyingglass"
                size={48}
                color="rgba(128,128,128,0.5)"
              />
              <ThemedText style={styles.emptyText}>
                No languages found
              </ThemedText>
            </View>
          }
          showsVerticalScrollIndicator={false}
        />

        {/* Bottom Button */}
        <View style={styles.buttonContainer}>
          <Pressable
            onPress={handleContinue}
            disabled={isLoading}
            style={({ pressed }) => [
              styles.button,
              pressed && styles.buttonPressed,
              isLoading && styles.buttonDisabled,
            ]}
          >
            <ThemedText style={styles.buttonText}>
              {isLoading ? 'Setting language...' : 'Continue'}
            </ThemedText>
          </Pressable>
        </View>

        {/* Gesture Indicator */}
        <View style={styles.gestureIndicator}>
          <View style={styles.gestureLine} />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffaff',
  },
  safeArea: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
  },
  logo: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1b2828',
  },
  titleSection: {
    paddingHorizontal: 20,
    paddingBottom: 12,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1b2828',
    marginBottom: 16,
    letterSpacing: -0.56,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1b2828',
    marginBottom: 20,
    letterSpacing: -0.44,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(37,126,126,0.09)',
    borderRadius: 360,
    paddingHorizontal: 13,
    paddingVertical: 10.5,
    gap: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 17,
    color: '#1b2828',
  },
  listContent: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  emptyContainer: {
    alignItems: 'center',
    paddingVertical: 60,
  },
  emptyText: {
    marginTop: 12,
    fontSize: 16,
    color: '#1b2828',
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  button: {
    backgroundColor: '#008080',
    borderRadius: 48,
    paddingVertical: 14.5,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 50,
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '500',
    color: '#fff',
  },
  gestureIndicator: {
    alignItems: 'center',
    paddingBottom: 8,
  },
  gestureLine: {
    width: 120,
    height: 4,
    borderRadius: 360,
    backgroundColor: 'rgba(37,126,126,0.09)',
  },
});
