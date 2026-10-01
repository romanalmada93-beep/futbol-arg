import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function SeleccionScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Selección Argentina</Text>

      <View style={styles.item}>
        <Text style={styles.dato}>Apodo: Albiceleste</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.dato}>Mundiales ganados: 1978, 1986, 2022</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.dato}>Copas América ganadas: 16</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.dato}>Estadio principal: Monumental</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingBottom: 40 },
  titulo: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  item: {
    marginBottom: 14,
    padding: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
  },
  dato: { fontSize: 15, color: "#333" },
});
