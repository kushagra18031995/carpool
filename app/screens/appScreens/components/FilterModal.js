import React from "react";
import { View, Modal, StyleSheet, TouchableOpacity } from "react-native";
import { Button, Overlay } from "react-native-elements";

import { colors, Icons } from "../../../constants";
import { AppText as Text } from "../../../components";
import { scale } from "../../../constants/scales";
import AppSlider from "./Slider";
import AppSwitch from "./AppSwitch";

export default function FilterModal({ ...props }) {
  return (
    <Overlay {...props} overlayStyle={{ top: 60, position: "absolute" }}>
      <View style={styles.container} onPress={props.onRequestClose}>
        <View style={styles.dataContainer} onPress={null} activeOpacity={1}>
          <View style={{ alignItems: "flex-end", marginTop: 17 }}>
            <Text style={styles.text}>Near By</Text>
          </View>
          <AppSlider title="Denver, CO, USA" />
          <AppSlider title="Drop Off" />
          <AppSwitch title="Enclosed" paddingRight={0} paddingLeft={0} />
          <AppSwitch
            title="Exclude Oversized"
            paddingRight={0}
            paddingLeft={0}
          />
          <AppSwitch
            title="Exclude Non Operational"
            paddingRight={0}
            paddingLeft={0}
          />
          <View style={styles.vehicles}>
            <View style={{ flexDirection: "row" }}>
              <Icons.Car />
              <Text>Number of vehicles</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={{ color: colors.gray }}>+50</Text>
              <Icons.Close />
            </View>
          </View>
        </View>
      </View>
    </Overlay>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.transparentModalBack,
    alignItems: "center",
  },
  dataContainer: {
    width: scale(343),
    // height: 373,
    backgroundColor: colors.white,
    // marginTop: 60,
    paddingHorizontal: 18,
  },
  vehicles: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
    height: 20,
  },
  text: {
    color: colors.blue,
  },
});
