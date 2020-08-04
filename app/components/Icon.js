import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";

function Icon({
  name,
  iconColor = "#FFF",
  backgroundColor = "#000",
  size = 40,
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons size={size * 0.6} color={iconColor} name={name} />
    </View>
  );
}

export default Icon;
