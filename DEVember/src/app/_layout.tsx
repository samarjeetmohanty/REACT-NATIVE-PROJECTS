import { useEffect, useState } from "react";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import {
  AmaticSC_400Regular,
  AmaticSC_700Bold,
} from "@expo-google-fonts/amatic-sc";

import * as SplashScreen from "expo-splash-screen";
import AnimatedSplashScreen from "@/components/day4/AnimatedSplashScreen";

// * Prevent auto-hiding the splash screen
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [appReady, setAppReady] = useState(false);
  const [splashAnimationFinished, setSplashAnimationFinished] = useState(false);

  // * Font Loading
  const [fontLoaded, fontError] = useFonts({
    Inter: Inter_400Regular,
    InterSemi: Inter_600SemiBold,
    InterBold: Inter_700Bold,
    InterBlack: Inter_900Black,
    Amatic: AmaticSC_400Regular,
    AmaticBold: AmaticSC_700Bold,
  });

  // ! Check if fonts are loaded or there's an error
  useEffect(() => {
    if (fontLoaded || fontError) {
      setAppReady(true);
    }
  }, [fontLoaded, fontError]);

  // * Ensure both app is ready and animation has finished before hiding the native splash screen
  useEffect(() => {
    if (appReady && splashAnimationFinished) {
      SplashScreen.hideAsync();
    }
  }, [appReady, splashAnimationFinished]);

  if (!appReady || !splashAnimationFinished) {
    return (
      <AnimatedSplashScreen
        onAnimationStart={() => {
          // * Hide the splash screen when Lottie animation is about to start
          SplashScreen.hideAsync();
        }}
        onAnimationFinish={(isCancelled) => {
          if (!isCancelled) {
            setSplashAnimationFinished(true);
          }
        }}
      />
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen name="index" options={{ title: "DEVember" }} />
      </Stack>
    </GestureHandlerRootView>
  );
}
