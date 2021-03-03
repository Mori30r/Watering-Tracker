import React from "react";

import { View, StyleSheet, ImageBackground, Dimensions } from "react-native";
import Icon from "../components/Icon";

const DetailPlantScreen = (props) => {
  const { title, nextWateringTime, imageURL } = props.route.params.plant;
  return (
    <View style={styles.detailPlant}>
      <ImageBackground
        source={{ uri: imageURL }}
        style={styles.imageBackground}
      >
        <View style={styles.headerIcon}>
          <Icon
            pack="ionIcons"
            color="white"
            size={30}
            name="chevron-back-sharp"
            onPress={() => props.navigation.goBack()}
          />
        </View>
      </ImageBackground>
      <View style={styles.bottomDetail}>
        <View style={styles.bottomDetailChart}></View>
        <View style={styles.bottomDetailWatering}></View>
      </View>
    </View>
  );
};

const { width, height } = Dimensions.get("screen");
const BOTTOM_HEIGHT = height * 0.5;
const BOTTOM_DETAIL_WATERING_HEIGHT = height * 0.4;
const styles = StyleSheet.create({
  detailPlant: {
    flex: 1,
    backgroundColor: "pink",
  },
  headerIcon: {
    padding: 10,
  },
  imageBackground: {
    height: height * 0.5,
  },
  bottomDetail: {
    bottom: height * 0.1,
    height: BOTTOM_HEIGHT,
    backgroundColor: "transparent",
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    elevation: 5,
  },
  bottomDetailChart: {
    height: BOTTOM_HEIGHT,
    backgroundColor: "#201050",
    opacity: 0.9,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
  },
  bottomDetailWatering: {
    height: BOTTOM_DETAIL_WATERING_HEIGHT,
    bottom: BOTTOM_DETAIL_WATERING_HEIGHT,
    backgroundColor: "white",
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    elevation: 5,
  },
});

export default DetailPlantScreen;
