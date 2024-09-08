import React, { useEffect } from "react";
import * as Notifications from "expo-notifications";
import * as TaskManager from "expo-task-manager";
import { BACKGROUND_NOTIFICATION_TASK } from "./lib/taskManager";
import MainNavigation from "./navigation/MainNavigation";
import { enableScreens } from "react-native-screens";

enableScreens();

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
    }),
});

export default function App() {
    useEffect(() => {
        TaskManager.isTaskRegisteredAsync(BACKGROUND_NOTIFICATION_TASK);
    }, []);

    return <MainNavigation />;
}
