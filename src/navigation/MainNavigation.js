import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import MyPlantsScreen from "../screens/MyPlantsScreen";
import AddPlantScreen from "../screens/AddPlantScreen";
import ProfileScreen from "../screens/ProfileScreen";
import TabBar from "../components/TabBar";
import CameraScreen from "../screens/CameraScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen
        name="Plants"
        component={MyPlantsScreen}
        initialParams={{ icon: "leaf" }}
      />
      <Tab.Screen
        name="Add"
        component={AddPlantScreen}
        initialParams={{ icon: "add-circle-outline" }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        initialParams={{ icon: "md-person-sharp" }}
      />
    </Tab.Navigator>
  );
};
const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={false}>
        <Stack.Screen name={"Home"} component={HomeTab} />
        <Stack.Screen name={"Camera"} component={CameraScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
