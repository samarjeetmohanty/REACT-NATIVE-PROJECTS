import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";

import { clearCart } from "../redux/slices/cartSlice";

const LoadingScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(clearCart());
      navigation.replace("Order");
    }, 2000);
  });
  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <LottieView
        style={styles.thumbsAnimation}
        autoPlay
        loop={false}
        speed={0.7}
        source={require("../assets/thumbs.json")}
      />
      <Text style={styles.mainText}>Your order has been received</Text>
      <LottieView
        style={styles.thumbsAnimation}
        autoPlay
        loop={false}
        speed={0.7}
        source={require("../assets/sparkle.json")}
      />
    </SafeAreaView>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
  },
  thumbsAnimation: {
    width: 300,
    aspectRatio: 1,
    alignSelf: "center",
  },
  mainText: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
});
