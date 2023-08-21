import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapsView = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825, // Latitud del centro del mapa
          longitude: -122.4324, // Longitud del centro del mapa
          latitudeDelta: 0.0922, // Zoom del mapa en latitud
          longitudeDelta: 0.0421, // Zoom del mapa en longitud
        }}
      >
        <Marker
          coordinate={{
            latitude: 37.78825, // Latitud del marcador
            longitude: -122.4324, // Longitud del marcador
          }}
          title="Marcador"
          description="Esta es una ubicación"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
    width: 200,
    height: 20, // Cambia este valor para asegurarte de que el mapa sea lo suficientemente grande
  },
});


export default MapsView;
