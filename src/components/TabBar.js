import React, { useState } from "react";

import { View, StyleSheet, Dimensions } from "react-native";
import TabBarItem from "./TabBarItem";

const TabBar = ({ state, navigation }) => {
  const handleChangeScreen = (activeTab, index) => {
    if (state.index !== index) {
      setSelected(activeTab);
      navigation.navigate(activeTab);
    }
  };

  const renderColorOfItem = (screenName) => {
    return screenName === selected ? "#10c5ab" : "black";
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
    height: height * 0.07,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default TabBar;
