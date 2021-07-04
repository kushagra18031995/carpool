import React, { useState } from "react";
import { View, StyleSheet, Modal, TouchableOpacity, Text } from "react-native";
import { colors, Icons, dummyData } from "../../constants";
import { verticalScale } from "../../constants/scales";

import FilterModal from "./components/FilterModal";
import AuthNav from "./components/AuthNav";
import LoadDetailsList from "./components/LoadDetailsList";
import SortModal from "./components/SortModal";

export default function BookHome() {
  const [filter, setFilter] = useState(false);
  const [sort, setSort] = useState(false);
  const handleOptionsModal = () => {
    setFilter(!filter);
  };
  const handleSortModal = () => {
    setSort(!sort);
  };
  return (
    <View>
      <AuthNav title="Book" onPress={handleOptionsModal} />
      {/* <View style={styles.searchContainer}>
        <Text>Search</Text>
      </View> */}
      <View style={styles.dateContainer}>
        <View style={styles.date}>
          <Icons.Calendar />
          <Text style={{ marginLeft: 10 }}>Mon, Apr 21</Text>
        </View>
        <TouchableOpacity onPress={handleSortModal}>
          <Text style={{ color: colors.blue }}>Sort:Suggested</Text>
        </TouchableOpacity>
      </View>
      <View style={{ overflow: "hidden", height: verticalScale(600) }}>
        <LoadDetailsList data={dummyData.loadData} />
      </View>

      <View style={{ height: 100 }} />
      <FilterModal
        isVisible={filter}
        onBackdropPress={() => setFilter(false)}
      />
      <SortModal isVisible={sort} onBackdropPress={handleSortModal} />
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
