import React, { useRef } from "react";
import { View, Button, StyleSheet } from "react-native";
import Nav from "../../components/Nav";
import OTPTextInput from "react-native-otp-textinput";
import colors from "../../constants/colors";
import { scale, verticalScale } from "../../constants/scales";
import AppButton from "../../components/AppButton";
import screenNames from "../../constants/screenNames";
import { AppText as Text } from "../../components";

export default function DotNumber() {
  const otpInput = useRef(null);

  const clearText = () => {
    otpInput.current.clear();
  };

  const setText = () => {
    otpInput.current.setValue("1234");
  };
  return (
    <View style={styles.container}>
      <Nav title="Enter your US Dot number" />
      <View style={styles.messageContainer}>
        <Text>
          We will use your DOT to check your safety rating and insurance
          coverage.
        </Text>
      </View>
      <Text style={{ width: scale(343), marginTop: 41 }}>US DOT Number</Text>
      <OTPTextInput
        ref={otpInput}
        inputCount={6}
        textInputStyle={styles.input}
        tintColor={colors.lightGray}
      />
      <Text style={styles.resend}>Resend?</Text>
      <Text style={{ width: scale(343), marginTop: 41 }}>MC Number</Text>
      <OTPTextInput
        ref={otpInput}
        inputCount={6}
        textInputStyle={styles.input}
        tintColor={colors.lightGray}
      />
      <Text style={styles.resend}>Resend?</Text>
      <AppButton
        title="Continue"
        bottom={verticalScale(40)}
        color={colors.black}
        screen={screenNames.contractTerms}
        arrow={false}
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
  resend: { width: scale(343), textAlign: "right", color: colors.blue },
});
