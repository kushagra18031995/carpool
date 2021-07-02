import React, { useRef } from "react";
import { View, Button, StyleSheet } from "react-native";
import Nav from "../../components/Nav";
import OTPTextInput from "react-native-otp-textinput";
import colors from "../../constants/colors";
import { scale, verticalScale } from "../../constants/scales";
import AppButton from "../../components/AppButton";
import screenNames from "../../constants/screenNames";
import { AppText as Text } from "../../components";

export default function EnterOtp() {
  const otpInput = useRef(null);

  const clearText = () => {
    otpInput.current.clear();
  };

  const setText = () => {
    otpInput.current.setValue("1234");
  };
  return (
    <View style={styles.container}>
      <Nav title="OTP verification" />
      <View style={styles.messageContainer}>
        <Text>Enter 6 digit code sent</Text>
        <View style={styles.description}>
          <Text>you at 91XXXXXXXX</Text>
          <Text style={{ color: colors.blue, marginLeft: 5 }}>Change?</Text>
        </View>
      </View>
      <Text style={{ width: scale(343) }}>OTP</Text>
      <OTPTextInput
        ref={otpInput}
        inputCount={6}
        textInputStyle={styles.input}
        tintColor={colors.lightGray}
      />
      <Text style={styles.resend}>Resend?</Text>
      <AppButton
        title="Submit"
        bottom={verticalScale(213)}
        color={colors.black}
        screen={screenNames.description}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { alignItems: "center", height: "100%" },
  input: {
    backgroundColor: colors.lightGray,
    height: 48,
    width: 48,
  },
  messageContainer: {
    width: scale(343),
  },
  description: { flexDirection: "row", marginBottom: 20 },
  resend: { width: scale(343), textAlign: "right", color: colors.blue },
});
