// ! TOPIC --> MARKDOWN
// ! ==============================================================================================
// ? Where would we need Markdown ?
// * - Privacy Policy
// * - FAQ
// * - About Us
// * - Heavy Text Content Pages
// ! ==============================================================================================

import { View, Text, Pressable, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import Markdown from "react-native-markdown-display";

const description = `
# Markdown

Integrate Markdown content in **React Native**

📚 Today's Agenda:
- Introduction to Markdown
- Markdown Syntax Overview
- Setting Up React Native for Markdown
- Implementing Markdown Rendering
- Styling Markdown Content
- Using Markdown in React Native Components
- Recap and Q&A Session
`;

const DayDetailsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: "Day 3: Markdown" }} />

      <Markdown>{description}</Markdown>
      <Link href="/day3/editor" asChild>
        <Pressable style={styles.onboardingButton}>
          <Text style={styles.btnText}>Go to Editor Screen</Text>
        </Pressable>
      </Link>
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

    borderRadius: 10,
    backgroundColor: "#9B4521",
  },
  btnText: {
    color: "#FFF",
    fontFamily: "InterBold",
    fontSize: 16,
  },
});
