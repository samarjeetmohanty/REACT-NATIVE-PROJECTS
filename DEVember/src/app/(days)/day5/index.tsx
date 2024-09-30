import { View, Text, Pressable, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import Markdown from "react-native-markdown-display";

const description = `
# AirBNB Maps
How to build the AIRBNB map with React native and expo 
- Use maps in react native
- Render custom marker on the map
- Use a bottom sheet to render list of items
`;

const DayDetailsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: "Day 4: Maps" }} />

      <Markdown>{description}</Markdown>

      <View>
        <Link href="/day5/airbnb" asChild>
          <Pressable style={styles.onboardingButton}>
            <Text style={styles.btnText}>AirBNB Maps</Text>
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
