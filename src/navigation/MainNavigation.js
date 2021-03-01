import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MyPlantsScreen from "../screens/MyPlantsScreen";
import AddPlantScreen from "../screens/AddPlantScreen";
import ProfileScreen from "../screens/ProfileScreen";
import TabBar from "../components/TabBar";

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
};

export default MainNavigation;
