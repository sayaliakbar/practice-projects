import { v4 as uuidv4 } from "uuid";
import { query, validationResult } from "express-validator";

let users = [];

export const getUsers = (req, res) => {
  res.send(users);
};

export const createUser = (req, res) => {
  const result = validationResult(req);
  if (result.isEmpty()) {
    const user = req.body;
    users.push({ id: uuidv4(), ...user });
    return res.send(`User with the name ${user.name} added to the database!`);
  }

  res.send({ errors: result.array() });
};

export const getUserById = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id == id);
  res.send(foundUser);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id != id);
  res.send(`User with the id ${id} deleted from the database.`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;

  const user = users.find((user) => user.id == id);
  const { name, age } = req.body;

  if (name) user.name = name;
  if (age) user.age = age;
  res.send(`User with the id ${id} has been updated`);
};
