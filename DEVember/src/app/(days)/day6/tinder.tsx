import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TinderCard from "@/components/day6/TinderCard";
import { Stack } from "expo-router";
import { useSharedValue, withSpring } from "react-native-reanimated";
import { GestureDetector, Gesture } from "react-native-gesture-handler";

const dummyUsers = [
  {
    id: 1,
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-images/1.jpg",
    name: "Daniel",
  },
  {
    id: 2,
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-images/2.jpg",
    name: "John",
  },
  {
    id: 3,
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-images/3.jpg",
    name: "Tony",
  },
  {
    id: 4,
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-images/4.jpeg",
    name: "Jack",
  },
  {
    id: 5,
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-images/5.jpg",
    name: "Peter",
  },
  {
    id: 6,
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-images/6.jpg",
    name: "Tom",
  },
];

const TinderScreen = () => {
  const activeIndex = useSharedValue(0);
  const translationX = useSharedValue(0);

  const gesture = Gesture.Pan()
    .onBegin((event) => {
      console.log("onBegin");
    })
    .onFinalize((event) => {
      console.log("onFinalize");
    })
    .onChange((event) => {
      console.log("On translationX :", event.translationX);
      translationX.value = event.translationX;
    })
    .onStart((event) => {
      console.log("onStart");
    })
    .onEnd((event) => {
      console.log("onEnd");
      translationX.value = withSpring(0);
    });
  return (
    <GestureDetector gesture={gesture}>
      <View style={styles.tinderScreen}>
        <Stack.Screen options={{ headerShown: false }} />
        {dummyUsers.map((user, index) => (
          <TinderCard
            key={user.id}
            user={user}
            numOfCards={dummyUsers.length}
            index={index}
            activeIndex={activeIndex}
            translationX={translationX}
          />
        ))}
      </View>
    </GestureDetector>
  );
};

export default TinderScreen;

const styles = StyleSheet.create({
  tinderScreen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
