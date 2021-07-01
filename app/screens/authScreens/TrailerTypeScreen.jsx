import React, { useRef } from "react";
import { View, Button, StyleSheet } from "react-native";
import Nav from "./components/Nav";
import colors from "../../constants/colors";
import { scale, verticalScale } from "../../constants/scales";
import AppButton from "../../components/AppButton";
import AppText from "./components/AppText";
import screenNames from "../../constants/screenNames";
import { AppText as Text } from "../../components";

export default function TrailerType() {
  const otpInput = useRef(null);
  const data = [
    {
      title: "53' Dry Van",
    },
    {
      title: "53' Reefer",
    },
    {
      title: "Flat Bed",
    },
    {
      title: "I don't have trailer",
    },
  ];

  return (
    <View style={styles.container}>
      <Nav title="Trailer Type" />

      <AppButton
        title="Continue"
        bottom={verticalScale(213)}
        color={colors.black}
        screen={screenNames.dotNumber}
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
