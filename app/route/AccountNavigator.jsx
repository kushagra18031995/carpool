import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountHome from "../screens/appScreens/AccountHomeScreen";
import screenNames from "../constants/screenNames";
import Notification from "../screens/appScreens/NotificationScreen";
import Payment from "../screens/appScreens/PaymentScreen";
import PaymentSecond from "../screens/appScreens/PaymentSeondScreen";

const Account = createStackNavigator();
console.log(Account.Navigator);
export default AccountNavigator = () => (
  <Account.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Account.Screen name={screenNames.accountHome} component={AccountHome} />
    <Account.Screen name={screenNames.notification} component={Notification} />
    <Account.Screen name={screenNames.payment} component={Payment} />
    <Account.Screen
      name={screenNames.paymentSecond}
      component={PaymentSecond}
    />
  </Account.Navigator>
);
