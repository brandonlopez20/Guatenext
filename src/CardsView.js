import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import Card from './Cards';

import ImgBeach from '../assets/beach.jpg';
import ImgMountain from '../assets/mountain.jpg';
import ImgVillage from '../assets/village.jpg';
import ImgCruise from '../assets/Cruise.jpg';

const cardData = [
  {
    title: 'Hermosa Playa',
    imageSource: ImgBeach,
    description: 'Una vista impresionante del océano y la playa dorada.',
  },
  {
    title: 'Amanecer en la Montaña',
    imageSource: ImgMountain,
    description: 'Contempla la majestuosidad de la naturaleza al amanecer.',
  },
  {
    title: 'Pintoresco Pueblo',
    imageSource: ImgVillage,
    description: 'Descubre la belleza de un encantador pueblo en medio del campo.',
  },
  {
    title: 'Viaje en Crucero',
    imageSource: ImgCruise,
    description: 'Embárcate en una aventura de lujo en un crucero por el océano.',
  },
];

const CardsView = () => {
  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={cardData}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <Card
          title={item.title}
          imageSource={item.imageSource}
          description={item.description}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
});

export default CardsView;
