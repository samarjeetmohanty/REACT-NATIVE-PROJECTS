import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

const DayDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Day 2: Onboarding" }} />

      <Link href="/day2/onboarding" asChild>
        <Pressable style={styles.onboardingButton}>
          <Text style={styles.btnText}>Go to Onboarding Screen</Text>
        </Pressable>
      </Link>
    </View>
  );
};

export default DayDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  onboardingButton: {
    height: 50,
    width: 300,

    justifyContent: "center",
    alignItems: "center",

    margin: 40,
    borderRadius: 10,
    backgroundColor: "#9B4521",
  },
  btnText: {
    color: "#FFF",
    fontFamily: "InterBold",
    fontSize: 16,
  },
});
