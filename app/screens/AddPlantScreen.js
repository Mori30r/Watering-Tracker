import React, { useEffect, useState } from "react";

import {
    View,
    StyleSheet,
    Dimensions,
    Text,
    Image,
    TouchableHighlight,
} from "react-native";
import Icon from "../components/Icon";
import Colors from "../constants/Colors";
import { addPlant } from "../lib/storage";
import { PLANTS } from "../data/dummy";

const { height } = Dimensions.get("screen");
const BOTTOM_HEIGHT = height * 0.78;

const AddPlantScreen = (props) => {
    async function handleAddPlant() {
        await addPlant(plant.name);
        await props.navigation.navigate("Plants");
    }

    const [plant, setPlant] = useState(null);

    useEffect(() => {
        async function getDetectedPlant() {
            const detectedPlant = PLANTS[props.route.params.plantName];
            setPlant(detectedPlant);
        }
        getDetectedPlant();
    }, []);

    return (
        <View style={styles.detailPlant}>
            {plant ? (
                <>
                    <Image
                        source={{ uri: props.route.params.uri }}
                        style={[
                            styles.imageBackground,
                            StyleSheet.absoluteFillObject,
                        ]}
                    />
                    <View style={styles.header}>
                        <Icon
                            pack="ionIcons"
                            color="white"
                            size={30}
                            name="chevron-back-sharp"
                            onPress={() => props.navigation.goBack()}
                        />
                    </View>
                    <View style={styles.bottomDetail}>
                        <View style={styles.bottomDetailWatering}>
                            <View style={styles.bigDetailHead}>
                                <Text style={styles.bigBoldText}>
                                    {plant.name}
                                </Text>
                                <Image
                                    source={plant.image}
                                    style={styles.imagePlant}
                                />
                            </View>
                            <View style={styles.plantsInfoContainer}>
                                <Text
                                    style={[
                                        styles.mediumBoldText,
                                        { color: "black" },
                                    ]}
                                >
                                    Plants Info
                                </Text>
                                <View style={styles.plantsInfoLabels}>
                                    <Text style={styles.lightText}>
                                        Temperature
                                    </Text>
                                    <Text style={styles.lightText}>Light</Text>
                                    <Text style={styles.lightText}>
                                        Fertilizing
                                    </Text>
                                </View>
                                <View style={styles.plantsInfoDetails}>
                                    <View
                                        style={[
                                            styles.plantsInfoDetailItems,
                                            styles.plantsInfoDetailItemsLeft,
                                        ]}
                                    >
                                        <Text style={styles.smallBoldText}>
                                            {plant.temperature}
                                        </Text>
                                    </View>
                                    <View style={styles.plantsInfoDetailItems}>
                                        <Text style={styles.smallBoldText}>
                                            {plant.light}
                                        </Text>
                                    </View>
                                    <View
                                        style={[
                                            styles.plantsInfoDetailItems,
                                            styles.plantsInfoDetailItemsRight,
                                        ]}
                                    >
                                        <Text style={styles.smallBoldText}>
                                            {plant.fertilizing}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <>
                                <TouchableHighlight
                                    onPress={handleAddPlant}
                                    style={styles.addButton}
                                >
                                    <Text style={styles.mediumBoldText}>
                                        + Add To My Plants
                                    </Text>
                                </TouchableHighlight>
                            </>
                        </View>
                    </View>
                </>
            ) : (
                <Text>Loading</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    detailPlant: {
        flex: 1,
        backgroundColor: "black",
        padding: 10,
    },
    bottomDetail: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: BOTTOM_HEIGHT,
        justifyContent: "flex-end",
    },
    bottomDetailWatering: {
        height: "80%",
        backgroundColor: "white",
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        paddingHorizontal: 35,
        paddingTop: 20,
        gap: 35,
    },
    bigDetailHead: {
        gap: 20,
    },
    bigDetailHeadLeft: {},
    wateringInfoContainer: {},
    bigBoldText: {
        fontWeight: "bold",
        fontSize: 40,
    },
    mediumBoldText: {
        fontWeight: "bold",
        fontSize: 17,
        color: "white",
    },
    lightText: {
        color: "rgba(0, 0, 0, .7)",
    },
    smallBoldText: {
        fontWeight: "bold",
        fontSize: 14,
    },
    normalText: {
        fontSize: 14,
    },
    plantsInfoContainer: {},
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
    imagePlant: {
        height: 150,
        width: "100%",
        borderRadius: 10,
    },
    addButton: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.accentColor,
        width: "100%",
        height: 50,
        borderRadius: 10,
    },
});

export default AddPlantScreen;
