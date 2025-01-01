import express from "express";
import { query, body } from "express-validator";

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

router.post(
  "/",
  [
    body("name").notEmpty().withMessage("no user name provided"),
    body("age")
      .notEmpty()
      .withMessage("age is empty")
      .isInt()
      .withMessage("must be a number"),
  ],

  createUser
);

router.get("/:id", getUserById);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

export default router;
