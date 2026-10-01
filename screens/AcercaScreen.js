import React from "react";
import { Text, StyleSheet, ScrollView } from "react-native";

export default function AcercaScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Acerca de</Text>
      <Text style={styles.texto}>App de Fútbol Argentino</Text>
      <Text style={styles.texto}>Versión 1.0.0</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 20, alignItems: "center", justifyContent: "center" },
  titulo: { fontSize: 24, fontWeight: "bold", marginBottom: 12 },
  texto: { fontSize: 16, color: "#333", marginBottom: 6 },
});
