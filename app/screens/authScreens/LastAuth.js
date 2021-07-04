import React, { useContext } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import AuthContext from "../../auth/context";
import colors from "../../constants/colors";
import { scale, verticalScale } from "../../constants/scales";
import AppButton from "../../components/AppButton";
import { AppText as Text } from "./components/AppText";
import Nav from "../../components/Nav";
export default function LastAuth() {
  const { authentic, setAuthentic } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Nav title="You are now ready to use Carpool" />
      <Text style={styles.text}>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium.
      </Text>

      <AppButton
        title="Continue"
        bottom={verticalScale(41)}
        color={colors.black}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "100%",
  },
  text: {
    width: scale(343),
    color: colors.gray,
  },
});
