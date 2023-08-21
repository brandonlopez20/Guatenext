import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons'


export default function BtnProfile({ name, title, type, navigation }) {
  let iconComponent;

  function icons() {
    switch (type) {
      case 'ionicons':
        iconComponent = <Ionicons name={name} size={40} color="black" />;
        break;
      case 'font-awesome5':
        iconComponent = <FontAwesome5 name={name} size={40} color="black" />;
        break;
      case 'material-icons':
        iconComponent = <MaterialIcons name={name} size={50} color="black" />;
        break;
      default:
        iconComponent = null; // You can handle other cases as needed
    }
  }

  icons(); // Call the icons function to determine the icon component

  return (
    <View style={styles.Container}>
      <TouchableOpacity
        style={styles.BtnContainer}
        onPress={() => console.log("click")} // Open the CardsView screen using navigation
      >
        {iconComponent}
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    margin: 10,
  },
  BtnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 120,
    borderWidth: 3,
    borderColor: "white",
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
});
