import React, { useState } from "react";
import { View, StyleSheet, Switch } from "react-native";
import { AppText as Text } from "../../../components";
import { colors, Icons } from "../../../constants";
import { width } from "../../../constants/scales";

export default function AppSwitch({
  title,
  paddingLeft = 26,
  paddingRight = 0,
}) {
  const [clicked, setClicked] = useState(false);
  return (
    <View style={[styles.container, { paddingLeft, paddingRight }]}>
      <View style={{ justifyContent: "center", flexDirection: "row" }}>
        {title == "Enclosed" && <Icons.Truck size={18} />}
        {title == "Exclude Oversized" && <Icons.Plus />}
        {title == "Exclude Non Operational" && <Icons.DND />}
        <Text>{title}</Text>
      </View>
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
    width: "100%",
    height: 45,
    backgroundColor: colors.white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor: "red",
  },
});
