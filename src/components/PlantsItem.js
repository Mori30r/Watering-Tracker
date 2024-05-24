import React, { useEffect } from "react";
import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
    Dimensions,
    TouchableWithoutFeedback,
    Animated,
    Image,
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
                        borderRadius={5}
                        style={styles.plantsItemImage}
                        source={{ uri: imageURL }}
                    >
                        <View style={styles.plantsItemDetailContainer}>
                            <View style={styles.plantsItemTextContainer}>
                                <Text
                                    style={styles.plantsItemTextContainerDetail}
                                >
                                    Next Watering Time in
                                </Text>
                                <Text
                                    style={styles.plantsItemTextContainerTime}
                                >
                                    {timeToDay(nextWateringTime)} day
                                </Text>
                            </View>
                            <Ionicons
                                name="water-outline"
                                size={30}
                                color="white"
                            />
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
        marginTop: 5,
        marginBottom: 30,
    },
    plantsItemImage: {
        width: width,
        height: height * 0.2,
        overflow: "hidden",
        resizeMode: "cover",
    },
    plantsItemDetailContainer: {
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 40,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        backgroundColor: "rgba(0, 0, 0, .4)",
    },
    plantsItemTextContainer: {},
    plantsItemTextContainerDetail: {
        fontSize: 17,
        color: "white",
    },
    plantsItemTextContainerTime: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
    },
});

export default PlantsItem;
