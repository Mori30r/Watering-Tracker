import React from "react";
import { StyleSheet, TouchableHighlight, Dimensions, View } from "react-native";
import Icon from "./Icon";
import AddButton from "./AddButton";

const TabBarItem = (props) => {
  if (props.tab.name === "Add") {
    return <AddButton {...props} />;
  }
  return (
    <View style={styles.tabBarItemContainer}>
      <TouchableHighlight
        style={styles.tabContainer}
        underlayColor={"transparent"}
        onPress={props.onPress}
      >
        <Icon
          pack={"ionIcons"}
          onPress={props.onPress}
          color={props.color}
          name={props.icon}
          size={25}
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
});

export default TabBarItem;
