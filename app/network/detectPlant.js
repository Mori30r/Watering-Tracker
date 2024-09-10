const URL = process.env.API_URL;

export const detectPlant = async (imageUri) => {
    const image = { uri: imageUri, name: "test.jpg", type: "image/jpg" };
    const body = new FormData();
    body.append("image", image);
    const res = await fetch(URL, {
        method: "POST",
        body,
    });
    const data = await res.json();
    return data["predicted_label"];
};
