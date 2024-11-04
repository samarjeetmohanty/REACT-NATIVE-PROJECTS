import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { Ionicons, Entypo, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementItemQuantity,
  incrementItemQuantity,
  selectTotalCost,
} from "../redux/slices/cartSlice";

const deliveryInstructions = [
  {
    id: "0",
    name: "Avoid Ringing",
    iconName: "bell",
  },
  {
    id: "1",
    name: "Leave at the door",
    iconName: "door-open",
  },
  {
    id: "2",
    name: "Directions to reach",
    iconName: "directions",
  },
  {
    id: "3",
    name: "Avoid Calling",
    iconName: "phone-alt",
  },
];

const CartScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  console.log("Cart Item :::", cartItems);
  const total = useSelector(selectTotalCost);

  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      {total > 0 ? (
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 50 }}
        >
          <View style={styles.headerContainer}>
            <Ionicons
              name="arrow-back"
              size={24}
              color="#595a5f"
              style={styles.headerIcon}
              onPress={() => navigation.goBack()}
            />
            <Text style={styles.restaurantTitle}>
              {cartItems.length > 0 && cartItems[0].restaurantName}
            </Text>
          </View>

          <View style={styles.contentContainer}>
            <View style={styles.orderForSomeoneContainer}>
              <Text style={styles.orderForSomeoneText}>
                Order for Someone else?
              </Text>
              <Text style={styles.addDetailsText}>Add Details</Text>
            </View>

            <View style={styles.cartItemsContainer}>
              {cartItems.map((item, index) => (
                <View key={index} style={styles.cartItemRow}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <View style={styles.quantityContainer}>
                    <Pressable
                      onPress={() => dispatch(decrementItemQuantity(item))}
                    >
                      <Entypo name="minus" size={20} color="#018749" />
                    </Pressable>
                    <Text style={styles.quantityText}>{item.quantity}</Text>
                    <Pressable
                      onPress={() => dispatch(incrementItemQuantity(item))}
                    >
                      <Entypo name="plus" size={20} color="#018749" />
                    </Pressable>
                  </View>
                  <Text style={styles.itemPrice}>
                    ₹{item.quantity * item.price}
                  </Text>
                </View>
              ))}
            </View>

            <Text style={styles.deliveryInstructionsTitle}>
              Delivery Instructions
            </Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.instructionsContainer}
            >
              {deliveryInstructions.map((instruction) => (
                <View key={instruction.id} style={styles.instructionItem}>
                  <FontAwesome5
                    name={instruction.iconName}
                    size={22}
                    color={"gray"}
                    style={styles.instructionIcon}
                  />
                  <Text style={styles.instructionText}>{instruction.name}</Text>
                </View>
              ))}
            </ScrollView>

            <Text style={styles.deliveryInstructionsTitle}>
              Billing Details
            </Text>
            <View style={styles.billingDetailsContainer}>
              <View style={styles.billingRow}>
                <Text style={styles.billingText}>Item Total</Text>
                <Text style={styles.billingAmount}>₹{total}</Text>
              </View>

              <View style={styles.billingRow}>
                <Text style={styles.billingText}>Delivery Fee | 1.2 Kms</Text>
                <Text style={styles.freeDeliveryText}>FREE</Text>
              </View>

              <Text style={styles.freeDeliveryNotice}>
                Free Delivery on Your order
              </Text>
              <View style={styles.divider} />

              <View style={styles.billingRow}>
                <Text style={styles.billingText}>Delivery Tip</Text>
                <Text style={styles.addTipText}>Add Tip</Text>
              </View>

              <View style={styles.billingRow}>
                <Text style={styles.billingText}>Taxes and Charges</Text>
                <Text style={styles.addTipText}>₹95</Text>
              </View>

              <View style={styles.divider} />

              <View style={styles.billingRow}>
                <Text style={styles.totalText}>To Pay</Text>
                <Text style={styles.totalAmount}>₹{total + 95}</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      ) : (
        <View style={styles.emptyCartContainer}>
          <Text style={styles.emptyCartText}>Your Cart is Empty</Text>
        </View>
      )}

      {total > 0 && (
        <View style={styles.paymentContainer}>
          <View style={styles.paymentDetailsContainer}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              ₹{total + 95}
            </Text>
            <Text style={styles.viewBillText}>View Detailed Bill</Text>
          </View>
          <Pressable
            onPress={() => navigation.navigate("Loading")}
            style={styles.proceedButton}
          >
            <Text style={styles.proceedButtonText}>Proceed to Pay</Text>
          </Pressable>
        </View>
      )}
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e3e4e9",
  },
  scrollView: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 15,
    gap: 20,
  },
  headerIcon: {
    marginRight: 10,
  },
  restaurantTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  contentContainer: {
    marginHorizontal: 10,
  },
  orderForSomeoneContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "space-between",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  orderForSomeoneText: {
    fontSize: 16,
    fontWeight: "500",
  },
  addDetailsText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FF4500",
  },
  cartItemsContainer: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  cartItemRow: {
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemName: {
    fontSize: 16,
    flex: 2,
  },
  quantityContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#c3c2c5",
    borderWidth: 0.5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2.5,
    elevation: 5,
    gap: 10,
  },
  quantityText: {
    color: "#018749",
    fontSize: 16,
    fontWeight: "600",
  },
  itemPrice: {
    flex: 1,
    fontSize: 16,
    textAlign: "right",
  },
  deliveryInstructionsTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  instructionsContainer: {
    marginVertical: 10,
  },
  instructionItem: {
    width: 100,
    padding: 10,
    marginRight: 10,
    borderRadius: 10,
    backgroundColor: "white",
  },
  instructionIcon: {
    marginBottom: 5,
  },
  instructionText: {
    flexWrap: "wrap",
    color: "#383838",
    fontSize: 13,
  },
  emptyCartContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyCartText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FF4500",
  },
  billingDetailsContainer: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  billingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
  },
  billingText: {
    fontSize: 15,
    fontWeight: "400",
    color: "gray",
  },
  addTipText: {
    color: "#FF4500",
  },
  billingAmount: {
    fontSize: 15,
    fontWeight: "bold",
  },
  freeDeliveryText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#FF4500",
  },
  freeDeliveryNotice: {
    marginTop: 5,
    fontSize: 13,
    color: "gray",
  },
  divider: {
    height: 1,
    backgroundColor: "lightgray",
    marginVertical: 5,
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: "bold",
  },
  paymentContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 15,

    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  paymentDetailsContainer: {
    flex: 1,
  },
  viewBillText: {
    color: "#FF4500",
  },
  proceedButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#018749",
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  proceedButtonText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
});
