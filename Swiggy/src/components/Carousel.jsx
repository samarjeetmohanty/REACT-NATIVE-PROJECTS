import { Dimensions, FlatList, Image, StyleSheet, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // * Track the current index

  const flatListRef = useRef(null); // * Creating reference for flatList

  const screenWidth = Dimensions.get("window").width; // * Get the width of the screen

  // ! Automatically scroll to the next image
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < carouselImages.length - 1) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
      } else {
        // setCurrentIndex(0);
        setTimeout(() => setCurrentIndex(0), 300);
      }
    }, 2000);

    return () => clearInterval(interval); // ! Clear interval on unmount
  }, []);

  // ! Scroll to the new index whenever it changes
  useEffect(() => {
    flatListRef.current?.scrollToIndex({ animated: true, index: currentIndex });
  }, [currentIndex]);

  const carouselImages = [
    "https://carousels-ads.swiggy.com/images/slider/1.jpg",
    "https://carousels-ads.swiggy.com/images/slider/2.jpg",
    "https://carousels-ads.swiggy.com/images/slider/3.jpg",
    "https://carousels-ads.swiggy.com/images/slider/4.jpg",
    "https://carousels-ads.swiggy.com/images/slider/5.jpg",
    "https://carousels-ads.swiggy.com/images/slider/6.jpg",
    "https://carousels-ads.swiggy.com/images/slider/7.jpg",
    "https://carousels-ads.swiggy.com/images/02%2001.png",
  ];

  const renderCarouselItem = ({ item }) => (
    <Image
      source={{ uri: item }}
      style={[styles.image, { width: screenWidth - 20 }]} // Adjusted width to fit the screen
    />
  );

  return (
    <View>
      <FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={carouselImages}
        renderItem={renderCarouselItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={styles.dotContainer}>
        {carouselImages.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentIndex === index ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  image: {
    height: 150,
    borderRadius: 10,
    // marginHorizontal: 10, // This adds horizontal spacing
  },
  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    padding: 10,
  },
  dot: {
    borderRadius: 4,
  },
  activeDot: {
    width: 8,
    height: 8,
    backgroundColor: "black",
  },
  inactiveDot: {
    width: 4,
    height: 4,
    backgroundColor: "#90A4AE",
  },
});
