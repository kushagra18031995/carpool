import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { AuthNav } from "./components/";
import { AppText as Text } from "../../components";
import { width } from "../../constants/scales";
import { colors, Icons } from "../../constants";

export default function ViewReviews() {
  return (
    <ScrollView>
      <AuthNav title="Load Details" />
      <View style={styles.reference}>
        <Text style={{ fontSize: 20, marginBottom: 13 }}>
          BB's Distributors, LLC
        </Text>
        <View style={styles.rating}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text>4.8</Text>
            <Icons.Star />
            <Text>(64 ratings)</Text>
          </View>
        </View>
      </View>
      <View style={styles.divider} />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  divider: {
    height: 1,
    width,
    backgroundColor: colors.lightGray4,
  },
  reference: {
    // height: 120,
    width,
    backgroundColor: colors.white,
    marginTop: 15,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
});
