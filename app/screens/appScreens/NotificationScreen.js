import * as React from "react";
import { View, StyleSheet } from "react-native";
import { colors, Icons } from "../../constants";
import { width } from "../../constants/scales";
import { AuthNav } from "./components/AuthNav.js";
import { AppText as Text } from "../authScreens/components/AppText";
import { AppSwitch } from "./components";

export default function Notification() {
  return (
    <View>
      <AuthNav title="Account" />
      <View style={styles.notificationNav}>
        <View style={{ flexDirection: "row" }}>
          <Icons.Back />
          <Text style={{ fontSize: 18 }}>Notification</Text>
        </View>
        <View style={styles.statusContainer}>
          <Text style={{ color: colors.white, fontSize: 12 }}>Save</Text>
        </View>
      </View>
      <View style={styles.heading}>
        <Text style={{ fontSize: 12, color: colors.gray }}>Notify By</Text>
      </View>
      <AppSwitch title="Email Notification" />
      <View style={styles.heading}>
        <Text style={{ fontSize: 12, color: colors.gray }}>
          Notification Type
        </Text>
      </View>
      <AppSwitch title="Driver Assigned" />
      <AppSwitch title="Picked Up" />
      <AppSwitch title="Delivered" />
      <AppSwitch title="Payment Processing" />
    </View>
  );
}
const styles = StyleSheet.create({
  heading: {
    width,
    paddingHorizontal: 16,
    height: 46,
    backgroundColor: colors.white,
    marginTop: 15,
    justifyContent: "center",
  },
  notificationNav: {
    width,
    height: 60,
    backgroundColor: colors.white,
    marginTop: 15,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 16,
  },

  statusContainer: {
    height: 19,
    width: 55,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.blue,
  },
});
