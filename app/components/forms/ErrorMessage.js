import React from "react";
import AppText from "../AppText";
import { StyleSheet } from "react-native";

function ErrorMessage({ error, visible }) {
  if (!error || !visible) return null;

  return <AppText text={error} style={styles.error} />;
}

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});

export default ErrorMessage;
