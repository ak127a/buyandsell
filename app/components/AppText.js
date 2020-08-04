import React from "react";
import { StyleSheet, Text } from "react-native";
import colors from "../config/colors";
import defaultStlyes from "../config/styles";

function AppText({ text, style }) {
  return <Text style={[defaultStlyes.text, style]}>{text}</Text>;
}

export default AppText;
