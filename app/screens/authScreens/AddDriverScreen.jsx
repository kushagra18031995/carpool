import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { scale, verticalScale } from "../../constants/scales";
import { screenName, colors } from "../../constants/";
import { AppText as Text, Nav, AppButton } from "../../components";
export default function AddDriver() {
  return (
    <View style={styles.container}>
      <Nav title="Add Driver" />
      <Text title="Add Driver Now" />
      <Text title="Do it later" />
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
