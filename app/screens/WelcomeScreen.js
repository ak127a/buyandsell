import React from "react";
import {
  ImageBackground,
  View,
  StyleSheet,
  Text,
  Image,
  Platform,
} from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/bg2.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo1.png")} />
        <Text numberOfLines={2} style={styles.tagline}>
          Sell what you don't need
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton text="LOGIN" />
        <AppButton text="REGISTER" color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  loginRegister: {
    color: "#fff",
    fontSize: 25,
    letterSpacing: 1.2,
  },
  logoContainer: {
    position: "absolute",
    top: 60,
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    marginTop: 10,
    textAlign: "center",
  },
});

export default WelcomeScreen;
