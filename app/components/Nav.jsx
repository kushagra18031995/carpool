import React from "react";
import { View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import Constants from "expo-constants";

import colors from "../constants/colors";
import Icons from "../constants/icons";
import { moderateScale, verticalScale } from "../constants/scales";
import { AppText as Text } from ".";

const { width, height } = Dimensions.get("window");

export default function Nav({ title }) {
  return (
    <View style={styles.navBar}>
      <Icons.Back />
      <Text style={[styles.title]}>{title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  navBar: {
    width: "100%",
    // height: verticalScale(50),
    marginTop: Constants.statusBarHeight + 20,
    alignItems: "center",
    flexDirection: "row",
    marginBottom: verticalScale(40),
    paddingRight: 80,
  },
  title: {
    fontSize: moderateScale(22),
    fontWeight: "900",
    color: colors.black,
  },
});
