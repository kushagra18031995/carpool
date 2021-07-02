import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";

import { AppText } from "../../../components";
import { Icons, colors } from "../../../constants";
import { moderateScale, scale, verticalScale } from "../../../constants/scales";
const { width } = Dimensions.get("window");

export default function AuthNav({ title }) {
  return (
    <View
      style={[
        styles.navBar,
        (title == "Account" || title == "For You" || title == "Load Details") &&
          styles.conditionalNav,
      ]}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {(title == "Book" || title == "My Loads") && <Icons.Chat />}
        <AppText style={styles.title}>{title}</AppText>
      </View>
      {title == "Book" && (
        <View style={{ flexDirection: "row" }}>
          <Icons.Option />
          <Icons.Bell />
        </View>
      )}

      {title == "For You" && <Icons.Bell />}
      {(title == "My Loads" || title == "Drivers") && <Icons.Call />}
    </View>
  );
}
const styles = StyleSheet.create({
  navBar: {
    width: "100%",
    minHeight: verticalScale(90),
    marginTop: Constants.statusBarHeight,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 16,
    backgroundColor: "white",
    justifyContent: "space-between",
  },
  conditionalNav: {
    borderBottomRightRadius: 18,
    borderBottomLeftRadius: 18,
    shadowColor: "red",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: moderateScale(22),
    fontWeight: "900",
    color: colors.black,
    marginLeft: 16,
    // maxWidth: scale(300),
    // backgroundColor: "red",
  },
});
