import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

// ! Screens
import ProductsScreen from "./screens/ProductsScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <ProductsScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
