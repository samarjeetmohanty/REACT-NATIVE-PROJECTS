import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const DayDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Day 1" }} />
      <Text style={styles.headText}>Days Details Screens</Text>
    </View>
  );
};

export default DayDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9EDE3",
  },
  headText: {
    fontSize: 80,
    marginTop: 50,
    fontFamily: "AmaticBold",
    textAlign: "center",
  },
});
