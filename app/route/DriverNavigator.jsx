import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import DriverHome from "../screens/appScreens/DriverHome";
import { screenName } from "../constants";
const Driver = createStackNavigator();

export default DriverNavigator = () => (
  <Driver.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Driver.Screen name={screenName.driverHome} component={DriverHome} />
  </Driver.Navigator>
);
