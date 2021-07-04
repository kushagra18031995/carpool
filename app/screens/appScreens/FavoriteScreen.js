import React from "react";
import { View, StyleSheet } from "react-native";
import { colors, Icons } from "../../constants";
import { verticalScale, width } from "../../constants/scales";
import AuthNav from "./components/AuthNav";
import LoadDetailsList from "./components/LoadDetailsList";
import D from "../../constants/dummyData";
import { AppText as Text } from "../../components/AppText";

export default function Favorite() {
  return (
    <View>
      <AuthNav title="For You" />
      <View style={styles.fav}>
        <Icons.Heart />
        <Text style={{ paddingRight: 48, paddingLeft: 15 }}>
          Load suggested for you based on your load and browsing history
        </Text>
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
  fav: {
    width,
    height: 98,
    marginVertical: 28,
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    alignItems: "center",
    flexDirection: "row",
  },
});
