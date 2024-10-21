import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Sound } from "expo-av/build/Audio";
import { Audio, AVPlaybackStatus } from "expo-av";

const MemoListItem = ({ uri }: { uri: string }) => {
  const [sound, setSound] = useState<Sound>();
  const [status, setStatus] = useState<AVPlaybackStatus>();
  useEffect(() => {
    loadSound();
  }, [uri]);

  async function loadSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      { uri },
      undefined,
      onPlaybackStatusUpdate
    );
    setSound(sound);
  }
  async function playSound() {
    if (!sound) {
      return;
    }
    console.log("Playing Sound");
    await sound.playAsync();
  }

  async function onPlaybackStatusUpdate(status: AVPlaybackStatus) {
    setStatus(status);
  }
  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const isPlaying = status?.isLoaded ? status?.isPlaying : false;
  const position = status?.isLoaded ? status?.positionMillis : 0;
  const duration =
    status?.isLoaded && status?.durationMillis ? status?.durationMillis : 1;

  const progress = position / duration;

  return (
    <View style={styles.container}>
      <FontAwesome5
        onPress={playSound}
        name={isPlaying ? "pause" : "play"}
        size={20}
        color={"gray"}
      />
      <View style={styles.playbackContainer}>
        <View style={styles.playbackBackground} />
        <View
          style={[styles.playbackIndicator, { left: `${progress * 100}%` }]}
        />
      </View>
    </View>
  );
};

export default MemoListItem;

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 15,
    borderRadius: 10,
    gap: 15,
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",

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
  playbackContainer: {
    flex: 1,
    height: 30,
    justifyContent: "center",
  },
  playbackBackground: {
    height: 3,
    borderRadius: 5,
    backgroundColor: "gainsboro",
  },
  playbackIndicator: {
    width: 10,
    aspectRatio: 1,
    borderRadius: 10,
    position: "absolute",
    backgroundColor: "royalblue",
  },
});
