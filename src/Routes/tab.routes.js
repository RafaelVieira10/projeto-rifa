import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { Feather } from "@expo/vector-icons";

import Disponiveis from "../pages/Disponiveis";
import Vendidos from "../pages/Vendidos";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          // tabBarActiveTintColor: "red",
          tabBarStyle: {
            backgroundColor: "#323946",
            borderTopColor: "transparent",
            height: 55,
          },
        }}
      >
        <Tab.Screen
          name="Disponíveis"
          component={Disponiveis}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Feather name="check-square" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Vendidos"
          component={Vendidos}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Feather name="dollar-sign" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabNavigator;
