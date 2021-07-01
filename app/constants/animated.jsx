import React, { useState, useEffect } from "react";

import { Image, View, Animated, StyleSheet } from "react-native";
import colors from "./colors";
import { verticalScale, scale } from "./scales";
import { AppText as Text } from "../components";
import { useFonts } from "expo-font";

const CarPoolLogistics = () => {
  const [loaded] = useFonts({
    fontFamily: require("../assets/fonts/UberMove.ttf"),
  });
  const opacity = useState(new Animated.Value(0))[0];
  const top = useState(new Animated.Value(100))[0];
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: false,
    }).start();
    Animated.timing(top, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: false,
    }).start();
  }, []);

  animatedSubText = {
    opacity,
    top,
    fontFamily: "fontFamily",
  };

  return (
    <View style={styles.textContainer}>
      <Animated.Text
        style={[styles.heading, { opacity, fontFamily: "fontFamily" }]}
      >
        Carpool Logistics
      </Animated.Text>
      <Animated.Text style={[styles.subText, animatedSubText]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Animated.Text>
    </View>
  );
};
const Logo = () => {
  const opacity = useState(new Animated.Value(0))[0];
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: false,
    }).start();
  }, []);
  const animatedStyle = {
    height: verticalScale(111),
    width: scale(191),
    opacity,
    alignSelf: "center",
    marginTop: verticalScale(43),
  };
  return (
    <Animated.Image
      source={require("../assets/images/logo.png")}
      style={animatedStyle}
    />
  );
};
const Truck = () => {
  const left = useState(new Animated.Value(-250))[0];
  useEffect(() => {
    Animated.timing(left, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: false,
    }).start();
  }, []);
  const animatedStyle = {
    position: "absolute",
    left,
    bottom: 50,
  };
  return (
    <Animated.View style={animatedStyle}>
      <Image source={require("../assets/images/Truck.png")} />
    </Animated.View>
  );
};

const Van = () => {
  const right = useState(new Animated.Value(-100))[0];
  useEffect(() => {
    Animated.timing(right, {
      toValue: 12,
      duration: 1500,
      useNativeDriver: false,
    }).start();
  }, []);
  const animatedStyle = {
    position: "absolute",
    right,
    bottom: 44,
  };
  return (
    <>
      <View style={styles.vanContainer} />
      <Animated.Image
        source={require("../assets/images/van.png")}
        style={animatedStyle}
      />
    </>
  );
};

export default {
  CarPoolLogistics,
  Logo,
  Truck,
  Van,
};
const styles = StyleSheet.create({
  heading: { fontSize: 34, fontWeight: "100" },
  subText: { color: colors.textColor2, fontSize: 14 },
  textContainer: {
    height: verticalScale(165),
    paddingTop: verticalScale(35),
    paddingBottom: verticalScale(30),
    paddingLeft: 17,
    // paddingRight: 90,
  },
  vanContainer: {
    height: 44,
    width: 44,
    borderRadius: 22,
    backgroundColor: colors.blue,
    opacity: 0.15,
    position: "absolute",
    bottom: 34,
    right: 0,
  },
});
