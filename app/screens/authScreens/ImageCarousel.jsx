import React, { useRef, useState } from "react";
import {
  Animated,
  Button,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import colors from "../../constants/colors";
import Icons from "../../constants/icons";
import { scale, verticalScale } from "../../constants/scales";
import screenNames from "../../constants/screenNames";
import { AppText as Text } from "../../components";

const width = Dimensions.get("screen").width;

// indicators
// automatic shuffling of images

export default function ImageCarousel() {
  const animation = useRef(new Animated.Value(0));
  const [currentImage, setCurrentImage] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const navigation = useNavigation();

  const images = [
    {
      image:
        "https://images.unsplash.com/photo-1429087969512-1e85aab2683d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      text: "Choose your destination",
    },
    {
      image:
        "https://images.unsplash.com/photo-1429087969512-1e85aab2683d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      text: "Choose your destination",
    },
    {
      image:
        "https://images.unsplash.com/photo-1429087969512-1e85aab2683d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      text: "Choose your destination",
    },
  ];
  const descriptions = [
    "Choose your destination",
    "Check fare & book your freight",
    "Save time and money",
  ];
  const handleAnimation = () => {
    let newCurrentImage = currentImage + 1;
    let newCurrentText = currentText + 1;

    if (newCurrentImage >= images.length) {
      navigation.navigate(screenNames.loginLanding);
    }

    Animated.spring(animation.current, {
      toValue: -(width * newCurrentImage),
      useNativeDriver: true,
    }).start();

    setCurrentImage(newCurrentImage);
    setCurrentText(newCurrentText);
  };
  return (
    <View style={styles.carouselContainer}>
      <Animated.View
        style={[
          styles.container,
          {
            transform: [{ translateX: animation.current }],
          },
        ]}
      >
        {images.map((image, index) => (
          <View key={index.toString()} style={{ width }}>
            <Image source={{ uri: image.image }} style={styles.image} />
            <Text key={index.toString()} style={styles.descriptions}>
              {image.text}
            </Text>
          </View>
        ))}
      </Animated.View>
      <View style={styles.indicatorContainer}>
        {images.map((image, index) => (
          <View
            key={index.toString()}
            style={[
              styles.indicator,
              index === currentImage ? styles.activeIndicator : undefined,
            ]}
          />
        ))}
      </View>
      {/* <Button onPress={handleAnimation} /> */}
      <TouchableOpacity onPress={handleAnimation} style={styles.button}>
        <Text style={styles.text}>Next</Text>
        <Icons.ForwardArrow />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: scale(343),
    height: verticalScale(56),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.blue,
    alignSelf: "center",
    bottom: verticalScale(112),
    position: "absolute",
  },
  descriptions: {
    color: colors.white,
    alignSelf: "center",
    marginTop: verticalScale(145),
  },
  image: {
    resizeMode: "contain",
    height: verticalScale(206),
    width: "100%",
  },
  carouselContainer: {
    height: "100%",
    backgroundColor: colors.black,
    // alignItems: "center",
  },
  container: {
    flexDirection: "row",
    marginTop: verticalScale(173),
    // backgroundColor: "red",
    height: "50%",
    // width: "50%",
    // padding: 10,
  },
  indicatorContainer: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: width,
    bottom: verticalScale(218),
    zIndex: 2,
  },
  indicator: {
    width: 6,
    height: 6,
    borderRadius: 3,
    // borderColor: "white",
    backgroundColor: colors.gray,
    borderWidth: 1,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  activeIndicator: {
    backgroundColor: "white",
  },
  text: {
    color: colors.white,
    marginRight: 11,
  },
});

// import React from "react";
// import { View, Text, StyleSheet } from "react-native";
// import AppButton from "../../components/AppButton";
// import { verticalScale } from "../../constants/scales";
// import screenNames from "../../constants/screenNames";

// export default function ImageCarousel() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Image Carousel</Text>
//       <AppButton
//         title="Next"
//         color={colors.blue}
//         bottom={verticalScale(112)}
//         screen={screenNames.loginLanding}
//       />
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.black,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   text: { color: colors.white, fontSize: 40 },
// });
