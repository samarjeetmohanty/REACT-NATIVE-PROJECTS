import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pressable, StyleSheet, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { useSelector } from "react-redux";
import { selectNumberOfItems } from "./store/cartSlice";

// ! Screens
import ProductsScreen from "./screens/ProductsScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import ShoppingCart from "./screens/ShoppingCart";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const numberOfItem = useSelector(selectNumberOfItems);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ contentStyle: { backgroundColor: "white" } }}
      >
        <Stack.Screen
          name="Product"
          component={ProductsScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate("Cart")}
                style={styles.cartButton}
              >
                <FontAwesome5 name="shopping-cart" size={18} color="gray" />
                <Text style={styles.cartButtonText}>{numberOfItem}</Text>
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="Product Details"
          component={ProductDetailsScreen}
          options={{ presentation: "modal" }}
        />
        <Stack.Screen name="Cart" component={ShoppingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;

const styles = StyleSheet.create({
  cartButton: {
    flexDirection: "row",
  },
  cartButtonText: {
    marginLeft: 5,
    fontWeight: "500",
  },
});
