import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

export default function BtnSettings({ type, name, firstColor, secondColor, title, color }) {

  let iconComponent;

  function icons() {
    switch (type) {
      case 'ionicons':
        iconComponent = <Ionicons name={name} size={40} color={color} />;
        break;
      case 'font-awesome5':
        iconComponent = <FontAwesome5 name={name} size={40} color={color} />;
        break;
      case 'material-icons':
        iconComponent = <MaterialIcons name={name} size={50} color={color} />;
        break;
      default:
        iconComponent = null; // You can handle other cases as needed
    }
  }

  icons(); // Call the icons function to determine the icon component


  return (
    <TouchableOpacity>
      <LinearGradient
        colors={[firstColor, secondColor]}
        style={styles.Btnlinear}
      >
        <View style={styles.container}>
          {iconComponent}
          <Text style={styles.title}>{title}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Btnlinear: {
    height: 100,
    margin: 5,
    width: 165,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  title: {
    color: "black"
  }
});
