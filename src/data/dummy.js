import faker from "faker";

export const PLANTS = [
  {
    title: faker.commerce.productName(),
    imageURL: faker.image.animals(),
    nextWateringTime: 32,
  },
  {
    title: faker.commerce.productName(),
    imageURL: faker.image.cats(),
    nextWateringTime: 150,
  },
  {
    title: faker.commerce.productName(),
    imageURL: faker.image.fashion(),
    nextWateringTime: 12,
  },
  {
    title: faker.commerce.productName(),
    imageURL: faker.image.city(),
    nextWateringTime: 56,
  },
  {
    title: faker.commerce.productName(),
    imageURL: faker.image.technics(),
    nextWateringTime: 71,
  },
  {
    title: faker.commerce.productName(),
    imageURL: faker.image.food(),
    nextWateringTime: 24,
  },
  {
    title: faker.commerce.productName(),
    imageURL: faker.image.nightlife(),
    nextWateringTime: 48,
  },
];
