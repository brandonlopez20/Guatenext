import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
 
const AccordionItem = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);
  const [animation] = useState(new Animated.Value(0));

  const handleToggle = () => {
    setExpanded(!expanded);
    Animated.timing(animation, {
      toValue: expanded ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const contentHeightInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 200], // AQUI CAMBIAMOS LE VALOR SEGUN EL CONTENIIDO
  });

  const contentStyle = {
    height: contentHeightInterpolation,
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleToggle}>
        <View style={styles.titleContainer}>
        <FontAwesome5 
        name="info" 
        size={24} 
        color="black" />
          <Text style={styles.title}>{title}</Text>
          <Animated.Text style={[styles.arrow, { transform: [{ rotate: expanded ? '180deg' : '0deg' }] }]}>▼</Animated.Text>
        </View>
      </TouchableOpacity>
      <Animated.View style={[styles.content, contentStyle]}>

        {content}
        
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 10,
    overflow: 'hidden',
    width: '100%',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
  },
  arrow: {
    fontSize: 20,
  },
  content: {
    padding: 10,
    overflow: 'hidden',
  },
});

export default AccordionItem;
