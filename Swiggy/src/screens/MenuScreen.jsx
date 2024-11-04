import {
  Dimensions,
  Pressable,
  SectionList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useMemo, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";
import {
  selectNumberOfItems,
  selectTotalCost,
} from "../redux/slices/cartSlice";

// ! components
import MenuItem from "../components/MenuScreen/MenuItem";
import HeaderComponent from "../components/MenuScreen/HeaderComponent";
import SectionHeader from "../components/MenuScreen/SectionHeader";
import ViewCartButton from "../components/MenuScreen/ViewCartButton";
import MenuModal from "../components/MenuScreen/MenuModal";

const MenuScreen = () => {
  const screenWidth = useMemo(() => Dimensions.get("window").width, []);
  const screenHeight = useMemo(() => Dimensions.get("window").height, []);
  const route = useRoute();
  const navigation = useNavigation();
  const { restaurant } = route.params;

  const [expandedSections, setExpandedSections] = useState({});
  const [isMenuModalVisible, setIsMenuModalVisible] = useState(false);
  const numberOfItem = useSelector(selectNumberOfItems);
  const total = useSelector(selectTotalCost);

  const toggleSection = (sectionTitle) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionTitle]: !prev[sectionTitle],
    }));
  };

  const renderSectionHeader = ({ section }) => (
    <SectionHeader
      section={section}
      isExpanded={expandedSections[section.title]}
      onToggle={toggleSection}
    />
  );

  const renderItem = ({ item, section }) =>
    
  expandedSections[section.title] && (
    <View style={styles.menuItemContainer}>
      <MenuItem product={item} restaurantName={restaurant.name} />
    </View>
  );

  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <SectionList
        sections={restaurant?.menu.map((section) => ({
          title: section?.name,
          data: section?.items || [],
        }))}
        keyExtractor={(item, index) => item?.id?.toString() || index.toString()}
        ListHeaderComponent={
          <HeaderComponent
            restaurant={restaurant}
            onBackPress={() => navigation.goBack()}
          />
        }
        renderSectionHeader={renderSectionHeader}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
      <Pressable
        onPress={() => setIsMenuModalVisible(true)}
        style={styles.footerButton}
      >
        <MaterialIcons name="menu-book" size={24} color="#d1d0d3" />
        <Text style={styles.footerButtonText}>MENU</Text>
      </Pressable>

      <MenuModal
        isVisible={isMenuModalVisible}
        onClose={() => setIsMenuModalVisible(false)}
        menu={restaurant.menu}
        screenWidth={screenWidth}
        screenHeight={screenHeight}
      />

      {total > 0 && (
        <ViewCartButton
          numberOfItem={numberOfItem}
          total={total}
          onPress={() => navigation.navigate("Cart")}
        />
      )}
    </SafeAreaView>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#ffffff",
  },
  menuItemContainer: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#cbcbcb",
  },
  footerButton: {
    position: "absolute",
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    bottom: 35,
    right: 30,
    padding: 20,
    borderRadius: 100,
  },
  footerButtonText: {
    color: "#bfc1c3",
    fontWeight: "500",
  },
});
