import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import CartListItem from "../components/CartListItem";

import cart from "../data/cart";

const ShoppingCartTotals = () => (
  <View style={styles.totalsContainer}>
    <View style={styles.row}>
      <Text style={styles.text}>Subtotal</Text>
      <Text style={styles.text}>₹ 4000</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.text}>Delivery</Text>
      <Text style={styles.text}>₹ 100</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.textBold}>Grand Total</Text>
      <Text style={styles.textBold}>₹ 4100</Text>
    </View>
  </View>
);

const ShoppingCart = () => {
  return (
    <>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={cart}
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
