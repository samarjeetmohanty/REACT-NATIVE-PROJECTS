import {
  Dimensions,
  Pressable,
  ScrollView,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useMemo, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Modal from "react-native-modal";

import {
  Ionicons,
  Fontisto,
  Entypo,
  MaterialIcons,
  Octicons,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons";

import { useNavigation, useRoute } from "@react-navigation/native";
import MenuItem from "../components/MenuItem";

const MenuScreen = () => {
  // ! Memoized screenWidth and screenHeight: To avoid recalculating these on each render
  const screenWidth = useMemo(() => Dimensions.get("window").width, []);
  const screenHeight = useMemo(() => Dimensions.get("window").height, []);

  const route = useRoute();
  const navigation = useNavigation();
  const { restaurant } = route.params;

  const [expandedSections, setExpandedSections] = useState({});

  const [isMenuModalVisible, setIsMenuModalVisible] = useState(false);

  const toggleSection = (sectionTitle) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionTitle]: !prev[sectionTitle],
    }));
  };

  const renderHeader = () => {
    return (
      <View style={{ borderBottomWidth: 1, borderBottomColor: "#cbcbcb" }}>
        <View style={styles.headerContainer}>
          <View style={styles.headerActions}>
            <Ionicons
              name="arrow-back"
              size={24}
              color="#595a5f"
              style={styles.headerIcon}
              onPress={() => navigation.goBack()}
            />
            <Fontisto
              name="heart-alt"
              size={24}
              color="#595a5f"
              style={styles.favoriteIcon}
            />
            <Entypo name="share" size={24} color="#595a5f" />
          </View>

          <View style={styles.restaurantInfoSection}>
            {/* Restaurant Name and Details */}
            <View style={styles.restaurantDetails}>
              <Text style={styles.restaurantName}>{restaurant.name}</Text>
              <View style={styles.detailRow}>
                <MaterialIcons name="restaurant" size={20} color="#595a5f" />
                <Text style={styles.restaurantAddress}>
                  Near, {restaurant.address}
                </Text>
              </View>
              <View style={styles.detailRow}>
                <Octicons name="clock" size={20} color="#595a5f" />
                <Text style={styles.restaurantTime}>
                  {restaurant.time} mins
                </Text>
                <Text style={[styles.restaurantTime, styles.home]}>Home</Text>
              </View>
              <View style={[styles.detailRow, { gap: 8 }]}>
                <MaterialCommunityIcons
                  name="bike-fast"
                  size={24}
                  color="#595a5f"
                />
                <Text style={{ color: "#595a5f" }}>0-3 Kms |</Text>
                <Text style={{ color: "#595a5f" }}>
                  35 Delivery Fee will Apply
                </Text>
              </View>

              <Text style={styles.cuisineText}>{restaurant.cuisines}</Text>
            </View>

            {/* Restaurant Rating */}
            <View style={styles.ratingSection}>
              <View style={styles.ratingContainer}>
                <MaterialIcons name="stars" size={20} color="white" />
                <Text style={styles.ratingText}>{restaurant.rating}</Text>
              </View>
              <Text style={styles.ratingCount}>
                {restaurant.ratingsCount} ratings
              </Text>
            </View>
          </View>
        </View>

        <Text style={styles.menuText}>MENU</Text>
      </View>
    );
  };

  const renderSectionHeader = ({ section }) => {
    const isExpanded = expandedSections[section.title];

    const numberOfItem = section?.data?.length;
    return (
      <Pressable
        onPress={() => toggleSection(section.title)}
        style={styles.menuHeader}
      >
        <Text style={styles.menuTitle}>
          {section.title} ({numberOfItem})
        </Text>
        <Feather
          name={isExpanded ? "chevron-up" : "chevron-down"}
          size={24}
          color="black"
        />
      </Pressable>
    );
  };

  const renderItem = ({ item, section }) =>
    expandedSections[section.title] && (
      <View style={styles.menuItemContainer}>
        <MenuItem product={item} />
      </View>
    );

  const toggleMenuModal = () => {
    setIsMenuModalVisible(!isMenuModalVisible);
  };
  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <StatusBar backgroundColor={"#e3e4e9"} barStyle={"default"} />
      <SectionList
        sections={restaurant?.menu.map((section) => ({
          title: section?.name, // * Section header title (ex :- "Recommended", "Rice" etc)
          data: section?.items || [], // * Items with each sections
        }))}
        keyExtractor={(item, index) => item?.id?.toString() || index.toString()}
        ListHeaderComponent={renderHeader}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 150 }}
      />
      <Pressable onPress={toggleMenuModal} style={styles.footerButton}>
        <MaterialIcons name="menu-book" size={24} color="#d1d0d3" />
        <Text style={styles.footerButtonText}>MENU</Text>
      </Pressable>

      <Modal
        isVisible={isMenuModalVisible}
        onBackdropPress={toggleMenuModal}
        animationIn={"slideInRight"}
        animationOut={"slideOutRight"}
      >
        <ScrollView
          style={[
            styles.modalContent,
            { width: screenWidth - 100, height: screenHeight / 4 },
          ]}
          contentContainerStyle={{ paddingBottom: 40 }}
          showsVerticalScrollIndicator={false}
        >
          {restaurant.menu.map((item, index) => (
            <View style={styles.modalItem} key={index}>
              <Text
                style={[
                  styles.modalText,
                  item.name.toLowerCase() === "recommended" &&
                    styles.modalMainText,
                ]}
              >
                {item.name}
              </Text>
              <Text
                style={[
                  styles.modalText,
                  item.name.toLowerCase() === "recommended" &&
                    styles.modalMainText,
                ]}
              >
                {item.items.length}
              </Text>
            </View>
          ))}
        </ScrollView>
      </Modal>
    </SafeAreaView>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#ffffff",
  },
  headerContainer: {
    backgroundColor: "#e3e4e9",
    paddingBottom: 10,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerActions: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  headerIcon: {
    flex: 1,
  },
  favoriteIcon: {
    paddingHorizontal: 20,
  },
  restaurantInfoSection: {
    margin: 10,
    borderRadius: 20,
    backgroundColor: "#ffffff",
    flexDirection: "row",
    alignItems: "center",
  },
  restaurantDetails: {
    flex: 1,
    padding: 16,
  },
  restaurantName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  restaurantAddress: {
    color: "#595a5f",
    marginLeft: 8,
  },
  restaurantTime: {
    color: "#595a5f",
    marginLeft: 8,
  },
  home: {
    color: "black",
    fontWeight: "bold",
    marginLeft: 10,
  },
  cuisineText: {
    color: "#595a5f",
    marginTop: 4,
  },
  ratingSection: {
    marginBottom: "auto",
    padding: 16,
  },
  ratingContainer: {
    borderRadius: 10,
    paddingVertical: 8,
    gap: 5,
    backgroundColor: "#146348",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  ratingText: {
    color: "white",
    fontWeight: "bold",
  },
  ratingCount: {
    color: "#cbcbcb",
    fontSize: 12,
    marginTop: 5,
  },
  menuText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    padding: 10,
  },
  menuHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  menuTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
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
    alignContent: "center",
    marginLeft: "auto",
    bottom: 35,
    right: 30,
    padding: 20,
    borderRadius: 100,
  },
  footerButtonText: {
    color: "#bfc1c3",
    fontWeight: "500",
  },
  modalContent: {
    position: "absolute",
    backgroundColor: "black",
    bottom: 0,
    right: 0,
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  modalItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  modalMainText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  modalText: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
});
