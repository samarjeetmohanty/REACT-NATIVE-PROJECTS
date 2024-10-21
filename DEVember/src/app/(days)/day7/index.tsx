import { View, Text, Pressable, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import Markdown from "react-native-markdown-display";

const description = `
#  Voice Memos App
Work with Microphone and Audio playback
What will you learn?
- Use Expo AV to  Record Audios
- Create an Audio Player
- (Attempt) to build an Audio Waveform animation
`;

const DayDetailsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: "Day 7: Voice Memos" }} />

      <Markdown>{description}</Markdown>

      <View>
        <Link href="/day7/memos" asChild>
          <TouchableOpacity style={styles.onboardingButton}>
            <Text style={styles.btnText}>Go to Memos</Text>
          </TouchableOpacity>
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
