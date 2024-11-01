// FoodTypes.js

import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import foodTypes from "../../data/FoodTypesData";

// Renders Food Type Categories as Scrollable Items
const FoodTypes = () => (
  <View style={styles.foodTypesContainer}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {foodTypes.map((item) => (
        <FoodTypeItem key={item.id} item={item} />
      ))}
    </ScrollView>
  </View>
);

// Renders Individual Food Type Item
const FoodTypeItem = ({ item }) => (
  <View style={styles.foodTypeItemContainer}>
    <Image source={{ uri: item.image }} style={styles.foodImage} />
    <Text style={styles.foodName}>{item.name}</Text>
  </View>
);

export default FoodTypes;

const styles = StyleSheet.create({
  foodTypesContainer: {
    marginVertical: 10,
  },
  foodTypeItemContainer: {
    marginRight: 10,
    alignItems: "center",
  },
  foodImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  foodName: {
    marginTop: 6,
    color: "gray",
  },
});
