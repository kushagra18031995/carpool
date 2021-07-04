import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../../../constants/colors";
import { scale, verticalScale } from "../../../constants/scales";
import { AppText as Text } from "../../../components/AppText";

export default function AppText({ title, text }) {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.heading, { fontSize: text ? 18 : 14 }]}>
        {title}
      </Text>
      {text && <Text>{text}</Text>}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: scale(343),
    // height: verticalScale(90),
    flexDirection: "column",
    backgroundColor: colors.lightGray,
    marginVertical: 10,
    minHeight: verticalScale(50),
    justifyContent: "center",
    paddingLeft: 16,
    borderRadius: 8,
    paddingVertical: 14,
  },
  heading: {
    // fontWeight: "bold",
    fontSize: 18,
  },
});
