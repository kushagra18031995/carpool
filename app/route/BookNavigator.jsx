import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BookHome from "../screens/appScreens/BookHomeScreen";
import screenNames from "../constants/screenNames";

const Book = createStackNavigator();
export default BookNavigator = () => (
  <Book.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Book.Screen name={screenNames.bookHome} component={BookHome} />
  </Book.Navigator>
);
