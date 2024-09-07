import React, { useEffect, useRef, useState } from "react";
import {
    View,
    StatusBar,
    StyleSheet,
    Dimensions,
    Animated,
} from "react-native";
import PlantsItem from "../components/PlantsItem";
import { addDummyData, getPlants, resetStorage } from "../lib/storage";
import { useIsFocused } from "@react-navigation/native";

const MyPlantsScreen = (props) => {
    const animatedValueFlatList = useRef(new Animated.Value(0)).current;

    const [plants, setPlants] = useState([]);
    const IsFocused = useIsFocused();

    useEffect(() => {
        async function main() {
            // await resetStorage();
            const savedPlants = await getPlants();
            // await addDummyData();
            setPlants(savedPlants);
        }
        main();
    }, [IsFocused]);

    return (
        <View style={styles.myPlantsScreen}>
            <StatusBar animated hidden />
            <View style={styles.plantsListContainer}>
                <Animated.FlatList
                    onScroll={Animated.event(
                        [
                            {
                                nativeEvent: {
                                    contentOffset: { y: animatedValueFlatList },
                                },
                            },
                        ],
                        { useNativeDriver: true }
                    )}
                    contentContainerStyle={{ paddingBottom: height * 0.03 }}
                    style={styles.plantsList}
                    keyExtractor={(item, index) => index.toString()}
                    data={plants}
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
        backgroundColor: "white",
    },
    plantsListContainer: {},
    plantsList: {
        paddingHorizontal: width * 0.03,
        paddingVertical: width * 0.08,
    },
});

export default MyPlantsScreen;
