import React from "react";
import { StyleSheet, TouchableHighlight, Dimensions, View } from "react-native";
import Icon from "./Icon";

const AddButton = (props) => {
    return (
        <View style={styles.container}>
            <TouchableHighlight
                underlayColor={"transparent"}
                onPress={props.onPress}
            >
                <Icon
                    pack={"material"}
                    style={styles.middleButton}
                    onPress={props.onPress}
                    color={props.color}
                    name={props.icon}
                    size={70}
                />
            </TouchableHighlight>
        </View>
    );
};

const { height, width } = Dimensions.get("screen");

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        height: height / 2,
        width: width / 5,
    },
    middleButton: {
        bottom: height * 0.24,
        backgroundColor: "white",
        borderRadius: 50,
        padding: 5,
    },
});

export default AddButton;
