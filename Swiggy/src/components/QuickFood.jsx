// QuickFood.js

import React from "react";
import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import QuickFoodData from "../data/QuickFoodData";

// Renders Quick Food Section with Image and Rating
const QuickFood = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Get it Quickly</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {QuickFoodData.map((item) => (
        <Pressable key={item.id} style={styles.imageContainer}>
          <ImageBackground
            source={{ uri: item.image }}
            style={styles.image}
            imageStyle={styles.imageStyle}
          >
            <Text style={styles.offer}>{item.offer} OFF</Text>
          </ImageBackground>
          <Text style={styles.name}>{item.name}</Text>
          <View style={styles.ratingContainer}>
            <MaterialIcons name="stars" size={24} color="green" />
            <Text style={styles.ratingText}>{item.rating}</Text>
            <Text style={styles.separator}>•</Text>
            <Text style={styles.ratingText}>{item.time} mins</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  </View>
);

export default QuickFood;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
  imageContainer: { margin: 10 },
  image: {
    height: 170,
    aspectRatio: 5 / 6,
  },
  imageStyle: { borderRadius: 10 },
  offer: {
    fontSize: 26,
    color: "white",
    fontWeight: "900",
    position: "absolute",
    bottom: 10,
    left: 10,
  },
  name: {
    marginTop: 10,
    fontWeight: "600",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 3,
  },
  ratingText: {
    marginLeft: 3,
    fontSize: 15,
    fontWeight: "400",
  },
  separator: { marginLeft: 3 },
});
