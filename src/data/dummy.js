import { faker } from "@faker-js/faker";

export const PLANTS = [
    {
        title: faker.commerce.productName(),
        imageURL: faker.image.urlLoremFlickr({ category: "animals" }),
        nextWateringTime: 32,
    },
    {
        title: faker.commerce.productName(),
        imageURL: faker.image.urlLoremFlickr({ category: "cats" }),
        nextWateringTime: 150,
    },
    {
        title: faker.commerce.productName(),
        imageURL: faker.image.urlLoremFlickr({ category: "fashion" }),
        nextWateringTime: 12,
    },
    {
        title: faker.commerce.productName(),
        imageURL: faker.image.urlLoremFlickr({ category: "city" }),
        nextWateringTime: 56,
    },
    {
        title: faker.commerce.productName(),
        imageURL: faker.image.urlLoremFlickr({ category: "technics" }),
        nextWateringTime: 71,
    },
    {
        title: faker.commerce.productName(),
        imageURL: faker.image.urlLoremFlickr({ category: "foods" }),
        nextWateringTime: 24,
    },
    {
        title: faker.commerce.productName(),
        imageURL: faker.image.urlLoremFlickr({ category: "nightlife" }),
        nextWateringTime: 48,
    },
];
