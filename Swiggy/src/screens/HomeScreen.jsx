// HomeScreen.js

import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";

import Ionicons from "@expo/vector-icons/Ionicons";
import ImageCarousel from "../components/HomeScreen/Carousel";
import FoodTypes from "../components/HomeScreen/FoodTypes";
import QuickFood from "../components/HomeScreen/QuickFood";
import RestaurantCard from "../components/HomeScreen/RestaurantCard";

// ! Restaurant Data
import RestaurantsData from "../data/RestaurantsData";
import { SafeAreaView } from "react-native-safe-area-context";

// ! header section -> image carousel, foods, filter options
const HeaderComponent = () => {
  return (
    <View style={styles.headerContainer}>
      {/* Image Carousel */}
      <ImageCarousel />

      {/* Food Categories */}
      <FoodTypes />

      {/* Quick Food Section */}
      <QuickFood />

      {/* Filter and Sort Buttons */}
      <ScrollView
        horizontal
        style={styles.buttonContainer}
        showsHorizontalScrollIndicator={false}
      >
        {filterSortOptions.map((option) => (
          <Pressable key={option.id} style={styles.button}>
            <Text style={styles.buttonText}>{option.label}</Text>
            {option.icon && (
              <Ionicons
                name={option.icon}
                size={20}
                color="black"
                style={styles.iconSpacing}
              />
            )}
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          cursorColor={COLORS.primary}
          style={styles.searchInput}
          placeholder="Search for restaurant item or more"
        />
        <Ionicons name="search-outline" size={24} color={COLORS.primary} />
      </View>

      <FlatList
        ListHeaderComponent={HeaderComponent}
        data={RestaurantsData}
        key={(item) => item.id.toString()}
        renderItem={({ item }) => <RestaurantCard restaurant={item} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const filterSortOptions = [
  { id: 1, label: "Filter", icon: "filter" },
  { id: 2, label: "Sort By Rating", icon: null },
  { id: 3, label: "Sort By Price", icon: null },
];

const COLORS = {
  primary: "#E52B50",
  border: "#C0C0C0",
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  searchContainer: {
    borderWidth: 1,
    margin: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    borderColor: COLORS.border,
    borderRadius: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    fontWeight: "bold",
  },
  headerContainer: {
    marginHorizontal: 10,
  },
  buttonContainer: {},
  button: {
    borderWidth: 1,
    marginRight: 10,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderColor: COLORS.border,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: { fontSize: 14 },
  iconSpacing: { marginLeft: 10 },
});
