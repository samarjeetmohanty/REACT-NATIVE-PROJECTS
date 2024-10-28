import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"default"} />
      <HomeScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
