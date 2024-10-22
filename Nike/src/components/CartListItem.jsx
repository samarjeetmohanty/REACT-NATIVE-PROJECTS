import { Image, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
const CartListItem = ({ cartItem }) => {
  const increaseQuantity = () => {};
  const decreaseQuantity = () => {};
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: cartItem.product.image }} />
      <View style={styles.contentContainer}>
        <Text style={styles.name}>{cartItem.product.name}</Text>
        <Text style={styles.size}>Size {cartItem.size}</Text>

        <View style={styles.footer}>
          <Feather
            onPress={increaseQuantity}
            name="minus-circle"
            size={24}
            color="gray"
          />
          <Text style={styles.quantity}>{cartItem.quantity}</Text>
          <Feather
            onPress={decreaseQuantity}
            name="plus-circle"
            size={24}
            color="gray"
          />
          <Text style={styles.itemTotal}>₹320.0</Text>
        </View>
      </View>
    </View>
  );
};

export default CartListItem;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
  },
  image: {
    width: "40%",
    aspectRatio: 1,
  },
  contentContainer: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "500",
  },
  size: {
    fontSize: 16,
    color: "gray",
  },
  footer: {
    marginTop: "auto",
    flexDirection: "row",
    alignItems: "center",
  },
  quantity: {
    marginHorizontal: 10,
    fontWeight: "bold",
    color: "gray",
  },
  itemTotal: {
    fontSize: 16,
    fontWeight: "500",
    marginLeft: "auto",
  },
});
