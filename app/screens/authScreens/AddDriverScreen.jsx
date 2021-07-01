import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import AppButton from "../../components/AppButton";
import colors from "../../constants/colors";
import { scale, verticalScale } from "../../constants/scales";
import screenNames from "../../constants/screenNames";
import AppText from "./components/AppText";
import Nav from "./components/Nav";
import { AppText as Text } from "../../components";
export default function AddDriver() {
  return (
    <View style={styles.container}>
      <Nav title="Add Driver" />
      <AppText title="Add Driver Now" />
      <AppText title="Do it later" />
      <AppButton
        title="Continue"
        bottom={verticalScale(41)}
        color={colors.black}
        screen={screenNames.contractTerms}
        screen={screenNames.addMember}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "100%",
  },
  text: {
    width: scale(343),
  },
});
