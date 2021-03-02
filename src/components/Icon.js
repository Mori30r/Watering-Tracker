import React from "react";
import { Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";

const Icon = ({ size, name, color, pack, onPress, style }) => {
  const packages = {
    entypo: (
      <Entypo
        style={style}
        onPress={onPress}
        size={size}
        name={name}
        color={color}
      />
    ),
    ionIcons: (
      <Ionicons
        style={style}
        onPress={onPress}
        size={size}
        name={name}
        color={color}
      />
    ),
    material: (
      <MaterialIcons
        style={style}
        onPress={onPress}
        size={size}
        name={name}
        color={color}
      />
    ),
  };
  return packages[pack];
};

export default Icon;
