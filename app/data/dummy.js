const Ageratum = require("../../assets/Ageratum.jpg");
const Croton = require("../../assets/Croton.jpg");
const Ferns = require("../../assets/Ferns.jpg");
const Hydrangeas = require("../../assets/Hydrangeas.jpg");
const Iris = require("../../assets/Iris.jpg");
const Judas = require("../../assets/Judas.jpg");
const Orchid = require("../../assets/Orchid.jpg");
const Radiator = require("../../assets/Radiator.jpg");
const Rose = require("../../assets/Rose.jpg");
const Rubber = require("../../assets/Rubber.jpg");
const Sansevieria = require("../../assets/Sansevieria.jpg");
const Spilanthes = require("../../assets/Spilanthes.jpg");
const Sunflower = require("../../assets/Sunflower.jpg");

export const PLANTS = {
    Ageratum: {
        name: "Ageratum",
        image: Ageratum,
        description:
            "Commonly known as floss flower, this member of the Aster family includes 40 species of annuals, perennials, and shrubs native to tropical and subtropical regions of North and South America. Billygoat weed (Ageratum conyzoides), which has herbal and medicinal qualities, is highly invasive, primarily in Africa, but can also be found growing wild in parts of the Southern US. The ornamental varieties available to home gardeners are grown as annuals, and are attractive to butterflies, hummingbirds, and insect pollinators.",
        temperature: "15 - 25°C",
        light: "Full sun",
        wateringInterval: 3,
        nextWateringTime: 0,
        fertilizing: "4-6 weeks",
    },
    "Crotons Plant": {
        name: "Croton",
        image: Croton,
        description:
            "Crotons are vibrant, tropical plants known for their striking multicolored leaves, which can range from green, yellow, orange, red, to even purple. They are popular for indoor and outdoor gardening because of their bold, decorative appearance. Crotons can grow up to 3-6 feet in height, depending on the variety and conditions.",
        temperature: "15 - 29°C",
        light: "Indirect",
        wateringInterval: 7,
        nextWateringTime: 0,
        fertilizing: "4-6 weeks",
    },
    "Ferns plant": {
        name: "Ferns",
        image: Ferns,
        description:
            "Ferns are non-flowering plants that reproduce via spores. They come in a variety of shapes and sizes, from small, delicate species like the Maidenhair Fern to large, hardy types like the Boston Fern. Ferns are valued for their ability to purify air and add a natural, tropical feel to any space.",
        temperature: "15 - 24°C",
        light: "Indirect",
        wateringInterval: 4,
        nextWateringTime: 0,
        fertilizing: "4-6 weeks",
    },
    Hydrangea: {
        name: "Hydrangeas",
        image: Hydrangeas,
        description:
            "Hydrangeas are deciduous shrubs that can grow between 3 to 15 feet tall, depending on the species. The color of the flowers can vary based on the pH of the soil—acidic soils often produce blue flowers, while alkaline soils tend to produce pink ones. Hydrangeas are commonly grown in gardens for their stunning, large blooms that appear in late spring through summer.",
        temperature: "10 - 21°C",
        light: "Morning Sun",
        wateringInterval: 3,
        nextWateringTime: 0,
        fertilizing: "in spring",
    },
    Iris: {
        name: "Iris",
        image: Iris,
        description:
            "Irises feature distinctive blooms with three large outer petals and three smaller inner petals. They grow from rhizomes or bulbs and are available in different species, including Bearded Iris, Siberian Iris, and Japanese Iris, each with slightly different care needs. Their height can range from 1 to 3 feet, depending on the variety.",
        temperature: "4 - 29°C",
        light: "Full Sun",
        wateringInterval: 7,
        nextWateringTime: 0,
        fertilizing: "in spring",
    },
    "Judas-tree": {
        name: "Judas",
        image: Judas,
        description:
            "Irises feature distinctive blooms with three large outer petals and three smaller inner petals. They grow from rhizomes or bulbs and are available in different species, including Bearded Iris, Siberian Iris, and Japanese Iris, each with slightly different care needs. Their height can range from 1 to 3 feet, depending on the variety.",
        temperature: "4 - 29°C",
        light: "Full Sun",
        wateringInterval: 7,
        nextWateringTime: 0,
        fertilizing: "in spring",
    },
    Orchid: {
        name: "Orchid",
        image: Orchid,
        description:
            " The Judas Tree typically grows to a height of 10-20 feet (3-6 meters) and spreads out to about the same width. In spring, it bursts into clusters of deep pink to purple pea-shaped flowers that emerge before the leaves, creating a stunning visual contrast. Its foliage consists of heart-shaped leaves that start as bronze and mature into a lush green.",
        temperature: "10 - 24°C",
        light: "Full Sun",
        wateringInterval: 12,
        nextWateringTime: 0,
        fertilizing: "monthly",
    },
    "Radiator plant": {
        name: "Radiator",
        image: Radiator,
        description:
            "Peperomias come in a variety of leaf shapes, sizes, and colors. Some species have thick, succulent-like leaves, while others have delicate, heart-shaped or textured foliage. Common varieties include Peperomia obtusifolia (with rounded, glossy leaves), Peperomia caperata (with rippled leaves), and Peperomia argyreia (Watermelon Peperomia, known for its striking silver stripes).",
        temperature: "18 - 27°C",
        light: "Indirect",
        wateringInterval: 8,
        nextWateringTime: 0,
        fertilizing: "monthly",
    },
    Rose: {
        name: "Rose",
        image: Rose,
        description:
            "Roses are perennial shrubs with thorny stems and stunning flowers that range from classic red to shades of pink, yellow, white, and even purple. Roses are known for their symbolic value and fragrance. Depending on the type, they can grow as compact shrubs, trailing climbers, or large bushes.",
        temperature: "15 - 24°C",
        light: "Full Sun",
        wateringInterval: 7,
        nextWateringTime: 0,
        fertilizing: "4-6 weeks",
    },
    "Rubber Plant": {
        name: "Rubber",
        image: Rubber,
        description:
            "The Rubber Plant is an evergreen shrub or small tree that can grow up to 100 feet (30 meters) in its native habitat but usually remains much smaller indoors. It features large, leathery leaves that are often dark green, though some varieties have variegated or reddish leaves.",
        temperature: "18 - 27°C",
        light: "Indirect",
        wateringInterval: 10,
        nextWateringTime: 0,
        fertilizing: "4-6 weeks",
    },
    "Sansevieria plant": {
        name: "Sansevieria",
        image: Sansevieria,
        description:
            "Sansevieria features long, upright leaves that can grow up to 3-4 feet (90-120 cm) tall, depending on the variety. The leaves are typically green with distinctive banded patterns or stripes. The plant has a sturdy, architectural appearance and is known for its air-purifying qualities.",
        temperature: "15 - 27°C",
        light: "Indirect",
        wateringInterval: 28,
        nextWateringTime: 0,
        fertilizing: "monthly",
    },
    Spilanthes: {
        name: "Spilanthes",
        image: Spilanthes,
        description:
            "Spilanthes is a perennial herb that typically grows to about 12-18 inches (30-45 cm) in height. It features round, yellow flowers with a central red disc, which are reminiscent of small, daisy-like blooms. The leaves are broad and green, with a slightly serrated edge.",
        temperature: "15 - 24°C",
        light: "Full Sun",
        wateringInterval: 3,
        nextWateringTime: 0,
        fertilizing: "4-6 weeks",
    },
    sunflower: {
        name: "Sunflower",
        image: Sunflower,
        description:
            "Sunflowers are annual plants that can grow from 1 to 12 feet (0.3 to 3.7 meters) tall, depending on the variety. They feature large, showy blooms with a central disc surrounded by bright, petal-like rays. The leaves are broad and heart-shaped.",
        temperature: "21 - 29°C",
        light: "Full Sun",
        wateringInterval: 1,
        nextWateringTime: 0,
        fertilizing: "6 inches",
    },
};

//  Plant(name, image, desc, temperature, light, wateringInterval, nextWateringTime)
