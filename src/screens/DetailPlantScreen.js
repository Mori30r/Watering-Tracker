import React, { useEffect, useRef, useState } from "react";

import {
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Animated,
  PanResponder,
  Image,
} from "react-native";
import Icon from "../components/Icon";

const DetailPlantScreen = (props) => {
  const { title, nextWateringTime, imageURL } = props.route.params.plant;
  const scrollYChart = useRef(new Animated.Value(0)).current;
  const AnimatedImageBackground = Animated.createAnimatedComponent(
    ImageBackground
  );
  const pan = useRef(
    PanResponder.create({
      onPanResponderTerminationRequest: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (e, gestureState) => {
        scrollYChart.setOffset(scrollYChart.__getValue());
        scrollYChart.setValue(0);
      },
      onPanResponderMove: (event, gestureState) => {
        scrollYChart.setValue(gestureState.dy);
      },
      onPanResponderRelease: (e, gestureState) => {
        let animateTo;
        scrollYChart.flattenOffset();
        if (gestureState.dy > 0) animateTo = 0;
        else if (gestureState.dy < 200) animateTo = -800;
        Animated.spring(scrollYChart, {
          toValue: animateTo,
          useNativeDriver: false,
          tension: 1,
        }).start();
      },
    })
  ).current;
  const inputRange = [height * 0.1, height];
  const scrollYChartInterpolate = scrollYChart.interpolate({
    inputRange,
    outputRange: [height * 0.5, height * 0.9],
  });
  const imageHeightInterpolate = scrollYChart.interpolate({
    inputRange,
    outputRange: [height * 0.7, height * 0.9],
  });
  return (
    <View style={styles.detailPlant}>
      <Animated.Image
        source={{ uri: imageURL }}
        style={[
          styles.imageBackground,
          StyleSheet.absoluteFillObject,
          { height: imageHeightInterpolate },
        ]}
      />
      <View style={styles.headerIcon}>
        <Icon
          pack="ionIcons"
          color="white"
          size={30}
          name="chevron-back-sharp"
          onPress={() => props.navigation.goBack()}
        />
      </View>
      <View style={styles.bottomDetail}>
        <Animated.View
          {...pan.panHandlers}
          style={[styles.bottomDetailChart, { top: scrollYChartInterpolate }]}
        />
        <View style={styles.bottomDetailWatering} />
      </View>
    </View>
  );
};

const { height } = Dimensions.get("screen");
const BOTTOM_HEIGHT = height * 0.78;
const IMAGE_HEIGHT = height * 0.7;
const styles = StyleSheet.create({
  detailPlant: {
    flex: 1,
  },
  headerIcon: {
    padding: 10,
  },
  imageBackground: {
    height: IMAGE_HEIGHT,
  },
  bottomDetail: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: BOTTOM_HEIGHT,
    justifyContent: "flex-end",
  },
  bottomDetailChart: {
    backgroundColor: "#201050",
    opacity: 0.9,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    height: "100%",
  },
  bottomDetailWatering: {
    height: "25%",
    backgroundColor: "white",
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default DetailPlantScreen;
