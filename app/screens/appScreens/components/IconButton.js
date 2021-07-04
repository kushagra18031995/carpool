import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AuthContext from "../../../auth/context";
import { Icons, colors, screenName } from "../../../constants";
import { verticalScale, scale, width } from "../../../constants/scales";
import { AppText } from "../../../components";

export default function IconButton({ title }) {
  const { setAuthentic } = useContext(AuthContext);
  const navigation = useNavigation();
  const handlePress = () => {
    if (title == "Sign Out") setAuthentic(false);
    if (title == "Notification") navigation.navigate(screenName.notification);
    if (title == "Payment") navigation.navigate(screenName.payment);
  };
  return (
    <>
      <View style={styles.separationLine} />
      <TouchableOpacity onPress={handlePress} style={[styles.button]}>
        {title == "Contact Supporter" && <Icons.Call color={colors.blue} />}
        {title == "Legal" && <Icons.Clipboard color={colors.blue} />}
        {title == "Sign Out" && <Icons.SignOut />}
        {title == "Payment" && <Icons.Payment />}
        {title == "Notification" && <Icons.Bell color={colors.blue} />}
        <AppText
          style={[
            styles.text,
            { color: title !== "Sign Out" ? colors.black : colors.red },
          ]}
        >
          {title}
        </AppText>
      </TouchableOpacity>
    </>
  );
}
const styles = StyleSheet.create({
  button: {
    width,
    height: verticalScale(70),
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    backgroundColor: colors.white,
  },
  separationLine: {
    backgroundColor: colors.lightGray,
    width: width - 32,
    height: 1,
    alignSelf: "center",
    opacity: 0.5,
  },
  text: { color: colors.white, marginRight: 11, marginLeft: 16, fontSize: 18 },
});
