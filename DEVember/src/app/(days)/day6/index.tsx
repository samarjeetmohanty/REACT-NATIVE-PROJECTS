import { View, Text, Pressable, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import Markdown from "react-native-markdown-display";

const description = `
# What will you learn?'
- Implement the Tinder Card
- Animate the card swipe 
- React native reanimated
`;

const DayDetailsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: "Day 6: Tinder" }} />

      <Markdown>{description}</Markdown>

      <View>
        <Link href="/day6/tinder" asChild>
          <Pressable style={styles.onboardingButton}>
            <Text style={styles.btnText}>Go to Tinder</Text>
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
