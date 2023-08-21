import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TableExample = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.headerCell}>Columna 1</Text>
        <Text style={styles.headerCell}>Columna 2</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.cell}>Ubicacion</Text>
        <Text style={styles.cell}>villa Canales</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.cell}>Abierto</Text>
        <Text style={styles.cell}>6am a 6pm</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.cell}>Calificacion </Text>
        <Text style={styles.cell}>⭐⭐⭐⭐⭐⭐</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.cell}>Reservaciones </Text>
        <Text style={styles.cell}> 3 Hoteles Cercanos</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  headerRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'black',
    paddingBottom: 4,
    marginBottom: 8,
  },
  headerCell: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'gray',
    paddingBottom: 4,
    marginBottom: 8,
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
});

export default TableExample;
