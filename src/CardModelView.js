import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Carousel from './Carrusel';
import TableExample from './CardModelTable';

export default function CardsViewModal({ imageSource, title, description, sentToParentData }) {

  const closeModal = () => {
    sentToParentData(false)
  }

  const images = [imageSource, imageSource, imageSource]

  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <Carousel 
          imgs={images}
        />
              <Text>Disfruta y viaja</Text>
        <Text style={styles.modalTitle}>{title}</Text>
        <Text style={styles.modalDescription}>{description}</Text>
        <TableExample/>
        <TouchableOpacity onPress={closeModal}>
          <Text style={styles.closeButton}>Cerrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    width: '95%',
    height: '95%',
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 30,
  },
  modalDescription: {
    fontSize: 16,
    marginTop: 5,
  },
  closeButton: {
    backgroundColor: "red",
    padding: 7,
    borderRadius: 10,
    fontSize: 18,
    color: 'white',
    marginTop: 20,
    textAlign: 'center',
  },
});
{/* <Image source={imageSource} style={styles.modalImage} /> */}