import React from "react";
import {
  View,
  StatusBar,
  FlatList,
  StyleSheet,
  Dimensions,
} from "react-native";
import { PLANTS } from "../data/dummy";
import PlantsItem from "../components/PlantsItem";

const MyPlantsScreen = (props) => {
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
            return <PlantsItem plant={plant} navigation={props.navigation} />;
          }}
        />
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
});

export default MyPlantsScreen;
