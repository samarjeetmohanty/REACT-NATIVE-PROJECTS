import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Marker } from "react-native-maps";

import apartment from "../../app/(days)/day5/data/apartment.json";

type CustomMarker = {
  apartment: (typeof apartment)[0];
  onPress: () => void;
  isSelected: boolean;
};
const CustomMarker = ({ apartment, isSelected, onPress }: CustomMarker) => {
  return (
    <Marker
      onPress={onPress}
      coordinate={{
        latitude: apartment.latitude,
        longitude: apartment.longitude,
      }}
      key={apartment.id}
    >
      <View
        style={[
          styles.markerContainer,
          isSelected && { backgroundColor: "#FFD700", borderColor: "#FFD700" }, // Highlight selected marker
        ]}
      >
        <Text>₹ {apartment.price}</Text>
      </View>
    </Marker>
  );
};

export default CustomMarker;

const styles = StyleSheet.create({
  markerContainer: {
    backgroundColor: "#fff",
    borderColor: "grey",
    borderWidth: 1,
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
});
