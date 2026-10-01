import React from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import { jugadoresData } from "../data/data";

export default function JugadoresScreen() {
  // Convertimos el objeto en un array de elementos para la FlatList
  const listaJugadores = Object.entries(jugadoresData).map(([nombre, datos]) => ({
    id: nombre,
    nombre,
    ...datos,
  }));

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.foto} style={styles.foto} />
      <Text style={styles.nombre}>{item.nombre}</Text>
      <Text style={styles.dato}>Posición: {item.posicion}</Text>
      <Text style={styles.dato}>Clubes: {item.clubes}</Text>
    </View>
  );

  return (
    <FlatList
      data={listaJugadores}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingBottom: 40 },
  item: {
    marginBottom: 18,
    padding: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    alignItems: "center",
  },
  foto: { width: 90, height: 90, borderRadius: 45, marginBottom: 8, resizeMode: "cover" },
  nombre: { fontSize: 18, fontWeight: "600", marginBottom: 6 },
  dato: { fontSize: 14, color: "#555", textAlign: "center" },
});