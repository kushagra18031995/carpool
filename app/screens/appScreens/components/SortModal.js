import React from "react";
import { View, Modal, StyleSheet, TouchableOpacity } from "react-native";
import { Button, Overlay } from "react-native-elements";

import { colors, Icons } from "../../../constants";
import { AppText as Text, Chip, AppSmallButton } from "../../../components";
import { scale } from "../../../constants/scales";
import AppSlider from "./Slider";
import AppSwitch from "./AppSwitch";

export default function SortModal({ ...props }) {
  return (
    <Overlay {...props} overlayStyle={{ top: 60, position: "absolute" }}>
      <View style={styles.dataContainer} onPress={null}>
        <View style={styles.resetContainer}>
          <Text style={styles.text}>50 Matching Loads</Text>
          {/* <Chip title="Reset" color={colors.gray} /> */}
          <View style={styles.statusContainer}>
            <Text style={styles.statusText}>Reset</Text>
          </View>
        </View>
      </View>
      <Text style={[styles.boldText, { paddingHorizontal: 16 }]}>
        Sort Load by
      </Text>
      <Text style={styles.grayText}> Deadhead</Text>
      <Text style={styles.boldText}> Distance </Text>
      <Text style={styles.boldText}> Number of Vehicles</Text>
      <Text style={styles.grayText}> Price</Text>
      <Text style={styles.boldText}> Pickup City , State</Text>
      <Text style={styles.boldText}> Delivery City , State</Text>
      <View>
        <AppSmallButton title="Cancel" />
      </View>
    </Overlay>
  );
}
const styles = StyleSheet.create({
  boldText: {
    paddingHorizontal: 26,
    marginTop: 16,
    fontWeight: "900",
  },
  dataContainer: {
    width: scale(343),
    backgroundColor: colors.white,
    paddingHorizontal: 18,
  },
  grayText: {
    color: colors.gray,
    paddingHorizontal: 16,
    marginTop: 15,
    fontSize: 12,
  },
  resetContainer: {
    marginTop: 17,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  text: {
    color: colors.black,
  },
  statusContainer: {
    height: 19,
    width: 55,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.lightGray4,
  },
  statusText: { fontSize: 10, color: colors.black },
});
