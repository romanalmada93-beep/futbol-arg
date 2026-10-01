import React from "react";
import { Text, StyleSheet, ScrollView } from "react-native";

export default function InicioScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>⚽ Fútbol Argentino</Text>
      <Text style={styles.subtitulo}>Bienvenido a la app</Text>
      <Text style={styles.texto}>
        Explorá los clubes más grandes del país, conocé a los jugadores que
        hicieron historia y repasá los datos de la Selección Argentina.
      </Text>
      <Text style={styles.texto}>
        Usá las pestañas de abajo para moverte entre las secciones.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: { fontSize: 28, fontWeight: "bold", marginBottom: 10 },
  subtitulo: { fontSize: 18, color: "#555", marginBottom: 20 },
  texto: { fontSize: 15, textAlign: "center", marginBottom: 10, color: "#333" },
});
