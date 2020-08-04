import React from "react";

import Screen from "../components/Screen";
import { FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "BLAP",
    price: "$100",
    image: require("../assets/bg3.jpg")
  },
  {
    id: 2,
    title: "BLEoP",
    price: "$200",
    image: require("../assets/bg2.jpg")
  }
];

function ListingsScreen() {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={listing => listing.id.toString()}
        renderItem={({ item }) => (
          <Card title={item.title} subtitle={item.price} image={item.image} />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.veryLightGrey,
    padding: 20
  }
});

export default ListingsScreen;
