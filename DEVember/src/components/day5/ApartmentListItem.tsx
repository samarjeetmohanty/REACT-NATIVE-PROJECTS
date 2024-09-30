import { StyleSheet, Text, View, Image, ViewStyle } from "react-native";
import React from "react";
import apartment from "../../app/(days)/day5/data/apartment.json";

type ApartmentListItem = {
  apartment: (typeof apartment)[0];
  containerStyle?: ViewStyle;
};

const ApartmentListItem = ({
  apartment,
  containerStyle,
}: ApartmentListItem) => {
  return (
    <View style={[styles.card, containerStyle]}>
      <Image style={styles.image} source={{ uri: apartment.image }} />
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{apartment.title}</Text>
        <Text style={styles.description}>
          Stay at this apartment for an affordable price
        </Text>

        <View style={styles.footer}>
          <Text style={styles.price}>₹ {apartment.price} night</Text>
          <Text style={styles.price}>
            ★ {apartment.rating} ({apartment.numberOfStars})
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ApartmentListItem;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",

    flexDirection: "row",
    borderRadius: 20,

    // position: "absolute",
    // bottom: 70,
    // left: 10,
    // right: 10,

    overflow: "hidden",
  },
  image: {
    width: 150,
    aspectRatio: 1,
  },
  rightContainer: {
    padding: 10,
    flex: 1,
  },
  title: {
    fontFamily: "InterBold",
    fontSize: 14,
    marginBottom: 5,
  },
  description: {
    fontSize: 11,
    color: "gray",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "auto",
  },
  price: {
    fontSize: 13,
    fontFamily: "InterBold",
  },
});
