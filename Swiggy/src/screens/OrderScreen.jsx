import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import { FontAwesome5 } from "@expo/vector-icons";

const OrderScreen = () => {
  const [mapRegion, setMapRegion] = useState({
    latitude: 22.226144,
    longitude: 84.864611,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [coordinates] = useState([
    { latitude: 22.2273, longitude: 84.852 },
    { latitude: 22.2325, longitude: 84.881 },
  ]);

  const [selectedTip, setSelectedTip] = useState(50); // Default to ₹50
  const tipOptions = [10, 30, 50, 70]; // Tip amounts

  const orderTime = "2:20 PM"; // Example time

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Delivery in 20-30 mins</Text>
          <Text style={styles.headerText}>Order Placed at {orderTime}</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.helpText}>HELP</Text>
        </TouchableOpacity>
      </View>

      {/* Map Container */}
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          region={mapRegion}
          initialRegion={mapRegion}
        >
          <Marker coordinate={coordinates[0]} />
          <Marker coordinate={coordinates[1]} />
          <Polyline
            coordinates={coordinates}
            strokeColor="#FF4500"
            strokeWidth={3}
          />
        </MapView>
      </View>

      {/* Order Status */}
      <View style={styles.statusContainer}>
        <Text style={styles.statusText}>
          Food Court has accepted your order
        </Text>

        {/* Tip Section */}
        <View style={styles.tipContainer}>
          <FontAwesome5 name="hand-holding-heart" size={28} color="#fc8019" />
          <View style={styles.tipTextContainer}>
            <Text style={styles.tipTitle}>Tip your hunger Saviour</Text>
            <Text style={styles.tipDescription}>
              Thank your delivery partner for helping you stay safe indoors.
              Support them through these tough times with a tip.
            </Text>
          </View>
        </View>

        {/* Tip Options */}
        <View style={styles.tipOptionsContainer}>
          {tipOptions.map((amount) => (
            <TouchableOpacity
              key={amount}
              style={[
                styles.tipOptionButton,
                selectedTip === amount && styles.selectedTipButton,
              ]}
              onPress={() => setSelectedTip(amount)}
            >
              <Text style={styles.tipOptionText}>₹{amount}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Payment Instruction */}
        <Text style={styles.paymentInstruction}>
          Please pay ₹{selectedTip} to your delivery agent at the time of
          delivery.
        </Text>
      </View>
    </View>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  header: {
    flexDirection: "row",
    backgroundColor: "#FF4500",
    paddingTop: 35,
    paddingHorizontal: 15,
    paddingBottom: 20,
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 3,
  },
  headerTextContainer: {
    flex: 1,
  },
  headerText: {
    fontSize: 16,
    color: "white",
    fontWeight: "600",
  },
  helpText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  mapContainer: {
    width: "100%",
    height: "50%",
    alignSelf: "center",
    overflow: "hidden",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  statusContainer: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 15,
    marginHorizontal: 10,
    marginVertical: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  statusText: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "500",
    marginBottom: 15,
    color: "#333",
  },
  tipContainer: {
    flexDirection: "row",
    paddingVertical: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  tipTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  tipTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  tipDescription: {
    fontSize: 14,
    color: "#666",
  },
  tipOptionsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
  },
  tipOptionButton: {
    backgroundColor: "#FF4500",
    borderRadius: 25,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginHorizontal: 5,
    elevation: 2,
  },
  selectedTipButton: {
    backgroundColor: "#fc8019",
  },
  tipOptionText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  paymentInstruction: {
    fontSize: 14,
    color: "#333",
    textAlign: "center",
    marginTop: 15,
    fontWeight: "500",
  },
});
