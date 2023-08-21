import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//iMPORTO LOS COMPONENTES
import CardsView from '../CardsView';
import SearchInput from '../InputSerch';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />{/* TOMAMOS REFERENCIA SOBRE LA BARRA DE NOTIFICACIONES */}
      <SearchInput/>{/* MANDAMOS A LLAMAR A EL COMPONENTE SEARCH  */}
      <Text>Disfruta y relajate</Text>
      <CardsView/>{/* MANDAMOS A LLAMAR A EL COMPONENTE SEARCH  */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
