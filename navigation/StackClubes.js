import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListaClubes from "../screens/ListaClubes";
import DetalleClub from "../screens/DetalleClub";

const Stack = createStackNavigator();

export default function StackClubes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ListaClubes"
        component={ListaClubes}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetalleClub"
        component={DetalleClub}
        options={{ title: "Detalle del club" }}
      />
    </Stack.Navigator>
  );
}
