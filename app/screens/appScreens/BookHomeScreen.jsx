import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors, Icons } from "../../constants";
import { verticalScale } from "../../constants/scales";
import AuthNav from "./components/AuthNav";
import LoadDetailsList from "./components/LoadDetailsList";
import D from "../../constants/dummyData";
import { AppText } from "../../components";

export default function BookHome() {
  return (
    <View>
      <AuthNav title="Book" />
      {/* <View style={styles.searchContainer}>
        <Text>Search</Text>
      </View> */}
      <View style={styles.dateContainer}>
        <View style={styles.date}>
          <Icons.Calendar />
          <AppText style={{ marginLeft: 10 }}>Mon, Apr 21</AppText>
        </View>
        <AppText style={{ color: colors.blue }}>Sort:Suggested</AppText>
      </View>
      <View style={{ overflow: "hidden", height: verticalScale(600) }}>
        <LoadDetailsList data={D.loadData} />
      </View>

      <View style={{ height: 100 }} />
    </View>
  );
}
const styles = StyleSheet.create({
  searchContainer: {
    height: verticalScale(80),
    backgroundColor: colors.lightGray,
    width: "100%",
  },
  date: { flexDirection: "row", alignItems: "center" },
  dateContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,

    height: verticalScale(58),
    alignItems: "center",
  },
});
