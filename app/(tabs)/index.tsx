import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function HomeScreen() {
  const onGetStarted = () => {
    console.log("Get Started pressed");
  };

  return (
    <LinearGradient
      colors={["#0f2027", "#203a43", "#2c5364"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradient}
    >
      <View style={styles.centerWrap}>
        <ThemedView style={styles.card}>
          <ThemedText type="title" style={styles.title}>
            Grok Mobile App 🚀
          </ThemedText>

          <ThemedText type="subtitle" style={styles.subtitle}>
            Home Screen
          </ThemedText>

          <ThemedText style={styles.description}>
            Welcome to your Expo-powered app
          </ThemedText>

          <Pressable
            onPress={onGetStarted}
            style={({ pressed }) => [
              styles.button,
              pressed && styles.buttonPressed,
            ]}
          >
            <ThemedText style={styles.buttonText}>
              Get Started
            </ThemedText>
          </Pressable>
        </ThemedView>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    padding: 20,
  },

  centerWrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  card: {
    width: "100%",
    maxWidth: 420,
    borderRadius: 22,
    paddingVertical: 26,
    paddingHorizontal: 22,

    backgroundColor: "rgba(255,255,255,0.12)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.18)",
  },

  title: {
    textAlign: "center",
    marginBottom: 8,
    fontSize: 26,
    lineHeight: 30,
    fontWeight: "800",
  },

  subtitle: {
    textAlign: "center",
    opacity: 0.9,
    marginBottom: 10,
  },

  description: {
    textAlign: "center",
    opacity: 0.75,
    marginTop: 6,
  },

  button: {
    marginTop: 18,
    alignSelf: "center",
    borderRadius: 999,
    paddingVertical: 12,
    paddingHorizontal: 28,
    backgroundColor: "#4F46E5",
  },

  buttonPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },

  buttonText: {
    color: "white",
    fontWeight: "700",
  },
});
