import React, { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../../../constants/colors";
import Icons from "../../../constants/icons";
import { verticalScale, scale } from "../../../constants/scales";
import { AppText as Text } from "../../../components";

export default function AppTextInput({ title, ...props }) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View style={styles.container}>
      <Text>{title}</Text>

      <TextInput
        placeholder=""
        style={styles.textInput}
        {...props}
        secureTextEntry={showPassword}
      ></TextInput>
      {title == "Password" && (
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={styles.iconContainer}
        >
          <Icons.Eye show={showPassword} />
        </TouchableOpacity>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: { marginTop: 40 },

  iconContainer: { position: "absolute", right: 15, bottom: 15 },
  textInput: {
    backgroundColor: colors.lightGray,
    width: scale(343),
    height: scale(48),
    paddingLeft: 10,
  },
});
