import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import AppButtonCustom from "../../components/AppButtonCustom";
import colors from "../../constants/colors";
import { scale } from "../../constants/scales";
import screenNames from "../../constants/screenNames";
import AppContactInput from "./components/AppContactInput";
import AppTextInput from "./components/AppTextInput";
import Nav from "./components/Nav";
import SignInOptions from "./components/SignInOptions";
import { AppText as Text } from "../../components";

export default function Login() {
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Nav title="Login" />
      <AppContactInput />
      <AppTextInput
        title="Password"
        value={password}
        onChangeText={(v) => setPassword(v)}
      />

      <Text style={styles.forgotPassword}>Forgot Password?</Text>
      <AppButtonCustom
        title="Login"
        color={colors.black}
        screen={screenNames.otp}
      />
      <TouchableOpacity
        style={{ flexDirection: "row", marginVertical: 20 }}
        onPress={() => navigation.navigate(screenNames.signUp)}
      >
        <Text>Don't have a account?</Text>
        <Text style={{ color: colors.blue }}>Create Account</Text>
      </TouchableOpacity>
      <SignInOptions />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: colors.lightBackground,
  },
  forgotPassword: {
    color: colors.blue,
    width: scale(343),
    textAlign: "right",
    marginTop: 10,
    marginBottom: 31,
  },
});
