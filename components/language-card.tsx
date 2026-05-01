/**
 * Language Selection Card Component
 */

import React from 'react';
import { Image } from 'expo-image';
import { Pressable, StyleSheet, View } from 'react-native';
import { ThemedText } from './themed-text';
import { Language } from '@/types/language';

interface LanguageCardProps {
  language: Language;
  isSelected: boolean;
  onPress: () => void;
}

export function LanguageCard({ language, isSelected, onPress }: LanguageCardProps) {
  return (
    <Pressable onPress={onPress} style={[styles.card, isSelected && styles.cardSelected]}>
      {/* Flag Image */}
      <View style={[styles.flagContainer, isSelected && styles.flagContainerSelected]}>
        <Image
          source={{ uri: language.flagUrl }}
          style={styles.flag}
          contentFit="cover"
        />
      </View>

      {/* Language Name */}
      <View style={styles.labelContainer}>
        <ThemedText style={styles.label}>{language.nativeScript}</ThemedText>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    gap: 8,
    marginBottom: 4,
  },
  cardSelected: {
    opacity: 1,
  },
  flagContainer: {
    width: 108,
    height: 108,
    borderRadius: 54,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  flagContainerSelected: {
    borderColor: '#008080',
    borderWidth: 3,
  },
  flag: {
    width: '100%',
    height: '100%',
  },
  labelContainer: {
    alignItems: 'center',
    width: 108,
  },
  label: {
    fontSize: 13,
    fontWeight: '500',
    textAlign: 'center',
  },
});
