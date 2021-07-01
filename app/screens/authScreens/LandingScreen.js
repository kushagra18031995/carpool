import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppButton from "../../components/AppButton";
import colors from "../../constants/colors";
import { verticalScale } from "../../constants/scales";
import screenNames from "../../constants/screenNames";
import { AppText as Text } from "../../components";

export default function Landing() {
  return (
    <View style={styles.container}>
      {/* <Image source={require("../../assets/logo.png")} /> */}
      {/* <Text style={styles.text}>Carpool</Text> */}
      <AppButton
        title="Continue"
        color={colors.blue}
        bottom={verticalScale(112)}
        screen={screenNames.imageCarousel}
        arrow={true}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    justifyContent: "center",
    alignItems: "center",
  },
  text: { color: colors.white, fontSize: 40 },
});
