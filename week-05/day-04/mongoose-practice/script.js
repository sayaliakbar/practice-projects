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
  //Two ways to store data in the database

  try {
    // First way
    // const user = await User.create({
    //   name: "Ali",
    //   email: "newemail@gmail.com",
    //   age: 20,
    //   hobbies: ["Reading", "Coding"],
    //   address: {
    //     street: "123 Main St",
    //     city: "Karachi",
    //     country: "Pakistan",
    //   },

    //   bestFriend: "6776640bdaa81d0031e18725",
    // });
    const user = await User.find().byName("Ali");
    // user.sayHello();
    //Second way
    //   const user = new User({
    //     name: "Ali",
    //     email: "sayaliakbar@gmail.com",
    //     age: 25,
    //   });
    //   await user.save();

    console.log(user);
    // console.log("User saved!");
  } catch (err) {
    console.log("Error:", err.message);
  }
}
