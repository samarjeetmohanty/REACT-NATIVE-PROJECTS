import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

const screenWidth = Dimensions.get("screen").width;
export const tinderCardWidth = screenWidth * 0.87;

type TinderCard = {
  user: {
    image: string;
    name: string;
  };
  numOfCards: number;
  index: number;
  activeIndex: SharedValue<number>;
  translationX: SharedValue<number>;
};
const TinderCard = ({
  user,
  numOfCards,
  index,
  activeIndex,
  translationX,
}: TinderCard) => {
  const animatedCard = useAnimatedStyle(() => ({
    opacity: interpolate(
      activeIndex.value,
      [index - 1, index, index + 1],
      [1 - 1 / 5, 1, 1]
    ),
    transform: [
      {
        scale: interpolate(
          activeIndex.value,
          [index - 1, index, index + 1],
          [0.95, 1, 1]
        ),
      },
      {
        translateY: interpolate(
          activeIndex.value,
          [index - 1, index, index + 1],
          [-30, 0, 0]
        ),
      },
      { translateX: activeIndex.value === index ? translationX.value : 0 },
      {
        rotateZ:
          activeIndex.value === index
            ? `${interpolate(
                translationX.value,
                [-screenWidth / 2, 0, screenWidth / 2],
                [-15, 0, 15]
              )}deg`
            : "0deg",
      },
    ],
  }));
  console.log("Tinder card :::", user, numOfCards, index);

  return (
    <Animated.View
      style={[
        styles.card,
        animatedCard,
        {
          zIndex: numOfCards - index,
          // opacity: 1 - index * 0.2,
          // transform: [
          //   { translateY: -index * 30 },
          //   { scale: 1 - index * 0.05 }
          // ],
        },
      ]}
    >
      <Image
        source={{
          uri: user.image,
        }}
        style={[StyleSheet.absoluteFillObject, styles.image]}
      />

      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.8)"]}
        style={[StyleSheet.absoluteFillObject, styles.overlay]}
      />
      <View style={styles.footer}>
        <Text style={styles.name}>{user.name}</Text>
      </View>
    </Animated.View>
  );
};

export default TinderCard;

const styles = StyleSheet.create({
  card: {
    width: tinderCardWidth,
    // height: tinderCardWidth * 1.67,
    aspectRatio: 1 / 1.67,
    borderRadius: 15,
    justifyContent: "flex-end",

    position: "absolute",
    // ! shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  image: {
    borderRadius: 15,
  },
  overlay: {
    top: "50%",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  footer: {
    padding: 10,
  },
  name: {
    fontSize: 24,
    color: "white",
    fontFamily: "InterBold",
  },
});
