import React, { useState } from "react";
import { View, StyleSheet, Switch } from "react-native";
import { AppText as Text } from "../../../components";
import { colors } from "../../../constants";
import { width } from "../../../constants/scales";

export default function AppSwitch({ title }) {
  const [clicked, setClicked] = useState(false);
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Switch
        trackColor={{ false: colors.lightGray3, true: colors.lightGray3 }}
        thumbColor={clicked ? colors.blue : colors.white}
        onValueChange={() => setClicked(!clicked)}
        value={clicked}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: width,
    height: 45,
    backgroundColor: colors.white,
    flexDirection: "row",
    paddingLeft: 26,
    paddingRight: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
