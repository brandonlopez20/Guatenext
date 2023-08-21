import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const SearchInput = () => {
  return (
    <View style={styles.container}>
      
      <Feather name="search" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Buscar..."
        placeholderTextColor="gray"
      />
      <Entypo name="location" size={24} color="red" style={{ marginLeft: 8 }}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 0,
  },
  icon: {
    fontSize: 18,
    color: 'white',
    marginRight: 10,
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
});

export default SearchInput;
