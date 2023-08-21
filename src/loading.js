import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Animated } from 'react-native';
import GuateNext from '../assets/GuateNext.jpg';

const LoadingScreen = () => {
  const [animationValue] = useState(new Animated.Value(0));

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animationValue, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(animationValue, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  const translateY = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 10],
  });

  return (
    <View style={styles.container}>
      <Image source={GuateNext} style={styles.Img} />
      <View style={styles.ballsContainer}>
        <Animated.View style={[styles.ball, { transform: [{ translateY }] }]} />
        <Animated.View style={[styles.ball, { transform: [{ translateY }] }]} />
        <Animated.View style={[styles.ball, { transform: [{ translateY }] }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Img: {
    width: 400,
    height: 300,
  },
  ballsContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  ball: {
    width: 20,
    height: 20,
    backgroundColor: '#DF860C',
    borderRadius: 10,
    marginHorizontal: 5,
  },
});

export default LoadingScreen;
