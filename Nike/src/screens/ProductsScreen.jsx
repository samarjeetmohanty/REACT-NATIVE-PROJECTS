import { FlatList, Image, StyleSheet, View } from "react-native";
import React from "react";
import products from "../data/products";

const ProductsScreen = () => {
  return (
    <FlatList
      data={products}
      numColumns={2}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Image source={{ uri: item.image }} style={styles.image} />
        </View>
      )}
    />
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  itemContainer: {
    width: "50%",
    padding: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});
