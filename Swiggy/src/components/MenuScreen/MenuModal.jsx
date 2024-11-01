import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import Modal from "react-native-modal";

const MenuModal = ({ isVisible, onClose, menu, screenWidth, screenHeight }) => (
  <Modal
    isVisible={isVisible}
    onBackdropPress={onClose}
    animationIn="slideInRight"
    animationOut="slideOutRight"
  >
    <ScrollView
      style={[styles.modalContent, { width: screenWidth - 100, height: screenHeight / 4 }]}
      contentContainerStyle={{ paddingBottom: 40 }}
      showsVerticalScrollIndicator={false}
    >
      {menu.map((item, index) => (
        <View style={styles.modalItem} key={index}>
          <Text style={[styles.modalText, item.name.toLowerCase() === "recommended" && styles.modalMainText]}>
            {item.name}
          </Text>
          <Text style={[styles.modalText, item.name.toLowerCase() === "recommended" && styles.modalMainText]}>
            {item.items.length}
          </Text>
        </View>
      ))}
    </ScrollView>
  </Modal>
);

export default MenuModal;

const styles = StyleSheet.create({
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
