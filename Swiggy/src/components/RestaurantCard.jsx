import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const RestaurantCard = ({ restaurant }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate("Menu", { restaurant })}
      style={styles.container}
    >
      <ImageBackground
        source={{ uri: restaurant.image }}
        style={styles.image}
        imageStyle={styles.imageBorder}
      >
        <MaterialCommunityIcons
          name="heart-outline"
          size={24}
          color="white"
          style={styles.heartIcon}
        />
      </ImageBackground>

      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={2}>
          {restaurant.name}
        </Text>

        <View style={styles.ratingRow}>
          <MaterialIcons name="stars" size={24} color="green" />
          <Text style={styles.ratingText}>
            {restaurant.rating} ({restaurant.ratingsCount})
          </Text>
          <View style={styles.separator} />
          <Text style={styles.ratingText}>{restaurant.time} mins</Text>
        </View>

        <Text style={styles.address} numberOfLines={2}>
          {restaurant.address}
        </Text>

        <View style={styles.priceRow}>
          <View style={styles.priceBadge}>
            <Text style={styles.priceSymbol}>₹</Text>
          </View>
          <Text style={styles.costForTwo}>{restaurant.costForTwo} for two</Text>
        </View>

        <View style={styles.deliveryRow}>
          <MaterialCommunityIcons name="bike-fast" size={24} color="gray" />
          <Text style={styles.deliveryText}>FREE DELIVERY</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: "row",
    gap: 10,
  },
  image: {
    height: 170,
    aspectRatio: 5 / 6,
  },
  imageBorder: {
    borderRadius: 10,
  },
  heartIcon: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  content: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 3,
  },
  ratingText: {
    fontSize: 15,
    fontWeight: "400",
    marginHorizontal: 3,
  },
  separator: {
    backgroundColor: "black",
    height: 4,
    width: 4,
    borderRadius: 2,
    marginHorizontal: 3,
  },
  address: {
    marginTop: 6,
    fontSize: 14,
    color: "gray",
  },
  priceRow: {
    flexDirection: "row",
    marginTop: 6,
    gap: 5,
    alignItems: "center",
  },
  priceBadge: {
    backgroundColor: "#FFB6C1",
    height: 24,
    width: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  priceSymbol: {
    fontSize: 13,
    fontWeight: "bold",
    color: "white",
  },
  costForTwo: {
    fontSize: 13,
    fontWeight: "500",
  },
  deliveryRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "auto",
    gap: 5,
  },
  deliveryText: {
    fontSize: 13,
    fontWeight: "bold",
    color: "gray",
  },
});
