import { StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";

//Definindo o tipo das props com TypeScript
type ButtonProps = {
  title: string;
  onPress: () => void;
  color?: string; //? significa que é opcional
  style?: ViewStyle;
};

export default function Button({
  title,
  onPress,
  color = "#007AFF",
  style,
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }, style]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: "stretch",
    paddingVertical: 16,
    borderRadius: 12,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: 600,
    textAlign: "center",
  },
});
