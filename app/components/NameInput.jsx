import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { colors, Icons } from "../constants";
import { verticalScale, scale } from "../constants/scales";
import { AppText as Text } from ".";

export default function NameInput({ title, ...props }) {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <TextInput style={styles.input} />
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    width: 155,
    height: 48,
    backgroundColor: "#DCDCDC",
    borderRadius: 8,
  },
});
