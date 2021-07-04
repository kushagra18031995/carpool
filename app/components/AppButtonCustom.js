import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import colors from "../constants/colors";
import Icons from "../constants/icons";
import { scale, verticalScale } from "../constants/scales";
import { AppText as Text } from "./AppText";

export default function AppButtonCustom({ color, title, screen }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(screen)}
      style={[styles.button, { backgroundColor: color }]}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    width: scale(343),
    height: verticalScale(56),
    borderRadius: 8,

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: { color: colors.white, marginRight: 11 },
});
