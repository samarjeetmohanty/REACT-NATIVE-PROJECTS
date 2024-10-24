import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/actions/Actions";

const Product = ({ item }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartReducer);

  // * Check if item is already in the cart
  const isInCart = cartItems.some((cartItem) => cartItem.id === item.id);

  const handleAddOrRemoveCart = () => {
    if (isInCart) {
      // ! Remove if already in cart
      dispatch(removeFromCart(item.id));
    } else {
      // ! Add if not in cart
      dispatch(addToCart(item));
    }
  };

  return (
    <View style={styles.productContainer}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.detailsContainer}>
        <Text style={styles.productName}>{item.name}</Text>
        <View style={styles.productFooter}>
          <Text style={styles.productPrice}>₹ {item.price}</Text>
          <Pressable
            onPress={handleAddOrRemoveCart}
            style={styles.addToCartButton}
          >
            <Text style={styles.addToCartText}>
              {isInCart ? "Remove from cart" : "Add to cart"}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  productContainer: {
    flexDirection: "row",
    padding: 12,
    borderColor: "gray",
    borderWidth: 0.5,
  },
  productImage: {
    width: 120,
    aspectRatio: 1,
    borderRadius: 10,
  },
  detailsContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  productFooter: {
    marginTop: "auto",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  productPrice: {
    fontSize: 13,
    color: "gray",
    fontWeight: "bold",
  },
  addToCartButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
  },
  addToCartText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    // fontSize: 12,
  },
});
