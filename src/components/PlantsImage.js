import React from "react";
import { Image, View, StyleSheet, Dimensions } from "react-native";

const PlantsImage = ({ uri }) => {
  return (
    <View style={styles.imageContainer}>
      <Image blurRadius={1} style={styles.image} source={{ uri }} />
    </View>
  );
};
const { width } = Dimensions.get("screen");
const styles = StyleSheet.create({
  imageContainer: {
    marginVertical: 10,
  },
  image: {
    width: width * 0.2,
    height: width * 0.2,
    margin: 5,
    borderRadius: 10,
  },
});

export default PlantsImage;
