import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialIcons, Octicons, MaterialCommunityIcons } from "@expo/vector-icons";

const RestaurantDetails = ({ restaurant }) => {
  return (
    <View style={styles.restaurantInfoSection}>
      <View style={styles.restaurantDetails}>
        <Text style={styles.restaurantName}>{restaurant.name}</Text>
        <View style={styles.detailRow}>
          <MaterialIcons name="restaurant" size={20} color="#595a5f" />
          <Text style={styles.restaurantAddress}>Near, {restaurant.address}</Text>
        </View>
        <View style={styles.detailRow}>
          <Octicons name="clock" size={20} color="#595a5f" />
          <Text style={styles.restaurantTime}>{restaurant.time} mins</Text>
          <Text style={[styles.restaurantTime, styles.home]}>Home</Text>
        </View>
        <View style={styles.detailRow}>
          <MaterialCommunityIcons name="bike-fast" size={24} color="#595a5f" />
          <Text style={styles.deliveryDistance}>0-3 Kms |</Text>
          <Text style={styles.deliveryFee}>35 Delivery Fee will Apply</Text>
        </View>
        <Text style={styles.cuisineText}>{restaurant.cuisines}</Text>
      </View>

      {/* Restaurant Rating */}
      <View style={styles.ratingSection}>
        <View style={styles.ratingContainer}>
          <MaterialIcons name="stars" size={20} color="white" />
          <Text style={styles.ratingText}>{restaurant.rating}</Text>
        </View>
        <Text style={styles.ratingCount}>{restaurant.ratingsCount} ratings</Text>
      </View>
    </View>
  );
};

export default RestaurantDetails;

const styles = StyleSheet.create({
  restaurantInfoSection: {
    margin: 10,
    borderRadius: 20,
    backgroundColor: "#ffffff",
    flexDirection: "row",
    alignItems: "center",
  },
  restaurantDetails: {
    flex: 1,
    padding: 16,
  },
  restaurantName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  restaurantAddress: {
    color: "#595a5f",
    marginLeft: 8,
  },
  restaurantTime: {
    color: "#595a5f",
    marginLeft: 8,
  },
  home: {
    color: "black",
    fontWeight: "bold",
    marginLeft: 10,
  },
  deliveryDistance: {
    color: "#595a5f",
  },
  deliveryFee: {
    color: "#595a5f",
  },
  cuisineText: {
    color: "#595a5f",
    marginTop: 4,
  },
  ratingSection: {
    marginBottom: "auto",
    padding: 16,
  },
  ratingContainer: {
    borderRadius: 10,
    paddingVertical: 8,
    backgroundColor: "#146348",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  ratingText: {
    color: "white",
    fontWeight: "bold",
  },
  ratingCount: {
    color: "#cbcbcb",
    fontSize: 12,
    marginTop: 5,
  },
});
