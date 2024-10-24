import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

// ! redux
import { Provider } from "react-redux";
import store from "./redux/store/store";

// ! components
import Header from "./component/Header";
import Product from "./component/Product";

// ! static data
import data from "../src/utils/Product";

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Header />
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Product item={item} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Provider>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
