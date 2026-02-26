import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Button from "@/components/Button";

export default function Contador() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    setContador(contador - 1);
  };

  const cor = contador > 0 ? "#003d88" : contador < 0 ? "#FF3B30" : "#000";

  return (
    <View style={styles.container}>
      <Text style={[styles.numero, { color: cor }]}>{contador}</Text>
      <View style={styles.linha}>
        <Button title="+" onPress={incrementar} style={styles.botaoLinha} />
        <Button
          title="-"
          onPress={decrementar}
          color="#FF3B30"
          style={styles.botaoLinha}
        />
      </View>
      <Button title="Zerar" onPress={() => setContador(0)} color="#34C759" />
      <Button title="Voltar" onPress={() => router.back()} color="#007AFF" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    gap: 8,
    backgroundColor: "#f4ff2254",
  },
  numero: {
    fontSize: 200,
    fontWeight: 600,
  },
  linha: {
    flexDirection: "row",
    alignSelf: "stretch",
    gap: 8,
  },
  botaoLinha: {
    flex: 1,
  },
  botao: {
    width: "70%",
    paddingVertical: 16,
    borderRadius: 12,
    backgroundColor: "#140dee",
  },
  botaoTexto: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: 600,
    textAlign: "center",
  },
});
