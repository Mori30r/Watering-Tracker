import React from "react";
import {
  Text,
  View,
  StatusBar,
  FlatList,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from "react-native";
import { PLANTS } from "../data/dummy";
import { Ionicons } from "@expo/vector-icons";

const MyPlantsScreen = () => {
  return (
    <View style={styles.myPlantsScreen}>
      <StatusBar animated hidden />
      <View style={styles.plantsListContainer}>
        <FlatList
          contentContainerStyle={{ paddingBottom: height * 0.03 }}
          style={styles.plantsList}
          keyExtractor={(item, index) => index.toString()}
          data={PLANTS}
          renderItem={(plant) => {
            return <PlantsItem plant={plant} />;
          }}
        />
      </View>
    </View>
  );
};

export const PlantsItem = ({ plant }) => {
  const { title, imageURL, nextWateringTime } = plant.item;

  const timeToDay = (time) => {
    return time % 24;
  };

  return (
    <View style={styles.plantsItemContainer}>
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
    </View>
  );
};

const { width, height } = Dimensions.get("screen");
const styles = StyleSheet.create({
  myPlantsScreen: {
    flex: 1,
  },
  plantsListContainer: {},
  plantsList: {
    paddingHorizontal: width * 0.03,
    paddingVertical: width * 0.08,
  },
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
  plantsItemIcon: {},
});

export default MyPlantsScreen;
