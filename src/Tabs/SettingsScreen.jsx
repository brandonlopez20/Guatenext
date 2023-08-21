import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList, Button, Text } from "react-native";


// MANDAMOS A LLAMAR LOS COMPONENTES
import BtnSettings from "../BtnSettings";
import AccordionItem from "../Accord";

export default function SettingsScreen() {

  //CREAMOS UN ARRAY CON UN PAR DE DATOS PARA RENDERISAR

  const data = [
    {
      id: 1,
      firstColor: "#B4CFD5",
      secondColor: "#4CC9E0",
      title: "Guardados",
      name: "save",
      type: "ionicons",
      color: "#FFFFFF",
    },

    {
      id: 2,
      firstColor: "#B4CFD5",
      secondColor: "#4CC9E0",
      title: "Agregar-Locacion",
      name: "image",
      type: "ionicons",
      color: "#FFFFFF",
    },


    {
      id: 3,
      firstColor: "#B4CFD5",
      secondColor: "#4CC9E0",
      title: "Eventos",
      name: "event",
      type: "material-icons",
      color: "#FFFFFF",
    },
    {
      id: 4,
      firstColor: "#B4CFD5",
      secondColor: "#4CC9E0",
      title: "Ubicacion",
      name: "search-location",
      type: "font-awesome5",
      color: "#FFFFFF",
    },

    {
      id: 5,
      firstColor: "#B4CFD5",
      secondColor: "#4CC9E0",
      title: "Soporte-Tecnico",
      name: "live-help",
      type: "material-icons",
      color: "#FFFFFF",
    },


    {
      id: 6,
      firstColor: "#B4CFD5",
      secondColor: "#4CC9E0",
      title: "Cuenta",
      name: "account-box",
      type: "material-icons",
      color: "#FFFFFF",
    },
  ];


  // CREAMOS DATOS PARA EL ACCORDEON DE MAS INFORMACION

  const data2 = [
    {id: 1, title: "¿ Quisiera Reportar una Cuenta ?"},
    {id: 2, title: "¿ la Ubicacion esta mal ?"},
    {id: 3, title: "¿ Porque estas Recomendaciones ?"},
    {id: 4, title: "¿ Hay algun Fraude ?"},
    {id: 5, title: "¿ seguridad ?"},
    {id: 6, title: "Soporte-Tecnico"},
    {id: 7, title: "¿ Sobre nosotros ?"},
  ]


  //CREAMOS UNA FUNCION QUE AYUDE A RENDERISAR COMPONENTES BTNSETTINGS

  const renderButton = ({ item }) => (
    <BtnSettings 
    key={item.id} 
    firstColor={item.firstColor} 
    secondColor={item.secondColor}
    type={item.type}
    name={item.name}
    color="black"
    title={item.title}
    />
  );


   //CREAMOS UNA FUNCION QUE AYUDE A RENDERISAR SIMPLEMENTE BUTTONS

  const renderButton2 = ({ item }) => (
    <Button
      key={item.id} 
      title={item.title}
      color="black"
    />
  )

  return (
    <View style={styles.container}>


      <AccordionItem
        title="Más información"
        content={
          <FlatList
          data={data2}
          renderItem={renderButton2}
          keyExtractor={(item) => item.id}
        />
        }
        >
      </AccordionItem>
      <FlatList
        data={data}
        renderItem={renderButton}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
