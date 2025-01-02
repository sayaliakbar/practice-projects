import { connect } from "mongoose";
import User from "./User.js";

connect("mongodb://127.0.0.1:27017/test")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

saveUser();

async function saveUser() {
  const user = new User({
    name: "Ali",
    email: "sayaliakbar@gmail.com",
    age: 25,
  });
  await user.save();
  console.log("User saved!");
}
