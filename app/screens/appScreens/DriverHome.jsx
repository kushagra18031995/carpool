import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AppText } from "../../components";
import { colors, dummyData } from "../../constants";
import { verticalScale, width } from "../../constants/scales";
import { DriverDetailsList, AuthNav } from "./components";

export default function DriverHome() {
  return (
    <View>
      <AuthNav title="Drivers" />
      <View style={styles.tabContainer}>
        <View style={styles.tab}>
          <View style={styles.dataContainer}>
            <View style={styles.data}>
              <AppText style={{ fontWeight: "400" }}>3</AppText>
              <AppText style={styles.text}>Empty</AppText>
            </View>
            <View style={styles.data}>
              <AppText style={{ fontWeight: "400" }}>2</AppText>
              <AppText style={styles.text}>Loaded</AppText>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.allDriver}>
        <Text>All Driver</Text>
      </View>
      <View style={{ overflow: "hidden", height: verticalScale(525) }}>
        <DriverDetailsList data={dummyData.drivers} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  allDriver: { height: 58, justifyContent: "center", paddingHorizontal: 16 },
  tab: {
    height: 50,
    width,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    backgroundColor: colors.white,
    elevation: 5,
    alignItems: "center",
  },
  tabContainer: { overflow: "hidden", paddingBottom: 5 },
  dataContainer: {
    width: width - 206,
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  data: {
    flexDirection: "column",
    alignItems: "center",
  },
  text: { color: colors.gray },
});
