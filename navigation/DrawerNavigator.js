import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainTab from "./MainTab";
import AcercaScreen from "../screens/AcercaScreen";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: "#4361ee",
        drawerInactiveTintColor: "#555",
        drawerStyle: { backgroundColor: "#fff", width: 260 },
        headerStyle: { backgroundColor: "#4361ee" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Drawer.Screen
        name="Fútbol Argentino"
        component={MainTab}
        options={{ drawerLabel: "⚽ Fútbol Argentino" }}
      />
      <Drawer.Screen
        name="Acerca de"
        component={AcercaScreen}
        options={{ drawerLabel: "Acerca de" }}
      />
    </Drawer.Navigator>
  );
}
