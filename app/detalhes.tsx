import { useRouter } from "expo-router";
import { Alert, Platform, ScrollView, StyleSheet, Text } from "react-native";

import Button from "@/components/Button";
import Card from "@/components/Card";

export default function Detalhes() {
  const router = useRouter();

  const handlePress = () => {
    if (Platform.OS === "web") {
      window.alert("Botão pressionado!");
    } else {
      Alert.alert("Botão pressionado!");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Detalhes</Text>
      <Text style={styles.subtitle}>
        Este é o subtítulo da tela de detalhes
      </Text>
      <Card
        title="Card 1"
        image={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        description="Este é o primeiro Card"
        buttonTitle="Botão do Card 1"
        onButtonPress={handlePress}
        buttonColor="#1a1a2e"
      />
      <Card
        title="Card 2"
        image={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        description="Este é o segundo Card"
        buttonTitle="Botão do Card 2"
        onButtonPress={handlePress}
        buttonColor="#1a1a2e"
      />
      <Text style={styles.description}>
        Aqui você pode adicionar mais informações
      </Text>

      <Button title="Voltar" onPress={() => router.back()} color="#EC7000" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f4ff2254",
    gap: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
    color: "#333",
    // marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 500,
    color: "#555",
    // marginBottom: 28,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    marginBottom: 16,
  },
});
