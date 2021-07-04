import React from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../constants";
import { AppText as Text } from "./AppText";

export function Chip({ title, color }) {
  return (
    <View style={[styles.statusContainer, { backgroundColor: color }]}>
      <Text style={styles.statusText}>{title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  statusContainer: {
    height: 19,
    width: 55,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  statusText: { color: colors.white, fontSize: 10 },
});
