import React from "react";
import { StyleSheet, View, TouchableHighlight, Dimensions } from "react-native";
import Icon from "./Icon";

const TabBarItem = (props) => {
  return (
    <View style={styles.tabBarItemContainer}>
      <TouchableHighlight
        style={styles.tabContainer}
        underlayColor={"white"}
        onPress={props.onPress}
      >
        <Icon
          pack={"ionIcons"}
          style={props.tab.name === "Add" && styles.middleButton}
          onPress={props.onPress}
          color={props.color}
          name={props.icon}
          size={props.tab.name === "Add" ? 60 : 25}
        />
      </TouchableHighlight>
    </View>
  );
};
const { height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  tabBarItemContainer: {
    flex: 1,
  },
  tabContainer: {
    height: height * 0.07,
    justifyContent: "center",
    alignItems: "center",
  },
  middleButton: {
    position: "absolute",
    bottom: 10,
    backgroundColor: "white",
    borderRadius: 100,
    padding: 5,
    paddingRight: 0,
  },
});

export default TabBarItem;
