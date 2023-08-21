import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, ScrollView, Keyboard, StyleSheet } from 'react-native';

const MyScreen = () => {
  const [keyboardIsVisible, setKeyboardIsVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardIsVisible(true);
      console.log('keyboard is showing');
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardIsVisible(false);
      console.log('keyboard was hidden');
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleScrollViewContentInset = () => {
    if (keyboardIsVisible) {
      return { bottom: 100 }; // Adjust this value according to your needs
    }
    return {};
  };

  const renderInputFields = () => {
    const inputFields = [];

    for (let i = 0; i < 5; i++) {
      inputFields.push(
        <View key={i}>
          <TextInput style={styles.input} placeholder={`Campo ${i + 1}`} />
        </View>
      );
    }

    return inputFields;
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
      contentInset={handleScrollViewContentInset()}
      scrollEnabled={!keyboardIsVisible}
    >
      <View style={styles.content}>
        {renderInputFields()}
              <Button title={`Botón`} onPress={() => console.log(`Botón presionado`)} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
  },
  content: {
    padding: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default MyScreen;
