import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BookHome from "../screens/appScreens/BookHomeScreen";
import screenNames from "../constants/screenNames";
import Favorite from "../screens/appScreens/FavoriteScreen";
import SingleLoadDetail from "../screens/appScreens/LoadDetailsScreen";
import ViewReviews from "../screens/appScreens/ViewReviewsScreen";

const Book = createStackNavigator();
export default BookNavigator = () => (
  <Book.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Book.Screen name={screenNames.bookHome} component={BookHome} />
    <Book.Screen name={screenNames.favorite} component={Favorite} />
    <Book.Screen
      name={screenNames.singleLoadDetails}
      component={SingleLoadDetail}
    />
    <Book.Screen name={screenNames.reviewDetails} component={ViewReviews} />
  </Book.Navigator>
);
