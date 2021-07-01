import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useFonts } from "expo-font";
export default function AppText({ children, style }) {
  const [loaded] = useFonts({
    fontFamily: require("../assets/fonts/UberMove.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return <Text style={[{ fontFamily: "fontFamily" }, style]}>{children}</Text>;
}
