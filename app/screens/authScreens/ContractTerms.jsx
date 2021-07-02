import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import AppButton from "../../components/AppButton";
import colors from "../../constants/colors";
import { scale, verticalScale } from "../../constants/scales";
import screenNames from "../../constants/screenNames";
import Nav from "../../components/Nav";
import { AppText as Text } from "../../components";

export default function ContractTerms() {
  return (
    <View style={styles.container}>
      <Nav title="Carrier contract and payment terms" />
      <ScrollView>
        <Text style={styles.text}>
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?"
        </Text>
      </ScrollView>
      <AppButton
        title="Continue"
        bottom={verticalScale(41)}
        color={colors.black}
        screen={screenNames.addDriver}
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
  },
});
