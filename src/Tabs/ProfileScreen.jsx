import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image, Text, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

//iMPORTO LOS COMPONENTES
import ImgeProfile from "../../assets/foto1.jpg";
import AnimatedButton from "../BtnAnimated";
import BtnProfile from "../Btnprofile";

export default function SettingsScreen() {

  //CREO LA DATA CORRESPONDIENTE PARA CREAR CADA UNO DE LOS BtnProfile
const data = [
    { id: "1", title: "Mecanico", name: "tools", type:'font-awesome5', },
    { id: "2", title: "Comida-Rapida", name: "fast-food", type:'ionicons', },
    { id: "3", title: "Tienda", name: "store-alt", type:'font-awesome5' },
    { id: "4", title: "Restaurante", name: "md-restaurant-sharp", type:'ionicons', },
    { id: "5", title: "Panaderia", name: "bakery-dining", type:'material-icons', },
    { id: "6", title: "Parqueo", name: "parking" , type:'font-awesome5', },
    { id: "7", title: "Farmacia", name: "local-pharmacy", type:'material-icons', },
    { id: "8", title: "Pisinas", name: "pool", type:'material-icons', },
    { id: "10", title: "Gasolinera", name: "gas-pump" , type:'font-awesome5', },
    { id: "10", title: "Hospital", name: "hospital-alt" , type:'font-awesome5', },
  ];


  //CREO UNA FUNCION QUE RENDERISE CADA COMPONENTE BtnProfile

  const renderButton = ({ item }) => (

    //RESIVO EL item quE ES UN OBJETO DE LA DATA QUE HEMOS PASADO ANTERIOR MENTE
    <BtnProfile title={item.title} name={item.name} type={item.type}/>
  
  );



  return (
    <View style={styles.container}>

      <StatusBar style="auto" />{/* TOMAMOS REFERENCIA SOBRE LA BARRA DE NOTIFICACIONES */}


      <AnimatedButton title="LogOut" />{/* MANDAMOS A LLAMAR A EL COMPONENTE AnimatedButton  */}


      <View style={styles.containerImgProfile}>
        <Image source={ImgeProfile} style={styles.imgProfile} />
      </View>

      {/* MANDAMOS A LLAMAR A LinearGradient PARA ENTREGAR UNA BONITA DEGRADACION DE COLORES */}
      
      <LinearGradient
        colors={["#C0C9CB", "#4CC9E0"]}
        style={styles.linearGradientContent}
      >
        <Text style={styles.textName}>Ricardo Lopez</Text>
        <FlatList
        data={data}
        renderItem={renderButton}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.flatListContainer}
      />{/* RENDERISO LOS BTNPROFILES */}


      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgProfile: {
    width: 120,
    height: 120,
    borderRadius: 80,
  
  },
  containerImgProfile: {
    position: 'relative',
    top: 12,
    left: -100,
    backgroundColor: "#B4CFD5",
    borderRadius: 80,
    width: 160,
    height: 160,
    padding: 20,
    alignSelf: "center", // Center the profile image container
    zIndex: 100
  },
  linearGradientContent: {
    flex: 1,
    marginTop: -80,
    paddingTop: 30, 
    borderTopRightRadius: 40,
  },
  flatListContainer: {
    paddingTop: 10,
    paddingHorizontal: 16,
  },
  textName: {
    backgroundColor: "#000",
    paddingVertical: 7,
    paddingRight: 40,
    paddingLeft: 10,
    width: 200,
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    borderTopRightRadius: 50,
    alignSelf: "flex-end", // Align the name to the right
    marginTop: -20,
    marginBottom: 20,
  },
});
