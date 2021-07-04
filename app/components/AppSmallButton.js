import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "react-native-elements";
import { AppText as Text } from "./AppText";
export default function AppSmallButton({ title, color }) {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: color }]}>
      <Text style={{ color: colors.white }}> {title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    width: 148,
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
