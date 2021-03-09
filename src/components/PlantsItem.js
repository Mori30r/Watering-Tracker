import React, { useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableWithoutFeedback,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const PlantsItem = (props) => {
  const { title, imageURL, nextWateringTime } = props.plant.item;
  const { animatedValue, index } = props;
  const timeToDay = (time) => {
    return time % 24;
  };
  const inputRange = [
    -1,
    0,
    height * 0.25 * index,
    height * 0.25 * (index + 2),
  ];
  const scale = animatedValue.interpolate({
    inputRange,
    outputRange: [1, 1, 1, 0.5],
  });
  return (
    <TouchableWithoutFeedback
      onPress={() =>
        props.navigation.navigate("Detail", { plant: props.plant.item })
      }
    >
      <Animated.View
        style={[
          styles.plantsItemContainer,
          { opacity: scale, transform: [{ scale }] },
        ]}
      >
        <Text style={styles.plantsItemTitle}>{title}</Text>
        <View style={styles.plantsItemCard}>
          <ImageBackground
            // blurRadius={2}
            borderRadius={5}
            style={styles.plantsItemImage}
            source={{ uri: imageURL }}
          >
            <View style={styles.plantsItemDetailContainer}>
              <View style={styles.plantsItemTextContainer}>
                <Text style={styles.plantsItemTextContainerDetail}>
                  Next Watering Time in
                </Text>
                <Text style={styles.plantsItemTextContainerTime}>
                  {timeToDay(nextWateringTime)} day
                </Text>
              </View>
              <Ionicons name="water-outline" size={20} color="white" />
            </View>
          </ImageBackground>
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};
const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  plantsItemContainer: {},
  plantsItemTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "black",
  },
  plantsItemCard: {
    paddingTop: 5,
    paddingBottom: 30,
  },
  plantsItemImage: {
    width: width * 0.9,
    height: height * 0.18,
    overflow: "hidden",
    resizeMode: "cover",
  },
  plantsItemDetailContainer: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  plantsItemTextContainer: {},
  plantsItemTextContainerDetail: {
    fontSize: 14,
    fontWeight: "100",
    color: "white",
  },
  plantsItemTextContainerTime: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
});

export default PlantsItem;
