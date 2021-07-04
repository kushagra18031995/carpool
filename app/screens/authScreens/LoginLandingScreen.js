import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import AppButtonCustom from "../../components/AppButtonCustom";
import SignInOptions from "./components/SignInOptions";

import { Animated, screenName, colors } from "../../constants";
import { verticalScale, width } from "../../constants/scales";
import { AppText as Text } from "../../components/AppText";

export default function LoginLanding() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Animated.Logo />
        <Animated.Truck />
        <Image
          source={require("../../assets/images/route.png")}
          style={styles.route}
        />
      </View>
      <Animated.CarPoolLogistics />
      <View style={styles.buttonContainer}>
        <AppButtonCustom
          title="Log in"
          color={colors.black}
          screen={screenName.login}
        />
        <AppButtonCustom
          title="Create a account"
          color={colors.blue}
          screen={screenName.signUp}
        />
      </View>
      <SignInOptions />
    </View>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    height: verticalScale(127),
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
  },
  imageContainer: {
    height: verticalScale(358),
    width: "100%",
    backgroundColor: colors.black,
  },
  route: {
    position: "absolute",
    bottom: 45,
    width: width - 10,
    // backgroundColor: "red",
    resizeMode: "contain",
  },
});
