import React from "react";
import { StyleSheet, TouchableHighlight, Dimensions, View } from "react-native";
import Icon from "./Icon";

const AddButton = (props) => {
  return (
    <View>
      <TouchableHighlight underlayColor={"transparent"} onPress={props.onPress}>
        <Icon
          pack={"material"}
          style={styles.middleButton}
          onPress={props.onPress}
          color={props.color}
          name={props.icon}
          size={60}
        />
      </TouchableHighlight>
    </View>
  );
};

const { height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  middleButton: {
    bottom: height * 0.02,
    backgroundColor: "white",
    borderRadius: 50,
    padding: 5,
  },
});

export default AddButton;
