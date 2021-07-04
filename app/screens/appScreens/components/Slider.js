import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Slider } from "react-native-elements";
import { AppText as Text } from "../../../components";
import { colors, Icons } from "../../../constants";
import { scale } from "../../../constants/scales";
export default function AppSlider({ title }) {
  const [value, setValue] = useState();
  return (
    <View style={styles.container}>
      <View style={styles.locationContainer}>
        <View style={{ flexDirection: "row" }}>
          {title == "Drop Off" ? <Icons.MapMarker /> : <Icons.Location />}

          <Text>{title}</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ color: colors.gray }}>+50</Text>
          <Icons.Close />
        </View>
      </View>
      <View style={styles.sliderContainer}>
        <Text style={{ marginRight: 10, fontSize: 12, color: colors.gray }}>
          Radius:0mi
        </Text>
        <Slider
          value={value}
          onValueChange={(value) => setValue(value)}
          thumbStyle={{ backgroundColor: colors.blue, height: 12, width: 12 }}
          trackStyle={{ width: scale(182) }}
          minimumTrackTintColor={colors.blue}
          maximumTrackTintColor={colors.lightGray4}
        />
        <Text style={{ marginLeft: 10, fontSize: 12, color: colors.gray }}>
          250mi
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 13,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sliderContainer: { flexDirection: "row", alignItems: "center" },
});
