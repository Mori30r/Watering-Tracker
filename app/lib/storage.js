import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLANTS } from "../data/dummy";
import { scheduleNotification } from "./notifications";

export async function getPlants() {
    try {
        const jsonPlants = await AsyncStorage.getItem("plants");
        if (jsonPlants !== null) {
            const plants = JSON.parse(jsonPlants);
            return plants;
        } else {
            await AsyncStorage.setItem("plants", JSON.stringify([]));
            return [];
        }
    } catch (error) {
        console.log("Error loading plants:", error);
    }
}

export async function addPlant(plantName) {
    const plantData = PLANTS[plantName];
    const newPlant = {
        id: Date.now(),
        ...plantData,
    };
    const plants = await getPlants();
    const updatedPlants = [...plants, newPlant];
    await savePlants(updatedPlants);
}

export async function getWatered(wateredPlant) {
    const plants = await getPlants();
    const otherPlants = plants.filter((thisPlant) => {
        return thisPlant.id !== wateredPlant.id;
    });
    const currentDate = new Date();
    const futureDate = new Date();
    futureDate.setDate(currentDate.getDate() + wateredPlant.wateringInterval);
    wateredPlant.nextWateringTime = futureDate;
    await AsyncStorage.setItem(
        "plants",
        JSON.stringify([...otherPlants, wateredPlant])
    );
}

async function savePlants(plants) {
    try {
        const jsonPlants = JSON.stringify(plants);
        await AsyncStorage.setItem("plants", jsonPlants);
    } catch (error) {
        console.log("Error saving plants:", error);
    }
}

export async function resetStorage() {
    await AsyncStorage.setItem("plants", JSON.stringify([]));
}

export async function getPlant(id) {
    const plants = await getPlants();
    const plant = plants.filter((thisPlant) => {
        return thisPlant.id == id;
    });
    if (plant) {
        return plant[0];
    }
}
