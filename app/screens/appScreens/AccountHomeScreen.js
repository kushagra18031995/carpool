import React from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import { colors, Icons } from "../../constants";

import IconButton from "./components/IconButton";

import { scale, verticalScale, width } from "../../constants/scales";
import AuthNav from "./components/AuthNav";
import { AppText as Text } from "../../components/AppText";

export default function AccountHome() {
  return (
    <ScrollView>
      <AuthNav title="Account" />
      <View style={styles.profileContainer}>
        <View style={styles.col1}>
          <View style={styles.col1row1}>
            <Text style={styles.name}>Harry Smith</Text>
            <Text>Driver</Text>
          </View>
          <View style={styles.col1row2}>
            <Image
              style={styles.imageContainer}
              source={{
                uri: "https://jenworley.com/wp-content/uploads/2020/04/Pittsburgh-Headshot-Photographer-1203-min.jpg",
              }}
            />
          </View>
        </View>
        <View style={styles.col2}>
          <View style={styles.col2row1}>
            <Text style={styles.lightText}>Member Since</Text>
            <Text styles={styles.subText}>Jan 2015</Text>
          </View>
          <View style={styles.col2row2}>
            <Text style={styles.lightText}>Lifetime Loads</Text>
            <Text styles={styles.subText}>15</Text>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.trucking}>
          <View style={styles.iconContainer}>
            <Icons.Truck />
            <Text style={{ marginLeft: 18, fontWeight: "900", fontSize: 18 }}>
              Apple Express Trucking
            </Text>
          </View>
          <View style={styles.details}>
            <View style={styles.dotContainer}>
              <Text style={{ color: colors.gray }}>DOT#</Text>
              <Text>12345</Text>
            </View>
            <View style={styles.mcContainer}>
              <Text style={{ color: colors.gray }}>MC#</Text>
              <Text>12345</Text>
            </View>
          </View>
        </View>
        <IconButton title="Contact Supporter" />
        <IconButton title="Legal" />
        <IconButton title="Payment" />
        <IconButton title="Notification" />
      </View>
      <View style={{ height: 15 }} />
      <IconButton title="Sign Out" />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  col1: { flex: 2, flexDirection: "row" },
  col1row1: { flex: 2, justifyContent: "space-around" },
  col1row2: {
    flex: 2,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  col2: { flex: 2, flexDirection: "row" },
  col2row1: { flex: 2, justifyContent: "center" },
  col2row2: { flex: 2, justifyContent: "center" },
  container: { backgroundColor: "white", marginTop: 15 },
  details: { flex: 1, flexDirection: "row", paddingLeft: scale(40) },
  lightText: { color: colors.gray, fontSize: 12 },
  subText: { fontSize: 14 },
  imageContainer: { height: 52, width: 52, borderRadius: 26 },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  dotContainer: { flex: 2, flexDirection: "column", justifyContent: "center" },
  mcContainer: { flex: 2, flexDirection: "column", justifyContent: "center" },
  name: {
    color: colors.blue,
    fontSize: 28,
    fontStyle: "normal",
    fontWeight: "normal",
  },
  profileContainer: {
    height: verticalScale(167),
    width,
    backgroundColor: colors.white,
    marginTop: 15,
    flexDirection: "column",
    paddingHorizontal: 16,
  },
  separationLine: {
    backgroundColor: colors.lightGray,
    width: width - 32,
    height: 1,
    alignSelf: "center",
    opacity: 0.5,
  },
  trucking: {
    width,
    height: 140,
    paddingHorizontal: 16,
    paddingTop: 26,
  },
});
