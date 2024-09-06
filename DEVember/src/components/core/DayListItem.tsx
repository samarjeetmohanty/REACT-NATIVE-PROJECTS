import { View, Text, StyleSheet } from "react-native";

// * Defining typescript
type DayListItem = {
  day: number;
};

export default function DayListItem({ day }: DayListItem) {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{day}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#F9EDE3",

    flex: 1,
    aspectRatio: 1,

    borderWidth: StyleSheet.hairlineWidth, // * smallest border  width
    borderColor: "#9B4521",
    borderRadius: 20,

    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#9B4521",
    fontSize: 70,
    fontFamily: "AmaticBold",
  },
});
