import { router, Stack } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  StatusBar,
  Platform,
} from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useState } from "react";
import {
  Directions,
  Gesture,
  GestureDetector,
} from "react-native-gesture-handler";
import Animated, {
  FadeIn,
  FadeOut,
  SlideInRight,
  SlideOutLeft,
} from "react-native-reanimated";

const onboardingSteps = [
  {
    icon: "snowflake",
    title: "Welcome #DEVember",
    description: "Daily React Native tutorials during December",
  },
  {
    icon: "people-arrows",
    title: "Learn and grow together",
    description: "Learn by building 24 projects with React Native and Expo",
  },
  {
    icon: "book-reader",
    title: "Education for Children",
    description:
      'Contribute to the fundraiser "Education for Children" to help Save the Children in their effort of providing education to every child',
  },
];

export default function OnboardingScreen() {
  const [screenIndex, setScreenIndex] = useState(0);

  const data = onboardingSteps[screenIndex];

  const onContinue = () => {
    const isLastScreen = screenIndex === onboardingSteps.length - 1;
    if (isLastScreen) {
      endOnboarding();
    } else {
      setScreenIndex(screenIndex + 1);
    }
  };

  const onBack = () => {
    const isFastScreen = screenIndex === 0;
    if (isFastScreen) {
      endOnboarding();
    } else {
      setScreenIndex(screenIndex - 1);
    }
  };

  const endOnboarding = () => {
    setScreenIndex(0);
    router.back();
  };

  const swipes = Gesture.Simultaneous(
    Gesture.Fling().direction(Directions.LEFT).onEnd(onContinue),
    Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack)
  );
  return (
    <SafeAreaView style={styles.page}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar barStyle="default" />

      <View style={styles.stepIndicatorContainer}>
        {onboardingSteps.map((step, index) => (
          <View
            key={index}
            style={[
              styles.stepIndicator,
              { backgroundColor: screenIndex === index ? "#CEF202" : "grey" },
            ]}
          />
        ))}
      </View>
      <GestureDetector gesture={swipes}>
        <View style={styles.contentPage} key={screenIndex}>
          <Animated.View entering={FadeIn} exiting={FadeOut}>
            <FontAwesome5
              style={styles.image}
              name={data.icon}
              size={130}
              color="#CEF202"
            />
          </Animated.View>

          <View style={styles.footer}>
            <Animated.Text
              entering={SlideInRight}
              exiting={SlideOutLeft}
              style={styles.title}
            >
              {data.title}
            </Animated.Text>
            <Animated.Text
              entering={SlideInRight.delay(50)}
              exiting={SlideOutLeft}
              style={styles.description}
            >
              {data.description}
            </Animated.Text>

            <View style={styles.buttonsRow}>
              <Text onPress={endOnboarding} style={styles.buttonText}>
                Skip
              </Text>

              <Pressable onPress={onContinue} style={styles.button}>
                <Text style={styles.buttonText}>Continue</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </GestureDetector>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#15141A",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight * 2 : 0,
  },
  contentPage: {
    padding: 20,
    flex: 1,
  },
  image: {
    alignSelf: "center",
    marginTop: 70,
  },
  title: {
    color: "#FDFDFD",
    fontSize: 40,
    fontFamily: "InterBlack",
    letterSpacing: 1.3, // ? for adding space between each letter
    marginVertical: 10,
  },
  description: {
    color: "grey",
    fontSize: 14,
    fontFamily: "Inter",
    lineHeight: 24,
  },
  footer: {
    marginTop: "auto",
  },

  buttonsRow: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  button: {
    backgroundColor: "#302E38",
    borderRadius: 50,
    alignItems: "center",
    flex: 1,
  },
  buttonText: {
    color: "#FDFDFD",
    fontFamily: "InterSemi",
    fontSize: 16,
    padding: 15,
    paddingHorizontal: 25,
  },

  // ? steps
  stepIndicatorContainer: {
    marginHorizontal: 15,
    flexDirection: "row",
    gap: 8,
  },
  stepIndicator: {
    flex: 1,
    height: 3,
    backgroundColor: "gray",
    // margin: 5,
    borderRadius: 10,
  },
});
