import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Detalhes() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Detalhes</Text>
      <Image
        style={styles.image}
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
      />

      <Text style={styles.description}>
        Aqui você pode adicionar mais informações
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => router.back()}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f4ff22",
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
    color: "#333",
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 500,
    color: "#555",
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
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    marginBottom: 30,
  },
});
