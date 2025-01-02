import mongoose from "mongoose";

import Grocery from "./models/grocery.js";
import Account from "./models/accounts.js";

mongoose
  .connect("mongodb://127.0.0.1:27017/grocery-app")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB");
    console.log(error);
  });

async function createSampleData() {
  const grocery = new Grocery({
    name: "Apple",
    price: 2.5,
    category: "Fruits",
    stock: 100,
    description: "Fresh red apples",
  });
  await grocery.save();

  const account = new Account({
    name: "John Doe",
    email: "john@example.com",
    password: "securepassword",
    role: "admin",
  });
  await account.save();

  console.log("Sample data created!");
}

createSampleData();
