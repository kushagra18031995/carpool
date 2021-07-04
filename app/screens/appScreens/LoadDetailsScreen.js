import React from "react";
import { View, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import AuthNav from "./components/AuthNav";
import { AppText as Text } from "../../components/AppText";
import { colors, Icons, screenName } from "../../constants";
import { width } from "../../constants/scales";
export default function SingleLoadDetail() {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <AuthNav title="Load Details" />
      <View style={styles.reference}>
        <Text style={{ fontSize: 20, marginBottom: 13 }}>
          BB's Distributors, LLC
        </Text>
        <Text>4485 Main ST</Text>
        <Text>San Antonio, Tx75050</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.rating}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text>4.8</Text>
          <Icons.Star />
          <Text>(64 ratings)</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate(screenName.reviewDetails)}
        >
          <Text style={{ color: colors.blue }}>View Reviews</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.divider} />
      <View style={styles.noteContainer}>
        <Text style={{ fontSize: 18 }}>Shipper Note</Text>
        <Text>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem
        </Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.referenceContainer}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text style={{ fontSize: 18 }}>Reference Number</Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ color: colors.gray }}> Purchase Order#</Text>
            <Text>876956729</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ color: colors.gray }}>Pick Up#</Text>
            <Text>876956729</Text>
          </View>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.commodity}>
        <Text>Commodity</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.appointment}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text style={{ fontSize: 18 }}>Appointment</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ color: colors.gray }}>Date</Text>
          <Text>Tues Apr 29, 04:38 CST</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.appointment}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text style={{ fontSize: 18 }}>Contact</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ color: colors.gray }}>Phone Number</Text>
          <Text>(000) 000-0000</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.amenities}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text style={{ fontSize: 18 }}>Amenities</Text>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <Text style={{ color: colors.gray }}>Rest Room</Text>
            <Text style={{ color: colors.blue }}>Yes</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ color: colors.gray }}>On-site scale</Text>
            <Text style={{ color: colors.blue }}>Yes</Text>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <Text style={{ color: colors.gray }}>Food</Text>
            <Text style={{ color: colors.blue }}>Yes</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ color: colors.gray }}>Rest area</Text>
            <Text style={{ color: colors.blue }}>Yes</Text>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "column" }}>
          <Text style={{ color: colors.gray }}>Overnight parking</Text>
          <Text style={{ color: colors.blue }}>Yes</Text>
        </View>
        <View style={{ flex: 1 }}></View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  amenities: {
    width,
    height: 304,
    backgroundColor: colors.white,
    paddingHorizontal: 16,
  },
  appointment: {
    width,
    height: 130,
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    flexDirection: "column",
  },
  commodity: {
    width,
    height: 194,
    backgroundColor: colors.white,
    paddingHorizontal: 16,
  },
  noteContainer: {
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    paddingVertical: 24,
  },
  reference: {
    height: 120,
    width,
    backgroundColor: colors.white,
    marginTop: 15,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },

  referenceContainer: {
    height: 130,
    width,
    backgroundColor: colors.white,
    flexDirection: "column",
    paddingHorizontal: 16,
  },
  divider: {
    height: 1,
    width,
    backgroundColor: colors.lightGray4,
  },
  rating: {
    height: 67,
    backgroundColor: colors.white,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    justifyContent: "space-between",
  },
});
