import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderComponent from "../components/MenuScreen/HeaderComponent";

const CartScreen = () => {
  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,

  },
});
