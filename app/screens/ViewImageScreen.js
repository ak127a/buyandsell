import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color="white" size={35} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={35}
        />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/bg2.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    top: 30,
    left: 30,
    backgroundColor: "rgba(250 , 250 ,250 , 0.3)",
    borderRadius: 35,
    padding: 10,
  },
  deleteIcon: {
    position: "absolute",
    top: 30,
    right: 30,
    backgroundColor: "rgba(250 , 250 ,250 , 0.3)",
    borderRadius: 35,
    padding: 10,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});

export default ViewImageScreen;
