import express from "express";

import { v4 as uuidv4 } from "uuid";

const router = express.Router();

let users = [];

//all routes are starting with /users
router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => {
  const user = req.body;

  users.push({ id: uuidv4(), ...user });

  res.send(`User with the name ${user.name} added to the database!`);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id == id);
  res.send(foundUser);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id != id);
  console.log(users);
  res.send(`User with the id ${id} deleted from the database.`);
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id == id);
  const { name, age } = req.body;

  if (name) user.name = name;
  if (age) user.age = age;
  res.send(`User with the id ${id} has been updated`);
});
export default router;
