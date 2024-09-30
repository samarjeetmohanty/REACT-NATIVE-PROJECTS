import { Button, StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import LottieView from "lottie-react-native";
import { Stack } from "expo-router";

const AnimatedSplashScreen = ({
  onAnimationStart = () => {},
  onAnimationFinish = (isCancelled) => {},
}: {
  onAnimationStart?: () => void;
  onAnimationFinish?: (isCancelled: boolean) => void;
}) => {
  const animation = useRef<LottieView>(null);

  // ! UseEffect to hide native splash screen when Lottie animation is ready to start
  useEffect(() => {
    if (animation.current) {
      // * Call the onAnimationStart function before Lottie starts
      onAnimationStart();
    }
  }, []);
  return (
    <View style={styles.page}>
      <StatusBar backgroundColor={"black"} barStyle={"light-content"} />
      <LottieView
        ref={animation}
        onAnimationFinish={onAnimationFinish}
        loop={false}
        autoPlay
        style={styles.animation}
        source={require("@assets/lottie/netflix.json")}
      />
    </View>
  );
};

export default AnimatedSplashScreen;

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
