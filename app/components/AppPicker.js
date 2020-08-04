import React, { useState } from "react";
import {
  TextInput,
  StyleSheet,
  View,
  FlatList,
  TouchableWithoutFeedback,
  Modal,
  Button,
  TouchableOpacity,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import defaultStlyes from "../config/styles";
import AppText from "./AppText";
import Screen from "./Screen";
import PickerItem from "./PickerItem";

function AppPicker({ icon, items, onSelectItem, placeHolder, selectedItem }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons name={icon} style={styles.icon} size={20} />
          )}
          <AppText
            style={styles.text}
            text={selectedItem ? selectedItem.label : placeHolder}
          />
          <MaterialCommunityIcons name="chevron-down" size={20} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <View style={styles.closeButtonContainerOuter}>
            <TouchableOpacity
              style={styles.closeButtonContainer}
              onPress={() => setModalVisible(false)}
            >
              <MaterialCommunityIcons name="close-circle-outline" size={30} />
              <AppText style={{ marginLeft: 5 }} text="Close" />
            </TouchableOpacity>
          </View>
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGrey,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    padding: 15,
    marginVertical: 10,
  },
  closeButtonContainerOuter: {
    position: "absolute",
    width: "100%",
    bottom: 40,
    zIndex: 1,
  },
  closeButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    flex: 1,
  },
  icon: {
    marginRight: 10,
  },
});

export default AppPicker;
