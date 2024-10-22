import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import CartListItem from "../components/CartListItem";

import { useSelector } from "react-redux";
import {
  selectDeliveryPrice,
  selectSubtotal,
  selectTotal,
} from "../store/cartSlice";

const ShoppingCartTotals = () => {
  const subTotal = useSelector(selectSubtotal);
  const deliveryFee = useSelector(selectDeliveryPrice);
  const total = useSelector(selectTotal);
  return (
    <View style={styles.totalsContainer}>
      <View style={styles.row}>
        <Text style={styles.text}>Subtotal</Text>
        <Text style={styles.text}>₹ {subTotal}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Delivery</Text>
        <Text style={styles.text}>₹ {deliveryFee}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textBold}>Grand Total</Text>
        <Text style={styles.textBold}>₹ {total}</Text>
      </View>
    </View>
  );
};

const ShoppingCart = () => {
  // ! Getting data from redux
  const cartItem = useSelector((state) => state.cart.items);
  return (
    <>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={cartItem}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={ShoppingCartTotals}
      />

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Checkout</Text>
      </Pressable>
    </>
  );
};
export default ShoppingCart;

const styles = StyleSheet.create({
  totalsContainer: {
    margin: 20,
    borderColor: "gainsboro",
    borderTopWidth: 1,
    paddingTop: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
  },
  text: {
    fontSize: 16,
    color: "gray",
  },
  textBold: {
    fontSize: 16,
    fontWeight: "500",
  },
  button: {
    bottom: 30,
    padding: 20,
    borderRadius: 100,
    position: "absolute",
    backgroundColor: "black",
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
});
