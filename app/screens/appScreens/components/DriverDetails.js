import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../../constants";
import { width } from "../../../constants/scales";
import { AppText, Chip } from "../../../components";
export default function DriverDetails({ data }) {
  return (
    <View style={styles.container}>
      <View style={styles.col1}>
        {/* <Chip title={data.status} color={data.color} /> */}
        <View style={[styles.statusContainer, { backgroundColor: data.color }]}>
          <AppText style={styles.statusText}>{data.status}</AppText>
        </View>
      </View>
      <View style={styles.col2}>
        <View style={styles.row1}>
          <AppText>{data.name} </AppText>
        </View>
        <View style={styles.row2}>
          <View style={styles.col2row1}>
            <AppText style={{ color: colors.gray, fontSize: 12 }}>
              Current Location
            </AppText>
            <AppText>{data.currentLocation}</AppText>
          </View>
          <View style={styles.col2row2}>
            <AppText style={{ color: colors.gray, fontSize: 12 }}>
              Booked Loads
            </AppText>
            <AppText>{data.bookedLoads}</AppText>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  col1: { flex: 7, justifyContent: "center" },
  col2: { flex: 18, flexDirection: "column" },
  row1: { flex: 1, justifyContent: "center" },
  row2: { flex: 1, flexDirection: "row" },
  col2row1: { flex: 1 },
  col2row2: { flex: 1 },
  container: {
    height: 119,
    width,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    marginBottom: 1,
    flexDirection: "row",
  },
  statusContainer: {
    height: 19,
    width: 55,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  statusText: { color: colors.white, fontSize: 10 },
});
