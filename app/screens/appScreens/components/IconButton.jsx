import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AuthContext from "../../../auth/context";
import { Icons, colors } from "../../../constants";
import { verticalScale, scale, width } from "../../../constants/scales";
import { AppText } from "../../../components";

export default function IconButton({ title }) {
  const { setAuthentic } = useContext(AuthContext);
  const navigation = useNavigation();
  const handlePress = () => {
    {
      title == "Sign Out" && setAuthentic(false);
    }
  };
  return (
    <TouchableOpacity onPress={handlePress} style={[styles.button]}>
      {title == "Contact Supporter" && <Icons.Call color={colors.blue} />}
      {title == "Legal" && <Icons.Clipboard color={colors.blue} />}
      {title == "Sign Out" && <Icons.SignOut />}
      <AppText
        style={[
          styles.text,
          { color: title !== "Sign Out" ? colors.black : colors.red },
        ]}
      >
        {title}
      </AppText>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    width,
    height: verticalScale(56),
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    backgroundColor: colors.white,
  },
  text: { color: colors.white, marginRight: 11, marginLeft: 16, fontSize: 18 },
});
