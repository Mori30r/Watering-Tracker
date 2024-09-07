import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyPlantsScreen from "../screens/MyPlantsScreen";
import AddPlantScreen from "../screens/AddPlantScreen";
import ProfileScreen from "../screens/ProfileScreen";
import TabBar from "../components/TabBar";
import CameraScreen from "../screens/CameraScreen";
import DetailPlantScreen from "../screens/DetailPlantScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeAndDetail = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{ headerShown: false }}
                name={"Plants"}
                component={MyPlantsScreen}
            />
            <Stack.Screen
                options={{ headerShown: false }}
                name={"Detail"}
                component={DetailPlantScreen}
            />
        </Stack.Navigator>
    );
};

const HomeTab = () => {
    return (
        <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
            <Tab.Screen
                options={{
                    headerShown: false,
                }}
                name="Main"
                component={HomeAndDetail}
                initialParams={{ icon: "leaf" }}
            />
            <Tab.Screen
                options={{ headerShown: false }}
                name="Add"
                component={AddPlantScreen}
                initialParams={{ icon: "add-circle-outline" }}
            />
            <Tab.Screen
                // options={{ headerShown: false }}
                name="Profile"
                component={ProfileScreen}
                initialParams={{ icon: "person" }}
            />
        </Tab.Navigator>
    );
};

const MainNavigation = () => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen
                    options={{ headerShown: false }}
                    name={"Home"}
                    component={HomeTab}
                />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name={"Camera"}
                    component={CameraScreen}
                />
            </Stack.Navigator>
        </>
    );
};

export default MainNavigation;
