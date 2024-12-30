import express from "express";

import {
  getUsers,
  createUser,
  getUserById,
  deleteUser,
  updateUser,
} from "../controllers/users.js";

const router = express.Router();

//all routes are starting with /users
router.get("/", getUsers);

router.post("/", createUser);

router.get("/:id", getUserById);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

export default router;
