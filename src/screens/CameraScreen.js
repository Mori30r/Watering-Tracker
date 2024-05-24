import React, { useEffect, useRef, useState } from "react";
import { CameraView, useCameraPermissions } from "expo-camera";
import {
    Text,
    View,
    StyleSheet,
    Alert,
    Dimensions,
    Animated,
    TouchableWithoutFeedback,
} from "react-native";
import Icon from "../components/Icon";
import { detectPlant } from "../network/detectPlant";

const CameraScreen = (props) => {
    const [facing, setFacing] = useState("back");
    const [permission, requestPermission] = useCameraPermissions();
    const [flash, setFlash] = useState(false);
    const [isCameraReady, setIsCameraReady] = useState(false);
    const camera = useRef();
    const [loading, setLoading] = useState(false);
    const takeImageAnimationValue = useRef(new Animated.Value(0)).current;
    const loadingAnimationRotateValue = useRef(new Animated.Value(0)).current;

    const loadingAnimationOpacityAndScaleValue = useRef(
        new Animated.Value(0)
    ).current;

    useEffect(() => {
        requestPermission();
    }, []);

    const startLoadingAnimation = () => {
        Animated.timing(loadingAnimationOpacityAndScaleValue, {
            duration: 250,
            toValue: 1,
            useNativeDriver: true,
        }).start(() => {
            Animated.timing(loadingAnimationRotateValue, {
                duration: 2500,
                toValue: 1,
                useNativeDriver: true,
            }).start();
        });
    };

    const handleTakeImage = async () => {
        if (isCameraReady) {
            Animated.timing(takeImageAnimationValue, {
                toValue: 1,
                duration: 250,
                useNativeDriver: true,
            }).start(() => {
                setLoading(true);
                startLoadingAnimation();
            });
            // const image = await camera.current.takePictureAsync();
            // console.log(image.uri);
            // const response = await detectPlant(image.uri);
            props.navigation.navigate("Add");
        }
    };

    const takeImageIconScaleInterpolate = takeImageAnimationValue.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0.8],
    });
    const takeImageIconOpacityInterpolate = takeImageAnimationValue.interpolate(
        {
            inputRange: [0, 1],
            outputRange: [1, 0],
        }
    );
    const takeImageLoadingRotateInterpolate =
        loadingAnimationRotateValue.interpolate({
            inputRange: [0, 1],
            outputRange: ["0deg", "360deg"],
        });
    const takeImageLoadingOpacityAndScaleInterpolate =
        loadingAnimationOpacityAndScaleValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
        });

    if (!permission) {
        return <View />;
    }

    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: "center" }}>
                    We need your permission to show the camera
                </Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }

    function toggleCameraFacing() {
        setFacing((current) => (current === "back" ? "front" : "back"));
    }

    return (
        <CameraView
            autoFocus={true}
            ratio={"16:9"}
            facing={facing}
            flash={flash ? "on" : "off"}
            ref={camera}
            onCameraReady={() => setIsCameraReady(true)}
            style={styles.camera}
        >
            <View style={styles.headIcons}>
                <Icon
                    style={styles.icons}
                    pack="ionIcons"
                    size={40}
                    name="chevron-back-sharp"
                    color="white"
                    onPress={() => props.navigation.goBack()}
                />
                <Icon
                    style={styles.icons}
                    onPress={() => setFlash((prevState) => !prevState)}
                    pack="ionIcons"
                    size={30}
                    name={flash ? "flash" : "flash-off"}
                    color="white"
                />
            </View>
            <View style={styles.frame}>
                <Icon
                    style={styles.icons}
                    pack="simpleLine"
                    color="white"
                    size={width * 0.5}
                    name="frame"
                />
            </View>
            <View style={styles.takeImageContainer}>
                <TouchableWithoutFeedback onPress={handleTakeImage}>
                    {loading ? (
                        <Animated.View
                            style={{
                                transform: [
                                    {
                                        rotate: takeImageLoadingRotateInterpolate,
                                    },
                                    {
                                        scale: takeImageLoadingOpacityAndScaleInterpolate,
                                    },
                                ],
                                opacity:
                                    takeImageLoadingOpacityAndScaleInterpolate,
                            }}
                        >
                            <Icon
                                pack="ionIcons"
                                size={50}
                                name="reload"
                                color="white"
                            />
                        </Animated.View>
                    ) : (
                        <Animated.View
                            style={[
                                styles.circle,
                                styles.icons,
                                {
                                    transform: [
                                        {
                                            scale: takeImageIconScaleInterpolate,
                                        },
                                    ],
                                    opacity: takeImageIconOpacityInterpolate,
                                },
                            ]}
                        />
                    )}
                </TouchableWithoutFeedback>
            </View>
        </CameraView>
    );
};

const { width, height } = Dimensions.get("screen");
const styles = StyleSheet.create({
    camera: {
        flex: 1,
    },
    frame: {
        position: "absolute",
        width,
        justifyContent: "center",
        alignItems: "center",
        height,
    },
    headIcons: {
        width,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
    },
    takeImageContainer: {
        position: "absolute",
        bottom: 20,
        width,
        alignItems: "center",
    },
    circle: {
        width: width * 0.175,
        height: width * 0.175,
        borderRadius: width * 0.1,
        borderWidth: 5,
        borderColor: "white",
    },
    icons: {
        elevation: 10,
    },
});

export default CameraScreen;
