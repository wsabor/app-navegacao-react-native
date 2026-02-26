import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

import Button from "@/components/Button";

export default function Home() {
  const router = useRouter();

  const handlePress = () => {
    console.log("Botão clicado!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem vindo ao React Native!</Text>
      <Text style={styles.subtitle}>Esta é a tela inicial do nosso app</Text>
      <Button
        title="Ir para Detalhes"
        onPress={() => router.push("/Detalhes")}
        color="#EC7000"
      />

      {/* <Button title="Salvar" onPress={handlePress} /> */}
      {/* <Button title="Cancelar" onPress={() => router.back()} color="#FF3B30" /> */}
      <Button
        title="Contador"
        onPress={() => router.push("/Contador")}
        color="#34C759"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#000b62",
    gap: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
    color: "#EFEFEF",
    marginBottom: 16,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 500,
    color: "#DDD",
    marginBottom: 28,
  },
  button: {
    backgroundColor: "#EC7000",
    paddingVertical: 16,
    paddingHorizontal: 50,
    borderRadius: 12,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: 600,
  },
});
