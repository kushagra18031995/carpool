import React from "react";
import { View, StyleSheet } from "react-native";
import Icons from "../../../constants/icons";
import { verticalScale } from "../../../constants/scales";
import { AppText as Text } from "../../../components";

export default function SignInOptions() {
  return (
    <View style={styles.container}>
      <Text style={styles.orText}>or</Text>
      <View style={styles.sighInOptionContainer}>
        <Icons.Apple />
        <Icons.Fb />
        <Icons.Google />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { alignItems: "center" },
  orText: { marginTop: verticalScale(20), marginBottom: verticalScale(15) },
  sighInOptionContainer: {
    flexDirection: "row",
    width: 198,
    justifyContent: "space-between",
  },
});
