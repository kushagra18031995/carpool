import React, { useRef } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Nav from "./components/Nav";
import colors from "../../constants/colors";
import { scale, verticalScale } from "../../constants/scales";
import AppButton from "../../components/AppButton";
import AppText from "./components/AppText";
import screenNames from "../../constants/screenNames";
export default function Description() {
  const otpInput = useRef(null);
  const data = [
    {
      title: "Owner Operator",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      title: "Company Driver",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      title: "Dispatcher",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
  ];

  return (
    <View style={styles.container}>
      <Nav title="Describe yourself?" />

      <AppButton
        title="Continue"
        bottom={verticalScale(213)}
        color={colors.black}
        screen={screenNames.trailerType}
      />
      {data.map((item, index) => (
        <View key={index.toString()}>
          <AppText title={item.title} text={item.text} />
        </View>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  container: { alignItems: "center", height: "100%" },
});
