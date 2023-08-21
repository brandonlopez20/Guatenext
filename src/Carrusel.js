import React, { useRef, useState } from 'react';
import { View, Image, Dimensions, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const Carousel = ({ imgs }) => {
  const images = imgs;
  const flatListRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);

  const renderImages = ({ item }) => (
    <Image source={item} style={styles.carouselImgs} />
  );

  const scrollToNext = () => {
    if (flatListRef.current && currentPage < images.length - 1) {
      setCurrentPage(currentPage + 1);
      flatListRef.current.scrollToIndex({ index: currentPage + 1, animated: true });
    }
  };

  const scrollToPrevious = () => {
    if (flatListRef.current && currentPage > 0) {
      setCurrentPage(currentPage - 1);
      flatListRef.current.scrollToIndex({ index: currentPage - 1, animated: true });
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={images}
        renderItem={renderImages}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />

      <TouchableOpacity style={styles.arrowLeft} onPress={scrollToPrevious}>
        <FontAwesome5 name="angle-double-left" size={35} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.arrowRight} onPress={scrollToNext}>
        <FontAwesome5 name="angle-double-right" size={35} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
  },
  carouselImgs: {
    width: width - 58,
    height:180,
    borderRadius: 10,
  },
  arrowLeft: {
    position: 'absolute',
    top: 200,
    left: 100,
    zIndex: 100,
    backgroundColor: '#FFF',
    marginBottom: 50,
  },
  arrowRight: {
    position: 'absolute',
    top: 200,
    right: 100,
    zIndex: 100,
    backgroundColor: '#FFF',
  },
});

export default Carousel;
