import * as React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import MyPlantsScreen from "../screens/MyPlantsScreen";

const Tab = createBottomTabNavigator();

function MainNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Plants">
        <Tab.Screen
          options={{
            tabBarLabel: ({ focused }) => (
              <Text
                style={{ fontSize: 10, color: focused ? "#10C5AB" : "black" }}
              >
                My Plants
              </Text>
            ),
            tabBarIcon: ({ size, focused }) => (
              <Entypo
                name={"leaf"}
                size={size}
                color={focused ? "#10C5AB" : "black"}
              />
            ),
          }}
          name="Plants"
          component={MyPlantsScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
