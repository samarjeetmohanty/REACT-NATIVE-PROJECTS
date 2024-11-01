import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SectionHeader = ({ section, isExpanded, onToggle }) => (
  <Pressable onPress={() => onToggle(section.title)} style={styles.menuHeader}>
    <Text style={styles.menuTitle}>
      {section.title} ({section.data.length})
    </Text>
    <Feather
      name={isExpanded ? "chevron-up" : "chevron-down"}
      size={24}
      color="black"
    />
  </Pressable>
);

export default SectionHeader;

const styles = StyleSheet.create({
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
});
