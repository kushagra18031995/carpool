import React from "react";

import {
  MaterialCommunityIcons,
  Feather,
  MaterialIcons,
  FontAwesome5,
  EvilIcons,
  FontAwesome,
  Ionicons,
  AntDesign,
} from "react-native-vector-icons";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import colors from "./colors";
import { useNavigation } from "@react-navigation/native";
const Account = () => (
  <MaterialCommunityIcons
    name="account-outline"
    size={24}
    color={colors.white}
  />
);
const Apple = () => {
  return (
    <TouchableOpacity style={styles.iconContainer}>
      <AntDesign name="apple1" size={24} color={colors.black} />
    </TouchableOpacity>
  );
};
const Back = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{ marginHorizontal: 16 }}
    >
      <MaterialIcons name="arrow-back" size={30} color={colors.black} />
    </TouchableOpacity>
  );
};
const Bell = () => (
  <TouchableOpacity>
    <Feather name="bell" size={24} color={colors.black} />
  </TouchableOpacity>
);
const Calendar = () => (
  <Feather name="calendar" size={20} color={colors.black} />
);
const Call = ({ color }) => (
  <TouchableOpacity>
    <Feather name="phone-call" size={24} color={color} />
  </TouchableOpacity>
);
const Chat = () => (
  <TouchableOpacity>
    <MaterialCommunityIcons
      name="chat-outline"
      size={24}
      color={colors.black}
    />
  </TouchableOpacity>
);
const Clipboard = ({ color }) => (
  <Feather name="clipboard" size={24} color={color} />
);
const Eye = ({ show }) => {
  return (
    <View>
      {show ? (
        <Feather name="eye" size={15} color="black" />
      ) : (
        <Feather name="eye-off" size={15} color="black" />
      )}
    </View>
  );
};
const ForwardArrow = () => {
  return <MaterialIcons name="arrow-forward" size={20} color={colors.white} />;
};
const Fb = () => {
  return (
    <TouchableOpacity style={styles.iconContainer}>
      <EvilIcons name="sc-facebook" size={24} color={colors.blue} />
    </TouchableOpacity>
  );
};
const Google = () => {
  return (
    <TouchableOpacity style={styles.iconContainer}>
      <EvilIcons name="sc-google-plus" size={24} color={colors.red} />
    </TouchableOpacity>
  );
};
const Load = () => <Feather name="download" size={24} color={colors.white} />;
const Search = () => <EvilIcons name="search" size={24} color={colors.white} />;
const SignOut = () => (
  <FontAwesome name="sign-in" size={24} color={colors.red} />
);
const Steering = () => (
  <Image
    style={{ width: 16, height: 16 }}
    source={require("../assets/images/steering.png")}
  />
);
const Truck = () => <Feather name="truck" size={24} color={colors.blue} />;
export default {
  Account,
  Apple,
  Back,
  Bell,
  Calendar,
  Call,
  Chat,
  Clipboard,
  Eye,
  Fb,
  ForwardArrow,
  Google,
  Load,
  Search,
  SignOut,
  Steering,
  Truck,
};
const styles = StyleSheet.create({
  iconContainer: {
    height: 46,
    width: 46,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: "#C0D3D9",
    alignItems: "center",
    justifyContent: "center",
  },
});
