import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { PropsWithChildren } from "react";
import Markdown from "react-native-markdown-display";

const MarkdownDisplay = ({ children }: PropsWithChildren) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ padding: 20 }}
      contentInsetAdjustmentBehavior="automatic"
      style={styles.page}
    >
      <Markdown style={markdownStyles}>{children}</Markdown>
    </ScrollView>
  );
};

export default MarkdownDisplay;

const markdownStyles = StyleSheet.create({
  heading1: {
    fontFamily: "InterBlack",
    color: "#212020",
    marginTop: 15,
    marginBottom: 10,
    lineHeight: 40,
  },
  heading2: {
    fontFamily: "InterBold",
    color: "#404040",

    marginTop: 10,
    marginBottom: 5,
    lineHeight: 30,
  },
  body: {
    fontSize: 16,
    lineHeight: 25,
  },
});
const styles = StyleSheet.create({
  page: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: "white",
    marginBottom: 20,
  },
});
