import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Button from "./Button";

type CardProps = {
  title: string;
  description: string;
  buttonTitle: string;
  onButtonPress: () => void;
  buttonColor?: string;
  image?: ImageSourcePropType;
};

export default function Card({
  title,
  description,
  buttonTitle,
  onButtonPress,
  buttonColor,
  image,
}: CardProps) {
  return (
    <View style={styles.cardContainer}>
      {image && <Image source={image} style={styles.cardImage} resizeMode="cover" />}
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDescription}>{description}</Text>
        <Button title={buttonTitle} onPress={onButtonPress} color={buttonColor} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    alignSelf: "stretch",
    backgroundColor: "#fff",
    borderRadius: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  cardImage: {
    width: "100%",
    height: 180,
  },
  cardBody: {
    padding: 16,
    gap: 8,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 700,
    color: "#1a1a2e",
  },
  cardDescription: {
    fontSize: 15,
    fontWeight: 400,
    color: "#666",
    lineHeight: 22,
  },
});
