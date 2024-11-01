import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons, Fontisto, Entypo } from "@expo/vector-icons";
import RestaurantDetails from "./RestaurantDetails";

const HeaderComponent = ({ restaurant, onBackPress }) => {
  return (
    <View style={styles.headerWrapper}>
      <View style={styles.headerContainer}>
        <View style={styles.headerActions}>
          <Ionicons
            name="arrow-back"
            size={24}
            color="#595a5f"
            style={styles.headerIcon}
            onPress={onBackPress}
          />
          <Fontisto
            name="heart-alt"
            size={24}
            color="#595a5f"
            style={styles.favoriteIcon}
          />
          <Entypo name="share" size={24} color="#595a5f" />
        </View>
        {/* Restaurant Details */}
        <RestaurantDetails restaurant={restaurant} />
      </View>
      <Text style={styles.menuText}>MENU</Text>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  headerWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: "#cbcbcb",
  },
  headerContainer: {
    backgroundColor: "#e3e4e9",
    paddingBottom: 10,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerActions: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  headerIcon: {
    flex: 1,
  },
  favoriteIcon: {
    paddingHorizontal: 20,
  },
  menuText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    padding: 10,
  },
});
