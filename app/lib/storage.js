import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLANTS } from "../data/dummy";

export async function getPlants() {
    try {
        const jsonPlants = await AsyncStorage.getItem("plants");
        if (jsonPlants !== null) {
            const plantData = JSON.parse(jsonPlants);
            return plantData;
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
    const newPlant = { id: Date.now(), ...plantData };
    const plants = await getPlants();
    const updatedPlants = [...plants, newPlant];
    await savePlants(updatedPlants);
}

async function savePlants(plants) {
    try {
        const jsonPlants = JSON.stringify(plants);
        await AsyncStorage.setItem("plants", jsonPlants);
    } catch (error) {
        console.log("Error saving plants:", error);
    }
}

// export async function addDummyData() {
//     await savePlants(PLANTS);
// }

export async function resetStorage() {
    await AsyncStorage.setItem("plants", JSON.stringify([]));
}
