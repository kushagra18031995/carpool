import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import BookedLoads from "../screens/appScreens/BookedLoadScreen";
import PastLoad from "../screens/appScreens/PastLoadScreen";
import AuthNav from "../screens/appScreens/components/AuthNav";
import { useFonts } from "expo-font";

const Load = createMaterialTopTabNavigator();

export default function LoadNavigator() {
  useFonts({
    fontFamily: require("../assets/fonts/UberMove.ttf"),
  });
  const options = {
    labelStyle: { fontWeight: "900", fontFamily: "fontFamily" },
    tabStyle: { width: 100 },
    indicatorStyle: { width: 60, alignSelf: "center", marginLeft: 20 },
    style: {
      borderBottomLeftRadius: 18,
      borderBottomRightRadius: 18,
    },
  };
  return (
    <>
      <AuthNav title="My Loads" />
      <Load.Navigator tabBarOptions={options}>
        <Load.Screen name="Booked" component={BookedLoads} />
        <Load.Screen name="Past" component={PastLoad} />
      </Load.Navigator>
    </>
  );
}
