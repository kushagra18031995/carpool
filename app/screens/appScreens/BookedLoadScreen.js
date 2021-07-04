import React from "react";

import { StyleSheet, View } from "react-native";
import LoadDetailsList from "./components/LoadDetailsList";
import D from "../../constants/dummyData";
import { AppText as Text } from "../../components/AppText";

export default function BookedLoads() {
  return (
    <>
      <View style={styles.textContainer}>
        <Text style={{ fontWeight: "900", fontSize: 16 }}>In Progress</Text>
      </View>
      <LoadDetailsList data={D.loadData} />
    </>
  );
}
const styles = StyleSheet.create({
  textContainer: {
    height: 58,
    paddingHorizontal: 16,
    justifyContent: "center",
  },
});
