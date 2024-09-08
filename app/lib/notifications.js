import * as Notifications from "expo-notifications";

export const requestPermissions = async () => {
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== "granted") {
        alert("Permission for notifications is required.");
    }
};

export const scheduleNotification = async (plant) => {
    await Notifications.scheduleNotificationAsync({
        content: {
            title: `Watering Time!`,
            body: `Water Your ${plant.name}`,
            sound: "default",
        },
        trigger: {
            date: plant.nextWateringTime,
        },
    });
};
