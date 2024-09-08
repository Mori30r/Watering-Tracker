import React from "react";
import {
    Image,
    View,
    StyleSheet,
    Dimensions,
    TouchableHighlight,
    TouchableOpacity,
} from "react-native";

const PlantsImage = ({ plant, navigation }) => {
    return (
        <View style={styles.imageContainer}>
            <TouchableOpacity
                onPress={() => navigation.navigate("Detail", { plant })}
            >
                <Image
                    blurRadius={1}
                    style={styles.image}
                    source={plant.image}
                />
            </TouchableOpacity>
        </View>
    );
};
const { width } = Dimensions.get("screen");
const styles = StyleSheet.create({
    imageContainer: {
        marginVertical: 10,
    },
    image: {
        width: width * 0.2,
        height: width * 0.2,
        margin: 5,
        borderRadius: 10,
    },
});

export default PlantsImage;
