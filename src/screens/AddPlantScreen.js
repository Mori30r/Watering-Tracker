import React, { useState } from "react";

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
import { faker } from "@faker-js/faker";

const { width, height } = Dimensions.get("screen");
const BOTTOM_HEIGHT = height * 0.78;
const IMAGE_HEIGHT = height * 0.7;

const AddPlantScreen = (props) => {
    const [clicked, setClicked] = useState(false);
    return (
        <View style={styles.detailPlant}>
            <Image
                source={{
                    uri: faker.image.urlLoremFlickr({ category: "animals" }),
                }}
                style={[styles.imageBackground, StyleSheet.absoluteFillObject]}
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
                        <Text style={styles.bigBoldText}>Title</Text>
                        <Image
                            source={{
                                uri: faker.image.urlLoremFlickr({
                                    category: "plant",
                                }),
                            }}
                            style={styles.imagePlant}
                        />
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
                    <>
                        <TouchableHighlight
                            onPress={() => props.navigation.navigate("Plants")}
                            style={styles.addButton}
                        >
                            <Text style={styles.mediumBoldText}>
                                + Add To My Plants
                            </Text>
                        </TouchableHighlight>
                    </>
                </View>
            </View>
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
        fontSize: 17,
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
