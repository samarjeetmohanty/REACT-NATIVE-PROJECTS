import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import MarkdownDisplay from "../../../components/day3/MarkdownDisplay";

const template = `# 🎉 Fun with Markdown!

## 🚀 Introduction
Welcome to this **fun and exciting** markdown guide! Let's dive into the world of Markdown and discover how it makes text formatting cool and easy!

## 🎈 Basics: Add Some Flair

- **Bold and Beautiful:** Make your text stand out! Use \`**\` or \`__\`. Example: **Look at me!**
- *Sassy Italics:* Add a slant with \`*\` or \`_\`. Example: *I'm leaning!*

### 🍔 Let's List Some Fun Things!

1. 🌟 Star gazing
2. 🏖 Beach parties
3. 🍕 Pizza nights

- 🎮 Video games
- 📚 Reading a good book
- 🧘 Yoga time

## 🌈 Advanced Fun

### 🖼 Adding Images and Links

A cute pic: 

![Cute Cat](https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/6.jpg)

Visit a fun site: [Fun Site](https://example.com)

### 🎶 Code Block Party


\`\`\`javascript
// JavaScript party trick
function partyTime() {
    console.log("Let's dance 💃🕺!");
}
\`\`\`

## 🎤 Conclusion
Markdown is not just for formatting; it's for having fun while expressing yourself! Keep exploring and enjoy the markdown party! 🎊

> Enjoy crafting your own fun markdown documents! 🎨🎉
`;

const EditorScreen = () => {
  const [content, setContent] = useState(template);
  const [tab, setTab] = useState("edit");
  const textInputRef = useRef(null);

  // Automatically focus the TextInput when the component mounts
  useEffect(() => {
    if (tab === "edit") {
      setTimeout(() => {
        if (textInputRef.current) {
          textInputRef.current.focus(); // Open the keyboard by focusing the TextInput
        }
      }, 100); // Small timeout to ensure the input is rendered before focusing
    }
  }, [tab]); // Runs when the tab changes

  return (
    <View style={styles.page}>
      <View style={styles.tabsContainer}>
        <Pressable
          onPress={() => setTab("edit")}
          style={[
            styles.tab,
            { borderColor: tab === "edit" ? "mediumorchid" : "gray" },
          ]}
        >
          <Text style={styles.tabText}>Edit</Text>
        </Pressable>
        <Pressable
          onPress={() => setTab("preview")}
          style={[
            styles.tab,
            { borderColor: tab === "preview" ? "mediumorchid" : "gray" },
          ]}
        >
          <Text style={styles.tabText}>Preview</Text>
        </Pressable>
      </View>

      {tab === "edit" ? (
        <TextInput
          ref={textInputRef} // Attach ref to TextInput
          onChangeText={setContent}
          value={content}
          style={styles.input}
          multiline
          numberOfLines={50}
        />
      ) : (
        <MarkdownDisplay>{content}</MarkdownDisplay>
      )}
    </View>
  );
};

export default EditorScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "whitesmoke",
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "white",
    textAlignVertical: "top",
    marginBottom: 20,
  },
  tabsContainer: {
    flexDirection: "row",
    marginVertical: 20,
    gap: 10,
  },
  tab: {
    flex: 1,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "gray",
    alignItems: "center",
  },
  tabText: {
    fontFamily: "InterBold",
  },
});
