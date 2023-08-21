import React, { useState } from 'react';
import { View, TouchableOpacity, Animated, Text, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const AnimatedButton = (props) => {
  const [animation] = useState(new Animated.Value(1));
  const handlePress = (toValue) => {
    Animated.timing(animation, {
      toValue,
      duration: 150,
      useNativeDriver: false,
    }).start();
  };

  const scaleStyle = { transform: [{ scale: animation }] };
  const borderColor = animation.interpolate({
    inputRange: [0.95, 1],
    outputRange: ['rgba(255, 255, 255, 0.7)', 'rgba(255, 255, 255, 0.5)'],
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPressIn={() => handlePress(0.95)}
        onPressOut={() => handlePress(1)}
        activeOpacity={1}
      >
        <Animated.View style={[styles.button, scaleStyle, { borderColor }]}>
        <Entypo 
        name="log-out" 
        size={24} 
        color="black" />
          <Text style={styles.buttonText}>{ props.title }</Text>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 0,
    top: 0,
    borderRadius: 4,    
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    borderWidth: 1,
    
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default AnimatedButton;

