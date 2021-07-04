import React from "react";
import { View, Text, FlatList } from "react-native";
import LoadDetails from "./LoadDetails";

export default function LoadDetailsList({ data }) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => "key" + index}
      scrollEventThrottle={16}
      decelerationRate={"fast"}
      renderItem={({ item }) => {
        return <LoadDetails data={item} />;
      }}
    />
  );
}
