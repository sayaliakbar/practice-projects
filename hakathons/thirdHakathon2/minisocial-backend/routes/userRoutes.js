const express = require("express");
const router = express.Router();
const {
  displayUsers,
  deleteUser,
  displayUserById,
} = require("../controllers/userController.js");
const isAdmin = require("../middlewares/adminMiddleware");

const protect = require("../middlewares/authMiddleware");

router.get("/", isAdmin, displayUsers);
router.get("/:id", protect, displayUserById);
router.delete("/:id", protect, deleteUser);

module.exports = router;
