import React from "react";
import { View, Text, Image, StyleSheet, Button, FlatList } from "react-native";
import { clubesData } from "../data/data";

export default function ListaClubes({ navigation }) {
  // Convertimos el objeto de clubes a un array
  const listaClubes = Object.entries(clubesData).map(([nombre, datos]) => ({
    id: nombre,
    nombre,
    ...datos,
  }));

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.escudo} style={styles.escudo} />
      <Text style={styles.nombre}>{item.nombre}</Text>
      <Button
        title="Ver detalle"
        onPress={() => navigation.navigate("DetalleClub", { club: item.nombre })}
      />
    </View>
  );

  return (
    <FlatList
      data={listaClubes}
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
  escudo: { width: 60, height: 60, marginBottom: 8, resizeMode: "contain" },
  nombre: { fontSize: 18, marginBottom: 8 },
});