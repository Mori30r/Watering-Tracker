import React from "react";
import {
    Entypo,
    Ionicons,
    MaterialIcons,
    SimpleLineIcons,
} from "@expo/vector-icons";

const Icon = ({ size, name, color, pack, onPress, style, disabled }) => {
    const packages = {
        entypo: (
            <Entypo
                style={style}
                onPress={onPress}
                size={size}
                name={name}
                color={color}
                disabled={disabled || false}
            />
        ),
        ionIcons: (
            <Ionicons
                style={style}
                onPress={onPress}
                size={size}
                name={name}
                color={color}
                disabled={disabled || false}
            />
        ),
        material: (
            <MaterialIcons
                style={style}
                onPress={onPress}
                size={size}
                name={name}
                color={color}
                disabled={disabled || false}
            />
        ),
        simpleLine: (
            <SimpleLineIcons
                name={name}
                style={style}
                size={size}
                color={color}
                onPress={onPress}
                disabled={disabled || false}
            />
        ),
    };
    return packages[pack];
};

export default Icon;
