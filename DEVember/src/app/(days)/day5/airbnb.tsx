import { StyleSheet, Text, View } from "react-native";
import React, { useMemo, useState } from "react";
import MapView from "react-native-maps";
import { Stack } from "expo-router";
import apartments from "./data/apartment.json";
import CustomMarker from "@/components/day5/CustomMarker";
import ApartmentListItem from "@/components/day5/ApartmentListItem";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";

const AirbnbScreen = () => {
  type Apartment = (typeof apartments)[0];

  const [selectedApartment, setSelectedApartment] = useState<Apartment | null>(
    null
  );

  const [mapRegion, setMapRegion] = useState({
    latitude: 22.226144,
    longitude: 84.864611,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const snapPoints = useMemo(() => [70, "50%", "90%"], []);

  // Memoize markers to prevent re-rendering
  const markers = useMemo(
    () =>
      apartments.map((apartment) => (
        <CustomMarker
          key={apartment.id}
          apartment={apartment}
          onPress={() => setSelectedApartment(apartment)}
          isSelected={selectedApartment?.id === apartment.id}
        />
      )),
    [apartments, selectedApartment]
  );

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen options={{ headerShown: false }} />
      <MapView style={styles.map} region={mapRegion} initialRegion={mapRegion}>
        {markers}
      </MapView>

      {/* Display Selected Item */}
      {selectedApartment && (
        <ApartmentListItem
          apartment={selectedApartment}
          containerStyle={{
            position: "absolute",
            bottom: Number(snapPoints[0]) + 20 || 100,
            left: 10,
            right: 10,
          }}
        />
      )}

      <BottomSheet index={0} snapPoints={snapPoints}>
        <View style={{ flex: 1 }}>
          <Text style={styles.listTitle}>Over {apartments.length} places</Text>

          <BottomSheetFlatList
            data={apartments}
            contentContainerStyle={{ gap: 10, padding: 10 }}
            keyExtractor={(item) => item.id.toString()} // Optimization
            renderItem={({ item }) => <ApartmentListItem apartment={item} />}
          />
        </View>
      </BottomSheet>
    </View>
  );
};

export default AirbnbScreen;

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
  listTitle: {
    fontSize: 15,
    fontFamily: "InterBold",
    textAlign: "center",
    marginVertical: 10,
    marginBottom: 20,
  },
});
