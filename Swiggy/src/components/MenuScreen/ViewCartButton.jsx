// ViewCartButton.js

import React from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const ViewCartButton = ({ numberOfItem, total, onPress }) => (
  <Pressable onPress={onPress} style={styles.viewCartButton}>
    <Text style={styles.itemsAddedText}>
      {numberOfItem} {numberOfItem > 1 ? "items" : "item"} added | {total}
    </Text>
    <View style={styles.cartIconContainer}>
      <Text style={styles.viewCartText}>View Cart</Text>
      <MaterialIcons name="keyboard-arrow-right" size={25} color="#FFF" />
    </View>
  </Pressable>
);

export default ViewCartButton;

const styles = StyleSheet.create({
  viewCartButton: {
    backgroundColor: "#1da772",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    margin: 10,
    padding: 15,
    borderRadius: 15,
  },
  itemsAddedText: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  cartIconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  viewCartText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
});
