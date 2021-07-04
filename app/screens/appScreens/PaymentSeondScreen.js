import React, { useState } from "react";
import { View, Text, StyleSheet, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";

import AppTextInput from "../../components/AppTextInput";
import Nav from "../../components/Nav";
import AppButton from "../../components/AppButton";

import { colors } from "../../constants";
import { height, scale, width } from "../../constants/scales";

export default function PaymentSecond() {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(true);
  return (
    <View style={styles.container}>
      <Nav title="Search for your Factoring company by name" />

      <AppTextInput title="Routing Number" top={0} />
      <View style={styles.docContainer}></View>
      <AppButton title="Save" color={colors.black} bottom={40} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { alignItems: "center", height },
  docContainer: {
    width: scale(343),
    height: 246,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: colors.lightGray2,
    marginTop: 40,
    borderStyle: "dashed",
  },

  nameContainer: {
    flexDirection: "row",
    width: width,
    paddingHorizontal: 16,
    justifyContent: "space-between",
  },
});
