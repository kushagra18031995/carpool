import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import AppButton from "../../components/AppButton";
import colors from "../../constants/colors";
import { scale, verticalScale } from "../../constants/scales";
import screenNames from "../../constants/screenNames";
import AppContactInput from "./components/AppContactInput";
import AppTextInput from "../../components/AppTextInput";
import Nav from "../../components/Nav";
import { AppText as Text } from "../../components";

export default function AddMember() {
  return (
    <View style={styles.container}>
      <Nav title="Add a member" />
      <Text style={styles.text}>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium
      </Text>
      <AppTextInput title="Full Name" />
      <AppTextInput title="Email" />
      <View style={{ height: verticalScale(40) }} />
      <AppContactInput />
      <AppButton
        title="Continue"
        bottom={verticalScale(41)}
        color={colors.black}
        screen={screenNames.lastAuth}
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
    color: colors.gray,
  },
});
