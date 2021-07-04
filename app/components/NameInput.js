import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

import { AppText as Text } from "./AppText";

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
