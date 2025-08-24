import mongoose from "mongoose";
import dotenv from "dotenv";
import Plant from "./models/Plant.js";

dotenv.config();

const plants = [
  {
    name: "Snake Plant",
    price: 399,
    categories: ["Indoor", "Air Purifying"],
    available: true,
  },
  {
    name: "Money Plant",
    price: 249,
    categories: ["Indoor", "Home Decor"],
    available: true,
  },
  {
    name: "Jade Plant",
    price: 299,
    categories: ["Succulent", "Indoor"],
    available: true,
  },
  {
    name: "Peace Lily",
    price: 499,
    categories: ["Indoor", "Air Purifying"],
    available: true,
  },
  {
    name: "Areca Palm",
    price: 699,
    categories: ["Indoor", "Home Decor"],
    available: true,
  },
  {
    name: "Aloe Vera",
    price: 199,
    categories: ["Succulent", "Air Purifying"],
    available: true,
  },
  {
    name: "Spider Plant",
    price: 349,
    categories: ["Indoor", "Air Purifying"],
    available: true,
  },
  {
    name: "Rubber Plant",
    price: 599,
    categories: ["Indoor", "Home Decor"],
    available: true,
  },
  {
    name: "Fiddle Leaf Fig",
    price: 899,
    categories: ["Indoor", "Home Decor"],
    available: true,
  },
  {
    name: "Cactus Mix",
    price: 299,
    categories: ["Succulent", "Outdoor"],
    available: true,
  },
  {
    name: "Boston Fern",
    price: 399,
    categories: ["Indoor", "Air Purifying"],
    available: true,
  },
  {
    name: "Pothos",
    price: 249,
    categories: ["Indoor", "Home Decor"],
    available: true,
  },
  {
    name: "ZZ Plant",
    price: 499,
    categories: ["Indoor", "Home Decor"],
    available: true,
  },
  {
    name: "Croton",
    price: 349,
    categories: ["Outdoor", "Home Decor"],
    available: true,
  },
  {
    name: "Bamboo Palm",
    price: 599,
    categories: ["Indoor", "Air Purifying"],
    available: true,
  },
  {
    name: "Aglaonema",
    price: 399,
    categories: ["Indoor", "Home Decor"],
    available: true,
  },
  {
    name: "Syngonium",
    price: 299,
    categories: ["Indoor", "Air Purifying"],
    available: true,
  },
  {
    name: "Dracaena",
    price: 499,
    categories: ["Indoor", "Home Decor"],
    available: true,
  },
  {
    name: "Philodendron",
    price: 349,
    categories: ["Indoor", "Home Decor"],
    available: true,
  },
  {
    name: "Sansevieria",
    price: 399,
    categories: ["Indoor", "Air Purifying"],
    available: true,
  },
  {
    name: "Succulent Echeveria",
    price: 199,
    categories: ["Succulent", "Indoor"],
    available: true,
  },
  {
    name: "Succulent Haworthia",
    price: 199,
    categories: ["Succulent", "Indoor"],
    available: true,
  },
  {
    name: "Succulent Sedum",
    price: 199,
    categories: ["Succulent", "Outdoor"],
    available: true,
  },
  {
    name: "Succulent Graptopetalum",
    price: 199,
    categories: ["Succulent", "Outdoor"],
    available: true,
  },
  {
    name: "Succulent Crassula",
    price: 199,
    categories: ["Succulent", "Indoor"],
    available: true,
  },
  {
    name: "Succulent Kalanchoe",
    price: 249,
    categories: ["Succulent", "Indoor"],
    available: true,
  },
  {
    name: "Succulent Aeonium",
    price: 249,
    categories: ["Succulent", "Outdoor"],
    available: true,
  },
  {
    name: "Succulent Gasteria",
    price: 249,
    categories: ["Succulent", "Indoor"],
    available: true,
  },
  {
    name: "Succulent Adromischus",
    price: 249,
    categories: ["Succulent", "Outdoor"],
    available: true,
  },
  {
    name: "Outdoor Hibiscus",
    price: 399,
    categories: ["Outdoor", "Home Decor"],
    available: true,
  },
  {
    name: "Outdoor Bougainvillea",
    price: 499,
    categories: ["Outdoor", "Home Decor"],
    available: true,
  },
  {
    name: "Outdoor Jasmine",
    price: 349,
    categories: ["Outdoor", "Home Decor"],
    available: true,
  },
  {
    name: "Outdoor Marigold",
    price: 199,
    categories: ["Outdoor", "Home Decor"],
    available: true,
  },
  {
    name: "Outdoor Rose",
    price: 299,
    categories: ["Outdoor", "Home Decor"],
    available: true,
  },
  {
    name: "Outdoor Petunia",
    price: 249,
    categories: ["Outdoor", "Home Decor"],
    available: true,
  },
  {
    name: "Outdoor Chrysanthemum",
    price: 349,
    categories: ["Outdoor", "Home Decor"],
    available: true,
  },
  {
    name: "Outdoor Dahlia",
    price: 399,
    categories: ["Outdoor", "Home Decor"],
    available: true,
  },
  {
    name: "Outdoor Zinnia",
    price: 199,
    categories: ["Outdoor", "Home Decor"],
    available: true,
  },
  {
    name: "Outdoor Sunflower",
    price: 299,
    categories: ["Outdoor", "Home Decor"],
    available: true,
  },
  {
    name: "Outdoor Lavender",
    price: 499,
    categories: ["Outdoor", "Home Decor"],
    available: true,
  },
  {
    name: "Outdoor Mint",
    price: 149,
    categories: ["Outdoor", "Home Decor"],
    available: true,
  },
  {
    name: "Outdoor Basil",
    price: 149,
    categories: ["Outdoor", "Home Decor"],
    available: true,
  },
  {
    name: "Outdoor Rosemary",
    price: 199,
    categories: ["Outdoor", "Home Decor"],
    available: true,
  },
  {
    name: "Outdoor Thyme",
    price: 199,
    categories: ["Outdoor", "Home Decor"],
    available: true,
  },
  {
    name: "Outdoor Oregano",
    price: 199,
    categories: ["Outdoor", "Home Decor"],
    available: true,
  },
  {
    name: "Outdoor Sage",
    price: 199,
    categories: ["Outdoor", "Home Decor"],
    available: true,
  },
  {
    name: "Outdoor Coriander",
    price: 149,
    categories: ["Outdoor", "Home Decor"],
    available: true,
  },
  {
    name: "Outdoor Parsley",
    price: 149,
    categories: ["Outdoor", "Home Decor"],
    available: true,
  },
];

// Seeder function
const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ MongoDB Connected for Seeding");

    await Plant.deleteMany();
    console.log("🗑️ Old plants deleted");

    await Plant.insertMany(plants);
    console.log("🌱 Sample plants inserted!");

    process.exit(); 
  } catch (err) {
    console.error("❌ Error seeding data:", err);
    process.exit(1);
  }
};

seedData();
