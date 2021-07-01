import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import colors from "../../../constants/colors";
import { verticalScale, scale } from "../../../constants/scales";
import { AppText as Text } from "../../../components";

export default function AppContactInput({ title }) {
  return (
    <View style={styles.container}>
      <Text>Phone Number</Text>
      <View style={styles.dataContainer}>
        <View style={styles.countryCode}>
          <Text>+91</Text>
        </View>
        <TextInput
          placeholder="Contact No."
          style={styles.textInput}
        ></TextInput>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // marginTop: 40,
    alignSelf: "center",
    width: scale(343),
  },
  countryCode: {
    height: 46,
    width: scale(95),
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.lightGray,
  },
  dataContainer: {
    flexDirection: "row",
    width: "100%",
    height: scale(48),
    alignSelf: "center",
  },
  textInput: {
    backgroundColor: colors.lightGray,
    width: scale(247),
    paddingLeft: 10,
    // borderWidth: 1,
    // borderColor: colors.gray,
  },
});
