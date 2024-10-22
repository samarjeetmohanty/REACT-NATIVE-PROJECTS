import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FlatList, Image, Pressable, StyleSheet } from "react-native";
import { productsSlice } from "../store/productsSlice";

const ProductsScreen = ({ navigation }) => {
  // ! Getting global data from redux
  const products = useSelector((state) => state.products.products);

  const dispatch = useDispatch();
  return (
    <FlatList
      data={products}
      numColumns={2}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            // ! update selected product
            dispatch(productsSlice.actions.setSelectedProduct(item.id));

            navigation.navigate("Product Details");
          }}
          style={styles.itemContainer}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
        </Pressable>
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
