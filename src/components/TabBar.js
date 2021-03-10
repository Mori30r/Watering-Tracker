import React, { useState } from "react";
import Colors from "../constants/Colors";
import { StyleSheet, Dimensions, View } from "react-native";
import TabBarItem from "./TabBarItem";

const TabBar = ({ state, navigation }) => {
  const handleChangeScreen = (activeTab, index) => {
    if (state.index !== index) {
      if (index === 1) {
        navigation.navigate("Camera");
      } else {
        navigation.navigate(activeTab);
        setSelected(activeTab);
      }
    }
  };

  const renderColorOfItem = (screenName) => {
    return screenName === selected ? Colors.accentColor : "black";
  };

  const [selected, setSelected] = useState("Plants");
  const { routes } = state;
  return (
    <View style={styles.tabBar}>
      {routes.map((route, index) => (
        <TabBarItem
          onPress={() => handleChangeScreen(route.name, index)}
          tab={route}
          icon={route.params.icon}
          key={route.key}
          color={renderColorOfItem(route.name)}
        />
      ))}
    </View>
  );
};

const { height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    height: height * 0.07,
    backgroundColor: "white",
  },
});

export default TabBar;
