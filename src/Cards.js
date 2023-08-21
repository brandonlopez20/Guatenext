import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Animated, Modal } from 'react-native';
import CardsViewModal from './CardModelView';

export default function Card({ title, imageSource, description }) {
  const [scaleValue] = useState(new Animated.Value(1));
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.95,
      useNativeDriver: false,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: false,
    }).start();
  };

  const openModal = () => {
    setIsModalVisible(true);
  };

  const HandleDataFromChildren = (data) =>{
    setIsModalVisible(data);
  }

  const animatedStyle = { transform: [{ scale: scaleValue }] };

  return (
    <TouchableOpacity
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={openModal}
      activeOpacity={1}
    >
      <Animated.View style={[styles.card, animatedStyle]}>
        <Image source={imageSource} style={styles.image} />
        <View style={styles.cardContent}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </Animated.View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
      >
        <CardsViewModal
          description={description}
          title={title}
          imageSource={imageSource}
          sentToParentData={HandleDataFromChildren}
        />
      </Modal>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 30,
  },
  image: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardContent: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
});
