import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

function ListingDetailsScreen() {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/bg3.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title} text="red jacket" />
        <AppText style={styles.price} text="$100" />
        <View style={{ marginTop: 40 }}>
          <ListItem
            image={require("../assets/bg.jpg")}
            name="Transformer"
            numberOfListings={10}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    marginTop: 7,
  },
});

export default ListingDetailsScreen;
