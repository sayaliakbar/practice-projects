import { v4 as uuidv4 } from "uuid";
let users = [];

export const getUsers = (req, res) => {
  res.send(users);
};

export const createUser = (req, res) => {
  const user = req.body;

  users.push({ id: uuidv4(), ...user });

  res.send(`User with the name ${user.name} added to the database!`);
};

export const getUserById = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id == id);
  res.send(foundUser);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id != id);
  console.log(users);
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
