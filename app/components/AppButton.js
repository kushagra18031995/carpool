import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppText as Text } from "./AppText";
import colors from "../constants/colors";
import Icons from "../constants/icons";
import { scale, verticalScale } from "../constants/scales";
import AuthContext from "../auth/context";

export default function AppButton({
  color,
  title,
  bottom,
  screen,
  arrow = false,
}) {
  const { setAuthentic } = useContext(AuthContext);
  const navigation = useNavigation();
  const handlePress = () => {
    if (screen) navigation.navigate(screen);
    else {
      setAuthentic(true);
    }
  };
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.button, { backgroundColor: color, bottom }]}
    >
      <Text style={styles.text}>{title}</Text>
      {arrow && <Icons.ForwardArrow />}
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    width: scale(343),
    height: verticalScale(56),
    borderRadius: 8,
    flexDirection: "row",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  text: { color: colors.white, marginRight: 11 },
});
