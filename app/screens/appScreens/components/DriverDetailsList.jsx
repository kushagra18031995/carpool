import React from "react";
import { View, Text, FlatList } from "react-native";
import DriverDetails from "./DriverDetails";

export default function DriverDetailsList({ data }) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => "key" + index}
      scrollEventThrottle={16}
      decelerationRate={"fast"}
      renderItem={({ item }) => {
        return <DriverDetails data={item} />;
      }}
    />
  );
}
