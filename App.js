import { StatusBar } from "react-native";
import { StyleSheet, View } from "react-native";
import TabNavigator from "./src/Routes/tab.routes";

export default function App() {
  return (
    <View style={styles.container}>
        <TabNavigator />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
