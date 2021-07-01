import * as React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import screenNames from "../constants/screenNames";
import BookNavigator from "./BookNavigator";
import LoadNavigator from "./LoadNavigator";
import AccountNavigator from "./AccountNavigator";
import Icons from "../constants/icons";
import colors from "../constants/colors";
import DriverNavigator from "./DriverNavigator";

const Tab = createMaterialBottomTabNavigator();

export default function AppNavigator() {
  const tabStyle = {
    backgroundColor: colors.black,
    overflow: "hidden",
    paddingBottom: 10,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  };

  return (
    <Tab.Navigator
      activeColor={colors.white}
      inactiveColor={colors.gray}
      barStyle={tabStyle}
    >
      <Tab.Screen
        name={screenNames.bookHome}
        component={BookNavigator}
        options={{
          tabBarIcon: () => <Icons.Search />,
        }}
      />
      <Tab.Screen
        name={screenNames.driverHome}
        component={DriverNavigator}
        options={{
          tabBarIcon: () => <Icons.Steering />,
        }}
      />
      <Tab.Screen
        name={screenNames.loadHome}
        component={LoadNavigator}
        options={{
          tabBarIcon: () => <Icons.Load />,
        }}
      />
      <Tab.Screen
        name={screenNames.accountHome}
        component={AccountNavigator}
        options={{
          tabBarIcon: () => <Icons.Account />,
        }}
      />
      {/* <Tab.Screen
        name={Screen.bookmarks}
        component={Bookmarks}
        options={{
          tabBarIcon: () => <Icons.Bookmark />,
        }}
      />
      <Tab.Screen
        name={Screen.expert}
        component={Expert}
        options={{
          tabBarIcon: () => <Icons.Brain />,
        }}
      />
      <Tab.Screen
        name={Screen.challenge}
        component={Challenge}
        options={{
          tabBarIcon: () => <Icons.Question />,
        }}
      />
      <Tab.Screen
        name={Screen.more}
        component={More}
        options={{
          tabBarIcon: () => <Icons.More />,
        }}
      /> */}
    </Tab.Navigator>
  );
}
