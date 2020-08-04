import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "bla1",
    description: "blo1",
    image: require("../assets/bg3.jpg"),
  },
  {
    id: 2,
    title: "bla2",
    description: "blo5",
    image: require("../assets/bg2.jpg"),
  },
  {
    id: 3,
    title: "bla2",
    description: "blo3",
    image: require("../assets/bg2.jpg"),
  },
  {
    id: 4,
    title: "bla2",
    description: "blo4",
    image: require("../assets/bg2.jpg"),
  },
];

function MessagesScreen() {
  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "bla2",
              description: "blo5",
              image: require("../assets/bg2.jpg"),
            },
          ]);
        }}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            image={item.image}
            subtitle={item.description}
            onPress={() => console.log("msg selected", item.description)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
