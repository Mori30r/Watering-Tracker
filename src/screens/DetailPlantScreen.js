import React, { useRef } from "react";

import {
  View,
  StyleSheet,
  Dimensions,
  Animated,
  PanResponder,
  Text,
} from "react-native";
import Icon from "../components/Icon";
import Colors from "../constants/Colors";

const { height } = Dimensions.get("screen");
const CHART_ANIMATE_TO = -height;
const BOTTOM_HEIGHT = height * 0.78;
const IMAGE_HEIGHT = height * 0.7;
const LIMIT_CHART_ANIMATE = height * 0.25;

const DetailPlantScreen = (props) => {
  const { title, nextWateringTime, imageURL } = props.route.params.plant;
  const scrollYChart = useRef(new Animated.Value(0)).current;
  const scrollYDetail = useRef(new Animated.Value(0)).current;
  const panResponder = (element) => {
    let animatedValue;
    animatedValue = element === "chart" ? scrollYChart : scrollYDetail;
    return useRef(
      PanResponder.create({
        onPanResponderTerminationRequest: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
          animatedValue.setOffset(animatedValue.__getValue());
          animatedValue.setValue(0);
        },
        onPanResponderMove: (event, gestureState) => {
          animatedValue.setValue(gestureState.dy);
        },
        onPanResponderRelease: (e, gestureState) => {
          let animateTo;
          animatedValue.flattenOffset();
          if (gestureState.dy > 0) animateTo = 0;
          else if (gestureState.dy < LIMIT_CHART_ANIMATE)
            animateTo = CHART_ANIMATE_TO;
          Animated.spring(animatedValue, {
            toValue: animateTo,
            useNativeDriver: false,
            tension: 1,
          }).start();
        },
      })
    ).current;
  };
  const inputRange = [height * 0.1, height];
  const scrollYChartInterpolate = scrollYChart.interpolate({
    inputRange,
    outputRange: [height * 0.5, height * 0.9],
  });
  const scrollYDetailInterpolate = scrollYDetail.interpolate({
    inputRange,
    outputRange: [height * 0.6, height * 0.9],
  });
  const imageHeightInterpolate = scrollYChart.interpolate({
    inputRange,
    outputRange: [height * 0.7, height * 0.8],
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
          {...panResponder("chart").panHandlers}
          style={[styles.bottomDetailChart, { top: scrollYChartInterpolate }]}
        />
        <Animated.View
          {...panResponder("detail").panHandlers}
          style={[
            styles.bottomDetailWatering,
            { top: scrollYDetailInterpolate },
          ]}
        >
          <View style={styles.bigDetailHead}>
            <View style={styles.bigDetailHeadLeft}>
              <Text style={styles.text}>Next Watering in</Text>
              <Text style={styles.bigBoldText}>
                {nextWateringTime % 24} days
              </Text>
              <Text style={styles.lightText}>watering every 7 days</Text>
            </View>
            <View style={styles.bigDetailHeadRight}>
              <View style={styles.bigDetailHeadRightIconContainer}>
                <Icon
                  pack="ionIcons"
                  color="white"
                  size={30}
                  name="water"
                  onPress={() => {}}
                />
              </View>
            </View>
          </View>
          <View style={styles.wateringInfoContainer}>
            <Text style={[styles.smallBoldText, { paddingBottom: 10 }]}>
              Watering Info
            </Text>
            <Text style={styles.normalText}>
              Soooo This Should be a dummy text in development but i'm too lazy
              to search for dummy text.
            </Text>
          </View>
          <View style={styles.plantsInfoContainer}>
            <Text style={styles.smallBoldText}>Plants Info</Text>
            <View style={styles.plantsInfoLabels}>
              <Text style={styles.lightText}>Info 1</Text>
              <Text style={styles.lightText}>Info 2</Text>
              <Text style={styles.lightText}>Info 3</Text>
            </View>
            <View style={styles.plantsInfoDetails}>
              <View
                style={[
                  styles.plantsInfoDetailItems,
                  styles.plantsInfoDetailItemsLeft,
                ]}
              >
                <Text style={styles.smallBoldText}>70-80</Text>
              </View>
              <View style={styles.plantsInfoDetailItems}>
                <Text style={styles.smallBoldText}>20-32</Text>
              </View>
              <View
                style={[
                  styles.plantsInfoDetailItems,
                  styles.plantsInfoDetailItemsRight,
                ]}
              >
                <Text style={styles.smallBoldText}>10</Text>
              </View>
            </View>
          </View>
        </Animated.View>
      </View>
    </View>
  );
};

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
    height: "90%",
    backgroundColor: "white",
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 35,
  },
  bigDetailHead: {
    height: "30%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bigDetailHeadLeft: {},
  wateringInfoContainer: {
    height: "25%",
  },
  bigBoldText: {
    fontWeight: "bold",
    fontSize: 40,
  },
  lightText: {
    color: "rgba(0, 0, 0, .7)",
  },
  smallBoldText: {
    fontWeight: "bold",
    fontSize: 17,
  },
  normalText: {
    fontSize: 14,
  },
  bigDetailHeadRight: {},
  bigDetailHeadRightIconContainer: {
    backgroundColor: Colors.accentColor,
    padding: 25,
    borderRadius: 20,
    elevation: 2,
  },
  plantsInfoContainer: {
    height: "50%",
  },
  plantsInfoLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 70,
    paddingTop: 10,
    paddingBottom: 5,
  },
  plantsInfoDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 5,
  },
  plantsInfoDetailItems: {
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: "33%",
    borderColor: "rgba(0, 0, 0, .3)",
  },
  plantsInfoDetailItemsLeft: {
    borderBottomStartRadius: 10,
    borderTopStartRadius: 10,
  },
  plantsInfoDetailItemsRight: {
    borderBottomEndRadius: 10,
    borderTopEndRadius: 10,
  },
});

export default DetailPlantScreen;
