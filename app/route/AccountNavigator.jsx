import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountHome from "../screens/appScreens/AccountHomeScreen";
import screenNames from "../constants/screenNames";

const Account = createStackNavigator();
export default AccountNavigator = () => (
  <Account.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Account.Screen name={screenNames.accountHome} component={AccountHome} />
  </Account.Navigator>
);
