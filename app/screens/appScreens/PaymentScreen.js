import React from "react";
import { View, Text, StyleSheet, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AppButton from "../../components/AppButton";
import AppTextInput from "../../components/AppTextInput";
import Nav from "../../components/Nav";
import NameInput from "../../components/NameInput";
import { colors, screenName } from "../../constants";
import { height, width } from "../../constants/scales";

export default function Payment() {
  return (
    <View style={styles.container}>
      {/* <Nav title="Please enter your carrier's ACH direct deposit info" /> */}
      <View style={styles.nameContainer}>
        {/* <NameInput title="First Name" />
        <NameInput title="Last Name" /> */}
      </View>
      {/* <AppTextInput title="Routing Number" /> */}
      <View style={{ width: width - 32 }}>
        <Text style={{ color: colors.red }}>9 digits</Text>
      </View>
      {/* <AppTextInput title="Carrier Account Number" /> */}
      <AppButton
        title="Save"
        color={colors.black}
        bottom={40}
        screen={screenName.paymentSecond}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center", height },
  nameContainer: {
    flexDirection: "row",
    width: width,
    paddingHorizontal: 16,
    justifyContent: "space-between",
  },
});
