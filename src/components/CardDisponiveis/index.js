import { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
    useFonts,
    Poppins_400Regular,
  } from "@expo-google-fonts/poppins";
import api from "../../services/api";

function CardDisponiveis() {

    useEffect(()=> {
        async function getCartelaDisponivel() {
            const response = await api.get("/cartela/disponivel")
            console.log(response)
        }
        getCartelaDisponivel()
    },[])

    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
      });
    
      if (!fontsLoaded) {
        return null;
      }

    return(
        <View style={styles.container}>
            <View style={styles.divCard}>
              <Text style={styles.nomeCartela}>NOME</Text>
             <TouchableOpacity style={styles.buttonReservar}>
                <Text style={styles.textButton}>Reservar</Text>
             </TouchableOpacity>
            </View>
        </View>
    );
}

export default CardDisponiveis;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
    },
    divCard: {
        alignItems: "center",
        width: "80%",
        height: 100, 
        backgroundColor: "#323946",
        borderRadius: 10
    },
    nomeCartela: {
        paddingTop: 5,
        fontSize: 18,
        color: "#fff",
        fontFamily: "Poppins_400Regular"
    },
    buttonReservar: {
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: "#1F242D",
        width: 90,
        padding: 3,
        marginTop: 25
    },
    textButton: {
        color: "#fff",
        fontFamily: "Poppins_400Regular"
    }
})