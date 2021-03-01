import * as React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import MyPlantsScreen from "../screens/MyPlantsScreen";
import AddPlantScreen from "../screens/AddPlantScreen";
import ProfileScreen from "../screens/ProfileScreen";

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
        <Tab.Screen
          options={{
            tabBarLabel: ({ focused }) => (
              <Text
                style={{ fontSize: 10, color: focused ? "#10C5AB" : "black" }}
              >
                Add New
              </Text>
            ),
            tabBarIcon: ({ size, focused }) => (
              <Entypo
                style={{
                  padding: 14,
                  backgroundColor: "white",
                  borderRadius: 50,
                  position: "absolute",
                  bottom: 5,
                  borderColor: focused ? "#10C5AB" : "rgba(0, 0, 0, .3)",
                  borderWidth: 0.4,
                  elevation: 1,
                }}
                name={"plus"}
                size={size}
                color={focused ? "#10C5AB" : "black"}
              />
            ),
          }}
          name="Add"
          component={AddPlantScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: ({ focused }) => (
              <Text
                style={{ fontSize: 10, color: focused ? "#10C5AB" : "black" }}
              >
                Profile
              </Text>
            ),
            tabBarIcon: ({ size, focused }) => (
              <Entypo
                name={"user"}
                size={size}
                color={focused ? "#10C5AB" : "black"}
              />
            ),
          }}
          name="Profile"
          component={ProfileScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
