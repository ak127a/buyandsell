import React from "react";
import {
  StyleSheet,
  Image,
  View,
  ImageBackground,
  Dimensions,
  KeyboardAvoidingView,
  StatusBar,
} from "react-native";
import Screen from "../components/Screen";

import * as Yup from "yup";

import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import { LinearGradient } from "expo-linear-gradient";
import AppText from "../components/AppText";
import ErrorMessage from "../components/ErrorMessage";
import AppFormField from "../components/forms/AppFormField";
import SubmitButton from "../components/SubmitButton";
import AppForm from "../components/forms/AppForm";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen() {
  return (
    <Screen>
      <LinearGradient
        colors={[
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#ffe7e6",
          "#ff9d96",
          "#ff2e1f",
        ]}
        style={styles.linearGradient}
      >
        <Image source={require("../assets/logo1.png")} style={styles.logo} />
        <View style={styles.inputContainer}>
          <AppForm
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}
          >
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              name="email"
              keyboardType="email-address"
              placeholder="Email"
              textContentType="emailAddress"
            />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              name="password"
              icon="lock"
              placeholder="Password"
              secureTextEntry
              textContentType="password"
            />
            <SubmitButton text="Login" />
          </AppForm>
        </View>
      </LinearGradient>
    </Screen>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    marginTop: 100,
    padding: 20,
  },
  linearGradient: {
    flex: 1,
    position: "absolute",
    left: 0,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginTop: 40,
  },
});

export default LoginScreen;
