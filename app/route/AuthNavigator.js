import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import screenNames from "../constants/screenNames";

import Login from "../screens/authScreens/LoginScreen";
import EnterOtp from "../screens/authScreens/EnterOtpScreen";
import Description from "../screens/authScreens/DescriptionScreen";
import TrailerType from "../screens/authScreens/TrailerTypeScreen";
import DotNumber from "../screens/authScreens/DotNumberScreen";
import ContractTerms from "../screens/authScreens/ContractTerms";
import AddDriver from "../screens/authScreens/AddDriverScreen";
import AddMember from "../screens/authScreens/AddMemeberScreen";
import LastAuth from "../screens/authScreens/LastAuth";
import SignUp from "../screens/authScreens/SignUpScreen";

const Stack = createStackNavigator();
export default AuthNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name={screenNames.login} component={Login} />
    <Stack.Screen name={screenNames.otp} component={EnterOtp} />
    <Stack.Screen name={screenNames.description} component={Description} />
    <Stack.Screen name={screenNames.trailerType} component={TrailerType} />
    <Stack.Screen name={screenNames.dotNumber} component={DotNumber} />
    <Stack.Screen name={screenNames.contractTerms} component={ContractTerms} />
    <Stack.Screen name={screenNames.addDriver} component={AddDriver} />
    <Stack.Screen name={screenNames.addMember} component={AddMember} />
    <Stack.Screen name={screenNames.lastAuth} component={LastAuth} />
    <Stack.Screen name={screenNames.signUp} component={SignUp} />
  </Stack.Navigator>
);
