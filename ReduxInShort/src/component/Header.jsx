import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";

// Icons
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((state) => state.cartReducer);
  return (
    <View style={styles.headerContainer}>
      <StatusBar barStyle={"default"} />
      <View style={styles.titleContainer}>
        <AntDesign name="home" size={24} color="white" />
        <Text style={styles.titleText}>Product List</Text>
      </View>
      <View style={styles.cartContainer}>
        <Feather name="shopping-cart" size={24} color="white" />
        <View style={styles.badgeContainer}>
          <Text style={styles.cartText}>{cartItems.length}</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "black",
    flexDirection: "row",
    alignItems: "center",

    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  titleContainer: {
    flex: 1,
    gap: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  titleText: {
    color: "white",
    fontSize: 20,
  },
  cartContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    // paddingVertical: 3,
  },
  badgeContainer: {
    top: -15,
    right: -5,
    minWidth: 20,
    borderRadius: 20,
    paddingVertical: 2,
    paddingHorizontal: 5,
    position: "absolute",
    backgroundColor: "red",
    alignItems: "center",
  },
  cartText: {
    fontSize: 12,
    color: "white",
    fontWeight: "bold",
  },
});
