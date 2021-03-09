import React, { useRef } from "react";
import {
  View,
  StatusBar,
  StyleSheet,
  Dimensions,
  Animated,
} from "react-native";
import { PLANTS } from "../data/dummy";
import PlantsItem from "../components/PlantsItem";

const MyPlantsScreen = (props) => {
  const animatedValueFlatList = useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.myPlantsScreen}>
      <StatusBar animated hidden />
      <View style={styles.plantsListContainer}>
        <Animated.FlatList
          onScroll={Animated.event(
            [
              {
                nativeEvent: { contentOffset: { y: animatedValueFlatList } },
              },
            ],
            { useNativeDriver: true }
          )}
          contentContainerStyle={{ paddingBottom: height * 0.03 }}
          style={styles.plantsList}
          keyExtractor={(item, index) => index.toString()}
          data={PLANTS}
          renderItem={(plant) => {
            return (
              <PlantsItem
                animatedValue={animatedValueFlatList}
                index={plant.index}
                plant={plant}
                navigation={props.navigation}
              />
            );
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
