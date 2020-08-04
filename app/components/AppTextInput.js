import React from "react";
import { TextInput, StyleSheet, View } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import defaultStlyes from "../config/styles";

function AppTextInput({ icon, ...otherProps }) {
  return (
    <View pointerEvents="box-none" style={styles.container}>
      {icon && (
        <MaterialCommunityIcons name={icon} style={styles.icon} size={20} />
      )}
      <TextInput
        placeholderTextColor="#ababab"
        {...otherProps}
        style={[defaultStlyes.text, { flex: 1 }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.veryLightGrey,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
