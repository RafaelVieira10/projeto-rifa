import { View, Text, StyleSheet } from "react-native";
import {
  useFonts,
  Poppins_700Bold,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";

function Disponiveis() {

  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.divTitle}>
        <Text style={styles.title}>Disponíveis</Text>
      </View>
    </View>
  );
}

export default Disponiveis;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F242D",
  },
  divTitle: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 50,
    marginTop: 50,
  },
  title: {
    fontSize: 32,
    color: "#fff",
    fontFamily: "Poppins_700Bold",
  },
});
