import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  decrementItemQuantity,
  incrementItemQuantity,
} from "../../redux/slices/cartSlice";

import Entypo from "@expo/vector-icons/Entypo";

const MenuItem = ({ product, restaurantName }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItemToCart({ ...product, restaurantName }));
  };

  const handleIncrement = () => {
    dispatch(incrementItemQuantity({ id: product.id }));
  };

  const handleDecrement = () => {
    dispatch(decrementItemQuantity({ id: product.id }));
  };

  const cartItem = useSelector((state) =>
    state.cart.items.find((item) => item.id === product.id)
  );

  return (
    <View style={styles.menuItemContainer}>
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productPrice}>₹ {product.price}</Text>
        <Text style={styles.productDescription} numberOfLines={2}>
          {product.description}
        </Text>
        <StarRating rating={product.rating} />
      </View>
      <View style={styles.productImageContainer}>
        <Image source={{ uri: product.image }} style={styles.productImage} />

        {cartItem ? (
          <View style={[styles.addButton, styles.quantityContainer]}>
            <Entypo
              name="minus"
              size={20}
              color="#018749"
              onPress={handleDecrement}
            />
            <Text style={styles.addButtonText}>{cartItem.quantity}</Text>
            <Entypo
              name="plus"
              size={20}
              color="#018749"
              onPress={handleIncrement}
            />
          </View>
        ) : (
          <Pressable onPress={handleAddToCart} style={styles.addButton}>
            <Text style={styles.addButtonText}>ADD</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating); // Integer part
  const hasHalfStar = rating % 1 !== 0; // Check for half star
  const emptyStars = 5 - Math.ceil(rating); // Total 5 stars minus full and half

  return (
    <View style={styles.ratingContainer}>
      {Array(fullStars)
        .fill()
        .map((_, index) => (
          <MaterialIcons
            key={`full-${index}`}
            name="star"
            size={20}
            color="#FFD700"
          />
        ))}
      {hasHalfStar && (
        <MaterialIcons name="star-half" size={20} color="#FFD700" />
      )}
      {Array(emptyStars)
        .fill()
        .map((_, index) => (
          <MaterialIcons
            key={`empty-${index}`}
            name="star-border"
            size={20}
            color="#FFD700"
          />
        ))}
      <Text style={styles.ratingText}>({rating})</Text>
    </View>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  menuItemContainer: {
    marginVertical: 10,
    flexDirection: "row",
    padding: 10,
    marginBottom: 30,
  },
  productInfo: {
    flex: 1,
    paddingRight: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  productPrice: {
    fontSize: 14,
    fontWeight: "600",
    marginVertical: 4,
    color: "#333",
  },
  productDescription: {
    fontSize: 12,
    color: "#666",
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  ratingText: {
    color: "#018749",
    marginLeft: 10,
    fontWeight: "600",
  },
  productImageContainer: {
    position: "relative",
  },
  productImage: {
    width: 140,
    aspectRatio: 1,
    borderRadius: 15,
  },
  addButton: {
    position: "absolute",
    alignSelf: "center",
    backgroundColor: "white",
    bottom: -15,
    paddingHorizontal: 35,
    paddingVertical: 8,
    borderRadius: 10,

    // shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,

    borderColor: "#c3c2c5",
    borderWidth: 1,
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#018749",
  },
  quantityContainer: {
    flexDirection: "row",
    paddingHorizontal: 15,
    gap: 20,
    alignItems: "center",
  },
});
