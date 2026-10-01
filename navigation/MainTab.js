import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import InicioScreen from "../screens/InicioScreen";
import StackClubes from "./StackClubes";
import JugadoresScreen from "../screens/JugadoresScreen";
import SeleccionScreen from "../screens/SeleccionScreen";

const Tab = createBottomTabNavigator();

// El encabezado (con el botón del menú) lo muestra el Drawer,
// por eso las pestañas no llevan header propio.
export default function MainTab() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Inicio" component={InicioScreen} />
      <Tab.Screen name="Clubes" component={StackClubes} />
      <Tab.Screen name="Jugadores" component={JugadoresScreen} />
      <Tab.Screen name="Selección" component={SeleccionScreen} />
    </Tab.Navigator>
  );
}
