import { View, Text, Pressable, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import Markdown from "react-native-markdown-display";

const description = `
## Animated Splash Screen
#
### What will you learn
1. Use Lottie animation in react native
2. Configure splash screen
3. Animate splash screen
`;

const DayDetailsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: "Day 4: Splash Screen" }} />

      <Markdown>{description}</Markdown>

      <View>
        <Link href="/day4/animation" asChild>
          <Pressable style={styles.onboardingButton}>
            <Text style={styles.btnText}>Go to animation</Text>
          </Pressable>
        </Link>

        <Link href="/day4/splash" asChild>
          <Pressable style={styles.onboardingButton}>
            <Text style={styles.btnText}>Splash Screen Animation</Text>
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default DayDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
  },

  onboardingButton: {
    height: 50,
    width: "100%",

    justifyContent: "center",
    alignItems: "center",

    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: "#9B4521",
  },
  btnText: {
    color: "#FFF",
    fontFamily: "InterBold",
    fontSize: 16,
  },
});
