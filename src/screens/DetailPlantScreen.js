import React, { useRef, useState } from "react";

import {
    View,
    StyleSheet,
    Dimensions,
    Animated,
    PanResponder,
    Text,
    FlatList,
    TouchableWithoutFeedback,
} from "react-native";
import Icon from "../components/Icon";
import Colors from "../constants/Colors";
import { PLANTS } from "../data/dummy";
import PlantsImage from "../components/PlantsImage";
import { LineChart } from "react-native-chart-kit";

const { width, height } = Dimensions.get("screen");
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
    const bottomDrawerInputRange = [height * 0.1, height];
    const bottomWateringInfoInputRange = [-height, -height + height / 2.1, 0];
    const bottomHeadInputRange = [-height, -height + height - height / 8, 0];
    const bottomPlantsInfoInputRange = [-height, -height + height / 2, 0];
    const scrollYChartInterpolate = scrollYChart.interpolate({
        inputRange: bottomDrawerInputRange,
        outputRange: [height * 0.39, height * 0.68],
    });
    const scrollYDetailInterpolate = scrollYDetail.interpolate({
        inputRange: bottomDrawerInputRange,
        outputRange: [height * 0.6, height * 0.9],
    });
    const scrollYDetailHeadLeftInterpolate = scrollYDetail.interpolate({
        inputRange: bottomHeadInputRange,
        outputRange: [0, -height / 16, 0],
        extrapolate: "clamp",
    });
    const imageHeightInterpolate = scrollYChart.interpolate({
        inputRange: bottomDrawerInputRange,
        outputRange: [height * 0.7, height * 0.8],
    });
    const scrollYDetailWateringInfoOpacityInterpolate =
        scrollYDetail.interpolate({
            inputRange: bottomWateringInfoInputRange,
            outputRange: [1.5, 0, 0],
        });
    const scrollYDetailPlantsInfoOpacityInterpolate = scrollYDetail.interpolate(
        {
            inputRange: bottomPlantsInfoInputRange,
            outputRange: [1, 0, 0],
        }
    );
    const scrollYDetailWateringInfoTransformInterpolate =
        scrollYDetail.interpolate({
            inputRange: bottomWateringInfoInputRange,
            outputRange: [0, -height / 16, -height / 6],
            extrapolate: "clamp",
        });
    const scrollYDetailPlantsInfoTransformInterpolate =
        scrollYDetail.interpolate({
            inputRange: bottomPlantsInfoInputRange,
            outputRange: [0, -height / 6, -height / 2.5],
            extrapolate: "clamp",
        });
    const scrollYChartOpacityInterpolate = scrollYChart.interpolate({
        inputRange: [-height, height * 0.2],
        outputRange: [1, -1],
    });
    const scrollYChartTransformInterpolate = scrollYChart.interpolate({
        inputRange: [-height, height * 0.2],
        outputRange: [0, -height * 0.2],
    });
    const scrollYChartScaleInterpolate = scrollYChart.interpolate({
        inputRange: [-height, height * 0.2],
        outputRange: [1, 0.5],
    });

    const [clicked, setClicked] = useState(false);
    return (
        <View style={styles.detailPlant}>
            <Animated.Image
                source={{ uri: imageURL }}
                style={[
                    styles.imageBackground,
                    StyleSheet.absoluteFillObject,
                    {
                        height: imageHeightInterpolate,
                    },
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
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.bottomDetail}>
                <Animated.View
                    {...panResponder("chart").panHandlers}
                    style={[
                        styles.bottomDetailChart,
                        { top: scrollYChartInterpolate },
                    ]}
                >
                    <Animated.View style={[styles.plantsListContainer]}>
                        <Animated.Text
                            style={[styles.smallBoldText, { color: "white" }]}
                        >
                            Plants Ready for Watering
                        </Animated.Text>
                        <View style={styles.plantsList}>
                            <FlatList
                                keyExtractor={(item, index) => index.toString()}
                                data={PLANTS}
                                renderItem={(item) => (
                                    <PlantsImage uri={item.item.imageURL} />
                                )}
                                horizontal
                            />
                            <View style={styles.chartContainer}>
                                <Animated.Text
                                    style={[
                                        styles.smallBoldText,
                                        {
                                            color: "white",
                                            opacity:
                                                scrollYChartOpacityInterpolate,
                                        },
                                    ]}
                                >
                                    Weekly WorkLoad
                                </Animated.Text>
                                <Animated.View
                                    style={[
                                        styles.chart,
                                        {
                                            opacity:
                                                scrollYChartOpacityInterpolate,
                                            top: scrollYChartTransformInterpolate,
                                            transform: [
                                                {
                                                    scale: scrollYChartScaleInterpolate,
                                                },
                                            ],
                                        },
                                    ]}
                                >
                                    <LineChart
                                        withDots={true}
                                        withInnerLines={false}
                                        withVerticalLines={false}
                                        withHorizontalLines={false}
                                        data={{
                                            labels: [
                                                "Sat",
                                                "Sun",
                                                "Mon",
                                                "Tue",
                                                "Wen",
                                                "Thu",
                                                "Fri",
                                            ],
                                            datasets: [
                                                {
                                                    data: [
                                                        Math.random() * 100,
                                                        Math.random() * 100,
                                                        Math.random() * 100,
                                                        Math.random() * 100,
                                                        Math.random() * 100,
                                                        Math.random() * 100,
                                                        Math.random() * 100,
                                                    ],
                                                },
                                            ],
                                        }}
                                        width={width}
                                        height={200}
                                        yAxisInterval={7}
                                        chartConfig={{
                                            backgroundGradientToOpacity: 0,
                                            backgroundGradientFromOpacity: 0,
                                            decimalPlaces: 0,
                                            fillShadowGradient:
                                                Colors.accentColor,
                                            fillShadowGradientOpacity: 0.7,
                                            color: () => Colors.accentColor,
                                            labelColor: () =>
                                                "rgba(255, 255, 255, .8)",
                                            propsForDots: {
                                                r: "5",
                                                strokeWidth: "2",
                                                stroke: Colors.accentColor,
                                            },
                                        }}
                                        bezier
                                        style={{
                                            marginTop: 20,
                                        }}
                                    />
                                </Animated.View>
                            </View>
                        </View>
                    </Animated.View>
                </Animated.View>
                <Animated.View
                    {...panResponder("detail").panHandlers}
                    style={[
                        styles.bottomDetailWatering,
                        { top: scrollYDetailInterpolate },
                    ]}
                >
                    <View style={styles.bigDetailHead}>
                        <Animated.View
                            style={[
                                styles.bigDetailHeadLeft,
                                { bottom: scrollYDetailHeadLeftInterpolate },
                            ]}
                        >
                            <Text style={styles.text}>Next Watering in</Text>
                            <Text style={styles.bigBoldText}>
                                {nextWateringTime % 24} days
                            </Text>
                            <Text style={styles.lightText}>
                                watering every 7 days
                            </Text>
                        </Animated.View>
                        <View style={styles.bigDetailHeadRight}>
                            <View
                                style={styles.bigDetailHeadRightIconContainer}
                            >
                                <Icon
                                    pack="ionIcons"
                                    color="white"
                                    size={40}
                                    name={clicked ? "checkmark" : "water"}
                                    onPress={() => setClicked(true)}
                                />
                            </View>
                        </View>
                    </View>
                    <Animated.View
                        style={[
                            styles.wateringInfoContainer,
                            {
                                opacity:
                                    scrollYDetailWateringInfoOpacityInterpolate,
                                bottom: scrollYDetailWateringInfoTransformInterpolate,
                            },
                        ]}
                    >
                        <Text
                            style={[
                                styles.smallBoldText,
                                {
                                    paddingBottom: 10,
                                },
                            ]}
                        >
                            Watering Info
                        </Text>
                        <Text style={styles.normalText}>
                            Soooo This Should be a dummy text in development but
                            i'm too lazy to search for dummy text.
                        </Text>
                    </Animated.View>
                    <Animated.View
                        style={[
                            styles.plantsInfoContainer,
                            {
                                opacity:
                                    scrollYDetailPlantsInfoOpacityInterpolate,
                                bottom: scrollYDetailPlantsInfoTransformInterpolate,
                            },
                        ]}
                    >
                        <Animated.Text style={styles.smallBoldText}>
                            Plants Info
                        </Animated.Text>
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
                    </Animated.View>
                </Animated.View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    detailPlant: {
        flex: 1,
        backgroundColor: "black",
    },
    header: {
        padding: 10,
        width: width / 1.5,
    },
    title: {
        fontWeight: "bold",
        color: "white",
        fontSize: 45,
    },
    imageBackground: {
        height: IMAGE_HEIGHT,
        opacity: 0.6,
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
        backgroundColor: "#001510",
        opacity: 0.9,
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        height: "100%",
    },
    bottomDetailWatering: {
        height: "90%",
        backgroundColor: "white",
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
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
    plantsListContainer: {
        paddingTop: 30,
        paddingLeft: 10,
    },
    chartContainer: {},
    chart: {
        justifyContent: "center",
        alignItems: "center",
    },
});

export default DetailPlantScreen;
