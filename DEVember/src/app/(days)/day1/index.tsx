import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const DayDetailsScreen = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Day 1" }} />
      <Text style={{ fontFamily: "AmaticBold", fontSize: 100 }}>
        DayDetailsScreen
      </Text>
    </View>
  );
};

export default DayDetailsScreen;

const styles = StyleSheet.create({});
