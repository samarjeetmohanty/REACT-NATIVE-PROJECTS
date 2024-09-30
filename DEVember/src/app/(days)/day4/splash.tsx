import { Button, StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import LottieView from "lottie-react-native";
import { Stack } from "expo-router";

const AnimationScreen = () => {
  const animation = useRef<LottieView>(null);
  return (
    <View style={styles.page}>
      <Stack.Screen options={{ headerShown: false }} />
      <LottieView
        autoPlay
        ref={animation}
        style={styles.animation}
        source={require("@assets/lottie/netflix.json")}
      />
    </View>
  );
};

export default AnimationScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
  },
  animation: {
    width: "80%",
    height: "30%",
    maxWidth: 400,
    maxHeight: 400,
  },
});
