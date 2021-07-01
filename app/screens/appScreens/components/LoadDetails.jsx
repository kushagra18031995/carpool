import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import colors from "../../../constants/colors";
import { verticalScale, width } from "../../../constants/scales";
import { Animated } from "../../../constants";
import { AppText } from "../../../components";

export default function LoadDetails({ data }) {
  return (
    <View style={styles.container}>
      <View style={styles.column1}>
        <View style={styles.cost}>
          <AppText style={styles.costText}>{data.cost}</AppText>
        </View>
        <View style={styles.destination}>
          <View style={styles.deadHead}>
            <AppText>5mi</AppText>
            <AppText style={{ position: "absolute", left: 50 }}>
              deadhead
            </AppText>
          </View>

          <View style={styles.fromContainer}>
            <View style={styles.fromContainerLine} />
            <View style={styles.fromContainerCircle} />
            <View style={{ position: "absolute", left: 50 }}>
              <AppText style={{ fontSize: 10 }}>{data.from}</AppText>
              <AppText style={{ fontSize: 8 }}>{data.fromDate}</AppText>
            </View>
            {/* <View style={{ flex: 1, backgroundColor: "red" }}> </View> */}
            {/* <View style={{ flex: 2, backgroundColor: "blue" }}> </View> */}
          </View>
          <View style={styles.toContainer}>
            <View style={styles.toContainerLine} />
            <View style={styles.toContainerSquare} />
            <View style={{ position: "absolute", left: 50 }}>
              <AppText style={{ fontSize: 10 }}>{data.to}</AppText>
              <AppText style={{ fontSize: 8 }}>{data.toDate}</AppText>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.column2}>
        <View style={styles.details}>
          <AppText style={{ fontSize: 12, color: colors.gray }}>
            {data.type}
          </AppText>
          <AppText style={{ fontSize: 12, color: colors.gray }}>
            {data.weight}
          </AppText>
          <AppText style={{ fontSize: 12, color: colors.gray }}>
            {data.total}
          </AppText>
        </View>
        <View style={styles.image}>
          <Animated.Van />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  column1: {
    flex: 6,
    flexDirection: "column",
  },
  column2: {
    flex: 4,
  },

  container: {
    height: verticalScale(201),
    width: width,
    marginVertical: 5,
    flexDirection: "row",
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: colors.lightGray,
    backgroundColor: colors.white,
    alignSelf: "center",
  },
  fromContainerLine: {
    width: 1,
    backgroundColor: colors.gray,
    height: 50,
    left: 20,
    opacity: 0.5,
    position: "absolute",
    bottom: 0,
  },
  fromContainerCircle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.black,
    position: "absolute",
    top: 20,
    left: 16.5,
    borderColor: "white",
    borderWidth: 1,
  },
  deadHead: {
    flex: 2,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  destination: {
    flex: 3,
    // height: verticalScale(156),
    // width: "100%",
    paddingLeft: 16,
  },
  details: {
    flex: 4,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  fromContainer: { flex: 4, justifyContent: "center" },
  image: {
    flex: 5,
    // backgroundColor: "yellow",
  },
  cost: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 8,
  },
  costText: { fontSize: 20, color: colors.blue },
  toContainer: {
    flex: 4,
    justifyContent: "center",

    // backgroundColor: "yellow",
  },
  toContainerLine: {
    width: 1,
    backgroundColor: colors.gray,
    height: 20,
    left: 20,
    opacity: 0.5,
    position: "absolute",
    top: 0,
  },
  toContainerSquare: {
    width: 8,
    height: 8,
    backgroundColor: colors.black,
    position: "absolute",
    top: 15,
    left: 16.5,
    borderColor: "white",
    borderWidth: 1,
  },
});
