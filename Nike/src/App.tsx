import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

// ! Screens
import ProductsScreen from "./screens/ProductsScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ProductsScreen /> */}

      <ProductDetailsScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
