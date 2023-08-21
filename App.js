import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './src/Tabs/HomeScreen';
import ProfileScreen from './src/Tabs/ProfileScreen';
import SettingsScreen from './src/Tabs/SettingsScreen';

import ImgProfile from './assets/foto1.jpg'
import LoadingScreen from './src/loading';

const Tab = createBottomTabNavigator();

const App = () => {

  const [loading, setLoading] = React.useState(true);

  // Simula una carga con un temporizador
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Cambia este valor a lo que sea necesario
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }



  const styles = StyleSheet.create({
    profile: {
      width: '100%',
      height: '100%',
      borderRadius: 60,
    },
    viewImg: {
      borderWidth: 3,
      width: "70%",
      height: "250%",
      borderRadius: 60,
      marginBottom: 60,
      borderColor: 'transparent', // Inicialmente sin borde
    },
    viewImgActive: {
      borderColor: 'transparent', // Color del borde cuando está activado
    }
  });

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                size={focused ? size + 8 : size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => (
              <View
                style={[
                  styles.viewImg,
                  focused && styles.viewImgActive,
                  focused && { borderColor: color }, // Aplica el estilo cuando está activado
                ]}
              >
                <Image source={ImgProfile} style={styles.profile} />
              </View>
            ),
          })}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? 'settings' : 'settings-outline'}
                size={focused ? size + 8 : size}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
