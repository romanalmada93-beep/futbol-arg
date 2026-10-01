import React from "react";
import { Text, Image, StyleSheet, ScrollView } from "react-native";
import { clubesData } from "../data/data";

export default function DetalleClub({ route }) {
  const { club } = route.params;
  const datos = clubesData[club];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={datos.escudo} style={styles.escudo} />
      <Text style={styles.titulo}>{club}</Text>
      <Text style={styles.dato}>Apodo: {datos.apodo}</Text>
      <Text style={styles.dato}>Fundación: {datos.fundacion}</Text>
      <Text style={styles.dato}>Estadio: {datos.estadio}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: "center" },
  escudo: { width: 110, height: 110, marginBottom: 12, resizeMode: "contain" },
  titulo: { fontSize: 26, fontWeight: "bold", marginBottom: 16 },
  dato: { fontSize: 16, marginBottom: 8, color: "#333" },
});
