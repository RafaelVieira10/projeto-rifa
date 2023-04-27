import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";
import api from "../../services/api";

function CardDisponiveis() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getCartelaDisponivel() {
      try {
        const response = await api.get("/cartela?status=disponivel");
        setData(response.data.cartela);
        console.log(response.data);
      } catch (error) {
        console.log("Erro");
      }
    }
    getCartelaDisponivel();
  }, []);
  console.log(data);

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        {data.length != 0
          ? data.map((item, index) => {
              return (
                <View style={styles.divCard} key={index}>
                  <Text style={styles.nomeCartela}>{item.nome}</Text>
                  <TouchableOpacity style={styles.buttonReservar}>
                    <Text style={styles.textButton}>Reservar</Text>
                  </TouchableOpacity>
                </View>
              );
            })
          : null}
      </View>
    </ScrollView>
  );
}

export default CardDisponiveis;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20
  },
  divCard: {
    alignItems: "center",
    width: "80%",
    height: 100,
    backgroundColor: "#323946",
    borderRadius: 10,
    marginTop: 50,
  },
  nomeCartela: {
    paddingTop: 5,
    fontSize: 18,
    color: "#fff",
    fontFamily: "Poppins_400Regular",
  },
  buttonReservar: {
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#1F242D",
    width: 90,
    padding: 3,
    marginTop: 25,
  },
  textButton: {
    color: "#fff",
    fontFamily: "Poppins_400Regular",
  },
});
