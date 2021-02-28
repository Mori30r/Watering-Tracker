import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MyPlantsScreen from "../screens/MyPlantsScreen";

const Stack = createStackNavigator();

function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={false}>
        <Stack.Screen name="plants" component={MyPlantsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
