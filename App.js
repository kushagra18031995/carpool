import React, { useState } from "react";
import { StatusBar, useContext } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import AuthContext from "./app/auth/context";
import AppNavigator from "./app/route/AppNavigator";
import AuthNavigator from "./app/route/AuthNavigator";

export default function App() {
  const [authentic, setAuthentic] = useState(true);
  return (
    <AuthContext.Provider value={{ authentic, setAuthentic }}>
      <NavigationContainer>
        <StatusBar backgroundColor="white" />

        {authentic ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
