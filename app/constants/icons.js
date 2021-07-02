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
import { screenName } from ".";
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
const Bell = ({ color = colors.black }) => (
  <TouchableOpacity>
    <Feather name="bell" size={24} color={color} />
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
const Heart = () => (
  <View style={styles.heartContainer}>
    <View style={styles.heartCircle} />
    <AntDesign name="heart" size={20} color={colors.blue} />
  </View>
);
const Load = () => <Feather name="download" size={24} color={colors.white} />;

const Option = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate(screenName.favorite)}>
      <Ionicons name="md-options" size={24} color="black" />
    </TouchableOpacity>
  );
};
const Payment = () => (
  <MaterialIcons name="payment" size={24} color={colors.blue} />
);
const Search = () => <EvilIcons name="search" size={24} color={colors.white} />;
const SignOut = () => (
  <FontAwesome name="sign-in" size={24} color={colors.red} />
);
const Star = () => (
  <AntDesign
    name="star"
    size={24}
    color={colors.yellow}
    style={{ marginHorizontal: 10 }}
  />
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
  Heart,
  Load,
  Option,
  Payment,
  Search,
  SignOut,
  Star,
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
  heartContainer: {
    height: 44,
    width: 44,
    justifyContent: "center",
    alignItems: "center",
  },
  heartCircle: {
    height: 44,
    width: 44,
    borderRadius: 22,
    backgroundColor: colors.blue,
    opacity: 0.15,
    position: "absolute",
  },
});
