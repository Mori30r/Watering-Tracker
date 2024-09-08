import * as TaskManager from "expo-task-manager";

export const BACKGROUND_NOTIFICATION_TASK = "background-notification-task";

TaskManager.defineTask(
    BACKGROUND_NOTIFICATION_TASK,
    async ({ data, error }) => {
        if (error) {
            console.error("Error in background task:", error);
            return;
        }

        if (data && data.notification) {
            const notification = data.notification;
            console.log(
                "Received notification in background task:",
                notification
            );

            // Handle the notification (e.g., update UI, fetch data)
        }
    }
);
